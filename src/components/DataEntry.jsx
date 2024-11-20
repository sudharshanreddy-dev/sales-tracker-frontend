// import { useState, useEffect } from 'react';
// import salesData from '../data/sales.json';
//
// const DataEntry = () => {
//     const [formData, setFormData] = useState({
//         date: '',
//         product: '',
//         quantity: '',
//         amount: '',
//     });
//
//     // Set the default date to today's date
//     useEffect(() => {
//         const today = new Date().toISOString().split('T')[0];
//         setFormData((prev) => ({ ...prev, date: today }));
//     }, []);
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // In a real app, you would save this to the JSON file
//         console.log('Saving:', formData);
//         // Reset form, keeping the date as today's date
//         setFormData({ date: formData.date, product: '', quantity: '', amount: '' });
//     };
//
//     return (
//         <div className="flex justify-center items-center min-h-full">
//             <div className="bg-[#242424] w-full max-w-4xl p-8 rounded-xl shadow-lg">
//                 <h1 className="text-2xl font-bold mb-6 text-center">Data Entry</h1>
//                 <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
//                     <div>
//                         <label className="block mb-2">Date</label>
//                         <input
//                             type="date"
//                             required
//                             value={formData.date}
//                             onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Product</label>
//                         <select
//                             required
//                             value={formData.product}
//                             onChange={(e) => setFormData({ ...formData, product: e.target.value })}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         >
//                             <option value="">Select Product</option>
//                             {salesData.products.map((product) => (
//                                 <option key={product} value={product}>
//                                     {product}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Quantity</label>
//                         <input
//                             type="number"
//                             required
//                             min="1"
//                             value={formData.quantity}
//                             onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Amount</label>
//                         <input
//                             type="number"
//                             required
//                             min="0.01"
//                             step="0.01"
//                             value={formData.amount}
//                             onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div className="col-span-2">
//                         <button
//                             type="submit"
//                             className="w-full bg-[#9ee637] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#8cd526] transition-colors"
//                         >
//                             Save Entry
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
//


//
// import { useState, useEffect } from 'react';
// import { fetchProducts, addSale } from '../services/api';
//
// const DataEntry = () => {
//     const [formData, setFormData] = useState({
//         date: '',
//         product: '',
//         quantity: '',
//         amount: '',
//     });
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
//
//     useEffect(() => {
//         const loadProducts = async () => {
//             try {
//                 const data = await fetchProducts();
//                 setProducts(data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         loadProducts();
//         const today = new Date().toISOString().split('T')[0];
//         setFormData((prev) => ({ ...prev, date: today }));
//     }, []);
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitStatus({ type: '', message: '' });
//
//         try {
//             await addSale(formData);
//             setSubmitStatus({
//                 type: 'success',
//                 message: 'Sale added successfully!'
//             });
//             setFormData({
//                 date: formData.date,
//                 product: '',
//                 quantity: '',
//                 amount: ''
//             });
//         } catch (err) {
//             setSubmitStatus({
//                 type: 'error',
//                 message: err.message
//             });
//         }
//     };
//
//     if (loading) return (
//         <div className="flex justify-center items-center h-screen">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9ee637]"></div>
//         </div>
//     );
//
//     if (error) return (
//         <div className="bg-red-500 text-white p-4 rounded-lg">
//             Error: {error}
//         </div>
//     );
//
//     return (
//         <div className="flex justify-center items-center min-h-full">
//             <div className="bg-[#242424] w-full max-w-4xl p-8 rounded-xl shadow-lg">
//                 <h1 className="text-2xl font-bold mb-6 text-center">Data Entry</h1>
//                 {submitStatus.message && (
//                     <div
//                         className={`mb-4 p-3 rounded ${
//                             submitStatus.type === 'success'
//                                 ? 'bg-green-600'
//                                 : 'bg-red-600'
//                         }`}
//                     >
//                         {submitStatus.message}
//                     </div>
//                 )}
//                 <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
//                     <div>
//                         <label className="block mb-2">Date</label>
//                         <input
//                             type="date"
//                             required
//                             value={formData.date}
//                             onChange={(e) => setFormData({...formData, date: e.target.value})}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Product</label>
//                         <select
//                             required
//                             value={formData.product}
//                             onChange={(e) => setFormData({...formData, product: e.target.value})}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         >
//                             <option value="">Select Product</option>
//                             {salesData.products.map((product) => (
//                                 <option key={product} value={product}>
//                                     {product}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Quantity</label>
//                         <input
//                             type="number"
//                             required
//                             min="1"
//                             value={formData.quantity}
//                             onChange={(e) => setFormData({...formData, quantity: e.target.value})}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div>
//                         <label className="block mb-2">Amount</label>
//                         <input
//                             type="number"
//                             required
//                             min="0.01"
//                             step="0.01"
//                             value={formData.amount}
//                             onChange={(e) => setFormData({...formData, amount: e.target.value})}
//                             className="w-full bg-[#333] rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-[#9ee637]"
//                         />
//                     </div>
//
//                     <div className="col-span-2">
//                         <button
//                             type="submit"
//                             className="w-full bg-[#9ee637] text-black font-bold py-2 px-4 rounded-lg hover:bg-[#8cd526] transition-colors"
//                         >
//                             Save Entry
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default DataEntry;

import { useState, useEffect } from 'react';
import { api } from '../services/api';

const DataEntry = () => {
    const [formData, setFormData] = useState({
        date: '',
        product: '',
        quantity: '',
        amount: '',
    });
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });
    const [showProductModal, setShowProductModal] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData((prev) => ({ ...prev, date: today }));
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.addSale(formData);
            setFormData({ date: formData.date, product: '', quantity: '', amount: '' });
        } catch (error) {
            console.error('Error saving sale:', error);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await api.addProduct(newProduct);
            setNewProduct({ name: '', price: '' });
            setShowProductModal(false);
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await api.deleteProduct(productId);
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Data Entry</h1>
                <button
                    onClick={() => setShowProductModal(true)}
                    className="bg-[#9ee637] text-black px-4 py-2 rounded-lg"
                >
                    Manage Products
                </button>
            </div>

            {/* Sales Entry Form */}
            <div className="bg-[#242424] p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    {/* Existing form fields remain the same */}
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-[#9ee637] text-black font-bold py-2 px-4 rounded-lg"
                        >
                            Save Entry
                        </button>
                    </div>
                </form>
            </div>

            {/* Product Management Modal */}
            {showProductModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#242424] p-6 rounded-xl w-96">
                        <h2 className="text-xl font-bold mb-4">Manage Products</h2>

                        {/* Add Product Form */}
                        <form onSubmit={handleAddProduct} className="space-y-4 mb-6">
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                className="w-full bg-[#333] rounded-lg px-4 py-2"
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                className="w-full bg-[#333] rounded-lg px-4 py-2"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#9ee637] text-black font-bold py-2 rounded-lg"
                            >
                                Add Product
                            </button>
                        </form>

                        {/* Product List */}
                        <div className="space-y-2">
                            {products.map((product) => (
                                <div key={product._id} className="flex justify-between items-center p-2 bg-[#333] rounded-lg">
                                    <span>{product.name} - ${product.price}</span>
                                    <button
                                        onClick={() => handleDeleteProduct(product._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowProductModal(false)}
                            className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataEntry;
