import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './FormAdd.css'


const FormAdd = (props, {addExperience}) => {

    let navigate = useNavigate();



    const [register, errors, handleSubmit] = useState("");

    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [newExperience, setNewExperience] = useState("");
    const [experienceData, setExperienceData] = useState({
        name:'',
        descripcion:'',
        category:'',
        time:'',
        price:'',
        imgUrl:'',
    })



    const handleInputChange = (event) => {
        setExperienceData({
            ...experienceData,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.addExperience(experienceData)
        navigate("/")
    }



    return (

        <section className="form-section">
            <div className="form-wrapper">
                <h1>Añadir Nueva experiencia</h1>
                <div className="form-container">
                    <form className="edit-form" onSubmit={enviarDatos} action="">

                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="name"
                                   value={experienceData.name}/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <textarea value={experienceData.descripcion} name="descripcion" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="price"
                                   value={experienceData.price}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Duración</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="time"
                                   value={experienceData.time}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Categorias</label>
                            <textarea value={experienceData.category} name="category" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Imagen</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   value={experienceData.imgUrl}
                                   name="imgUrl"/>
                        </div>


                        <div className="btn-edit-container">
                            <button type="submit" className="btn-edit">GUARDAR</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>

    );
}

export default FormAdd