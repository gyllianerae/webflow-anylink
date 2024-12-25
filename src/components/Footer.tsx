import React from 'react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Link href="/" className="block">
            <img 
              src="/images/logo-links-webflow-template.svg" 
              alt="Links X Webflow Template - Logo"
              className="h-8"
            />
          </Link>
          <div className="flex justify-end">
            <Link 
              href="https://webflow.com/templates/html/links-x-app-website-template"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Buy template
            </Link>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>
            Copyright © Links X | Designed by{' '}
            <Link href="https://brixtemplates.com/" target="_blank">BRIX Templates</Link>
            {' '}- Powered by{' '}
            <Link href="https://webflow.com/" target="_blank">Webflow</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}