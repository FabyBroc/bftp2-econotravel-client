import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './FormAdd.css'


const FormAdd = (props) => {

    let navigate = useNavigate();

    const location = useLocation();
    const  data  = location.state ? location.state.data : null;


    const {register, errors, handleSubmit} = useState("");
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);

    const [datos, setDatos] = useState(data || {
        name: '',
        descripcionCorta: '',
        descripcion: '',
        price: null,
        time: '',
        category: '',
        tags: ''
    })


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.sendReserve(datos).then(() => navigate("/"))
        console.log(datos.name + ' '  + datos.descripcionCorta + ' ' + datos.descripcion + ' ' + datos.price + ' ' + datos.time + ' ' + datos.category + ' ' + datos.imgUrl + ' ')
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

        <section className="form-section">
            <div className="form-wrapper">
                <h1>{ data ? 'Editar experiencia' : 'Añadir Nueva experiencia'}</h1>
                <div className="form-container">
                    <form className="edit-form" onSubmit={enviarDatos} action="">

                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="name"
                                   value={datos.name}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción Corta</label>
                            <textarea value={datos.descripcionCorta} name="descripcionCorta" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción</label>
                            <textarea value={datos.descripcion} name="descripcion" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="price"
                                   value={datos.price}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Duración</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   name="duration"
                                   value={datos.time}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Categorias</label>
                            <textarea value={datos.category} name="description" id="" cols="50" rows="5"
                                      className="form-control"
                                      onChange={handleInputChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Imagen</label>
                            <input type="text"
                                   className="form-control"
                                   onChange={handleInputChange}
                                   value={datos.imgUrl}
                                   name="Imagen"/>
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