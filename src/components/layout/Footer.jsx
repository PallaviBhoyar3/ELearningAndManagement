
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">E-Learning</h3>
            <p className="mb-6 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, illo beatae? A, mollitia tempora!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary">Our Courses</Link>
              </li>
              <li>
                <Link to="/instructors" className="hover:text-primary">Instructors</Link>
              </li>
              {/* <li>
                <Link to="/events" className="hover:text-primary">Events</Link>
              </li> */}
              {/* <li>
                <Link to="/blog" className="hover:text-primary">Blog</Link>
              </li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link to="/help" className="hover:text-primary">Help Center</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary">FAQ</Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>Pune, Maharashtra</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@e-learning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-primary">Privacy</Link>
              <Link to="/terms" className="text-sm hover:text-primary">Terms</Link>
              <Link to="/cookies" className="text-sm hover:text-primary">Cookies</Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
