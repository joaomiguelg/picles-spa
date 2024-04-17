import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header";

export function Pets() {
    return (

        <>
        <Header />
        <Link to="/pets20">Ir para Listagem</Link>
        </>

    )
}