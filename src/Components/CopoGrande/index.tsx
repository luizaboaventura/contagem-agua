import { ContainerCopoGrande, Litros, Porcentagem } from '../../styled';
import Context from '../ContextAPI/ContextAPI';
import { useContext } from "react";

const CopoGrande = () => {
    
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


    return (
        <ContainerCopoGrande>
            <Litros>{`${litros}`}</Litros>
            <Porcentagem style={{ height: `${altura}px` }}>{`${porcentagem}`}</Porcentagem>
        </ContainerCopoGrande>
    )
}

export default CopoGrande;