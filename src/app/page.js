"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-black text-white text-3xl h-screen flex justify-center items-center">
      Hello Sungmo
      <div
        className="cursor-pointer"
        onClick={() =>
          window.open(
            "https://github.com/Ryankwon03?tab=repositories",
            "_blank"
          )
        }
      >
        <Image src="/sungmo.png" width={500} height={500} alt="sungmo" />
      </div>
    </section>
  );
}
