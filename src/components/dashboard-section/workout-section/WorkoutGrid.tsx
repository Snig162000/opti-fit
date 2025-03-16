import WorkoutCard, { WorkoutCardProps } from "./WorkoutCard";
import styles from "../../../styles/dashboard.module.css";

const WorkoutGrid = ({ workoutList }: WorkoutCardProps) => {
  return (
    <div className={styles.cardContainer}>
      {workoutList.length !== 0 ? (
        workoutList?.map((workout) => (
          <>
            <WorkoutCard key={workout?.exerciseId} {...workout} />
            
          </>
        ))
      ) : (
        <h2>Sorry, we could not find the workouts.</h2>
      )}
    </div>
  );
};

export default WorkoutGrid;
