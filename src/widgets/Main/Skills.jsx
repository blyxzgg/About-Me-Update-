import "./Main.css"
import decor from "../../assets/icons/decor.png"
const Skills = () => {
    return (
        <>
            <section className="skills">
                <div className="skills__content container">
                    <div className="skills__title">
                        <h2><span>#</span>skills</h2>
                    </div>
                    <div className="skills__details">
                        <div className="skills__decor">
                            <img src={decor} alt="decor" />
                        </div>
                        <div className="skills__cards">
                            <div className="skills__cards-content">
                                <div className="frow">
                                    <div className="skills__card">
                                        <h3>Languages</h3>
                                        <p>TypeScript Lua Python JavaScript</p>
                                    </div>
                                </div>
                                <div className="srow">
                                    <div className="skills__card">
                                        <h3>Databases</h3>
                                        <p>SQLite PostgreSQL Mongo</p>
                                    </div>
                                    <div className="skills__card">
                                        <h3>Other</h3>
                                        <p>HTML CSS EJS SCSS REST Jinja</p>
                                    </div>
                                </div>
                                <div className="trow">
                                    <div className="skills__card">
                                        <h3>Tools</h3>
                                        <p>VS Neovim Linux</p>
                                        <p>Figma XFCE Arch</p>
                                        <p>Git Font Awesome</p>
                                    </div>
                                    <div className="skills__card">
                                        <h3>Frameworks</h3>
                                        <p>React Vue</p>
                                        <p>Disnake Discord.js</p>
                                        <p>Flask Express.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills; 