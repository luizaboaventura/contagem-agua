import Context from '../ContextAPI/ContextAPI';
import { useContext } from "react";
import { ContainerCopoPequeno, ContainerCoposPequenos } from "../../styled";


const CoposPequenos = () => {

    const [
        preenchido1, setPreenchido1,
        preenchido2, setPreenchido2,
        preenchido3, setPreenchido3,
        preenchido4, setPreenchido4,
        preenchido5, setPreenchido5,
        preenchido6, setPreenchido6,
        preenchido7, setPreenchido7,
        preenchido8, setPreenchido8,
        porcentagem, setPorcentagem,
        litros, setLitros,
        altura, setAltura
    ] = useContext(Context);


    const preencheCopoPequeno = (copo: number) => {
        switch (copo) {
            case 1:
                setPreenchido1(true);
                setPorcentagem('12.5%');
                setAltura(41.25);
                setLitros('0,25L');
                break;
            case 2:
                setPreenchido2(true);
                setPorcentagem('25%');
                setAltura(82.5);
                setLitros('0,5L');
                break;
            case 3:
                setPreenchido3(true);
                setPorcentagem('37.5%');
                setAltura(123.75);
                setLitros('0,75L');
                break;
            case 4:
                setPreenchido4(true);
                setPorcentagem('50%');
                setAltura(165);
                setLitros('1L');
                break;
            case 5:
                setPreenchido5(true);
                setPorcentagem('62.5%');
                setAltura(206.25);
                setLitros('1,25L');
                break;
            case 6:
                setPreenchido6(true);
                setPorcentagem('75%');
                setAltura(247.5);
                setLitros('1,5L');
                break;
            case 7:
                setPreenchido7(true);
                setPorcentagem('87.5%');
                setAltura(288.75);
                setLitros('1,75L');
                break;
            case 8:
                setPreenchido8(true);
                setPorcentagem('100%');
                setAltura(330);
                setLitros('');
                break;
        }
    }

    return (
        <ContainerCoposPequenos>
            <ContainerCopoPequeno>
                1º
                <div
                    className={preenchido1 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(1)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                2º
                <div
                    className={preenchido2 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(2)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                3º
                <div
                    className={preenchido3 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(3)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                4º
                <div
                    className={preenchido4 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(4)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                5º
                <div className={preenchido5 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(5)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                6º
                <div className={preenchido6 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(6)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                7º
                <div className={preenchido7 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(7)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
            <ContainerCopoPequeno>
                8º
                <div className={preenchido8 ? "copo-pequeno--full" : "copo-pequeno"}
                    onClick={() => preencheCopoPequeno(8)}>
                    250 ml
                </div>
            </ContainerCopoPequeno>
        </ContainerCoposPequenos>
    )
}

export default CoposPequenos;