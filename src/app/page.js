import React from "react";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import How from "@/components/How";
import Why from "@/components/Why";

const page = () => {
  return (
    <>
      <Hero />
      <Why />
      <How />
      <Question />
    </>
  );
};

export default page;
