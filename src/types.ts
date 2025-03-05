export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Friend = {
  name: string;
  url: string;
}

export type Identity = {
  NAME: string;
  HREF: string;
}[];

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
  list?: Friend[];
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
