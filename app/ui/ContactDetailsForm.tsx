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
import { addContactDetails } from "../lib/actions";

const formSchema = z.object({
  guardian_name: z.string({
    required_error: "Please enter your guardian's name",
  }),
  guardian_occupation: z.string({
    required_error: "Please enter your guardian's occupation",
  }),
  guardian_number: z.string({
    required_error: "Please enter your guardian's contact number",
  }),
});

function ContactDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addContactDetails(values);
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
                name="guardian_name"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardian_name">
                      Father's / Mother's / Guardian's Name
                    </FormLabel>
                    <FormDescription>
                      Mention name of your father, mother or guardian.
                    </FormDescription>
                    <Input id="guardian_name" type="text" placeholder="Your answer" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guardian_occupation"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardian_occupation">
                      Father’s / Mother’s / Guardian’s occupation
                    </FormLabel>
                    <FormDescription>
                      Mention occupation of your father, mother or guardian.{" "}
                    </FormDescription>
                    <Input
                      id="guardian_occupation"
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
                name="guardian_number"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="guardian_number">
                      Father’s / Mother’s / Guardian’s contact number
                    </FormLabel>
                    <FormDescription>
                      Mention contact number of your father, mother or guardian.
                    </FormDescription>
                    <Input
                      id="guardian_number"
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
