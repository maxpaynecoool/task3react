import React from 'react';
import Video from "./Video";

const Recommended = () => {
  const recommendedVideo = [
    {
      src: './images/Cover7.png',
      time: '8:00',
      name: 'Baby Monitor Technology',
      views: '123k views',
      author: 'Dollie Blair'
    },
    {
      src: './images/Cover8.png',
      time: '8:00',
      name: 'A Good Autoresponder',
      views: '123k views',
      author: 'Dollie Blair'
    },
    {
      src: './images/channelVideo5.png',
      time: '8:00',
      name: 'Selecting The Right Hotel',
      views: '123k views',
      author: 'Dollie Blair'
    },
    {
      src: './images/Cover10.png',
      time: '8:00',
      name: 'Selecting The Right Hotel',
      views: '123k views',
      author: 'Dollie Blair'
    },
  ]

  return (
    <div className="w-[19vw] 2xl:w-full md:px-4" >
      <div className="flex justify-between items-end pb-6">
        <span className="text-[2.25rem] leading-9 font-bold text-[#19202C]">
          Next
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[#19202C] leading-4 uppercase font-bold">
            autoplay
          </span>
          <div className="w-[2.75rem] h-[1.75rem] bg-[#EBEBEB] rounded-full">
            <div className="h-[1.75rem] w-[1.75rem] bg-[#2196F3] rounded-full">

            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        {recommendedVideo.map(video => {
          return <Video src={video.src}
                        time={video.time}
                        name={video.name}
                        views={video.views}
                        author={video.author}/>
        })}
      </div>

    </div>
  );
};

export default Recommended;