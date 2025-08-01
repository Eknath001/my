import { useSearchParams } from "react-router-dom";
import Search from "./Search";
import clsx from "clsx"; // Utility for conditional classNames

const filterOptions = [
  { label: "Newest", value: "newest" },
  { label: "Most Popular", value: "popular" },
  { label: "Trending", value: "trending" },
  { label: "Oldest", value: "oldest" },
];

const categories = [
  { label: "All", value: "general" },
  { label: "Web Design", value: "web-design" },
  { label: "Development", value: "development" },
  { label: "Biography", value: "biography" },
  { label: "News", value: "news" },
  { label: "Marketing", value: "marketing" },
];

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSort = searchParams.get("sort") || "";
  const selectedCategory = searchParams.get("cat") || "";

  const handleFilterChange = (e) => {
    if (selectedSort !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategory !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };

  return (
    <div className="px-4 h-max sticky top-8">
      {/* Search */}
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />

      {/* Filters */}
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        {filterOptions.map((filter) => (
          <label key={filter.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              onChange={handleFilterChange}
              value={filter.value}
              checked={selectedSort === filter.value}
              className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
            />
            {filter.label}
          </label>
        ))}
      </div>

      {/* Categories */}
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {categories.map((category) => (
          <span
            key={category.value}
            className={clsx(
              "underline cursor-pointer",
              selectedCategory === category.value ? "text-blue-800 font-semibold" : "text-gray-700"
            )}
            onClick={() => handleCategoryChange(category.value)}
          >
            {category.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
