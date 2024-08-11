

const FeedbackCard = ({ content, name,  img }) => (
  <div className="flex justify-between flex-col px-8 py-5 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-gradient-to-b from-gray-700 to-gray-900 ">
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
      {content}
    </p>

    <div className="flex flex-row items-center space-x-5 ">
      <img src={img} alt={name} className=" w-10 h-10 rounded-full overflow-hidden" />
      <div className="flex flex-col ml-4">
        <p className="font-poppins text-base font-semibold leading-[32px] text-white">
          {name}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
