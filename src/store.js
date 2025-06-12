// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { name: 'Dal Rice', price: 150, image: '/Images/Dal Rice.jpeg' },
      { name: 'Veg Biryani', price: 250, image: '/Images/Veg Biryani.jpg' },
      { name: 'Veg Noodles', price: 100, image: '/Images/Veg Noodles.webp' },
      { name: 'Veg Salad', price: 350, image: '/Images/Veg Salad.jpg' },
      { name: 'Veg Sandwich', price: 70, image: '/Images/Veg Sandwich.jpg' },
      { name: 'Paneer Butter Masala', price: 280, image: '/Images/Paneer Butter Masala.jpg' },
      { name: 'Chole Bhature', price: 180, image: '/Images/Chole Bhature.jpeg' },
      { name: 'Masala Dosa', price: 120, image: '/Images/Masala Dosa.jpeg' },
      { name: 'Aloo Paratha', price: 90, image: '/Images/Aloo Paratha.webp' },
      { name: 'Mushroom Curry', price: 200, image: '/Images/Mushroom Curry.jpg' }
    ],
    nonVeg: [
      { name: 'Chicken Biryani', price: 300, image: '/Images/Chicken Biryani.jpeg' },
      { name: 'Butter Chicken', price: 320, image: '/Images/Butter Chicken.jpeg' },
      { name: 'Egg Curry', price: 180, image: '/Images/Egg Curry.webp' },
      { name: 'Mutton Rogan Josh', price: 400, image: '/Images/Mutton Rogan Josh.jpeg' },
      { name: 'Fish Fry', price: 250, image: '/Images/Fish Fry.jpg' },
      { name: 'Prawn Curry', price: 350, image: '/Images/Prawn Curry.webp' },
      { name: 'Chicken 65', price: 220, image: '/Images/Chicken 65.jpg' },
      { name: 'Tandoori Chicken', price: 300, image: '/Images/Tandoori Chicken.jpeg' },
      { name: 'Chicken Noodles', price: 180, image: '/Images/Chicken Noodles.jpg' },
      { name: 'Egg Fried Rice', price: 160, image: '/Images/Egg Fried Rice.jpg' }
    ],
    womenDress: [
      { name: "Anarkali Suit Sets", price: 1200, image: "/Images/Anarkali Suit Sets.webp" },
      { name: "Sarees", price: 1800, image: "/Images/Sarees.webp" },
      { name: "Sharara Sets", price: 20000, image: "/Images/Sharara Sets.webp" },
      { name: "Co-ord Sets", price: 2500, image: "/Images/Co-ord Sets.webp" },
      { name: "Lehenga Sets", price: 1000, image: "/Images/Lehenga Sets.webp" },
      { name: "Patiala Sets", price: 1200, image: "/Images/Patiala Sets.webp" },
      { name: "Kurta Sets", price: 3400, image: "/Images/Kurta Sets.webp" },
      { name: "Kaftans", price: 17000, image: "/Images/Kaftans.webp" },
      { name: "Pre-stitched Saree", price: 2300, image: "/Images/Pre-stitched Saree.webp" },
      { name: "Jumpsuit", price: 19000, image: "/Images/Jumpsuit.webp" }
    ],
    menDress: [
      { name: 'DEEMOON', price: 999, image: '/Images/DEEMOON.webp' },
      { name: 'VeBNoR', price: 499, image: '/Images/VeBNoR.webp' },
      { name: 'WOXEN', price: 699, image: '/Images/WOXEN.webp' },
      { name: 'NEW FASHION HR', price: 899, image: '/Images/NEW FASHION HR.webp' },
      { name: 'Roadster', price: 559, image: '/Images/Roadster.webp' },
      { name: 'ADRO', price: 599, image: '/Images/ADRO.webp' },
      { name: 'TRIPR', price: 799, image: '/Images/TRIPR.webp' },
      { name: 'Polyester Grey T-Shirt', price: 299, image: '/Images/Polyester Grey T-Shirt.webp' },
      { name: 'Ramraj Cotton', price: 399, image: '/Images/Ramraj Cotton.webp' }
    ],
    milk: [
      { name: 'Amul Full Cream Milk 1L', price: 65, image: '/Images/Amul Full Cream Milk 1L.webp' },
      { name: 'Mother Dairy Toned Milk 1L', price: 58, image: '/Images/Mother Dairy Toned Milk 1L.webp' },
      { name: 'Dairy Best', price: 70, image: 'public/Images/Dairy Best.webp' },
      { name: 'Nestlé Milk (Nespray)', price: 68, image: 'public/Images/Nestlé Milk (Nespray).webp' },
      { name: 'Britannia Milk', price: 52, image: '/Images/Britannia Milk.jpg' },
      { name: 'Vita Milk', price: 56, image: '/Images/Vita Milk.jpg' },
      { name: 'Sambhav Dairy', price: 65, image: '/Images/Sambhav Dairy.jpeg' },
      { name: 'Parag Milk Foods (Go)', price: 40, image: '/Images/Parag Milk Foods (Go).jpg' },
      { name: 'Delight Milk', price: 59, image: '/Images/Delight Milk.jpg' },
      { name: 'Keventer Agro (Keventer Milk)', price: 80, image: '/Images/Keventer Agro (Keventer Milk).jpg' }
    ],
    chocolate: [
    { name: 'Cadbury Dairy Milk', price: 50, image: 'public/Images/Dairy Milk Silk.jpg' },
    { name: 'Ferrero Rocher', price: 400, image: 'public/Images/Ferrero Rocher.jpg' },
    { name: 'Munch', price: 600, image: 'public/Images/Munch.jpg' },
    { name: 'Nestlé KitKat', price: 30, image: 'public/Images/KitKat.jpg' },
    { name: 'Perk', price: 10, image: 'public/Images/Perk.webp' },
    { name: 'Snickers', price: 45, image: 'public/Images/Snickers.jpg' },
    { name: '5 Star', price: 20, image: 'public/Images/5 Star.jpeg' },
    { name: 'Milky Bar', price: 90, image: 'public/Images/Milky Bar.webp' },
    { name: 'Toblerone', price: 250, image: 'public/Images/Toblerone.jpeg' },
    { name: 'Lind', price: 100, image: 'public/Images/Lindt.jpg' }
  ],
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cart.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(i => i.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(i => i.name !== action.payload.name);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(i => i.name !== action.payload.name);
    }
  }
});

//login details
  
// store.js

export const saveUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email && user.password === password);
};

export const updateUser = (updatedUser) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const index = users.findIndex((user) => user.email === updatedUser.email);
  if (index !== -1) {
    users[index] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
  }
};

export const getUserByEmail = (email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.email === email);
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem("currentUser");
};
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = productsSlice.actions;

const store = configureStore({
  reducer: {
    products: productsSlice.reducer
  }
});

export default store ;