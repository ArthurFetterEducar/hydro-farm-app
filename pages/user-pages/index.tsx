import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


BigInt.prototype["toJSON"] = function () {
    return this.toString();
};


function HomePage( { data }: any ) {
    /* Adicionar medições para cada um dos sensores/atuadores */
    return (
        <>
        <h1>Live Data:</h1>

        <div>
            <h2> Temperatura: { data.temperature } </h2> 
        </div>

        <div>
            <h2> Humidade: { data.humidity } </h2>
        </div>

        <div>
            <h2> Peltier Frio: { data.peltier_cold } </h2>
        </div>

        <div>
            <h2> Peltier Quente: { data.peltier_warm } </h2>
        </div>

        <div>
            <h2> Nível de água: { data.water_level } </h2>
        </div>
        </>
    )
} 

export async function getStaticProps() {
    const measure = await prisma.teste.findFirst({ where: {id: 1} });
    const data = await JSON.parse(JSON.stringify(measure));

    console.log(data); 

    return { props: { data } };
}

export default HomePage; 