import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "IGoByARealyLongNickName",
  EMAIL: "admin@ploszukiwacz.pl",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "IGoByARealyLongNickName's Portfolio Website",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
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
      url: "https://mkeko.pro"
    },
    {
      name: "GizzyUwU",
      url: "https://www.gizzy.pro"
    },
    {
      name: "Felix",
      url: "https://felixrnr.com"
    },
    {
      name: "BoomBolt",
      url: "https://boombolt.xyz/"
    },
    {
      name: "Aqui",
      url: "https://aquiffoo.vercel.app/"
    },
    {
      name: "ComputerBlade",
      url: "https://computerblade.is-a.dev/"
    },
    {
      name: "FlameFox",
      url: "#"
    },
    {
      name: "Goober",
      url: "https://mateishome.page/"
    },
    {
      name: "Cyteon",
      url: "https://cyteon.tech"
    }
  ]
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/ploszukiwacz",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/PlOszukiwaczDEV"
  },
  { 
    NAME: "discord",
    HREF: "https://discord.com/users/783390611121111040",
  },
  {
    NAME: "bsky",
    HREF: "https://bsky.app/profile/ploszukiwacz.bsky.social"
  },
  {
    NAME: "mastodon",
    HREF: "https://mastodon.social/@ploszukiwacz"
  }
];
