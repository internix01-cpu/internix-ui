"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialError: ContactFormState = {
  status: "error",
  message: "Something went wrong. Please try again or email us directly.",
};

function readField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const website = readField(formData, "website");

  if (website) {
    return {
      status: "success",
      message: "Thank you. We received your enquiry and will contact you soon.",
    };
  }

  const payload = {
    submittedAt: new Date().toISOString(),
    fullName: readField(formData, "fullName"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    enquiryType: readField(formData, "enquiryType"),
    message: readField(formData, "message"),
  };

  if (!payload.fullName || !payload.email || !payload.enquiryType || !payload.message) {
    return {
      status: "error",
      message: "Please fill all required fields before submitting.",
    };
  }

  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL;

  if (!endpoint) {
    return {
      status: "error",
      message: "Google Sheet connection is not configured yet.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (response.status === 401 || response.status === 403) {
      return {
        status: "error",
        message: "Google Sheet script permission is not public. Set Web App access to Anyone and deploy again.",
      };
    }

    if (!response.ok) {
      return initialError;
    }

    return {
      status: "success",
      message: "Thank you. We received your enquiry and will contact you soon.",
    };
  } catch {
    return initialError;
  }
}
