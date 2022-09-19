import "./styles/App.css"
import City from "./components/Cities";

function App() {
    return (
        <>
            <header>
                <div className='header__content'>
                    <div className='logo'>
                        <strong>Visited city app</strong>
                    </div>
                </div>
            </header>
            <main>
                <City />
            </main>
        </>
    )
}

export default App