import { feedback } from "../constants";
// import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (

    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1] mb-8 md:mb-28 ">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
);

export default Testimonials;
