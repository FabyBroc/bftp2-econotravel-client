import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./components/Header";
<<<<<<< HEAD
import ExperienceCatalogo from "./components/ExperienceCatalogo";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
ReactDOM.render(<App />, document.getElementById('root'));


=======
import ExperienceCatalog from "./components/ExperienceCatalog";
>>>>>>> f649338b4c8af62369835f4092856aaa1166c735


function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences(experiences))
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName})
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
        <div className="App">
            <Header />
<<<<<<< HEAD
            <NavBar />
            <ExperienceCatalogo experiences={experiences} addExperience={addExperience} />



=======
            <ExperienceCatalog />
>>>>>>> f649338b4c8af62369835f4092856aaa1166c735
        </div>
    );
}

export default App;
