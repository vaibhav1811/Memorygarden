import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';

export default function Messages() {
    const messages = [
        { id: 1, author: 'Aunt Sarah', content: 'Watching you grow has been the greatest joy of my life. Shine bright, little star!', role: 'Aunt' },
        { id: 2, author: 'Grandma', content: 'May your life be filled with love and laughter. I love you to the moon and back.', role: 'Grandma' },
        { id: 3, author: 'Uncle Mike', content: 'Can\'t wait to teach you how to maintain the garden! You are so special directly.', role: 'Uncle' },
        { id: 4, author: 'Dad', content: 'Every day with you is a new adventure. You are my greatest adventure.', role: 'Dad' },
    ];

    return (
        <div className="garden-container" style={{ padding: '4rem 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Love Notes</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Words from the heart, kept forever.</p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {messages.map((msg, index) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: '#fff',
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '250px'
                        }}
                    >
                        <Quote size={40} color="var(--color-secondary)" style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.5 }} />

                        <p style={{
                            fontFamily: 'var(--font-hand)',
                            fontSize: '1.5rem',
                            color: 'var(--color-text)',
                            lineHeight: '1.4',
                            marginBottom: '1.5rem'
                        }}>
                            "{msg.content}"
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f0f0f0', paddingTop: '1rem' }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'var(--color-bg)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Heart size={20} color="var(--color-rose)" />
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{msg.author}</h4>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{msg.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
