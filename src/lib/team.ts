/* eslint-disable */
import team from "@/data/team";

import {
  TeamMember,
  TeamMemberByKeyword,
  TeamMemberByName,
  TeamMemberByRole,
} from "@/types/team";

export function getTeam({ name }: { name: string }): TeamMember | undefined;
export function getTeam({ keyword }: { keyword: string }): TeamMember[];
export function getTeam({ roles }: { roles: string[] }): TeamMember[];
export function getTeam({
  name,
  keyword,
  roles,
}: {
  name?: string;
  keyword?: string;
  roles?: string[];
}): TeamMemberByName | TeamMemberByKeyword | TeamMemberByRole | Error {
  if (name) {
    return team.find((member) => member.name === name);
  } else if (keyword) {
    return team.filter((member) => member.keywords.includes(keyword));
  } else if (roles) {
    return team.filter((member) =>
      member.roles.some((role) => roles.includes(role)),
    );
  } else {
    return new Error("No search criteria provided");
  }
}
