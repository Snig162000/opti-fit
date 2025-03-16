import styles from "../../../styles/dashboard.module.css";
import Image from "next/image";

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
  targetMuscles: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkoutCard = (workouts: WorkoutType) => {
  const { name, bodyParts, equipments, instructions, targetMuscles, gifUrl } =
    workouts;
  return (
    <div className={`${styles.cardContent} flex flex-col h-full`}>
      <div className="flex-grow">
        {/* <img src={gifUrl} alt={'exercise-img'} height={30} width={30} /> */}
        <li>{name}</li>
        <li>{bodyParts}</li>
        <li>{equipments}</li>
        {/* <li>{instructions}</li> */}
        <li>{targetMuscles}</li>
      </div>
      <button className="mt-auto mb-0.5 cursor-pointer bg-white text-black rounded-md p-1.5 text-sm mx-auto">
        Add to favourites
      </button>
    </div>
  );
};

export default WorkoutCard;
