import {useRouter} from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <>
        
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <span class="navbar-brand">AMG</span>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" align-content="center">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item float-right">
                            <a class="nav-link active" aria-current="page" href="..\">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Sobre</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        
        </>
    );
}
