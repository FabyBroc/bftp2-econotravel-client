import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
<<<<<<< HEAD
import ReactDOM from "react-dom";
import ExperienceCatalog from "./components/ExperienceCatalog";
import NavBar from "./components/NavBar";

ReactDOM.render(<App/>, document.getElementById('root'));
=======

import ExperienceCatalogo from "./components/ExperienceCatalogo";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
ReactDOM.render(<App />, document.getElementById('root'));


>>>>>>> 32225b92d5b1da65e25ebe28f22216020a508a63

function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);



    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const addExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))


    }

    return (
<<<<<<< HEAD

        <div className="App">
                    <Header />
                    <NavBar />
                <ExperienceCatalog  experiences={experiences} />
=======
        <div className="App">
            <Header />

            <NavBar />
            <ExperienceCatalogo experiences={experiences} addExperience={addExperience} />


>>>>>>> 32225b92d5b1da65e25ebe28f22216020a508a63
        </div>
    );
}

export default App;