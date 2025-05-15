import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Star, Award, FileText, Video, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
// import DashboardCourseCard from './DashboardCourseCard';
import { enrolledCourses } from '../../data/enrolledCourses';
import ShowVideoModal from '../courses/ShowVideoModal';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('enrolled');
  const [showModal, setShowModal] = useState(false);
  
  const tabs = [
    { id: 'enrolled', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'In Progress', icon: Clock },
    { id: 'completed', label: 'Completed', icon: CheckCircle },
  ];
  
  const completedCourses = enrolledCourses.filter(course => course.progress === 100);
  const inProgressCourses = enrolledCourses.filter(course => course.progress < 100);
  
  const displayCourses = activeTab === 'enrolled' ? enrolledCourses : 
                        activeTab === 'progress' ? inProgressCourses :
                        activeTab === 'completed' ? completedCourses : [];

  const totalProgress = enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Welcome back, {user?.name}!
          </motion.h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Enrolled</h3>
                <p className="text-2xl font-bold">{enrolledCourses.length} courses</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${totalProgress}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Overall progress: {totalProgress.toFixed(0)}%</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Completed</h3>
                <p className="text-2xl font-bold">{completedCourses.length} courses</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${(completedCourses.length / enrolledCourses.length) * 100}%` }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {((completedCourses.length / enrolledCourses.length) * 100).toFixed(0)}% of your courses completed
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Continue Learning</h3>
              {inProgressCourses.length > 0 ? (
                <div className="space-y-4">
                  {inProgressCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Last activity: 2 days ago</span>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <button 
                      className="ml-4 p-2 text-blue-600 hover:text-blue-800 transition-colors"
                       onClick={() => setShowModal(true)}
                      >
                        <Video className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">You don't have any courses in progress</p>
              )}
              
              {inProgressCourses.length > 3 && (
                <div className="mt-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View all in-progress courses
                  </button>
                </div>
              )}
            </motion.div>
          </div>
          
        </div>
      </div>

      <ShowVideoModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Dashboard;