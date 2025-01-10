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
  guardianName: z.string({
    required_error: "Please enter your guardian's name",
  }),
  guardianOccupation: z.string({
    required_error: "Please enter your guardian's occupation",
  }),
  guardianNumber: z.string({
    required_error: "Please enter your guardian's contact number",
  }),
});

function ContactDetailsForm() {
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-2">
              <FormField
                control={form.control}
                name="guardianName"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardianName">
                      Father's / Mother's / Guardian's Name
                    </FormLabel>
                    <FormDescription>
                      Mention name of your father, mother or guardian.
                    </FormDescription>
                    <Input id="name" type="text" placeholder="Your answer" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardianOccupation"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardianOccupation">
                      Father’s / Mother’s / Guardian’s occupation
                    </FormLabel>
                    <FormDescription>
                      Mention occupation of your father, mother or guardian.{" "}
                    </FormDescription>
                    <Input
                      id="occupation"
                      type="text"
                      placeholder="Your answer"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardianNumber"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardianNumber">
                      Father’s / Mother’s / Guardian’s contact number
                    </FormLabel>
                    <FormDescription>
                      Mention contact number of your father, mother or guardian.
                    </FormDescription>
                    <Input
                      id="guardianNumber"
                      type="text"
                      placeholder="Contact number"
                      {...field}
                    />
                    <FormMessage />
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

export default ContactDetailsForm;
