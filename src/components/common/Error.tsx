import { useRouteError } from "react-router-dom";
import React from "react";

interface RouteError {
    statusText ?: string;
    message ?: string;
}

function Error() {
    const error = useRouteError() as RouteError;

    return (
        <div>
            <h1>오류발생</h1>
            <p>다음과 같은 오류가 발생</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}

export default Error;