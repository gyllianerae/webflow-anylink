// import React from 'react';
// import { Header } from './components/Header';
// import { Hero } from './components/Hero';
// import { HomeCard } from './components/HomeCard';
// import { Footer } from './components/Footer';
import './components/webflow/css/normalize.css';
import './components/webflow/css/webflow.css';
import './components/webflow/css/link-e5d868.webflow.css';
import { useEffect } from 'react';

// const homes = [
//   {
//     title: 'YouTuber',
//     image: '/images/youtuber-links-x-webflow-template.png',
//     href: '/homes/youtuber'
//   },
//   {
//     title: 'Substack',
//     image: '/images/substack-links-x-webflow-template.png',
//     href: '/homes/substack'
//   },
//   {
//     title: 'Instagram',
//     image: '/images/instagram-links-x-webflow-template.png',
//     href: '/homes/instagram'
//   },
//   {
//     title: 'Portfolio',
//     image: '/images/portfolio-links-webflow-template.png',
//     href: '/homes/portfolio'
//   },
//   {
//     title: 'Product Creator',
//     image: '/images/product-creator-links-x-webflow-template.png',
//     href: '/homes/product-creator'
//   },
//   {
//     title: 'Podcast',
//     image: '/images/podcast-links-x-webflow-template.png',
//     href: '/homes/podcast'
//   },
//   {
//     title: 'Blogger',
//     image: '/images/blogger-links-x-webflow-template.png',
//     href: '/homes/blogger'
//   },
//   {
//     title: 'Product Maker',
//     image: '/images/product-maker-links-x-webflow-template.jpg',
//     href: '/homes/product-maker'
//   },
//   {
//     title: 'Personal / CV',
//     image: '/images/cv-links-x-webflow-template.png',
//     href: '/homes/personal-cv'
//   }
// ];

// const blogs = [
//   {
//     title: 'Blog',
//     image: '/images/blog-links-webflow-template.png',
//     href: '/blog'
//   },
//   {
//     title: 'Blog Post',
//     image: '/images/blog-post-links-x-webflow-template.png',
//     href: '/blog/app-store-optimization'
//   }
// ];

