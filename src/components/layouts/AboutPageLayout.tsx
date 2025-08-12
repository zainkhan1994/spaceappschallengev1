import React from "react";

interface Person {
  name: string;
  role: string;
  location: string;
  avatar?: string;
  languages: string[];
}

interface About {
  title: string;
  description: string;
  path: string;
  intro: {
    title: string;
    display: boolean;
    description: string;
  };
  work: {
    title: string;
    display: boolean;
    experiences: Array<{
      company: string;
      role: string;
      timeframe: string;
      achievements: string[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  studies: {
    title: string;
    display: boolean;
    institutions: Array<{
      name: string;
      description: string;
    }>;
  };
  technical: {
    title: string;
    display: boolean;
    skills: Array<{
      title: string;
      description: string;
    }>;
  };
  tableOfContent: {
    display: boolean;
    subItems: any[];
  };
  calendar: {
    display: boolean;
    link: string;
  };
}

interface Social {
  name: string;
  icon: string;
  link: string;
}

interface AboutPageLayoutProps {
  person: Person;
  about: About;
  social: Social[];
}

export default function AboutPageLayout({ person, about, social }: AboutPageLayoutProps) {
  return (
    <div>
      <h1>{about.title}</h1>
      <p>{about.description}</p>
      <div>
        <h2>About {person.name}</h2>
        <p>Role: {person.role}</p>
        <p>Location: {person.location}</p>
        <p>Languages: {person.languages.join(", ")}</p>
      </div>
      {about.intro.display && (
        <div>
          <h2>{about.intro.title}</h2>
          <p>{about.intro.description}</p>
        </div>
      )}
      {about.work.display && (
        <div>
          <h2>{about.work.title}</h2>
          {about.work.experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.company}</h3>
              <p>{exp.role} ({exp.timeframe})</p>
              <ul>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {about.studies.display && (
        <div>
          <h2>{about.studies.title}</h2>
          {about.studies.institutions.map((inst, index) => (
            <div key={index}>
              <h3>{inst.name}</h3>
              <p>{inst.description}</p>
            </div>
          ))}
        </div>
      )}
      {about.technical.display && (
        <div>
          <h2>{about.technical.title}</h2>
          {about.technical.skills.map((skill, index) => (
            <div key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      )}
      <div>
        <h2>Connect</h2>
        {social.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}