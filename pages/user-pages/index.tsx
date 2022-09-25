function HomePage( /*{ data }: any*/ ) {
    /* Adicionar medições para cada um dos sensores/atuadores */
    return (
        <>
        <h1>Live Data:</h1>

        <div>
            <h2> Temperatura: { /*data.temperature */ } </h2> 
        </div>

        <div>
            <h2> Humidade: { /*data.humidity*/ } </h2>
        </div>

        <div>
            <h2> Peltier Frio: { /*data.peltier_cold*/ } </h2>
        </div>

        <div>
            <h2> Peltier Quente: { /*data.peltier_warm*/ } </h2>
        </div>

        <div>
            <h2> Nível de água: { /*data.water_level*/ } </h2>
        </div>
        </>
    )
} 

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:3000/api/ESP-DataHandler');
//     const data = await res.json();

//     console.log(data); 

//     return { props: { data }, revalidate: 2 };
// }

export default HomePage; 