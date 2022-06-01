async function retornaApi(URI) {
    try {
        const api = await fetch(URI);
        const resultadoApi = await api.json();
        const resultadoFinal = await resultadoApi;
        return resultadoFinal;
    } catch(err) {
        return console.log('Api não carregada!');
    }
   
 
}

export default retornaApi;