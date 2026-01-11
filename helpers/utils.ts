type InputType = "email" | "phone" | "invalid";

export function detectInputType(value: string): InputType {
  const v = value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+[1-9]\d{1,14}$/; // E.164 format

  if (emailRegex.test(v)) return "email";
  if (phoneRegex.test(v)) return "phone";
  return "invalid";
}
