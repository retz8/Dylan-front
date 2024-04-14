import Image from "next/image";
import React from "react";
import styles from "./chat.module.css";

// Left: User Icon
// Right: User Query

export default function UserQuestion({ icon, query }) {
  return (
    <div className={styles.user}>
      <div className="relative w-8 h-8 flex">
        <Image
          src="/sungmo.png"
          alt="User Icon"
          fill
          className="rounded-full"
        />
      </div>
      <p className="ml-0">{query}</p>
    </div>
  );
}
