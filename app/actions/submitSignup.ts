"use server";

export interface SignupFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    grade?: string;
    province?: string;
    currentMark?: string;
    tierInterest?: string;
    referralSource?: string;
  };
}

const SA_PHONE_REGEX = /^(\+27|0)[6-8][0-9]{8}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_GRADES = ["grade10", "grade11", "grade12", "rewrite"];
const VALID_PROVINCES = [
  "eastern-cape",
  "free-state",
  "gauteng",
  "kwazulu-natal",
  "limpopo",
  "mpumalanga",
  "northern-cape",
  "north-west",
  "western-cape"
];
const VALID_MARKS = [
  "below-30",
  "30-40",
  "40-50",
  "50-60",
  "60-70",
  "above-70",
  "dont-know"
];
const VALID_TIERS = ["free", "standard", "premium", "not-sure"];
const VALID_REFERRALS = [
  "tiktok",
  "instagram",
  "facebook",
  "friend",
  "teacher",
  "google",
  "other"
];

export async function submitSignup(
  prevState: SignupFormState | null,
  formData: FormData
): Promise<SignupFormState> {
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    grade: formData.get("grade") as string,
    province: formData.get("province") as string,
    currentMark: formData.get("currentMark") as string,
    tierInterest: formData.get("tierInterest") as string,
    referralSource: formData.get("referralSource") as string
  };

  const errors: SignupFormState["errors"] = {};

  // Validate name
  if (!rawData.name || rawData.name.trim().length < 2) {
    errors.name = "Please enter your full name (at least 2 characters)";
  }

  // Validate phone
  const cleanedPhone = rawData.phone?.replace(/\s/g, "");
  if (!cleanedPhone || !SA_PHONE_REGEX.test(cleanedPhone)) {
    errors.phone = "Please enter a valid SA phone number (e.g., 0612345678)";
  }

  // Validate email
  if (!rawData.email || !EMAIL_REGEX.test(rawData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate grade
  if (!rawData.grade || !VALID_GRADES.includes(rawData.grade)) {
    errors.grade = "Please select your grade";
  }

  // Validate province
  if (!rawData.province || !VALID_PROVINCES.includes(rawData.province)) {
    errors.province = "Please select your province";
  }

  // Validate current mark
  if (!rawData.currentMark || !VALID_MARKS.includes(rawData.currentMark)) {
    errors.currentMark = "Please select your current mark range";
  }

  // Validate tier interest
  if (!rawData.tierInterest || !VALID_TIERS.includes(rawData.tierInterest)) {
    errors.tierInterest = "Please select which tier interests you";
  }

  // Validate referral source
  if (!rawData.referralSource || !VALID_REFERRALS.includes(rawData.referralSource)) {
    errors.referralSource = "Please tell us how you heard about us";
  }

  // If there are errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors
    };
  }

  // Log the signup (for now - later save to database)
  console.log("=== NEW SIGNUP ===");
  console.log("Name:", rawData.name);
  console.log("Phone:", cleanedPhone);
  console.log("Email:", rawData.email);
  console.log("Grade:", rawData.grade);
  console.log("Province:", rawData.province);
  console.log("Current Mark:", rawData.currentMark);
  console.log("Tier Interest:", rawData.tierInterest);
  console.log("Referral:", rawData.referralSource);
  console.log("Timestamp:", new Date().toISOString());
  console.log("==================");

  // TODO: Save to database
  // await db.signups.create({ data: rawData });

  // TODO: Send confirmation email
  // await sendWelcomeEmail(rawData.email, rawData.name);

  return {
    success: true,
    message: "Thank you for joining the waitlist! We'll contact you soon via email."
  };
}
