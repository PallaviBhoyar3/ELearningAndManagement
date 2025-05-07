
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-background py-20 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-education-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-education-500/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Transform Your Future With Online Learning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Learn Without <span className="text-primary">Limits</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Discover thousands of courses, expert instructors, and a community
              of learners ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/signup">Join For Free</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 mr-1 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.8/5 Rating</span>
              </div>
              <div>•</div>
              <div>10K+ Students</div>
              <div>•</div>
              <div>500+ Courses</div>
            </div>
          </div>

          <div className="relative animate-fade-in animate-delay-200">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Student learning online"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">1000+</p>
                  <p className="text-sm text-muted-foreground">Online Courses</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Expert</p>
                  <p className="text-sm text-muted-foreground">Instructors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