const divStyle = {
  WebkitTransform: "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  MozTransform: "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  MsTransform: "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  transform: "translate3d(0, 0, 0) scale3d(0.97, 0.97, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  // opacity: 0,
};

function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '../public/webflow.js';
  //   script.async = true;
  //   script.onload = () => {
  //     console.log('Webflow script loaded successfully');
  //   };
  //   script.onerror = (error) => {
  //     console.error('Error loading the Webflow script:', error);
  //   };
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script); // Clean up the script when the component is unmounted
  //   };
  // }, []);

  return (
    <div className="page-wrapper">
      <div data-collapse="small" data-animation="default" data-duration="400" data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner" className="header w-nav">
        <div className="container-default w-container">
          <div className="flex-growth">
            <a href="index.html" aria-current="page" className="brand w-nav-brand w--current">
              <img src="../src/components/webflow/images/logo-links-webflow-template.svg" alt="Links X Webflow Template - Logo" className="header-logo"/>
            </a>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <ul role="list" className="header-navigation">
              <li className="nav-item-wrapper">
                <a href="homes/youtuber.html" className="nav-link">Home</a>
              </li>
              <li className="nav-item-wrapper">
                <div data-hover="false" data-delay="0" data-w-id="804c873a-8a4b-f48d-c126-294de1c791f8" className="dropdown-container w-dropdown">
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="dropdown-text">Pages
                      <span className="dropdown-arrow"></span>
                    </div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <div className="w-layout-grid grid-dropdown">
                      <div>
                        <div className="dropdown-title">Homes</div>
                        <div className="flex dropdown">
                          <ul role="list" className="list-dropdown column-left">
                            <li className="list-item-dropdown">
                              <a href="homes/youtuber.html" className="nav-link dropdown">YouTuber</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/substack.html" className="nav-link dropdown">Substack</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/instagram.html" className="nav-link dropdown">Instagram</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/portfolio.html" className="nav-link dropdown">Portfolio</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/product-creator.html" className="nav-link dropdown">Product Creator</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/podcast.html" className="nav-link dropdown">Podcast</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/blogger.html" className="nav-link dropdown">Blogger</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/product-maker.html" className="nav-link dropdown">Product Maker</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="homes/personal-cv.html" className="nav-link dropdown">Personal / CV</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="dropdown-title">Blog</div>
                        <div className="flex dropdown">
                          <ul role="list" className="list-dropdown">
                            <li className="list-item-dropdown">
                              <a href="blog.html" className="nav-link dropdown">Blog</a>
                            </li>
                            <li className="list-item-dropdown">
                              <a href="https://linkstemplate.webflow.io/blog/app-store-optimization-aso-how-to-use-it-to-get-more-app-downloads" className="nav-link dropdown">Blog Post</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <div className="dropdown-title">Utility Pages</div>
                        <ul role="list" className="list-dropdown">
                          <li className="list-item-dropdown">
                            <a href="utility-pages/start-here.html" className="nav-link dropdown">Start Here</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="utility-pages/styleguide.html" className="nav-link dropdown">Style Guide</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="https://linkstemplate.webflow.io/404" className="nav-link dropdown">404 Not Found</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="https://linkstemplate.webflow.io/401" className="nav-link dropdown">Password Protected</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="utility-pages/licenses.html" className="nav-link dropdown">Licenses</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="utility-pages/changelog.html" className="nav-link dropdown">Changelog</a>
                          </li>
                          <li className="list-item-dropdown">
                            <a href="https://brixtemplates.com/more-templates" className="nav-link dropdown special">Browse More Templates</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <a href="https://webflow.com/templates/html/links-x-app-website-template" className="button-primary small nav w-button">Buy template</a>
              </li>
            </ul>
          </nav>
          <div data-w-id="58db7844-5919-d71b-dd74-2323ed8dfffb" className="menu-button w-nav-button">
            <div data-is-ix2-target="1" className="menu-animation-icon" data-w-id="df163e14-3dc9-5f06-17da-f5935829fdd0" data-animation-type="lottie" data-src="documents/icon-menu-links-template.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="2.4791666666666665" data-duration="0" data-ix2-initial-state="0"></div>
          </div>
        </div>
      </div>
      <div className="container-default top">
        <div
            data-w-id="753d05d3-dfcd-e7c4-1633-dbd321a46361"
            style={divStyle}
            className="card-container small home-hero"
          >
          <div className="inner-container">
            <h1 className="display-1">Links X Webflow Template</h1>
            <p className="paragraph-large mg-top-16px">Presenting Links X, our Webflow Template for creators looking to have a simple, yet premium and modern website. If you are looking to create a simple website for you as a Blogger, Creator, or anything else, this is the template for you.</p>
            <a href="https://webflow.com/templates/html/links-x-app-website-template" className="button-primary mg-top-24px w-button">Buy template</a>
          </div>
          <img src="../src/components/webflow/images/top-hero-image-links-webflow-template.png" loading="lazy" width="852" sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 100vw, (max-width: 1439px) 1060.837158203125px, 74vw" alt="Hero Image - Links X Webflow Template" srcSet="images/top-hero-image-links-webflow-template-p-500.png 500w, images/top-hero-image-links-webflow-template.png 1704w" className="top-hero-image"></img>
        </div>
        <div data-w-id="75045bfd-8fb1-49b7-23f9-c05f99a0268e" style={divStyle} className="card-container full top-banner home">
          <div id="pages" className="inner-container home-pages">
            <h2>Homes</h2>
            <div className="w-layout-grid grid-2-columns mg-top-24px home">
              <a data-w-id="75045bfd-8fb1-49b7-23f9-c05f99a026c5" href="homes/youtuber.html" className="card home w-inline-block">
                <div class="image-wrapper home"><img src="images/youtuber-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="YouTuber - Links X Webflow Template" srcset="images/youtuber-links-x-webflow-template-p-500.png 500w, images/youtuber-links-x-webflow-template.png 773w" class="image-home"></div>
                <div class="card-text-container home">
                  <h3 class="card-title home">Youtuber</h3>
                  <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
                </div>
              </a>
            <a data-w-id="3e8270d9-f9a6-3f8c-0046-400fb5ba50f7" href="homes/substack.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/substack-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Substack - Links X Webflow Template" srcset="images/substack-links-x-webflow-template-p-500.png 500w, images/substack-links-x-webflow-template.png 773w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Substack</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="17be6cd7-994f-9664-2f38-69ce11e9e00f" href="homes/instagram.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/instagram-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Instagram - Links X Webflow Template" srcset="images/instagram-links-x-webflow-template-p-500.png 500w, images/instagram-links-x-webflow-template.png 773w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Instagram</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="daf62c47-ee25-9b1a-f97a-7e5f8f15d11b" href="homes/portfolio.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/portfolio-links-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Portfolio - Links X Webflow Template" srcset="images/portfolio-links-webflow-template-p-500.png 500w, images/portfolio-links-webflow-template.png 772w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Portfolio</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="57ccb363-dd3f-352f-daac-68d717b5f55c" href="homes/product-creator.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/product-creator-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Product Creator - Links X Webflow Template" srcset="images/product-creator-links-x-webflow-template-p-500.png 500w, images/product-creator-links-x-webflow-template.png 773w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Product Creator</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="6a199b7f-a861-ab8e-e482-64897797751e" href="homes/podcast.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/podcast-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Podcast - Links X Webflow Template" srcset="images/podcast-links-x-webflow-template-p-500.png 500w, images/podcast-links-x-webflow-template.png 773w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Podcast</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="ac28d2ac-09c0-ce24-618a-d4528b65831d" href="homes/blogger.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/blogger-links-x-webflow-template.png" alt="Blogger - Links X Webflow Template" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Blogger</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="07faf185-36c3-be2b-d99c-418e789c20d7" href="homes/product-maker.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/product-maker-links-x-webflow-template.jpg" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="Product Maker - Links X Webflow Template" srcset="images/product-maker-links-x-webflow-template-p-500.jpg 500w, images/product-maker-links-x-webflow-template-p-800.jpg 800w, images/product-maker-links-x-webflow-template-p-1080.jpg 1080w, images/product-maker-links-x-webflow-template.jpg 1546w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Product Maker</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
            <a data-w-id="323e2e04-c168-a458-96f5-ddbd778df4f4" href="homes/personal-cv.html" class="card home w-inline-block">
              <div class="image-wrapper home"><img src="images/cv-links-x-webflow-template.png" sizes="(max-width: 479px) 90vw, (max-width: 767px) 88vw, (max-width: 991px) 73vw, 666px" width="266" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" alt="CV - Links X Webflow Template" srcset="images/cv-links-x-webflow-template-p-500.png 500w, images/cv-links-x-webflow-template.png 773w" class="image-home"></div>
              <div class="card-text-container home">
                <h3 class="card-title home">Personal / CV</h3>
                <div class="link-arrow">View page<span style="-webkit-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="arrow link"></span></div>
              </div>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

 {/* <Header />
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
            </div> */}
            {/* Decorative circles */}
            {/* <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-50" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-50" />
            </div>
          </div>
        </section>
      </main>
      <Footer /> */}