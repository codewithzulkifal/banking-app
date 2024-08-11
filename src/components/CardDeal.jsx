import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={` ${layout.section} md:-mt-20 -mt-12 `}>
    <div className={` ${layout.sectionInfo}  `} >
      <h2 className={styles.heading2}>
       
        <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
           He're 
        </span> {" "}
        categories
         of {" "}
         <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
          cards
        </span>{" "}
        <br className="sm:block hidden" /> with {" "}
         <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
          distinct features
        </span>
         .
      </h2>
      <p className={`${styles.paragraph} max-w-[510px] mt-2`}>
        Platunim card have Maximum rewards on all purchases and enjoy higher credit limits and enhanced purchasing power. Gold card have higher rewards rates and access dedicated customer service. While Silver card have access essential features like contactless payments, transaction alerts.
      </p>

      <Button styles={`mt-10`} name=' Buy Deals ' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[90%] h-[80%] hover:scale-110 transition-all duration-500 cursor-pointer " />
    </div>
  </section>
);

export default CardDeal;
