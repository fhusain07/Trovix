import test from "node:test";
import assert from "node:assert/strict";
import {
  validateInquiry,
  inquiryEmail,
  approvedInquiryEndpoint,
} from "../src/lib/inquiry.ts";

const valid = {
  name: "Alex Example",
  email: "alex@example.com",
  company: "Example Agency",
  service: "Custom Software Development",
  message: "We need a workspace to manage sales follow-ups.",
  requirements: "A scoped CRM integration",
  website: "https://example.com",
};
test("project inquiry accepts complete details without optional fields", () => {
  assert.deepEqual(
    validateInquiry({ ...valid, company: "", website: "" }, "project"),
    {},
  );
});
test("invalid email, short message, and missing selection report accessible field errors", () => {
  const errors = validateInquiry(
    { ...valid, name: " ", email: "not-an-email", message: "Hi", service: "" },
    "project",
  );
  assert.deepEqual(Object.keys(errors).sort(), [
    "email",
    "message",
    "name",
    "service",
  ]);
});
test("partnership validation requires company and requirements; rejects unsafe websites", () => {
  const errors = validateInquiry(
    { ...valid, company: "", requirements: "", website: "javascript:alert(1)" },
    "partnership",
  );
  assert.ok(errors.company && errors.requirements && errors.website);
});
test("honeypot submissions are never accepted as successes", () => {
  assert.ok(
    validateInquiry(
      { ...valid, website_confirmation: "filled by bot" },
      "project",
    ).form,
  );
});
test("email draft safely encodes content and excludes the spam field", () => {
  const draft = inquiryEmail(
    {
      ...valid,
      message: "Request & details? Unicode: \u20b9",
      website_confirmation: "private",
    },
    "project",
  );
  assert.ok(
    draft.startsWith(
      "mailto:info@trovixtech.com?subject=Project%20inquiry&body=",
    ),
  );
  assert.ok(
    draft.includes("%26") &&
      draft.includes("%3F") &&
      draft.includes("%E2%82%B9"),
  );
  assert.ok(!draft.includes("private"));
});
test("only known HTTPS form hosts or a same-origin API can receive inquiries", () => {
  assert.equal(approvedInquiryEndpoint(undefined), null);
  assert.equal(
    approvedInquiryEndpoint("https://formspree.io/f/abc123"),
    "https://formspree.io/f/abc123",
  );
  assert.equal(approvedInquiryEndpoint("/api/inquiry"), "/api/inquiry");
  for (const value of [
    "http://formspree.io/f/abc",
    "https://evil.example/f/abc",
    "//evil.example/api/",
    "/api/../secret",
    "https://user:pass@formspree.io/f/abc",
  ])
    assert.equal(approvedInquiryEndpoint(value), null);
});
