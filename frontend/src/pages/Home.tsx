import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="garden-container" style={{ padding: '4rem 0' }}>
            <header style={{ textAlign: 'center', padding: '4rem 0' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'var(--color-secondary)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>
                        Welcome to our little world 🌸
                    </span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>
                        Growing with <span style={{ color: 'var(--color-rose)' }}>Love</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        A digital garden collecting moments, memories, and milestones for our precious little one.
                    </p>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/timeline" className="btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            See the Journey <ArrowRight size={18} />
                        </Link>
                        <Link to="/messages" className="btn" style={{ textDecoration: 'none', background: 'white', color: 'var(--color-primary-dark)', border: '2px solid var(--color-secondary)' }}>
                            Leave a Note
                        </Link>
                    </div>
                </motion.div>
            </header>

            {/* Placeholder for a featured image or illustration */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    width: '100%',
                    height: '400px',
                    background: 'linear-gradient(180deg, var(--color-secondary) 0%, rgba(255,255,255,0) 100%)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary-dark)',
                    fontSize: '1.5rem',
                    fontWeight: '600'
                }}
            >
                [Featured Photo of Niece Here]
            </motion.div>
        </div>
    );
}
