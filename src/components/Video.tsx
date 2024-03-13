import React from 'react';

const Video = (props: any) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="relative">
        <img src={props.src} className="w-full h-full"/>
        <span className="absolute bg-[rgba(0,0,0,0.30)] text-[white] text-sm px-[9px] py-[3px] rounded-[10px] right-2.5 bottom-3">{props.time}</span>
      </div>
      <span className="text-[1.625rem] font-bold text-black md:text-base">
        {props.name}
      </span>
      <div className="flex justify-between text-xs text-gray-400 md:text-[0.75rem]">
        <span>
          {props.views}
        </span>
        <span>
          {props.author}
        </span>
      </div>
    </div>
  );
};

export default Video;