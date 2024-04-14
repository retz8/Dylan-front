import Image from "next/image";
import React from "react";
import styles from "./chat.module.css";

// Left: User Icon
// Right: User Query

export default function UserQuestion({ icon, query }) {
  return (
    <div className={styles.user}>
      <div className="relative flex w-8 h-7 rounded-full">
        <Image
          src={icon ? icon : "/sungmo.png"}
          alt="User Icon"
          fill
          className="rounded-full object-contain"
        />
      </div>
      <p className="">{query}</p>
    </div>
  );
}
