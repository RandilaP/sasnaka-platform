"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
import { addFoundUsDetails } from "../lib/actions";

const aboutUs = [
  {
    id: "School",
    label: "School",
  },
  {
    id: "Friends/Family",
    label: "Friends/Family",
  },
  {
    id: "Social Media",
    label: "Social Media",
  },
  {
    id: "EduTalk",
    label: "EduTalk",
  },
  {
    id: "Practical Workshop",
    label: "Practical Workshop",
  },
  {
    id: "Other",
    label: "Other",
  },
] as const;

const formSchema = z.object({
  new_member: z.enum(["yes","no"], {
    message: "You need to select an answer",
  }),
  about_us: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});

function FoundUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    addFoundUsDetails({ ...values });
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
                name="new_member"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="leadership">
                      Are you a new member?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center space-x-4"
                      >
                        <FormItem className="flex items-center space-x-3 ">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal pb-2">
                            Yes{" "}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal pb-2">No</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="about_us"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>How did you hear about us?</FormLabel>
                      <FormDescription>
                        Let us know how you discovered Sasnaka Sansada, such as
                        school, friends, social media or other sources.
                      </FormDescription>
                    </div>
                    {aboutUs.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="about_us"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    const value = field.value ?? [];
                                    return checked
                                      ? field.onChange([...value, item.id])
                                      : field.onChange(
                                          value.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-sm font-normal text-gray-500">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
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

export default FoundUsForm;
