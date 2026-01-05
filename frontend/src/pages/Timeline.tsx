import TimelineEvent from '../components/TimelineEvent';

export default function Timeline() {
    const events = [
        {
            id: 1,
            date: 'May 15, 2024',
            title: 'Welcome to the World',
            description: 'The day our little sunshine arrived, bringing joy to everyone!',
            side: 'left' as const
        },
        {
            id: 2,
            date: 'Aug 20, 2024',
            title: 'First Smile',
            description: 'Caught on camera! The sweetest little grin that melted our hearts.',
            side: 'right' as const
        },
        {
            id: 3,
            date: 'Dec 25, 2024',
            title: 'First Christmas',
            description: 'Surrounded by family, lights, and so many presents.',
            side: 'left' as const
        },
        {
            id: 4,
            date: 'Jan 10, 2025',
            title: 'First Steps',
            description: 'Wobbly but determined! She walked across the living room today.',
            side: 'right' as const
        }
    ];

    return (
        <div className="garden-container" style={{ padding: '4rem 20px', maxWidth: '1000px' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Growing Up</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>Every milestone is a treasure.</p>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Central Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '4px',
                    height: '100%',
                    background: 'var(--color-secondary)',
                    borderRadius: '2px'
                }} />

                {events.map((event, index) => (
                    <TimelineEvent
                        key={event.id}
                        index={index}
                        date={event.date}
                        title={event.title}
                        description={event.description}
                        side={event.side}
                    />
                ))}
            </div>
        </div>
    );
}
