import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import ExperienceCatalog from "./components/ExperienceCatalog";
import NavBar from "./components/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import FormAdd from "./components/FormAdd";





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

                <Routes>
                    <Route path="/" element={<ExperienceCatalog  experiences={experiences} />} />
<<<<<<< HEAD
                    {/*<Route path="/infoExperience" element={<InfoExperience />} />*/}
                    {/*<Route path="/add" element={<FormAdd experience={addExperience(newExperience, setNewExperience)} />} />*/}
=======
<<<<<<< HEAD
                    {/*<Route path="/infoExperience" element={InfoExperience} />*/}
                    <Route path="/add" element={FormAdd} />
=======
                    <Route path="/infoExperience" element={<InfoExperience />} />
                    <Route path="/add" element={<FormAdd experience={addExperience(newExperience, setNewExperience)} />} />
>>>>>>> c83ec15fe5b5716c83198233b48204933e3bced7
>>>>>>> 8de63fe249db89ad6395b02cad00556035b45e19
                    <Route path="*" element={<Navigate replace to="/" />}  />
                </Routes>

            <Footer />



        </div>
    );
}

export default App;