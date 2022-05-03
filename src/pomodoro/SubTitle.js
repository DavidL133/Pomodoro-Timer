
import React from "react";

function SubTitle({ session, secondsToDuration }) {
    return (
        <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session?.timeRemaining)} remaining
        </p>
    );
}

export default SubTitle;