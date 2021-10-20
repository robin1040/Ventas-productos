import React from 'react'

import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router';

const LoginComponent = () => {

    //para navegar a diferentes rutas
    const history = useHistory()

    const logo = "./../images/logo.png"

    const respuestaGoogle = (respuesta) => {
        console.log(respuesta)
        console.log(respuesta.profileObj);
        if (respuesta.profileObj) {

            sessionStorage.setItem("usuario",JSON.stringify(respuesta.profileObj))
            history.push("/home")
        }
    }
    /*
    const firebaseConfig = {
        apiKey: "AIzaSyC2-I3QyI3VfrCHyjAE5vK81LzCxNeCycE",
        authDomain: "misiontic2022-df733.firebaseapp.com",
        projectId: "misiontic2022-df733",
        storageBucket: "misiontic2022-df733.appspot.com",
        messagingSenderId: "883830207830",
        appId: "1:883830207830:web:cfae93fc9d5629e23f92f7",
        measurementId: "G-RWESBZBJMY"
    }




    const app = firebase.initializeApp(firebaseConfig);

    const auth = app.auth()

    const proveedor = new firebase.auth.GoogleAuthProvider()

    async function login(){
        try{
            const respuesta = await auth.signInWithPopup(proveedor)
            console.log(respuesta.user.displayName)
        }catch(error){

        }

    }


    const handleClick = () => {
        // Initialize Firebase
        //firebase.initializeApp(firebaseConfig)
        console.log("Pruebas")
    }*/

    const autenticar = function (e) {
        e.preventDefault()
    }




    return (
        <>
            <div className="container-login">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-12 col-md-9">
                        <div className="card shadow-sm my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="login-form">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                                <a href="login.html" className="btn btn-google btn-block tm-4">
                                                    <img src={logo} height="100" width="100"></img>
                                                </a>
                                            </div>
                                            <form className="user" onSubmit={autenticar}>
                                                <div className="form-group ">
                                                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control" id="exampleInputPassword"
                                                        placeholder="Password" />
                                                </div>

                                                <div className="form-group">
                                                    <a href="index.html" className="btn btn-primary btn-block">Login</a>
                                                </div>
                                                <hr />
                                                <GoogleLogin
                                                    clientId="495139720782-gdel9h3qm1sa4crmoea90osspr1kchnn.apps.googleusercontent.com"
                                                    render={renderProps => (
                                                        <button className="btn btn-primary btn-block"
                                                            onClick={renderProps.onClick}
                                                            disabled={renderProps.disabled}>
                                                            Autenticarse con cuenta de Google</button>
                                                    )}
                                                    buttonText="Login"
                                                    onSuccess={respuestaGoogle}
                                                    onFailure={respuestaGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />

                                            </form>
                                            <hr />


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

export default LoginComponent