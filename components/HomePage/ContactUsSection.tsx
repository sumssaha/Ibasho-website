"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import submitSuccessImage from "@/app/assets/submit-success.png";
import Link from "next/link";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import contactImage from "@/app/assets/contact.jpg";
import successImage from "@/app/assets/Success.svg";
export default function ContactUsSection() {
  const [result, setResult] = useState("");
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name is required")
      .max(40, "Name is should not be too long"),
    email: z.email({ error: "This is not a valid email." }),
    phone: z.e164("Invalid Phone number").optional(),
    message: z.string().min(2, "Please enter a valid message for us"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the Terms",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // const formData = new FormData();
    // formData.append("Name", values.name);
    // formData.append("Email", values.email);
    // formData.append("Phone", values.phone ?? "");
    // formData.append("Message", values.message);
    // formData.append("access_key", "b9a85f19-d131-4174-847b-0ea4bca1dfd4");
    // const response = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData,
    // });
    try {
      const jsonResponse = await response.json();
      if (jsonResponse.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", jsonResponse);
        setResult(jsonResponse.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setResult(err.message);
    }
  }
  function onError(errors: Record<string, object>) {
    console.log("Validation errors:", errors);
  }
  return (
    <>
      <section
        id="contact"
        className="container mx-auto py-18 md:py-24 px-6 flex flex-col lg:flex-row justify-between items-center gap-14 md:gap-20"
      >
        <div className="flex-1">
          <p className="text-accent font-semibold">Contact us</p>
          <h3 className="text-strong text-4xl md:text-5xl font-bold leading-12 md:leading-14 my-6">
            Let’s Make Their Home Safe, Together
          </h3>
          <p className="text-base md:text-lg mb-10">
            Your parents deserve comfort and dignity in their own home. You
            deserve peace of mind, no matter the distance.
          </p>
          {result === "Form Submitted Successfully" ? (
            <div className="my-26">
              <div className="p-6 relative w-fit mx-auto">
                <div className="inset-0 bg-strong opacity-3 absolute  rounded-full"></div>
                <Image src={successImage} alt="Success" className=" " />
              </div>
              <div className="mx-auto text-center">
                <h5 className="text-strong font-bold text-4.5xl">Thank You!</h5>
                <p className="text-lg my-4 max-w-md mx-auto ">
                  We&apos;ve received your inquiry and our team will reach out
                  to you shortly.
                </p>
                <p className="italic text-accent">
                  Together, we&apos;ll make their home a safer place.
                </p>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="space-y-8 w-full"
              >
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
                          className="rounded-none border-black h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          autoComplete="email"
                          className="rounded-none border-black h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel htmlFor={field.name} className="font-normal">
                        Mobile
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          defaultCountry="in"
                          value={field.value}
                          ref={field.ref}
                          name={field.name}
                          disabled={field.disabled}
                          onBlur={field.onBlur}
                          onChange={(phone, meta) => {
                            if (
                              phone.trim() ===
                              "+" + meta.country.dialCode.trim()
                            ) {
                              field.onChange(undefined);
                            } else {
                              field.onChange(phone);
                            }
                          }}
                          className="w-full flex border bg-background focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 dark:aria-invalid:ring-destructive/40 rounded-none border-black h-full py-1"
                          inputClassName="w-full bg-transparent rounded-none  h-12"
                          inputStyle={{
                            border: "0",
                          }}
                          inputProps={{
                            autoComplete: "tel",
                            id: field.name,
                            name: field.name,
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal">
                        Message <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="h-40 rounded-none border-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormControl>
                        <Checkbox
                          id="terms"
                          name="terms"
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                          className="data-[state=checked]:bg-accent border-black rounded-none w-5 h-5"
                        />
                      </FormControl>
                      <Label
                        htmlFor="terms"
                        className="text-foreground font-normal gap-1"
                      >
                        I accept the
                        <Link
                          href="/terms"
                          className="underline"
                          target="_blank"
                        >
                          Terms
                        </Link>
                      </Label>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-accent w-full rounded-none font-normal hover:bg-accent/80 cursor-pointer h-10"
                >
                  Submit
                </Button>
              </form>
            </Form>
          )}
        </div>
        <div className="flex-1 w-full md:h-[890px] relative">
          <Image
            src={contactImage}
            alt="Contact us"
            className="object-cover h-full"
            priority
          />
        </div>
      </section>
      {/* <AlertDialog
        open={result === "Form Submitted Successfully"}
        onOpenChange={() => setResult("")}
      >
        <AlertDialogContent className="text-center py-12 md:px-24 sm:px-12 bg-white sm:max-w-2xl mx-2">
          <AlertDialogTitle className="hidden">
            Form Submitted Successfully
          </AlertDialogTitle>
          <svg
            width="24"
            height="24"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setResult("")}
            className="top-5 right-5 absolute cursor-pointer"
          >
            <path
              d="M26.7497 15.25L15.2497 26.75M15.2497 15.25L26.7497 26.75M40.1663 21C40.1663 31.5854 31.5851 40.1666 20.9997 40.1666C10.4142 40.1666 1.83301 31.5854 1.83301 21C1.83301 10.4145 10.4142 1.83331 20.9997 1.83331C31.5851 1.83331 40.1663 10.4145 40.1663 21Z"
              stroke="#212121"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex items-center justify-center">
            <Image src={submitSuccessImage} alt="Submit Successful" />
          </div>
          <h6 className="font-lora font-bold text-4xl text-primary-foreground">
            Form Submitted
          </h6>
          <p className="font-poppins text-sm text-foreground">
            Thank you for reaching out to Ibasho. Our team will review your
            message and connect with you shortly to understand your requirements
            better.
          </p>
        </AlertDialogContent>
      </AlertDialog> */}
    </>
  );
}
