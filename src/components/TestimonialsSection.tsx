// src/components/TestimonialsSection.tsx

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent } from "@/components/ui/card";
  import Autoplay from "embla-carousel-autoplay";
  
  const testimonials = [
    {
      quote:
        "We're putting the 'social' back in social media — where real conversations come first.",
      author: "CEO, ArcZen",
    },
    {
      quote:
        "It’s good to have an alternative to friends and family. I can speak my mind without jeopardizing relationships.",
      author: "Early Access User",
    },
    {
      quote: "I absolutely love UnitedInTalk. It's really needed right now.",
      author: "User Feedback",
    },
    {
      quote:
        "I can see this tool having a ton of value and utility to many people.",
      author: "User Feedback",
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="bg-white py-24 scroll-snap-align-start">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-black to-blue-600 bg-clip-text text-transparent">
              What People Are Saying
            </span>
          </h2>
  
          <Carousel
            opts={{ align: "center", loop: true }}
            plugins={[
              Autoplay({
                delay: 4500,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map(({ quote, author }, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:basis-full flex justify-center"
                >
                  <Card className="w-full bg-white border border-gray-200 p-8 rounded-2xl shadow-lg">
                    <CardContent className="p-0">
                      <p className="text-2xl md:text-3xl font-medium text-black leading-snug mb-6">
                        “{quote}”
                      </p>
                      <p className="text-gray-500 font-semibold text-lg">
                        {author}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
  
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>
    );
  }
  