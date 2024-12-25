// import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HomeCard } from './components/HomeCard';
import { Footer } from './components/Footer';
import './components/webflow/css/link-e5d868.webflow.css';
import './components/webflow/css/normalize.css';
import './components/webflow/css/webflow.css';
import { useEffect } from 'react';

const homes = [
  {
    title: 'YouTuber',
    image: '/images/youtuber-links-x-webflow-template.png',
    href: '/homes/youtuber'
  },
  {
    title: 'Substack',
    image: '/images/substack-links-x-webflow-template.png',
    href: '/homes/substack'
  },
  {
    title: 'Instagram',
    image: '/images/instagram-links-x-webflow-template.png',
    href: '/homes/instagram'
  },
  {
    title: 'Portfolio',
    image: '/images/portfolio-links-webflow-template.png',
    href: '/homes/portfolio'
  },
  {
    title: 'Product Creator',
    image: '/images/product-creator-links-x-webflow-template.png',
    href: '/homes/product-creator'
  },
  {
    title: 'Podcast',
    image: '/images/podcast-links-x-webflow-template.png',
    href: '/homes/podcast'
  },
  {
    title: 'Blogger',
    image: '/images/blogger-links-x-webflow-template.png',
    href: '/homes/blogger'
  },
  {
    title: 'Product Maker',
    image: '/images/product-maker-links-x-webflow-template.jpg',
    href: '/homes/product-maker'
  },
  {
    title: 'Personal / CV',
    image: '/images/cv-links-x-webflow-template.png',
    href: '/homes/personal-cv'
  }
];

const blogs = [
  {
    title: 'Blog',
    image: '/images/blog-links-webflow-template.png',
    href: '/blog'
  },
  {
    title: 'Blog Post',
    image: '/images/blog-post-links-x-webflow-template.png',
    href: '/blog/app-store-optimization'
  }
];

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = './components/webflow/js/webflow.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Homes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homes.map((home) => (
              <HomeCard key={home.href} {...home} />
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 mt-16">Blog</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <HomeCard key={blog.href} {...blog} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="bg-red-600 rounded-2xl text-white p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Get the template</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Like what you see? Buy the Links X Webflow Template today on the Webflow 
                Marketplace and create your website as easy as 1, 2, 3.
              </p>
              <a 
                href="https://webflow.com/templates/html/links-x-app-website-template"
                className="bg-white text-red-600 px-8 py-3 rounded-lg inline-block hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy template
              </a>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-50" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;