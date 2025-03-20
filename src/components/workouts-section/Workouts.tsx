"use client";

import { WorkoutType } from "../workouts-section/workout-section/WorkoutCard";
import WorkoutGrid from "../workouts-section/workout-section/WorkoutGrid";
import { useEffect, useState } from "react";
import styles from "../../styles/global.module.css";

const Workout = () => {
  const [searchItem, setSearchedItem] = useState("");
  const [workoutList, setWorkoutList] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);

  const searchItemHandler = () => {
    console.log(searchItem, "searchItem");
    const filteredWorkouts = workoutList.filter((workout: WorkoutType) =>
      workout?.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setWorkoutList(filteredWorkouts);
    setSearchedItem("");
  };

  const fetchWorkoutDetails = async () => {
    try {
      const result = await fetch(
        `https://exercisedb-api.vercel.app/api/v1/exercises?offset=${offsetValue}&limit=10`
      );
      const { data } = await result.json();
      console.log(data, "exercisedata");
      setWorkoutList(data?.exercises);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Fetching workouts....");
    fetchWorkoutDetails();
  }, [offsetValue]);

  return (
    <>
      <h1 className="grid place-content-center text-[4rem] font-semibold mt-5">Workouts</h1>
      <h1 className="text-[1.5rem] grid place-content-center mb-6">Check out some workouts here and add them to your favourites!</h1>
      <div className="mb-20 flex justify-center">
        <input
          className="border-white border-1 my-3 mr-2"
          type="text"
          value={searchItem}
          onChange={(e) => setSearchedItem(e.target.value)}
        />
        <button className={styles.btnPrimary} onClick={searchItemHandler}>
          Search
        </button>
      </div>
      {workoutList.length === 0 ? (
        <h2 className="text-center">Loading workouts....</h2>
      ) : (
        <>
          <div className="wx-8 md-4">
            <WorkoutGrid workoutList={workoutList} />
          </div>
          <div className="mx-auto my-5 flex justify-between w-[50%]">
            <button
              className={styles.btnPrimary}
              onClick={() => setOffsetValue((prev) => Math.max(prev - 10, 0))}
              disabled={offsetValue === 0}
            >
              Previous
            </button>
            <button
              className={styles.btnPrimary}
              onClick={() => setOffsetValue(offsetValue + 10)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Workout;
