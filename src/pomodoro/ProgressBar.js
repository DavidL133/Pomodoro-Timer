import React from "react";
/* Fixing Progress Bar */
function ProgressBar( { session, breakDuration, focusDuration } ) {
const barPercentage = 100 - (session.timeRemaining / ((`${session.label}` === "Focusing" ? focusDuration : breakDuration) * 60)) * 100;
return (
    <div className="row mb-2">
    <div className="col">
        <div className="progress" style={{ height: "20px" }}>
            <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
/* Increase aria-valuenow as elapsed time increases */           
            aria-valuenow={barPercentage}
/* Increase width % as elapsed time increases  */           
            style={{ width: `${barPercentage}%` }}
           />
        </div>
    </div>
    </div>
);

}
export default ProgressBar;