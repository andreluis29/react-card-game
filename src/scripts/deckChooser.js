import retornaApi from "../api/apiSync";

const pegaCardAleatorio = async () => {
    const resultado = await retornaApi('https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game');
    const dadoASerEnviado = await resultado.filter(({ name }) => name);
    return dadoASerEnviado;
}

export default pegaCardAleatorio;