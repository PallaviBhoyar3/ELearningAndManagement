
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "UX Designer",
    company: "Design Co.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    text: "The Web Development Bootcamp completely changed my career path. The instructor was incredibly knowledgeable and supportive throughout the course. I landed a job as a frontend developer just two weeks after completing the program!",
    rating: 5,
    course: "Web Development Bootcamp",
  },
  {
    id: 2,
    name: "Mark Anderson",
    role: "Data Analyst",
    company: "Tech Solutions Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "The Data Science course exceeded my expectations. The curriculum was comprehensive and up-to-date with the latest industry trends. I particularly appreciated the hands-on projects that gave me practical experience to showcase in interviews.",
    rating: 5,
    course: "Data Science & Machine Learning",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Product Manager",
    company: "Innovate Labs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    text: "As someone transitioning into tech from a non-technical background, the UI/UX Design course provided the perfect foundation. The instructor broke down complex concepts into digestible pieces, making the learning process enjoyable.",
    rating: 4,
    course: "UI/UX Design Principles",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Mobile Developer",
    company: "AppWorks",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
    text: "The Flutter Development course was instrumental in helping me build my first mobile app. The step-by-step approach and project-based learning made it easy to follow along and apply what I learned immediately.",
    rating: 5,
    course: "Flutter App Development",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Don't take our word for it - hear from some of our students
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 z-10 rounded-full"
              onClick={prevTestimonial}
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </Button>

            <div className="w-full overflow-hidden px-6 md:px-12">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <Card className="border-none shadow-md">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="md:w-1/3 flex flex-col items-center md:items-start">
                            <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="text-center md:text-left">
                              <h3 className="font-bold text-lg">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.role} at {testimonial.company}
                              </p>
                              <div className="flex items-center mt-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < testimonial.rating
                                        ? "text-yellow-500 fill-yellow-500"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <blockquote className="italic text-lg leading-relaxed">
                              "{testimonial.text}"
                            </blockquote>
                            <p className="mt-4 text-sm text-primary font-medium">
                              Course: {testimonial.course}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 z-10 rounded-full"
              onClick={nextTestimonial}
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </Button>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full mx-1 ${
                  i === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
