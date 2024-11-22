import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = {
  getMenu: () => axios.get(`${API_URL}/menu`),
  getCategories: () => axios.get(`${API_URL}/categories`),
  getCart: () => axios.get(`${API_URL}/cart`),
  addToCart: (item: any) => axios.post(`${API_URL}/cart`, item),
  updateCart: (cart: any[]) => axios.put(`${API_URL}/cart`, cart),
  clearCart: () => axios.delete(`${API_URL}/cart`),
  placeOrder: (order: any) => axios.post(`${API_URL}/orders`, order),
};
