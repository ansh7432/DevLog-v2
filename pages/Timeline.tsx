"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const experienceData = [
    {
      title: "August-October 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Tecosys</span> - Full Stack Developer Internship (Remote)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Developed <span className="font-bold">Cerina AI chatbot</span>, boosting user engagement by <span className="font-bold">50%</span> with real-time query resolution.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Integrated <span className="font-bold">Generative AI models</span> with <span className="font-bold">AWS Lambda</span> and <span className="font-bold">OpenAI API</span>, improving accuracy by <span className="font-bold">65%</span> and reducing processing time by <span className="font-bold">30%</span>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Tech Stack:</span> React.js, Node.js, Express.js, MongoDB, WebSocket, Firebase, AWS Services, and Razorpay.
          </p>
        </div>
      ),
    },
    {
      title: "June-August 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Social Summer of Code (SSOC)</span> - Open Source Contributor
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Developed <span className="font-bold">robust authentication system</span> for Chanakya Niti project, reducing login issues by <span className="font-bold">30%</span> and enhancing security by <span className="font-bold">25%</span>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Collaborated with <span className="font-bold">global development team</span>, contributing <span className="font-bold">3 pull requests</span> that improved API efficiency by <span className="font-bold">20%</span>.
          </p>
        </div>
      ),
    },
  ];

  // Combined achievements and volunteer experience data
  const achievementsLeadershipData = [
    {
      title: "LeetCode",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Solved <span className="font-bold">300+ DSA problems</span> on LeetCode, demonstrating strong algorithmic thinking.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Achieved contest rating of <span className="font-bold">1504</span>, showcasing competitive programming expertise.
          </p>
        </div>
      ),
    },
    {
      title: "Jazbaat ",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            <span className="font-bold">Co-Coordinator of JAZBAAT</span> - The Dramatics Society
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Led <span className="font-bold">10+ mentorship sessions</span>, developing theatrical skills in junior members.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Secured <span className="font-bold">1st Place</span> in Nukkad Natak Competition at <span className="font-bold">IIT Guwahati</span> against 20+ teams.
          </p>
        </div>
      ),
    },
    {
      title: "The Programming Club",
      content: (
        <div className="prose prose-sm md:prose-base dark:prose-invert">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Mentored students as <span className="font-bold">Programming Club Leader</span>, fostering a <span className="font-bold">collaborative coding culture</span>.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            Enhanced <span className="font-bold">problem-solving skills</span> and <span className="font-bold">technical proficiency</span> among junior students.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Experience Timeline */}
      <Timeline 
        data={experienceData} 
        title="My Experience"
        description="Computer Science student at PDPM IIITDM Jabalpur with expertise in full-stack development and AI integration."
      />
      
      {/* Combined Achievements and Leadership Timeline */}
      <Timeline 
        data={achievementsLeadershipData}
        title="Achievements & Leadership"
        description="Technical accomplishments and community contributions through mentorship and leadership roles."
      />
    </div>
  );
}

export default TimelineDemo;