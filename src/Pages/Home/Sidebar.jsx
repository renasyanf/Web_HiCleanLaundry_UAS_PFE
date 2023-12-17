import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
        <div className='bg-white'>
            <div className='m-2'>
                <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
                <span className='brand-name fs-4'>Hi Clean</span>
            </div>
            <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                <span className="fs-5">Dashboard</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-5 me-2'></i>
                <span className="fs-5">Home</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-5 me-2'></i>
                <span className="fs-5">Our Services</span>
            </a>
            <a className='list-group-item py-2'>
                <i className='bi bi-house fs-5 me-2'></i>
                <span className="fs-5">Prices</span>
            </a>
        </div>
    </div>
    )
}

export default Sidebar;