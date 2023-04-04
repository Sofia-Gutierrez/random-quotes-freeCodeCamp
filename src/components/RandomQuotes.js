import React from "react";
import { useRandomQuotes } from "../hooks/useRandomQuotes";
import "../assets/css/RandomQuotes.css";

function RandomQuotes() {

    const { quote, author, doReload } = useRandomQuotes();

    const handleClickBtn = () => {
        const colors = ['#16a085', '#a2ac6e', '#2c3e50', '#C58600', '#e74c3c', '#9b59b6', '#a52a2a', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
        const color = Math.floor(Math.random() * colors.length);

        const html = document.getElementById("html");
        const body = document.getElementById("body");
        const quoteBox = document.getElementById("quote-box");
        const newQuote = document.getElementById("new-quote");
        const tweetQuote = document.getElementById("tweet-quote");
        const text = document.getElementById("text");
        const author = document.getElementById("author");

        const opacity = [
            {opacity: 0},
            {opacity: 1}
        ];

        console.log(color)
        console.log(colors)

        const colorBgTransition = [ {backgroundColor: colors[color]} ];
        const colorTransition = [ {color: colors[color]} ];

        html.animate(colorBgTransition, {duration: 1000, fill: 'forwards'});
        body.animate(colorBgTransition, {duration: 1000, fill: 'forwards'});
        quoteBox.animate(colorTransition, {duration: 1000, fill: 'forwards'});
        newQuote.animate(colorBgTransition, {duration: 1000, fill: 'forwards'});
        tweetQuote.animate(colorTransition, {duration: 1000, fill: 'forwards'});
        text.animate(opacity, {duration: 500, iterations: 1});
        author.animate(opacity, {duration: 500, iterations: 1});
    };


    function all() {
        doReload();
        handleClickBtn();
    }

    return(
        <div id="quote-box">
            <p id="text"><i className="fa-sharp fa-solid fa-quote-left"></i> {quote}</p>
            <p id="author">--{author}</p>
            <div className="container-buttons">
                <button id="new-quote" onClick={() => all()}>New Quote</button>
                <a id="tweet-quote" href={('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + quote + '" ' + "--" + author)} target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i> tweet</a>
            </div>

        </div>
    )
};

export default RandomQuotes;