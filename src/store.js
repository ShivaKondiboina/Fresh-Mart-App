// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { name: 'Dal Rice', price: 150, image: '/images/dal rice.jpg' },
      { name: 'Veg Biryani', price: 250, image: '/images/veg biryani.jpg' },
      { name: 'Veg Noodles', price: 100, image: '/images/veg noodiles.jpeg' },
      { name: 'Veg Salad', price: 350, image: '/images/veg salad.jpeg' },
      { name: 'Veg Sandwich', price: 70, image: '/images/veg sandwitch.jpeg' },
      { name: 'Paneer Butter Masala', price: 280, image: '/images/paneer buttter masala.jpeg' },
      { name: 'Chole Bhature', price: 180, image: '/images/chola bhature.jpeg' },
      { name: 'Masala Dosa', price: 120, image: '/images/masala dosa.jpeg' },
      { name: 'Aloo Paratha', price: 90, image: '/images/alu paratha.jpeg' },
      { name: 'Mushroom Curry', price: 200, image: '/images/mashroom curry.jpeg' }
    ],
    nonVeg: [
      { name: 'Chicken Biryani', price: 300, image: '/images/Chicken-Biryani-Recipe-01-1.jpg' },
      { name: 'Butter Chicken', price: 320, image: '/images/butter chicken.jpeg' },
      { name: 'Egg Curry', price: 180, image: '/images/egg curry.jpeg' },
      { name: 'Mutton Rogan Josh', price: 400, image: '/images/mutton roghan josh.jpeg' },
      { name: 'Fish Fry', price: 250, image: '/images/fish fry.jpeg' },
      { name: 'Prawn Curry', price: 350, image: '/images/prawns curry.jpeg' },
      { name: 'Chicken 65', price: 220, image: '/images/chicken 65.jpeg' },
      { name: 'Tandoori Chicken', price: 300, image: '/images/tandoori chickn.jpeg' },
      { name: 'Chicken Noodles', price: 180, image: '/images/chicken noodiles.jpeg' },
      { name: 'Egg Fried Rice', price: 160, image: '/images/egg fried rice.jpeg' }
    ],
    womenDress: [
      { name: "Anarkali Suit Sets", price: 1200, image: "/images/anarkali.jpeg" },
      { name: "Sarees", price: 1800, image: "/images/sarees.jpeg" },
      { name: "Sharara Sets", price: 20000, image: "" },
      { name: "Co-ord Sets", price: 2500, image: "/images/co-ord sets.jpeg" },
      { name: "Lehenga Sets", price: 1000, image: "/images/lehenga.jpeg" },
      { name: "Patiala Sets", price: 1200, image: "/images/patial.jpeg" },
      { name: "Kurta Sets", price: 3400, image: "/images/kurta sets.jpeg" },
      { name: "Kaftans", price: 17000, image: "/images/kaftan.jpeg" },
      { name: "Pre-stitched Saree", price: 2300, image: "/images/sarees.jpeg" },
      { name: "Jumpsuit", price: 19000, image: "/images/jump suits.jpeg" }
    ],
    menDress: [
      { name: 'DEEMOON', price: 999, image: '/images/deemoon.jpeg' },
      { name: 'VeBNoR', price: 499, image: '/images/vebnoor.jpeg' },
      { name: 'WOXEN', price: 699, image: '/images/woxen.jpeg' },
      { name: 'NEW FASHION HR', price: 899, image: '/images/new fashion hr.jpg' },
      { name: 'Roadster', price: 559, image: '/images/roadster.jpeg' },
      { name: 'ADRO', price: 599, image: '/images/adro.jpeg' },
      { name: 'TRIPR', price: 799, image: 'public/images/mendress.jpeg' },
      { name: 'Polyester Grey T-Shirt', price: 299, image: '/images/grey t shirt.jpeg' },
      { name: 'Ramraj Cotton', price: 399, image: '/images/ramraj.jpeg' }
    ],
    milk: [
      { name: 'Amul Full Cream Milk 1L', price: 65, image: '/images/milk.jpeg' },
      { name: 'Mother Dairy Toned Milk 1L', price: 58, image: '/images/toned milk.jpeg' },
      { name: 'Dairy Best', price: 70, image: '/images/dairy best1.jpeg' },
      { name: 'Nestlé Milk (Nespray)', price: 68, image: '/images/nestle millk.jpeg' },
      { name: 'Britannia Milk', price: 52, image: '/images/britania milk.jpeg' },
      { name: 'Vita Milk', price: 56, image: '/images/vita milk.jpeg' },
      { name: 'Sambhav Dairy', price: 65, image: '/images/sambav dairy.jpeg' },
      { name: 'Parag Milk Foods (Go)', price: 40, image: '/images/parag milk.jpeg' },
      { name: 'Delight Milk', price: 59, image: '/images/delight milk.jpeg' },
      { name: 'Keventer Agro (Keventer Milk)', price: 80, image: '/images/agro milk.jpeg' }
    ],
    chocolate: [
    { name: 'Cadbury Dairy Milk', price: 50, image: '/images/cadburry chacolate.jpeg' },
    { name: 'Ferrero Rocher', price: 400, image: '/images/ferroro rocher.jpeg' },
    { name: 'Munch', price: 600, image: '/images/munch chacolate.jpeg' },
    { name: 'Nestlé KitKat', price: 30, image: '/images/nestle kitkat.jpeg' },
    { name: 'Perk', price: 10, image: '/images/perk.jpeg' },
    { name: 'Snickers', price: 45, image: '/images/tandoori chickn.jpeg' },
    { name: '5 Star', price: 20, image: '/images/chacolate.jpeg' },
    { name: 'Milky Bar', price: 90, image: '/images/mikbar.jpeg' },
    { name: 'Toblerone', price: 250, image: '/images/vebnoor.jpeg' },
    { name: 'Lind', price: 100, image: '/images/lind.jpeg' }
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