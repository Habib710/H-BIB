import React from 'react'
import './Project.css'
import depo from '../images/deponik.png'
import eshop from '../images/todo.png'
import sss from '../images/asa.png'
import asa from '../images/sss.png'
import ee from '../images/jantrik.png'
import doc from '../images/doc.png'
import tas from '../images/task.png'
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className=" m-5">
      <h1 className="text-center text-white py-4">PROJECTS</h1>
      <p className="text-center p-banner my-5 ">
        My projects makes use of vast variety of latest technology tools. <br />{' '}
        My best experience is to create Data Science projects and deploy them to
        web applications using cloud infrastructure.
      </p>
      <div className="text-white div-card-main my-5">
      <Zoom left big cascade>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={tas} alt="img" />
          <div className="ms-4">
            <h4>Ed Teach</h4>
            <p>
              Front-end <br />

            ReactJs, Bootstrap, React Hook,Router etc.
            </p>
            <a href='https://github.com/Habib710/Ed-Teach' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://ed-teach.web.app/home' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img  width="100%" height="200px" src={depo} alt="img" />
          <div className="ms-4">
            <h4>Deponik</h4>
            <p>
            ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Bootstrap, React Hook Form.
            </p>
            <a href='https://github.com/Habib710/Deponik-client-p' target="blank" className="btn-code">Code <Icon icon="bx:code-alt" /></a>
            <a href='https://deponic-62e80.web.app/home' target="blank" className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /></a>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={ee} alt="img" />
          <div className="ms-4">
            <h4>JanTrik</h4>
            <p>
              
            ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, JWT, Bootstrap, React Hook Form.
            </p>
            <a href='https://jantrik-d4cca.web.app/' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://github.com/Habib710/Jantrik-client-p' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
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
       
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={asa} alt="img" />
          <div className="ms-4">
            <h4>dEMO</h4>
            <p>
            Front-end <br />

ReactJs, Bootstrap, React Hook,Router etc.
            </p>
            <a href='https://fir-9ceef.web.app/' target="blank" className="btn-code">Code  <Icon icon="bx:code-alt" /></a>
            <a href='https://github.com/Habib710/Demo-task' target="blank"  className="btn-demo">Demo  <Icon className='fs-5' icon="foundation:monitor" /> </a>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Project
