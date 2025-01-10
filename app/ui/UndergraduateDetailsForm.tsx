"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  university: z.string({
    required_error: "Please enter your name with initials",
  }),
  faculty: z.string({
    required_error: "Please enter your first name",
  }),
  degree: z.string({ required_error: "Please enter your last name" }),
  academicYear: z.string({
    required_error: "NIC number is required",
  }),
});

function UndergraduateDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <Form {...form}>
          <form>
            <div className="grid w-full items-center gap-2">
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="university">University</FormLabel>
                    <FormDescription>
                      Enter the name of your University
                    </FormDescription>
                    <Input
                      id="university"
                      type="text"
                      placeholder="University"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="faculty"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="faculty">Faculty</FormLabel>
                    <FormDescription>Enter your faculty name</FormDescription>
                    <Input
                      id="faculty"
                      type="text"
                      placeholder="Faculty"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="degree">Degree</FormLabel>
                    <FormDescription>
                      Enter the degree that you are following
                    </FormDescription>
                    <Input
                      id="degree"
                      type="text"
                      placeholder="Degree"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="academicYear"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="academic-year">Academic Year</FormLabel>
                    <FormDescription>Enter the academic year</FormDescription>
                    <Input
                      id="academic-year"
                      type="text"
                      placeholder="Academic year"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-between mt-2">
                <Button variant="secondary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default UndergraduateDetailsForm;
