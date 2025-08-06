import { FaInstagram, FaGithub, FaLinkedin , FaFacebook } from "react-icons/fa";

function MentorCard({ path, MentorName = "Mentor Name", MentorJob = "Mentor Job" }) {
  return (
    <div className="flex w-65 h-70 flex-col items-center justify-center bg-[rgba(226,225,226,0.88)] rounded-lg shadow-lg snap-center duration-300"> 
    <div className="flex flex-row">
        <img src={path} className="-mt-5 w-54 h-auto object-cover rounded-full ml-0 " alt={MentorName} />
        <div className="flex flex-col items-center justify-center text-[30px] gap-2 -ml-2 -mt-30">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white bg-[#a12eab]  p-1 rounded-full hover:text-pink-300 transition duration-300 mx-1" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white bg-[#a12eab]  p-1 rounded-full hover:text-pink-300 transition duration-300 mx-1" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white bg-[#a12eab]  p-1 rounded-full hover:text-pink-300 transition duration-300 mx-1" />
                </a>
        </div>
    </div>
      <div className="flex flex-col items-center w-full h-20 rounded-b-lg -mt-6 bg-[#ad48b2]">
        <h2 className="text-white text-[17px] font-semibold mt-1">{MentorName}</h2>
        <h3 className="text-white font-light -mt-1">{MentorJob}</h3>
      </div>
    </div>
  );
}
export default MentorCard;
