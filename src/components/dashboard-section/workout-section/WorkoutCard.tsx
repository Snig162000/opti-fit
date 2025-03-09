import styles from '../../../styles/dashboard.module.css';

export interface WorkoutCardProps {
  workoutData: {
    id: number;
    name: string;
    category: string;
    difficulty: string;
    bodyPart: string;
    equipment: string;
    duration?: string;
    reps?: number;
    sets?: number;
    caloriesBurned: number;
    image: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkoutCard = ({ workoutData }: WorkoutCardProps) => {
  const {
    name,
    category,
    difficulty,
    bodyPart,
    equipment,
    duration,
    reps,
    sets,
  } = workoutData;
  console.log(name);
  return (
    <div className={styles.cardContent}>
      <li>{name}</li>
      <li>{category}</li>
      <li>{difficulty}</li>
      <li>{bodyPart}</li>
      <li>{equipment}</li>
      <li>{duration}</li>
      <li>{reps}</li>
      <li>{sets}</li>
    </div>
  );
};

export default WorkoutCard;
