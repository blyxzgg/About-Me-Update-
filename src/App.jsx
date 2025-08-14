import { useEffect, useState } from "react";
import NavBar from "./widgets/NavBar/NavBar";
import Main from "./widgets/Main/Main";
import Footer from "./widgets/Footer/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };


  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} closeMenu={closeMenu} />
      <Main repos={repos} setRepos={setRepos} />
      <Footer />
    </>
  )
}

export default App