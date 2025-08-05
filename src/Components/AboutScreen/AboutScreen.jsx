import Image from "./Image";
import Layout from "./AboutScreenLayout";
import Content from "./Content";
import Skills from "./Skills";
import DownButton from "../DownButton.jsx/DownButton";
function AboutScreen() {
    return (
        <>
            <Layout>
                <div className="flex flex-row text-white">
                    <Image />
                    <div className="flex flex-col -mt-40">
                        <Content />
                        <Skills />
                    </div>
                </div>
                <DownButton />
                <hr className="hr-with-dot" />
            </Layout>
        </>
    );
}
export default AboutScreen;