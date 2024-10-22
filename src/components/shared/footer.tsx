import React from "react";
import { Container, Logo } from "@/components/shared";
import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#47259308] pb-10 pt-10 md:pt-16 lg:pt-20">
      <Container className="flex flex-col justify-between md:flex-row md:gap-x-5 lg:gap-x-10">
        <div className="mb-8 w-full max-w-sm space-y-4 md:mb-0 md:w-1/3">
          <Logo className="h-12" />
          <p className="text-sm font-medium text-gray-700 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-950">Quick Link</h3>
            <ul className="space-y-2 font-medium text-gray-700">
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/login">Log In</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-950">Resources</h3>
            <ul className="space-y-2 font-medium text-gray-700">
              <li>
                <a href="/start-here">Start Here</a>
              </li>
              <li>
                <a href="/free-goodies">Free Goodies</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/trivia-games">Trivia Games</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-950">Follow Us</h3>
            <ul className="space-y-2 font-medium text-gray-700">
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://youtube.com">YouTube</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-8 border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm text-gray-600 md:mb-0">
            Copyright © KidynBooks
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-gray-600"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://youtube.com"
              className="text-gray-400 hover:text-gray-600"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-gray-600"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-gray-600"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
