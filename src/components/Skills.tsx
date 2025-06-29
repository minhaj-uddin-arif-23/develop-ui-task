import { MoveLeft, MoveRight } from "lucide-react";

// components/Skills.js
export default function Skills() {
  const skills = [
    {
      title: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis...",
    },
    {
      title: "Javascript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis...",
    },
    {
      title: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis...",
    },
  ];

  return (
    <div className="bg-black text-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <button className="mb-10 px-8 py-3 bg-purple-800 rounded-full text-sm font-medium uppercase tracking-wide">
          Why Choose me
        </button>
        <h2 className="text-7xl font-extrabold mb-6 leading-tight">
          My Extensive
          <br />
          List of Skills
        </h2>
        <p className="text-gray-600 mb-16 text-xs leading-relaxed">
          Building the worlds best marketing Your trusted partner for strategy,
          design, and dev.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-2xl text-center transform perspective-500 hover:rotate-x-2 transition duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6">
                <svg
                  className="w-full h-full text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-500 text-xs leading-loose">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-12">
          <button className="px-6 py-2 bg-green-800 rounded-full text-white flex items-center space-x-4">
            <span className="text-xl">
              <MoveLeft />
            </span>
            <span className="text-xl">
              <MoveRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
