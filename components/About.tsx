import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { useState } from "react";
import Lottie from "react-lottie";
import { cn } from "../utils/cn";
import { BackgroundGradientAnimation } from "../components/ui/GradientBg";
import GridGlobe from "../components/ui/GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../components/ui/MagicButton";

const About = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Reset after 3 seconds
  };

  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      {showConfetti && (
        <Lottie
          options={{
            animationData: animationData,
            loop: false,
            autoplay: true,
          }}
          height={400}
          width={400}
        />
      )}
    </section>
  );
};

export default About;
