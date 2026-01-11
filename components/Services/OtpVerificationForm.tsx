"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
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

/* -----------------------------
   Zod Schemas per Step
------------------------------*/
const schema = z.object({
  otp: z
    .string()
    .min(4, "OTP must be 4 digits")
    .max(4, "OTP must be 5 digits")
    .regex(/^\d{4}$/, "OTP must contain only numbers"),
});

export default function OtpVerificationForm({
  phoneOrEmail,
  setOtp,
}: {
  phoneOrEmail?: string;
  setOtp: Dispatch<SetStateAction<number | null>>;
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
    shouldUnregister: false,
    defaultValues: {
      otp: undefined,
    },
  });

  const { handleSubmit, formState } = form;
  const { isValid } = formState;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setOtp(data.otp);
  });

  return (
    <Card className="max-w-2xl mx-auto mt-10 rounded-xs shadow-2xl gap-0">
      <CardHeader className="my-4 text-center">
        <h3 className="text-strong font-semibold text-3xl">
          Verify your contact details
        </h3>
        <p className="max-w-sm mt-4 mx-auto">
          We have sent one time password (OTP) at{" "}
          {phoneOrEmail?.includes(".com")
            ? phoneOrEmail
                .slice(0, phoneOrEmail.indexOf("@"))
                .split("")
                .map(() => "x")
                .join("")
                .concat(phoneOrEmail.slice(phoneOrEmail.indexOf("@")))
            : phoneOrEmail?.slice(0, 3).concat(
                phoneOrEmail
                  .slice(3)
                  .split("")
                  .map(() => "x")
                  .join("")
              )}
        </p>
      </CardHeader>

      <CardContent className="space-y-2">
        <FormProvider {...form}>
          <form className="space-y-4 pt-4 ">
            <>
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="mx-auto text-center">
                    <FormLabel className="font-normal mx-auto text-center">
                      OTP
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        {...field}
                        containerClassName="justify-center"
                      >
                        <InputOTPSlot
                          index={0}
                          className="rounded-none !rounded-l-none border-solid border-black border"
                        />
                        <InputOTPSlot
                          index={1}
                          className="rounded-none border-solid border-black border"
                        />
                        <InputOTPSlot
                          index={2}
                          className="rounded-none border-solid border-black border"
                        />
                        <InputOTPSlot
                          index={3}
                          className="rounded-none !rounded-r-none border-solid border-black border"
                        />
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <hr className="my-8" />
            </>
          </form>
        </FormProvider>

        <Button
          onClick={onSubmit}
          disabled={!isValid}
          className="w-full bg-accent text-white rounded-none h-10 px-6 space-x-1 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-accent/80 cursor-pointer select-none"
        >
          Get Risk Score
          <Image src={forwardArrow} alt="Next" width={16} height={16} />
        </Button>
      </CardContent>
    </Card>
  );
}
