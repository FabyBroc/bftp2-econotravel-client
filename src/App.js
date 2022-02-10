import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import ExperienceCatalog from "./components/ExperienceCatalog";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
ReactDOM.render(<App />, document.getElementById('root'));




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
        <div className="App">
                    <Header />
                    <NavBar />
                    <ExperienceCatalog experiences={experiences} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ExperienceCatalog  experiences={experiences} />} />
                  {/*  <Route path="/infoExperience" element={InfoExperience} />
                    <Route path="/add" element={FormAdd} />*/}
                    <Route path="*" element={<Navigate replace to="/" />}  />
                </Routes>
            </BrowserRouter>

        </div>


    );
}

export default App;