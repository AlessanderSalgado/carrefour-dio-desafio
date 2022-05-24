var myHeaders = new Headers();
myHeaders.append("X-VTEX-API-AppKey", "vtexappkey-carrefourbr-PZLYPS");
myHeaders.append("X-VTEX-API-AppToken", "UTARJONVBFAYJEOZGNAUZIRIFLMBNUVOOLWNTLIORNRCMGSIVEQFCTNNYOXYGHPUYEVLDHUVPKUHHBDOZPBKMOKGRITGDBXVQBDESIDQJWDANEZSIQVGSCZVEVPLCJVC");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "_abck=64DE2E2C6B9A61A90B74C305456531F1~-1~YAAQNn/NF6XCStyAAQAAe+KE7Qfkdq87oh9SbSO1fFlKQa+ur6NbTnUvQ1vky2XKX/pwI39NSV19gRf4VcEJoL9WB7KDtndY4m3ALnpN/ZIfQ5f8+oJLZu4JZATFKhiw+J12TqLkVAcgphAZvW4yEAxgff4n5B9s0xmqTh6H2408NEtS/otPYsuXtPaOhctdb1mE14gn838V0OQJglsBhsi7ln7Q/QKHxT81i0O805Mbpz/gn2A6F1si/BXOsd6BYYG5k+aZUBNH5oLbok6vc2UHaQuPSch2GQi6d/jb0tJNLf1FdfXc/xURHA7j3PFamb81PBPGDH+AvsewCI8iwHqMLe9IybwgdwI1jYchTTn2/8siM3HOcCGzo5js4d0=~-1~-1~-1");


const path = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode='

const setHeaders = {
  method: 'GET',
  mode: 'no-cors'
}

function getLoja(loja) {
  return fetch(`${path}${loja}`, setHeaders)
    .then((response) => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));
}

export default getLoja