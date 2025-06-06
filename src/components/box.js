import React from 'react';

const Box = (props) => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative min-h-[40vh] md:min-h-screen w-full">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src={props.src}
                        alt="KW Saudi Arabia background"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-opacity-50 w-full h-full" />
                </div>
                
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center pt-[105px] md:pt-[484px] px-4 w-full">
                    <h1 className="text-xl md:text-4xl mb-[48px] font-bold text-white invisible">
                        {props.h3} {/* Hidden but preserves space */}
                    </h1>
   
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-full max-w-xl">
                        <div className="bg-white rounded-t-3xl p-4 pb-2 min-h-[150px] flex items-center justify-center w-full">
                            <div className="w-full max-w-4xl mx-auto">
                                <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8">
                                    <div className="flex flex-col items-center w-full">
                                        <img
                                            src={props.image}
                                            alt="hero"
                                            className="w-40 h-40 object-cover mb-2"
                                        />
                                          <div className="w-50 h-[1.5px] bg-red-600 my-2"></div>
                                        <h3 style={{ 
                                            fontWeight: 400,
                                            fontSize: "20px",
                                            textDecoration: "none",
                                            textAlign: "center",
                                            letterSpacing: "0.2em",
                                            lineHeight: 1.6 
                                        }} className='pt-5'>
                                            {props.h3}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;