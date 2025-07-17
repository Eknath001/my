

//import { useAuth, useUser } from "@clerk/clerk-react";
//import 'react-quill/dist/quill.snow.css';
//
//import ReactQuill from "react-quill-new";
//import { useMutation } from "@tanstack/react-query";
//import axios from "axios";
//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
//import Upload from "../components/Upload";
//
//const Write = () => {
//  const { isLoaded, isSignedIn } = useUser();
//  const [value, setValue] = useState("");
//  const [cover, setCover] = useState("");
//  const [img, setImg] = useState("");
//  const [video, setVideo] = useState("");
//  const [progress, setProgress] = useState(0);
//
//  const [errors, setErrors] = useState({});
//
//  const navigate = useNavigate();
//  const { getToken } = useAuth();
//
//  useEffect(() => {
//    img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
//  }, [img]);
//
//  useEffect(() => {
//    video &&
//      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
//  }, [video]);
//
//  const mutation = useMutation({
//    mutationFn: async (newPost) => {
//      const token = await getToken();
//      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      });
//    },
//    onSuccess: (res) => {
//      toast.success("Post has been created");
//      navigate(`/${res.data.slug}`);
//    },
//  });
//
//  if (!isLoaded) return <div>Loading...</div>;
//  if (isLoaded && !isSignedIn) return <div>You should login!</div>;
//
//  const validate = (data) => {
//    const newErrors = {};
//    if (!data.title?.trim()) newErrors.title = "Title is required";
//    if (!data.desc?.trim()) newErrors.desc = "Description is required";
//    if (!data.category) newErrors.category = "Category is required";
//    if (!data.content?.trim()) newErrors.content = "Content cannot be empty";
//    if (!data.img) newErrors.img = "Cover image is required";
//    return newErrors;
//  };
//
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const formData = new FormData(e.target);
//
//    const data = {
//      img: cover.filePath || "",
//      title: formData.get("title"),
//      category: formData.get("category"),
//      desc: formData.get("desc"),
//      content: value,
//    };
//
//    const formErrors = validate(data);
//    if (Object.keys(formErrors).length > 0) {
//      setErrors(formErrors);
//      return;
//    }
//
//    setErrors({});
//    mutation.mutate(data);
//  };
//
//  return (
//    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
//      <h1 className="text-cl font-light">Create a New Post</h1>
//      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
//        <Upload type="image" setProgress={setProgress} setData={setCover}>
//          <button type="button" className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
//            Add a cover image
//          </button>
//        </Upload>
//        {errors.img && <p className="text-red-500 text-sm">{errors.img}</p>}
//
//        <input
//          className="text-4xl font-semibold bg-transparent outline-none"
//          type="text"
//          placeholder="My Awesome Story"
//          name="title"
//        />
//        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
//
//        <div className="flex items-center gap-4">
//          <label htmlFor="category" className="text-sm">Choose a category:</label>
//          <select
//            name="category"
//            id="category"
//            className="p-2 rounded-xl bg-white shadow-md"
//          >
//            <option value="">-- Select --</option>
//            <option value="general">General</option>
//            <option value="web-design">Web Design</option>
//            <option value="development">Development</option>
//            <option value="databases">Databases</option>
//            <option value="seo">Search Engines</option>
//            <option value="marketing">Marketing</option>
//          </select>
//        </div>
//        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
//
//        <textarea
//          className="p-4 rounded-xl bg-white shadow-md"
//          name="desc"
//          placeholder="A Short Description"
//        />
//        {errors.desc && <p className="text-red-500 text-sm">{errors.desc}</p>}
//
//        <div className="flex flex-1">
//          <div className="flex flex-col gap-2 mr-2">
//            <Upload type="image" setProgress={setProgress} setData={setImg}>🌆</Upload>
//            <Upload type="video" setProgress={setProgress} setData={setVideo}>▶️</Upload>
//          </div>
//          <div className="flex-1 flex flex-col">
//            <ReactQuill
//              theme="snow"
//              className="flex-1 rounded-xl bg-white shadow-md"
//              value={value}
//              onChange={setValue}
//              readOnly={0 < progress && progress < 100}
//            />
//            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
//          </div>
//        </div>
//
//        <button
//          type="submit"
//          disabled={mutation.isPending || (0 < progress && progress < 100)}
//          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
//        >
//          {mutation.isPending ? "Loading..." : "Send"}
//        </button>
//
//        {progress > 0 && progress < 100 && (
//          <p className="text-sm text-gray-500">Progress: {progress}%</p>
//        )}
//      </form>
//    </div>
//  );
//};
//
//export default Write;
//


