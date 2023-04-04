import { useEffect, useState } from "react";

const RANDOM_QUOTES_API = "https://api.quotable.io/random";


export function useRandomQuotes() {

    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();
    const [reload, setReload] = useState(0);

    const doReload = () => {
        let addReload = reload + 1;
        setReload(addReload);
    }

    useEffect(() => {
        fetch(RANDOM_QUOTES_API)
        .then(res => res.json())
        .then(data => {
            const {content, author} = data;
            setQuote(content, author)
            setAuthor(author)
        })
    }, [reload]);

    return { quote, author, doReload};
};