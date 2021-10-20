import React from 'react'


const MenuComponent = () => {


    //const logo = "./../images/logo.png"

    return (

        <>
            <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon">

                    </div>
                    <div className="sidebar-brand-text mx-3">Consultorio de Ingenieros</div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Inicio</span></a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Opciones
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
                        aria-expanded="true" aria-controls="collapseBootstrap">
                        <i className="far fa-fw fa-window-maximize"></i>
                        <span>Ventas</span>
                    </a>
                    <div id="collapseBootstrap" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Ventas</h6>
                            <a className="collapse-item" href="registroventa.html">Registro</a>
                            <a className="collapse-item" href="consultaventas.html">Consultas</a>

                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap2"
                        aria-expanded="true" aria-controls="collapseBootstrap2">
                        <i className="far fa-fw fa-window-maximize"></i>
                        <span>Productos</span>
                    </a>
                    <div id="collapseBootstrap2" className="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Productos</h6>
                            <a className="collapse-item" href="/regProd">Registro</a>
                            <a className="collapse-item" href="/gestionprod">Consultas</a>

                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseForm" aria-expanded="true"
                        aria-controls="collapseForm">
                        <i className="fab fa-fw fa-wpforms"></i>
                        <span>Usuarios</span>
                    </a>
                    <div id="collapseForm" className="collapse" aria-labelledby="headingForm" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Usuarios</h6>
                            <a className="collapse-item" href="/gestoonuser">Registro</a>
                            <a className="collapse-item" href="/gestoonuser">Gestión de Usuarios</a>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider" />


                <hr className="sidebar-divider" />
                <div className="version" id="version-ruangadmin"></div>
            </ul>
        </>
    )

}

export default MenuComponent