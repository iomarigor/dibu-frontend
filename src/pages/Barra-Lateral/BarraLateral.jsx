import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './BarraLateral.css'

function BarraLateral() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column'>
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item text-white fs-4 my-1'>
                        <a href="#" className='nav-link text-white fs-5' aria-current='page'>
                            <i className='bi bi-briefcase'></i>
                            <span className='ms-2 d-none d-sm-inline'>.</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4 my-1'>
                        <a href="#" className='nav-link text-white fs-5' aria-current='page'>
                            <i className='bi bi-calendar'></i>
                            <span className='ms-2 d-none d-sm-inline'>CONVOCATORIA</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4 my-1'>
                        <a href="#" className='nav-link text-white fs-5' aria-current='page'>
                            <i className='bi bi-database'></i>
                            <span className='ms-2 d-none d-sm-inline'>DATOS ESTADISTICOS</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4 my-1'>
                        <a href="#" className='nav-link text-white fs-5' aria-current='page'>
                            <i className='bi bi-info-circle'></i>
                            <span className='ms-2 d-none d-sm-inline'>.</span>
                        </a>
                    </li>
                    <li className='nav-item text-white fs-4 my-1'>
                        <a href="#" className='nav-link text-white fs-5' aria-current='page'>
                            <i className='bi bi-envelope'></i>
                            <span className='ms-2 d-none d-sm-inline'>.</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BarraLateral