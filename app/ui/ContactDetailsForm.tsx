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

function ContactDetailsForm() {
  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="space-y-2 p-2">
              <Label htmlFor="name">
                Father's / Mother's / Guardian's Name
              </Label>
              <CardDescription>
                Mention name of your father, mother or guardian.
              </CardDescription>
              <Input id="name" type="text" placeholder="Your answer" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="occupation">
                Father’s / Mother’s / Guardian’s occupation
              </Label>
              <CardDescription>
                Mention occupation of your father, mother or guardian.{" "}
              </CardDescription>
              <Input id="occupation" type="text" placeholder="Your answer" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="number">
                Father’s / Mother’s / Guardian’s contact number
              </Label>
              <CardDescription>
                Mention contact number of your father, mother or guardian.
              </CardDescription>
              <Input id="number" type="text" placeholder="Contact number" />
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

export default ContactDetailsForm;
