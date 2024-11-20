// import axios from 'axios';
//
// const api = axios.create({
//     baseURL: 'http://localhost:5000/api',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });
//
// // Add response interceptor for error handling
// api.interceptors.response.use(
//     response => response.data,
//     error => {
//         const message = error.response?.data?.message || error.message;
//         return Promise.reject(new Error(message));
//     }
// );
//
// export const fetchSales = () => api.get('/sales');
// export const addSale = (saleData) => api.post('/sales', saleData);
// export const fetchProducts = () => api.get('/products');

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
    // Sales endpoints
    getSales: () => axios.get(`${API_URL}/sales`),
    addSale: (data) => axios.post(`${API_URL}/sales`, data),
    updateSale: (id, data) => axios.put(`${API_URL}/sales/${id}`, data),
    deleteSale: (id) => axios.delete(`${API_URL}/sales/${id}`),

    // Products endpoints
    getProducts: () => axios.get(`${API_URL}/products`),
    addProduct: (data) => axios.post(`${API_URL}/products`, data),
    deleteProduct: (id) => axios.delete(`${API_URL}/products/${id}`),
};
