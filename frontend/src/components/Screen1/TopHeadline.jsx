import axios from "axios";
import { memo, useEffect, useState } from "react";
import { base_URL } from "../../utills/baseUrl";
import { motion } from "framer-motion";
import logo from "../../assets/MMC logo.png";

const TopHeadline = () => {

    const [headlinesData, setHeadlinesData] = useState([]);


    // get headlines
    useEffect(() => {

        const foo = async () => {
            try {
                const res = await axios.get(`${base_URL}/api/headline/manage`);
                // console.log(res, "res of get headlines");
                setHeadlinesData(res.data.data[0]);
            }
            catch (err) {
                // console.log(err, "error in get headlines");
                // toast.error(err?.message)
            }
        }
        foo()

    }, [])
    //[@media(min-width:3200px)]:gap-16 [@media(min-width:4400px)]:gap-20

    return (
        <div className="absolute top-0 w-full bg-gray-800 py-2 [@media(min-width:2200px)_and_(min-height:1200px)]:py-4 [@media(min-width:3200px)_and_(min-height:2000px)]:py-8 overflow-hidden z-20 border-b border-gray-300">
            <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className=" text-lg [@media(min-width:3200px)_and_(max-height:2000px)]:text-2xl  [@media(min-width:3200px)_and_(min-height:2000px)]:text-4xl font-semibold whitespace-nowrap text-center flex items-center [@media(min-width:4000px)]:gap-[660px] [@media(min-width:3400px)]:gap-[610px] [@media(min-width:3000px)]:gap-[410px] [@media(min-width:2500px)]:gap-[310px] [@media(min-width:2000px)]:gap-[210px] [@media(min-width:1700px)]:gap-[150px] gap-[50px]  text-white/60"
            >
                <div className="flex items-center gap-4 [@media(min-width:3200px)]:gap-8 [@media(min-width:4400px)]:gap-12">
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-[#00b0ff]/30">
                        <img src={logo} alt="logo" className="h-8 min-[2000px]:h-12 [@media(min-width:3000px)]:h-14  [@media(min-width:4400px)]:h-20 w-8 min-[2000px]:w-12 [@media(min-width:3000px)]:w-14 [@media(min-width:4400px)]:w-20 object-contain" />
                    </div>

                    <h1 className="text-2xl font-bold min-[2000px]:text-3xl [@media(min-width:3200px)]:text-4xl  [@media(min-width:4400px)]:text-5xl text-white tracking-wide drop-shadow">
                        Memon Medical Complex
                    </h1>

                </div>
                🌟 {headlinesData?.UPPERHEADLINE}🌟
            </motion.div>
        </div>
    )
}

export default memo(TopHeadline)