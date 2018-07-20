window.onload = function() {
    

    
    document.getElementById("signInButton").addEventListener("click", allValidations);

    function allValidations() {
        
        let w = document.querySelector('#exampleInputEmail1').value;
        let x = document.querySelector('#exampleInputLogin1').value;
        let y = document.querySelector('#inputPassword1').value;
        let z = document.querySelector('#inputPassword2').value;
        let a = document.querySelector('#exampleCheck1').checked;
        let b = document.querySelector('#exampleCheck2').checked;

        function validation() {

            if ( x === '' || x === null) {
                alert('Please, enter login');
            }
        }
        
        function validation0() {

            if ( w === '' || w === null) {
                alert('Please, enter email');
            }
        }

        function validation1() {

            if ( y === '' || y === null) {
                alert('Please, enter password');
            }

        }

        function validation2() {

            if ( z === '' || z === null || z !== y ) {
                alert('Please, enter this same password correctly');
            }

        }
        
        function validation3() {

            if ( a === false ) {
                alert('Please, accept regulations');
            }

        }
        
        function validation4() {

            if ( b === false ) {
                alert('Please, accept regulations for processing personal data');
            }

        }
        
        
        
        validation();
        validation0();
        validation1();
        validation2();
        validation3();
        validation4();
    }
    
    
    
    
}