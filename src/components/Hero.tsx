import React from 'react';
import { Link } from './Link';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Links X Webflow Template
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Presenting Links X, our Webflow Template for creators looking to have a simple, 
          yet premium and modern website. If you are looking to create a simple website 
          for you as a Blogger, Creator, or anything else, this is the template for you.
        </p>
        <Link 
          href="https://webflow.com/templates/html/links-x-app-website-template"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg inline-block hover:bg-blue-700 transition-colors"
        >
          Buy template
        </Link>
      </div>
      <div className="mt-12">
        <img 
          src="/images/top-hero-image-links-webflow-template.png"
          alt="Hero Image - Links X Webflow Template"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}