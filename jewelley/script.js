// Sample jewelry products data
const products = [
    {
        id: 1,
        name: "Diamond Solitaire Ring",
        category: "rings",
        price: 2500,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Elegant 1-carat diamond solitaire ring in 18k white gold. Perfect for engagements and special occasions."
    },
    {
        id: 2,
        name: "Pearl Drop Earrings",
        category: "earrings",
        price: 450,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Classic freshwater pearl drop earrings with gold accents. Timeless elegance for any outfit."
    },
    {
        id: 3,
        name: "Gold Tennis Bracelet",
        category: "bracelets",
        price: 1800,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Stunning 14k gold tennis bracelet with brilliant-cut diamonds. A perfect statement piece."
    },
    {
        id: 4,
        name: "Emerald Pendant Necklace",
        category: "necklaces",
        price: 3200,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Exquisite emerald pendant necklace in 18k yellow gold. Features a 2-carat natural emerald."
    },
    {
        id: 5,
        name: "Rose Gold Wedding Band",
        category: "rings",
        price: 890,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Beautiful rose gold wedding band with intricate detailing. Comfort fit design."
    },
    {
        id: 6,
        name: "Sapphire Stud Earrings",
        category: "earrings",
        price: 1200,
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Brilliant blue sapphire stud earrings in white gold settings. Perfect for everyday luxury."
    },
    {
        id: 7,
        name: "Diamond Tennis Necklace",
        category: "necklaces",
        price: 5500,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Luxurious diamond tennis necklace with 50 brilliant-cut diamonds in platinum setting."
    },
    {
        id: 8,
        name: "Vintage Gold Bracelet",
        category: "bracelets",
        price: 750,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Vintage-inspired gold bracelet with intricate filigree work. A timeless piece."
    },
    {
        id: 9,
        name: "Ruby Cocktail Ring",
        category: "rings",
        price: 4200,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Statement ruby cocktail ring surrounded by diamonds in 18k white gold."
    },
    {
        id: 10,
        name: "Gold Chain Necklace",
        category: "necklaces",
        price: 680,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Classic 18k gold chain necklace. Perfect for layering or wearing alone."
    },
    {
        id: 11,
        name: "Diamond Hoop Earrings",
        category: "earrings",
        price: 1650,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Elegant diamond hoop earrings in 14k white gold. Sparkles with every movement."
    },
    {
        id: 12,
        name: "Charm Bracelet",
        category: "bracelets",
        price: 320,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Delicate gold charm bracelet with heart and star charms. Perfect for gifting."
    }
];

// Global variables - Using in-memory storage instead of localStorage
let cart = [];
let wishlist = [];
let filteredProducts = [...products];

// DOM elements - Safe null checks
let productsGrid;
let cartBtn;
let cartCount;
let wishlistCount;
let cartSidebar;
let closeCart;
let cartItems;
let cartTotal;
let checkoutBtn;
let productModal;
let closeModal;
let modalBody;
let checkoutModal;
let closeCheckoutModal;
let checkoutSummary;
let whatsappCheckout;
let searchInput;
let categoryFilter;
let priceFilter;
let sortFilter;
let menuToggle;
let mainNav;

// Initialize DOM elements safely
function initializeDOMElements() {
    productsGrid = document.getElementById('productsGrid');
    cartBtn = document.getElementById('cartBtn');
    cartCount = document.getElementById('cartCount');
    wishlistCount = document.getElementById('wishlistCount');
    cartSidebar = document.getElementById('cartSidebar');
    closeCart = document.getElementById('closeCart');
    cartItems = document.getElementById('cartItems');
    cartTotal = document.getElementById('cartTotal');
    checkoutBtn = document.getElementById('checkoutBtn');
    productModal = document.getElementById('productModal');
    closeModal = document.getElementById('closeModal');
    modalBody = document.getElementById('modalBody');
    checkoutModal = document.getElementById('checkoutModal');
    closeCheckoutModal = document.getElementById('closeCheckoutModal');
    checkoutSummary = document.getElementById('checkoutSummary');
    whatsappCheckout = document.getElementById('whatsappCheckout');
    searchInput = document.getElementById('searchInput');
    categoryFilter = document.getElementById('categoryFilter');
    priceFilter = document.getElementById('priceFilter');
    sortFilter = document.getElementById('sortFilter');
    menuToggle = document.getElementById('menuToggle');
    mainNav = document.getElementById('mainNav');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMElements();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    setupEventListeners();
});

