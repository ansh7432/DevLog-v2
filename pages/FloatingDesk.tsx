"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
 
  IconHome,
  IconNewSection,
 
  IconBrandLinkedin
} from "@tabler/icons-react";
 
export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/ishaan-soni-86437b16a",
    },
    {
      title: "Resume",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/17eS98OFYeP8RQm1XeuCtXD-918KXNG9L/view?usp=sharing",
    },
 
   
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/AnshSon81191512",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/ansh7432",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-around p-4 ">
    <FloatingDock
      mobileClassName="translate-y-0" // Keeps it in position without offset
      items={links}
    />
  </div>
  );
}
 
export default FloatingDockDemo;