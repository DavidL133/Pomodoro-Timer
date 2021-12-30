/* TODO: Update message below correctly format the time remaining in the current session */

import React from "react";

function SubTitle({ session, secondsToDuration }) {
    return (
        <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session?.timeRemaining)} remaining
        </p>
    );
}

export default SubTitle;