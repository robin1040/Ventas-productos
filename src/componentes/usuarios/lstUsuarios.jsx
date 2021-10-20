
import NavBarComponent from '../home/menuSuperior';
import MenuComponent from '../home/menu';
import React, { useState, useEffect } from 'react'
import { guardarDatabase } from '../config/firebase';
import Swal from 'sweetalert2'
import { consultarDatabase } from '../config/firebase';



const GestionUsuariosComponent = () => {



    let [data, setData] = useState([]);


    useEffect(() => {



        cargarDatos()

    }, []);

    const cargarDatos = async () => {
        Swal.fire({
            title: 'Espere un momento',
            text: 'Cargando información',
            allowOutsideClick: true,
            didOpen: () => {
                Swal.showLoading()
            },
        })
        const datos = await consultarDatabase("usuarios")
        Swal.close()

        setData([...datos])
    }


    //Registrar usuario nuevo

    const [id, setId] = useState('');

    const [email, setEmail] = useState('');

    const [perfil, setPerfil] = useState('');


    const [estado, setEstado] = useState('');

    const handleId = (e) => {
        setId(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePerfil = (e) => {
        setPerfil(e.target.value)
    }

    const handleEstado = (e) => {
        setEstado(e.target.value)
    }


    const guardarDatos = function (e) {
        e.preventDefault()



        const usuario = {
            codigo: id,
            email: email,
            perfil: perfil ,
            estado: estado,
            activo : true
        }

        guardarUsuario(usuario)

        Swal.fire({
            icon: "success",
            text: "Se ha realizado el registro..!"
          })
        limpiarCampos()
    }

    function limpiarCampos() {
        setId("")
        setEmail("")
        setPerfil("")
        setEstado("")
    }

    async function guardarUsuario(usuario) {
        try {
            guardarDatabase('usuarios', usuario);
        } catch (error) {
            console.log("error al registrar usuario." + error)
        }
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
                                <h1 className="h3 mb-0 text-gray-800">Gestión de Usuarios</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                                    <li className="breadcrumb-item">Usuarios</li>
                                    <li className="breadcrumb-item active" aria-current="page">Consultas</li>
                                </ol>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">

                                    <div className="col-lg-12 card mb-4" style={{alignContent: "right"}}>
                                        <input className="col-lg-2 btn-sm btn-success"
                                        type="button" value="Nuevo"
                                         data-toggle="modal" data-target="#logoutModal"
                                        />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="card mb-4">
                                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Usuarios Registrados</h6>
                                            </div>
                                            <div className="table-responsive p-3">
                                                <table className="table align-items-center table-flush" id="dataTable">
                                                    <thead className="thead-light">

                                                        <tr>
                                                            <th>Codigo</th>
                                                            <th>Email</th>
                                                            <th>Perfil</th>
                                                            <th>Estado</th>
                                                            <th>&nbsp;</th>
                                                            <th>&nbsp;</th>
                                                        </tr>

                                                    </thead>

                                                    <tbody>
                                                        {data.length ? (
                                                            data.map(usuario => (
                                                                <tr key={usuario.id}>
                                                                    <td>{usuario.codigo}</td>
                                                                    <td>{usuario.email}</td>
                                                                    <td>{usuario.perfil}</td>
                                                                    <td>{usuario.activo?"Si":"No"}</td>
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


            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Registro usuarios nuevos</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="col-lg-12">
                                    <form onSubmit={guardarDatos} >
                                        <div className="card mb-4">
                                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Información Usuario</h6>
                                            </div>
                                            <div className="card-body">
                                                <label for="id">Identificador del usuario</label>
                                                <input className="form-control  mb-3" type="text"
                                                    maxLength="10" id="id" placeholder="Identificador del usuario" onChange={handleId} />

                                                <label for="nombre">Email del usuario</label>
                                                <input className="form-control  mb-3" id="nombre" type="text" maxLength="150"
                                                    placeholder="Email" onChange={handleEmail} />

                                                <label for="valor">Perfil del usuario</label>
                                                <input className="form-control  mb-3" type="text" id="valor" maxLength="50"
                                                    placeholder="Rol del usuario" onChange={handlePerfil} />



                                                <div className="form-group">
                                                    <label for="impuesto">Estado del usuario</label>
                                                    <select className="select2-single form-control"
                                                    name="impuesto" id="impuesto" onChange={handleEstado}  id="select3Single">
                                                        <option disabled >Seleccione el estado</option>
                                                        <option defaultValue value="activo">Activo</option>
                                                        <option value="no-activo">No activo</option>



                                                    </select>
                                                </div>




                                            </div>

                                        </div>
                                        <div className="col-lg-12 "></div>
                                        <button type="submit" className="btn btn-primary mb-4">Registrar</button>
                                    </form>
                                </div>


              </div>
            </div>
          </div>


        </>
    )

}

export default GestionUsuariosComponent