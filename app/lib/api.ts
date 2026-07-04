export type PaymentStatus = "pending" | "verifying" | "verified" | "failed";

export type Candidate = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  coordinator: string;
  companyHiredIn: string;
  paymentStatus: PaymentStatus;
  offerLetterUrl: string | null;
};

export type PlacementFee = {
  candidateId: string;
  fullName: string;
  email: string;
  phone: string;
  companyHiredIn: string;
  paymentPurpose: string;
  amount: number;
  currency: string;
  paymentStatus: PaymentStatus;
};

type ApiOptions = RequestInit & {
  auth?: boolean;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

export async function apiFetch<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const token = typeof window !== "undefined" ? localStorage.getItem("internix_token") : null;
  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  if (token && options.auth !== false) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (response.status === 401 && typeof window !== "undefined") {
    localStorage.removeItem("internix_token");
    localStorage.removeItem("internix_candidate");
    window.location.href = "/register";
  }

  return data as T;
}
