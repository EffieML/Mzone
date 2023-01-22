import { Redirect } from "react-router-dom";
import React from "react";
import "./PageNotFound.css"

function FourOhFourPage() {
    // const history = useHistory()
    return (
        <div className="pageNotFound">
            {/* <h1>Page not found</h1> */}
            <h2>404 Page, Redirecting</h2>
            <Redirect to={"/"} />
        </div>
    )
}

export default FourOhFourPage
