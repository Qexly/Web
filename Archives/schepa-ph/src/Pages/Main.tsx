import {ReactElement} from 'react';
import PageLayout from 'Modules/PageLayout';
import Styles from './Main/styles.module.css';
import schepaBg from 'Assets/imgs/schepaBg.jpg';
import {ADVANTAGES, CARDS, ABOUT_ITEMS} from 'CONSTANTS';
import Advantage from 'Componenets/Advantage';
import Card from 'Componenets/Card';
import AboutItem from 'Componenets/AboutItem';

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
                                <Advantage key={advantage.text} advantage={advantage}/>
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
                                <Card key={card.fraction} card={card}/>
                            ))
                        }
                    </div>
                </section>

                <section className={Styles.AboutSection}>
                    <h2 className={Styles.AboutSectionTitle}>
                        Про качество
                    </h2>
                    <div className={Styles.AboutSectionTextContainer}>
                        {
                            ABOUT_ITEMS.map((item, index) => (
                                <AboutItem key={item.text} item={item} imgPosition={index % 2 === 0 ? 'left' : 'right'} />
                            ))
                        }
                    </div>
                </section>
            </>
        </PageLayout>
    )
};

export default Main;

export {
    Main as Component
}