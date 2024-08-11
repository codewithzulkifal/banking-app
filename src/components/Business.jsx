import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ img, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-800 `}>
      <img src={img} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={` ${layout.sectionInfo} sm:ml-10 ml-0 `} >
      <h2 className={styles.heading2}>
        <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text "> Robotics </span> {" "}
         automation  <br className="sm:block hidden" /> and {" "} <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text "> data analytics </span>  . 
      </h2>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>
        Use RPA to automate back-end processes, reducing errors and processing times and automatically scan, categorize, and store documents for easy retrieval. Use AI to forecast financial trends and provide proactive recommendations.
      </p>

      <Button styles={`mt-10`} name='Get Started' />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
