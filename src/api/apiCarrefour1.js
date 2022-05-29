var invocation = new XMLHttpRequest();
var url = 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=28921212';

function api(){
  if(invocation) {
    invocation.open('GET', url, true);
    invocation.setRequestHeader("X-VTEX-API-AppKey","vtexappkey-carrefourbr-PZLYPS")
    invocation.setRequestHeader("X-VTEX-API-AppToken","UTARJONVBFAYJEOZGNAUZIRIFLMBNUVOOLWNTLIORNRCMGSIVEQFCTNNYOXYGHPUYEVLDHUVPKUHHBDOZPBKMOKGRITGDBXVQBDESIDQJWDANEZSIQVGSCZVEVPLCJVC")
    invocation.setRequestHeader("Access-Control-Allow-Origin","*")
    invocation.setRequestHeader("mode","cors")
    invocation.send();
  }
}
export default api