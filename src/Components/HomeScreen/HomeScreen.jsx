import Content from "./Content.jsx"
import HeaderScreen from "../Header/main/HeaderScreen.jsx";
import ImageLayout from "./ImageLayout.jsx";
import ButtonNavigate from "./ButtonNavigate.jsx";
import ContentLayout from "./ContentLayout.jsx";
import SocialMediaIcon from "./SocialMediaIcon.jsx";
import DownButton from "../DownButton.jsx/DownButton.jsx";
import HomeScreenLayout from "./HomeScreenLayout.jsx";
import About from '../AboutScreen/AboutScreen.jsx';
import ServiceScreen from "../Service/ServiceScreen.jsx";
import ProJectsScreen from "../Projects/ProjectScreen.jsx";
import TestimonialsScreen from "../Testimonials/TestimonialsScreen.jsx";
import MentorScreen from "../Mentor/MentorScreen.jsx";

function HomeScreen()
{
    return(
        <>
            <HomeScreenLayout>
                <HeaderScreen />
                <div className="flex flex-row">
                <div className="flex flex-col">
                    <ContentLayout>
                        <Content />
                        <ButtonNavigate />
                        <SocialMediaIcon />
                    </ContentLayout>
                </div>
                <ImageLayout />
                </div>
                <DownButton />
            </HomeScreenLayout>
            <About />
            <ServiceScreen />
            <ProJectsScreen />
            <TestimonialsScreen />
            <MentorScreen />
        {/* </div> */}
        </>
    );
}
export default HomeScreen;