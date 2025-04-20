import React from "react";
import styles from '../../../styles/global.module.css';

const WorkoutModal = ({ onClose, selectedExercise }) => {
  console.log("checked modal", selectedExercise);
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-[#252525] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-[#252525] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="text-center ">
                  <h2
                    className="text-lg font-semibold text-white"
                    id="modal-title"
                  >
                    {selectedExercise.name}
                  </h2>
                  </div>
                  <div className="mt-2">
                    <ul>
                      {selectedExercise.instructions.map((instruction: string, index: number) => (
                      <li className="text-sm text-white" key={index}>{`${index+1}. ${instruction}`}</li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-2">
                    <img height="50%" width="50%" src={selectedExercise.gifUrl}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#252525] px-4 py-3 flex justify-center sm:px-6">
              <button
                type="button"
                className={`${styles.btnPrimary} inline-flex w-full justify-center rounded-md px-3 py-2 text-sm shadow-xs sm:ml-3 sm:w-auto`}
                onClick={onClose}
              >
                Add to favourites
              </button>
              <button
                type="button"
                className={`${styles.btnSecondary} inline-flex w-full justify-center rounded-md px-3 py-2 text-sm shadow-xs sm:ml-3 sm:w-auto`}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutModal;
