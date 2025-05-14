import { useState } from 'react';
// import { 
//   // Star, 
//   Filter, 
//   // Bookmark, 
//   // BookmarkCheck 
// } from 'lucide-react';
import { courses } from '../../data/courses';
// import { useCart } from '../../contexts/CartContext';

import CourseCard from '../ui/CourseCard';
import { Plus } from 'lucide-react';
import AddCourseModal from '../ui/AddCourseModal';
// import { useDispatch } from 'react-redux';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  // const [showFilters, setShowFilters] = useState(false);
   const [showAddModal, setShowAddModal] = useState(false);
  // const { addToCart } = useCart();
  
  const categories = ['All', 'Web Development', 'React JS', 'Frontend Development', 'Mobile Development'];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

    // const dispatch = useDispatch()

  return (
    <section id="courses" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Top Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem minus distinctio eaque officia rerum?          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button> */}
          <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </button>
        </div>
        
        {/* {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>All Prices</option>
                <option>Free</option>
                <option>Under $50</option>
                <option>$50 - $100</option>
                <option>$100+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option>Any Duration</option>
                <option>Short (0-4 weeks)</option>
                <option>Medium (4-8 weeks)</option>
                <option>Long (8+ weeks)</option>
              </select>
            </div>
          </div>
        )} */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none">
            View All Courses
          </button>

          {/* <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none"
          >
            ADD New Course
          </button> */}
        </div>
      </div>

       <AddCourseModal 
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </section>
  );
};

export default Courses;




// import { useState, ChangeEvent } from 'react';
// import { courses as initialCourses } from '../../data/courses';
// import CourseCard from '../ui/CourseCard';

// type Course = {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
//   price: string;
//   image: string;
// };

// const Courses = () => {
//   const [activeCategory, setActiveCategory] = useState<string>('All');
//   const [courseList, setCourseList] = useState<Course[]>(initialCourses);
//   const [showAddForm, setShowAddForm] = useState<boolean>(false);
//   const [newCourse, setNewCourse] = useState<Course>({
//     id: '',
//     title: '',
//     category: '',
//     description: '',
//     price: '',
//     image: '',
//   });

//   const categories: string[] = ['All', 'Web Development', 'React JS', 'Frontend Development', 'Mobile Development'];

//   const filteredCourses = activeCategory === 'All'
//     ? courseList
//     : courseList.filter((course) => course.category === activeCategory);

//   const handleAddCourse = () => {
//     console.log("== handleAddCourse ==")
//     const courseWithId: Course = { ...newCourse, id: Date.now().toString() };
//     setCourseList([...courseList, courseWithId]);
//     setNewCourse({
//       id: '',
//       title: '',
//       category: '',
//       description: '',
//       price: '',
//       image: '',
//     });
//     setShowAddForm(false);
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewCourse((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
// console.log("newCourse", newCourse)
//   return (
//     <section id="courses" className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Explore Our Top Courses
//           </h2>
//           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>
//         </div>

//         <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
//           <div className="flex overflow-x-auto pb-2 sm:pb-0 -mx-4 sm:mx-0 px-4 sm:px-0 space-x-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
//                   activeCategory === category
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {showAddForm && (
//           <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
//             <h3 className="text-xl font-bold mb-4">Add New Course</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Title"
//                 className="border p-2 rounded"
//                 value={newCourse.title}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="category"
//                 placeholder="Category"
//                 className="border p-2 rounded"
//                 value={newCourse.category}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="description"
//                 placeholder="Description"
//                 className="border p-2 rounded col-span-2"
//                 value={newCourse.description}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="price"
//                 placeholder="Price"
//                 className="border p-2 rounded"
//                 value={newCourse.price}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 name="image"
//                 placeholder="Image URL"
//                 className="border p-2 rounded"
//                 value={newCourse.image}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mt-4 space-x-2">
//               <button
//                 onClick={handleAddCourse}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Add Course
//               </button>
//               <button
//                 onClick={() => setShowAddForm(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCourses.map((course:any) => (
//            <CourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button
//             onClick={() => setShowAddForm(true)}
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-400 hover:bg-orange-700 focus:outline-none"
//           >
//             ADD New Course
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
