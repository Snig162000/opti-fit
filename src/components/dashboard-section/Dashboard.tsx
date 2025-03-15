"use client";

import { WorkoutType } from "./workout-section/WorkoutCard";
import WorkoutGrid from "./workout-section/WorkoutGrid";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [searchItem, setSearchedItem] = useState("");
  const [workoutList, setWorkoutList] = useState([]);

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
        "https://exercisedb-api.vercel.app/api/v1/exercises?limit=20"
      );
      const { data } = await result.json();
      console.log(data, "exercisedata");
      setWorkoutList(data?.exercises);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkoutDetails();
  }, []);

  return (
    <>
      <h1>Welcome to the dashboard section!!</h1>
      {workoutList.length === 0 ? (
        <h2>Loading workouts....</h2>
      ) : (
        <>
          <div className="my-3">
            <input
              className="border-white border-1 my-3 mr-2"
              type="text"
              value={searchItem}
              onChange={(e) => setSearchedItem(e.target.value)}
            />
            <button
              className="cursor-pointer bg-white text-black rounded-md p-2"
              onClick={searchItemHandler}
            >
              Search
            </button>
          </div>
          <div className="wx-8">
            <WorkoutGrid workoutList={workoutList} />
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
