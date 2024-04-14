import Link from "next/link";
import React from "react";
import PlusIcon from "../ui/icons/PlusIcon";
import styles from "./sidebar.module.css";

export default function SideAddProjectButton() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/chat/add-project" className={styles.plus}>
        <PlusIcon size="small" />
      </Link>

      <span className={styles.text}>Add your project with GitHub</span>
    </div>
  );
}
