import styles from '../../../styles/dashboard.module.css';

export interface WorkoutCardProps {
  workoutList: WorkoutType[];
}

export type WorkoutType = {
    exerciseId: number;
    name: string;
    bodyParts: string[];
    equipments: string[];
    instructions: string[];
    secondaryMuscles: string[];
    targetMuscles: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkoutCard = ( workouts: WorkoutType) => {
  const {
    name,
    bodyParts,
    equipments,
    instructions,
    secondaryMuscles,
    targetMuscles,
  } = workouts;
  return (
    <div className={styles.cardContent}>
      <li>{name}</li>
      <li>{bodyParts}</li>
      <li>{equipments}</li>
      {/* <li>{instructions}</li> */}
      <li>{secondaryMuscles}</li>
      <li>{targetMuscles}</li>
    </div>
  );
};

export default WorkoutCard;
