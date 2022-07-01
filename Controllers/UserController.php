<?php
session_start();
// 
// "http://localhost:3030/motorista"
include('../Services/APIService.php');
unset($_POST["pwdConfirm"]);
if (isset($_GET["typeUser"])) {
    unset($_SESSION["login"]);
    $typeofUser = $_GET["typeUser"];
    $_SESSION["typeUser"] = $typeofUser;
    $userRequest = strtolower($typeofUser);
    $result = makePost("http://localhost:3030/$userRequest", $_POST);
    if (!is_null($result)) {
        $_SESSION["usuario"] = $result;
        $_SESSION["login"] = $result->CPF;

        header("Location: /Drivan/Views/Home/index$typeofUser.php?teste=Criar", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
} else if (!isset($_GET["typeUser"])) {
    $userRequest = strtolower($_SESSION["typeUser"]);
    
    $result = makePut("http://localhost:3030/$userRequest", $_POST);
    if (!is_null($result)) {
        if (is_null($result->error)) {
            $_SESSION["usuario"] = $result;
            header("Location: /Drivan/Views/User/Edit.php?teste=Update", replace: false, response_code: 302);
            exit;
        }
        $_SESSION["errorApi"] = $result;
    }
    header("Location: /Drivan/Views/User/Edit.php?teste=erro", replace: false, response_code: 302);
    exit;
}  

//../Home/index$user.php
