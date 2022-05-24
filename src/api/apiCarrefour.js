import axios from 'axios';

const apiCep = axios.create({
  baseURL: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212',
  headers: {"Access-Control-Allow-Origin": "*"}

});

export default apiCep;