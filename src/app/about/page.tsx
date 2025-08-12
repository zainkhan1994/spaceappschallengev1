import React from 'react';
import { Metadata } from 'next';
import AboutPageLayout from '@/components/layouts/AboutPageLayout';
import { person, about, social } from '@/config';

export const metadata: Metadata = {
  title: `${about.title} | ${person.name}`,
  description: about.description,
};

export default function AboutPage() {
  return (
    <AboutPageLayout
      person={{
        name: "Zain Khan",
        role: "Local Lead, NASA Space Apps Challenge (Houston)",
        location: "Houston, TX",
        avatar: person.avatar,
        languages: ["English", "Urdu"]
      }}
      about={{
        title: "About Zain Khan",
        description: "Local Lead for NASA's Space Apps Challenge in Houston. Event leadership, partnerships, and community building across science and technology.",
        path: "/about",
        intro: {
          title: "Introduction",
          display: true,
          description: "I lead NASA's Space Apps Challenge in Houston, organize large hackathons, grow partnerships, and support teams building solutions that matter."
        },
        work: {
          title: "Experience",
          display: true,
          experiences: [
            {
              company: "NASA Space Apps Challenge, Houston",
              role: "Local Lead",
              timeframe: "2022–present",
              achievements: [
                "Scaled local participation and partner network",
                "Ran end to end operations, logistics, and volunteer coordination",
                "Built sponsor outreach and community programming"
              ],
              images: [
                { 
                  src: "https://drive.google.com/thumbnail?id=1pTq5zsj58vhFNlWlYbwkB6bds1FlcuWl&sz=w1600",
                  alt: "Space Apps Houston Logo", 
                  width: 320, 
                  height: 200 
                },
                { 
                  src: "https://drive.google.com/thumbnail?id=1OmgDHKAe0ucvGyzDVs-H621buAwPPGWr&sz=w1600",
                  alt: "Space Apps Challenge Graphic", 
                  width: 320, 
                  height: 200 
                },
                { 
                  src: "https://drive.google.com/thumbnail?id=1ARwmJBJ2nRa4qVDCMV1xUnGZngRzlfi-&sz=w1600",
                  alt: "NASA Space Apps Registration", 
                  width: 320, 
                  height: 200 
                },
                { 
                  src: "https://drive.google.com/thumbnail?id=1FNkrDqkWR9fouoRzH_N2t4a19ygUcWtn&sz=w1600",
                  alt: "Space Apps Logo", 
                  width: 320, 
                  height: 200 
                }
              ]
            }
          ]
        },
        studies: {
          title: "Education",
          display: true,
          institutions: [
            { name: "Warden County Junior College", description: "Associate coursework, Fall 2012" }
          ]
        },
        technical: {
          title: "Skills",
          display: true,
          skills: [
            { title: "Event Leadership", description: "Planning, staffing, and live operations for multi day events." },
            { title: "Community Partnerships", description: "Sponsorships, schools, and local tech groups." },
            { title: "Program Management", description: "Timeline ownership, risk tracking, and stakeholder updates." }
          ]
        },
        tableOfContent: { display: true, subItems: [] },
        calendar: { display: true, link: "https://calendly.com/zainkhan1994/intro" }
      }}
      social={[
        { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/zainkhan1994" },
        { name: "X", icon: "twitter", link: "https://x.com/zainkhan1994" },
        { name: "Email", icon: "mail", link: "mailto:zainkhan1994.zk@gmail.com" }
      ]}
    />
  );
}
