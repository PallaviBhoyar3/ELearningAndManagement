import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Course } from '../types';
import { courses as initialCourses } from '../data/courses';
import toast from 'react-hot-toast';

type CourseContextType = {
  courses: Course[];
  addCourse: (course: Omit<Course, 'id'>) => void;
  deleteCourse: (id: string) => void;
  updateCourse: (id: string, course: Partial<Course>) => void;
};

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  const addCourse = (courseData: Omit<Course, 'id'>) => {
    console.log("@add course function")
    // const newCourse: Course = {
    //   ...courseData,
    //   id: Math.random().toString(36).substr(2, 9),
    //   studentsEnrolled: 0,
    // };
    // console.log("newCourse", newCourse)
    
    // setCourses(prev => [...prev, newCourse]);
    // toast.success('Course added successfully');
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
    toast.success('Course deleted successfully');
  };

  const updateCourse = (id: string, courseData: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...courseData } : course
    ));
    toast.success('Course updated successfully');
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourses must be used within a CourseProvider');
  }
  return context;
};