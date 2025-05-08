
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck, Clock, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development",
    description: "Learn HTML, CSS, JavaScript, React js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    price: 89.99,
    rating: 4.8,
    students: 12453,
    duration: "48 hours",
    instructor: "Lorem Ipsum",
    level: "Beginner",
    category: "Web Development",
    bestseller: true,
  },
  {
    id: 2,
    title: "Frontend Developement with React",
    description: "Learn HTML, CSS, JavaScript, React js",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e",
    price: 94.99,
    rating: 4.7,
    students: 8734,
    duration: "52 hours",
    instructor: "Lorem Ipsum",
    level: "Intermediate",
    category: "Web Development",
    bestseller: true,
  },
  {
    id: 3,
    title: "Mobile App Development with React Native",
    description: "Build iOS and Android apps with one codebase",
    image: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521",
    price: 79.99,
    rating: 4.6,
    students: 6329,
    duration: "36 hours",
    instructor: "Lorem Ipsum",
    level: "Intermediate",
    category: "Mobile Development",
    bestseller: false,
  },
  {
    id: 4,
    title: "Advanced JavaScript Programming",
    description: "Master modern JavaScript features and patterns",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    price: 69.99,
    rating: 4.9,
    students: 9127,
    duration: "28 hours",
    instructor: "Lorem Ipsum",
    level: "Advanced",
    category: "JavaScript",
    bestseller: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "JavaScript",
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">Explore Our Courses</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-none">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
                {course.bestseller && (
                  <Badge className="absolute top-2 left-2" variant="default">
                    Bestseller
                  </Badge>
                )}
              </div>
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <Badge variant="outline">{course.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg mt-2 line-clamp-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-4 w-4 mr-1" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="font-bold">${course.price}</div>
                <Button asChild>
                  <Link to={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild variant="outline">
            <Link to="/courses">
              View All Courses <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
