import Link from "next/link";
import React from "react";
import PlusIcon from "../ui/icons/PlusIcon";

import styles from "./chat.module.css";

export default function AddProjectButton() {
  return (
    <div className={styles.addButton}>
      <Link className={styles.plus} href="/chat/add-project">
        <PlusIcon />
      </Link>

      <span className={styles.text}>Add your project with GitHub</span>
    </div>
  );
}
