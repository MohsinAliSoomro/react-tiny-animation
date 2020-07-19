import React from 'react';
import useWebAnimations, { fadeInLeft } from '@wellyshen/use-web-animations';
import Typewriter from 'typewriter-effect';
import Reactlogo from './reactlogo'
const Home = () => {
    const { ref } = useWebAnimations({ ...fadeInLeft })
    return (
        <section ref={ref} className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Reactlogo />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"><Typewriter options={{
                        strings:['React js Animations'],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:1
                    }} /> 
      </h1>
                    <p className="mb-8 leading-relaxed">
                        <Typewriter
                            options={{
                                strings: [`React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications`],
                                deleteSpeed:1,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Official</button>
                        <button className="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;