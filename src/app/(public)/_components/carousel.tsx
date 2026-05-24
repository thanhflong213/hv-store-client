import { Button } from "@/components/ui/button";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: "1",
    title: "Dashboard Overview",
    description: "Manage your data and monitor system activity easily.",
    cta: "View Dashboard",
  },
  {
    id: "2",
    title: "Product Management",
    description: "Create, edit and manage your products efficiently.",
    cta: "Manage Products",
  },
  {
    id: "3",
    title: "User Accounts",
    description: "Control user access and permissions.",
    cta: "View Users",
  },
];

const Carousel = () => (
  <CarouselUI>
    <CarouselContent d>
      {slides.map((slide) => (
        <CarouselItem key={slide.id}>
          <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden rounded-lg bg-muted">
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <h2 className="mb-2 font-bold text-3xl">{slide.title}</h2>
              <p className="mb-6 max-w-md text-sm opacity-90">
                {slide.description}
              </p>
              <Button variant="secondary">{slide.cta}</Button>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-4" />
    <CarouselNext className="right-4" />
  </CarouselUI>
);

export default Carousel;
