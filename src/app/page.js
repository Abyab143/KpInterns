import React from "react";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import How from "@/components/How";
import Why from "@/components/Why";
import BranchesStreams from "@/components/BranchesStreams";

const page = () => {
  return (
    <>
      <Hero />
      <Why />
      <BranchesStreams />
      <How />
      <Question />
    </>
  );
};

export default page;
