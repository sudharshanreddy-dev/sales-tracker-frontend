const DataEntry = () => {
    const [form, setForm] = useState({ product: '', quantity: 0, discount: 0 });
    const [entries, setEntries] = useState([]);

    const handleAdd = () => {
        setEntries([...entries, form]);
        setForm({ product: '', quantity: 0, discount: 0 });
    };

    const handleDelete = (index) => {
        const updated = entries.filter((_, i) => i !== index);
        setEntries(updated);
    };

    return (
        <div className="p-6">
            <h1 className="text-primary text-2xl font-bold mb-6">Data Entry</h1>
            <div className="grid grid-cols-3 gap-4">
                {/* Add dynamic form fields */}
                <input
                    value={form.product}
                    placeholder="Product"
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                />
                <input
                    value={form.quantity}
                    placeholder="Quantity"
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
                <button onClick={handleAdd} className="bg-primary text-dark px-4 py-2">
                    Add
                </button>
            </div>
        </div>
    );
};
