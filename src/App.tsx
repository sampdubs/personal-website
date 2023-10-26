import styles from './App.module.scss';
import { Project } from './components/project/project';
import { BioSection } from './components/bio-section/bio-section';
import portaVaxUrl from "./assets/portavax.png";
import cacUrl from "./assets/CAC.jpg";
import mmwrUrl from "./assets/mmwr.png";
import gunUrl from "./assets/Gun analysis.png";
import loktUrl from "./assets/Lokt.png";
import stockUrl from "./assets/Stock bot.png";


function App() {
    const projects = [
        {
            title: "PortaVax",
            description: "At the Georgia Governor's Honors Program, I worked with my small group to design, build, and program an autonomous vehicle for last-mile vaccine delivery. The challenges included power, for which we used a solar panel and LiFePO4 battery, temperature control, for which we modeled and decided on a vacuum-insulated system with a Peltier cooler, and object avoidance, for which we used ultrasonic sensors and programming. Over the three weeks we had to build, I helped with the temperature and power modeling and led the programming and much of the fabrication efforts.",
            image: portaVaxUrl
        },
        {
            title: "Zoom To Class",
            description: "My winning entry to the Congressional App Challenge, Zoom To Class was a tool for students attending virtual classes during the pandemic. It allows students to enter their class schedule and automatically launches the correct class meeting based on the current time with the click of a button.",
            image: cacUrl
        },
        {
            title: "MMWR Research",
            description: "Working with a CDC data scientist, I used Natural Language Processing (NLP) techniques on the CDC’s weekly publication, the Morbitity and Mortality Weekly Report (MMWR) to extract connections within and across documents. I learned about scraping and cleaning data, efficient ways to handle large datasets, NLP theory and techniques, and data visualization methods. This project culminated in a poster presentation during the CDC’s DataViz Day.",
            image: mmwrUrl
        },
        {
            title: "Gun Violence Research",
            description: "As part of an ongoing personal project, I am researching factors that contribute to gun violence in the United States. I am using publicly available data, with hundreds of thousands of data points (unfortunately), in order to find correlational factors with gun violence. Currently, I’m looking at county election results to inquire how political leaning and policy could affect the rate of incidents. This project has been instrumental in learning how to handle large datasets efficiently.",
            image: gunUrl
        },
        {
            title: "Lokt",
            description: "To teach myself about cryptography, I created my own password manager, which I still use. Using salted hashing, fernet encryption, PyQt5, React Native, and MongoDB, I created a fully-functional app that keeps all user data secure. Previously, I built a secure chat app for a technology fair which used Diffie-Helman symmetric key and AES encryption. Both of these were fascinating for me as I discovered both the theoretical and practical worlds of cryptography. ",
            image: loktUrl
        },
        {
            title: "AI Stock Bot",
            description: "Curious about invisible patterns in the stock market that a computer might be able to recognize, I trained a neural network on years of stock market data. I had taught myself previously about the theory behind neural networks, and tinkered with them, but this was a very interesting first look into applying them with bigger data sets. This project taught me more about using APIs, handling large datasets, TenserFlow and Keras, and neural net architecture. I played around with a few different network structures, optimizing for which accurately predicted the direction of the stock most often.",
            image: stockUrl
        },
    ]

    return (
        <div>
            <div className={styles.topbar}>
                <h4 className={styles['topbar-name']}>Sam Prausnitz-Weinbaum</h4>
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/sam-prausnitz-weinbaum/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className={styles['social-logo']}>
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg></a>
                    <a href="mailto:sampw@stanford.edu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className={styles['social-logo']}>
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg></a>
                    <a href="http://github.com/sampdubs/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" className={styles['social-logo']}>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></a></div></div>
            <div className={styles.App}>
                <div className={styles['header-container']}>
                    <h1 className={styles['big-intro']}>I&apos;m a Stanford student studying Computer Science and Math.</h1>
                </div>
                <BioSection />
                <h1 className={styles['projects-title']}>My Projects</h1>
                {projects.map((project, i) =>
                    <Project image={project.image} title={project.title} description={project.description} />
                )
                }
            </div>
            {/* <Project image="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." title="Project Name" /> */}
        </div>
    );
}

export default App;
