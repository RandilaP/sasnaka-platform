"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
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
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addGeneralDetails } from "../lib/actions";

const formSchema = z.object({
  name: z.string({
    required_error: "Please enter your name with initials",
  }),
  fname: z.string({
    required_error: "Please enter your first name",
  }),
  lname: z.string({ required_error: "Please enter your last name" }),
  dob: z.date({ required_error: "Please select your date of birth" }),
  gender: z.enum(["male", "female"], {
    required_error: "Please select your gender",
  }),
  nic: z.string({
    required_error: "NIC number is required",
  }),
  language: z.string({
    required_error: "Please select your most preffered language",
  }),
  address: z.string({
    required_error: "Please enter your personal address",
  }),
  district: z.string({
    required_error: "Please select your current district",
  }),
  city: z.string({
    required_error: "Please enter your nearest city",
  }),
  phone: z.string({
    required_error: "Please enter your contact number",
  }),
  email: z
    .string({
      required_error: "Please enter your email address",
    })
    .email(),
});

function GeneralDetailsForm() {

  const languages = ["Sinhala", "Tamil", "English"];

  const districts = [
    "Kandy",
    "Colombo",
    "Galle",
    "Matara",
    "Kurunegala",
    "Jaffna",
    "Anuradhapura",
    "Polonnaruwa",
    "Gampaha",
    "Kalutara",
    "Ratnapura",
    "Badulla",
    "Monaragala",
    "Ampara",
    "Trincomalee",
    "Batticaloa",
    "Mannar",
    "Mullaitivu",
    "Vavuniya",
    "Kilinochchi",
    "Hambantota",
    "Nuwara Eliya",
    "Puttalam",
    "Matale",
    "Kegalle",
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addGeneralDetails({ ...values, dob: values.dob.toISOString() });
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
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="name">Name With Initials</FormLabel>
                    <FormDescription>
                      Enter your name with initials{" "}
                    </FormDescription>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="fname">First Name</FormLabel>
                    <FormDescription>Enter your first name</FormDescription>
                    <Input
                      id="fname"
                      type="text"
                      placeholder="First Name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="lname">Last Name</FormLabel>
                    <FormDescription>Enter your last name </FormDescription>
                    <Input
                      id="lname"
                      type="text"
                      placeholder="Last Name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        className="flex "
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormItem className="flex items-end">
                          <FormControl>
                            <RadioGroupItem value="male" id="male" />
                          </FormControl>
                          <FormLabel className="ml-1 font-normal text-gray-500" htmlFor="male">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-end ml-9">
                          <RadioGroupItem value="female" id="female" />
                          <FormLabel className="ml-1 font-normal text-gray-500" htmlFor="female">
                            Female
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
                name="dob"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                    <FormDescription>Select your date of birth</FormDescription>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nic"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="nic">NIC number</FormLabel>
                    <FormDescription>Enter your NIC number</FormDescription>
                    <Input
                      id="nic"
                      type="text"
                      placeholder="NIC number"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel>What is your most preffered language</FormLabel>
                    <FormDescription>
                      Choose your most preffered language
                    </FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="text-gray-500">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((language) => (
                          <SelectItem
                            key={language}
                            value={language}
                          >
                            {language}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="address">Personal Address</FormLabel>
                    <FormDescription>
                      Enter your personal address
                    </FormDescription>
                    <Input
                      id="address"
                      type="text"
                      placeholder="Address"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel>District</FormLabel>
                    <FormDescription>
                      Choose your current district
                    </FormDescription>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="text-gray-500">
                        <SelectValue placeholder="District" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem
                            key={district}
                            value={district}
                          >
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="city">Nearest City</FormLabel>
                    <FormDescription>
                      Mention nearest city that you are living
                    </FormDescription>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Nearest city"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="phone">Contact Number</FormLabel>
                    <FormDescription>Enter your contact number</FormDescription>
                    <Input
                      id="phone"
                      type="text"
                      placeholder="Contact Number"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2 p-2">
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormDescription>Enter your email address</FormDescription>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex justify-end mt-2">
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

export default GeneralDetailsForm;
