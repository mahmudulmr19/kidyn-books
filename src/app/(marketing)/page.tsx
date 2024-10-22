import React from "react";
import { Hero } from "./hero";
import { Naptha, WhatWeOffer } from "./offer";
import { FindBook } from "./findbook";
import { FeaturedBook } from "./featured-book";
import { Newsletter } from "@/components/shared";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <WhatWeOffer />
      <FindBook />
      <FeaturedBook />
      <Naptha />
      <Newsletter />
    </React.Fragment>
  );
}
