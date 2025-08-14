import AboutMe from "./AboutMe"
import Contacts from "./Contacts"
import Projects from "./Projects"
import Skills from "./Skills"

const Main = ({ repos, setRepos }) => {
    return (
        <>
            <Projects
                repos={repos}
                setRepos={setRepos}
            />
            <Skills />
            <AboutMe />
            <Contacts />
        </>
    )
}

export default Main