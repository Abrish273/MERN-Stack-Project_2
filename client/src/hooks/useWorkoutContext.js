import { WorkoutContext } from "../control/WorkoutControl";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside a WorkoutsContextProvider"
    );
  }

  return context;
};
