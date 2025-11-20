import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Ibasho",
  description:
    "Read Ibasho's Terms & Conditions to understand the rules and regulations regarding the use of our website, Fall Risk Calculator, and home transformation services.",
};

export default function TermsAndConditions() {
  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">
        Ibasho – Terms & Conditions
      </h1>
      <p className="mb-2 text-sm text-gray-500 italic">
        Last updated: 21st Nov 2025
      </p>

      {/* Introduction / Prologue */}
      <div className="mb-6">
        <p>
          Welcome to <b>Ibasho</b>, a home-transformation and safety-improvement
          service designed to help families create safer, age-friendly living
          environments for seniors. By accessing or using our website, tools, or
          services (including the Fall Risk Calculator), you agree to the
          following Terms & Conditions (&quot;Terms&quot;).
        </p>
        <p className="mt-2">
          Please read these Terms carefully before using our platform.
        </p>
      </div>
      <hr className="border-black" />
      <div className="space-y-8 mt-6">
        {/* 1. Acceptance */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By using the Ibasho website, booking a service, or interacting with
            any tools or calculators, you agree to be bound by these Terms. If
            you do not agree, please discontinue use of our services.
          </p>
        </div>
        <hr className="border-black" />
        {/* 2. Nature of Services */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Nature of Services</h2>
          <p>Ibasho provides:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Home safety assessments</li>
            <li>Home transformation and renovation services</li>
            <li>Fall-risk guidance tools (e.g., Fall Risk Calculator)</li>
            <li>
              Content, recommendations, and educational information for users
            </li>
          </ul>
          <p className="mt-2">
            <strong>Ibasho does not provide medical or clinical advice.</strong>{" "}
            All assessments and recommendations are for informational purposes
            only and should not be treated as a substitute for professional
            medical consultation.
          </p>
        </div>
        <hr className="border-black" />
        {/* 3. Eligibility */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services or submit
            inquiries. By using our platform, you confirm that you are legally
            capable of entering into contracts.
          </p>
        </div>
        <hr className="border-black" />
        {/* 4. Fall Risk Calculator */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            4. Use of the Fall Risk Calculator
          </h2>
          <p>
            The Fall Risk Calculator provides a risk score and general guidance
            based on the information you submit.
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>It is not a medical diagnosis.</li>
            <li>It is not intended to predict actual probability of a fall.</li>
            <li>
              Ibasho is not responsible for decisions made based on the results
              of the calculator.
            </li>
          </ul>
        </div>
        <hr className="border-black" />
        {/* 5. Accuracy of Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            5. Accuracy of Information
          </h2>
          <p>
            You agree to provide accurate, current, and complete information
            when using Ibasho tools or booking services.
          </p>
          <p className="mt-2">
            Ibasho is not responsible for any consequences arising from
            incorrect or incomplete information provided by the user.
          </p>
        </div>
        <hr className="border-black" />
        {/* 6. Home Safety Assessments */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            6. Home Safety Assessments
          </h2>
          <p>
            Ibasho assessments and recommendations are based on visible
            conditions and available information at the time of evaluation.
          </p>
          <p className="mt-2">
            While Ibasho strives to improve home safety,{" "}
            <b>No home can be guaranteed fall-proof</b>, and Ibasho cannot
            guarantee that falls or injuries will not occur.
          </p>
        </div>
        <hr className="border-black" />
        {/* 7. Booking, Payments, Cancellation */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            7. Booking, Payments & Cancellations
          </h2>

          <h3 className="text-xl font-semibold mt-4">7.1 Booking</h3>
          <p className="mt-1">
            Service bookings are confirmed only after Ibasho acknowledges the
            request.
          </p>

          <h3 className="text-xl font-semibold mt-4">7.2 Payments</h3>
          <p className="mt-1">
            Pricing may vary depending on the scope of work. Full or partial
            advance may be required for certain services.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            7.3 Cancellations & Refunds
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Cancellation policies will be communicated at the time of service
              confirmation.
            </li>
            <li>
              Refunds (if applicable) follow the specific service terms
              communicated to the user.
            </li>
          </ul>
        </div>
        <hr className="border-black" />
        {/* 8. IP */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            8. Intellectual Property
          </h2>
          <p>
            All content on the Ibasho website—including text, images, graphics,
            tools, calculators, and design—is the intellectual property of
            Ibasho.
          </p>
          <p className="mt-2">
            Users may not copy, modify, reproduce, or distribute any part of the
            website without written permission.
          </p>
        </div>
        <hr className="border-black" />
        {/* 9. Third-party services */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            9. Third-Party Services
          </h2>
          <p>
            Ibasho may include links to third-party websites or integrate
            services such as payment gateways or CRM platforms.
          </p>
          <p className="mt-2">
            Ibasho is not responsible for the content or practices of
            third‑party providers.
          </p>
        </div>
        <hr className="border-black" />
        {/* 10. Vendor Engagement */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            10. Vendor & Partner Engagement
          </h2>

          <h3 className="text-xl font-semibold mt-4">
            10.1 Use of Third-Party Vendors
          </h3>
          <p className="mt-1">
            Ibasho collaborates with independent third‑party contractors/vendors
            for installation, repairs, modifications, and other home
            transformation services.
          </p>
          <p className="mt-2">We take utmost care to verify their:</p>

          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Professional experience</li>
            <li>Background checks (as feasible)</li>
            <li>Past work quality</li>
            <li>Safety compliance</li>
          </ul>

          <p className="mt-4">
            However, because these vendors are independent parties, Ibasho is{" "}
            <b>not liable for</b> :
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Personal misbehaviour or misconduct by vendor personnel</li>
            <li>Damage, theft, or loss due to vendor actions</li>
            <li>
              Disputes arising between customer and vendor beyond Ibasho’s
              reasonable control
            </li>
          </ul>

          <p className="mt-2">
            Ibasho will support and mediate disputes to the best of our ability
            to resolve issues fairly.
          </p>
        </div>
        <hr className="border-black" />
        {/* 11. Timelines */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            11. Timelines & Delivery Commitments
          </h2>

          <p>
            Ibasho makes every reasonable effort to honour agreed‑upon timelines
            for:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Site assessments</li>
            <li>Design submissions</li>
            <li>Material procurement</li>
            <li>Installation and project completion</li>
          </ul>

          <p className="mt-4">However, timelines may be affected by:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Weather conditions</li>
            <li>Material availability</li>
            <li>Vendor scheduling</li>
            <li>Customer delays</li>
            <li>Scope changes</li>
            <li>Structural issues</li>
            <li>Regional labour constraints</li>
          </ul>

          <p className="mt-2">
            Ibasho is not legally liable for delays but will provide
            transparency and revised schedules whenever delays occur.
          </p>
        </div>
        <hr className="border-black" />
        {/* 12. Customer Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            12. Customer Responsibilities
          </h2>
          <p>
            To ensure safe, respectful, and successful execution of services,
            customers agree to:
          </p>
          <h3 className="text-xl font-semibold mt-4">
            12.1 Appropriate Conduct
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Maintain respectful behaviour toward Ibasho staff, vendors,
              technicians, and engineers.
            </li>
            <li>
              Ensure no harassment, abusive behaviour, or verbal/physical
              misconduct occurs.
            </li>
            <li>Provide a safe and accessible environment during visits.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            12.2 Home Access & Readiness
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Ensure timely access to the property for assessments and
              installation.
            </li>
            <li>
              Remove fragile, valuable, or obstructive items from work areas.
            </li>
            <li>
              Follow safety instructions provided by the installation team.
            </li>
          </ul>

          <p className="mt-2">
            Failure to maintain proper conduct or provide safe working
            conditions may lead to suspension of services.
          </p>
        </div>
        <hr className="border-black" />
        {/* 13. Disclaimer */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            13. Disclaimer (Fall Risk Calculator & Website)
          </h2>
          <p>
            The information provided by Ibasho—including fall‑risk scores, home
            safety suggestions, and all website content—is intended for
            informational and educational purposes only.
          </p>

          <h3 className="text-xl font-semibold mt-4">
            13.1 Not Medical Advice
          </h3>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              The Fall Risk Calculator does not diagnose, treat, or predict
              medical conditions.
            </li>
            <li>It is not a substitute for professional medical advice.</li>
            <li>
              Users should consult a qualified healthcare provider for medical
              guidance.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            13.2 Accuracy of Output
          </h3>
          <p className="mt-1">
            The calculator provides a generalised fall‑risk assessment based on
            user inputs. Actual risk may vary depending on factors not captured
            in the tool.
          </p>

          <h3 className="text-xl font-semibold mt-4">13.3 No Liability</h3>
          <p className="mt-2">Ibasho is not liable for:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Injuries, falls, or incidents occurring before or after use of the
              tool
            </li>
            <li>Misinterpretation of results</li>
            <li>Actions taken based on the tool’s output</li>
            <li>Errors caused by inaccurate or incomplete user-entered data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            13.4 Home Transformation Recommendations
          </h3>
          <p className="mt-1">
            Recommendations provided by Ibasho are suggestive and do not
            guarantee fall prevention.
          </p>
        </div>
        <hr className="border-black" />
        {/* 14. External Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">14. External Links</h2>
          <p>
            Ibasho is not responsible for the content on external websites
            linked from the platform.
          </p>
        </div>
        <hr className="border-black" />
        {/* 15. Acceptance */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">15. Acceptance</h2>
          <p>
            By using the website and Fall Risk Calculator, you acknowledge and
            accept this disclaimer.
          </p>
        </div>
        <hr className="border-black" />
        {/* 16. Privacy */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            16. Privacy & Data Use
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Ibasho may collect personal information for service delivery,
              assessment, or communication.
            </li>
            <li>Data will be handled according to our Privacy Policy.</li>
            <li>Ibasho does not sell user data to third parties.</li>
          </ul>
        </div>
        <hr className="border-black" />
        {/* 17. User Responsibilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            17. User Responsibilities
          </h2>
          <p>Users agree not to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Misuse the website or tools</li>
            <li>Interfere with Ibasho services</li>
            <li>Upload harmful, malicious, or fraudulent content</li>
            <li>Use the platform for unlawful purposes</li>
          </ul>
        </div>
        <hr className="border-black" />
        {/* 18. Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            18. Limitation of Liability
          </h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              Ibasho is not liable for any direct, indirect, incidental, or
              consequential damages arising from use of our website, calculator,
              or services.
            </li>

            <li>
              Ibasho does not guarantee prevention of falls, injuries, or
              damages even after home transformations.
            </li>
          </ul>
          <p className="mt-2">
            Users accept full responsibility for decisions made based on
            Ibasho’s recommendations.
          </p>
        </div>
        <hr className="border-black" />
        {/* 19. Indemnification */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">19. Indemnification</h2>
          <p>
            You agree to indemnify and hold Ibasho, its team, and partners
            harmless from any claims, damages, losses, or liabilities arising
            out of:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Your use of the website or services</li>
            <li>Your violation of these Terms</li>
            <li>Your reliance on non-medical recommendations</li>
          </ul>
        </div>
        <hr className="border-black" />
        {/* 20. Modification of Terms */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            20. Modification of Terms
          </h2>
          <p>
            Ibasho may update or modify these Terms at any time. The latest
            version will always be available on our website. Continued use of
            the platform implies acceptance of updated Terms.
          </p>
        </div>
        <hr className="border-black" />
        {/* 21. Governing Law */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">21. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be
            subject to the jurisdiction of courts located in New Delhi, India.
          </p>
        </div>
        <hr className="border-black" />
        {/* 22. Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">22. Contact Us</h2>
          <p>
            For any questions or concerns about these Terms, you may contact us
            at:
          </p>
          <ul className="list-disc ml-6 ">
            <li className="mt-2 font-semibold ">
              Email:
              <a
                href="mailto:safehome@ibasholiving.com"
                className="text-blue-600 underline ml-1 font-light"
              >
                safehome@ibasholiving.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
