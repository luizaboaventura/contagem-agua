import "./App.css";
import { useState } from "react";
import Context from "./Components/ContextAPI/ContextAPI";
import CoposPequenos from "./Components/CoposPequenos";
import CopoGrande from "./Components/CopoGrande";
import { Botao, Container } from "./styled";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    const [preenchido1, setPreenchido1] = useState<boolean>(false);
    const [preenchido2, setPreenchido2] = useState<boolean>(false);
    const [preenchido3, setPreenchido3] = useState<boolean>(false);
    const [preenchido4, setPreenchido4] = useState<boolean>(false);
    const [preenchido5, setPreenchido5] = useState<boolean>(false);
    const [preenchido6, setPreenchido6] = useState<boolean>(false);
    const [preenchido7, setPreenchido7] = useState<boolean>(false);
    const [preenchido8, setPreenchido8] = useState<boolean>(false);
    const [porcentagem, setPorcentagem] = useState<string>("");
    const [litros, setLitros] = useState<string>("");
    const [altura, setAltura] = useState<number>(0);

    const reinicia = () => {
        setPreenchido1(false);
        setPreenchido2(false);
        setPreenchido3(false);
        setPreenchido4(false);
        setPreenchido5(false);
        setPreenchido6(false);
        setPreenchido7(false);
        setPreenchido8(false);

        setPorcentagem("");
        setAltura(0);
        setLitros("");
    };

    return (
        <>
            <GlobalStyle/>
            <Context.Provider
                value={[
                    preenchido1,
                    setPreenchido1,
                    preenchido2,
                    setPreenchido2,
                    preenchido3,
                    setPreenchido3,
                    preenchido4,
                    setPreenchido4,
                    preenchido5,
                    setPreenchido5,
                    preenchido6,
                    setPreenchido6,
                    preenchido7,
                    setPreenchido7,
                    preenchido8,
                    setPreenchido8,
                    porcentagem,
                    setPorcentagem,
                    litros,
                    setLitros,
                    altura,
                    setAltura
                ]}
            >
                <Container>
                    <h1>Copos de Água</h1>
                    <h3>Beber: 2 Litros</h3>

                    <CopoGrande />

                    <p>Selecione quantos copos de água você bebeu: </p>

                    <CoposPequenos />
                    
                    <Botao onClick={reinicia}>Reiniciar</Botao>
                </Container>
            </Context.Provider>
        </>
    );
}

export default App;
