import React from "react";
import GameIcon from "../assets/GameIcon.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


type Props = {
  text: string;
  value: string;
};


const HomeAboutItem: React.FC<Props> = ({ text, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  const numericMatch = value.match(/[0-9.]+/);
  const numericPart = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = value.replace(/[0-9.]+/, "")
  

  return (
    <div ref={ref} className="flex items-center">
      <img className="mt-3" src={GameIcon} alt="" />
      <div className="text-accent">
        <p className="pb-2 font-bold text-5xl">
        {inView ? (
            <CountUp
              end={numericPart} 
              duration={1.5} 
              delay={0} 
              separator="," 
              decimals={value.includes(".") ? 1 : 0}
            />
          ) : (
            numericPart 
          )}
            {suffix}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeAboutItem;