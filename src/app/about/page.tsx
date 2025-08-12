import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

// Google Drive helpers
const driveView = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;
const driveThumb = (id: string, width = 1600) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

// IDs from your Drive links
const AVATAR_ID = "1z3HDywcNxpWPiPtsTM6tDP3GIvaEIBWI";
const LOGO_SPACE_APPS = "1pTq5zsj58vhFNlWlYbwkB6bds1FlcuWl";
const LOGO_SPACE_APPS_ALT = "1pfRBTLg4XoLxUhJAOt_p_GgxyjJ47uCj";
const IMG_GRAPHIC_1 = "1OmgDHKAe0ucvGyzDVs-H621buAwPPGWr";
const IMG_GRAPHIC_2 = "1ARwmJBJ2nRa4qVDCMV1xUnGZngRzlfi-";
const IMG_GRAPHIC_3 = "1FNkrDqkWR9fouoRzH_N2t4a19ygUcWtn";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

// Page-local data
const person = {
  name: "Zain Khan",
  role: "Local Lead, NASA Space Apps Challenge (Houston)",
  location: "Houston, TX",
  avatar: driveView(AVATAR_ID),
  languages: ["English", "Urdu"]
};

const about = {
  title: "About Zain Khan",
  description:
    "Local Lead for NASA Space Apps Challenge in Houston. Event leadership, partnerships, and community building across science and technology.",
  path: "/about",
  intro: {
    title: "Introduction",
    display: true,
    description:
      "I lead NASA Space Apps Houston, organize large hackathons, grow partnerships, and support teams building solutions that matter."
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
          "Owned operations, logistics, and volunteer coordination",
          "Built sponsor outreach and community programming"
        ],
        images: [
          { src: driveView(LOGO_SPACE_APPS), alt: "NASA Space Apps logo", width: 200, height: 200 },
          { src: driveView(LOGO_SPACE_APPS_ALT), alt: "NASA Space Apps alternate logo", width: 200, height: 200 },
          { src: driveThumb(IMG_GRAPHIC_1, 1600), alt: "Space Apps Challenge Graphic 1", width: 320, height: 200 },
          { src: driveThumb(IMG_GRAPHIC_2, 1600), alt: "2024 Registration Space Apps Graphic", width: 320, height: 200 },
          { src: driveThumb(IMG_GRAPHIC_3, 1600), alt: "Space Apps poster", width: 320, height: 200 }
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
  tableOfContent: { display: true },
  calendar: {
    display: true,
    link: "https://calendly.com/your-handle/intro"
  }
};

const social = [
  { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/yourprofile" },
  { name: "X", icon: "twitter", link: "https://x.com/yourhandle" },
  { name: "Email", icon: "mail", link: "mailto:zainkhan1994.zk@gmail.com" }
];

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: []
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company)
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name)
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title)
    }
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column className={styles.avatar} position="sticky" minWidth="160" paddingX="l" paddingBottom="xl" gap="m" flex={3} horizontal="center" >
          <Avatar src={person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Flex>
          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language) => (
                <Tag key={language} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Button
                          className="s-flex-hide"
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: React.ReactNode, i: number) => (
                        <Text as="li" variant="body-default-m" key={`${experience.company}-${i}`}> 
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image: any, i: number) => (
                          <Flex
                            key={i}
                            border="neutral-medium"
                            radius="m"
                            // @ts-ignore
                            minWidth={image.width}
                            // @ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              // @ts-ignore
                              sizes={image.width.toString()}
                              // @ts-ignore
                              alt={image.alt}
                              // @ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="40">
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image: any, i: number) => (
                          <Flex
                            key={i}
                            border="neutral-medium"
                            radius="m"
                            // @ts-ignore
                            minWidth={image.width}
                            // @ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              // @ts-ignore
                              sizes={image.width.toString()}
                              // @ts-ignore
                              alt={image.alt}
                              // @ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}