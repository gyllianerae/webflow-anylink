import React from 'react';
import { Link } from './Link';

interface HomeCardProps {
  title: string;
  image: string;
  href: string;
}

export function HomeCard({ title, image, href }: HomeCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={`${title} - Links X Webflow Template`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center text-blue-600">
            View page
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}