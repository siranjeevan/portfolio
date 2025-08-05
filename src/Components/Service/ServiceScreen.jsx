import ServicesPageLayout from "./ServicePageLayout";
import ServicesCard from "./ServicesCard";
import ServicesCardGroup from "./ServiceCardGroup";
function ServiceScreen(){
    return(
        <>
            <ServicesPageLayout>
                <ServicesCardGroup>
                    <ServicesCard path="/Flutter.png" />
                    <ServicesCard path="/UIUX.png" />
                    <ServicesCard path="/Fire.png" />
                    <ServicesCard path="/Fire.png" />
                    <ServicesCard path="/Flutter.png" />
                    <ServicesCard path="/UIUX.png" />
                </ServicesCardGroup>
            </ServicesPageLayout>
        </>
    )


}
export default ServiceScreen;