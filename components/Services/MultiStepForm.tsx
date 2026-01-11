"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Image from "next/image";
import forwardArrow from "@/app/assets/forward_arrow.svg";
import backArrow from "@/app/assets/back_arrow.svg";
import infoIcon from "@/app/assets/info.svg";
import { AssessmentData } from "@/app/services/page";

/* -----------------------------
   Zod Schemas per Step
------------------------------*/
export const stepSchemas = [
  // STEP 1
  z.object({
    age: z.coerce
      .number()
      .int("Age must be an integer")
      .min(18, "Age must be at least 18 years old")
      .max(120, "Age cannot be more than 120 years"),

    gender: z.enum(["male", "female"], {
      message: "Gender is required",
    }),
  }),

  // STEP 2
  z.object({
    elder_friendly_home: z.enum(["yes", "no"], {
      message: "This field is required",
    }),

    emergency_help_available: z.enum(["yes", "no"], {
      message: "This field is required",
    }),
  }),

  // STEP 3
  z.object({
    can_walk_independently: z.enum(["yes", "no"], {
      message: "This field is required",
    }),

    balance_issues: z.enum(["yes", "no"], {
      message: "This field is required",
    }),
  }),

  // STEP 4
  z.object({
    vision_level: z.enum(
      ["normal", "mild_impaired", "moderate_impaired", "severe_impaired"],
      {
        message: "This field is required",
      }
    ),

    had_falls_recently: z.enum(["yes", "no"], {
      message: "This field is required",
    }),
  }),
];

const steps = [
  {
    title: "Personal Details",
    subtitle: "Let's start with some basic information about your parent",
  },
  {
    title: "Living Environment",
    subtitle: "Tell us about your home environment",
  },
  {
    title: "Mobility & Health",
    subtitle: "Understanding their physical capabilities",
  },
  {
    title: "Vision & Fall History",
    subtitle: "Final details to complete the assessment",
  },
];

