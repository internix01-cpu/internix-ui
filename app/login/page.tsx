"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { apiFetch, Candidate } from "../lib/api";

type LoginForm = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  message?: string;
  token?: string;
  candidate?: Candidate;
};

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(name: keyof LoginForm, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const data = await apiFetch<LoginResponse>("/api/candidates/login", {
        method: "POST",
        auth: false,
        body: JSON.stringify(form),
      });

      if (!data.success || !data.token || !data.candidate) {
        setError(data.message || "Login failed. Please check your details.");
        return;
      }

      localStorage.setItem("internix_token", data.token);
      localStorage.setItem("internix_candidate", JSON.stringify(data.candidate));
      sessionStorage.setItem("internix_flash", data.message || "Candidate logged in successfully");
      router.push("/dashboard");
    } catch {
      setError("Unable to connect. Please try again after some time.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#f8fafd] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-[#5f6368]">Candidate login</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-[#202124] sm:text-6xl">
            Access your Internix dashboard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">
            Login to review profile details, placement fee status, and offer letter access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b border-[#e8eaed] pb-6">
            <h2 className="text-2xl font-semibold text-[#202124]">Login details</h2>
            <p className="mt-2 text-sm leading-6 text-[#5f6368]">Use the email and password used during registration.</p>
          </div>

          {error ? <p className="mt-6 rounded-md border border-[#f4c7c3] bg-[#fce8e6] px-4 py-3 text-sm font-semibold text-[#b3261e]">{error}</p> : null}

          <div className="mt-8 grid gap-5">
            <label className="form-field">
              <span className="form-label">Email</span>
              <input
                className="form-input"
                type="email"
                placeholder="candidate@example.com"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">Password</span>
              <input
                className="form-input"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(event) => updateField("password", event.target.value)}
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[#e8eaed] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/register" className="text-sm font-semibold text-[#1a73e8] transition hover:text-[#1765cc]">
              New candidate? Register
            </Link>
            <button className="btn-primary disabled:cursor-not-allowed disabled:bg-[#9aa0a6]" disabled={isSubmitting} type="submit">
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
