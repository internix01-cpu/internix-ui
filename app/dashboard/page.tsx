"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { apiFetch, Candidate, PaymentStatus, PlacementFee } from "../lib/api";

type CandidateResponse = {
  success: boolean;
  message?: string;
  candidate?: Candidate;
};

type PaymentResponse = {
  success: boolean;
  message?: string;
  payment?: PlacementFee;
  paymentStatus?: PaymentStatus;
};

type OfferLetterResponse = {
  success: boolean;
  locked?: boolean;
  message?: string;
  offerLetterUrl?: string | null;
};

const statusStyles: Record<PaymentStatus, string> = {
  pending: "border-[#fbbc04] bg-[#fff8e1] text-[#8a5b00]",
  verifying: "border-[#bfd7ff] bg-[#e8f0fe] text-[#1a73e8]",
  verified: "border-[#b7dfc2] bg-[#e6f4ea] text-[#137333]",
  failed: "border-[#f4c7c3] bg-[#fce8e6] text-[#b3261e]",
};

function StatusBadge({ status }: { status: PaymentStatus }) {
  return (
    <span className={`w-fit rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-normal ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [payment, setPayment] = useState<PlacementFee | null>(null);
  const [offerLetter, setOfferLetter] = useState<OfferLetterResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaying, setIsPaying] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const paymentStatus = useMemo<PaymentStatus>(() => {
    return payment?.paymentStatus || candidate?.paymentStatus || "pending";
  }, [candidate?.paymentStatus, payment?.paymentStatus]);

  const profileItems = useMemo(() => {
    if (!candidate) return [];

    return [
      { label: "Full name", value: candidate.fullName },
      { label: "Email", value: candidate.email },
      { label: "Phone", value: candidate.phone },
      { label: "Gender", value: candidate.gender },
      { label: "Coordinator", value: candidate.coordinator },
      { label: "Company hired in", value: candidate.companyHiredIn },
      { label: "Payment status", value: paymentStatus },
    ];
  }, [candidate, paymentStatus]);

  const loadDashboard = useCallback(async () => {
    const token = localStorage.getItem("internix_token");
    if (!token) {
      router.replace("/register");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const [candidateData, paymentData, offerData] = await Promise.all([
        apiFetch<CandidateResponse>("/api/candidates/me"),
        apiFetch<PaymentResponse>("/api/payments/placement-fee"),
        apiFetch<OfferLetterResponse>("/api/offer-letter"),
      ]);

      if (!candidateData.success || !candidateData.candidate) {
        setError(candidateData.message || "Unable to load candidate profile.");
        return;
      }

      setCandidate(candidateData.candidate);
      setPayment(paymentData.payment || null);
      setOfferLetter(offerData);
      localStorage.setItem("internix_candidate", JSON.stringify(candidateData.candidate));

      const flash = sessionStorage.getItem("internix_flash");
      if (flash) {
        setMessage(flash);
        sessionStorage.removeItem("internix_flash");
      }
    } catch {
      setError("Unable to connect to the backend. Please check the API server.");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  async function handleMarkVerifying() {
    setIsPaying(true);
    setError("");
    setMessage("");

    try {
      const data = await apiFetch<PaymentResponse>("/api/payments/mark-verifying", {
        method: "POST",
      });

      if (!data.success) {
        setError(data.message || "Unable to submit payment details for verification.");
        return;
      }

      setMessage("Payment details submitted for verification");
      await loadDashboard();
    } catch {
      setError("Unable to submit payment details. Please try again.");
    } finally {
      setIsPaying(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("internix_token");
    localStorage.removeItem("internix_candidate");
    router.push("/register");
  }

  return (
    <>
      <section className="border-b border-[#e8eaed] bg-white px-5 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-[#5f6368]">Candidate portal</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-[#202124] sm:text-5xl">
              Candidate Dashboard
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f6368]">
              Review profile, placement fee status, and offer letter access in one place.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="btn-secondary">
              Register another
            </Link>
            <button className="btn-secondary" type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafd] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-md border border-[#e8eaed] bg-white p-3 shadow-sm">
            <nav className="grid gap-2">
              <a href="#profile" className="rounded-md bg-[#1a73e8] px-4 py-3 text-sm font-semibold text-white">
                Profile
              </a>
              <a href="#payment" className="rounded-md px-4 py-3 text-sm font-semibold text-[#5f6368] transition hover:bg-[#f8fafd] hover:text-[#1a73e8]">
                Placement Fees
              </a>
              <a href="#offer-letter" className="rounded-md px-4 py-3 text-sm font-semibold text-[#5f6368] transition hover:bg-[#f8fafd] hover:text-[#1a73e8]">
                Offer Letter
              </a>
            </nav>
          </aside>

          <div className="grid gap-8">
            {message ? <p className="rounded-md border border-[#b7dfc2] bg-[#e6f4ea] px-4 py-3 text-sm font-semibold text-[#137333]">{message}</p> : null}
            {error ? <p className="rounded-md border border-[#f4c7c3] bg-[#fce8e6] px-4 py-3 text-sm font-semibold text-[#b3261e]">{error}</p> : null}

            {isLoading ? (
              <div className="rounded-md border border-[#e8eaed] bg-white p-8 text-[#5f6368] shadow-sm">
                Loading candidate dashboard...
              </div>
            ) : (
              <>
                <section id="profile" className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-4 border-b border-[#e8eaed] pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#5f6368]">Profile tab</p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#202124]">Candidate profile</h2>
                    </div>
                    <StatusBadge status={paymentStatus} />
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {profileItems.map((item) => (
                      <div key={item.label} className="rounded-md border border-[#e8eaed] bg-[#f8fafd] p-5">
                        <p className="text-xs font-semibold uppercase tracking-normal text-[#5f6368]">{item.label}</p>
                        <p className="mt-2 text-base font-semibold text-[#202124]">{item.value || "Not available"}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="payment" className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col gap-4 border-b border-[#e8eaed] pb-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#5f6368]">Placement fee section</p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#202124]">Payment details</h2>
                    </div>
                    <StatusBadge status={paymentStatus} />
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {[
                      { label: "Payment purpose", value: payment?.paymentPurpose },
                      { label: "Amount", value: payment ? `${payment.currency} ${payment.amount}` : "" },
                      { label: "Candidate name", value: payment?.fullName || candidate?.fullName },
                      { label: "Company hired in", value: payment?.companyHiredIn || candidate?.companyHiredIn },
                    ].map((item) => (
                      <div key={item.label} className="rounded-md border border-[#e8eaed] bg-[#f8fafd] p-5">
                        <p className="text-xs font-semibold uppercase tracking-normal text-[#5f6368]">{item.label}</p>
                        <p className="mt-2 text-base font-semibold text-[#202124]">{item.value || "Not available"}</p>
                      </div>
                    ))}
                  </div>

                  {paymentStatus === "pending" || paymentStatus === "failed" ? (
                    <button
                      className="btn-primary mt-8 disabled:cursor-not-allowed disabled:bg-[#9aa0a6]"
                      type="button"
                      disabled={isPaying}
                      onClick={handleMarkVerifying}
                    >
                      {isPaying ? "Submitting..." : "Pay Placement Fees"}
                    </button>
                  ) : (
                    <p className="mt-8 rounded-md border border-[#bfd7ff] bg-[#e8f0fe] px-4 py-3 text-sm font-semibold text-[#1a73e8]">
                      {paymentStatus === "verifying" ? "Payment details are verifying." : "Placement fee payment is verified."}
                    </p>
                  )}
                </section>

                <section id="offer-letter" className="rounded-md border border-[#e8eaed] bg-white p-6 shadow-sm sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
                    <div>
                      <p className="text-sm font-medium text-[#5f6368]">Offer Letter</p>
                      <h2 className="mt-2 text-2xl font-semibold text-[#202124]">
                        {paymentStatus === "verified" ? "Offer letter access" : "Offer letter locked"}
                      </h2>
                      <p className="mt-4 max-w-2xl leading-7 text-[#5f6368]">
                        {offerLetter?.message ||
                          (paymentStatus === "verified"
                            ? "Payment is verified. Download the offer letter when the file is available."
                            : "Please complete placement fee verification to access the offer letter.")}
                      </p>
                    </div>

                    <div className="rounded-md border border-[#dadce0] bg-[#f8fafd] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#202124]">
                            {paymentStatus === "verified" ? "Offer_Letter.pdf" : "Offer letter locked"}
                          </p>
                          <p className="mt-1 text-xs text-[#5f6368]">
                            {paymentStatus === "verified" ? "Verified access" : "Payment verification required"}
                          </p>
                        </div>
                        <span className={`h-3 w-3 rounded-full ${paymentStatus === "verified" ? "bg-[#137333]" : "bg-[#fbbc04]"}`} />
                      </div>

                      {paymentStatus === "verified" && offerLetter?.offerLetterUrl ? (
                        <a href={offerLetter.offerLetterUrl} className="btn-primary mt-5 w-full" target="_blank" rel="noreferrer">
                          Download Offer Letter
                        </a>
                      ) : paymentStatus === "verified" ? (
                        <p className="mt-5 rounded-md border border-[#e8eaed] bg-white p-4 text-sm font-semibold text-[#5f6368]">
                          Offer letter will be available soon.
                        </p>
                      ) : (
                        <button className="btn-secondary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70" type="button" disabled>
                          Download Locked
                        </button>
                      )}
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
