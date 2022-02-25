import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import ExperienceCatalog from "./components/ExperienceCatalog";
import NavBar from "./components/NavBar";
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import FormAdd from "./components/FormAdd";
import About from "./components/About";
import ExperienceDetail from "./components/ExperienceDetail";





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

    const addExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences/",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }


    const editExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences/edit/{id}",
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE'
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className="App">

            <Header />

            <NavBar />





            <Routes>
                <Route path="/" element={<ExperienceCatalog  experiences={experiences} deleteExperience={deleteExperience}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/add" element={<FormAdd addExperience={addExperience}  />} />


                {/*<Route path="/infoExperience" element={<InfoExperience />} />*/}

                    {/* <Route path="*" element={<Navigate replace to="/" />}  /> */}

                    <Route path="/moreInfo" element={<ExperienceDetail />} />


                </Routes>


            <Footer />



              





        </div>
    );
}

export default App;