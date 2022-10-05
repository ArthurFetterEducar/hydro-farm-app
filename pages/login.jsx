import {useRouter} from "next/router";

function Login() {
    const router = useRouter();
    return (
        <>
        <div>
            <h1>This is the login page</h1>
        </div>
        
        <div>
            <button type="button" onClick={() => router.replace('/user-pages/')}>les goooooo</button>
        </div>
        </>
    )
}

export default Login;