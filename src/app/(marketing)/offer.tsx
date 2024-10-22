import { Container } from "@/components/shared";
import {
  School,
  Users,
  Gamepad,
  Activity,
  Printer,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui";

interface CardProps {
  icon: React.ElementType;
  label: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    icon: School,
    label: "Learn Anywhere",
    description:
      "Free resources for learners, educators and homeschool families.",
  },
  {
    icon: Users,
    label: "Collaborative Learning",
    description: "Share, connect and collaborate to learn new things.",
  },
  {
    icon: Gamepad,
    label: "Gamification of Learning",
    description: "Free educational games to maximize enjoyment and engagement.",
  },
  {
    icon: Activity,
    label: "Enhance Engagement",
    description: "Engaging stories, crafts and activities for young minds.",
  },
  {
    icon: Printer,
    label: "Free Printables",
    description: "Quality worksheet and activities for all age groups.",
  },
  {
    icon: HelpCircle,
    label: "Ask Anything!",
    description:
      "Our experts answer all the queries of learners, teachers and parents.",
  },
];

function Card({ icon: Icon, label, description }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.04)] md:rounded-2xl md:p-8 lg:rounded-3xl lg:p-10">
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary p-2 md:size-16 md:rounded-xl md:p-3 lg:size-20 lg:rounded-2xl lg:p-5">
        <Icon className="size-full text-white" />
      </div>{" "}
      <div className="mb-2 text-lg font-bold text-gray-800 md:text-xl lg:text-2xl">
        {label}
      </div>
      <p className="text-sm text-gray-700 md:text-base">{description}</p>
    </div>
  );
}

export function WhatWeOffer() {
  return (
    <section className="py-section bg-[#47259308]">
      <Container>
        <div className="space-y-2">
          <h2 className="section-title">
            What We <span>Offer</span>
          </h2>
          <p className="max-w-screen-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            impedit laudantium cupiditate soluta recusandae minima incidunt
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Naptha() {
  const details = [
    {
      label: "Courses",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      cta: {
        label: "Explore more",
        href: "#",
      },
    },
    {
      label: "Free Goodies",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      cta: {
        label: "View all",
        href: "#",
      },
    },
    {
      label: "Trivia games",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
      cta: {
        label: "Get Started",
        href: "#",
      },
    },
  ];

  return (
    <section className="py-section bg-[#47259308]">
      <Container>
        <div className="space-y-2">
          <h2 className="section-title max-w-xl">
            Digital Courses,<span>Free Goodies & Trivia games</span>
          </h2>
          <p className="max-w-screen-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            impedit laudantium cupiditate soluta recusandae minima incidunt
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.label.split(" ").join("-")}
              className="rounded-xl bg-white p-6 shadow-[0px_3px_4px_0px_rgba(0,0,0,0.04),0px_1px_2px_0px_rgba(0,0,0,0.04)] md:rounded-2xl md:p-8 lg:rounded-3xl lg:p-10"
            >
              <div className="mb-2 text-lg font-bold text-gray-800 md:text-xl lg:text-2xl">
                {item.label}
              </div>
              <p className="mb-4 text-sm text-gray-700 md:mb-6 md:text-base">
                {item.description}
              </p>
              <Button>{item.cta.label}</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
