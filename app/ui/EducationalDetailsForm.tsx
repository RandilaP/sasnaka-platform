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

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

function EducationalDetailsForm() {
  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="space-y-2 p-2">
              <Label htmlFor="school">School Attended (For A/L)</Label>
              <CardDescription>
                Enter your name of the school for A/L{" "}
              </CardDescription>
              <Input id="school" type="text" placeholder="Name of the school" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="al">Advanced Level Year</Label>
              <CardDescription>
                Please mention the last year that you sat for the A/L exam
              </CardDescription>
              <Input id="al" type="text" placeholder="Advanced level year" />
            </div>

            <div className="space-y-2 p-2">
              <Label>Subject Stream</Label>
              <RadioGroup>
                <div className="flex items-center">
                  <RadioGroupItem value="physical-science" id="r1" />
                  <Label
                    htmlFor="r1"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Physical science
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="bio-science" id="r2" />
                  <Label
                    htmlFor="r2"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Bio science
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="commerce" id="r3" />
                  <Label
                    htmlFor="r3"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Commerce
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="arts" id="r4" />
                  <Label
                    htmlFor="r4"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Arts
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="technology" id="r5" />
                  <Label
                    htmlFor="r5"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Technology
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="shy">Which shy?</Label>
              <CardDescription>
                Please mention which one is the shy you faced last
              </CardDescription>
              <Input id="shy" type="text" placeholder="Your answer" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="address">Index number (Optional)</Label>
              <CardDescription>
                Enter your index number, But this is not required.
              </CardDescription>
              <Input id="address" type="text" placeholder="Your answer" />
            </div>

            <div className="space-y-2 p-2">
              <Label>What is your Current status</Label>
              <RadioGroup>
                <div className="flex items-center">
                  <RadioGroupItem value="student" id="r6" />
                  <Label
                    htmlFor="r6"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Student (after A/L)
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="undergraduate" id="r7" />
                  <Label
                    htmlFor="r7"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Undergraduate
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem value="graduate" id="r8" />
                  <Label
                    htmlFor="r8"
                    className="ml-1 font-normal text-gray-500"
                  >
                    Graduate
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="other">Other Educational Qualification</Label>
              <CardDescription>
                State the other Educational qualifications you have..(degrees /
                diplomas)
              </CardDescription>
              <Textarea id="other" placeholder="Other" className="h-28" />
            </div>

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
      </CardContent>
    </Card>
  );
}

export default EducationalDetailsForm;
