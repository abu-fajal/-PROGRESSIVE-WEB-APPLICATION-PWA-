// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
                initializeApp();
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}

// App Initialization
function initializeApp() {
    // Load products
    loadProducts();
    
    // Initialize cart
    updateCartCount();
    
    // Set up event listeners
    setupEventListeners();
}

// Product Loading
async function loadProducts() {
    try {
        // Try network first
        const response = await fetch('/api/products');
        const products = await response.json();
        displayProducts(products);
        
        // Cache the response
        const cache = await caches.open('product-data');
        cache.put('/api/products', new Response(JSON.stringify(products)));
    } catch (error) {
        // Fallback to cache if network fails
        const cache = await caches.open('product-data');
        const cachedResponse = await cache.match('/api/products');
        
        if (cachedResponse) {
            const products = await cachedResponse.json();
            displayProducts(products);
        } else {
            console.error('Failed to load products');
        }
    }
}

// Cart Functionality
let cartItems = [];

function addToCart(productId) {
    // Cart implementation
    updateCartCount();
}

function updateCartCount() {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count > 0 ? count : '';
}

// Modal Functions
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = '';
}

// Event Listeners
function setupEventListeners() {
    // Modal close
    document.getElementById('overlay').addEventListener('click', closeModal);
    
    // Search functionality
    document.querySelector('.search-icon').addEventListener('click', performSearch);
    document.querySelector('.search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

function performSearch() {
    const query = document.querySelector('.search-input').value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement actual search functionality
    }
}