// Setup event listeners with null checks
function setupEventListeners() {
    // Cart functionality
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckoutModal);
    
    // Modal functionality
    if (closeModal) closeModal.addEventListener('click', closeProductModal);
    if (closeCheckoutModal) closeCheckoutModal.addEventListener('click', closeCheckoutModalFunc);
    if (whatsappCheckout) whatsappCheckout.addEventListener('click', processWhatsAppCheckout);
    
    // Search and filter functionality
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (categoryFilter) categoryFilter.addEventListener('change', handleFilters);
    if (priceFilter) priceFilter.addEventListener('change', handleFilters);
    if (sortFilter) sortFilter.addEventListener('change', handleFilters);
    
    // Mobile menu
    if (menuToggle) menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (productModal && e.target === productModal) {
            closeProductModal();
        }
        if (checkoutModal && e.target === checkoutModal) {
            closeCheckoutModalFunc();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Render products
function renderProducts() {
    if (!productsGrid) return;
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart ${wishlist.includes(product.id) ? 'text-red-500' : ''}"></i>
                    </button>
                    <button class="action-btn quick-view-btn" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Search functionality
function handleSearch() {
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    applyFilters();
}

// Filter and sort functionality
function handleFilters() {
    let filtered = [...products];
    
    // Apply search filter
    if (searchInput) {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
        }
    }
    
    // Apply category filter
    if (categoryFilter) {
        const category = categoryFilter.value;
        if (category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }
    }
    
    // Apply price filter
    if (priceFilter) {
        const priceRange = priceFilter.value;
        if (priceRange !== 'all') {
            const parts = priceRange.split('-');
            const min = parseInt(parts[0]);
            const max = parts[1] ? parseInt(parts[1].replace('+', '')) : null;
            
            filtered = filtered.filter(product => {
                if (max) {
                    return product.price >= min && product.price <= max;
                } else {
                    return product.price >= min;
                }
            });
        }
    }
    
    // Apply sorting
    if (sortFilter) {
        const sortBy = sortFilter.value;
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                filtered.sort((a, b) => b.id - a.id);
                break;
            default:
                // Keep original order for featured
                break;
        }
    }
    
    filteredProducts = filtered;
    renderProducts();
}

function applyFilters() {
    handleFilters();
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString();
}

function toggleCart() {
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

// Wishlist functionality
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    
    updateWishlistUI();
    renderProducts(); // Re-render to update heart icons
}

function updateWishlistUI() {
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Product modal functionality
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !modalBody || !productModal) return;
    
    modalBody.innerHTML = `
        <div class="product-modal-content">
            <div class="product-modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-modal-info">
                <h2>${product.name}</h2>
                <div class="product-modal-price">$${product.price.toLocaleString()}</div>
                <p class="product-modal-description">${product.description}</p>
                <div class="product-modal-actions">
                    <button class="modal-add-to-cart" onclick="addToCart(${product.id}); closeProductModal();">
                        Add to Cart
                    </button>
                    <button class="action-btn wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart ${wishlist.includes(product.id) ? 'text-red-500' : ''}"></i>
                        ${wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

function closeProductModal() {
    if (productModal) {
        productModal.style.display = 'none';
    }
}

// Checkout functionality
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    if (!checkoutModal || !checkoutSummary) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    checkoutSummary.innerHTML = `
        <h3>Order Summary</h3>
        ${cart.map(item => `
            <div class="checkout-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `).join('')}
        <div class="checkout-total">
            <strong>Total: $${total.toLocaleString()}</strong>
        </div>
    `;
    
    checkoutModal.style.display = 'block';
    toggleCart(); // Close cart sidebar
}

function closeCheckoutModalFunc() {
    if (checkoutModal) {
        checkoutModal.style.display = 'none';
    }
}

function processWhatsAppCheckout() {
    const customerName = document.getElementById('customerName')?.value || '';
    const customerEmail = document.getElementById('customerEmail')?.value || '';
    const customerPhone = document.getElementById('customerPhone')?.value || '';
    const customerAddress = document.getElementById('customerAddress')?.value || '';
    const specialInstructions = document.getElementById('specialInstructions')?.value || '';
    
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
        showNotification('Please fill in all required fields!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = `🛍️ *New Order from Luxe Jewels*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    message += `Email: ${customerEmail}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Address: ${customerAddress}\n\n`;
    
    message += `💎 *Order Details:*\n`;
    cart.forEach(item => {
        message += `• ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    message += `\n💰 *Total Amount: $${total.toLocaleString()}*\n\n`;
    
    if (specialInstructions) {
        message += `📝 *Special Instructions:*\n${specialInstructions}\n\n`;
    }
    
    message += `Thank you for choosing Luxe Jewels! 💎✨`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "+919633473641"; // Replace with your WhatsApp business number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Clear cart after successful checkout
    cart = [];
    updateCartUI();
    closeCheckoutModalFunc();
    showNotification('Order sent via WhatsApp! Thank you for your purchase.');
}

// Mobile menu functionality
function toggleMobileMenu() {
    if (mainNav) {
        mainNav.classList.toggle('open');
    }
}

// Notification system
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    let scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) {
        const button = document.createElement('button');
        button.id = 'scrollToTop';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        `;
        button.addEventListener('click', scrollToTop);
        document.body.appendChild(button);
        scrollButton = button;
    }
    
    if (window.pageYOffset > 300) {
        scrollButton.style.display = 'flex';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Initialize lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Call lazy loading initialization
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add loading states for better UX
function showLoading() {
    if (productsGrid) {
        productsGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    }
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.remove();
    }
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    showNotification('Something went wrong. Please try again.');
});

// Make functions globally available for onclick handlers
window.toggleWishlist = toggleWishlist;
window.openProductModal = openProductModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.closeProductModal = closeProductModal;