"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { apiFetch, Candidate } from "../lib/api";
import { candidateRegistrationFields } from "../content";

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];

type RegisterForm = {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  coordinator: string;
  companyHiredIn: string;
  password: string;
  confirmPassword: string;
};

type RegisterResponse = {
  success: boolean;
  message?: string;
  token?: string;
  candidate?: Candidate;
};

const initialForm: RegisterForm = {
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  coordinator: "",
  companyHiredIn: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterForm>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(name: string, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const missingField = Object.entries(form).find(([, value]) => !value.trim());
    if (missingField) {
      setError("Please complete all registration fields.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password and confirm password do not match.");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const data = await apiFetch<RegisterResponse>("/api/candidates/register", {
        method: "POST",
        auth: false,
        body: JSON.stringify(form),
      });

      if (!data.success || !data.token || !data.candidate) {
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      localStorage.setItem("internix_token", data.token);
      localStorage.setItem("internix_candidate", JSON.stringify(data.candidate));
      sessionStorage.setItem("internix_flash", data.message || "Candidate registered successfully");
      setSuccess(data.message || "Candidate registered successfully");
      router.push("/dashboard");
    } catch {
      setError("Unable to connect to the backend. Please check the API server.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="border-b border-[#e8eaed] bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-[#5f6368]">Candidate registration</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[#202124] sm:text-6xl">
              Register candidate details for dashboard access.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">
              Submit candidate, coordinator, and hired company information to create the Internix dashboard profile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {["Register", "Profile", "Payment"].map((item, index) => (
              <div key={item} className="rounded-md border border-[#e8eaed] bg-[#f8fafd] p-5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-white"
                  style={{ backgroundColor: ["#1a73e8", "#137333", "#fbbc04"][index] }}
                >
                  {index + 1}
                </span>
                <p className="mt-4 text-sm font-semibold text-[#202124]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafd] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <form onSubmit={handleSubmit} className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-3 border-b border-[#e8eaed] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#202124]">Candidate information</h2>
                <p className="mt-2 text-sm leading-6 text-[#5f6368]">Successful registration redirects the candidate to their dashboard.</p>
              </div>
              <span className="rounded-md bg-[#e8f0fe] px-3 py-2 text-xs font-semibold uppercase tracking-normal text-[#1a73e8]">
                Required
              </span>
            </div>

            {error ? <p className="mt-6 rounded-md border border-[#f4c7c3] bg-[#fce8e6] px-4 py-3 text-sm font-semibold text-[#b3261e]">{error}</p> : null}
            {success ? <p className="mt-6 rounded-md border border-[#b7dfc2] bg-[#e6f4ea] px-4 py-3 text-sm font-semibold text-[#137333]">{success}</p> : null}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {candidateRegistrationFields.map((field) => (
                <label key={field.name} className="form-field">
                  <span className="form-label">{field.label}</span>
                  {field.type === "select" ? (
                    <select
                      className="form-input bg-white"
                      value={form.gender}
                      onChange={(event) => updateField(field.name, event.target.value)}
                    >
                      <option value="">Select gender</option>
                      {genderOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="form-input"
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof RegisterForm]}
                      onChange={(event) => updateField(field.name, event.target.value)}
                    />
                  )}
                </label>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-[#e8eaed] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-[#5f6368]">Submit the details to open the candidate dashboard.</p>
              <button className="btn-primary disabled:cursor-not-allowed disabled:bg-[#9aa0a6]" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </div>
          </form>

          <aside className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-[#5f6368]">Next screen</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#202124]">Candidate dashboard</h2>
            <p className="mt-3 leading-7 text-[#5f6368]">
              After registration, candidates can review their profile and placement fee status.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-md border border-[#1a73e8] bg-[#e8f0fe] p-4">
                <p className="text-sm font-semibold text-[#1a73e8]">Profile tab</p>
                <p className="mt-1 text-sm text-[#5f6368]">Candidate details display after registration.</p>
              </div>
              <div className="rounded-md border border-[#e8eaed] bg-[#f8fafd] p-4">
                <p className="text-sm font-semibold text-[#202124]">Offer letter lock</p>
                <p className="mt-1 text-sm text-[#5f6368]">Download appears only when payment is verified.</p>
              </div>
            </div>

            <Link href="/dashboard" className="btn-secondary mt-8 w-full">
              Open dashboard
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
