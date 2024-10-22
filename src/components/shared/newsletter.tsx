"use client";

import { Container } from "@/components/shared";
import { Button, Input } from "@/components/ui";

export function Newsletter() {
  return (
    <Container className="py-section">
      <div className="py-section rounded-xl bg-[url('/bg-newsletter.svg')] bg-cover bg-bottom bg-no-repeat md:rounded-2xl lg:rounded-3xl">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="section-title mb-4 text-white">
            Subscribe For Newest Books Updates
          </h2>
          <p className="mb-6 text-sm text-gray-50 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
          <form className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 md:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              required
            />
            <Button type="submit" variant="secondary" className="max-md:w-full">
              Join Now
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
}
