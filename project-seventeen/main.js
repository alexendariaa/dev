
        let pass = document.getElementById('pass');
        let icon = document.getElementById('icon');
        
         icon.onclick = () => {
            if(pass.type == "password"){
                pass.type = "text";
                icon.classList.toggle('bxs-show');
            }else{
                pass.type = "password";
                icon.classList.remove('bxs-show');
            }
        }