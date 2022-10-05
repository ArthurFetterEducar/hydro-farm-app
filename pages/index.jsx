import {useRouter} from 'next/router'


const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="text-2xl"> Home </div>
      <div>
        <button onClick={() => router.push('login')}> Login </button>
      </div>
    </>
  )
}

export default Home;
