import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import ScrollFadeIn from '../components/ScrollFadeIn';

const BlogList = () => (
  <ScrollFadeIn>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl font-bold text-yellow-600 mb-10 text-center">Devbee Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-200 group"
              >
                Learn More
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' /></svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </ScrollFadeIn>
);

export default BlogList;
