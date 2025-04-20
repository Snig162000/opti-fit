import { useState } from "react";
import styles from "../../../styles/dashboard.module.css";
import classes from '../../../styles/global.module.css';
import Image from "next/image";

export interface WorkoutCardProps {
  workoutList: WorkoutType[];
  getMoreDetails: any;
}

export type WorkoutType = {
  id: number;
  name: string;
  gifUrl: string;
  bodyParts: string[];
  equipment: string[];
  instructions: string[];
  target: string[];
  onClick: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WorkoutCard = (workouts: WorkoutType) => {
  const [add, setAdd] = useState(false);
  const { name, bodyParts, equipment, instructions, target, gifUrl } =
    workouts;
  return (
    <div className={`${styles.cardContent} flex flex-col h-full bg-[#252525] border-[#333333] hover:bg-[#1E1E1E]`}>
      <div className="flex-grow">
        {/* <img src={gifUrl} alt={'exercise-img'} height={30} width={30} /> */}
        <li className="font-semibold text-lg">{name}</li>
        {/* <li>{bodyParts}</li> */}
        <li className="text-sm"> Equipment: {equipment}</li>
        {/* <li>{instructions}</li> */}
        <li className="text-sm">Target: {target}</li>
      </div>
      <div>
      {/* <button onClick={() => setAdd(!add)} className={`${classes.btnSecondary} w-10 float-right`}>
      {add ? '❤️' : '🤍'}
      </button> */}
      </div>
    </div>
  );
};

export default WorkoutCard;
