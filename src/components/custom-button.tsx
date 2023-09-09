"use client";

import React, { useEffect, useState } from "react";

export default function CustomButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = [
      "Mobile",
      "Android",
      "iPhone",
      "iPad",
      "Windows Phone",
    ];

    if (mobileKeywords.some((keyword) => userAgent.includes(keyword))) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <button className="active:bg-orange-400 shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[0px] active:translate-y-[0px] translate-x-[-3px] translate-y-[-3px] sm:hover:bg-orange-400 bg-orange-300 transition-all rounded-sm mt-2 w-full sm:hover:shadow-[3px_3px_0px_black] py-2 sm:shadow-none sm:hover:translate-x-[-3px] sm:hover:translate-y-[-3px] sm:active:shadow-none sm:translate-x-[0px] sm:translate-y-[0px] sm:active:translate-x-[0px] sm:active:translate-y-[0px]">
      Sign in
    </button>
  );

  //   if (!isMobile) {
  //     return (
  //       <button className="hover:bg-orange-400 bg-orange-300 transition-all rounded-sm mt-2 w-full hover:shadow-[3px_3px_0px_black] py-2 shadow-none hover:translate-x-[-3px] hover:translate-y-[-3px] active:shadow-none active:translate-x-[0px] active:translate-y-[0px]">
  //         Sign in
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button className="bg-orange-300 transition-all rounded-sm mt-2 w-full translate-x-[-3px] translate-y-[-3px] shadow-[3px_3px_0px_black] py-2 active:shadow-none active:translate-x-[0px] active:translate-y-[0px]">
  //         Sign in
  //       </button>
  //     );
  //   }
}
