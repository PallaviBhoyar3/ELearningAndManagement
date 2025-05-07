
import { Card, CardContent } from "@/components/ui/card";

const instructorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Web Development Expert",
    bio: "Former Google engineer with 10+ years of experience teaching web development",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    courses: 12,
    students: "10K+",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Data Science Specialist",
    bio: "PhD in Machine Learning with experience at leading research institutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    courses: 8,
    students: "15K+",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Olivia Rodriguez",
    role: "UX/UI Design Instructor",
    bio: "Award-winning designer with 8+ years at top tech companies",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    courses: 6,
    students: "8K+",
    rating: 4.9,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Mobile App Development",
    bio: "iOS developer and entrepreneur who built multiple successful apps",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    courses: 10,
    students: "12K+",
    rating: 4.7,
  },
];

export default function InstructorsSection() {
  return (
    <section id="instructors" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">Learn from Industry Experts</h2>
          <p className="section-subtitle">
            Our instructors are passionate professionals with real-world experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorsData.map((instructor) => (
            <Card
              key={instructor.id}
              className="overflow-hidden hover:shadow-md transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg">{instructor.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {instructor.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {instructor.bio}
                </p>
                <div className="flex justify-between items-center text-sm pt-2 border-t">
                  <div>
                    <span className="font-medium">{instructor.courses}</span>{" "}
                    <span className="text-muted-foreground">Courses</span>
                  </div>
                  <div>
                    <span className="font-medium">{instructor.students}</span>{" "}
                    <span className="text-muted-foreground">Students</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1">{instructor.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Join our team of expert instructors and share your knowledge with students worldwide
          </p>
          <a
            href="#"
            className="text-primary font-medium hover:underline"
          >
            Become an Instructor →
          </a>
        </div>
      </div>
    </section>
  );
}
