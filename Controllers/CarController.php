<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
}
include('../Services/APIService.php');
if ($_GET["action"] == "I") {

    $_POST["Ano"] = intval($_POST["Ano"]);
    $_POST["Assentos"] = intval($_POST["Assentos"]);


    $dataRequest = $_POST;
    $carData = makePost("http://localhost:3030/carro/", $dataRequest);
    if (!is_null($carData)) {
        $_SESSION["car"] = $carData;
        header("Location: /Drivan/Views/Car/upsertCar.php?action=U", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/Car/upsertCar.php?action=I", replace: false, response_code: 302);
    exit;
} else if ($_GET["action"] == "U") {
    // $Modelo = $_POST["Modelo"];
    // $Marca = $_POST["Marca"];
    // $Placa = $_POST["Placa"];
    // $Ano = $_POST["Ano"];
    // $Modelo = $_POST["Assentos"];
    // $Modelo = $_POST["Color"];
    // $Id = $_POST["Id"];
    if ($_GET["Id"]) {
        $Id = $_GET["Id"];
        $result = makeGet("http://localhost:3030/carro/$Id");
        if (!is_null($result)) {
            $_SESSION["car"] = $result;
            header("Location: /Drivan/Views/Car/upsertCar.php?action=U", replace: false, response_code: 302);
            exit;
        }
        header("Location: /Drivan/Views/Car/index.php", replace: false, response_code: 302);
            exit;
    }
    $_POST["Id"] = intval($_POST["Id"]);
    $_POST["Ano"] = intval($_POST["Ano"]);
    $_POST["Assentos"] = intval($_POST["Assentos"]);
    $dataRequest = $_POST;
    
    $carData = makePut("http://localhost:3030/carro/", $dataRequest);
    if (!is_null($carData)) {
        $_SESSION["car"] = $carData;
        header("Location: /Drivan/Views/Car/upsertCar.php?action=U", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/Car/upsertCar.php?action=U", replace: false, response_code: 302);
    exit;
}else if($_GET["action"] == "D"){
    if ($_GET["Id"]) {
        $Id = $_GET["Id"];
        $result = makeDelete("http://localhost:3030/carro/$Id");
        if (is_null($result)) {
            $_SESSION["car"] = [];
            header("Location: /Drivan/Views/Car/index.php", replace: false, response_code: 302);
            exit;
        }
        header("Location: /Drivan/Views/Car/upsertCar.php?action=U&Id=$Id", replace: false, response_code: 302);
        exit;
    }
}
