
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function RegisterFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, course: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 lg:order-2">
            <h2 className="section-title">Register for a Free Consultation</h2>
            <p className="text-lg text-muted-foreground">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos cumque hic doloremque, omnis quia!            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Personalized Learning Path</h3>
                  <p className="text-muted-foreground text-sm">Get a customized curriculum based on your goals</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Expert Career Advice</h3>
                  <p className="text-muted-foreground text-sm">Learn which skills are most valuable for your career</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Special Discounts</h3>
                  <p className="text-muted-foreground text-sm">Get access to exclusive offers and scholarships</p>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Join over 100,000 students</p>
              <p className="text-sm text-muted-foreground">
                "The consultation helped me choose the perfect course for my career transition. I'm now working as a full-stack developer!"
              </p>
              <div className="flex items-center space-x-2 mt-3">
                <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                    alt="Student Testimonial" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Roberts</p>
                  <p className="text-xs text-muted-foreground">Former Marketing Specialist</p>
                </div>
              </div>
            </div> */}
          </div>
          
          <div className="lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <CardDescription>
                  Fill out the form below to get more information about our courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="abc xyz"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abcxyz@gmail.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Course of Interest</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webDev">Web Development</SelectItem>
                        <SelectItem value="dataScience">Data Science</SelectItem>
                        <SelectItem value="mobileDev">Mobile Development</SelectItem>
                        <SelectItem value="uiDesign">UI/UX Design</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Schedule Consultation
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-center text-muted-foreground">
                By submitting this form, you agree to our Terms of Service and Privacy Policy
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
