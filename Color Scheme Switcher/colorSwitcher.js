const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id == 'purple'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'cyan'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'green'){
            body.style.backgroundColor = e.target.id;
        }

// using switch case

        switch (e.target.id) {
            case 'purple':
            case 'red':
            case 'cyan':
            case 'green':
              body.style.backgroundColor = e.target.id;
              break;
        }
    });
});