import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';

interface TimelineEventProps {
    date: string;
    title: string;
    description: string;
    image?: string;
    side: 'left' | 'right';
    index: number;
}

export default function TimelineEvent({ date, title, description, image, side, index }: TimelineEventProps) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: side === 'left' ? 'flex-end' : 'flex-start',
            position: 'relative',
            width: '50%',
            marginLeft: side === 'left' ? '0' : '50%',
            padding: '0 40px',
            marginBottom: '60px'
        }}>

            {/* Center Line Dot */}
            <div style={{
                position: 'absolute',
                [side === 'left' ? 'right' : 'left']: '-20px',
                top: '20px',
                width: '40px',
                height: '40px',
                background: 'var(--color-primary)',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
            }}>
                <Star size={20} color="white" fill="white" />
            </div>

            <motion.div
                initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    maxWidth: '400px',
                    borderLeft: side === 'right' ? '4px solid var(--color-primary)' : 'none',
                    borderRight: side === 'left' ? '4px solid var(--color-primary)' : 'none'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)', opacity: 0.7, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <Calendar size={16} />
                    <span>{date}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>{title}</h3>
                <p style={{ lineHeight: '1.6', color: '#555' }}>{description}</p>

                {image && (
                    <div style={{ marginTop: '1rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                        <img src={image} alt={title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                )}
            </motion.div>
        </div>
    );
}
