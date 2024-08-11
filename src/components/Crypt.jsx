

function Crypt() {
  return (
    <>
    <div className=" flex flex-col-reverse justify-center items-center md:flex-row md:justify-around md:items-center md:mb-52 mb-48 md:-mt-6 -mt-2 gap-24 md:gap-0 ">
        <div className=" flex justify-center items-center ">
            <img src="phntrding.png" alt="Image" className=" h-[70%] w-[70%] hover:scale-110 transition-all duration-500 cursor-pointer " />
        </div>
        <div className=" flex flex-col items-start justify-center gap-4 max-w-[550px] ">
            <h1 className=" font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] " > 
                <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
                    Securely
                </span> {" "}
                store
                 {" "}
                <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
                     assets
                </span> {" "}
                  and {" "}
                <span className=" bg-gradient-to-r from-purple-700 via-purple-600 to-pink-700 inline-block text-transparent bg-clip-text ">
                    convert
                </span>  {" "}
                  curreny. </h1>
            <p className=" font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ">
                Easily convert between fiat and various cryptocurrencies without needing to use separate exchanges and Benefit from robust security measures that protect both fiat and crypto assets, including multi-factor authentication and advanced encryption.
            </p>
            <div className=" flex items-center gap-5 mt-5 ">
                <button type="button" className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80  focus:outline-none outline-none font-semibold rounded-full text-base px-9 py-5 text-center inline-flex items-center active:scale-95 transition-all duration-300 me-2 mb-2">
                <svg className="w-4 h-4 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
                    Pay with Bitcoin
                </button>
                <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-300 outline-none focus:outline-none font-semibold rounded-full text-base px-9 py-5 text-center inline-flex items-center me-2 mb-2">
                <svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                    Pay with Ethereum
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Crypt

