import workouts from "../../../data/workout-data.json";
import WorkoutCard from "./WorkoutCard";
import styles from '../../../styles/dashboard.module.css';

const WorkoutGrid = () => {
  console.log(workouts.workouts);
  return (
    <div className={styles.cardContainer}>
      {workouts.workouts.map((workout) => (
        <div key={workout.id}>
          <WorkoutCard workoutData={workout} />
        </div>
      ))}
    </div>
  );
};

export default WorkoutGrid;
