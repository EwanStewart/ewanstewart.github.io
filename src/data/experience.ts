import launchpadLogo from '../assets/images/launchpadbuild_logo.jpeg';
import bitwiseLogo from '../assets/images/bitwise_ltd_logo.jpeg';

export type Role = {
  title: string;
  period: string;
};

export type Experience = {
  company: string;
  logo: string;
  location: string;
  duration?: string;
  roles: Role[];
  points: string[];
};

export const launchpadStart = new Date(2025, 10, 1);

export const experience: Experience[] = [
  {
    company: 'Launchpad Build',
    logo: launchpadLogo,
    location: 'Edinburgh, United Kingdom',
    roles: [
      { title: 'Software Engineer', period: 'Nov 2025 to Present' },
    ],
    points: [
      'Contributed to core product development in a fast-paced robotics startup, building features across the full stack.',
      'Designed, championed and implemented workflows and review processes, establishing best practices within a growing startup team.',
    ],
  },
  {
    company: 'Bitwise Limited',
    logo: bitwiseLogo,
    location: 'Dunfermline, United Kingdom',
    duration: '2 yrs 4 mos',
    roles: [
      { title: 'Software Engineer', period: 'Sep 2024 to Nov 2025 · 1 yr 2 mos' },
      { title: 'Graduate Engineer', period: 'Jul 2023 to Sep 2024 · 1 yr 2 mos' },
    ],
    points: [
      'Placed at a leading UK defence company, collaborating within a large team to deliver quality airborne software.',
      "Placed as the primary engineer for a robotics project for a commercial client. Successfully transformed a struggling product to market under challenging budget and time constraints, whilst working within the client's multidisciplinary team.",
      'Contributed to the full SDLC for multiple Blood Glucose meter projects, ensuring compliance with medical regulatory standards throughout implementation, documentation, and testing.',
      'Developed a cryptographic solution for a negative pressure wound therapy device which ensured device security during service and repair.',
      'Enhanced internal testing infrastructure by improving traceability, enabling its use on safety-critical projects.',
      'Recognised by the Chief Engineer for commitment to development practices and championing policy.',
      'Successfully mentored engineers and a summer intern, supporting professional development.',
      'Demonstrated great adaptability by learning new concepts, technologies, and frameworks to meet customer needs.',
    ],
  },
];
