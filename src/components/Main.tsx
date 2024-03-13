import React from 'react';
import Recommended from "./Recommended";
import Content from "./Content";

const Main = () => {
  return (
    <div className="flex justify-between pt-24 px-16 2xl:flex-col 2xl:items-center md:px-4 md:gap-6 md:px-0">
      <Content/>
      <Recommended />
    </div>
  );
};

export default Main;