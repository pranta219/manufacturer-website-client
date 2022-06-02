import React from 'react';

const Blog = () => {
    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            <div class="rounded overflow-hidden  shadow-lg bg-black text-white text-white">

                <div class="px-6 py-4 ">
                    <div class="font-bold text-xl mb-2">Q: How will you improve the performance of a React Application?</div>
                    <p class="text-gray-400 text-base ">
                        Ans: Optimizing performance in a React application Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import() Windowing or list virtualization in React. Lazy loading images in React..
                    </p>
                </div>

            </div>
            <div class="rounded overflow-hidden shadow-lg bg-black text-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Q: What are the different ways to manage a state in a React application?</div>
                    <p class="text-gray-400 text-base">
                        Ans: There are four main types of state you need to properly manage in your React apps: Local state Global state Server state URL state.
                    </p>
                </div>

            </div>

            <div class="rounded overflow-hidden shadow-lg bg-black text-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Q: How does prototypical inheritance work?</div>
                    <p class="text-gray-400 text-base">
                        Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>

            </div>
            <div class="rounded overflow-hidden shadow-lg bg-black text-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Q: Why you do not set the state directly in React?</div>
                    <p class="text-gray-400 text-base">
                        Ans: One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.
                    </p>
                </div>

            </div>
            <div class="rounded overflow-hidden shadow-lg bg-black text-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Q: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</div>
                    <p class="text-gray-400 text-base">
                        Ans: You want your product's name and description to be optimised to match shopper-relevant keywords as closely as possible. The closer your name and product description come to matching the targeted keywords, the higher your product will appear in the search results, thereby making it visible to customers more quickly.
                    </p>
                </div>

            </div>
            <div class="rounded overflow-hidden shadow-lg bg-black text-white">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Q: What is a unit test? Why should write unit tests?</div>
                    <p class="text-gray-400 text-base">
                        Ans: Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;