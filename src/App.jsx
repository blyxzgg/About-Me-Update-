import { useEffect, useState } from "react";
import NavBar from "./widgets/NavBar/NavBar";
import Main from "./widgets/Main/Main";
import Footer from "./widgets/Footer/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Main />
      <Footer />
    </>
  )
}

export default App