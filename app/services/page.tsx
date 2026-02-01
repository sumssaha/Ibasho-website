"use client";
import ServicesCardView from "@/components/common/ServicesCardView";
import ContactUsSection from "@/components/HomePage/ContactUsSection";
import AssessmentResult from "@/components/Services/AssessmentResult";
import MultiStepForm from "@/components/Services/MultiStepForm";
import OtpVerificationForm from "@/components/Services/OtpVerificationForm";
import RequestOtpForm, {
  UserFormData,
} from "@/components/Services/RequestOTPForm";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import axios from "axios";
import { Metadata } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { BASE_URL } from "../url";

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

  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(
    null,
  );
  const [riskLevel, setRiskLevel] = useState<string | null>(null);

  const [userData, setUserData] = useState<UserFormData | null>(null);

  const [shouldShowOtpVerify, setShouldShowOtpVerify] = useState(false);
  const [otp, setOtp] = useState<string | null>(null);

  const userId = useRef(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationId, setVerificationId] = useState<string | null>(null);

  useEffect(() => {
    if (userData != null) {
      let urlSuffix = "/send-otp/phone";
      let body = {};

      if (userData.contactType === "phone") {
        urlSuffix = "/send-otp/phone";
        body = {
          phoneNumber: userData.phone,
          countryCode: userData.countryCode,
          name: userData.name,
        };
      } else {
        urlSuffix = "/send-otp/email";
        body = { email: userData.email, name: userData.name };
      }
      setIsLoading(true);

      axios
        .post(BASE_URL + urlSuffix, body)
        .then((response) => {
          if (response.data.success) {
            if (userData.contactType === "phone") {
              const vId = response.data.verificationId || response.data;
              setVerificationId(vId);
            }
            setShouldShowOtpVerify(true);
            toast.success("OTP sent successfully", {
              position: "top-center",
              richColors: true,
            });
          } else {
            toast.error("Error sending otp", {
              position: "top-center",
              richColors: true,
            });
          }
        })
        .catch((error) => {
          const msg = error.response?.data?.message || error.message;
          toast.error("Error sending OTP:" + msg, {
            position: "top-center",
            richColors: true,
          });
          console.error("Error sending OTP:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (otp != null) {
      let body = {};
      if (userData?.contactType === "email") {
        body = {
          email: userData?.email,
          name: userData?.name,
          otp,
        };
      }
      if (userData?.contactType === "phone") {
        body = {
          phoneNumber: userData?.phone,
          countryCode: userData?.countryCode,
          name: userData?.name,
          otp,
          verificationId: verificationId,
        };
      }
      setIsLoading(true);

      axios
        .post(BASE_URL + "/verify-otp", body)
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message, {
              position: "top-center",
              richColors: true,
            });

            axios
              .post(BASE_URL + "/users/assessment", {
                ...assessmentData,
                userId: response.data.userId,
              })
              .then((res) => {
                if (res.data.success) {
                  setRiskLevel(res.data.riskLevel);
                  userId.current = res.data.updatedUser.PK;
                }
                setIsLoading(false);
              })
              .catch((error) => {
                toast.error("Unable to assess user. Please contact support", {
                  position: "top-center",
                  richColors: true,
                });
                console.error("unable to compute score");
                setIsLoading(false);
              });
          }
        })
        .catch((error) => {
          const msg = error.response?.data?.message || error.message;
          toast.error("Error verifying OTP:" + msg, {
            position: "top-center",
            richColors: true,
          });
          setIsLoading(false);
          console.error("Error verifying OTP:", error);
        });
    }
  }, [otp]);

  const resetAssessment = useCallback(() => {
    setAssessmentData(null);
    setUserData(null);
    setRiskLevel(null);
    setShouldShowOtpVerify(false);
    setOtp(null);
    userId.current = -1;
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
          to make homes ageing-friendly so your parents can live independently,
          comfortably, and confidently
        </p>
        <ServicesCardView />
      </section>
      <section className="bg-strong py-24" id="risk-calculator">
        {isLoading ? (
          <div className="flex items-center flex-col text-white gap-6">
            <Spinner className="size-8" />
            Please Wait...
          </div>
        ) : assessmentData != null ? (
          riskLevel != null ? (
            <AssessmentResult
              riskLevel={riskLevel}
              userId={userId.current}
              resetAssessment={resetAssessment}
            />
          ) : shouldShowOtpVerify ? (
            <OtpVerificationForm
              setOtp={setOtp}
              phoneOrEmail={userData?.email || userData?.phone}
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
