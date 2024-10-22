import { Container, Logo } from "@/components/shared";
import { Button } from "@/components/ui";
import { Menu } from "lucide-react";
import Link from "next/link";

const links = [
  {
    label: "Our Books",
    href: "/books",
  },
  {
    label: "Free Goodies",
    href: "/free-goodies",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white py-4 md:py-6 lg:py-8">
      <Container>
        {/* mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <Logo className="h-6" />
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </div>

        {/* desktop */}
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex items-center space-x-5 lg:gap-x-10">
            <Logo className="h-10 lg:h-12" />
            <div className="flex items-center gap-x-5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-primary font-medium text-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
