import axios from 'axios';
const Conect = axios.create({
  //baseURL: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212',
  baseURL:'https://00411bbc-6601-43da-85b8-048b253b7f03.mock.pstmn.io',
  //baseURL:'https://9b463046-2ce7-47fd-bec1-279385601821.mock.pstmn.io',
});

export default Conect;