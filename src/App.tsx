import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import SideBar from "./components/SideBar.tsx";
import { useState } from "react"


function App() {
    const [showModal, setShowModal] = useState(false)

    function handleToggleModal() {
        setShowModal(!showModal)
    }

    return ( 
        <>
            <Main />
            {showModal && (
                <SideBar handleToggleModal={handleToggleModal}/>
            )}
            <Footer handleToggleModal={handleToggleModal}/>
        </>
    );
}

export default App;
