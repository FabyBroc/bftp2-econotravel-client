import React from 'react'
<<<<<<< HEAD
import './Card.css'
=======
import bootstrap from "react-bootstrap”;

>>>>>>> 12a6856f7f70e28cfbcc073637993c3997d6de38

function ExperienceCatalogo () {
    return (
    <div className="card">
        <img className="image-card"
            src="https://images.pexels.com/photos/10320658/pexels-photo-10320658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Mountain" />
            <div className="card-body">
                <h5 className="card-title">Highland</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi
                    eaque officia, sit
                    modi distinctio similique accusantium ut repellendus voluptate?</p>
                <a href="#" className="btn" >Mountain View</a>
            </div>
    </div>
    );


return (
    <div className={Card}>
    <CCard style={{ width: '18rem' }}>

        <CCardImage orientation="top" src="/images/react.jpg" />

        <CCardBody>

            <CCardTitle>Card title</CCardTitle>

            <CCardText>

                Some quick example text to build on the card title and make up the bulk of the card's content.

            </CCardText>

        </CCardBody>

        <CListGroup flush>

            <CListGroupItem>Cras justo odio</CListGroupItem>

            <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>

            <CListGroupItem>Vestibulum at eros</CListGroupItem>

        </CListGroup>

        <CCardBody>

            <CCardLink href="#">Card link</CCardLink>

            <CCardLink href="#">Another link</CCardLink>

        </CCardBody>

    </CCard>

)





}

export default ExperienceCatalogo
