$(document).ready(function(){
    const botao = $("#input-button");
    const url = 'https://api.github.com/users/';    
    let pontos = 0;
    const contarPontos = $('#score');

    botao.click(function() {
        let username = $("#input-user").val();
        
        $.getJSON(url + username, function(user) { 
          adicionarUsuario(user);
          pontos++;
          contarPontos.html(pontos);
        })
        .fail(function() {
            pontos--;
            contarPontos.html(pontos);
            alert( "error" );
          });

        function adicionarUsuario(receber_user){
            $("#add-data").append(`
            <div class="col-sm-3 mb-3">
                <div class="card" style="width: 100%;">
                    <img class="card-img-top" src="${
                        receber_user.avatar_url}" alt="Imagem de capa do card">
                    <div class="card-body">
                        <p class="card-text">${receber_user.name}</p>
                    </div>
                </div>
            </div>    
            `);
        }
    });
});