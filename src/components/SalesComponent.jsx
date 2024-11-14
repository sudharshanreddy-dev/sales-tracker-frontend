import React, { useState } from 'react';
import { Plus, DollarSign, ArrowUpCircle, ArrowDownCircle, TrendingUp } from 'lucide-react';

const SalesComponent = () => {
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSales([...sales, { ...formData, id: Date.now() }]);
    setFormData({ date: '', amount: '', category: '', description: '' });
  };

  const totalSales = sales.reduce((sum, sale) => sum + Number(sale.amount), 0);
  const averageSale = sales.length ? totalSales / sales.length : 0;

  return (
    <div>
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-100">Sales Dashboard</h1>
        <p className="text-gray-400 mt-2">Track and manage your sales data</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Sales</p>
              <h3 className="text-2xl font-bold text-gray-100 mt-1">
                ${totalSales.toLocaleString()}
              </h3>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-xl">
              <DollarSign size={24} className="text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Average Sale</p>
              <h3 className="text-2xl font-bold text-gray-100 mt-1">
                ${averageSale.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </h3>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-xl">
              <TrendingUp size={24} className="text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Entries</p>
              <h3 className="text-2xl font-bold text-gray-100 mt-1">
                {sales.length}
              </h3>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-xl">
              <ArrowUpCircle size={24} className="text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-gray-800/30 rounded-2xl p-6 mb-8 border border-gray-700/50">
        <h2 className="text-xl font-bold text-gray-100 mb-4">Add New Sale</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Amount
              </label>
              <input
                type="number"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter amount"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Category
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">Select category</option>
                <option value="products">Products</option>
                <option value="services">Services</option>
                <option value="subscriptions">Subscriptions</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter description"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-medium transition-colors"
          >
            <Plus size={20} className="mr-2" />
            Add Sale
          </button>
        </form>
      </div>

      {/* Sales Table */}
      <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-100 mb-4">Recent Sales</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {sales.map((sale) => (
                <tr key={sale.id}>
                  <td className="px-6 py-4 text-sm text-gray-300">{sale.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">${Number(sale.amount).toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 capitalize">{sale.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-300">{sale.description}</td>
                </tr>
              ))}
              {sales.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-400">
                    No sales data yet. Add your first sale above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesComponent;