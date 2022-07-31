import React, { Component } from 'react'

export default class Bai1 extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Header*/}
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-start">
                        <div className="m-4 m-lg-5">
                            <h1 className="display-5 fw-bold">A warm welcome!</h1>
                            <p className="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore soluta quibusdam deleniti rem tenetur! Porro delectus natus est consectetur beatae odit. Dolorum quae omnis voluptates.</p>
                            <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Plan*/}
            <div className="container px-lg-5">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img src='./img/products/black-car.jpg' alt='...' />
                        <div className="car-body py-4">
                            <h3>Card title</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur laudantium fugiat architecto saepe! Modi quisquam voluptatem cum at sapiente quidem nulla harum quas deleniti!</p>
                            <a className="btn btn-primary btn-lg" href="#!">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src='./img/products/black-car.jpg' alt='...' />
                        <div className="car-body py-4">
                            <h3>Card title</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur laudantium fugiat architecto saepe! Modi quisquam voluptatem cum at sapiente quidem nulla harum quas deleniti!</p>
                            <a className="btn btn-primary btn-lg " href="#!">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src='./img/products/black-car.jpg' alt='...' />
                        <div className="car-body py-4">
                            <h3>Card title</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur laudantium fugiat architecto saepe! Modi quisquam voluptatem cum at sapiente quidem nulla harum quas deleniti!</p>
                            <a className="btn btn-primary btn-lg " href="#!">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src='./img/products/black-car.jpg' alt='...' />
                        <div className="car-body py-4">
                            <h3>Card title</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur laudantium fugiat architecto saepe! Modi quisquam voluptatem cum at sapiente quidem nulla harum quas deleniti!</p>
                            <a className="btn btn-primary btn-lg " href="#!">Find Out More!</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           {/* Footer*/}
            <footer className="py-4 bg-dark mt-4">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website 2022</p>
                </div>
            </footer>
        </div>

    )
  }
}
