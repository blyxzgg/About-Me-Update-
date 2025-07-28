import "./NavBar.css"
import man from "../../assets/icons/man.png"
import basket from "../../assets/icons/basket.svg"
import figma from "../../assets/icons/figma.svg"
import github from "../../assets/icons/github.svg"
const NavBar = ({ isOpen, setIsOpen, closeMenu }) => {
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__sidebar">
                    <div className="sidebar">
                        <div className="line" />
                        <div className="icons">
                            <a href="https://github.com/blyxzgg" target="_blank">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://dribbble.com/" target="_blank">
                                <img src={basket} alt="basket" />
                            </a>
                            <a href="https://www.figma.com/files/team/1304584427752362723/all-projects?fuid=1221851373450210944" target="_blank">
                                <img src={figma} alt="figma" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nav__content container">
                    <div className="navBar">
                        <a href="" className="nav_content-logo">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
                            </svg>
                            <span>blyxzgg</span>
                        </a>
                        <div className="nav__content-links">
                            <ul className="nav__list">
                                <li className="nav__list-link">
                                    <a href="#">
                                        <span>#</span><p>home</p>
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#projects">
                                        <span>#</span><p>works</p>
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#about">
                                        <span>#</span><p>about-me</p>
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#contacts">
                                        <span>#</span><p>contacts</p>
                                    </a>
                                </li>
                            </ul>
                            <div className="burger__menu-content">
                                <div className={`burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
                                <div className={`menu ${isOpen ? 'open' : ''}`}>
                                    <a href="" className="nav_content-logo">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
                                        </svg>
                                        <span>blyxzgg</span>
                                    </a>
                                    <ul className="nav__list-burger">
                                        <li className="nav__burger-link">
                                            <a href="#" onClick={closeMenu}>
                                                <span>#</span><p>home</p>
                                            </a>
                                        </li>
                                        <li className="nav__burger-link">
                                            <a href="#projects" onClick={closeMenu}>
                                                <span>#</span><p>works</p>
                                            </a>
                                        </li>
                                        <li className="nav__burger-link">
                                            <a href="#about" onClick={closeMenu}>
                                                <span>#</span><p>about-me</p>
                                            </a>
                                        </li>
                                        <li className="nav__burger-link">
                                            <a href="#contacts" onClick={closeMenu}>
                                                <span>#</span><p>contacts</p>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="burger__list">
                                        <li className="burger__list-logo">
                                            <a href="https://github.com/blyxzgg" target="_blank">
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M31 12C19.3975 12 10 21.1764 10 32.5059C10 41.5797 16.0112 49.2438 24.3587 51.9608C25.4087 52.1403 25.8025 51.5251 25.8025 50.9868C25.8025 50.4998 25.7763 48.8849 25.7763 47.1676C20.5 48.116 19.135 45.9116 18.715 44.7581C18.4787 44.1686 17.455 42.3487 16.5625 41.8617C15.8275 41.4772 14.7775 40.5288 16.5363 40.5032C18.19 40.4775 19.3713 41.9898 19.765 42.605C21.655 45.7065 24.6738 44.835 25.8813 44.2968C26.065 42.9639 26.6162 42.0667 27.22 41.5541C22.5475 41.0414 17.665 39.2728 17.665 31.4293C17.665 29.1993 18.4788 27.3538 19.8175 25.9184C19.6075 25.4057 18.8725 23.3039 20.0275 20.4843C20.0275 20.4843 21.7863 19.946 25.8025 22.5862C27.4825 22.1248 29.2675 21.8941 31.0525 21.8941C32.8375 21.8941 34.6225 22.1248 36.3025 22.5862C40.3188 19.9204 42.0775 20.4843 42.0775 20.4843C43.2325 23.3039 42.4975 25.4057 42.2875 25.9184C43.6263 27.3538 44.44 29.1737 44.44 31.4293C44.44 39.2984 39.5313 41.0414 34.8588 41.5541C35.62 42.1949 36.2763 43.4253 36.2763 45.3477C36.2763 48.0903 36.25 50.2947 36.25 50.9868C36.25 51.5251 36.6438 52.1659 37.6938 51.9608C41.8628 50.5869 45.4856 47.9707 48.0521 44.4807C50.6185 40.9906 51.9993 36.8025 52 32.5059C52 21.1764 42.6025 12 31 12Z" fill="#ABB2BF" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="burger__list-logo">
                                            <a href="https://www.figma.com/files/team/1304584427752362723/all-projects?fuid=1221851373450210944" target="_blank">
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M33 8C20.304 8 10 18.304 10 31C10 43.696 20.304 54 33 54C45.673 54 56 43.696 56 31C56 18.304 45.673 8 33 8ZM48.1915 18.603C51.0229 22.0509 52.5902 26.3633 52.6334 30.8246C51.9836 30.701 45.4976 29.3785 38.9628 30.2008C38.8133 29.8787 38.6867 29.528 38.5372 29.1801C38.1376 28.2314 37.6891 27.2596 37.2406 26.3339C44.4741 23.3927 47.7689 19.1521 48.1944 18.6001L48.1915 18.603ZM33 11.3925C37.9881 11.3925 42.5536 13.2613 46.0238 16.3317C45.673 16.832 42.7031 20.7966 35.7197 23.4157C32.4998 17.5048 28.9347 12.6632 28.3856 11.9158C29.8982 11.5626 31.4468 11.387 33 11.3925ZM24.6424 13.2383C27.2749 16.8868 29.707 20.6759 31.9276 24.5888C22.7477 27.0325 14.6402 26.9836 13.7662 26.9836C14.3983 24.0101 15.7088 21.2227 17.5953 18.839C19.4819 16.4552 21.8936 14.5395 24.6424 13.2411V13.2383ZM13.3436 31.0288V30.425C14.1918 30.4538 23.7224 30.5774 33.5261 27.6334C34.0982 28.7288 34.6215 29.8529 35.1217 30.9741L34.3455 31.1984C24.2198 34.4673 18.832 43.397 18.3806 44.1474C15.1371 40.5467 13.3426 35.872 13.3436 31.0259V31.0288ZM33 50.6564C28.6345 50.6632 24.3928 49.2054 20.9537 46.5164C21.2987 45.7919 25.2921 38.1099 36.3666 34.243C36.4184 34.2171 36.4414 34.2171 36.4931 34.1941C38.3602 39.0137 39.7628 44.0005 40.682 49.0866C38.2555 50.1293 35.641 50.6635 33 50.6564ZM43.9538 47.2897C43.7525 46.0909 42.7031 40.3553 40.1358 33.2943C46.2969 32.3225 51.6846 33.9181 52.3574 34.1424C51.9383 36.795 50.9752 39.3323 49.5285 41.5949C48.0818 43.8574 46.1829 45.7963 43.9509 47.2897H43.9538Z" fill="#ABB2BF" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="burger__list-logo">
                                            <a href="https://discord.com/" target="_blank">
                                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M32 32C32 30.2319 32.7375 28.5362 34.0503 27.286C35.363 26.0357 37.1435 25.3333 39 25.3333C40.8565 25.3333 42.637 26.0357 43.9497 27.286C45.2625 28.5362 46 30.2319 46 32C46 33.7681 45.2625 35.4638 43.9497 36.714C42.637 37.9643 40.8565 38.6667 39 38.6667C37.1435 38.6667 35.363 37.9643 34.0503 36.714C32.7375 35.4638 32 33.7681 32 32ZM18 45.3333C18 43.5652 18.7375 41.8695 20.0503 40.6193C21.363 39.369 23.1435 38.6667 25 38.6667H32V45.3333C32 47.1014 31.2625 48.7971 29.9497 50.0474C28.637 51.2976 26.8565 52 25 52C23.1435 52 21.363 51.2976 20.0503 50.0474C18.7375 48.7971 18 47.1014 18 45.3333ZM32 12V25.3333H39C40.8565 25.3333 42.637 24.631 43.9497 23.3807C45.2625 22.1305 46 20.4348 46 18.6667C46 16.8986 45.2625 15.2029 43.9497 13.9526C42.637 12.7024 40.8565 12 39 12H32ZM18 18.6667C18 20.4348 18.7375 22.1305 20.0503 23.3807C21.363 24.631 23.1435 25.3333 25 25.3333H32V12H25C23.1435 12 21.363 12.7024 20.0503 13.9526C18.7375 15.2029 18 16.8986 18 18.6667ZM18 32C18 33.7681 18.7375 35.4638 20.0503 36.714C21.363 37.9643 23.1435 38.6667 25 38.6667H32V25.3333H25C23.1435 25.3333 21.363 26.0357 20.0503 27.286C18.7375 28.5362 18 30.2319 18 32Z" fill="#ABB2BF" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navBar__info">
                        <div className="navBar__info-content">
                            <div className="navBar__info-content-title">
                                <h2>Blyxzgg is a <span>web designer</span> and </h2>
                                <span>front-end developer</span>
                            </div>
                            <div className="navBar__info-content-subtitle">
                                <p>He crafts responsive websites where technologies meet creativity</p>
                            </div>
                            <div className="navBar__info-content-button">
                                <button>
                                    Contact Me!!
                                </button>
                            </div>
                        </div>
                        <div className="navBar__info-img">
                            <img src={man} alt="" />
                            <div className="navBar__info-img-content">
                                <div></div>
                                <p>Currently working on <span>Portfolio</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="quote container">
                <div className="top__quote">
                    <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="41.472" height="28.704" fill="#282C33" />
                        <path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF" />
                    </svg>
                    <span>With great power comes great electricity bill</span>
                </div>
                <div className="bottom__quote">
                    <svg width="42" height="29" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="41.472" height="28.704" fill="#282C33" />
                        <path d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z" fill="#ABB2BF" />
                    </svg>
                    <span>- Dr. Who</span>
                </div>
            </div>
        </header>
    )
}

export default NavBar;