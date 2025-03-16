import styles from '../../../styles/dashboard.module.css';
import Image from 'next/image';

export interface WorkoutCardProps {
  workoutList: WorkoutType[];
}

export type WorkoutType = {
    exerciseId: number;
    name: string;
    gifUrl: string;
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
    gifUrl,
  } = workouts;
  return (
    <div className={styles.cardContent}>
      <img src={gifUrl} alt={'exercise-img'} height={30} width={30} />
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
