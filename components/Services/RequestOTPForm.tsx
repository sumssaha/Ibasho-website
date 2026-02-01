"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { PhoneInput } from "react-international-phone";

/* -----------------------------
   Zod Schemas 
------------------------------*/
const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    contactType: z.enum(["email", "phone"]),
    email: z.string().optional(),
    phone: z.string().optional(),
    countryCode: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.contactType === "email") {
      if (!data.email || !z.string().email().safeParse(data.email).success) {
        ctx.addIssue({
          code: "custom",
          path: ["email"],
          message: "Enter a valid email address",
        });
      }
    }

    if (data.contactType === "phone") {
      const phoneVal = (data.phone || "").replace(/\s+/g, "");
      const codeVal = (data.countryCode || "").replace(/\s+/g, "");

      // Only trigger error if user has typed something beyond the country code
      // and it's still invalid, OR if it's totally empty.
      if (
        !phoneVal ||
        phoneVal === codeVal ||
        phoneVal.length <= codeVal.length
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["phone"],
          message: "Phone number is required",
        });
      }
    }
  });

export type UserFormData = z.infer<typeof schema>;

export default function RequestOtpForm({
  setUserData,
}: {
  setUserData: Dispatch<SetStateAction<UserFormData | null>>;
}) {
  const form = useForm<UserFormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      contactType: "phone",
      email: "",
      phone: "",
      countryCode: "",
    },
  });
  const { errors } = form.formState;
  console.log("Form Errors:", errors);
  const contactType = form.watch("contactType");

  const handleTypeChange = (val: "email" | "phone") => {
    form.setValue("contactType", val);
    form.clearErrors();

    if (val === "email") {
      // Reset phone fields without triggering validation
      form.setValue("phone", "", { shouldValidate: false, shouldDirty: false });
      form.setValue("countryCode", "", { shouldValidate: false });
    } else {
      // Reset email without triggering validation
      form.setValue("email", "", { shouldValidate: false, shouldDirty: false });
    }
  };

  const onSubmit = form.handleSubmit((data) => {
    let finalData = { ...data };

    if (data.contactType === "phone" && data.phone && data.countryCode) {
      // Logic to get phone WITHOUT country code
      // We remove the dial code from the start of the string
      const phoneNumberOnly = data.phone.replace(data.countryCode, "").trim();
      finalData = {
        ...data,
        phone: phoneNumberOnly, // This is now just the subscriber number
      };
    }

    setUserData(finalData);
    console.log("Backend Payload:", finalData);
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
          <form className="space-y-4 " onSubmit={onSubmit}>
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

              <div className="flex gap-3">
                <FormField
                  control={form.control}
                  name="contactType"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormControl>
                        <RadioGroup
                          value={field.value}
                          onValueChange={(val: "email" | "phone") =>
                            handleTypeChange(val)
                          }
                          className="flex gap-20"
                        >
                          {/* Phone */}
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="phone"
                              id="phone"
                              className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                            />
                            <Label
                              htmlFor="phone"
                              className="font-normal text-sm"
                            >
                              Phone
                            </Label>
                            {/* Email */}
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="email"
                                id="email"
                                className="[&>span]:text-strong [&>span>svg]:fill-strong border-strong"
                              />
                              <Label
                                htmlFor="email"
                                className="font-normal text-sm"
                              >
                                Email
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {contactType === "email" && (
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-normal text-sm">
                        Email Address
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
              )}
              {contactType === "phone" && (
                <div className="space-y-3">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => {
                      const dialCode = form.watch("countryCode") || "";
                      const phoneValue = field.value || "";

                      // LOGIC: Only consider the error "Active" (visible) if:
                      // 1. The field is dirty (user touched it)
                      // 2. The user has typed more digits than just the dial code
                      const isErrorActive =
                        fieldState.isDirty &&
                        phoneValue.length > dialCode.length;
                      // Check if we really have a Zod error
                      const hasError = isErrorActive && !!fieldState.error;

                      return (
                        <FormItem className="space-y-2">
                          {/* FIX: Use generic <Label> to have full control over color. 
            Standard <FormLabel> turns red automatically on error. */}
                          <Label
                            htmlFor="phone"
                            className={`font-normal text-sm ${hasError ? "text-red-500" : "text-black"}`}
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </Label>

                          <FormControl>
                            <PhoneInput
                              defaultCountry="in"
                              value={field.value}
                              onChange={(value, meta) => {
                                field.onChange(value);

                                // 1. Update Country Code
                                const newDialCode = meta?.country?.dialCode
                                  ? `+${meta.country.dialCode}`
                                  : "";

                                if (
                                  form.getValues("countryCode") !== newDialCode
                                ) {
                                  form.setValue("countryCode", newDialCode);
                                }
                                form.setValue("phone", value, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                              }}
                              className="w-full flex border bg-background focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 dark:aria-invalid:ring-destructive/40 rounded-none border-black h-full py-1"
                              inputClassName="w-full bg-transparent rounded-none  h-12"
                              inputStyle={{ border: "0" }}
                              inputProps={{
                                autoComplete: "tel",
                                id: field.name,
                                name: field.name,
                              }}
                            />
                          </FormControl>

                          {/* Message only renders when our custom logic allows it */}
                          {hasError && (
                            <p className="text-sm font-medium text-destructive">
                              {fieldState.error?.message}
                            </p>
                          )}
                        </FormItem>
                      );
                    }}
                  />
                </div>
              )}

              <hr className="my-8" />
              <Button
                type="submit"
                disabled={!form.formState.isValid}
                className="w-full bg-accent text-white rounded-none h-10 px-6 space-x-1 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-accent/80 cursor-pointer select-none"
              >
                Submit
                <Image src={forwardArrow} alt="Next" width={16} height={16} />
              </Button>
            </>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
