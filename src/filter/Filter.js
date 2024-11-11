import React from "react";
import styles from "./filter.module.css"; // Adjust the path according to your folder structure

export const Filter = () => {
  return (
    <div className={styles.filterContainer}>
      <select className={styles.filterSelect}>
        <option value="all">All</option>

        <option value="Vrp" className={styles.container}>
          VRP
        </option>
        <option value="Prexo" className={styles.container}>
          Prexo
        </option>
        <option value="Open Box" className={styles.container}>
          Open Box
        </option>
      </select>
    </div>
  );
};

export default Filter;
