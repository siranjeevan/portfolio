import { FaInstagram, FaGithub, FaLinkedin , FaFacebook } from "react-icons/fa";

function SocialMediaIcon(){
    return(
        <>
        <div className="flex  items-center flex-row mt-5 
            text-[30px]
            sm:text-[35px] sm:gap-3
            md:text-[40px] md:gap-5
            lg:text-[45px] lg:gap-5
            xl:text-5xl xl:gap-6 
            2xl:text-[65px] 2xl:gap-10
            ">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#a12eab] bg-white p-2 rounded-full hover:text-pink-300 transition duration-300" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-[#a12eab]  bg-white p-2 rounded-full   hover:text-gray-400 transition duration-300 ml-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#a12eab]  bg-white p-2 rounded-full hover:text-blue-300 transition duration-300 ml-5" />
            </a>
            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-[#a12eab]  bg-white p-2 rounded-full hover:text-blue-400 transition duration-300 ml-5 " />
            </a>
        </div>

        </>
    );
}
export default SocialMediaIcon;