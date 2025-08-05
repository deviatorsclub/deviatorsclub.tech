import { StaticImageData } from "next/image";

export type TeamMember = {
  name: string;
  roles: string[];
  intro: string;
  urls: {
    github: string;
    linkedin: string;
    twitter?: string;
    portfolio?: string;
  };
  image: StaticImageData;
  keywords: string[];
};

export type TeamMemberByName = TeamMember | undefined;
export type TeamMemberByKeyword = TeamMember[] | undefined;
export type TeamMemberByRole = TeamMember[];
