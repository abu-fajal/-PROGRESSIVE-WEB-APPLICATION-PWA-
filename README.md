# -PROGRESSIVE-WEB-APPLICATION-PWA-

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*:ABU FAJAL

*INTERN ID*: CT04DH2511

*DOMAIN*: WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH


# PROJECT DESCRIPTION

Introduction
Ashopy is a fully responsive Progressive Web App (PWA) e-commerce platform designed to provide users with a seamless online shopping experience, even in offline conditions. Built using VS Code as the primary code editor, this project leverages modern web technologies to deliver fast, reliable, and engaging shopping capabilities. The platform mimics popular e-commerce websites like Amazon but is optimized for performance, offline accessibility, and mobile responsiveness.

Technologies Used
The project was developed using the following technologies:

HTML5 – Used for structuring the web pages, including product listings, navigation bars, and modals.

CSS3 – Handles styling, animations, and responsive layouts (flexbox and grid).

JavaScript (ES6+) – Powers dynamic features like cart management, search functionality, and service worker registration.

Service Workers – Enables offline functionality, caching strategies, and background sync.

Web App Manifest – Allows installation on home screens (PWA feature).

Cache API – Stores static assets (HTML, CSS, JS, images) for offline access.

Push Notifications – Built using the Push API for real-time alerts.

Development Environment (VS Code Setup)
Editor: Visual Studio Code (VS Code) was used for writing and debugging the code.

Extensions:

Live Server – For real-time preview and testing.

Prettier – Code formatting for consistent styling.

ESLint – JavaScript linting for error detection.

Auto Rename Tag – Helps with HTML tag pairing.

Version Control: Git integration for tracking changes.

Key Features Implemented
1. Progressive Web App (PWA) Capabilities
Offline Mode:

Service Worker caches critical assets (index.html, CSS, JS, product images).

Displays a custom offline.html page when no internet connection is available.

Installable: Users can add Ashopy to their home screen (via manifest.json).

Push Notifications: Uses the Push API to notify users about deals and orders.

2. Responsive & Mobile-Friendly Design
Uses CSS Flexbox and Grid for adaptive layouts.

Media queries ensure compatibility with devices of all sizes (mobile, tablet, desktop).

Touch-friendly buttons and navigation.

3. Dynamic Product Listing
Products are loaded either from a network request or cached data (fallback).

Each product card includes:

Image

Title

Price

Ratings (⭐⭐⭐⭐⭐)

"Sold in last week" counter

4. Shopping Cart System
Add to Cart: Products can be added with a click.

Cart Counter: Dynamically updates in the navbar.

Offline Cart: Items remain in cache for later retrieval.

5. Search & Filtering
Search bar with real-time suggestions (simulated).

Category filtering (e.g., "Electronics," "Fashion").

6. Login Modal
Popup modal for user authentication.

Form validation (email, password).

Service Worker & Caching Strategy
Pre-Caching: Essential files (index.html, CSS, JS, logos) are cached on install.

Runtime Caching:

Cache-First for static assets (CSS, JS, images).

Network-First for API calls (product data).

Offline Fallback: Shows offline.html if no cached data is available.

Testing & Debugging
Chrome DevTools:

Application Tab: Verified Service Worker registration, cache storage.

Lighthouse Audit: Scored 90+ on PWA compliance.

Network Throttling: Tested offline behavior.

Real Devices: Tested on Android (Chrome) and iOS (Safari).

Challenges & Solutions
Service Worker Not Registering

Fixed by ensuring the correct path (/sw.js) and HTTPS (used localhost for testing).

Cache Not Updating

Versioned cache names (ashopy-v1, ashopy-v2) to force updates.

Push Notifications on iOS

Limited support; used fallback alerts.

Future Improvements
Backend Integration: Connect to Firebase or Node.js for real product data.

Payment Gateway: Add Stripe or Razorpay for checkout.

Advanced Search: Algolia or Elasticsearch for faster results.
