/* Prisma db */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* CSS */
import styles from '../../styles/stats.module.css'

/* Definir a função toJSON para o BigInt, proveniente da base de dados) */
BigInt.prototype["toJSON"] = function () {
    return this.toString();
};

/* Componente da pagina */
function StatsPage( { data } ) {
    let estado_bomba = data.Pump_State ? 'ligada' : 'desligada';
    let estado_refrigeracao;
    let nivel_agua;

    if (!data.Petier_Hot_State && !data.Peltier_Cold_State) {
        estado_refrigeracao = 'desligado';
    }
    else if (data.Petier_Hot_State){
        estado_refrigeracao = 'aquecendo a estufa';
    }
    else if (data.Peltier_Cold_State) {
        estado_refrigeracao = 'resfriando a estufa';
    }

    if (data.Water_Level > 0) {
        nivel_agua = 'alto';
    }
    else if (data.Water_Level < 0) {
        nivel_agua = 'baixo';
    }
    else {
        nivel_agua = 'ok';
    }

    return (
        <div className={styles.background}>

        {/*status table*/}
        <div className={styles.stats_board}>
            {/*status table título*/}
            <div className={styles.title_box}>
                <h1 className={styles.board_title}>Live Data</h1>
            </div>
            {/*/status table título*/}
            
            {/*status table corpo*/}
            <div className={styles.board_body + ' container'}>
                <div className={'row'}>
                    <div className={styles.stats_box + ' col'}>
                        {/*Primeira linha*/}
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <h4 className={styles.stats_text}> Temperatura </h4>    
                            </div>
                            <div className={styles.data_box + ' col-4'}>
                                <h4 className={styles.stats_text}> { data.Temperature + '°C'} </h4>    
                            </div>

                            
                        </div>
                        {/*/Primeira linha*/}

                        {/*Segunda linha*/}
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <h4 className={styles.stats_text}> Humidade </h4>
                            </div>
                            <div className={styles.data_box + ' col-4'}>
                                <h4 className={styles.stats_text}> {data.Humidity + '%'} </h4>
                            </div>
                        </div>
                        {/*/Segunda linha*/}
                    </div>
                </div>
                
                <div className={'row'}>
                    <div className={styles.stats_box + ' col'}>
                        {/*Terceira linha*/}
                        <div className={'row'}>
                            
                            <div className={'col'}>
                                <h4 className={styles.stats_text}> A bomba está { estado_bomba }.</h4>
                            </div>
                            
                        </div>
                        {/*/Terceira linha*/}

                        {/*Quarta linha*/}
                        <div className={'row'}>
                            <div className={'col'}>
                                <h4 className={styles.stats_text}> O sistema de climatização está { estado_refrigeracao }. </h4>
                            </div>
                        </div>
                        {/*/Quarta linha*/}

                        {/*Quinta linha*/}
                        <div className={'row'}>
                            <div className={'col'}>
                                <h4 className={styles.stats_text}> O nível de água no sistema está { nivel_agua }. </h4>
                            </div>
                        </div>
                        {/*/Quinta linha*/}
                    </div>
                </div>
                
            </div>
            {/*/status table corpo*/}
        </div>  
        {/*/status table*/}

        </div>
    )
} 

export async function getStaticProps() {
    const sensorData = await prisma.teste2.create({
        data: {
            Temperature: 70,
            Humidity: 100,          
            Petier_Hot_Temperature: 22, 
            Petier_Hot_State: true,
            Peltier_Cold_Temperature: 11,
            Peltier_Cold_State: false,
            Water_Level: 0, 
            Pump_State: false 
        }
    });
    
    const measure = await prisma.teste.findFirst();
    const data = await JSON.parse(JSON.stringify(measure));

    console.log(data); 

    return { props: {data} };
}

export default StatsPage; 