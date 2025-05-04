import styles from "../style";
import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex items-center py-[6px] px-6 mb-5 my-5 bg-gradient-to-r from-gray-700 to bg-gray-900 rounded-xl ">
          <p className={`${styles.paragraph}`} >
             Excusive
             {" "}
            <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text font-semibold "> Discount  </span>{" "}
              on different
              {" "}
            <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text font-semibold "> Wallets  </span>{" "}
                and 
              {" "}
            <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text font-semibold "> Cards  </span>{" "}
               !
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
         Transfer funds between accounts instantly, both within the same bank and different banks and secure, touch-free payments in a phone. Use the banking app to add cards to digital wallets for mobile payments.
        </p>
      </div>

      <div className={`flex-1 flex flex-row mr-14  ${styles.flexCenter} md:my-0 my-10 `}>
        <img src={robot} alt="billing" className=" w-full cursor-pointer scale-110 hover:scale-125 transition-all duration-500 " />


      </div>

     
    </section>
  );
};

export default Hero;
