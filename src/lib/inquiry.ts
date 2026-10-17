export type InquiryKind = "project" | "partnership";
export type InquiryValues = Record<string, string>;
export type InquiryErrors = Record<string, string>;
export function validateInquiry(
  values: InquiryValues,
  kind: InquiryKind,
): InquiryErrors {
  const errors: InquiryErrors = {};
  const name = values.name?.trim() ?? "";
  if (name.length < 2 || name.length > 100)
    errors.name = "Enter your name (2–100 characters).";
  const email = values.email?.trim() ?? "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254)
    errors.email = "Enter a valid email address.";
  if (kind === "partnership" && !values.company?.trim())
    errors.company = "Enter your company name.";
  if ((values.company?.length ?? 0) > 150)
    errors.company = "Use no more than 150 characters.";
  if (!values.service?.trim())
    errors.service =
      kind === "partnership"
        ? "Select a partnership type."
        : "Select a service.";
  if (
    (values.message?.trim().length ?? 0) < 20 ||
    (values.message?.length ?? 0) > 5000
  )
    errors.message = "Describe your project in 20–5,000 characters.";
  if (kind === "partnership" && (values.requirements?.trim().length ?? 0) < 10)
    errors.requirements = "Add at least 10 characters about your requirements.";
  if (values.website?.trim()) {
    try {
      const url = new URL(values.website);
      if (
        !["http:", "https:"].includes(url.protocol) ||
        !url.hostname.includes(".")
      )
        throw new Error();
    } catch {
      errors.website = "Enter a full website URL, such as https://example.com.";
    }
  }
  if (values.website_confirmation)
    errors.form =
      "Submission could not be processed. Please contact us by email.";
  return errors;
}
export function inquiryEmail(values: InquiryValues, kind: InquiryKind) {
  const labels: Record<string, string> = {
    name: "Name",
    email: "Email",
    company: "Company",
    website: "Website",
    service: kind === "partnership" ? "Partnership type" : "Service",
    budget: "Estimated budget",
    timeline: "Expected timeline",
    requirements: "Requirements",
    message: "Message",
  };
  const body = Object.entries(labels)
    .filter(([key]) => values[key]?.trim())
    .map(([key, label]) => label + ": " + values[key].trim())
    .join("\n\n");
  return (
    "mailto:info@trovixtech.com?subject=" +
    encodeURIComponent(
      kind === "partnership" ? "Agency partnership inquiry" : "Project inquiry",
    ) +
    "&body=" +
    encodeURIComponent(body)
  );
}
export function approvedInquiryEndpoint(
  raw: string | undefined,
): string | null {
  if (!raw) return null;
  if (raw.startsWith("/api/") && !raw.includes("..")) return raw;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" &&
      url.hostname === "formspree.io" &&
      /^\/f\/[a-zA-Z0-9]+$/.test(url.pathname) &&
      !url.username &&
      !url.password &&
      !url.search
      ? url.href
      : null;
  } catch {
    return null;
  }
}
