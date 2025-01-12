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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
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
import { addSkillsDetails } from "../lib/actions";

const aestheticSkills = [
  {
    id: "music",
    label: "Music",
  },
  {
    id: "dancing",
    label: "Dancing",
  },
  {
    id: "art",
    label: "Art",
  },
  {
    id: "drama",
    label: "Drama",
  },
  {
    id: "literature",
    label: "Literature",
  },
] as const;

const computerSkills = [
  {
    id: "msOffice",
    label: "MS office",
  },
  {
    id: "graphiDesign",
    label: "Graphic Design",
  },
  {
    id: "webDesigning",
    label: "Web Designing",
  },
  {
    id: "softwareDeveloping",
    label: "Software Developing",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

const mediaSkills = [
  {
    id: "photography",
    label: "Photography",
  },
  {
    id: "videography",
    label: "Videography",
  },
  {
    id: "photoEditing",
    label: "Photo Editing",
  },
  {
    id: "videoEditing",
    label: "Video Editing",
  },
  {
    id: "flyerDesigning",
    label: "Flyer Designing",
  },
  {
    id: "announcing",
    label: "Announcing",
  },
  {
    id: "articleWriting",
    label: "Article Writing",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

const formSchema = z.object({
  rate_leadership: z.enum(["1", "2", "3", "4", "5"], {
    message: "Please rate your leadership skills",
  }),
  leadership_experience: z.string().optional(),
  aesthetic_skills: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  computer_skills: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  media_skills: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  acheivements: z.string().optional(),
  interested_areas: z.string().optional(),
});

function SkillsDetailsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addSkillsDetails(values);
    console.log(values);
  }

  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-2">
              <div className="space-y-2 p-2">
                <Label>
                  This is very important section in this form. As we have a huge
                  number of members in our foundation. It is very important to
                  have a clear idea about the soft skills that each member has.
                  Therefore when completing this section be sure that you have
                  achieved a certain good standard in the given criteria.
                </Label>
              </div>
              <FormField
                control={form.control}
                name="rate_leadership"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="rate_leadership">
                      Leadership skills
                    </FormLabel>
                    <FormDescription>
                      Share your leadership experiences, highlighting roles,
                      responsibilities, and key achievements that showcase your
                      ability to lead and inspire others.
                    </FormDescription>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex justify-between"
                      >
                        <FormLabel className="font-normal mt-5">Poor</FormLabel>
                        <FormItem className="flex flex-col items-center space-y-2">
                          <FormLabel className="font-normal">1 </FormLabel>
                          <FormControl>
                            <RadioGroupItem value="1" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex flex-col items-center space-y-2">
                          <FormLabel className="font-normal">2</FormLabel>
                          <FormControl>
                            <RadioGroupItem value="2" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex flex-col items-center space-y-2">
                          <FormLabel className="font-normal">3</FormLabel>
                          <FormControl>
                            <RadioGroupItem value="3" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex flex-col items-center space-y-2">
                          <FormLabel className="font-normal">4</FormLabel>
                          <FormControl>
                            <RadioGroupItem value="4" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex flex-col items-center space-y-2">
                          <FormLabel className="font-normal">5</FormLabel>
                          <FormControl>
                            <RadioGroupItem value="5" />
                          </FormControl>
                        </FormItem>
                        <FormItem className="mt-4">
                          <FormLabel className="font-normal">
                            Excellent
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
                name="leadership_experience"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="leadership_experience">
                      Leadership experience
                    </FormLabel>
                    <FormDescription>
                      Share your leadership experiences, highlighting roles,
                      responsibilities, and key achievements that showcase your
                      ability to lead and inspire others.{" "}
                    </FormDescription>
                    <Textarea
                      id="leadership_experience"
                      placeholder="Your answer"
                      {...field}
                      className="h-28"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aesthetic_skills"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Aesthetic Skills</FormLabel>
                      <FormDescription>
                        Select the aesthetic skills that you have.
                      </FormDescription>
                    </div>
                    {aestheticSkills.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="aesthetic_skills"
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

              <FormField
                control={form.control}
                name="computer_skills"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Computer Skills</FormLabel>
                      <FormDescription>
                        Select the computer skills that you have.
                      </FormDescription>
                    </div>
                    {computerSkills.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="computer_skills"
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

              <FormField
                control={form.control}
                name="media_skills"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Media Skills</FormLabel>
                      <FormDescription>
                        Select the media skills that you have.
                      </FormDescription>
                    </div>
                    {mediaSkills.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="media_skills"
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

              <FormField
                control={form.control}
                name="acheivements"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="acheivements">
                      If you have got any achievement/achievements, please state
                      an short description about them.
                    </FormLabel>
                    <Textarea
                      id="achievements"
                      placeholder="Your answer"
                      {...field}
                      className="h-28"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interested_areas"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="interested_areas">
                      What are the interested area / areas, that you like to
                      improve / study further.   That will be help you to
                      develop your skills under expertise in particular areas as
                      your interest. (Ex: Photoshop, Photography, Videography,
                      MS Office, etc.){" "}
                    </FormLabel>
                    <Textarea
                      id="interested_areas"
                      placeholder="Your answer"
                      {...field}
                      className="h-28"
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

export default SkillsDetailsForm;
