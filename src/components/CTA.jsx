import styles from "../style";
import Button from "./Button";
import { useState } from "react";

const CTA = () => {

   const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setText('');
      
    }
  };
  const [text,setText] = useState(' ');

  return(
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:mb-28 mb-7 sm:flex-row flex-col bg-gradient-to-b from-gray-700 to-gray-900 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className='text-white text-3xl md:text-4xl font-semibold ' >We’re here to Support and Updates!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Reach us direactly at our wesbite and send us an email below for detailed inquiries or support requests.
      </p>
      <input type="email" required name="email" id="email" value={text} onChange={handleChange}
      onKeyPress={handleKeyPress} placeholder="E-mail" className=" w-1/4 rounded-lg 
      focus:outline-none outline-none p-2 mt-3  " />

    </div>

    <div className= " flex justify-center items-center sm:mr-20 mr-0 sm:mt-0 mt-10 ">
      <Button name='Contact Us' />
      
    </div>
  </section>
  )
};

export default CTA;
