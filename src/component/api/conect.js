import axios from 'axios';
const Conect = axios.create({
  //baseURL: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212',
  baseURL:'https://95cca9b7-ec4b-4aaa-81ea-4c98fa2f155f.mock.pstmn.io',
  //baseURL:'https://9b463046-2ce7-47fd-bec1-279385601821.mock.pstmn.io',
});

export default Conect;