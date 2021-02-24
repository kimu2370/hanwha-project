import React, {useEffect, useState} from "react";

const App = () => {
    const [name, setName] = useState("");
    const [quote, setQuote] = useState("");

    const handleChange = e => {
        e.target.name === "name" && setName(e.target.value);
        e.target.name === "quote" && setQuote(e.target.value);
    };

    const handleClick = () => {
        fetch("http://localhost:3001/users", {
            method: "POST",
            body: JSON.stringify({
                name,
                quote,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => {
            console.log("server response>>>", JSON.stringify(res));
        });
    };

    useEffect(() => {
        console.log("component mounted");
        fetch("http://localhost:3001", {
            method: "GET",
        }).then(res => {
            console.log("get response", res);
        });
    }, []);

    return (
        <>
            <h1>연습 인풋</h1>
            <input type="text" placeholder="name" name="name" value={name} onChange={handleChange} />
            <input type="text" placeholder="quote" name="quote" value={quote} onChange={handleChange} />
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
        </>
    );
};
export default App;
