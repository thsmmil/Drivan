<?php
session_start();
if (!isset($_SESSION["login"])) {
    $typeuser;
    isset($_POST["typeUser"]) ? $typeuser = "Passageiro" : $typeuser = "Motorista";
    $emailForm = $_POST["Email"];
    $pwdForm = $_POST["Senha"];
    $_SESSION["typeUser"] = $typeuser;
    include('../Services/APIService.php');
    //$jsonPost = array($emailForm, $pwdForm);
    $userRequest = strtolower($typeuser);
    $userData = makeGet("http://localhost:3030/$userRequest/$emailForm");
    if (!is_null($userData)) {
        $_SESSION["usuario"] = $userData;
        $_SESSION["login"] = $userData->CPF;

        header("Location: /Drivan/Views/Home/index$typeuser.php", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
} else {
    $types = $_SESSION["typeUser"];
    header("Location: /Drivan/Views/Home/index$types.php", replace: false, response_code: 302);
    exit;
}

