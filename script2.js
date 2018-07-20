window.onload = function() {
    
    document.getElementById("exchangeMoneyButton").addEventListener("click", moneyExchange);
    
    function moneyExchange() {

        let typeOfTable = document.querySelector('#typeOfTable').value;
        let typeOfCurrency = document.querySelector('#typeOfCurrency').value;
        let startingDate = document.querySelector('#startingDate').value;
        let endingDate = document.querySelector('#endingDate').value;

        console.log(typeOfTable);

        $.ajax({
            url: 'http://api.nbp.pl/api/exchangerates/rates/' + typeOfTable + '/' + typeOfCurrency + '/' + startingDate + '/' + endingDate + '/?format=json',
            success: function(response) {
                console.log(response);
                document.getElementById('moneyExchangeResult').innerHTML = response.rates.i.mid;
            }
        });
    }
    
    
}