//import { useAuth, useUser } from "@clerk/clerk-react";
//import 'react-quill/dist/quill.snow.css';
//
//import ReactQuill from "react-quill-new";
//import { useMutation } from "@tanstack/react-query";
//import axios from "axios";
//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
//import Upload from "../components/Upload"; // Assuming this component exists
//
//const Write = () => {
//  const { isLoaded, isSignedIn } = useUser();
//  const [value, setValue] = useState("");
//  const [cover, setCover] = useState("");
//  const [img, setImg] = useState("");
//  const [video, setVideo] = useState("");
//  const [progress, setProgress] = useState(0);
//
//  const [errors, setErrors] = useState({});
//
//  const navigate = useNavigate();
//  const { getToken } = useAuth();
//
//  useEffect(() => {
//    img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
//  }, [img]);
//
//  useEffect(() => {
//    video &&
//      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
//  }, [video]);
//
//  const mutation = useMutation({
//    mutationFn: async (newPost) => {
//      const token = await getToken();
//      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      });
//    },
//    onSuccess: (res) => {
//      toast.success("Post has been created");
//      navigate(`/${res.data.slug}`);
//    },
//  });
//
//  if (!isLoaded) return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading...</div>;
//  if (isLoaded && !isSignedIn) return <div className="flex justify-center items-center h-screen text-xl text-red-500">You should login!</div>;
//
//  const validate = (data) => {
//    const newErrors = {};
//    if (!data.title?.trim()) newErrors.title = "Title is required";
//    if (!data.desc?.trim()) newErrors.desc = "Description is required";
//    if (!data.category) newErrors.category = "Category is required";
//    if (!data.content?.trim()) newErrors.content = "Content cannot be empty";
//    if (!data.img) newErrors.img = "Cover image is required";
//    return newErrors;
//  };
//
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const formData = new FormData(e.target);
//
//    const data = {
//      img: cover.filePath || "",
//      title: formData.get("title"),
//      category: formData.get("category"),
//      desc: formData.get("desc"),
//      content: value,
//    };
//
//    const formErrors = validate(data);
//    if (Object.keys(formErrors).length > 0) {
//      setErrors(formErrors);
//      return;
//    }
//
//    setErrors({});
//    mutation.mutate(data);
//  };
//
//  return (
//    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
//      <div className="max-w-4xl mx-auto">
//        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Create a New Post</h1>
//        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-6">
//          <div className="flex flex-col">
//            <Upload type="image" setProgress={setProgress} setData={setCover}>
//              <button type="button" className="w-max bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-sm transition duration-200">
//                Add a cover image
//              </button>
//            </Upload>
//            {errors.img && <p className="text-red-600 text-sm mt-1">{errors.img}</p>}
//          </div>
//
//          <div className="flex flex-col">
//            <input
//              className="text-3xl md:text-4xl font-bold bg-transparent outline-none border-b border-gray-300 pb-2 focus:border-blue-500 transition duration-200 placeholder-gray-400"
//              type="text"
//              placeholder="My Awesome Story"
//              name="title"
//            />
//            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
//          </div>
//
//          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
//            <label htmlFor="category" className="text-gray-700 font-medium text-lg">Choose a category:</label>
//            <select
//              name="category"
//              id="category"
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//            >
//              <option value="">-- Select --</option>
//              <option value="general">General</option>
//              <option value="web-design">Web Design</option>
//              <option value="development">Development</option>
//              <option value="databases">Databases</option>
//              <option value="seo">Search Engines</option>
//              <option value="marketing">Marketing</option>
//            </select>
//            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
//          </div>
//
//          <div className="flex flex-col">
//            <textarea
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 min-h-[100px]"
//              name="desc"
//              placeholder="A Short Description"
//            />
//            {errors.desc && <p className="text-red-600 text-sm mt-1">{errors.desc}</p>}
//          </div>
//
//          <div className="flex flex-col md:flex-row flex-1 gap-4">
//            <div className="flex md:flex-col gap-2">
//              <Upload type="image" setProgress={setProgress} setData={setImg}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm">
//                  🌆
//                </button>
//              </Upload>
//              <Upload type="video" setProgress={setProgress} setData={setVideo}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm">
//                  ▶️
//                </button>
//              </Upload>
//            </div>
//            <div className="flex-1 flex flex-col">
//              <ReactQuill
//                theme="snow"
//                className="flex-1 rounded-lg bg-white shadow-sm min-h-[300px]"
//                value={value}
//                onChange={setValue}
//                readOnly={0 < progress && progress < 100}
//              />
//              {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
//            </div>
//          </div>
//
//          <button
//            type="submit"
//            disabled={mutation.isPending || (0 < progress && progress < 100)}
//            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-max"
//          >
//            {mutation.isPending ? "Submitting..." : "Publish Post"}
//          </button>
//
//          {progress > 0 && progress < 100 && (
//            <p className="text-sm text-gray-500">Upload Progress: {progress}%</p>
//          )}
//        </form>
//      </div>
//    </div>
//  );
//};
//
//export default Write;



//import { useAuth, useUser } from "@clerk/clerk-react";
//import 'react-quill/dist/quill.snow.css';
//
//import ReactQuill from "react-quill-new";
//import { useMutation } from "@tanstack/react-query";
//import axios from "axios";
//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
//import Upload from "../components/Upload"; // Assuming this component exists
//
//const Write = () => {
//  const { isLoaded, isSignedIn } = useUser();
//  const [value, setValue] = useState("");
//  const [cover, setCover] = useState(""); // Stores the cover image data (from upload or AI)
//  const [img, setImg] = useState(""); // For inline image uploads in the rich text editor
//  const [video, setVideo] = useState(""); // For inline video uploads in the rich text editor
//  const [progress, setProgress] = useState(0); // Progress for file uploads
//
//  const [aiImagePrompt, setAiImagePrompt] = useState(""); // State for AI image generation prompt
//  const [generatedImageUrl, setGeneratedImageUrl] = useState(""); // Stores the URL of the AI-generated image
//  const [isGeneratingImage, setIsGeneratingImage] = useState(false); // Loading state for AI image generation
//
//  const [errors, setErrors] = useState({});
//
//  const navigate = useNavigate();
//  const { getToken } = useAuth();
//
//  // Effect to insert uploaded image into ReactQuill content
//  useEffect(() => {
//    img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
//  }, [img]);
//
//  // Effect to insert uploaded video into ReactQuill content
//  useEffect(() => {
//    video &&
//      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
//  }, [video]);
//
//  // Mutation for creating a new post
//  const mutation = useMutation({
//    mutationFn: async (newPost) => {
//      const token = await getToken();
//      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      });
//    },
//    onSuccess: (res) => {
//      toast.success("Post has been created");
//      navigate(`/${res.data.slug}`);
//    },
//    onError: (error) => {
//      console.error("Post creation failed:", error);
//      toast.error("Failed to create post. Please try again.");
//    }
//  });
//
//  // Handle AI image generation
//  const handleGenerateImage = async () => {
//    if (!aiImagePrompt.trim()) {
//      toast.error("Please enter a prompt for AI image generation.");
//      return;
//    }
//    setIsGeneratingImage(true);
//    setGeneratedImageUrl(""); // Clear previous image
//
//    try {
//      const payload = { instances: { prompt: aiImagePrompt }, parameters: { "sampleCount": 1 } };
//      // __app_id and __api_key are automatically provided by the Canvas environment
//      // for making calls to Google models.
//      const apiKey = "AIzaSyAKzKBY1Kh0yQZ1H7jMspoSY_W4e_b1ivc"; // Leave as empty string, Canvas will inject it.
//      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`;
//
//      const response = await fetch(apiUrl, {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(payload)
//      });
//
//      const result = await response.json();
//
//      if (result.predictions && result.predictions.length > 0 && result.predictions[0].bytesBase64Encoded) {
//        const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
//        setGeneratedImageUrl(imageUrl);
//        toast.success("Image generated successfully!");
//      } else {
//        toast.error("Failed to generate image. Please try a different prompt.");
//        console.error("Image generation failed:", result);
//      }
//    } catch (error) {
//      console.error("Error generating image:", error);
//      toast.error("An error occurred during image generation.");
//    } finally {
//      setIsGeneratingImage(false);
//    }
//  };
//
//  // Set the AI-generated image as the post cover
//  const handleUseGeneratedImageAsCover = () => {
//    if (generatedImageUrl) {
//      setCover({ filePath: generatedImageUrl });
//      toast.info("AI-generated image set as cover.");
//    }
//  };
//
//  // Display loading or login message based on Clerk status
//  if (!isLoaded) return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading user data...</div>;
//  if (isLoaded && !isSignedIn) return <div className="flex justify-center items-center h-screen text-xl text-red-500">You must be logged in to create a post!</div>;
//
//  // Form validation logic
//  const validate = (data) => {
//    const newErrors = {};
//    if (!data.title?.trim()) newErrors.title = "Title is required";
//    if (!data.desc?.trim()) newErrors.desc = "Description is required";
//    if (!data.category) newErrors.category = "Category is required";
//    if (!data.content?.trim()) newErrors.content = "Content cannot be empty";
//    if (!data.img) newErrors.img = "Cover image is required. Upload one or generate with AI.";
//    return newErrors;
//  };
//
//  // Handle form submission
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const formData = new FormData(e.target);
//
//    const data = {
//      img: cover.filePath || "", // Use filePath from cover state
//      title: formData.get("title"),
//      category: formData.get("category"),
//      desc: formData.get("desc"),
//      content: value,
//    };
//
//    const formErrors = validate(data);
//    if (Object.keys(formErrors).length > 0) {
//      setErrors(formErrors);
//      // Scroll to the first error if needed, for better UX on long forms
//      const firstErrorElement = document.querySelector('.text-red-600');
//      if (firstErrorElement) {
//        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//      }
//      return;
//    }
//
//    setErrors({});
//    mutation.mutate(data);
//  };
//
//  return (
//    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
//      <div className="max-w-4xl mx-auto">
//        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Create a New Post</h1>
//        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-6">
//
//          {/* Cover Image Section */}
//          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//            <h2 className="text-xl font-semibold text-gray-700">Cover Image</h2>
//            <div className="flex flex-col md:flex-row gap-4">
//              {/* Upload Cover Image */}
//              <div className="flex-1">
//                <label className="block text-gray-700 text-sm font-medium mb-2">Upload your own:</label>
//                <Upload type="image" setProgress={setProgress} setData={setCover}>
//                  <button type="button" className="w-max bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-sm transition duration-200">
//                    Choose Local Cover Image
//                  </button>
//                </Upload>
//                {cover.filePath && !cover.filePath.startsWith('data:image') && (
//                  <p className="text-sm text-gray-500 mt-2">Selected: {cover.filePath.split('/').pop()}</p>
//                )}
//                {errors.img && <p className="text-red-600 text-sm mt-1">{errors.img}</p>}
//              </div>
//
//              {/* AI Image Generation */}
//              <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-4">
//                <label htmlFor="aiImagePrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate with AI:</label>
//                <input
//                  id="aiImagePrompt"
//                  type="text"
//                  placeholder="e.g., A futuristic city at sunset"
//                  value={aiImagePrompt}
//                  onChange={(e) => setAiImagePrompt(e.target.value)}
//                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
//                  disabled={isGeneratingImage}
//                />
//                <button
//                  type="button"
//                  onClick={handleGenerateImage}
//                  disabled={isGeneratingImage || !aiImagePrompt.trim()}
//                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//                >
//                  {isGeneratingImage ? "Generating..." : "Generate AI Image"}
//                </button>
//                {isGeneratingImage && <p className="text-sm text-gray-500 mt-2">Please wait, generating image...</p>}
//
//                {generatedImageUrl && (
//                  <div className="mt-4 flex flex-col items-center">
//                    <img src={generatedImageUrl} alt="AI Generated Cover" className="max-w-full h-auto rounded-lg shadow-md border border-gray-200 object-cover max-h-48" />
//                    <button
//                      type="button"
//                      onClick={handleUseGeneratedImageAsCover}
//                      className="mt-3 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-sm"
//                    >
//                      Use This Image as Cover
//                    </button>
//                  </div>
//                )}
//                {cover.filePath && cover.filePath.startsWith('data:image') && (
//                  <p className="text-sm text-blue-600 mt-2">AI-generated image is currently set as cover.</p>
//                )}
//              </div>
//            </div>
//            {errors.img && <p className="text-red-600 text-sm mt-1">{errors.img}</p>}
//          </div>
//
//
//          {/* Title Input */}
//          <div className="flex flex-col">
//            <label htmlFor="title" className="text-gray-700 font-medium text-lg mb-2">Post Title:</label>
//            <input
//              id="title"
//              className="text-3xl md:text-4xl font-bold bg-transparent outline-none border-b border-gray-300 pb-2 focus:border-blue-500 transition duration-200 placeholder-gray-400"
//              type="text"
//              placeholder="My Awesome Story"
//              name="title"
//            />
//            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
//          </div>
//
//          {/* Category Select */}
//          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
//            <label htmlFor="category" className="text-gray-700 font-medium text-lg">Choose a category:</label>
//            <select
//              name="category"
//              id="category"
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//            >
//              <option value="">-- Select --</option>
//              <option value="general">General</option>
//              <option value="web-design">Web Design</option>
//              <option value="development">Development</option>
//              <option value="databases">Databases</option>
//              <option value="seo">Search Engines</option>
//              <option value="marketing">Marketing</option>
//            </select>
//            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
//          </div>
//
//          {/* Description Textarea */}
//          <div className="flex flex-col">
//            <label htmlFor="desc" className="text-gray-700 font-medium text-lg mb-2">Short Description:</label>
//            <textarea
//              id="desc"
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 min-h-[100px]"
//              name="desc"
//              placeholder="A Short Description"
//            />
//            {errors.desc && <p className="text-red-600 text-sm mt-1">{errors.desc}</p>}
//          </div>
//
//          {/* Rich Text Editor and Inline Uploads */}
//          <div className="flex flex-col md:flex-row flex-1 gap-4">
//            <div className="flex md:flex-col gap-2 p-2 bg-white rounded-lg shadow-sm h-min">
//              <label className="text-gray-700 text-sm font-medium mb-1 hidden md:block">Add Media:</label>
//              <Upload type="image" setProgress={setProgress} setData={setImg}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Image">
//                  🌆
//                </button>
//              </Upload>
//              <Upload type="video" setProgress={setProgress} setData={setVideo}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Video">
//                  ▶️
//                </button>
//              </Upload>
//            </div>
//            <div className="flex-1 flex flex-col">
//              <label htmlFor="content" className="text-gray-700 font-medium text-lg mb-2 sr-only">Post Content:</label> {/* SR only for screen readers */}
//              <ReactQuill
//                theme="snow"
//                className="flex-1 rounded-lg bg-white shadow-sm min-h-[300px]"
//                value={value}
//                onChange={setValue}
//                readOnly={0 < progress && progress < 100 || isGeneratingImage} // Disable if file upload or AI gen is active
//                placeholder="Start writing your amazing story here..."
//              />
//              {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
//            </div>
//          </div>
//
//          {/* Submit Button */}
//          <button
//            type="submit"
//            disabled={mutation.isPending || (0 < progress && progress < 100) || isGeneratingImage}
//            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-max self-end mt-4"
//          >
//            {mutation.isPending ? "Submitting..." : "Publish Post"}
//          </button>
//
//          {/* Upload Progress Indicator */}
//          {progress > 0 && progress < 100 && (
//            <p className="text-sm text-gray-500 text-center">Upload Progress: {progress}%</p>
//          )}
//        </form>
//      </div>
//    </div>
//  );
//};
//
//export default Write;
//

