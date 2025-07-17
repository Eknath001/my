import React, { useState } from "react";
import teamMembers from "../data/team.json";

const About = () => {
  // State for the generated quote and its loading status
  const [generatedQuote, setGeneratedQuote] = useState("");
  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false);
  const [quoteError, setQuoteError] = useState("");

  // State for the expanded story and its loading status
  const [expandedStory, setExpandedStory] = useState("");
  const [isExpandingStory, setIsExpandingStory] = useState(false);
  const [storyError, setStoryError] = useState("");

  // Original core narrative text for expansion
  const originalNarrative = `
  ✨ Welcome to Our The StoryNest
We built this platform as a vibrant, inclusive space where curious minds, passionate writers, and thoughtful readers come together. Here, stories aren’t just told — they spark conversations, inspire action, and foster genuine connection.

At the core of our vision lies a simple but powerful belief:
Shared narratives, practical knowledge, and creative expression have the power to shape a more connected and empowered community.

Whether you're a seasoned blogger, a first-time writer, or a reader with a thirst for fresh perspectives, this space is designed with you in mind — intuitive, accessible, and alive with opportunity.

Our mission is to empower every voice — to give you the freedom, tools, and support you need to express yourself authentically and confidently. Through our easy-to-use publishing tools and vibrant community features, we invite you to share your insights, stories, and ideas in ways that matter.

We’re honored to have you here.

Your presence, your voice, and your vision are what make this community extraordinary.

Let’s create something remarkable — together.
  `;

  /**
   * Calls the Gemini API to generate an inspiring quote.
   */
  const generateNewQuote = async () => {
    setIsGeneratingQuote(true);
    setGeneratedQuote("");
    setQuoteError("");

    try {
      const prompt =
        "Generate a short, inspiring quote about the power of words, community, knowledge sharing, or blogging.";
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyAKzKBY1Kh0yQZ1H7jMspoSY_W4e_b1ivc"; // API key will be provided by the Canvas runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        setGeneratedQuote(result.candidates[0].content.parts[0].text);
      } else {
        setQuoteError("Failed to generate quote. Please try again.");
        console.error("Gemini API response format unexpected:", result);
      }
    } catch (error) {
      setQuoteError("Error connecting to the API. Please check your network.");
      console.error("Error generating quote:", error);
    } finally {
      setIsGeneratingQuote(false);
    }
  };

  /**
   * Calls the Gemini API to expand the core narrative text.
   */
  const expandOurStory = async () => {
    setIsExpandingStory(true);
    setExpandedStory("");
    setStoryError("");

    try {
      const prompt = `Expand the following text into a more detailed and engaging 'About Us' section for a blog, focusing on passion, community growth, and future aspirations. Make it sound professional and inviting, approximately 200-300 words:\n\n"${originalNarrative}"`;
      const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyAKzKBY1Kh0yQZ1H7jMspoSY_W4e_b1ivc"; // API key will be provided by the Canvas runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        setExpandedStory(result.candidates[0].content.parts[0].text);
      } else {
        setStoryError("Failed to expand story. Please try again.");
        console.error("Gemini API response format unexpected:", result);
      }
    } catch (error) {
      setStoryError("Error connecting to the API. Please check your network.");
      console.error("Error expanding story:", error);
    } finally {
      setIsExpandingStory(false);
    }
  };

  return (
    // Main container with full height, responsive padding, and subtle background/text colors for light/dark mode
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-0 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-950 text-gray-800 dark:text-gray-200 font-inter">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
            Our Journey, Our Purpose
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-down animation-delay-300">
            Fostering connection, inspiring creativity, and sharing knowledge
            through meaningful conversations.
          </p>
        </div>

        {/* Core Narrative Section (Image + Text) */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-850 p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/30 dark:hover:shadow-teal-500/30 animate-fade-in-up">
          <img
            src="/About-blog.avif" // Placeholder if original path fails
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x600/6A0DAD/ffffff?text=Image+Not+Found";
            }}
            alt="An illustration depicting collaboration and knowledge sharing in a blog environment"
            className="w-full h-80 object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
          <div className="space-y-7">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Welcome to our{" "}
              <span className="font-semibold text-purple-700 dark:text-purple-400">
                The StoryNestr
              </span>
              ! We envisioned and brought this platform to life as a dynamic
              space for **curious minds, passionate writers, and insightful
              readers** to converge. Here, we believe in the power of shared
              narratives, comprehensive tutorials, and groundbreaking creative
              insights to build a stronger community. Whether you're an
              established blogger or just starting your writing journey, or
              simply someone who delights in discovering new perspectives, this
              space is intuitively designed with your engagement in mind.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              At the heart of our mission is the commitment to **empower every
              individual** to express their unique voice authentically and
              without constraint. We provide a suite of user-friendly, robust
              tools that make it effortless to **compose, publish, and engage**
              in meaningful dialogues that resonate deeply within our vibrant
              community.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We are profoundly grateful for your decision to be an essential
              part of our thriving and continuously expanding community. Your
              contributions are what make this space truly special.
            </p>
            <button
              onClick={expandOurStory}
              disabled={isExpandingStory}
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExpandingStory ? "Expanding Story..." : "Expand Our Story ✨"}
            </button>
          </div>
        </div>

        {/* Expanded Story Section */}
        {expandedStory && (
          <div className="mt-12 p-8 bg-white dark:bg-gray-850 rounded-3xl shadow-xl animate-fade-in-up animation-delay-800">
            <h3 className="text-3xl font-bold mb-4 text-orange-700 dark:text-orange-400">
              An Expanded Narrative ✨
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {expandedStory}
            </p>
          </div>
        )}
        {storyError && (
          <div className="mt-4 p-4 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-lg text-center">
            {storyError}
          </div>
        )}

        {/* Our Values Section */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-400">
          <h2 className="text-4xl font-bold mb-8 text-blue-700 dark:text-blue-400">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4 text-purple-600 dark:text-purple-300">
                💡
              </div>{" "}
              {/* Lightbulb emoji */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly seeking new ways to connect and inspire.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4 text-teal-600 dark:text-teal-300">
                🤝
              </div>{" "}
              {/* Handshake emoji */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building a supportive and inclusive environment for all.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4 text-pink-600 dark:text-pink-300">
                ✍️
              </div>{" "}
              {/* Pen emoji */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Expression
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Empowering diverse voices to share their unique stories.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-600">
          <h2 className="text-4xl font-bold mb-8 text-green-700 dark:text-green-400">
            Meet Our Visionaries
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} Avatar`}
                  className={`w-32 h-32 rounded-full object-cover mb-4 ring-4 ${member.ringColor}`}
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {member.name}
                </h3>
                <p className={`text-lg mb-3 ${member.textColor}`}>
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Community Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-700">
          <h2 className="text-4xl font-bold mb-6 text-orange-700 dark:text-orange-400">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Become a part of our growing family of passionate readers and
            creative writers. Discover new stories, share your insights, and
            connect with like-minded individuals.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-pink-700">
            Explore Blog Posts
          </button>
        </div>

        {/* Concluding Quote */}
        <div className="mt-20 text-center animate-fade-in-up animation-delay-500">
          <blockquote className="text-3xl italic font-serif text-gray-600 dark:text-gray-400 max-w-3xl mx-auto relative px-8 py-4 bg-white dark:bg-gray-850 rounded-xl shadow-inner border border-gray-100 dark:border-gray-700">
            <span className="absolute left-0 top-0 text-7xl text-purple-400 dark:text-purple-600 opacity-20 transform -translate-x-4 -translate-y-4">
              “
            </span>
            "Words are the enduring echo of thought, shaping perceptions and
            igniting the human spirit."
            <span className="absolute right-0 bottom-0 text-7xl text-purple-400 dark:text-purple-600 opacity-20 transform translate-x-4 translate-y-4">
              ”
            </span>
          </blockquote>
          <p className="mt-4 text-lg font-medium text-gray-500 dark:text-gray-400">
            - The Blog App Team
          </p>
          <button
            onClick={generateNewQuote}
            disabled={isGeneratingQuote}
            className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingQuote ? "Generating..." : "Generate New Quote ✨"}
          </button>
          {generatedQuote && (
            <div className="mt-8 p-6 bg-purple-100 dark:bg-purple-900 rounded-xl shadow-md text-purple-800 dark:text-purple-200 italic max-w-xl mx-auto animate-fade-in-up">
              <p className="text-xl">"{generatedQuote}"</p>
            </div>
          )}
          {quoteError && (
            <div className="mt-4 p-4 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-lg text-center">
              {quoteError}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
