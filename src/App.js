import './App.css';
import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ExperienceCatalogo from "./components/ExperienceCatalogo";


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
           <NavBar />
        </div>
    );
}

export default App;
