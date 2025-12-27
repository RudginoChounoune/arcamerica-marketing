import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import { Link } from "react-router-dom"; // or "next/link" for Next.js
  
  export default function Navbar() {
    return (
      <NavigationMenu className="px-6 py-4">
        <NavigationMenuList className="flex gap-6 text-lg font-semibold">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <a
              href="https://blog.unitedintalk.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/features">Features</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/signup">Join Now</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a
              href="https://unitedintalk.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }