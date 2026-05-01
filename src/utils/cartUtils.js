// Get cart from localStorage
export const getCart = () => {
  const cart = localStorage.getItem('hardwareCart');
  return cart ? JSON.parse(cart) : [];
};

// Save cart to localStorage
export const saveCart = (cart) => {
  localStorage.setItem('hardwareCart', JSON.stringify(cart));
};

// Add item to cart
export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCart(cart);
  return cart;
};

// Remove item from cart
export const removeFromCart = (productId) => {
  const cart = getCart();
  const filtered = cart.filter(item => item.id !== productId);
  saveCart(filtered);
  return filtered;
};

// Update item quantity
export const updateQuantity = (productId, quantity) => {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
    saveCart(cart);
  }
  return cart;
};

// Get cart total
export const getCartTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Get cart item count
export const getCartCount = (cart) => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};