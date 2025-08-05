import ProjectsScreenLayout from "./ProjectsScreenLayout"
import ProjectsCardGroup from "./ProjectScreenCardGroup";
import ProjectsCard from "./ProjectCard";

function ProJectsScreen(){
    return(
        <>
            <ProjectsScreenLayout>
                <ProjectsCardGroup>
                    <ProjectsCard
                        path="/project1.png"
                        ProjectTitle="Project One"
                        ProjectText="A comprehensive web application that streamlines project management and collaboration."
                    />
                    <ProjectsCard
                        path="/project2.png"
                        ProjectTitle="Project Two" 
                        ProjectText="An innovative e-commerce platform that enhances user experience and boosts sales."
                    />
                    <ProjectsCard
                        path="/project3.png"
                        ProjectTitle="Project Three"
                        ProjectText="A cutting-edge mobile app that connects users with local services seamlessly."
                    />
                    <ProjectsCard
                        path="/project4.png"
                        ProjectTitle="Project Four"
                        ProjectText="A dynamic portfolio website that showcases creative works and professional achievements."
                    />
                </ProjectsCardGroup>
                <hr className="hr-with-dot" />
            </ProjectsScreenLayout>
        </>
    )
}
export default ProJectsScreen;