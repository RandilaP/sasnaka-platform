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

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

function UndergraduateDetailsForm() {
  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="space-y-2 p-2">
              <Label htmlFor="university">University</Label>
              <CardDescription>
                Enter the name of your University
              </CardDescription>
              <Input id="university" type="text" placeholder="University" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="faculty">Faculty</Label>
              <CardDescription>
                Enter your faculty name
              </CardDescription>
              <Input id="faculty" type="text" placeholder="Faculty" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="degree">Degree</Label>
              <CardDescription>
                Enter the degree that you are following
              </CardDescription>
              <Input id="degree" type="text" placeholder="Degree" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="academic-year">Academic Year</Label>
              <CardDescription>
                Enter the academic year
              </CardDescription>
              <Input id="academic-year" type="text" placeholder="Academic year" />
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

export default UndergraduateDetailsForm;
