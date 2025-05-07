
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Web Development Workshop",
    description:
      "Join us for a hands-on workshop on modern frontend frameworks and best practices.",
    date: "June 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    category: "Workshop",
    featured: true,
  },
  {
    id: 2,
    title: "Data Science Conference",
    description:
      "Annual conference featuring keynotes from industry leaders and networking opportunities.",
    date: "July 8-10, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Tech Convention Center",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    category: "Conference",
    featured: false,
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    description:
      "Learn the latest design trends and tools from industry-leading designers.",
    date: "June 25, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    category: "Masterclass",
    featured: false,
  },
  {
    id: 4,
    title: "Tech Career Fair",
    description:
      "Connect with top companies hiring tech talent and explore new opportunities.",
    date: "August 5, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    category: "Career",
    featured: false,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join our live events, workshops, and webinars to enhance your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`overflow-hidden hover:shadow-lg transition-all ${
                event.featured ? "border-primary/50 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative aspect-video ${
                  event.featured ? "lg:aspect-square" : ""
                } overflow-hidden`}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                />
                <Badge
                  className="absolute top-2 left-2"
                  variant={event.featured ? "default" : "secondary"}
                >
                  {event.category}
                </Badge>
              </div>
              <CardHeader className="p-4">
                <CardTitle
                  className={`${event.featured ? "text-xl" : "text-lg"}`}
                >
                  {event.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className={`${event.featured ? "w-full" : ""}`}
                  variant={event.featured ? "default" : "outline"}
                >
                  {event.featured ? "Reserve Your Spot" : "Learn More"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <a href="/events">View All Events <span className="ml-2">→</span></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
