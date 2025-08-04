import { FaFlutter , FaDartLang  } from "react-icons/fa6";
import { TbFileTypeHtml , TbFileTypeCss , TbDatabaseCog } from "react-icons/tb";
import { FcPhoneAndroid } from "react-icons/fc";
function Skills(){
    return(
        <>
            <div className="flex flex-col -mt-40">
                <h1 className="text-[30px] font-bold">Skill</h1>
                    <div className="flex flex-row items-center text-[45px] mt-5">
                        <FaFlutter className="text-white p-1.5 rounded-[10px] bg-[#a12eab]  hover:text-pink-300 transition duration-300" />
                        <FaDartLang className="text-white p-1.5 rounded-[10px] bg-[#a12eab] ml-5 hover:text-pink-300 transition duration-300" />
                        <TbFileTypeHtml className="text-white p-1.5 rounded-[10px] bg-[#a12eab] ml-5 hover:text-pink-300 transition duration-300" />
                        <TbFileTypeCss className="text-white p-1.5 rounded-[10px] bg-[#a12eab] ml-5 hover:text-pink-300 transition duration-300" />
                        <TbDatabaseCog className="text-white p-1.5 rounded-[10px] bg-[#a12eab] ml-5 hover:text-pink-300 transition duration-300" />
                        <FcPhoneAndroid className="text-white p-1.5 rounded-[10px] bg-[#a12eab] ml-5 hover:text-pink-300 transition duration-300" />
                    </div>
            </div>
        </>
    )
}
export default Skills;