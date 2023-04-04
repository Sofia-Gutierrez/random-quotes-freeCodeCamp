import React from "react";
import { useRandomQuotes } from "../hooks/useRandomQuotes";
import "../assets/css/RandomQuotes.css";

function RandomQuotes() {

    const { quote, author, doReload } = useRandomQuotes();

    return(
        <div id="quote-box">
            <p id="text"><i className="fa-sharp fa-solid fa-quote-left"></i> {quote}</p>
            <p id="author">--{author}</p>
            <div className="container-buttons">
                <button id="new-quote" onClick={() => doReload() }>New Quote</button>
                <a id="tweet-quote" href={('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + quote + '" ' + "-" + author)} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i> tweet</a>
            </div>

        </div>
    )
};

export default RandomQuotes;