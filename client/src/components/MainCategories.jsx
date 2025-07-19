import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full px-6 py-3 shadow-lg items-center justify-between gap-4 max-w-7xl mx-auto overflow-x-auto">
      {/* links */}
      <div className="flex items-center flex-wrap gap-3">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2 whitespace-nowrap"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2 whitespace-nowrap"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2 whitespace-nowrap"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2 whitespace-nowrap"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 rounded-full px-4 py-2 whitespace-nowrap"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2 whitespace-nowrap"
        >
          Marketing
        </Link>
      </div>

      {/* Divider */}
      <span className="hidden xl:inline text-gray-300 mx-2 text-xl">|</span>

      {/* search */}
      <div className="min-w-[200px]">
        <Search />
      </div>
    </div>
  );
};

export default MainCategories;
