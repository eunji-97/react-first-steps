import React from "react";
import Book from "./Book";

function Library() {
    return (
        <div>
            <Book name="React" numOfPage={200} />
            <Book name="JavaScript" numOfPage={300} />
        </div>
    );
}

export default Library;