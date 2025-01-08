import React from "react";
import { FileBadge } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import SkillsDetailsForm from "@/app/ui/SkillsDetailsForm";

function page() {
  return (
    <div className="w-full flex justify-center p-4 flex-col">
      <div className="w-full flex align-center justify-center">
        <h1 className="font-semibold text-md text-center">Personal Skills And Achievements</h1>
        <FileBadge size={18} className="my-auto" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Progress value={57} className="w-1/4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <SkillsDetailsForm />
      </div>
    </div>
  );
}

export default page;
