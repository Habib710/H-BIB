import React from 'react'
import './Project.css'
import depo from '../images/TestCase_1.png'
import eshop from '../images/todo.png'
import sss from '../images/asa.png'
import asa from '../images/sss.png'
import ee from '../images/sele_11.png'
import doc from '../images/doc.png'
import tas from '../images/bug_1.png'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className=" m-5">
      <h1 className="text-center text-white py-4">PROJECTS</h1>
      <p className="text-center p-banner my-5 ">
        “End-to-End Test Automation Suite With Test Strategy, Bug Reports, and CI Integration”
      </p>
      <div className="text-white div-card-main my-5">
     <Fade direction="up" cascade damping={0.15} triggerOnce>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={tas} alt="img" />
          <div className="ms-4">
            <h4>Bug Report</h4>
            <p>
              OTT platfrom website <br />

            Test types : functional,Non-functional,prefomence, regression, UI/UX.
            </p>
            
            <a href='https://docs.google.com/spreadsheets/d/1UJFwc_Th2NrigBPnVi_yUX9ihuja1E75X7h1l48CD0E/edit?gid=1352034207#gid=1352034207' target="blank"  className="btn-demo">Click to Know  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img  width="100%" height="200px" src={depo} alt="img" />
          <div className="ms-4">
            <h4>Test Case</h4>
            <p>
          E-Comerce website
            </p>
            <a href='https://docs.google.com/spreadsheets/d/1sHKrWEHinDly5w8cpWhlxakfGY84d7Jvqq5c4v_25HQ/edit?gid=0#gid=0' target="blank" className="btn-demo">Click to Know <Icon className='fs-5' icon="foundation:monitor" /></a>
           
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={ee} alt="img" />
          <div className="ms-4">
            <h4>Selenium Projct</h4>
            <p>
              
            Automation, Healthcare website testing, Booking,login.
            </p>
            <a href='https://github.com/Habib710/Healthcare-service_with_selenium' target="blank"  className="btn-demo">Go to the Code <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={eshop} alt="img" />
          <div className="ms-4">
            <h4>Inventory</h4>
            <p>
            

            
            ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Bootstrap, React Hook Form.
            </p>
            <a href='https://task-inventroy.web.app/' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://github.com/Habib710/Task-inventory' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={sss} alt="img" />
          <div className="ms-4">
            <h4>SCRUM</h4>
            <p>
            Front-end <br />

ReactJs, Bootstrap, React Hook,Router etc.
            </p>
            <a href='https://task-scrum-ea811.web.app/' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://github.com/Habib710/TASk-SCRUM' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={doc} alt="img" />
          <div className="ms-4">
            <h4>Doctor</h4>
            <p>
               
            ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Bootstrap, React Hook Form.
            </p>
            <a href='https://doctor-5a5be.web.app/' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://github.com/Habib710/Doctor-Portal' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
       
      
       </Fade>
      </div>
    </div>
  )
}

export default Project
