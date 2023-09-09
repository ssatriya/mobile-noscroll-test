"use client";

export default function CustomButton() {
  return (
    <button className="active:bg-orange-400 shadow-[3px_3px_0px_black] active:shadow-none active:translate-x-[0px] active:translate-y-[0px] translate-x-[-3px] translate-y-[-3px] sm:hover:bg-orange-400 bg-orange-300 transition-all rounded-sm mt-2 w-full sm:hover:shadow-[3px_3px_0px_black] py-2 sm:shadow-none sm:hover:translate-x-[-3px] sm:hover:translate-y-[-3px] sm:active:shadow-none sm:translate-x-[0px] sm:translate-y-[0px] sm:active:translate-x-[0px] sm:active:translate-y-[0px]">
      Sign in
    </button>
  );
}
