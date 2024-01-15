import {ReactElement} from 'react';
import PageLayout from 'Modules/PageLayout';
import Styles from './Main/styles.module.css';
import schepaBg from 'Assets/imgs/schepaBg.jpg';
import {ADVANTAGES, CARDS} from 'CONSTANTS';
import Advantage from 'Componenets/Advantage';
import Card from 'Componenets/Card';

const Main = (): ReactElement => {
    return (
        <PageLayout>
            <>
                <section className={Styles.Schepa} style={{backgroundImage: `url(${schepaBg})`}}>
                    <h1 className={Styles.SchepaTitle}>
                        Производство и реализация <br></br>
                        щепы для копчения
                    </h1>
                    <h2 className={Styles.SchepaSubTitle}>
                        Щепа ольхи с отправкой <br></br> 
                        транспортной компанией по всей России
                    </h2>
                    <div className={Styles.Advantages}>
                        {
                            ADVANTAGES.map(advantage => (
                                <Advantage advantage={advantage}/>
                            ))
                        }
                    </div>
                </section>

                <section className={Styles.CardsSection}>
                    <h2 className={Styles.CardsSectionTitle}>
                        Купить щепу для копчения
                        по цене производителя
                    </h2>
                    <div className={Styles.Cards}>
                        {
                            CARDS.map(card => (
                                <Card card={card}/>
                            ))
                        }
                    </div>
                </section>
            </>
        </PageLayout>
    )
};

export default Main;