/********************************************** */

//import { useAuth, useUser } from "@clerk/clerk-react";
//import 'react-quill/dist/quill.snow.css';
//
//import ReactQuill from "react-quill-new";
//import { useMutation } from "@tanstack/react-query";
//import axios from "axios";
//import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
//import Upload from "../components/Upload"; // Assuming this component exists
//
//const Write = () => {
//  const { isLoaded, isSignedIn } = useUser();
//  const [value, setValue] = useState(""); // Stores the ReactQuill content
//  const [cover, setCover] = useState(""); // Stores the cover image data (from upload)
//  const [img, setImg] = useState(""); // For inline image uploads in the rich text editor
//  const [video, setVideo] = useState(""); // For inline video uploads in the rich text editor
//  const [progress, setProgress] = useState(0); // Progress for file uploads
//
//  // States for AI text generation
//  const [aiTitlePrompt, setAiTitlePrompt] = useState("");
//  const [generatedTitle, setGeneratedTitle] = useState("");
//  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);
//
//  const [aiDescPrompt, setAiDescPrompt] = useState("");
//  const [generatedDesc, setGeneratedDesc] = useState("");
//  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
//
//  const [aiContentPrompt, setAiContentPrompt] = useState("");
//  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
//
//  const [errors, setErrors] = useState({});
//
//  const navigate = useNavigate();
//  const { getToken } = useAuth();
//
//  // Effect to insert uploaded image into ReactQuill content
//  useEffect(() => {
//    img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
//  }, [img]);
//
//  // Effect to insert uploaded video into ReactQuill content
//  useEffect(() => {
//    video &&
//      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
//  }, [video]);
//
//  // Mutation for creating a new post
//  const mutation = useMutation({
//    mutationFn: async (newPost) => {
//      const token = await getToken();
//      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
//        headers: {
//          Authorization: `Bearer ${token}`,
//        },
//      });
//    },
//    onSuccess: (res) => {
//      toast.success("Post has been created");
//      navigate(`/${res.data.slug}`);
//    },
//    onError: (error) => {
//      console.error("Post creation failed:", error);
//      toast.error("Failed to create post. Please try again.");
//    }
//  });
//
//  // Generic function for AI text generation
//  const handleGenerateText = async (prompt, setGeneratedState, setIsLoadingState, type) => {
//    if (!prompt.trim()) {
//      toast.error(`Please enter a prompt for AI ${type} generation.`);
//      return;
//    }
//    setIsLoadingState(true);
//    setGeneratedState(""); // Clear previous generated text
//
//    try {
//      const chatHistory = [];
//      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
//      const payload = { contents: chatHistory };
//      const apiKey = ""; // Leave as empty string, Canvas will inject it automatically.
//      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
//
//      const response = await fetch(apiUrl, {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify(payload)
//      });
//
//      const result = await response.json();
//
//      if (result.candidates && result.candidates.length > 0 &&
//          result.candidates[0].content && result.candidates[0].content.parts &&
//          result.candidates[0].content.parts.length > 0) {
//        const text = result.candidates[0].content.parts[0].text;
//        setGeneratedState(text);
//        toast.success(`${type} generated successfully!`);
//      } else {
//        toast.error(`Failed to generate ${type}. Please try a different prompt.`);
//        console.error(`${type} generation failed. Full API response:`, result); // More detailed error log
//      }
//    } catch (error) {
//      console.error(`Error generating ${type}:`, error);
//      toast.error(`An error occurred during ${type} generation.`);
//    } finally {
//      setIsLoadingState(false);
//    }
//  };
//
//  // Display loading or login message based on Clerk status
//  if (!isLoaded) return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading user data...</div>;
//  if (isLoaded && !isSignedIn) return <div className="flex justify-center items-center h-screen text-xl text-red-500">You must be logged in to create a post!</div>;
//
//  // Form validation logic
//  const validate = (data) => {
//    const newErrors = {};
//    if (!data.title?.trim()) newErrors.title = "Title is required";
//    if (!data.desc?.trim()) newErrors.desc = "Description is required";
//    if (!data.category) newErrors.category = "Category is required";
//    if (!data.content?.trim()) newErrors.content = "Content cannot be empty";
//    if (!data.img) newErrors.img = "Cover image is required.";
//    return newErrors;
//  };
//
//  // Handle form submission
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    const formInputs = new FormData(e.target);
//
//    const data = {
//      img: cover.filePath || "", // Use filePath from cover state
//      title: generatedTitle, // Directly use the controlled state
//      category: formInputs.get("category"),
//      desc: generatedDesc, // Directly use the controlled state
//      content: value || "", // ReactQuill's value is the content, ensure it's not empty string
//    };
//
//    const formErrors = validate(data);
//    if (Object.keys(formErrors).length > 0) {
//      setErrors(formErrors);
//      const firstErrorElement = document.querySelector('.text-red-600');
//      if (firstErrorElement) {
//        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//      }
//      return;
//    }
//
//    setErrors({});
//    mutation.mutate(data);
//  };
//
//  const isAnyGenerationActive = isGeneratingTitle || isGeneratingDesc || isGeneratingContent;
//
//  return (
//    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
//      <div className="max-w-4xl mx-auto">
//        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Create a New Post</h1>
//        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-6">
//
//          {/* Cover Image Section - Only local upload now */}
//          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//            <h2 className="text-xl font-semibold text-gray-700">Cover Image</h2>
//            <div className="flex-1">
//              <label className="block text-gray-700 text-sm font-medium mb-2">Upload your own:</label>
//              <Upload type="image" setProgress={setProgress} setData={setCover}>
//                <button type="button" className="w-max bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-sm transition duration-200" disabled={isAnyGenerationActive}>
//                  Choose Local Cover Image
//                </button>
//              </Upload>
//              {cover.filePath && (
//                <p className="text-sm text-gray-500 mt-2">Selected: {cover.filePath.split('/').pop()}</p>
//              )}
//              {errors.img && <p className="text-red-600 text-sm mt-1">{errors.img}</p>}
//            </div>
//          </div>
//
//          {/* Title Input */}
//          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//            <h2 className="text-xl font-semibold text-gray-700">Post Title</h2>
//            <label htmlFor="title" className="text-gray-700 font-medium text-lg mb-2 sr-only">Post Title:</label>
//            <input
//              id="title"
//              className="text-3xl md:text-4xl font-bold bg-transparent outline-none border-b border-gray-300 pb-2 focus:border-blue-500 transition duration-200 placeholder-gray-400"
//              type="text"
//              placeholder="My Awesome Story"
//              name="title"
//              value={generatedTitle}
//              onChange={(e) => setGeneratedTitle(e.target.value)}
//              disabled={isAnyGenerationActive}
//            />
//            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
//
//            <div className="flex flex-col mt-2">
//              <label htmlFor="aiTitlePrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Title with AI:</label>
//              <input
//                id="aiTitlePrompt"
//                type="text"
//                placeholder="e.g., A catchy headline about web development"
//                value={aiTitlePrompt}
//                onChange={(e) => setAiTitlePrompt(e.target.value)}
//                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
//                disabled={isAnyGenerationActive}
//              />
//              <button
//                type="button"
//                onClick={() => handleGenerateText(aiTitlePrompt, setGeneratedTitle, setIsGeneratingTitle, "title")}
//                disabled={isGeneratingTitle || !aiTitlePrompt.trim() || isAnyGenerationActive}
//                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//              >
//                {isGeneratingTitle ? "Generating..." : "Generate Title"}
//              </button>
//              {isGeneratingTitle && <p className="text-sm text-gray-500 mt-2">Please wait, generating title...</p>}
//            </div>
//          </div>
//
//          {/* Category Select */}
//          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
//            <label htmlFor="category" className="text-gray-700 font-medium text-lg">Choose a category:</label>
//            <select
//              name="category"
//              id="category"
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//              disabled={isAnyGenerationActive}
//            >
//              <option value="">-- Select --</option>
//              <option value="general">General</option>
//              <option value="web-design">Web Design</option>
//              <option value="development">Development</option>
//              <option value="databases">Databases</option>
//              <option value="seo">Search Engines</option>
//              <option value="marketing">Marketing</option>
//            </select>
//            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
//          </div>
//
//          {/* Description Textarea */}
//          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//            <h2 className="text-xl font-semibold text-gray-700">Short Description</h2>
//            <label htmlFor="desc" className="text-gray-700 font-medium text-lg mb-2 sr-only">Short Description:</label>
//            <textarea
//              id="desc"
//              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 min-h-[100px]"
//              name="desc"
//              placeholder="A Short Description"
//              value={generatedDesc}
//              onChange={(e) => setGeneratedDesc(e.target.value)}
//              disabled={isAnyGenerationActive}
//            />
//            {errors.desc && <p className="text-red-600 text-sm mt-1">{errors.desc}</p>}
//
//            <div className="flex flex-col mt-2">
//              <label htmlFor="aiDescPrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Description with AI:</label>
//              <input
//                id="aiDescPrompt"
//                type="text"
//                placeholder="e.g., A brief summary of the post"
//                value={aiDescPrompt}
//                onChange={(e) => setAiDescPrompt(e.target.value)}
//                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
//                disabled={isAnyGenerationActive}
//              />
//              <button
//                type="button"
//                onClick={() => handleGenerateText(aiDescPrompt, setGeneratedDesc, setIsGeneratingDesc, "description")}
//                disabled={isGeneratingDesc || !aiDescPrompt.trim() || isAnyGenerationActive}
//                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//              >
//                {isGeneratingDesc ? "Generating..." : "Generate Description"}
//              </button>
//              {isGeneratingDesc && <p className="text-sm text-gray-500 mt-2">Please wait, generating description...</p>}
//            </div>
//          </div>
//
//
//          {/* Rich Text Editor and Inline Uploads */}
//          <div className="flex flex-col md:flex-row flex-1 gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
//            <div className="flex md:flex-col gap-2 p-2 bg-white rounded-lg shadow-sm h-min">
//              <label className="text-gray-700 text-sm font-medium mb-1 hidden md:block">Add Media:</label>
//              <Upload type="image" setProgress={setProgress} setData={setImg}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Image" disabled={isAnyGenerationActive}>
//                  🌆
//                </button>
//              </Upload>
//              <Upload type="video" setProgress={setProgress} setData={setVideo}>
//                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Video" disabled={isAnyGenerationActive}>
//                  ▶️
//                </button>
//              </Upload>
//            </div>
//            <div className="flex-1 flex flex-col">
//              <label htmlFor="content" className="text-gray-700 font-medium text-lg mb-2 sr-only">Post Content:</label> {/* SR only for screen readers */}
//              <ReactQuill
//                theme="snow"
//                className="flex-1 rounded-lg bg-white shadow-sm min-h-[300px]"
//                value={value}
//                onChange={setValue}
//                readOnly={0 < progress && progress < 100 || isAnyGenerationActive} // Disable if any generation is active
//                placeholder="Start writing your amazing story here..."
//              />
//              {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
//
//              <div className="flex flex-col mt-4">
//                <label htmlFor="aiContentPrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Content with AI:</label>
//                <input
//                  id="aiContentPrompt"
//                  type="text"
//                  placeholder="e.g., Write an article about the benefits of React hooks"
//                  value={aiContentPrompt}
//                  onChange={(e) => setAiContentPrompt(e.target.value)}
//                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
//                  disabled={isAnyGenerationActive}
//                />
//                <button
//                  type="button"
//                  onClick={() => handleGenerateText(aiContentPrompt, setValue, setIsGeneratingContent, "content")}
//                  disabled={isGeneratingContent || !aiContentPrompt.trim() || isAnyGenerationActive}
//                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
//                >
//                  {isGeneratingContent ? "Generating..." : "Generate Content"}
//                </button>
//                {isGeneratingContent && <p className="text-sm text-gray-500 mt-2">Please wait, generating content...</p>}
//              </div>
//            </div>
//          </div>
//
//          {/* Submit Button */}
//          <button
//            type="submit"
//            disabled={mutation.isPending || (0 < progress && progress < 100) || isAnyGenerationActive}
//            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-max self-end mt-4"
//          >
//            {mutation.isPending ? "Submitting..." : "Publish Post"}
//          </button>
//
//          {/* Upload Progress Indicator */}
//          {progress > 0 && progress < 100 && (
//            <p className="text-sm text-gray-500 text-center">Upload Progress: {progress}%</p>
//          )}
//        </form>
//      </div>
//    </div>
//  );
//};
//
//export default Write;
//
//***** */


