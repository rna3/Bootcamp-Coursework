const Person = ({name, age, hobbies = []}) => {
    const voters = age >= 18
    const shortName = name.length > 8 ? name.slice(0,6) : name;

    return (<div>
    <p>Learn Some Information about this person</p>
    <p>name:{shortName}</p>
    <p>age:{age}</p>
    <h3>{voters ? "Please go Vote!" : "You must be 18 to vote"}</h3>
    <h3>Hobbies:</h3>
    <ul> {hobbies.map (h => <li key={h.id}> {h}</li>)}   </ul>
    </div>)

}


const App = () => {
    return (<div>
        <Person name="Rich" age={35} hobbies={["coding", "gaming", "reading"]}/>
        <Person name="Ryo" age={6} hobbies={["gaming", "reading"]}/>
        <Person name="Richard" age={56} hobbies={["pickleball", "gaming", "reading"]}/>
    </div>)
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);