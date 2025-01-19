"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
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
import { addEducationalDetails } from "../lib/actions";

const formSchema = z.object({
  school: z.string({
    required_error: "Please enter your school name",
  }),
  al_year: z.string({
    required_error: "Please enter your A/L year",
  }),
  stream: z.enum(
    ["physicalScience", "bioScience", "commerce", "arts", "technology"],
    { required_error: "Please select your A/L stream" }
  ),
  shy: z.string({
    required_error: "Please enter your last shy",
  }),
  index_number: z.string().optional(),
  status: z.enum(["student", "undergraduate", "graduate"], {
    required_error: "Please select your educational status",
  }),
  other_qualification: z.string().optional(),
});

function EducationalDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await addEducationalDetails({
      ...values,
      index_number: values.index_number ?? "",
      other_qualification: values.other_qualification ?? "",
    });
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
                name="school"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="school">
                      School Attended (For A/L)
                    </FormLabel>
                    <FormDescription>
                      Enter your name of the school for A/L{" "}
                    </FormDescription>
                    <Input
                      id="school"
                      type="text"
                      placeholder="Name of the school"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="al_year"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="alYear">Advanced Level Year</FormLabel>
                    <FormDescription>
                      Please mention the last year that you sat for the A/L exam
                    </FormDescription>
                    <Input
                      id="alYear"
                      type="text"
                      placeholder="Advanced level year"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stream"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel>Subject Stream</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem
                              value="physicalScience"
                              id="physicalScience"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="physicalScience"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Physical science
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem
                              value="bioScience"
                              id="bioScience"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="bioScience"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Bio science
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem value="commerce" id="commerce" />
                          </FormControl>
                          <FormLabel
                            htmlFor="commerce"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Commerce
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem value="arts" id="arts" />
                          </FormControl>
                          <FormLabel
                            htmlFor="arts"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Arts
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem
                              value="technology"
                              id="technology"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="technology"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Technology
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shy"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="shy">Which shy?</FormLabel>
                    <FormDescription>
                      Please mention which one is the shy you faced last
                    </FormDescription>
                    <Input
                      id="shy"
                      type="text"
                      placeholder="Your answer"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="index_number"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="IndexNumber">
                      Index number (Optional)
                    </FormLabel>
                    <FormDescription>
                      Enter your index number, But this is not required.
                    </FormDescription>
                    <Input
                      id="IndexNumber"
                      type="text"
                      placeholder="Your answer"
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel>What is your Current status</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem value="student" id="student" />
                          </FormControl>
                          <FormLabel
                            htmlFor="student"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Student (after A/L)
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem
                              value="undergraduate"
                              id="undergraduate"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor="undergraduate"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Undergraduate
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem value="graduate" id="graduate" />
                          </FormControl>
                          <FormLabel
                            htmlFor="graduate"
                            className="ml-1 font-normal text-gray-500"
                          >
                            Graduate
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="other_qualification"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="otherQualification">
                      Other Educational Qualification
                    </FormLabel>
                    <FormDescription>
                      State the other Educational qualifications you
                      have..(degrees / diplomas)
                    </FormDescription>
                    <Textarea
                      id="otherQualification"
                      placeholder="Other"
                      className="h-28"
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

export default EducationalDetailsForm;
