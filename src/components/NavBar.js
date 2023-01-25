import React from 'react'
import './NavBar.css'

export default function NavBar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">OP_Updates</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form> */}
                            <form className="d-fluid justify-content-start">
                                {/* <button class="btn btn-outline-success me-2" type="button">Main button</button> */}
                                <button className="btn btn-sm btn-outline-light" type="button">
                                    <a className='star' href='https://github.com/Cvanshulll/OP_Updates' target="_blank">&#9734;&nbsp;Star</a>
                                </button>
                            </form>

                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
}