import { useAuth, useUser } from "@clerk/clerk-react";
import 'react-quill/dist/quill.snow.css';

import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload"; // Assuming this component exists

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState(""); // Stores the ReactQuill content
  const [cover, setCover] = useState(""); // Stores the cover image data (from upload)
  const [img, setImg] = useState(""); // For inline image uploads in the rich text editor
  const [video, setVideo] = useState(""); // For inline video uploads in the rich text editor
  const [progress, setProgress] = useState(0); // Progress for file uploads

  // States for AI text generation
  const [aiTitlePrompt, setAiTitlePrompt] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [isGeneratingTitle, setIsGeneratingTitle] = useState(false);

  const [aiDescPrompt, setAiDescPrompt] = useState("");
  const [generatedDesc, setGeneratedDesc] = useState("");
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);

  const [aiContentPrompt, setAiContentPrompt] = useState("");
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { getToken } = useAuth();

  // Effect to insert uploaded image into ReactQuill content
  useEffect(() => {
    img && setValue((prev) => prev + `<p><img src="${img.url}" /></p>`);
  }, [img]);

  // Effect to insert uploaded video into ReactQuill content
  useEffect(() => {
    video &&
      setValue((prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`);
  }, [video]);

  // Mutation for creating a new post
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
    onError: (error) => {
      console.error("Post creation failed:", error);
      toast.error("Failed to create post. Please try again.");
    }
  });

  // Generic function for AI text generation
  const handleGenerateText = async (prompt, setGeneratedState, setIsLoadingState, type) => {
    if (!prompt.trim()) {
      toast.error(`Please enter a prompt for AI ${type} generation.`);
      return;
    }
    setIsLoadingState(true);
    setGeneratedState(""); // Clear previous generated text

    try {
      const chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyAKzKBY1Kh0yQZ1H7jMspoSY_W4e_b1ivc"; // Leave as empty string, Canvas will inject it automatically.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedState(text);
        toast.success(`${type} generated successfully!`);
      } else {
        toast.error(`Failed to generate ${type}. Please try a different prompt.`);
        console.error(`${type} generation failed. Full API response:`, result); // More detailed error log
      }
    } catch (error) {
      console.error(`Error generating ${type}:`, error);
      toast.error(`An error occurred during ${type} generation.`);
    } finally {
      setIsLoadingState(false);
    }
  };

  // Display loading or login message based on Clerk status
  if (!isLoaded) return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading user data...</div>;
  if (isLoaded && !isSignedIn) return <div className="flex justify-center items-center h-screen text-xl text-red-500">You must be logged in to create a post!</div>;

  // Form validation logic
  const validate = (data) => {
    const newErrors = {};
    if (!data.title?.trim()) newErrors.title = "Title is required";
    if (!data.desc?.trim()) newErrors.desc = "Description is required";
    if (!data.category) newErrors.category = "Category is required";
    if (!data.content?.trim()) newErrors.content = "Content cannot be empty";
    if (!data.img) newErrors.img = "Cover image is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formInputs = new FormData(e.target);

    const data = {
      img: cover.filePath || "", // Use filePath from cover state
      title: generatedTitle, // Directly use the controlled state
      category: formInputs.get("category"),
      desc: generatedDesc, // Directly use the controlled state
      content: value || "", // ReactQuill's value is the content, ensure it's not empty string
    };

    const formErrors = validate(data);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      const firstErrorElement = document.querySelector('.text-red-600');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    mutation.mutate(data);
  };

  const isAnyGenerationActive = isGeneratingTitle || isGeneratingDesc || isGeneratingContent;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">Create a New Post</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 mb-6">

          {/* Cover Image Section - Only local upload now */}
          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">Cover Image</h2>
            <div className="flex-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">Upload your own:</label>
              <Upload type="image" setProgress={setProgress} setData={setCover}>
                <button type="button" className="w-max bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg shadow-sm transition duration-200" disabled={isAnyGenerationActive}>
                  Choose Local Cover Image
                </button>
              </Upload>
              {cover.filePath && (
                <p className="text-sm text-gray-500 mt-2">Selected: {cover.filePath.split('/').pop()}</p>
              )}
              {errors.img && <p className="text-red-600 text-sm mt-1">{errors.img}</p>}
            </div>
          </div>

          {/* Title Input */}
          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">Post Title</h2>
            <label htmlFor="title" className="text-gray-700 font-medium text-lg mb-2 sr-only">Post Title:</label>
            <input
              id="title"
              className="text-3xl md:text-4xl font-bold bg-transparent outline-none border-b border-gray-300 pb-2 focus:border-blue-500 transition duration-200 placeholder-gray-400"
              type="text"
              placeholder="My Awesome Story"
              name="title"
              value={generatedTitle}
              onChange={(e) => setGeneratedTitle(e.target.value)}
              disabled={isAnyGenerationActive}
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}

            <div className="flex flex-col mt-2">
              <label htmlFor="aiTitlePrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Title with AI:</label>
              <input
                id="aiTitlePrompt"
                type="text"
                placeholder="Generate Title with AI only 1 line short"
                value={aiTitlePrompt}
                onChange={(e) => setAiTitlePrompt(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
                disabled={isAnyGenerationActive}
              />
              <button
                type="button"
                onClick={() => handleGenerateText(aiTitlePrompt, setGeneratedTitle, setIsGeneratingTitle, "title")}
                disabled={isGeneratingTitle || !aiTitlePrompt.trim() || isAnyGenerationActive}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isGeneratingTitle ? "Generating..." : "Generate Title"}
              </button>
              {isGeneratingTitle && <p className="text-sm text-gray-500 mt-2">Please wait, generating title...</p>}
            </div>
          </div>

          {/* Category Select */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <label htmlFor="category" className="text-gray-700 font-medium text-lg">Choose a category:</label>
            <select
              name="category"
              id="category"
              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              disabled={isAnyGenerationActive}
            >
              <option value="">-- Select --</option>
              <option value="general">General</option>
              <option value="web-design">Web Design</option>
              <option value="development">Development</option>
              <option value="databases">Databases</option>
              <option value="seo">Search Engines</option>
              <option value="marketing">Marketing</option>
            </select>
            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Description Textarea */}
          <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700">Short Description</h2>
            <label htmlFor="desc" className="text-gray-700 font-medium text-lg mb-2 sr-only">Short Description:</label>
            <textarea
              id="desc"
              className="p-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 min-h-[100px]"
              name="desc"
              placeholder="A Short Description"
              value={generatedDesc}
              onChange={(e) => setGeneratedDesc(e.target.value)}
              disabled={isAnyGenerationActive}
            />
            {errors.desc && <p className="text-red-600 text-sm mt-1">{errors.desc}</p>}

            <div className="flex flex-col mt-2">
              <label htmlFor="aiDescPrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Description with AI:</label>
              <input
                id="aiDescPrompt"
                type="text"
                placeholder="Generate short Description with AI 2 line"
                value={aiDescPrompt}
                onChange={(e) => setAiDescPrompt(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
                disabled={isAnyGenerationActive}
              />
              <button
                type="button"
                onClick={() => handleGenerateText(aiDescPrompt, setGeneratedDesc, setIsGeneratingDesc, "description")}
                disabled={isGeneratingDesc || !aiDescPrompt.trim() || isAnyGenerationActive}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isGeneratingDesc ? "Generating..." : "Generate Description"}
              </button>
              {isGeneratingDesc && <p className="text-sm text-gray-500 mt-2">Please wait, generating description...</p>}
            </div>
          </div>


          {/* Rich Text Editor and Inline Uploads */}
          <div className="flex flex-col md:flex-row flex-1 gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex md:flex-col gap-2 p-2 bg-white rounded-lg shadow-sm h-min">
              <label className="text-gray-700 text-sm font-medium mb-1 hidden md:block">Add Media:</label>
              <Upload type="image" setProgress={setProgress} setData={setImg}>
                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Image" disabled={isAnyGenerationActive}>
                  🌆
                </button>
              </Upload>
              <Upload type="video" setProgress={setProgress} setData={setVideo}>
                <button type="button" className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg text-2xl cursor-pointer transition duration-200 shadow-sm" title="Insert Video" disabled={isAnyGenerationActive}>
                  ▶️
                </button>
              </Upload>
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="content" className="text-gray-700 font-medium text-lg mb-2 sr-only">Post Content:</label> {/* SR only for screen readers */}
              <ReactQuill
                theme="snow"
                className="flex-1 rounded-lg bg-white shadow-sm min-h-[300px]"
                value={value}
                onChange={setValue}
                readOnly={0 < progress && progress < 100 || isAnyGenerationActive} // Disable if any generation is active
                placeholder="Start writing your amazing story here..."
              />
              {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}

              <div className="flex flex-col mt-4">
                <label htmlFor="aiContentPrompt" className="block text-gray-700 text-sm font-medium mb-2">Generate Content with AI:</label>
                <input
                  id="aiContentPrompt"
                  type="text"
                  placeholder="e.g., Write an article about the benefits of React hooks"
                  value={aiContentPrompt}
                  onChange={(e) => setAiContentPrompt(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mb-2 text-sm"
                  disabled={isAnyGenerationActive}
                />
                <button
                  type="button"
                  onClick={() => handleGenerateText(aiContentPrompt, setValue, setIsGeneratingContent, "content")}
                  disabled={isGeneratingContent || !aiContentPrompt.trim() || isAnyGenerationActive}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isGeneratingContent ? "Generating..." : "Generate Content"}
                </button>
                {isGeneratingContent && <p className="text-sm text-gray-500 mt-2">Please wait, generating content...</p>}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={mutation.isPending || (0 < progress && progress < 100) || isAnyGenerationActive}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md w-max self-end mt-4"
          >
            {mutation.isPending ? "Submitting..." : "Publish Post"}
          </button>

          {/* Upload Progress Indicator */}
          {progress > 0 && progress < 100 && (
            <p className="text-sm text-gray-500 text-center">Upload Progress: {progress}%</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Write;
