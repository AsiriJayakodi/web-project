// Menu items data
const menuItems = [
    // Starters
    {
        id: 1,
        name: "Kottu Roti",
        price: 600,
        category: "starters",
        description: "Sri Lankan stir-fried roti with vegetables and your choice of meat",
        image: "images/menu/kottu roti.jpg"
    },
    {
        id: 2,
        name: "Hoppers",
        price: 100,
        category: "starters",
        description: "Crispy Sri Lankan bowl-shaped pancakes served with spicy sambol",
        image: "images/menu/hoppers.jpg"
    },
    {
        id: 3,
        name: "Uludu Vada",
        price: 100,
        category: "starters",
        description: "Crispy lentil fritters served with coconut chutney",
        image: "images/menu/Medu-Vada.jpg"
    },
    {
        id: 4,
        name: "Pan Cake",
        price: 120,
        category: "starters",
        description: "Sweet coconut rolls with cardamom flavor",
        image: "images/menu/pancake.jpg"
    },
  
    {
        id: 7,
        name: "Pol Sambol",
        price: 80,
        category: "starters",
        description: "Fresh grated coconut salad with chili and lime",
        image: "images/menu/sambal.jpg"
    },

    // Main Courses
    {
        id: 8,
        name: "Rice & Curry Set",
        price: 800,
        category: "mains",
        description: "Traditional Sri Lankan rice served with 3 curries and side dishes",
        image: "images/menu/rice.jpg"
    },
    {
        id: 9,
        name: "Lamb Curry",
        price: 400,
        category: "mains",
        description: "Slow-cooked tender lamb with aromatic spices",
        image: "images/menu/lamb.jpg"
    },
    {
        id: 10,
        name: "Fish Moilee",
        price: 550,
        category: "mains",
        description: "Fresh fish cooked in coconut milk with traditional spices",
        image: "images/menu/fish.jpg"
    },
    {
        id: 11,
        name: "Polos Curry",
        price: 380,
        category: "mains",
        description: "Green jackfruit curry with coconut milk",
        image: "images/menu/polos.jpg"
    },
    {
        id: 12,
        name: "Parippu",
        price: 220,
        category: "mains",
        description: "Traditional lentil curry with coconut milk",
        image: "images/menu/parippu.jpg"
    },
    {
        id: 13,
        name: "String Hoppers",
        price: 180,
        category: "shorteats",
        description: "Steamed rice noodle cakes served with coconut sambol",
        image: "images/menu/shoppers.jpg"
    },
    {
        id: 14,
        name: "Kos Bath",
        price: 200,
        category: "shorteats",
        description: "Potato rice cakes with coconut sambol",
        image: "images/menu/redrice.jpg"
    },
    {
        id: 15,
        name: "Kade Bath",
        price: 220,
        category: "shorteats",
        description: "Rice cakes with coconut sambol",
        image: "https://source.unsplash.com/400x300/?kade-bath"
    },
    // Desserts
    {
        id: 20,
        name: "Kiri Kanda",
        price: 150,
        category: "desserts",
        description: "Coconut milk pudding with cardamom",
        image: "https://source.unsplash.com/400x300/?kiri-kanda"
    },
    {
        id: 21,
        name: "Watalappam",
        price: 150,
        category: "desserts",
        description: "Traditional Sri Lankan coconut milk pudding with spices",
        image: "https://source.unsplash.com/400x300/?watalappam"
    },
    {
        id: 22,
        name: "Kavum",
        price: 100,
        category: "desserts",
        description: "Deep-fried sweet coconut rice flour cake",
        image: "https://source.unsplash.com/400x300/?kavum"
    },
    {
        id: 23,
        name: "Halape",
        price: 180,
        category: "desserts",
        description: "Sweet coconut and jaggery dessert with cardamom",
        image: "https://source.unsplash.com/400x300/?halape"
    },
    {
        id: 24,
        name: "Kiri Kanda",
        price: 150,
        category: "desserts",
        description: "Coconut milk jelly with pandan flavor",
        image: "https://source.unsplash.com/400x300/?kiri-kanda"
    },
    {
        id: 25,
        name: "Kalu Dodol",
        price: 200,
        category: "desserts",
        description: "Traditional Sri Lankan sweet made with rice flour and coconut",
        image: "https://source.unsplash.com/400x300/?kalu-dodol"
    },
    {
        id: 26,
        name: "Kiri Pani",
        price: 120,
        category: "desserts",
        description: "Sweet coconut milk pudding served cold",
        image: "https://source.unsplash.com/400x300/?kiri-pani"
    },

    // Drinks
    {
        id: 27,
        name: "King Coconut Water",
        price: 150,
        category: "drinks",
        description: "Fresh king coconut water with natural sweetness",
        image: "https://source.unsplash.com/400x300/?coconut-water"
    },
    {
        id: 28,
        name: "Lemon Tea",
        price: 100,
        category: "drinks",
        description: "Freshly brewed tea with lemon and honey",
        image: "https://source.unsplash.com/400x300/?lemon-tea"
    },
    {
        id: 29,
        name: "Lassi",
        price: 120,
        category: "drinks",
        description: "Traditional yogurt drink with mango flavor",
        image: "https://source.unsplash.com/400x300/?lassi"
    },
    {
        id: 30,
        name: "Kithul Toddy",
        price: 180,
        category: "drinks",
        description: "Traditional palm sap drink with natural sweetness",
        image: "https://source.unsplash.com/400x300/?kithul-toddy"
    },
    {
        id: 31,
        name: "King Coconut Toddy",
        price: 200,
        category: "drinks",
        description: "Fresh coconut sap drink with natural sweetness",
        image: "https://source.unsplash.com/400x300/?king-coconut-toddy"
    },
    {
        id: 32,
        name: "Palm Juice",
        price: 150,
        category: "drinks",
        description: "Fresh palm tree sap drink with natural sweetness",
        image: "https://source.unsplash.com/400x300/?palm-juice"
    }
];
    
    

// Initialize variables
let cart = [];
let orderTotal = 0;

// DOM Elements
const cartCount = document.getElementById('cart-count-sidebar');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotal = document.getElementById('cart-total-sidebar');
const checkoutBtn = document.getElementById('checkout-btn');
const menuItemsContainer = document.getElementById('menuItemsContainer');
const orderForm = document.getElementById('orderForm');
const placeOrderBtn = document.getElementById('placeOrderBtn');

// Load menu items when page loads
document.addEventListener('DOMContentLoaded', loadMenuItems);
const menuGrid = document.getElementById('menu-grid');
const bookingForm = document.getElementById('bookingForm');

// Load menu items
function loadMenuItems() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    // Clear existing items
    menuGrid.innerHTML = '';

    // Filter based on active category
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const filteredItems = activeCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === activeCategory);

    // Create menu items
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">Rs.${item.price}</span>
                <button onclick="addToCart(${item.id})" class="add-to-cart">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Add click event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Reload menu items with new filter
            loadMenuItems();
        });
    });
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-sidebar');
    const checkoutTotal = document.getElementById('checkout-total');
    
    if (!cartItems || !cartTotal) return;

    // Clear existing items
    cartItems.innerHTML = '';

    // Calculate total
    orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <span class="price">Rs.${item.price}</span>
                <div class="quantity-control">
                    <button onclick="changeQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input type="number" 
                           class="quantity-input" 
                           value="${item.quantity}"
                           min="1"
                           onchange="updateQuantity(${item.id}, this.value)">
                    <button onclick="changeQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Update total in both cart and checkout
    cartTotal.textContent = `Rs.${orderTotal.toFixed(2)}`;
    if (checkoutTotal) {
        checkoutTotal.textContent = `Rs.${orderTotal.toFixed(2)}`;
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to cart function
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    // Check if item is already in cart
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }

    // Update cart display
    updateCart();
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = `${item.name} added to cart!`;
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 2000);

    // Show cart sidebar
    toggleCart();
}

// Change quantity
function changeQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) {
        removeFromCart(itemId);
    } else {
        updateCart();
    }
}

// Update quantity
function updateQuantity(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    const newQuantity = parseInt(quantity);
    if (newQuantity >= 1) {
        item.quantity = newQuantity;
        updateCart();
    }
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCart();
    }
}

// Toggle cart
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('active');
    }
}

// Close cart
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('active');
    }
}

// Initialize menu page
if (document.getElementById('menu-grid')) {
    loadMenuItems();
    updateCart(); // Ensure cart is updated on page load

    // Event listener for closing cart sidebar
    const closeCartBtn = document.querySelector('.close-cart-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    // Event listener for clearing cart
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }

    // Event listener for "Proceed to Checkout" button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            window.location.href = 'order.html';
        });
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Show checkout modal
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal active';
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeCheckoutModal()">&times;</span>
            <h2>Checkout</h2>
            <form id="checkoutForm" onsubmit="processCheckout(event)">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <textarea id="address" name="address" required></textarea>
                </div>
                <div class="form-group">
                    <label for="payment_method">Payment Method:</label>
                    <select id="payment_method" name="payment_method" required>
                        <option value="cash">Cash on Delivery</option>
                        <option value="card">Credit/Debit Card</option>
                        <option value="online">Online Payment</option>
                    </select>
                </div>
                <div class="form-group">
                    <h3>Order Summary</h3>
                    <div class="order-summary">
                        ${cart.map(item => `
                            <div class="order-item">
                                <span>${item.name}</span>
                                <span>Rs.${item.price}</span>
                                <span>x ${item.quantity}</span>
                                <span>Rs.${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                        <div class="order-total">
                            <span>Total:</span>
                            <span>Rs.${orderTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <button type="submit" class="checkout-btn">Place Order</button>
            </form>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    // Handle payment method selection
    const paymentMethod = document.getElementById('payment_method');
    const cashDetails = document.getElementById('cash-details');
    const cardDetails = document.getElementById('card-details');
    const onlineDetails = document.getElementById('online-details');

    paymentMethod.addEventListener('change', () => {
        const selectedMethod = paymentMethod.value;
        
        // Show/hide payment method details
        cashDetails.style.display = selectedMethod === 'cash' ? 'block' : 'none';
        cardDetails.style.display = selectedMethod === 'card' ? 'block' : 'none';
        onlineDetails.style.display = selectedMethod === 'online' ? 'block' : 'none';
    });
}

// Process order
function processOrder(event) {
    event.preventDefault();
    
    const form = event.target; // Get the form element
    const formData = new FormData(form);
    const paymentMethod = formData.get('payment_method');
    
    // Validate form
    const validateForm = () => {
        const errors = [];
        
        if (!formData.get('name')) errors.push('Please enter your name.');
        if (!formData.get('email')) errors.push('Please enter your email address.');
        if (!formData.get('phone')) errors.push('Please enter your phone number.');
        if (!formData.get('address')) errors.push('Please enter your delivery address.');
        if (!paymentMethod) errors.push('Please select a payment method.');
        
        if (paymentMethod === 'card') {
            if (!formData.get('cardNumber')) errors.push('Please enter card number.');
            if (!formData.get('cardExpiry')) errors.push('Please enter card expiry date (MM/YY).');
            if (!formData.get('cardCVV')) errors.push('Please enter card CVV.');
            if (!formData.get('cardName')) errors.push('Please enter the name on card.');
        }
        
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        return true;
    };

    if (!validateForm()) return;

    // Prepare order data
    // Ensure 'cart' items have id, quantity, price (unit price)
    // Ensure 'orderTotal' is correctly calculated sum of (item.price * item.quantity)
    const orderData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        address: formData.get('address'),
        payment_method: paymentMethod,
        special_instructions: formData.get('special_instructions') || '', // Get special instructions
        items: cart.map(item => ({ 
            id: item.id, 
            quantity: item.quantity, 
            price: item.price 
            // name: item.name // Optional: name can be useful for debugging on server if needed
        })), 
        total: orderTotal 
    };

    // Add card details if payment method is card
    if (paymentMethod === 'card') {
        orderData.cardNumber = formData.get('cardNumber');
        orderData.cardExpiry = formData.get('cardExpiry');
        orderData.cardCVV = formData.get('cardCVV');
        orderData.cardName = formData.get('cardName');
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';

    fetch('process_order.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            alert(`Order placed successfully! Order ID: ${result.order_id}\nThank you for your order.`);
            localStorage.removeItem('cart'); 
            window.location.href = 'thankyou.html?order_id=' + result.order_id; 
        } else {
            alert('Error placing order: ' + (result.message || 'Unknown error. Please try again.'));
        }
    })
    .catch(error => {
        console.error('Order Processing Error:', error);
        alert('An unexpected error occurred while placing your order. Please check your connection and try again. Details: ' + error.message);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    });
}

// Close checkout modal
function closeCheckoutModal() {
    const modal = document.querySelector('.modal.active');
    if (modal) {
        modal.remove();
    }
}

// Unified DOMContentLoaded listener for page-specific initializations
document.addEventListener('DOMContentLoaded', () => {
    // For menu.html
    if (document.getElementById('menu-grid')) {
        loadMenuItems();
        updateCart(); // Initial cart update for menu page
    }
    
    // For order.html
    if (document.getElementById('cartItemsSummary')) {
        loadOrderSummaryPage();

        const paymentMethodSelect = document.getElementById('paymentMethod');
        const cardPaymentDetailsDiv = document.getElementById('cardPaymentDetails');
        const cardFields = [
            document.getElementById('cardNumber'),
            document.getElementById('cardExpiry'),
            document.getElementById('cardCVV'),
            document.getElementById('cardName')
        ];

        if (paymentMethodSelect && cardPaymentDetailsDiv) {
            paymentMethodSelect.addEventListener('change', function() {
                if (this.value === 'card') {
                    cardPaymentDetailsDiv.style.display = 'block';
                    cardFields.forEach(field => {
                        if(field) field.required = true;
                    });
                } else {
                    cardPaymentDetailsDiv.style.display = 'none';
                    cardFields.forEach(field => {
                        if(field) field.required = false;
                    });
                }
            });
            // Trigger change event on page load to set initial state based on default selection
            paymentMethodSelect.dispatchEvent(new Event('change')); 
        }

        const orderForm = document.getElementById('orderForm');
        if (orderForm) {
            orderForm.addEventListener('submit', processOrder);
        }
    }

    // Payment method selection logic re-added for card payments.
});

// Filter menu items
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Reload menu items with new filter
        loadMenuItems();
    });
});

// Quick view modal
function quickView(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (!item) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeQuickView()">&times;</span>
            <div class="quick-view-content">
                <div class="quick-view-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="quick-view-details">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <span class="price">Rs.${item.price}</span>
                    <button onclick="addToCart(${item.id})" class="cta-button">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeQuickView() {
    const modal = document.querySelector('.modal.active');
    if (modal) {
        modal.remove();
    }
}

// Function to load and display the order summary on order.html
function loadOrderSummaryPage() {
    const cartItemsSummaryContainer = document.getElementById('cartItemsSummary');
    const orderTotalElement = document.getElementById('orderTotal');
    const placeOrderBtn = document.getElementById('placeOrderBtn'); // Get the place order button

    if (!cartItemsSummaryContainer || !orderTotalElement) {
        // Not on the order page, or elements are missing
        return;
    }

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsSummaryContainer.innerHTML = ''; // Clear previous items
    let currentTotal = 0;

    if (storedCart.length === 0) {
        cartItemsSummaryContainer.innerHTML = '<p>Your order is currently empty. Please add items from the menu.</p>';
        orderTotalElement.textContent = 'Rs.0.00';
        if(placeOrderBtn) placeOrderBtn.disabled = true; // Disable button if cart is empty
        return;
    }

    if(placeOrderBtn) placeOrderBtn.disabled = false; // Enable button if cart has items

    const ul = document.createElement('ul');
    ul.className = 'order-summary-list'; // Add a class for potential styling

    storedCart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'order-summary-item'; // Add a class for potential styling
        
        const itemNameElement = document.createElement('span');
        itemNameElement.className = 'item-name';
        itemNameElement.textContent = `${item.name} (x${item.quantity})`;
        
        const itemPriceElement = document.createElement('span');
        itemPriceElement.className = 'item-price';
        const subtotal = item.price * item.quantity;
        itemPriceElement.textContent = `Rs.${subtotal.toFixed(2)}`;
        
        listItem.appendChild(itemNameElement);
        listItem.appendChild(itemPriceElement);
        ul.appendChild(listItem);
        
        currentTotal += subtotal;
    });

    cartItemsSummaryContainer.appendChild(ul);
    orderTotalElement.textContent = `Rs.${currentTotal.toFixed(2)}`;
}

// Close cart button
if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
}
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            occasion: document.getElementById('occasion').value,
            specialRequests: document.getElementById('special-requests').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
            alert('Please fill in all required fields');
            return;
        }

        // Send booking request
        fetch('process_booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Thank you for your reservation! We will confirm your booking shortly.');
                bookingForm.reset();
            } else {
                alert('Error booking table: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error processing your booking. Please try again.');
        });
    });
}

// Feedback Form
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('feedback-name').value,
            email: document.getElementById('feedback-email').value,
            rating: parseInt(document.getElementById('feedback-rating').value),
            comment: document.getElementById('feedback-comment').value
        };

        fetch('process_feedback.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                feedbackForm.reset();
            } else {
                alert('Error submitting feedback: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting feedback. Please try again.');
        });
    });
}

/* Redundant initialization removed; now handled by DOMContentLoaded listener */
