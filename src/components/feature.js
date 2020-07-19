import React from 'react';
import Jsx from './featuretext/jsx'
const Feature = () => {
    
    return (
        <section  class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Features</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">JSX</h2>
                            </div>
                            <div class="flex-grow">
                                <Jsx text={`JavaScript XML. It is a JavaScript syntax extension. 
        Its an XML or HTML like syntax used by ReactJS. 
        This syntax is processed into JavaScript calls of React 
        Framework. It extends the ES6 so that HTML like text can 
        co-exist with JavaScript react code. It is not necessary 
        to use JSX, but it is recommended to use in ReactJS.`}/>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">Components</h2>
                            </div>
                            <div class="flex-grow">
                                <Jsx text={`ReactJS is all about components. ReactJS application is made up of multiple components, and each component has its own logic and controls. These components can be reusable which help you to maintain the code when working on larger scale projects.`} />
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">One-way Data Binding</h2>
                            </div>
                            <div class="flex-grow">
                               <Jsx text={`ReactJS is designed in such a manner that follows 
                               unidirectional data flow or one-way data binding. The benefits 
                               of one-way data binding give you better control throughout the 
                               application. If the data flow is in another direction, then it 
                               requires additional features. It is because components are supposed 
                               to be immutable and the data within them cannot be changed. 
                               Flux is a pattern that helps to keep your data unidirectional. 
                               This makes the application more flexible that leads to increase 
                               efficiency.`} /> 
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">Simplicity</h2>
                            </div>
                            <div class="flex-grow">
                               <Jsx text={`ReactJS uses JSX file which makes the application simple and to code as well as understand. We know that ReactJS is a component-based approach which makes the code reusable as your need. This makes it simple to use and learn.`} /> 
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">Virtual DOM</h2>
                            </div>
                            <div class="flex-grow">
                            <Jsx text={`A virtual DOM object is a representation of the original DOM object. It works like a one-way data binding. Whenever any modifications happen in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and new DOM. Once it has done, the real DOM will update only the things that have actually changed. This makes the application faster, and there is no wastage of memory.`} />
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                            <div class="flex items-center mb-3">
                                
                                <h2 class="text-gray-900 text-lg title-font font-medium">Performance</h2>
                            </div>
                            <div class="flex-grow">
                            <Jsx text={`ReactJS is known to be a great performer. This feature makes it much better than other frameworks out there today. The reason behind this is that it manages a virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. The DOM exists entirely in memory. Due to this, when we create a component, we did not write directly to the DOM. Instead, we are writing virtual components that will turn into the DOM leading to smoother and faster performance.`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Feature;