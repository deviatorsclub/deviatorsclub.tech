import { BookIcon, GalleryVerticalIcon } from "lucide-react";
import {
  EnvelopeIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  {
    name: "Home",
    link: "/#home",
    icon: HomeIcon,
  },
  {
    name: "About",
    link: "/#about",
    icon: UserIcon,
  },
  {
    name: "Team",
    link: "/team",
    icon: UsersIcon,
  },
  {
    name: "Learn",
    link: "/learn",
    icon: BookIcon,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: GalleryVerticalIcon,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: EnvelopeIcon,
  },
];

export default navItems;
