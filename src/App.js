import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import ExperienceCatalog from "./components/ExperienceCatalog";
import NavBar from "./components/NavBar";
import { Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import FormAdd from "./components/FormAdd";
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

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'GET'
            }
        ).then(_ => setRequiresUpdate(true))
    }



    return (
        <div className="App">

                    <Header />

                    <NavBar />






                <Routes>



                    <Route exact path="/" element={<ExperienceCatalog  experiences={experiences} />} />

                    {/*<Route path="/infoExperience" element={<InfoExperience />} />*/}
                    <Route path="/add" element={<FormAdd />} />

                    {/* <Route path="*" element={<Navigate replace to="/" />}  /> */}

                    <Route path="/moreInfo" element={<ExperienceDetail />} />


                </Routes>


            <Footer />



              





        </div>
    );
}

export default App;