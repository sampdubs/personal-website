import styles from './App.module.scss';
import { Project } from './components/project/project';
import { BioSection } from './components/bio-section/bio-section';


function App() {
    const projects = [
        {
            title: "PortaVax",
            description: "At the Georgia Governor's Honors Program, I worked with my small group to design, build, and program an autonomous vehicle for last-mile vaccine delivery. The challenges included power, for which we used a solar panel and LiFePO4 battery, temperature control, for which we modeled and decided on a vacuum-insulated system with a Peltier cooler, and object avoidance, for which we used ultrasonic sensors and programming. Over the three weeks we had to build, I helped with the temperature and power modeling and led the programming and much of the fabrication efforts.",
            image: "/src/assets/portavax.png"
        },
        {
            title: "Zoom To Class",
            description: "My winning entry to the Congressional App Challenge, Zoom To Class was a tool for students attending virtual classes during the pandemic. It allows students to enter their class schedule and automatically launches the correct class meeting based on the current time with the click of a button.",
            image: "/src/assets/CAC.jpg"
        },
        {
            title: "MMWR Research",
            description: "Working with a CDC data scientist, I used Natural Language Processing (NLP) techniques on the CDC’s weekly publication, the Morbitity and Mortality Weekly Report (MMWR) to extract connections within and across documents. I learned about scraping and cleaning data, efficient ways to handle large datasets, NLP theory and techniques, and data visualization methods. This project culminated in a poster presentation during the CDC’s DataViz Day.",
            image: "/src/assets/mmwr.png"
        },
        {
            title: "Gun Violence Research",
            description: "As part of an ongoing personal project, I am researching factors that contribute to gun violence in the United States. I am using publicly available data, with hundreds of thousands of data points (unfortunately), in order to find correlational factors with gun violence. Currently, I’m looking at county election results to inquire how political leaning and policy could affect the rate of incidents. This project has been instrumental in learning how to handle large datasets efficiently.",
            image: "/src/assets/Gun analysis.png"
        },
        {
            title: "Lokt",
            description: "To teach myself about cryptography, I created my own password manager, which I still use. Using salted hashing, fernet encryption, PyQt5, React Native, and MongoDB, I created a fully-functional app that keeps all user data secure. Previously, I built a secure chat app for a technology fair which used Diffie-Helman symmetric key and AES encryption. Both of these were fascinating for me as I discovered both the theoretical and practical worlds of cryptography. ",
            image: "/src/assets/Lokt.png"
        },
        {
            title: "AI Stock Bot",
            description: "Curious about invisible patterns in the stock market that a computer might be able to recognize, I trained a neural network on years of stock market data. I had taught myself previously about the theory behind neural networks, and tinkered with them, but this was a very interesting first look into applying them with bigger data sets. This project taught me more about using APIs, handling large datasets, TenserFlow and Keras, and neural net architecture. I played around with a few different network structures, optimizing for which accurately predicted the direction of the stock most often.",
            image: "/src/assets/Stock bot.png"
        },
    ]

    return (
        <div className={styles.App}>
            <div className={styles['header-container']}>
                <h1 className={styles['big-intro']}>I am a Stanford student studying Computer Science and Math.</h1>
            </div>
            <BioSection />
            {projects.map((project, i) =>
                <Project image={project.image} title={project.title} description={project.description} />
            )
            }
            {/* <Project image="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." title="Project Name" /> */}
        </div>
    );
}

export default App;
