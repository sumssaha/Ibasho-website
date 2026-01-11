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
import { AssessmentData } from "@/app/services/page";
import rightArrowIcon from "@/app/assets/black_right_arrow.png";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export default function AssessmentResult({
  riskLevel,
  resetAssessment,
}: {
  riskLevel: string;
  resetAssessment: () => void;
}) {
  function determineRiskLevel(assessmentData: AssessmentData) {
    let userScore = 0;
    const {
      age,
      gender,
      elder_friendly_home,
      emergency_help_available,
      can_walk_independently,
      balance_issues,
      vision_level,
      had_falls_recently,
    } = assessmentData;

    //Age
    if (age > 65) {
      userScore += 5;
    } else if (age >= 60 && age <= 65) {
      userScore += 4.5;
    } else {
      userScore += 1;
    }

    //Gender
    if (gender === "female") {
      userScore += 0.5;
    }

    //Living Environment
    if (elder_friendly_home === "no") {
      userScore += 3;
    }

    //Emergency Help
    if (emergency_help_available === "no") {
      userScore += 1;
    }

    //Mobility
    if (can_walk_independently === "no") {
      userScore += 3;
    }

    //Health Condition
    if (balance_issues === "yes") {
      userScore += 3;
    }

    //Vision
    if (vision_level === "mild_impaired") {
      userScore += 0;
    } else if (vision_level === "moderate_impaired") {
      userScore += 1;
    } else if (vision_level === "severe_impaired") {
      userScore += 2;
    }

    //Fall History
    if (had_falls_recently === "yes") {
      userScore += 3;
    }

    const fallRiskPercentage = Math.abs((userScore / 20.5) * 100);

    if (fallRiskPercentage >= 0 && fallRiskPercentage <= 30) {
      return "low";
    } else if (fallRiskPercentage >= 31 && fallRiskPercentage <= 50) {
      return "moderate";
    } else {
      return "high";
    }
  }
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

  return (
    <>
      <Card className="container mx-auto flex  px-6 py-18 gap-4 md:gap-6 rounded-sm">
        <CardHeader className="flex flex-col space-y-4 px-16">
          <div className="flex justify-between items-center w-full">
            <div className="space-x-2 flex items-center ">
              <Image src={alertIcon} alt="Alert Icon" className="m-0" />
              <h3 className="text-strong font-bold">
                Risk Assessment Complete
              </h3>
            </div>

            <Button
              type="button"
              variant="default"
              className="px-2 rounded-none border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 text-lg  py-5 font-normal outline-none text-strong font-semibold flex"
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
                  className="flex items-start space-x-4 py-6 bg-[#F8F9FA] rounded-lg px-6"
                >
                  <div className="bg-strong rounded-lg p-3">
                    <Image
                      src={impact.icon}
                      alt={impact.title}
                      className="m-0"
                    />
                  </div>

                  <div className="space-y-2">
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
              <div className="space-x-4 pt-4 flex item-center justify-center">
                <Link href="#contact" className="rounded-lg flex w-fit ">
                  <Button
                    type="button"
                    variant="default"
                    className="rounded-lg border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 text-lg p-6 font-normal outline-none"
                  >
                    Book a Free Consultation{" "}
                    <Image
                      src={rightArrowIcon}
                      alt="Right Arrow Icon"
                      className="m-0"
                    />
                  </Button>
                </Link>

                <Button
                  onClick={() => {
                    console.log("click");
                    resetAssessment();
                  }}
                  type="button"
                  variant="default"
                  className="bg-transparent text-white rounded-lg border border-solid border-white hover:cursor-pointer hover:bg-accent/80 text-lg p-6 font-normal outline-none"
                >
                  Take Assessment Again
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
