import { Container } from "@/components/shared";

export function FindBook() {
  return (
    <Container className="py-8">
      <section className="flex flex-col rounded-xl bg-purple-50 p-5 lg:flex-row lg:rounded-3xl lg:p-10">
        <div className="flex w-full flex-col justify-center lg:w-1/2">
          <h2 className="section-title mb-4">
            Quickly Find Your Next Favorite Book
          </h2>
          <p className="text-sm text-gray-700 md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;`s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <div className="mt-6 aspect-video w-full lg:mt-0 lg:w-1/2">
          <iframe
            src="https://fast.wistia.net/embed/iframe/9zxejosfok?seo=false&videoFoam=false"
            title="925905506 Video"
            allow="autoplay; fullscreen"
            className="wistia_embed h-full w-full rounded-xl"
            name="wistia_embed"
          ></iframe>
        </div>
      </section>
    </Container>
  );
}
