import React from 'react';
import useWebAnimations, { fadeInDown } from "@wellyshen/use-web-animations";
const Header = () => {

    const { ref } = useWebAnimations({ ...fadeInDown })
    return (
        <header ref={ref} class="text-gray-700 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="https://google.com" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    
                    <span class="ml-3 text-xl">New Trend</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href="https://google.com" class="mr-5 hover:text-gray-900">About</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;