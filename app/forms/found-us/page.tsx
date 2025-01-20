"use client"
import React from "react";
import { Smile } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import FoundUsForm from "@/app/ui/FoundUsForm";

function Page() {
  const [progress, setProgress] = React.useState(80)
   
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(100), 500)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div className="w-full flex justify-center p-4 flex-col pt-24" >
      <div className="w-full flex align-center justify-center">
        <h1 className="font-semibold text-md text-center">How You Found Us</h1>
        <Smile size={18} className="my-auto ml-4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <Progress value={progress} className="w-1/4" />
      </div>
      <div className="w-full flex justify-center mt-4">
        <FoundUsForm />
      </div>
    </div>
  );
}

export default Page;
