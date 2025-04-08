
import DarkBlueButton from '../../shared/DarkBlueButton';
import { SelectedPage } from "../../shared/types";
import Coins from "../../assets/Coins.png"
import Man from "../../assets/Man.png"
import useMediaQuery from '../../hooks/UseMediaQuery';
import HomeAboutItem from '../../shared/HomeAboutItem';
import { motion } from 'framer-motion';

type Props = {
   
   setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage }: Props) => {
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

   return (
      <section id='home'>
         <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            className='flex  md:flex-row xs:flex-col'>
            {/*LEFT_SIDE*/}
            <motion.div initial='hidden'
               whileInView='visible'
               viewport={{ once: true, amount: 0.5 }}
               transition={{ duration: 0.5 }}
               variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
               }} className='xs:text-center md:text-left'>
               <h1 className='pt-[205px] pb-7 text-8xl xs:text-4xl sm:text-6xl  md:text-8xl font-bold  text-white'>Financial Solutions.</h1>
               <p className='text-white pb-7 font-medium text-sm'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
               <DarkBlueButton setSelectedPage={setSelectedPage}>Let’s Talk</DarkBlueButton>
            </motion.div>

            {/*RIGHT_SIDE*/}
            {isAboveMediumScreens ? (

               <motion.img
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 }
                  }}
                  src={Man}
                  alt="Man"
                  className="relative z-50 mt-[100px]  bg-cover bg-center"
                  style={{ backgroundImage: `url(${Coins})` }}
               />
            ) : (<div className=' overflow-visible  flex-wrap-reverse relative  bottom-[-70px] pt-28 flex flex-col items-center gap-6 '>
               <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 }
                  }}
                  className='bg-white rounded-xl min-w-sm sm:min-w-lg'>
                  <HomeAboutItem text='Years Experience' value='18' />
               </motion.div>
               <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 }
                  }} className='bg-white rounded-xl min-w-sm sm:min-w-lg'>
                  <HomeAboutItem text='Completed Projects' value='240+' />
               </motion.div>
               <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, x: 50 },
                     visible: { opacity: 1, x: 0 }
                  }} className='shadow-md  bg-white rounded-xl min-w-sm sm:min-w-lg'>
                  <HomeAboutItem text='Average rating' value='9.5 / 10' />
               </motion.div>
            </div>)}

         </motion.div>
      </section>
   )
}

export default Home;