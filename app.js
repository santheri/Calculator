(function() {
    var screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){ //to find button name and button data
        button.addEventListener('click', function(e){ //to get the value or number if any button was clicked
                let value = e.target.dataset.num; //if any button is clicked storing those values
                screen.value += value; //pushing those values into screen
        })
    });

    equal.addEventListener('click', function(e) {
        
        
        if (screen.value === '') {
            screen.value= "";
            
        }
        else {
            console.log(screen);
            let answer = eval(screen.value);
            screen.value = answer;
            
        }

    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();