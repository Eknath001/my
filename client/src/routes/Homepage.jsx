import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react"; // Import Clerk's useUser
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  const { isSignedIn, user } = useUser(); // Get user authentication details
  const isAdmin = isSignedIn && user?.publicMetadata?.role === "admin"; // Ensure only admins see the button
  const isUser = isSignedIn && !isAdmin; // Regular user (not admin)

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* Titles */}
        <div>
          <h1 className="text-gray-800 text-4xl md:text-3xl lg:text-3xl font-bold">
            🚀 Discover insightful content ✨ crafted with expertise 🏆, covering the latest trends 📈 and knowledge 📚.
          </h1>
        </div>

        {/* Show the "Write" button for regular users (not admins) */}
        {isUser && (
          <div  className="hidden md:block relative">
            <svg
              viewBox="0 0 200 200"
              width="200"
              height="200"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Share your idea 💡•
                </textPath>
                <textPath href="#circlePath" startOffset="50%">
                  Write your story 🖋️•
                </textPath>
              </text>
            </svg>
            <button
              className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Write your story"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polyline points="9 6 18 6 18 15" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>
        )}
        
      {isAdmin && (
         <Link to="write" className="hidden md:block relative">
           <svg
             viewBox="0 0 200 200"
             width="200"
             height="200"
             className="text-lg tracking-widest animate-spin animatedButton"
           >
             <path
               id="circlePath"
               fill="none"
               d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
             />
             <text>
               <textPath href="#circlePath" startOffset="0%">
                 Write your story 🖋️•
               </textPath>
               <textPath href="#circlePath" startOffset="50%">
                 Share your idea 💡•
               </textPath>
             </text>
           </svg>
           <button
             className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center"
             aria-label="Write your story"
           >
             <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               width="50"
               height="50"
               fill="none"
               stroke="white"
               strokeWidth="2"
             >
               <line x1="6" y1="18" x2="18" y2="6" />
               <polyline points="9 6 18 6 18 15" />
             </svg>
           </button>
         </Link>
       )}
      </div>


      {/* CATEGORIES */}
      <MainCategories />
      
      {/* FEATURED POSTS */}
      <FeaturedPosts />

      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};
export default Homepage;
 