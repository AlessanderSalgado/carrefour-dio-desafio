import axios from 'axios';


const apiCep = axios.create({
  //baseURL: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212',
  baseURL:'https://87247aee-f0fb-40f9-b3df-44104ac6db88.mock.pstmn.io',
});

export default apiCep;