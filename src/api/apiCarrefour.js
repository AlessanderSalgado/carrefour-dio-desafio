import axios from 'axios';

const apiCep = axios.create({
  baseURL: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212',
  mode: 'cors',
  headers : {"X-VTEX-API-AppKey": "vtexappkey-carrefourbr-PZLYPS","X-VTEX-API-AppToken": "UTARJONVBFAYJEOZGNAUZIRIFLMBNUVOOLWNTLIORNRCMGSIVEQFCTNNYOXYGHPUYEVLDHUVPKUHHBDOZPBKMOKGRITGDBXVQBDESIDQJWDANEZSIQVGSCZVEVPLCJVC"}


});

export default apiCep;