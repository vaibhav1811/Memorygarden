import { Link, useLocation } from 'react-router-dom';
import { Leaf, Image, Clock, Mail, Home as HomeIcon } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={{ padding: '1rem', background: '#ffffffcc', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="garden-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary-dark)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Leaf size={24} color="var(--color-primary)" />
                    Memory Garden
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <NavLink to="/" icon={<HomeIcon size={18} />} label="Home" active={isActive('/')} />
                    <NavLink to="/timeline" icon={<Clock size={18} />} label="Timeline" active={isActive('/timeline')} />
                    <NavLink to="/gallery" icon={<Image size={18} />} label="Gallery" active={isActive('/gallery')} />
                    <NavLink to="/messages" icon={<Mail size={18} />} label="Messages" active={isActive('/messages')} />
                </div>
            </div>
        </nav>
    );
}

function NavLink({ to, icon, label, active }: { to: string; icon: any; label: string; active: boolean }) {
    return (
        <Link to={to} style={{
            color: active ? 'var(--color-primary-dark)' : 'var(--color-text)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: active ? '600' : '400',
            transition: 'color 0.2s'
        }}>
            {icon}
            <span>{label}</span>
        </Link>
    );
}
