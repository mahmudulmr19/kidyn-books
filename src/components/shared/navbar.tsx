"use client";
import { Container, Logo } from "@/components/shared";
import { Button } from "@/components/ui";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-100 bg-white py-4 md:py-6 lg:py-8 sticky top-0 z-50">
      <Container>
        {/* mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <Logo className="h-6" />
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col space-y-4 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary font-medium text-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* desktop */}
        <div className="hidden items-center justify-between lg:flex">
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
      </Container>
    </nav>
  );
}
