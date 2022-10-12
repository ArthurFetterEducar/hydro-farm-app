export default function Navbar() {
    return (
        <>
        
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                {/*Logo*/}
                <span className="navbar-brand">AMG</span>
                {/*/Logo*/}

                {/*Menu Drop-Down*/}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#AMGNavbar" aria-controls="AMGNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="AMGNavbar" align-content="center">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item float-right">
                        <a className="nav-link active" aria-current="page" href="..\">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Contatos</a>
                    </li>
                    </ul>
                </div>
                {/*/Menu Drop-Down*/}
            </div>
        </nav> 
        
        </>
    );
}
