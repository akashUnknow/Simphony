import React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "Preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Indicator showing task completion.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Separates scrollable content visually.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "Layered sections shown one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "Popup displaying info on hover or focus.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu viewport={false} className="z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="m-5">Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 md:w-[100px] lg:w-[100px] lg:grid-cols-[.75fr_1fr] p-1">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link to={"/RequestProfile"} className="flex items-center gap-2">
                    <div className="text-sm from-neutral-700">Request</div>
                  </Link>
                </NavigationMenuLink>
              </li>
              {/* <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists, etc.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-2">
              <li className="flex flex-col gap-2">
                <NavLink
                  title="Components"
                  description="Browse all components in the library."
                />
                <NavLink
                  title="Documentation"
                  description="Learn how to use the library."
                />
                <NavLink
                  title="Blog"
                  description="Read our latest blog posts."
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-1 p-2">
              <li className="flex flex-col gap-2">
                <NavigationMenuLink asChild>
                  <Link to="#">Components</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Documentation</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Blocks</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-2 p-2">
              <li className="flex flex-col gap-2">
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <CircleHelpIcon /> Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <CircleIcon /> To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <CircleCheckIcon /> Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-xs leading-tight">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function NavLink({ title, description }) {
  return (
    <NavigationMenuLink asChild>
      <Link to="#">
        <div className="font-medium">{title}</div>
        <div className="text-muted-foreground text-sm">{description}</div>
      </Link>
    </NavigationMenuLink>
  );
}

export default Navbar;
