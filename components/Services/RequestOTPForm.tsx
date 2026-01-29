"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

import forwardArrow from "@/app/assets/forward_arrow.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

/* -----------------------------
   Zod Schemas 
------------------------------*/
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  emailOrPhone: z.string().refine(
    (val) => {
      const isEmail = z.email().safeParse(val).success;
      const isPhone = /^\+[1-9]\d{1,14}$/.test(val);
      // return isEmail || isPhone;
      return isEmail;
    },
    // { message: "Enter a valid email or phone number" },
    { message: "Enter a valid email" },
  ),
});

export default function RequestOtpForm({
  setUserData,
}: {
  setUserData: Dispatch<
    SetStateAction<{
      name: string;
      emailOrPhone: string;
    } | null>
  >;
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    shouldUnregister: false,
    defaultValues: {
      name: undefined,
      emailOrPhone: undefined,
    },
  });

  const { handleSubmit, formState } = form;
  const { isValid } = formState;

  const onSubmit = handleSubmit((data) => {
    setUserData(data);
  });

  return (
    <Card className="max-w-2xl mx-auto mt-10 rounded-xs shadow-2xl">
      <CardHeader className="my-4 text-center">
        <h3 className="text-strong font-semibold text-3xl">
          Just one last step to view the risk score
        </h3>
      </CardHeader>

      <CardContent className="space-y-2">
        <FormProvider {...form}>
          <form className="space-y-4 ">
            <>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal">
                      Name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        className="rounded-none border-black h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailOrPhone"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="font-normal text-sm">
                      Email
                      {/* Email or Phone Number (with country code){" "} */}
                      <span className="text-red-500">*</span>
                    </FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        value={field.value ?? ""}
                        className="rounded-none border-black h-12"
                      />
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
          Submit
          <Image src={forwardArrow} alt="Next" width={16} height={16} />
        </Button>
      </CardContent>
    </Card>
  );
}
