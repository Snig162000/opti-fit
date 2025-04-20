import WorkoutCard, { WorkoutCardProps } from "./WorkoutCard";
import styles from "../../../styles/dashboard.module.css";
import { useState } from "react";
import WorkoutModal from "./WorkoutModal";

const WorkoutGrid = ({ workoutList }: WorkoutCardProps) => {
  const [selectedId, setSelectedId] = useState(0);

  const selectedExercise = workoutList.find((exercise) => exercise.id === selectedId);

  const onClose = () => {
    setSelectedId(0);
  }

  console.log(selectedExercise)

  return (
    <div className={styles.cardContainer}>
      {workoutList.length !== 0 ? (
        workoutList?.map((workout) => (
          <div  className="cursor-pointer" key={workout?.id} onClick={() => setSelectedId(workout?.id)}>
            <WorkoutCard {...workout} />
            
          </div>
        ))
      ) : (
        <h2>Sorry, we could not find the workouts.</h2>
      )}

      {selectedExercise && <WorkoutModal onClose={onClose} selectedExercise={selectedExercise} />}
    </div>
  );
};

export default WorkoutGrid;
