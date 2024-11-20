import { useState, useEffect } from 'react';
import axios from '../services/api';
import DashboardStats from '../components/DashboardStats';
import SalesTable from '../components/SalesTable';

const Dashboard = () => {
    const [sales, setSales] = useState([]);
    const [filter, setFilter] = useState('daily'); // daily, monthly, yearly

    useEffect(() => {
        fetchSalesData();
    }, [filter]);

    const fetchSalesData = async () => {
        const response = await axios.get(`/sales?filter=${filter}`);
        setSales(response.data);
    };

    return (
        <div className="p-6">
            <DashboardStats />
            <div className="my-4 flex gap-4">
                {['daily', 'monthly', 'yearly'].map((type) => (
                    <button
                        key={type}
                        className={`py-2 px-4 ${
                            filter === type ? 'bg-primary text-dark' : 'bg-secondary text-light'
                        }`}
                        onClick={() => setFilter(type)}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
            <SalesTable sales={sales} />
        </div>
    );
};

export default Dashboard;
