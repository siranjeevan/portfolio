import ServicesPageLayout from "./ServicePageLayout";
import ServicesCard from "./ServicesCard";
import ServicesCardGroup from "./ServiceCardGroup";
function ServiceScreen(){
    return(
        <>
            <ServicesPageLayout>
                <ServicesCardGroup>
                    <ServicesCard path="/Flutter.png" ServiceTitle="App Development" ServiceText= "Crafting high-performance,
                    scalable apps with a single codebase for Android, iOS, and Web." />
                    <ServicesCard path="/UIUX.png" ServiceTitle="UI / UX" ServiceText= " Designing pixel-perfect and intuitive
                     user interfaces that enhance engagement and usability."/>
                    <ServicesCard path="/Fire.png" ServiceTitle="Firebase" ServiceText="Connecting your app to powerful backend
                     services like Firebase, REST APIs, and cloud storage." />
                    <ServicesCard path="/Performance2.png" ServiceTitle="Performance Optimization"  ServiceText="Ensuring smooth
                     animations, fast load times, and optimized performance on all devices."/>
                    <ServicesCard path="/Maintain2.png" ServiceTitle="Maintenance & Support" ServiceText="Providing ongoing updates,
                     security patches, and reliable support after launch."/>
                </ServicesCardGroup>
                <hr className="hr-with-dot" />
            </ServicesPageLayout>
        </>
    )


}
export default ServiceScreen;