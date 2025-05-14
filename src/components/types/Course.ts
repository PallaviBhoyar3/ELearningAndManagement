export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrolled: boolean;
}