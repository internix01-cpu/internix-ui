"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn-primary mt-6" type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send enquiry"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="rounded-[28px] border border-[#e8eaed] bg-[#f8fafd] p-6 md:p-8">
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span className="form-label">Full name</span>
          <input className="form-input" name="fullName" type="text" placeholder="Your name" required />
        </label>

        <label className="form-field">
          <span className="form-label">Email</span>
          <input className="form-input" name="email" type="email" placeholder="you@example.com" required />
        </label>

        <label className="form-field">
          <span className="form-label">Phone</span>
          <input className="form-input" name="phone" type="tel" placeholder="+91" />
        </label>

        <label className="form-field">
          <span className="form-label">I am a</span>
          <select className="form-input" name="enquiryType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Company hiring talent</option>
            <option>Candidate looking for opportunity</option>
            <option>Internship enquiry</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>

      <label className="form-field mt-5">
        <span className="form-label">Message</span>
        <textarea className="form-input min-h-36 resize-y" name="message" placeholder="Tell us what you need." required />
      </label>

      <SubmitButton />

      {state.message ? (
        <p
          className={`mt-4 rounded-[12px] border px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "border-[#c4e9d0] bg-[#e6f4ea] text-[#137333]"
              : "border-[#f4c7c3] bg-[#fce8e6] text-[#a50e0e]"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
