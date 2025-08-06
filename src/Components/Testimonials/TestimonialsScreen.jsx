import Layout from './Layout.jsx';
import TestimonialsCardsGroup from './TestimonialsCardsGroup.jsx';
import TestimonialsCards from './TestimonialCard.jsx';

function TestimonialsScreen() {
    return (
        <>
            <Layout>
                <TestimonialsCardsGroup>
                    <TestimonialsCards path="/GirlLogo.png" testimonialText="Machan is a talented Flutter developer. The app he delivered exceeded our expectations." authorName="John Doe" />
                    <TestimonialsCards path="/GirlLogo.png" testimonialText="Machan delivered our Flutter app ahead of schedule and with amazing quality. He’s professional, friendly, and super skilled. Definitely recommending him to others.." authorName="Jane Smith" />
                    <TestimonialsCards path="/GirlLogo.png" testimonialText="Highly recommend to everyone!" authorName="Alice Johnson" />
                </TestimonialsCardsGroup>
                <hr className="hr-with-dot" />
            </Layout>
        </>
    );
}
export default TestimonialsScreen;