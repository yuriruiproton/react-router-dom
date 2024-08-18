import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout(){
    return(
        <>
            <Header/>
            <main>
                <p>Esse é o layout Principal. Abaixo esta o conteudo dinamico de cada rota</p>
                <hr />
                <Outlet/> 
            </main>
            <hr />
            <footer>
                <p>feito com react-router-dom</p>
            </footer>
        </>
    )
}