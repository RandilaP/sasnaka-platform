"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight } from "lucide-react";

function GeneralDetailsForm() {
  const [date, setDate] = React.useState<Date>();

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

  return (
    <Card className=" p-4 mt-9 w-full max-w-screen-md">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-2">
            <div className="space-y-2 p-2">
              <Label htmlFor="name">Name With Initials</Label>
              <CardDescription>Enter your name with initials </CardDescription>
              <Input id="name" type="text" placeholder="Name" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="fname">First Name</Label>
              <CardDescription>Enter your first name</CardDescription>
              <Input id="fname" type="text" placeholder="First Name" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="lname">Last Name</Label>
              <CardDescription>Enter your last name </CardDescription>
              <Input id="lname" type="text" placeholder="Last Name" />
            </div>

            <div className="space-y-2 p-2">
              <Label>Gender</Label>
              <RadioGroup className="flex ">
                <div className="flex items-center">
                  <RadioGroupItem value="male" id="r1" />
                  <CardDescription className="ml-1">Male</CardDescription>
                </div>
                <div className="flex items-center ml-9">
                  <RadioGroupItem value="female" id="r2" />
                  <CardDescription className="ml-1">Female</CardDescription>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <CardDescription>Select your date of birth</CardDescription>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="mr-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="nic">NIC number</Label>
              <CardDescription>Enter your NIC number</CardDescription>
              <Input id="nic" type="text" placeholder="NIC number" />
            </div>

            <div className="space-y-2 p-2">
              <Label>What is your most preffered language</Label>
              <CardDescription>
                Choose your most preffered language
              </CardDescription>
              <Select>
                <SelectTrigger className="text-gray-500">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language.toLowerCase()}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="address">Personal Address</Label>
              <CardDescription>Enter your personal address</CardDescription>
              <Input id="address" type="text" placeholder="Address" />
            </div>

            <div className="space-y-2 p-2">
              <Label>District</Label>
              <CardDescription>Choose your current district</CardDescription>
              <Select>
                <SelectTrigger className="text-gray-500">
                  <SelectValue placeholder="District" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district.toLowerCase()}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="postal">Nearest City</Label>
              <CardDescription>
                Mention nearest city that you are living
              </CardDescription>
              <Input id="postal" type="text" placeholder="Postal Code" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="phone">Contact Number</Label>
              <CardDescription>Enter your contact number</CardDescription>
              <Input id="phone" type="text" placeholder="Contact Number" />
            </div>

            <div className="space-y-2 p-2">
              <Label htmlFor="email">Email Address</Label>
              <CardDescription>Enter your email address</CardDescription>
              <Input id="email" type="email" placeholder="Email Address" />
            </div>

            <CardFooter className="flex justify-end mt-2">
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

export default GeneralDetailsForm;
