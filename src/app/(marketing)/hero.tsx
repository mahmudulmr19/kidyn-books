import { Container } from "@/components/shared";
import { Button } from "@/components/ui";

export function Hero() {
  return (
    <header className="py-section bg-[url('/bg-hero.svg')] bg-cover bg-no-repeat">
      <Container className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center sm:max-w-md md:max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Inspiring Young Minds,{" "}
            <span className="text-primary">One Page at a Time</span>
          </h1>
          <p className="mt-5 md:mt-6">
            Discover engaging children&apos;s books that ignite curiosity and
            foster a love for learning. Dive into Lit2Go&apos;s collection and
            inspire your child&apos;s imagination today.
          </p>
          <Button className="mt-5 md:mt-7 lg:mt-10">Get Started</Button>
        </div>

        <div className="mx-auto mt-6 aspect-video w-full max-w-screen-lg md:mt-8 lg:mt-10">
          <iframe
            src="https://fast.wistia.net/embed/iframe/9zxejosfok?seo=false&videoFoam=false"
            title="925905506 Video"
            allow="autoplay; fullscreen"
            className="wistia_embed h-full w-full rounded-xl"
            name="wistia_embed"
          ></iframe>
        </div>
      </Container>
    </header>
  );
}
