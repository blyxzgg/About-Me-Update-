import "./Main.css"
import man2 from "../../assets/icons/man2.png"
const AboutMe = () => {
    return (
        <>
            <section className="aboutMe" id='about'>
                <div className="aboutMe__content container">
                    <div className="aboutMe__title">
                        <h2><span>#</span>about-me</h2>
                    </div>
                    <div className="aboutMe__precise">
                        <div className="aboutMe__details">
                            <p>
                                Hello, i’m Blyxzgg! <br></br> <br></br>

                                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br></br> <br></br>

                                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                            </p>
                            <button>Read more →</button>
                        </div>
                        <div className="aboutMe__decor">
                            <img src={man2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMe