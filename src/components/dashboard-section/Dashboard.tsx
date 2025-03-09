"use client";

import WorkoutGrid from "./workout-section/WorkoutGrid";
import styles from "../../styles/dashboard.module.css";
import { useState } from "react";
import workouts from "../../data/workout-data.json";

const Dashboard = () => {
  const [searchItem, setSearchedItem] = useState("");
  return (
    <>
      <h1>Welcome to the dashboard section!!</h1>
      <input
        className={styles.inputBox}
        type="text"
        value={searchItem}
        onChange={(e) => setSearchedItem(e.target.value)}
      />
      <div className={styles.workoutsSection}>
        <WorkoutGrid />
      </div>

      {/* <div>Your workouts will appear here</div>
      <div>Your meals will appear here</div>
      <div>Your progress will appear here</div> */}
    </>
  );
};

export default Dashboard;
