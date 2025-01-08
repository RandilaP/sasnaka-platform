import React from "react";
import { GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UndergraduateDetailsForm from "@/app/ui/UndergraduateDetailsForm";

function Page() {
  return (
    <div className="w-full flex justify-center p-4 flex-col">
      <div className="w-full flex align-center justify-center">
        <h1 className="font-semibold text-md text-center">If You Are Undergraduate</h1>
        <GraduationCap size={18} className="my-auto" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Progress value={57} className="w-1/4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <UndergraduateDetailsForm />
      </div>
    </div>
  );
}

export default Page;
