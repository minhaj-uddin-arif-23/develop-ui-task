import React from "react";

const processSteps = [
  {
    title: "Discovery",
    content:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    color: "bg-[#B2FCE4]",
    rotate: false,
  },
  {
    title: "Strategy",
    content:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    color: "bg-lime-400",
    rotate: true,
  },
  {
    title: "Design",
    content:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    color: "bg-[#B2FCE4]",
    rotate: false,
  },
  {
    title: "Build",
    content:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    color: "bg-[#B2FCE4]",
    rotate: false,
  },
];

export default function WorkProcess() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 px-6 rounded-[2rem]">
      <div className="max-w-6xl mx-auto text-center">
        <button className="border px-4 py-1 rounded-full mb-4">↡ Work Process</button>
        <h2 className="text-4xl font-bold mb-12">My Work Process</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl bg-black ${
                step.rotate ? "transform rotate-2" : ""
              }`}
            >
              <span className={`inline-block px-4 py-1 rounded-full font-semibold text-black ${step.color}`}>
                {step.title}
              </span>
              <p className={`mt-4 text-sm text-gray-300 ${step.rotate ? "text-black" : ""}`}>
                {step.content}
              </p>
              <a
                href="#"
                className={`absolute bottom-4 right-4 text-sm flex items-center gap-1 underline ${
                  step.rotate ? "text-black" : "text-white"
                }`}
              >
                → Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
