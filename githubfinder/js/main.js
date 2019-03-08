$(document).ready(
    ()=>{
     $('#searchUser').on('keyup', (e)=>{
        let username = e.target.value;

        $.ajax({
            url:'https://api.github.com/users/'+username,
            data:{
                client:'',
                secret:''
            }
        }).done((user)=>{

        });
     });   
    }
);