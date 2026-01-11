export default function AssessmentResultChip({
  risk,
}: {
  risk: "low" | "moderate" | "high";
}) {
  return (
    <div
      className={`px-8 py-5 rounded-sm inline-block space-y-2 ${
        risk === "low"
          ? "bg-[#8FBF77] text-[#24540C]"
          : risk === "moderate"
          ? "bg-[#ffb145] text-[#754200]"
          : "bg-[#F9A399] text-[#540D0D]"
      }`}
    >
      <p className="text-sm font-normal text-black">
        Your parent&apos;s fall risk is{" "}
      </p>
      <p className="text-4xl font-bold text-center">
        {risk.charAt(0).toUpperCase() + risk.slice(1)}
      </p>
    </div>
  );
}
