import { motion } from 'framer-motion';

export default function Gallery() {
    // Mock images using placeholders
    const photos = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        url: `https://placehold.co/600x400/e8f5e9/52796f?text=Memory+${i + 1}`,
        caption: `Sweet Memory ${i + 1}`
    }));

    return (
        <div className="garden-container" style={{ padding: '4rem 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Gallery</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Snapshots of pure joy.</p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1.5rem'
            }}>
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        style={{
                            background: 'white',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                            <img
                                src={photo.url}
                                alt={photo.caption}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s'
                                }}
                            />
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500', color: '#444' }}>{photo.caption}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
