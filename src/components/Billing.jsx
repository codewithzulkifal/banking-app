import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] hover:scale-110 transition-all duration-500 cursor-pointer " />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text "> Account </span>
        {" "} management <br className="sm:block hidden" /> personal {" "} <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text "> finance </span>
        {" "}  tools
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
         Access and manage multiple bank accounts, view balances, and review transaction history in real-time. Track spending, create budgets, set financial goals, and receive insights and alerts to help manage finances more effectively.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-12 mt-6 gap-6 ">
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer  active:scale-95 transition-all duration-300 " />
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer active:scale-95 transition-all duration-300 " />
      </div>
    </div>
  </section>
);

export default Billing;
