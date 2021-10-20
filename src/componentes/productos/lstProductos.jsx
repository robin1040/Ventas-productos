
import NavBarComponent from '../home/menuSuperior';
import MenuComponent from '../home/menu';
import React, { useState, useEffect } from 'react'

import Swal from 'sweetalert2'
import { consultarDatabase } from '../config/firebase';



const GestionProductoComponent = () => {



    let [data, setData] = useState([]);


    useEffect(() => {

          cargarDatos()

    }, []);

    const cargarDatos = async () =>{
        Swal.fire({
            title: 'Espere un momento',
            text: 'Cargando información',
            allowOutsideClick: true,
            didOpen: () => {
              Swal.showLoading()
            },
          })
        const datos = await consultarDatabase("productos")
        Swal.close()

        setData([...datos])
    }

    return (
        <>

            <div id="wrapper">
                <MenuComponent />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavBarComponent />



                        <div className="container-fluid" id="container-wrapper">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Gestión de Productos</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                                    <li className="breadcrumb-item">Productos</li>
                                    <li className="breadcrumb-item active" aria-current="page">Consultas</li>
                                </ol>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">



                                    <div className="col-lg-12">
                                        <div className="card mb-4">
                                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Productos Registrados</h6>
                                            </div>
                                            <div className="table-responsive p-3">
                                                <table className="table align-items-center table-flush" id="dataTable">
                                                    <thead className="thead-light">

                                                        <tr>
                                                            <th>Codigo</th>
                                                            <th>Nombres</th>
                                                            <th>Valor</th>
                                                            <th>Impuesto</th>
                                                            <th>&nbsp;</th>
                                                            <th>&nbsp;</th>
                                                        </tr>

                                                    </thead>

                                                    <tbody>
                                                        {data.length ? (
                                                            data.map(producto => (
                                                                <tr key={producto.id}>
                                                                    <td>{producto.codigo}</td>
                                                                    <td>{producto.nombre}</td>
                                                                    <td>{producto.valor}</td>
                                                                    <td>{producto.impuesto}</td>
                                                                    <td><a href="#" className="btn btn-sm btn-primary"><i className="fa fa-search-plus" aria-hidden="true"></i></a></td>
                                                                    <td><a href="#" className="btn btn-sm btn-primary"><i className="fa fa-print" aria-hidden="true"></i></a></td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colspan="7">No hay registros</td>
                                                            </tr>
                                                        )
                                                        }


                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )

}

export default GestionProductoComponent