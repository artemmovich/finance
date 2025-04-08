import { useState } from "react";
import Play from "../assets/Play.svg";
import VideoBG from "../assets/VideoBG.jpg"
import { motion } from "framer-motion";
const VideoPlayer: React.FC = () => {
   const [isPlaying, setIsPlaying] = useState(false);
   const videoId = "Ku7Bat-6aYE"; // ID відео

   return (
      <motion.div initial='hidden'
         whileInView='visible'
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
         }} className="relative w-full max-w-2xl mx-auto">
         {!isPlaying ? (
            <div
               className="relative cursor-pointer"
               onClick={() => setIsPlaying(true)}
            >

               <img
                  src={VideoBG}
                  alt="YouTube Preview"
                  className="w-full rounded-lg"
               />

               <button className=" absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition rounded-lg">
                  <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                     <img src={Play} alt="Play" className="w-10 h-15 drop-shadow-lg" />
                  </div>
               </button>
            </div>
         ) : (
            <iframe
               className="w-full h-84  rounded-lg"
               src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
               allow="autoplay; encrypted-media"
               allowFullScreen
            ></iframe>
         )}
      </motion.div>
   );
};

export default VideoPlayer;
