import styled from "styled-components"

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  & h1 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 5px;
  }
  & h3 {
    font-weight: 400;
  }
  & p {
    color: white;
    font-weight: 400;
    padding-bottom: 30px;
  }
`

export const Botao = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border: 1px solid var(--azul-escuro);
`

export const ContainerCopoGrande = styled.div`
  height: 330px;
  width: 150px;
  background-color: var(--branco);
  border: 4px solid var(--azul-escuro);
  border-radius: 0 0 40px 40px;
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const Litros = styled.div`  
  font-size: 20px;
  color: var(--azul-escuro);
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Porcentagem = styled.div`
  color: var(--azul-escuro);
  font-size: 30px;
  font-weight: 600;
  background: var(--azul-claro);
  height: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 36px 36px;
  transition: 0.3s ease;
`

export const ContainerCoposPequenos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 280px;
    column-gap: 10px;
`

export const ContainerCopoPequeno = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`