// Product Data
const products = [
    // Women's Fashion
    {
        id: 1,
        name: "Floral Summer Dress",
        brand: "StyleMax",
        category: "women",
        price: 2499,
        originalPrice: 3999,
        discount: 38,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Bestseller",
        affiliateLink: "https://www.myntra.com/dresses/stylemax/stylemax-women-floral-printed-fit-and-flare-dress/12345678/buy",
        featured: true
    },
    {
        id: 2,
        name: "Denim Jacket",
        brand: "UrbanStyle",
        category: "women",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        rating: 4.3,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "New",
        affiliateLink: "https://www.myntra.com/jackets/urbanstyle/urbanstyle-women-solid-denim-jacket/23456789/buy",
        featured: false
    },
    {
        id: 3,
        name: "Casual Cotton Top",
        brand: "ComfortWear",
        category: "women",
        price: 899,
        originalPrice: 1299,
        discount: 31,
        rating: 4.2,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/tops/comfortwear/comfortwear-women-solid-casual-shirt/34567890/buy",
        featured: true
    },

    // Men's Fashion
    {
        id: 4,
        name: "Classic Polo Shirt",
        brand: "GentleMax",
        category: "men",
        price: 1599,
        originalPrice: 2199,
        discount: 27,
        rating: 4.4,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Trending",
        affiliateLink: "https://www.myntra.com/tshirts/gentlemax/gentlemax-men-solid-polo-collar-t-shirt/45678901/buy",
        featured: true
    },
    {
        id: 5,
        name: "Formal White Shirt",
        brand: "OfficeWear",
        category: "men",
        price: 1299,
        originalPrice: 1899,
        discount: 32,
        rating: 4.6,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Bestseller",
        affiliateLink: "https://www.myntra.com/shirts/officewear/officewear-men-solid-formal-shirt/56789012/buy",
        featured: false
    },
    {
        id: 6,
        name: "Casual Jeans",
        brand: "DenimCo",
        category: "men",
        price: 2299,
        originalPrice: 3199,
        discount: 28,
        rating: 4.3,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/jeans/denimco/denimco-men-slim-fit-mid-rise-clean-look-stretchable-jeans/67890123/buy",
        featured: true
    },

    // Accessories
    {
        id: 7,
        name: "Designer Sunglasses",
        brand: "SunStyle",
        category: "accessories",
        price: 1899,
        originalPrice: 2899,
        discount: 34,
        rating: 4.5,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Limited",
        affiliateLink: "https://www.myntra.com/sunglasses/sunstyle/sunstyle-unisex-uv-protected-square-sunglasses/78901234/buy",
        featured: false
    },
    {
        id: 8,
        name: "Leather Watch",
        brand: "TimeZone",
        category: "accessories",
        price: 3499,
        originalPrice: 4999,
        discount: 30,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Premium",
        affiliateLink: "https://www.myntra.com/watches/timezone/timezone-men-brown-leather-analogue-watch/89012345/buy",
        featured: true
    },
    {
        id: 9,
        name: "Baseball Cap",
        brand: "SportsCap",
        category: "accessories",
        price: 799,
        originalPrice: 1199,
        discount: 33,
        rating: 4.1,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/caps/sportscap/sportscap-unisex-solid-baseball-cap/90123456/buy",
        featured: false
    },

    // Footwear
    {
        id: 10,
        name: "Running Sneakers",
        brand: "SportMax",
        category: "footwear",
        price: 3999,
        originalPrice: 5499,
        discount: 27,
        rating: 4.6,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Bestseller",
        affiliateLink: "https://www.myntra.com/sports-shoes/sportmax/sportmax-men-white-mesh-running-shoes/01234567/buy",
        featured: true
    },
    {
        id: 11,
        name: "High Heels",
        brand: "Elegance",
        category: "footwear",
        price: 2799,
        originalPrice: 3999,
        discount: 30,
        rating: 4.4,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Party Wear",
        affiliateLink: "https://www.myntra.com/heels/elegance/elegance-women-solid-stilettos/12345067/buy",
        featured: false
    },
    {
        id: 12,
        name: "Casual Loafers",
        brand: "ComfortStep",
        category: "footwear",
        price: 2199,
        originalPrice: 2999,
        discount: 27,
        rating: 4.3,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/casual-shoes/comfortstep/comfortstep-men-brown-loafers/23450678/buy",
        featured: true
    },

    // Bags
    {
        id: 13,
        name: "Designer Handbag",
        brand: "LuxeBags",
        category: "bags",
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        rating: 4.8,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Luxury",
        affiliateLink: "https://www.myntra.com/handbags/luxebags/luxebags-women-solid-shoulder-bag/34567189/buy",
        featured: true
    },
    {
        id: 14,
        name: "Travel Backpack",
        brand: "TravelGear",
        category: "bags",
        price: 2899,
        originalPrice: 3999,
        discount: 28,
        rating: 4.5,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Travel",
        affiliateLink: "https://www.myntra.com/backpacks/travelgear/travelgear-unisex-solid-backpack/45678290/buy",
        featured: false
    },
    {
        id: 15,
        name: "Wallet",
        brand: "LeatherCraft",
        category: "bags",
        price: 1299,
        originalPrice: 1899,
        discount: 32,
        rating: 4.2,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/wallets/leathercraft/leathercraft-men-brown-leather-wallet/56789301/buy",
        featured: true
    },

    // Jewelry
    {
        id: 16,
        name: "Gold Necklace",
        brand: "JewelryMax",
        category: "jewelry",
        price: 8999,
        originalPrice: 12999,
        discount: 31,
        rating: 4.9,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Premium",
        affiliateLink: "https://www.myntra.com/jewellery-set/jewelrymax/jewelrymax-women-gold-plated-necklace/67890412/buy",
        featured: true
    },
    {
        id: 17,
        name: "Silver Earrings",
        brand: "SilverStyle",
        category: "jewelry",
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        rating: 4.4,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "Trending",
        affiliateLink: "https://www.myntra.com/earrings/silverstyle/silverstyle-women-silver-toned-drop-earrings/78901523/buy",
        featured: false
    },
    {
        id: 18,
        name: "Fashion Ring",
        brand: "TrendJewel",
        category: "jewelry",
        price: 899,
        originalPrice: 1399,
        discount: 36,
        rating: 4.1,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
        badge: "",
        affiliateLink: "https://www.myntra.com/rings/trendjewel/trendjewel-women-gold-toned-ring/89012634/buy",
        featured: true
    }
];

