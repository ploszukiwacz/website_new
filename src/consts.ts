import type { Site, Metadata, Socials, Identity, Stuffiuse } from "@types";

export const SITE: Site = {
  NAME: "PlOszukiwacz",
  EMAIL: "admin@ploszukiwacz.is-a.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "PlOszukiwacz's Portfolio Website, built in the amazing Astro framework.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done. (soon:tm:)",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const INFO: Metadata = {
  TITLE: "Info",
  DESCRIPTION: "Some info about me.",
};

export const DONATE: Metadata = {
  TITLE: "Donate",
  DESCRIPTION: "Offical ways of donating to me.",
};

export const FRIENDS: Metadata = {
  TITLE: "Friends",
  DESCRIPTION: "A list of my friends.",
  list: [
    {
      name: "Mkeko",
      url: "https://mkeko.pro",
    },
    {
      name: "GizzyUwU",
      url: "https://www.gizzy.pro",
    },
    {
      name: "Felix",
      url: "https://felixrnr.com",
    },
    {
      name: "BoomBolt",
      url: "https://boombolt.xyz",
    },
    {
      name: "Aqui",
      url: "https://aquiffoo.vercel.app",
    },
    {
      name: "ComputerBlade",
      url: "https://computerblade.is-a.dev",
    },
    {
      name: "FlameFox",
      url: "#",
    },
    {
      name: "Matei",
      url: "https://mateishome.page",
    },
    {
      name: "Lezetho",
      url: "https://lezetho.co.uk",
    },
    {
      name: "Fynn",
      url: "https://fynn.devcreates.lol",
    },
    {
      name: "Ella",
      url: "https://github.com/asleepynerd",
    },
  ],
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/ploszukiwacz",
  },
  {
    NAME: "github",
    HREF: "https://github.com/ploszukiwacz",
  },
  {
    NAME: "discord",
    HREF: "https://discord.com/users/783390611121111040",
  },
  {
    NAME: "bsky",
    HREF: "https://bsky.app/profile/ploszukiwacz.bsky.social",
  },
  {
    NAME: "mastodon",
    HREF: "https://mastodon.social/@ploszukiwacz",
  },
];

export const IDENTITIES: Identity = [
  {
    NAME: "PGP",
    HREF: "/pgp_public.asc",
  },
];

export const STUFFIUSE: Stuffiuse = [
  {
    NAME: "Arch",
    HREF: "https://archlinux.org",
  },
  {
    NAME: "Zed",
    HREF: "https://zed.dev",
  },
  {
    NAME: "Docker",
    HREF: "https://www.docker.com",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com",
  },
  {
    NAME: "JavaScript",
    HREF: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    NAME: "TypeScript",
    HREF: "https://www.typescriptlang.org",
  },
  {
    NAME: "Node.js",
    HREF: "https://nodejs.org",
  },
  {
    NAME: "pnpm",
    HREF: "https://pnpm.io",
  },
  {
    NAME: "Astro",
    HREF: "https://astro.build",
  },
  {
    NAME: "Termius",
    HREF: "https://termius.com",
  }
];
