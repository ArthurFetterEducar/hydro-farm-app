/* Prisma db */
import { PrismaClient } from '@prisma/client';

/* CSS */
import styles from '../../styles/stats.module.css'

/* Definir a função toJSON para o BigInt, proveniente da base de dados) */
BigInt.prototype["toJSON"] = function () {
    return this.toString();
};

/* Componente da pagina */
function StatsPage( { data } ) {
    let estado_bomba = data[0].Pump_State ? 'ligada' : 'desligada';
    let estado_refrigeracao;
    let nivel_agua;

    if (!data[0].Petier_Hot_State && !data[0].Peltier_Cold_State) {
        estado_refrigeracao = 'desligado';
    }
    else if (data[0].Petier_Hot_State){
        estado_refrigeracao = 'aquecendo a estufa';
    }
    else if (data[0].Peltier_Cold_State) {
        estado_refrigeracao = 'resfriando a estufa';
    }

    if (data[0].Water_Level > 0) {
        nivel_agua = 'alto';
    }
    else if (data[0].Water_Level < 0) {
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
                                <h4 className={styles.stats_text}> { data[0].Temperature + '°C'} </h4>    
                            </div>

                            
                        </div>
                        {/*/Primeira linha*/}

                        {/*Segunda linha*/}
                        <div className={'row'}>
                            <div className={'col-8'}>
                                <h4 className={styles.stats_text}> Humidade </h4>
                            </div>
                            <div className={styles.data_box + ' col-4'}>
                                <h4 className={styles.stats_text}> {data[0].Humidity + '%'} </h4>
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
    const prisma = new PrismaClient();

    const measure = await prisma.teste2.findMany({
        orderBy: {
            id: "desc"
        }, 
        take: 1
    });

    const data = await JSON.parse(JSON.stringify(measure));

    console.log(data); 

    return { props: { data }, revalidate: 2 };
}

export default StatsPage; 