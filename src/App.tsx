import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import SideBar from "./components/SideBar.tsx";
import { useState, useEffect } from "react"


function App() {
    const [data, setData] = useState(null)
    const [showModal, setShowModal] = useState(false)

    function handleToggleModal() {
        setShowModal(!showModal)
    }

    useEffect(() => {
        async function fetchAPIData () {
            const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY
            const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_API_KEY}`

            const today = (new Date()).toDateString()
            const localKey = `NASA-${today}`
            
            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey))
                setData(apiData)
                console.log("fetched from cache")
                return
            }

            localStorage.clear()


            try {
                const response = await fetch(url)
                const apiData = await response.json()
                localStorage.setItem(localKey, JSON.stringify(apiData))
                console.log("fetched from api")
                setData(apiData)
                console.log("DATA\n", apiData)
            } catch (error) {
                console.log(error.message)
            }
        }

       fetchAPIData()
    }, [])
    

    return ( 
        <>
            { data ? (<Main data={data}/>) : (
                <div className="loadingState">
                    <i className="fa-solid fa-gear fa-spin"></i>
                </div>
            )}
            {showModal && (
                <SideBar data={data} handleToggleModal={handleToggleModal}/>
            )}
            { data && (
                <Footer data={data} handleToggleModal={handleToggleModal}/>
            )}
        </>
    );
}

export default App;
