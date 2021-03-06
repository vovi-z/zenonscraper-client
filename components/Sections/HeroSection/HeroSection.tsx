import Header from './Header/Header'
import HeroBody from './HeroBody/HeroBody'
import styles from './HeroSection.module.scss'

export default function HeroSection(props) {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <Header />
                <HeroBody
                    title={"Zenon Blockchain Explorer, web and API services."}
                    description={"Explore data stored the Zenon Network blockchain"}
                />
            </div>
        </section>
    )
}