// Global variables
let currentFilter = 'all';
let currentSort = 'featured';
let filteredProducts = [...products];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const productCount = document.getElementById('product-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const backToTopBtn = document.getElementById('backToTop');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateProductCount(products.length);
    initializeBackToTop();
    startCountdownTimer();
    initializeNavigation();
});

// Display products in the grid
function displayProducts(productsToShow) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${badge}
            <button class="product-wishlist" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                ♡
            </button>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="discount-percent">${product.discount}% OFF</span>
            </div>
            <a href="${product.affiliateLink}" target="_blank" class="product-buy-btn" onclick="trackPurchase('${product.name}', '${product.category}')">
                Buy Now
            </a>
        </div>
    `;
    
    return card;
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    
    // Update active filter button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category || (category === 'all' && btn.textContent.toLowerCase() === 'all')) {
            btn.classList.add('active');
        }
    });
    
    // Filter products
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Apply current sort
    sortProducts();
    
    // Update display
    displayProducts(filteredProducts);
    updateProductCount(filteredProducts.length);
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Sort products
function sortProducts() {
    const sortValue = sortSelect ? sortSelect.value : currentSort;
    currentSort = sortValue;
    
    switch (sortValue) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            filteredProducts.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.rating - a.rating;
            });
            break;
    }
    
    displayProducts(filteredProducts);
}

// Update product count display
function updateProductCount(count) {
    if (!productCount) return;
    
    if (currentFilter === 'all') {
        productCount.textContent = `Showing all ${count} products`;
    } else {
        const categoryName = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
        productCount.textContent = `Showing ${count} ${categoryName} products`;
    }
}

// Toggle wishlist (placeholder function)
function toggleWishlist(productId) {
    const button = event.target;
    if (button.textContent === '♡') {
        button.textContent = '♥';
        button.style.color = '#ff6b9d';
        showToast('Added to wishlist!');
    } else {
        button.textContent = '♡';
        button.style.color = '';
        showToast('Removed from wishlist!');
    }
}

// Track purchase clicks (for analytics)
function trackPurchase(productName, category) {
    console.log(`Purchase clicked: ${productName} in ${category}`);
    showToast('Redirecting to store...');
    
    // Here you could add Google Analytics or other tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            event_category: 'affiliate_link',
            event_label: productName,
            value: category
        });
    }
}

// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: #ff6b9d;
        color: white;
        padding: 1rem 2rem;
        border-radius: 2rem;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Initialize back to top functionality
function initializeBackToTop() {
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Start countdown timer for deals
function startCountdownTimer() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    // Set initial time (24 hours from now)
    let timeLeft = 24 * 60 * 60; // 24 hours in seconds
    
    function updateTimer() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        if (timeLeft > 0) {
            timeLeft--;
        } else {
            // Reset timer when it reaches 0
            timeLeft = 24 * 60 * 60;
        }
    }
    
    // Update timer immediately and then every second
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Initialize smooth scrolling navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Close mobile menu when link is clicked
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navMenuLinks = document.querySelectorAll('.nav-link');
    
    navMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenuToggle) {
                mobileMenuToggle.checked = false;
            }
        });
    });
}

// Add loading animation for images
function addImageLoadingAnimation() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not available';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Initialize image loading animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addImageLoadingAnimation, 100);
});

// Add intersection observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation
    const animatedElements = document.querySelectorAll('.product-card, .category-card, .deal-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after content loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeScrollAnimations, 500);
});

// Search functionality (bonus feature)
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        padding: 0.75rem 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 2rem;
        font-size: 1rem;
        width: 250px;
        transition: all 0.3s ease;
    `;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm === '') {
            filteredProducts = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);
        } else {
            const baseProducts = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
            filteredProducts = baseProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
        
        sortProducts();
        displayProducts(filteredProducts);
        updateProductCount(filteredProducts.length);
    });
    
    // Add search to filter bar
    const filterBar = document.querySelector('.filter-bar');
    if (filterBar) {
        filterBar.appendChild(searchInput);
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeSearch, 200);
});

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Error handling for failed image loads
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjdGQUZDIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwSDI1MEwyMDAgMjAwTDE1MCAyNTBIMjAwSDI1MEwyMDAgMjAwWiIgZmlsbD0iI0U1RTdFQiIvPgo8L3N2Zz4K';
        e.target.alt = 'Product image unavailable';
    }
}, true);

// Analytics and tracking
function initializeAnalytics() {
    // Track page views
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'StyleHub - Fashion Catalog',
            page_location: window.location.href
        });
    }
    
    // Track category clicks
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.textContent.toLowerCase();
            console.log(`Category clicked: ${category}`);
            
            if (typeof gtag !== 'undefined') {
                gtag('event', 'category_filter', {
                    event_category: 'user_interaction',
                    event_label: category
                });
            }
        });
    });
}

// Initialize analytics
document.addEventListener('DOMContentLoaded', function() {
    initializeAnalytics();
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        filterProducts,
        sortProducts,
        createProductCard
    };
}