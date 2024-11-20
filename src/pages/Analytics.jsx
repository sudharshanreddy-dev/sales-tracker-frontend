import { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis } from 'recharts';
import axios from '../services/api';

const Analytics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAnalyticsData();
    }, []);

    const fetchAnalyticsData = async () => {
        const response = await axios.get('/analytics');
        setData(response.data);
    };

    return (
        <div className="p-6">
            <h1 className="text-primary text-2xl font-bold mb-6">Analytics</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded">
                    <PieChart width={400} height={400}>
                        <Pie data={data.products} dataKey="sales" nameKey="product" fill="#64FF00" />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="bg-secondary p-4 rounded">
                    <LineChart width={400} height={400} data={data.sales}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Line type="monotone" dataKey="amount" stroke="#64FF00" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
