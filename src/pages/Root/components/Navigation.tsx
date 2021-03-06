import React, {ReactElement} from "react";
import {NavigationContainer} from "./NavigationContainer";

export function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <div className="text-sm lg:flex-grow">
        <a href="#responsive-header"
           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header"
           className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#"
           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
      </div>
    </NavigationContainer>
  )
}