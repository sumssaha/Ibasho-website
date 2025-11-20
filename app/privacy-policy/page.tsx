import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ibasho",
  description:
    "Read Ibasho's Privacy Policy to understand how we collect, use, and protect information when using our website and Fall Risk Calculator.",
};

export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">
        Privacy Policy – Ibasho
      </h1>
      <p className="mb-2 text-sm text-gray-500 italic">
        Last updated: 21st Nov 2025
      </p>

      <div className="space-y-8 mt-6">
        {/* 1. Intro */}
        <div>
          <p>
            Ibasho (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website, use our Fall Risk Calculator, or engage with
            our services related to aging-in-place home transformations.
          </p>
        </div>
        <hr className="border-black" />
        {/* 1. Information We Collect */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>We may collect the following information:</p>

          <h3 className="text-xl font-semibold mt-4">
            a. Personal Information (provided by you)
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Name, email address, phone number</li>
            <li>
              Age, gender, medical condition (only if voluntarily provided in
              tools such as the Fall Risk Calculator)
            </li>
            <li>Details about your home layout or safety conditions</li>
            <li>Any queries submitted through forms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Browser type, device type, IP address</li>
            <li>Pages you visit and interactions on the website</li>
            <li>Anonymous analytics data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">c. Tool-Specific Data</h3>
          <p>For the Fall Risk Calculator, we may collect:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Age, gender, mobility and health condition, vision issues</li>
            <li>Living environment details</li>
            <li>Prior fall history</li>
            <li>Emergency help availability</li>
          </ul>
          <p className="mt-2 font-semibold">
            No medical diagnosis or treatment information is collected.
          </p>
        </div>
        <hr className="border-black" />
        {/* 2. How We Use */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Provide personalized fall-risk insights</li>
            <li>Suggest home transformation improvements</li>
            <li>Respond to queries and service requests</li>
            <li>Improve our products, tools, and website</li>
            <li>
              Send important updates or educational content (only with consent)
            </li>
          </ul>
          <p className="mt-2">
            We do <b>not</b> sell your personal data.
          </p>
        </div>
        <hr className="border-black" />
        {/* 3. Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            3. Sharing of Information
          </h2>
          <p>We may share data only with:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Trusted partners assisting in design assessments or home audits
            </li>
            <li>Service providers (IT, analytics, customer support)</li>
          </ul>
          <p className="mt-2">
            All partners follow strict confidentiality obligations.
          </p>
          <p className="mt-2">
            We do <b>not</b> share your data with advertisers.
          </p>
        </div>
        <hr className="border-black" />
        {/* 4. Data Security */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We use industry-standard security protocols to protect your data
            from unauthorized access or misuse.
          </p>
        </div>
        <hr className="border-black" />
        {/* 5. Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
          <p>You may request to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Access your data</li>
            <li>Correct or update your data</li>
            <li>Delete your personal information</li>
          </ul>
          <p className="mt-2">
            To request, please email:
            <a
              href="mailto:safehome@ibasholiving.com"
              className="text-blue-700 underline ml-1 font-semibold"
            >
              safehome@ibasholiving.com
            </a>
          </p>
        </div>
        <hr className="border-black" />
        {/* 6. Children */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Children’s Privacy</h2>
          <p>Our website is not intended for children under 18.</p>
        </div>
        <hr className="border-black" />
        {/* 7. Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            7. Changes to This Policy
          </h2>
          <p>
            We may update the policy periodically. The latest version will
            always be posted here.
          </p>
        </div>
        <hr className="border-black" />
        {/* 8. Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p>For privacy-related concerns, contact:</p>
          <a
            href="mailto:safehome@ibasholiving.com"
            className="text-blue-700 underline mt-2 font-semibold"
          >
            safehome@ibasholiving.com
          </a>
        </div>
      </div>
    </section>
  );
}
