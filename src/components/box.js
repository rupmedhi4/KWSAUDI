import React from 'react';

const Box = (props) => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative min-h-[40vh] md:min-h-screen">
                <div className="absolute inset-0">
                    <img
                        src={props.src}
                        alt="KW Saudi Arabia background"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-opacity-50" />
                </div>
                
                {/* Hero Content - Fixed positioning */}
                <div className="relative z-10 flex flex-col items-center justify-end  md:min-h-screen px-4">
                    <div className="w-full max-w-xl mx-auto">
                        <div className="bg-white rounded-t-3xl mt-60 md:mt-40">
                            <div className="flex flex-col items-center">
                                <img
                                    src={props.image}
                                    alt="hero"
                                    className="w-40 h-40 object-cover"
                                />
                                <div className="w-50 h-[1.5px] bg-red-600"></div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
             <h3 className="text-lg md:text-xl font-normal text-center tracking-[0.2em] leading-relaxed pt-4">
                                    {props.h3}
                                </h3>
        </div>
    );
}

export default Box;