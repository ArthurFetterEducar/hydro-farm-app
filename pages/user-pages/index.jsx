/*Prisma db*/
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*CSS*/
import styles from '../../styles/stats.module.css'

BigInt.prototype["toJSON"] = function () {
    return this.toString();
};


function HomePage( { data } ) {
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

                {/*Primeira linha*/}
                <div className={'row'}>
                    <div className={styles.stats_box + ' col-5'}>
                        <h3> Temperatura </h3>    
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> { data.Temperature } </h3>    
                    </div>

                    <div className={styles.stats_box + ' col-5'}>
                        <h3> Humidade </h3>
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> {data.Humidity } </h3>
                    </div>
                </div>
                {/*/Primeira linha*/}

                {/*Segunda linha*/}
                <div className={'row'}>
                    <div className={styles.stats_box + ' col-5'}>
                        <h3> Peltier Frio </h3>
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> { data.Peltier_Cold_Temperature } </h3>
                    </div>

                    <div className={styles.stats_box + ' col-5'}>
                        <h3> Peltier Quente </h3>
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> { data.Petier_Hot_Temperature } </h3>
                    </div>
                </div>
                {/*/Segunda linha*/}

                {/*Terceira linha*/}
                <div className={'row'}>
                    <div className={styles.stats_box + ' col-5'}>
                        <h3> Nível de água </h3>
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> { data.Waterl_Level } </h3>
                    </div>

                    <div className={styles.stats_box + ' col-5'}>
                        <h3> </h3>
                    </div>
                    <div className={styles.data_box + ' col-1'}>
                        <h3> </h3>
                    </div>
                </div>
                {/*/Terceira linha*/}

            </div>
            {/*/status table corpo*/}
        </div>  
        {/*/status table*/}

        </div>
    )
} 

export async function getStaticProps() {
    const measure = await prisma.teste.findFirst({ where: {id: 1} });
    const data = await JSON.parse(JSON.stringify(measure));

    console.log(data); 

    return { props: {data} };
}

export default HomePage; 