export default function MultiStepForm({
  setAssessmentData,
}: {
  setAssessmentData: Dispatch<SetStateAction<AssessmentData | null>>;
}) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const totalSteps = steps.length;
  const progress = Math.round(((step + 1) / totalSteps) * 100);

  const form = useForm({
    resolver: zodResolver(stepSchemas[step]),
    mode: "onTouched",
    shouldUnregister: false,
    defaultValues: {
      age: "",
      gender: undefined,
      elder_friendly_home: undefined,
      emergency_help_available: undefined,
      can_walk_independently: undefined,
      balance_issues: undefined,
      vision_level: undefined,
      had_falls_recently: undefined,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onNext = handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((s) => s + 1);
  });

  const onSubmit = handleSubmit((data) => {
    const finalData = { ...formData, ...data };
    setAssessmentData(finalData);
  });

  return (
    <Card className="max-w-2xl mx-auto mt-10 rounded-xs shadow-2xl">
      <CardHeader className="space-y-4 ">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-strong">
            Step {step + 1} of {totalSteps}
          </span>
          <span className="text-muted-foreground">{progress}% complete</span>
        </div>
        <Progress
          value={progress}
          className="[&>div]:bg-strong [&>div]:transition-all bg-gray-300"
          color="red"
        />
      </CardHeader>

      <CardContent className="space-y-2">
        <h2 className="text-strong font-bold">{steps[step].title}</h2>

        <h3 className="text-[#666666]">{steps[step].subtitle}</h3>
        <FormProvider {...form}>
          <form className="space-y-4 pt-4">
            {/* STEP 1 */}
            {step === 0 && (
              <>
                <div className="space-y-2">
                  <Label className="font-normal text-sm">Age</Label>
                  <Input
                    {...register("age")}
                    placeholder="Enter age"
                    className="border border-solid border-black rounded-none w-1/3 h-12"
                  />
                  {errors.age && (
                    <p className="text-sm text-destructive">
                      {errors.age.message}
                    </p>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-normal text-sm">
                        Gender
                      </FormLabel>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex gap-20"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="male"
                              id="male"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="male"
                              className="font-normal text-sm"
                            >
                              Male
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="female"
                              id="female"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="female"
                              className="font-normal text-sm"
                            >
                              Female
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <hr className="my-4" />
              </>
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="elder_friendly_home"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-normal text-sm m-0">
                        Is the home elder-friendly?
                      </FormLabel>
                      <div className="flex justify-start items-center space-x-1">
                        <Image src={infoIcon} alt="info" />
                        <p className="text-[#666666] text-sm">
                          (Has grab bars, non-slip flooring, adequate lighting,
                          etc.)
                        </p>
                      </div>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id="is-elder-friendly"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="is-elder-friendly"
                              className="font-normal text-sm"
                            >
                              Yes
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id="is-not-elder-friendly"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="is-not-elder-friendly"
                              className="font-normal text-sm"
                            >
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="emergency_help_available"
                  render={({ field }) => (
                    <FormItem className="space-y-2 pt-4">
                      <FormLabel className="font-normal text-sm m-0">
                        Emergency Help Availability
                      </FormLabel>
                      <div className="flex justify-start items-center space-x-1">
                        <Image src={infoIcon} alt="info" />
                        <p className="text-[#666666] text-sm">
                          If your parent falls, will someone be available to
                          help immediately?
                        </p>
                      </div>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id="help_available"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="help_available"
                              className="font-normal text-sm"
                            >
                              Yes
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id="help_not_available"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="help_not_available"
                              className="font-normal text-sm"
                            >
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <hr className="my-4" />
              </>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="can_walk_independently"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-normal text-sm m-0">
                        Can they walk independently?
                      </FormLabel>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id="can_walk_independently"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="can_walk_independently"
                              className="font-normal text-sm"
                            >
                              Yes, without support
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id="cannot_walk_independently"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="cannot_walk_independently"
                              className="font-normal text-sm"
                            >
                              No, needs walker/cane/assistance
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="balance_issues"
                  render={({ field }) => (
                    <FormItem className="space-y-2 pt-4">
                      <FormLabel className="font-normal text-sm m-0">
                        Do they have joint, muscle, or balance issues?
                      </FormLabel>
                      <div className="flex justify-start items-center space-x-1">
                        <Image src={infoIcon} alt="info" />
                        <p className="text-[#666666] text-sm">
                          (Arthritis, osteoporosis, vertigo, etc.)
                        </p>
                      </div>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id="yes"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="yes"
                              className="font-normal text-sm"
                            >
                              Yes
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id="No"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label htmlFor="No" className="font-normal text-sm">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <hr className="my-4" />
              </>
            )}

            {step === 3 && (
              <>
                <FormField
                  control={form.control}
                  name="vision_level"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-normal text-sm m-0">
                        Vision Level
                      </FormLabel>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="normal"
                              id="normal"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="normal"
                              className="font-normal text-sm"
                            >
                              Normal (with or without glasses)
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="mild_impaired"
                              id="mild_impaired"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="mild_impaired"
                              className="font-normal text-sm"
                            >
                              Mild impairment
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="moderate_impaired"
                              id="moderate_impaired"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="moderate_impaired"
                              className="font-normal text-sm"
                            >
                              Moderate impairment
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="severe_impaired"
                              id="severe_impaired"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="severe_impaired"
                              className="font-normal text-sm"
                            >
                              Severe impairment
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="had_falls_recently"
                  render={({ field }) => (
                    <FormItem className="space-y-2 pt-4">
                      <FormLabel className="font-normal text-sm m-0">
                        Have they fallen in the past 12 months?
                      </FormLabel>

                      <FormControl>
                        <RadioGroup
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                          className="flex flex-col gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="yes"
                              id="had_fallen"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="had_fallen"
                              className="font-normal text-sm"
                            >
                              Yes
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="no"
                              id="had_not_fallen"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="had_not_fallen"
                              className="font-normal text-sm"
                            >
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <hr className="my-4" />
              </>
            )}
          </form>
        </FormProvider>

        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className={`${
              step === 0 ? "invisible" : ""
            }  rounded-none h-10 px-6 space-x-1 border border-solid border-black select-none cursor-pointer`}
          >
            <Image src={backArrow} alt="back" width={16} height={16} />
            Back
          </Button>

          {step < totalSteps - 1 ? (
            <Button
              onClick={onNext}
              disabled={!isValid}
              className="bg-accent text-white rounded-none h-10 px-6 space-x-1 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-accent/80 cursor-pointer select-none"
            >
              Continue
              <Image src={forwardArrow} alt="Next" width={16} height={16} />
            </Button>
          ) : (
            <Button
              onClick={onSubmit}
              disabled={!isValid}
              className="bg-accent text-white rounded-none h-10 px-6 space-x-1 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-accent/80 cursor-pointer select-none"
            >
              View Results
              <Image src={forwardArrow} alt="Next" width={16} height={16} />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
