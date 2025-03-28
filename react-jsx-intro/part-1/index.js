const FirstComponent = () => {
    return <h1>My very first component</h1>;
};

const NamedComponent = (props) => {
    return <p>My name is {props.name} </p>
}

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Rich" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);