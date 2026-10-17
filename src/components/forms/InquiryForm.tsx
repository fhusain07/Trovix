import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services, partnershipModels } from "@/data/site";
import {
  approvedInquiryEndpoint,
  inquiryEmail,
  validateInquiry,
  type InquiryErrors,
  type InquiryKind,
} from "@/lib/inquiry";

interface Field {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
}
export function InquiryForm({ kind }: { kind: InquiryKind }) {
  const isPartner = kind === "partnership";
  const endpoint = approvedInquiryEndpoint(
    import.meta.env.VITE_INQUIRY_ENDPOINT,
  );
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "draft"
  >("idle");
  const [draft, setDraft] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const fields: Field[] = [
    {
      name: "name",
      label: isPartner ? "Name" : "Full name",
      required: true,
      autoComplete: "name",
      maxLength: 100,
      placeholder: "Your name",
    },
    {
      name: "email",
      label: "Business email",
      type: "email",
      required: true,
      autoComplete: "email",
      maxLength: 254,
      placeholder: "you@company.com",
    },
    {
      name: "company",
      label: "Company name",
      required: isPartner,
      autoComplete: "organization",
      maxLength: 150,
      placeholder: "Your company",
    },
    ...(isPartner
      ? [
          {
            name: "website",
            label: "Website",
            type: "url",
            autoComplete: "url",
            maxLength: 500,
            placeholder: "https://youragency.com",
          },
        ]
      : []),
    {
      name: "service",
      label: isPartner ? "Partnership type" : "Service required",
      required: true,
      full: !isPartner,
      options: [
        ...(isPartner ? partnershipModels : services.map((item) => item.title)),
        "Let’s discuss",
      ],
    },
    ...(!isPartner
      ? [
          {
            name: "budget",
            label: "Estimated budget",
            options: [
              "Still exploring",
              "Under ₹1 lakh",
              "₹1–3 lakh",
              "₹3–10 lakh",
              "₹10 lakh or more",
              "Prefer to discuss",
            ],
          },
        ]
      : []),
    {
      name: "timeline",
      label: "Expected timeline",
      options: [
        "Still exploring",
        "Within 1 month",
        "1–3 months",
        "3–6 months",
        "Flexible / ongoing",
      ],
    },
    ...(isPartner
      ? [
          {
            name: "requirements",
            label: "Project requirements",
            type: "textarea",
            required: true,
            full: true,
            maxLength: 5000,
            placeholder:
              "What would you like a development partner to take on?",
          },
        ]
      : []),
    {
      name: "message",
      label: isPartner ? "Message" : "Project description",
      type: "textarea",
      required: true,
      full: true,
      maxLength: 5000,
      placeholder:
        "What are you hoping to build or improve? Include the context, your priorities, and anything already in place.",
    },
  ];
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;
    const nextErrors = validateInquiry(values, kind);
    setErrors(nextErrors);
    setStatus("idle");
    setDraft("");
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      requestAnimationFrame(() =>
        (form.elements.namedItem(first) as HTMLElement | null)?.focus(),
      );
      return;
    }
    setDraft(inquiryEmail(values, kind));
    if (!endpoint) {
      setStatus("draft");
      requestAnimationFrame(() => feedbackRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "omit",
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          ...values,
          inquiryType: kind,
          _subject: isPartner
            ? "Agency partnership inquiry"
            : "Project inquiry",
        }),
      });
      if (
        !response.ok ||
        !response.headers.get("content-type")?.includes("application/json")
      )
        throw new Error("Not accepted");
      const data: { ok?: boolean; success?: boolean } = await response.json();
      if (data.ok !== true && data.success !== true)
        throw new Error("No delivery acknowledgement");
      setStatus("success");
      setDraft("");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => feedbackRef.current?.focus());
  }
  return (
    <form
      ref={formRef}
      className="inquiry-form"
      noValidate
      onSubmit={submit}
      onChange={() => {
        if (status !== "sending") {
          setStatus("idle");
          setDraft("");
        }
      }}
      aria-label={isPartner ? "Partnership inquiry" : "Project inquiry"}
    >
      <h2>
        {isPartner ? "Explore a partnership" : "Tell us about your project"}
      </h2>
      <p className="form-note">
        {endpoint
          ? "Fields marked * are required. Please leave out passwords and sensitive information."
          : "Send your inquiry by email. Fill in the details below to prepare a draft in your email app. Nothing is submitted through this website."}
      </p>
      <fieldset
        disabled={status === "sending"}
        style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}
      >
        <legend className="sr-only">Your inquiry details</legend>
        <div className="form-fields">
          {fields.map((field) => {
            const id = kind + "-" + field.name;
            const props = {
              id,
              name: field.name,
              required: field.required,
              "aria-invalid": !!errors[field.name],
              "aria-describedby": errors[field.name]
                ? id + "-error"
                : undefined,
            };
            return (
              <div
                className={`field ${field.full ? "full-width" : ""}`}
                key={field.name}
              >
                <label htmlFor={id}>
                  {field.label}
                  {field.required ? " *" : <span>(optional)</span>}
                </label>
                {field.options ? (
                  <select {...props} defaultValue="">
                    <option value="">
                      {field.required ? "Choose an option" : "Select if known"}
                    </option>
                    {field.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === "textarea" ? (
                  <textarea
                    {...props}
                    rows={field.name === "message" ? 5 : 3}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    {...props}
                    type={field.type ?? "text"}
                    autoComplete={field.autoComplete}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                  />
                )}
                {errors[field.name] && (
                  <p className="field-error" id={id + "-error"}>
                    {errors[field.name]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={kind + "-bot"}>Leave this field empty</label>
          <input
            id={kind + "-bot"}
            name="website_confirmation"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <p className="form-privacy">
          We use your details to respond to your inquiry. Read our{" "}
          <Link className="inline-link" to="/privacy-policy">
            Privacy Policy
          </Link>
          . Please do not include credentials or confidential customer data.
        </p>
        <button
          type="submit"
          className="action action-primary form-submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending…"
            : endpoint
              ? "Send Inquiry"
              : "Prepare Email Draft"}
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </fieldset>
      <div
        ref={feedbackRef}
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
      >
        {errors.form && <p className="form-status error">{errors.form}</p>}
        {status === "success" && (
          <div className="form-status">
            <CheckCircle2 size={18} aria-hidden="true" />
            <strong> Your inquiry was accepted.</strong> Thank you for getting
            in touch.
          </div>
        )}
        {status === "error" && (
          <div className="form-status error">
            We could not confirm your submission. Your details are still here.
            Please try again, or send the prepared email below.
          </div>
        )}
        {status === "draft" && (
          <div className="form-status">
            <strong>Your email draft is ready.</strong> Open it below, review
            the details, and send from your email app. No message has been sent
            yet.
          </div>
        )}
        {draft && (
          <a className="action action-secondary email-draft" href={draft}>
            Open inquiry in your email app
          </a>
        )}
      </div>
    </form>
  );
}
