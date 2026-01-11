"use client";
import ServicesCardView from "@/components/common/ServicesCardView";
import ContactUsSection from "@/components/HomePage/ContactUsSection";
import MultiStepForm from "@/components/Services/MultiStepForm";
import AssessmentResult from "@/components/Services/AssessmentResult";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import RequestOtpForm from "@/components/Services/RequestOTPForm";
import OtpVerificationForm from "@/components/Services/OtpVerificationForm";
import axios from "axios";
import { BASE_URL } from "../url";
import { detectInputType } from "@/helpers/utils";

const metadata: Metadata = {
  title: "Our Services | Ibasho",
  description: "Tailored Solutions for Every Stage of Care",
};

export type AssessmentData =
  | {
      age: number;
      gender: "male" | "female";
    }
  | {
      elder_friendly_home: "yes" | "no";
      emergency_help_available: "yes" | "no";
    }
  | {
      can_walk_independently: "yes" | "no";
      balance_issues: "yes" | "no";
    }
  | {
      vision_level:
        | "normal"
        | "mild_impaired"
        | "moderate_impaired"
        | "severe_impaired";
      had_falls_recently: "yes" | "no";
    };
export default function Services() {
  const [startAssessmentClicked, setStartAssessmentClicked] = useState(false);
  //TODO
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>({
    age: 3,
  });
  const [riskLevel, setRiskLevel] = useState<string | null>(null);
  //TODO
  const [userData, setUserData] = useState<{
    name: string;
    emailOrPhone: string;
  } | null>({ name: "vish", emailOrPhone: "+91 7898868959" });
  //TODO
  const [shouldShowOtpVerify, setShouldShowOtpVerify] = useState(true);
  const [otp, setOtp] = useState<number | null>(null);
  const inputType = useRef("invalid");
  useEffect(() => {
    if (userData != null) {
      inputType.current = detectInputType(userData.emailOrPhone);
      let urlSuffix = "/send-otp/phone";
      let body = {};

      if (inputType.current === "phone") {
        urlSuffix = "/send-otp/phone";
        body = { phone: userData.emailOrPhone };
      } else if (inputType.current === "email") {
        urlSuffix = "/send-otp/email";
        body = { email: userData.emailOrPhone };
      } else {
        return;
      }
      //MAKe CORS policy in backedend to allow requests from localhost:3000 only
      axios
        .post(BASE_URL + urlSuffix, body)
        .then((response) => {
          console.log("OTP sent successfully:", response.data);
          setShouldShowOtpVerify(true);
        })
        .catch((error) => {
          console.error("Error sending OTP:", error);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (otp != null) {
      const email =
        inputType.current === "email" ? userData?.emailOrPhone : null;
      const phone =
        inputType.current === "phone" ? userData?.emailOrPhone : null;
      axios
        .post(BASE_URL + "/verify-otp", {
          email,
          phone,
          otp,
        })
        .then((response) => {
          console.log("OTP verified successfully:", response.data);

          axios
            .post(BASE_URL + "/compute-risk-score", {
              ...assessmentData,
              name: userData?.name,
              email,
              phone,
            })
            .then((response) => {
              console.log(response.data);
              setRiskLevel(response.data);
            })
            .catch((error) => {
              console.error("unable to compute score");
            });
        })
        .catch((error) => {
          console.error("Error sending OTP:", error);
        });
    }
  }, [otp]);

  const resetAssessment = useCallback(() => {
    setAssessmentData(null);
    setUserData(null);
    setRiskLevel(null);
    setShouldShowOtpVerify(false);
  }, []);
  return (
    <>
      <section className="container mx-auto flex flex-col justify-center items-center px-6 py-18 md:py-24 gap-4 md:gap-6">
        <h3 className="text-strong text-4.5xl md:text-5.5xl font-bold text-center leading-12 md:leading-16">
          <span className="text-accent">Tailored Solutions for</span> Every
          Stage of Care
        </h3>
        <p className="md:text-lg text-center max-w-4xl mb-14">
          Every home is different — and so are the needs of the people who live
          in it. <br /> At Ibasho, we bring design, safety, and empathy together
          to make homes aging-friendly so your parents can live independently,
          comfortably, and confidently
        </p>
        <ServicesCardView />
      </section>
      <section className="bg-strong py-24">
        {assessmentData != null ? (
          riskLevel != null ? (
            <AssessmentResult
              riskLevel={riskLevel}
              resetAssessment={resetAssessment}
            />
          ) : shouldShowOtpVerify ? (
            <OtpVerificationForm
              setOtp={setOtp}
              phoneOrEmail={userData?.emailOrPhone}
            />
          ) : (
            <RequestOtpForm setUserData={setUserData} />
          )
        ) : startAssessmentClicked ? (
          <MultiStepForm setAssessmentData={setAssessmentData} />
        ) : (
          <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center px-6">
            <div className="max-w-3xl">
              <h3 className="text-primary text-3xl text-4.5xl font-bold">
                Your parent’s fall risk calculator
              </h3>
              <p className="text-primary my-6 md:text-lg">
                Falls are preventable. This 2-minute assessment helps you
                identify risk factors and learn simple, meaningful steps to make
                your parent’s home safer.
              </p>

              <p className="italic text-accent md:text-lg">
                Takes less than 2 minutes. No personal data stored.
              </p>
            </div>
            <div>
              <Button
                type="button"
                variant="default"
                className="rounded-none bg-primary hover:cursor-pointer hover:bg-accent/80 text-lg px-4 py-6 font-normal"
                onClick={() => setStartAssessmentClicked(true)}
              >
                Start Assessment
              </Button>
            </div>
          </div>
        )}
      </section>
      <ContactUsSection />
    </>
  );
}
