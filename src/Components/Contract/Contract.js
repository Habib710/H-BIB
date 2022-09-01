import React from 'react';
import { Icon } from '@iconify/react';
import './Contract.css';
import { Zoom } from 'react-reveal';

const Contract = () => {
    return (
        <div className='text-white  m-5'>
            <h1 className='text-center py-5'>GET IN TOUCH</h1>
            <div className='contract-css'>
            <Zoom>
                <div className='p-banner p-3'>
                    <h2>DON'T BE SHY !</h2>
                    <p className='p-banner my-4'>Feel free to get in touch with me. <br /> I am always open to discussing new projects, <br /> creative ideas or opportunities to be part of your visions.</p>

                     <h3 className='littel'><Icon className='fs-1' icon="entypo:address" /> ADDRESS POINT</h3>
                    <h5 className='ms-lg-5'>Narayangonj,Dhaka,Bangladesh</h5>
                    <br />
                    <h3><Icon className='fs-1' icon="ic:outline-attach-email" /> MAIL ME</h3>
                    <h5 className='ms-lg-5'>mdhabib71024@gmail</h5>
                    <br />
                    <h3><Icon className='fs-1' icon="eva:phone-call-fill" />  CALL ME</h3>
                    <h5 className='ms-lg-5'>+8801571024601</h5>
                </div>
                <div>
                    <input className='input' type="text" placeholder='Your Full Name' />
                    <input className='input' type="email" placeholder='Your Mail' />
                    <input className='input' type="text" placeholder='Subject' />
                    <textarea rows="4"  className='input' type="text" placeholder='Your Massage' />
                   <button className='btn-grad m-3'>Send <Icon className='fs-5' icon="bxs:send" /> </button>
                    
                </div>
                </Zoom>
            </div>
            
        </div>
    );
};

export default Contract;