"use client";
import React, { useEffect, useState } from "react";
import { FileBadge } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import SkillsDetailsForm from "@/app/ui/SkillsDetailsForm";

function Page() {
  const [progress, setProgress] = useState(40);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(60), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex justify-center p-4 flex-col pt-24">
      <div className="w-full flex align-center justify-center">
        <h1 className="font-semibold text-md text-center">
          Personal Skills And Achievements
        </h1>
        <FileBadge size={18} className="my-auto ml-4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Progress value={progress} className="w-1/4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <SkillsDetailsForm />
      </div>
    </div>
  );
}

export default Page;
