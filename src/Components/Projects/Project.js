import React from 'react'
import './Project.css'
import depo from '../images/deponik.png'
import eshop from '../images/e-shop.png'
import sss from '../images/asa.png'
import asa from '../images/sss.png'
import ee from '../images/jantrik.png'
import doc from '../images/doc.png'
import tas from '../images/task.png'

const Project = () => {
  return (
    <div className="container">
      <h1 className="text-center text-white py-4">PROJECTS</h1>
      <p className="text-center text-white">
        My projects makes use of vast variety of latest technology tools. <br />{' '}
        My best experience is to create Data Science projects and deploy them to
        web applications using cloud infrastructure.
      </p>
      <div className="text-white div-card-main my-5">
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={tas} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={depo} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={sss} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={doc} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={eshop} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
        <div className="div-card d-lg-flex ">
          <img width="100%" height="200px" src={ee} alt="img" />
          <div className="ms-4">
            <h4>anme</h4>
            <p>
              My best experience is to create Data Science projects and deploy
              them to web applications using cloud infrastructure.
            </p>
            <button className="btn-code">Code</button>
            <button className="btn-demo">Demo </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
