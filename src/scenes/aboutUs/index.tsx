import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/UseMediaQuery";
import BlueButton from "../../shared/BlueButton";
import HomeAboutItem from "../../shared/HomeAboutItem";
import { SelectedPage } from "../../shared/types";
import VideoPlayer from "../../shared/VideoPlayer";
import { section } from "framer-motion/client";
type Props = {

   setSelectedPage: (value: SelectedPage) => void;
}


const AboutUs = ({ setSelectedPage }: Props) => {
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
   return (
      <section id="aboutus">
         <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)} className="flex-col-reverse md:flex-row items-end gap-6 pt-39 pb-40 flex">
            {/*LEFT_SIDE*/}
            <motion.div initial='hidden'
               whileInView='visible'
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }} className="basis-lg">
               <h3 className="text-center md:text-left font-semibold text-2xl text-accent ">Our firm</h3>
               {isAboveMediumScreens ? (<h2 className="text-center md:text-left pt-7 pb-8 text-black font-bold text-5xl">We are Agile. Constantly
                  Focused on Growth and
                  Being Better</h2>) : (<h2 className="text-center md:text-left pt-7 pb-8 text-black font-bold text-[22px]">We are Agile.Constantly Focused
                  </h2>)}
               <p className="pb-4 text-gray-400 font-medium text-xs md:text-sm ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
               <p className="pb-4 text-gray-400 font-medium text-xs md:text-sm ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
               <BlueButton text={"Read About Us"} />
            </motion.div>
            {/*RIGHT_SIDE*/}
            {isAboveMediumScreens ? (
               <motion.div initial='hidden'
               whileInView='visible'
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 }
               }} className=" flex gap-7">
                  <div className="relative top-12">
                     <div className="bg-purple-200 mb-7 pt-8 pl-12 w-64 h-40 rounded-full rounded-tr-none border-2 border-purple-200">
                        <HomeAboutItem showIcon={false} text="Years Experience" value="18" />
                     </div>
                     <div className="bg-purple-200 pt-8 pl-12 w-64 h-40 rounded-full rounded-tr-none border-2 border-purple-200">
                        <HomeAboutItem showIcon={false} text="Average rating" value="9.5/10" />
                     </div>
                  </div>
                  <div className="">
                     <div className="bg-purple-200 mb-7 pt-8 pl-12 w-64 h-40 rounded-full rounded-bl-none border-2 border-purple-200">
                        <HomeAboutItem showIcon={false} text="Completed Projects" value="240+" />
                     </div>
                     <div className=" bg-purple-200 pt-8 pl-12 w-64 h-40 rounded-full rounded-bl-none border-2 border-purple-200">
                        <HomeAboutItem showIcon={false} text="Served" value="150+" />
                     </div>
                  </div>
               </motion.div>) : (
                  
               <VideoPlayer />
            )}
         </motion.div>
      </section>
   )
}

export default AboutUs