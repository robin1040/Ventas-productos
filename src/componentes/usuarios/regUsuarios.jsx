import React, { useState } from 'react'
import NavBarComponent from '../home/menuSuperior';
import MenuComponent from '../home/menu';
import { guardarDatabase } from '../config/firebase';
import Swal from 'sweetalert2'

const RegistroUsuariosComponent = () => {



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
                                <h1 className="h3 mb-0 text-gray-800">Administración de Usuarios</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                                    <li className="breadcrumb-item">Usuarios</li>
                                    <li className="breadcrumb-item active" aria-current="page">Registro de Usuarios</li>
                                </ol>
                            </div>
                            <div className="row">

                                <div className="col-lg-12">
                                    <form onSubmit={guardarDatos}>
                                        <div className="card mb-4">
                                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 className="m-0 font-weight-bold text-primary">Información Usuarios</h6>
                                            </div>
                                            <div className="card-body">
                                                <label for="id">Codigo</label>
                                                <input className="form-control  mb-3" type="text"
                                                    maxLength="10" id="id" placeholder="Identificador del producto" onChange={handleId} />

                                                <label for="nombre">Email</label>
                                                <input className="form-control  mb-3" id="nombre" type="text" maxLength="150"
                                                    placeholder="Nombre del producto" onChange={handleEmail} />

                                                <label for="valor">Perfil</label>
                                                <input className="form-control  mb-3" type="number" id="valor" maxLength="10"
                                                    placeholder="Precio del producto" onChange={handlePerfil} />



                                                <div className="form-group">
                                                    <label for="impuesto">Estado</label>
                                                    <select className="select2-single form-control" name="estado" id="estado" onChange={handleEstado} id="select3Single">
                                                        <option disabled >Seleccione el estado</option>
                                                        <option defaultValue value="activo">Activo</option>
                                                        <option value="No-activo">No activo</option>



                                                    </select>
                                                </div>




                                            </div>

                                        </div>
                                        <div className="col-lg-12"></div>
                                        <button type="submit" className="btn btn-primary">Registrar</button>
                                    </form>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default RegistroUsuariosComponent