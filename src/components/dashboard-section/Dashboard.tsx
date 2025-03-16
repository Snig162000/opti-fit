"use client";

import { WorkoutType } from "./workout-section/WorkoutCard";
import WorkoutGrid from "./workout-section/WorkoutGrid";
import { useEffect, useState } from "react";

const Dashboard = () => {
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
    console.log('Fetching workouts....')
    fetchWorkoutDetails();
  }, [offsetValue]);

  return (
    <>
      <h1 className="text-[3rem] font-semibold">Welcome to Dashboard</h1>
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
          <div className="wx-8 md-4">
            <WorkoutGrid workoutList={workoutList} />
          </div>
          <div className="mx-auto my-5 flex justify-between w-[50%]">
            <button className="cursor-pointer bg-white text-black rounded-md p-2"
            onClick={() => setOffsetValue(prev => Math.max(prev - 10, 0))} disabled={offsetValue === 0}>
              Previous
            </button>
            <button className="cursor-pointer bg-white text-black rounded-md p-2"
            onClick={() => setOffsetValue(offsetValue + 10)}>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
