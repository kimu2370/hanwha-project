import React, {useState} from 'react';

const App = () => {
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');

    const handleChange = e => {
        e.target.name === 'name' && setName(e.target.value);
        e.target.name === 'quote' && setQuote(e.target.value);
    };

    const handleClick = () => {
        console.log('clicked');

        fetch('http://localhost:3001/users', {
            method: 'POST',
        }).then(res => {
            console.log(res);
        });
    };

    return (
        <>
            <h1>연습 인풋</h1>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="quote"
                name="quote"
                value={quote}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleClick}>
                Submit
            </button>
        </>
    );
};
export default App;
