
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function SpecialOfferSection() {
  return (
    <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-primary/5"></div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-primary/5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full px-3 py-1 bg-primary/20 text-primary font-medium text-sm mb-4">
              Limited Time Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get 50% Off on Premium Courses
            </h2>
            <p className="text-lg text-muted-foreground">
              Upgrade your skills with our most popular courses. Limited-time discount
              available for the next 48 hours only.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="bg-card p-3 rounded-lg shadow-sm w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold">48</span>
                </div>
                <p className="text-sm mt-1">Hours</p>
              </div>
              <div className="text-center">
                <div className="bg-card p-3 rounded-lg shadow-sm w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold">00</span>
                </div>
                <p className="text-sm mt-1">Minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-card p-3 rounded-lg shadow-sm w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold">00</span>
                </div>
                <p className="text-sm mt-1">Seconds</p>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link to="/courses/special-offer">
                Get 50% Discount Now
              </Link>
            </Button>
          </div>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
                alt="Data Science Course"
                className="aspect-[16/9] object-cover w-full"
              />
              <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
                50% OFF
              </Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Badge variant="outline">Data Science</Badge>
                <div className="flex items-center space-x-1">
                  <span className="line-through text-muted-foreground">$199.99</span>
                  <span className="font-bold text-lg">$99.99</span>
                </div>
              </div>
              <CardTitle>Complete Data Science & Machine Learning Bootcamp 2024</CardTitle>
              <CardDescription>
                Master Python, SQL, statistics, data visualization, machine learning, and deep learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>60 hours</span>
                  </div>
                  <div className="flex items-center">
                    <BadgeCheck className="h-4 w-4 mr-1" />
                    <span>Certificate</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="font-medium">What you'll learn:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 mr-2 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Python for Data Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 mr-2 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Machine Learning & Deep Learning Models</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 mr-2 mt-0.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>SQL & NoSQL Database Management</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full">Enroll Now With 50% Discount</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
