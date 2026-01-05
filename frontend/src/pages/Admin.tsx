import { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';

export default function Admin() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState<'timeline' | 'gallery'>('timeline');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'love') setIsAuthenticated(true);
        else alert('Wrong password! Hint: What is this garden made of?');
    };

    if (!isAuthenticated) {
        return (
            <div className="garden-container" style={{ padding: '6rem 20px', textAlign: 'center', maxWidth: '400px' }}>
                <h2 style={{ marginBottom: '2rem' }}>Garden Keeper Access</h2>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="password"
                        placeholder="Enter the magic word..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                    />
                    <button type="submit" className="btn">Open Gate</button>
                </form>
            </div>
        );
    }

    return (
        <div className="garden-container" style={{ padding: '4rem 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h1>Admin Dashboard</h1>
                <button className="btn" style={{ background: '#eee', color: '#333' }} onClick={() => setIsAuthenticated(false)}>Log Out</button>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1px' }}>
                <TabButton label="Timeline Events" active={activeTab === 'timeline'} onClick={() => setActiveTab('timeline')} />
                <TabButton label="Gallery Photos" active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} />
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                {activeTab === 'timeline' ? (
                    <div>
                        <h3>Add New Milestone</h3>
                        <form style={{ display: 'grid', gap: '1.5rem', marginTop: '1.5rem' }}>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label>Date</label>
                                <input type="date" style={inputStyle} />
                            </div>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label>Title</label>
                                <input type="text" placeholder="e.g., First Steps" style={inputStyle} />
                            </div>
                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                <label>Description</label>
                                <textarea rows={4} placeholder="What happened?" style={inputStyle} />
                            </div>
                            <button type="button" className="btn" style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Plus size={18} /> Add Event
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h3>Upload New Photo</h3>
                        <div style={{ border: '2px dashed #ddd', padding: '3rem', borderRadius: 'var(--radius-md)', textAlign: 'center', marginTop: '1.5rem', cursor: 'pointer' }}>
                            <p style={{ color: '#666' }}>Drag and drop or click to upload</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '0.8rem 1.5rem',
                background: 'none',
                border: 'none',
                borderBottom: active ? '3px solid var(--color-primary)' : '3px solid transparent',
                color: active ? 'var(--color-primary-dark)' : '#999',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem'
            }}
        >
            {label}
        </button>
    );
}

const inputStyle = {
    padding: '0.8rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid #ddd',
    fontSize: '1rem',
    fontFamily: 'inherit'
};
