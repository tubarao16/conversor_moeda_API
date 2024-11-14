const apiKey = 'f746596441c856ea30bd4269';
 
const apiURL = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
 
//Função para consulta a taxa de cambio via API
 
async function getExchangeRate(daMoeda, paraMoeda){
 
    try{
 
        const response = await fetch(`${apiURL}${daMoeda}`);
const data = response.json();
 
if(data.result === "success"){
    returndata.conversion_rates[paraMoeda];
   
} else {
    throw new Error ( 'Erro ao buscar taxa de cambio');
}
    }catch (error){
        console.error('Erro:', error);
        return null;
    }
}
// #######################################
 
document.getElementById('currency-converter').addEventListener ('submit', async function(event){
 
    event.preventDefault();
 
    //OBTER VALORES DE ENTRADA
 
    const valor = parseFloat(document.getElementById('amont').value);
    const daMoeda = document.getElementById(daMoeda).value;
    const paraMoeda = document.getElementById('paraMoeda').value;
 
    const exchangerate = await getExchangeRate (daMoeda, paraMoeda);
 
    if(exchangerate){
 
        const convertedValue = valor * exchangerate;
 
        console.log(convertedValue);
 
// console.log(convertvalue);
 
const conversao = document.getElementById('conversao')
conversao.textContent = `resultado: ${convertedValue.toFixed(2)}${paraMoeda};`
 
     } else{
 
        alert('erro ao buscar a cotacao. tente novamente');
   
}
 
});
   
 