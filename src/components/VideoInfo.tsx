import React from 'react';

const VideoInfo = () => {
  return (
    <div className="w-[70vw] 2xl:w-full md:px-4">
      <h1 className="text-[2.25rem] font-bold md:text-[1.25rem]">
        Dude You Re Getting A Telescope
      </h1>
      <div className="flex justify-between pb-5 md:pb-6 md:items-center">
        <span className="text-[1.25rem] text-[#C2C2C2] md:text-[0.75rem]">
          123k views
        </span>
        <div className="flex items-center gap-14 md:gap-8 sm:gap-3">
          <div className="flex items-center gap-2">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M0 11.7329C0 12.4323 0.596816 12.998 1.33303 12.998C1.33303 12.998 8.04913 13.0025 9.00292 12.998C11.0812 13.0194 12.3926 12.4547 12.9582 10.9982C13.11 10.6258 13.9501 7.41689 13.9574 7.38101C14.1966 6.31709 13.4012 5.38783 12.2412 5.38783L9.83527 5.38768C9.64957 5.38767 9.5284 5.24849 9.5647 5.07611C9.5647 5.07611 9.74339 4.23206 9.78223 4.02284C9.92755 3.23995 10.0069 2.62439 9.99953 2.2066C10.012 1.54647 9.63906 0.992714 9.04973 0.55583C8.73233 0.320535 8.24694 0.101358 8.24694 0.101358C7.74148 -0.141148 7.13599 0.0682933 6.90137 0.550712C6.90137 0.550712 4.98706 4.51167 4.82791 4.81413C4.66876 5.11658 4.25203 5.38803 3.88249 5.38803H1.33303C0.597467 5.38803 0 5.95447 0 6.65321V11.7329ZM9.01732 11.7298C10.4976 11.745 11.231 11.4606 11.6047 10.7784H11.3349C10.9656 10.7784 10.6663 10.497 10.6663 10.1443C10.6663 9.79404 10.9618 9.51011 11.3349 9.51011H12.0027C12.0577 9.30901 12.1167 9.09296 12.1758 8.87595H11.6682C11.2989 8.87595 10.9996 8.59446 10.9996 8.24178C10.9996 7.89154 11.2951 7.60761 11.6682 7.60761H12.5203C12.5978 7.32142 12.6492 7.1312 12.6517 7.12138C12.715 6.84298 12.5544 6.65617 12.2411 6.65617L9.83518 6.65602C8.81064 6.65595 8.05528 5.78677 8.25766 4.82571C8.26457 4.79306 8.45663 3.87033 8.46926 3.80229C8.60705 3.05999 8.67174 2.52963 8.66643 2.22779L8.66646 2.18372C8.67005 1.99438 8.54896 1.79258 8.23018 1.55626C8.19435 1.5297 7.95995 1.39474 7.95995 1.39474L6.03797 5.34669C5.68177 6.07909 4.84873 6.60806 3.99985 6.65323V11.7323C6.11497 11.7318 8.75851 11.7309 9.01732 11.7298ZM2.66657 6.65636H1.33303L1.33328 11.7329L2.66657 11.7326V6.65636Z" fill="black"/>
            </svg>
            <span className="text-[#192646]">
              123k
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M0 1.26715C0 0.567738 0.596816 0.00196838 1.33303 0.00196838C1.33303 0.00196838 8.04913 -0.0024662 9.00292 0.00197601C11.0812 -0.019372 12.3926 0.545282 12.9582 2.00179C13.11 2.37423 13.9501 5.58311 13.9574 5.61899C14.1966 6.68291 13.4012 7.61217 12.2412 7.61217L9.83527 7.61232C9.64957 7.61233 9.5284 7.75151 9.5647 7.92389C9.5647 7.92389 9.74339 8.76794 9.78223 8.97716C9.92755 9.76005 10.0069 10.3756 9.99953 10.7934C10.012 11.4535 9.63906 12.0073 9.04973 12.4442C8.73233 12.6795 8.24694 12.8986 8.24694 12.8986C7.74148 13.1411 7.13599 12.9317 6.90137 12.4493C6.90137 12.4493 4.98706 8.48833 4.82791 8.18587C4.66876 7.88342 4.25203 7.61197 3.88249 7.61197H1.33303C0.597467 7.61197 0 7.04553 0 6.34679V1.26715ZM9.01732 1.27024C10.4976 1.25503 11.231 1.53944 11.6047 2.22155H11.3349C10.9656 2.22155 10.6663 2.50304 10.6663 2.85572C10.6663 3.20596 10.9618 3.48989 11.3349 3.48989H12.0027C12.0577 3.69099 12.1167 3.90704 12.1758 4.12405H11.6682C11.2989 4.12405 10.9996 4.40554 10.9996 4.75822C10.9996 5.10846 11.2951 5.39239 11.6682 5.39239H12.5203C12.5978 5.67858 12.6492 5.8688 12.6517 5.87862C12.715 6.15702 12.5544 6.34383 12.2411 6.34383L9.83518 6.34398C8.81064 6.34405 8.05528 7.21323 8.25766 8.17429C8.26457 8.20694 8.45663 9.12967 8.46926 9.19771C8.60705 9.94001 8.67174 10.4704 8.66643 10.7722L8.66646 10.8163C8.67005 11.0056 8.54896 11.2074 8.23018 11.4437C8.19435 11.4703 7.95995 11.6053 7.95995 11.6053L6.03797 7.65331C5.68177 6.92091 4.84873 6.39194 3.99985 6.34677V1.26772C6.11497 1.26825 8.75851 1.26912 9.01732 1.27024ZM2.66657 6.34364H1.33303L1.33328 1.26715L2.66657 1.26741V6.34364Z" fill="black"/>
            </svg>
            <span className="text-[#192646]">
              435k
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.24" d="M8.55556 0L14 5.6L8.55556 11.2V7.92C4.66667 7.92 1.94444 9.2 0 12C0.777778 8 3.11111 4 8.55556 3.2V0Z" fill="black"/>
            </svg>
            <span className="text-[#192646]">
              Share
            </span>
          </div>
          <svg className="md:hidden" width="28" height="6" viewBox="0 0 28 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6ZM14 6C15.6569 6 17 4.65685 17 3C17 1.34315 15.6569 0 14 0C12.3431 0 11 1.34315 11 3C11 4.65685 12.3431 6 14 6ZM28 3C28 4.65685 26.6569 6 25 6C23.3431 6 22 4.65685 22 3C22 1.34315 23.3431 0 25 0C26.6569 0 28 1.34315 28 3Z" fill="black"/>
          </svg>
        </div>
      </div>
      <hr className="pb-10 md:pb-2"/>
      <div className="flex items-start justify-between md:items-center">
        <div className="flex gap-3 md:items-center">
          <div className="md:w-[5vw]">
            <img src="./images/Oval.png"/>
          </div>
          <div className="flex flex-col w-[43vw]">
          <span className="text-[1.625rem] font-bold md:text-base">
            Food & Drink
          </span>
            <span className="text-[0.875rem] text-[#C2C2C2]">
            Published on 14 Jun 2019
          </span>
            <span className="text-base md:hidden">
            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
          </span>
            <span className="text-[1.25rem] text-[#C2C2C2] md:hidden">
            Show more
          </span>
          </div>
        </div>
        <button type="button" className="bg-[#FF0000] text-[white] px-5 py-2.5 rounded-[25px] border-[none] md:hidden">
          Subscribe 2.3m
        </button>
        <button type="button" className="hidden text-base font-semibold text-[#FF0000] md:block">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;