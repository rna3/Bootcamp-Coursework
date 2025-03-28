const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <h3>{name} (@{username})</h3>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Tweet 
                username="cooldev" 
                name="Cool Developer" 
                date="Jan 1, 2025" 
                message="Just learned React hooks! #ReactJS"
            />
            <Tweet 
                username="codeQueen" 
                name="Queen of Code" 
                date="Jan 2, 2025" 
                message="CSS Flexbox is so powerful! #WebDev"
            />
            <Tweet 
                username="techGuru" 
                name="Tech Guru" 
                date="Jan 3, 2025" 
                message="AI in programming is the future. #AI #Programming"
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);