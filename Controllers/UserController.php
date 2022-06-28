<?php
define("PASSAGEIRO_ENDPOINT", "http://localhost:3030/passageiro");
define("MOTORISTA_ENDPOINT", "http://localhost:3030/motorista");
include('./Models/Passageiro.php');
include('./Services/APIService.php');
function criar()
{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST["user"] == "Passageiro") {
            $passageiro = new Passageiro();
            $passageiro->set_cpf($_POST["cpf"]);
            $passageiro->set_nome($_POST["nome"]);
            $passageiro->set_email($_POST["email"]);
            $passageiro->set_telefone($_POST["phone"]);
            $passageiro->set_senha($_POST["pswd"]);
            $data = makePost(PASSAGEIRO_ENDPOINT, $passageiro);
            if($data !== null){
                return "Usuário criado com sucesso";
            }else{
                return "Aconteceu algo de errado" .$data;
            }

        }else if($_POST["user"] == "Motorista"){
            $motorista = new Passageiro();
            $motorista->set_cpf($_POST["cpf"]);
            $motorista->set_nome($_POST["nome"]);
            $motorista->set_email($_POST["email"]);
            $motorista->set_telefone($_POST["phone"]);
            $motorista->set_senha($_POST["pswd"]);
        }
    }
}
//../Home/index$user.php
?>

