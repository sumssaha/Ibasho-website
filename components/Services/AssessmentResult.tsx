"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import alertIcon from "@/app/assets/alert.svg";
import downloadIcon from "@/app/assets/download.svg";
import trendIcon from "@/app/assets/trend.svg";
import heartIcon from "@/app/assets/heart.svg";
import homeIcon from "@/app/assets/home.svg";
import peopleIcon from "@/app/assets/people.svg";
import dollarIcon from "@/app/assets/dollar.svg";
import Image from "next/image";
import AssessmentResultChip from "./AssessmentResultChip";
import { Button } from "../ui/button";
import rightArrowIcon from "@/app/assets/black_right_arrow.svg";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "@/app/url";
import { toast } from "sonner";

export default function AssessmentResult({
  riskLevel,
  userId,
  resetAssessment,
}: {
  riskLevel: string;
  userId: number;
  resetAssessment: () => void;
}) {
  const impactOfFalls = [
    {
      icon: heartIcon,
      title: "Emotional Health",
      content:
        "Fear of falling again often leads to anxiety, reduced confidence, and loss of independence. Many seniors begin to limit their daily activities, even simple ones like walking to the kitchen or bathroom at night.",
    },
    {
      icon: homeIcon,
      title: "Loss of Independence",
      content:
        "After a serious fall, even temporary immobility can make seniors depend on others for bathing, eating, or moving around — deeply affecting self-esteem.",
    },
    {
      icon: peopleIcon,
      title: "Caregiver Burden",
      content:
        "Family members often miss work, face physical strain, or emotional stress caring for recovering elders. Office absenteeism and burnout are common in such situations.",
    },
    {
      icon: trendIcon,
      title: "Disability Risk",
      content:
        "Hip fractures or head injuries can cause long-term disability, needing physiotherapy or mobility aids permanently.",
    },
    {
      icon: dollarIcon,
      title: "Financial Cost",
      content:
        "The average cost of hospital treatment after a fall is ₹2–3 lakh. Post-recovery care, physiotherapy, and home modifications can add another ₹1 lakh or more.",
    },
  ];

  const requestPdfDownload = () => {
    toast.info("Please wait...", {
      position: "top-center",
      richColors: true,
    });

    axios
      .post(
        BASE_URL + "/users/generateReport",
        { userId },
        {
          responseType: "blob",
        },
      )
      .then((response) => {
        const blob = new Blob([response.data], {
          type: "application/pdf",
        });

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "assessment-report.pdf";
        a.click();
        toast.success("Downloading...", {
          position: "top-center",
          richColors: true,
        });
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        toast.error("Unable to download PDF Report. Please contact support", {
          position: "top-center",
          richColors: true,
        });
        console.error(
          "Unable to download PDF Report. Please contact support",
          error,
        );
      });
  };
  return (
    <>
      <Card className="container mx-auto flex  px-6 py-18 gap-4 md:gap-6 rounded-sm">
        <CardHeader className="flex flex-col space-y-4 px-16">
          <div className="flex justify-between md:items-center w-full flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="space-x-2 flex items-center ">
              <Image src={alertIcon} alt="Alert Icon" className="m-0" />
              <h3 className="text-strong font-bold">
                Risk Assessment Complete
              </h3>
            </div>

            <Button
              type="button"
              variant="default"
              className="whitespace-normal px-2 rounded-none border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 text-lg outline-none text-strong font-semibold flex py-10 sm:py-4"
              onClick={requestPdfDownload}
            >
              <Image src={downloadIcon} alt="Download Icon" className="" />
              Download Report
            </Button>
          </div>

          <AssessmentResultChip risk={riskLevel} />
        </CardHeader>

        <CardContent className="space-y-2">
          <p className="py-14 max-w-3xl leading-7 px-10">
            Your parent faces {riskLevel} fall risks. Preventive measures can
            significantly improve their safety and independence.
          </p>
          <div>
            <p className="text-center font-bold text-strong">
              Understanding the impact of a Fall
            </p>
            <ul className="space-y-6 mt-10">
              {impactOfFalls.map((impact) => (
                <li
                  key={impact.title}
                  className="flex md:flex-row flex-col items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0 py-6 bg-[#F8F9FA] rounded-lg px-6"
                >
                  <div className="bg-strong rounded-lg p-3 w-18 max-w-12 md:max-w-18 lg:max-w-12">
                    <Image
                      src={impact.icon}
                      alt={impact.title}
                      className="m-0 w-full"
                    />
                  </div>

                  <div className="space-y-2 text-center md:text-left">
                    <h4 className="font-bold text-black">{impact.title}</h4>
                    <p className=" text-[#666666]">{impact.content}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="bg-strong text-white text-center mt-14 p-10 rounded-lg space-y-4">
              <h5 className="font-bold">Ready to Make Their Home Safer?</h5>
              <p className="font-normal opacity-90 max-w-2xl mx-auto">
                At Ibasho, we transform homes into safe, comfortable spaces
                where your parents can age with dignity and independence.
              </p>
              <div className="space-x-0 md:space-x-4 space-y-4 md:space-y-0 pt-4 flex items-center justify-center flex-col md:flex-row">
                <Link
                  href="#contact"
                  className="rounded-lg flex w-full md:w-fit"
                >
                  <Button
                    type="button"
                    variant="default"
                    className="text-sm w-full rounded-lg border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 md:text-lg p-6 font-normal outline-none"
                  >
                    <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center">
                      <span className="">Book a Free</span>

                      <span className="flex items-center gap-2 whitespace-nowrap">
                        Consultation
                        <Image
                          src={rightArrowIcon}
                          alt="Right Arrow Icon"
                          className="shrink-0"
                        />
                      </span>
                    </span>
                  </Button>
                </Link>

                <Button
                  onClick={() => {
                    resetAssessment();
                  }}
                  type="button"
                  variant="default"
                  className="text-sm whitespace-normal w-full md:w-fit bg-transparent text-white rounded-lg border border-solid border-white hover:cursor-pointer hover:bg-accent/80 md:text-lg p-6 font-normal outline-none"
                >
                  <span className="flex flex-wrap items-center justify-center wrap-break-words text-center">
                    Take Assessment Again
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
