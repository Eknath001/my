import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <h1 className="mb-8 text-2xl font-bold text-gray-800">Development Blog</h1>

      {/* Mobile Filter/Search Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>

      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        {/* Post List */}
        <div className="flex-1">
          <PostList />
        </div>

        {/* Side Menu (Filters & Search) */}
        <div
          className={`${
            open ? "absolute top-0 left-0 w-3/4 h-full bg-white shadow-lg p-4 z-50" : "hidden"
          } md:block md:relative md:w-auto`}
        >
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
