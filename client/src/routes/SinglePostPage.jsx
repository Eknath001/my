import React from "react";
import { useParams, Link } from "react-router-dom"; // ✅ Added useParams
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/posts/${slug}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch post");
  }
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending)
    return (
      <div className="flex justify-center items-center h-80">Loading...</div>
    );

  if (error)
    return (
      <div className="text-red-600 text-center py-10">
        ❌ Something went wrong: {error.message}
      </div>
    );

  if (!data)
    return (
      <div className="text-center text-gray-500 py-10">Post not found!</div>
    );

  return (
    <div className="flex flex-col gap-8">
      {/* Post Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to={`/user/${data.user.username}`} className="text-blue-800">
              {data.user.username}
            </Link>
            <span>on</span>
            <Link to={`/categories/${data.category}`} className="text-blue-800">
              {data.category}
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>

        {/* Post Image */}
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image
              src={data.img}
              w="600"
              className="rounded-2xl"
              alt={data.title}
            />
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          {data.content ? (
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          ) : (
            <p className="text-gray-500 italic">No content available.</p>
          )}
        </div>

        {/* Sidebar Menu */}
        <div className="px-4 h-max sticky top-8">
          {/****************************** */}
          <h1 className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wide">
            Author
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              {data.user.img ? (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt={`${data.user.username}'s profile`}
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                  {data.user.username?.charAt(0).toUpperCase()}
                </div>
              )}
              <Link
                to={`/user/${data.user.username}`}
                className="font-medium text-blue-700 hover:underline"
              >
                {data.user.username}
              </Link>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic">
              {data.user.bio || "This author hasn't written a biography yet."}
            </p>
          </div>

          {/***************************** */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt={`${data.user.username}'s profile`}
                />
              )}
              <Link
                to={`/user/${data.user.username}`}
                className="text-blue-800"
              >
                {data.user.username}
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              {data.user.bio || "No biography available"}
            </p>
          </div>

          {/* Post Actions */}
          <PostMenuActions post={data} />

          {/* Categories */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/posts">
              All
            </Link>
            {[
              "web-design",
              "development",
              "biography",
              "news",
              "marketing",
            ].map((category) => (
              <Link
                key={category}
                className="underline"
                to={`/categories/${category}`}
              >
                {category.replace("-", " ")}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>

      {/* Comments Section */}
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
