const inputs = document.querySelectorAll("input[type = 'text']");
//auto focusing first input
inputs[0].focus();
//global avriable
let index = 0;
//adding eventLisner to inputs
inputs.forEach((input, index)=>{
    input.addEventListener("keydown", (e)=>{
        input.value = "";
        if(e.key >= 0 && e.key <= 9){
            setTimeout(()=>{
                inputs[index + 1].focus();
            }, 10)  
        }else if(e.key == "Backspace"){
            setTimeout(()=>{
                inputs[index - 1].focus();
            }, 10)
        }else{
            input.value = "";
        }

    })
})