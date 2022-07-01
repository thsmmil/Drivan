<?php
session_start();
if (!isset($_SESSION["login"])) {
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
}
include('../Services/APIService.php');
if ($_GET["action"] == "I") {
    $_POST["Numero"] = intval($_POST["Numero"]);
    $_POST["cidadeId"] = intval($_POST["cidadeId"]);


    $dataRequest = $_POST;
    $endData = makePost("http://localhost:3030/endereco/", $dataRequest);
    if (!is_null($endData)) {
        $_SESSION["end"] = $endData;
        header("Location: /Drivan/Views/Address/upsertAddress.php?action=U", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/Address/upsertAddress.php?action=I", replace: false, response_code: 302);
    exit;
} else if ($_GET["action"] == "U") {
    if ($_GET["Id"]) {
        $Id = $_GET["Id"];
        $result = makeGet("http://localhost:3030/endereco/$Id");
        if (!is_null($result)) {
            $_SESSION["end"] = $result;
            header("Location: /Drivan/Views/Address/upsertAddress.php?action=U", replace: false, response_code: 302);
            exit;
        }
        header("Location: /Drivan/Views/Address/index.php", replace: false, response_code: 302);
            exit;
    }
    $_POST["Id"] = intval($_POST["Id"]);
    $_POST["Numero"] = intval($_POST["Numero"]);
    $_POST["cidadeId"] = intval($_POST["cidadeId"]);
    $dataRequest = $_POST;
    
    $endData = makePut("http://localhost:3030/endereco/", $dataRequest);
    if (!is_null($endData)) {
        $_SESSION["end"] = $endData;
        header("Location: /Drivan/Views/Address/upsertAddress.php?action=U", replace: false, response_code: 302);
        exit;
    }
    header("Location: /Drivan/Views/Address/upsertAddress.php?action=U", replace: false, response_code: 302);
    exit;
}else if($_GET["action"] == "D"){
    if ($_GET["Id"]) {
        $Id = $_GET["Id"];
        $result = makeDelete("http://localhost:3030/endereco/$Id");
        if (is_null($result)) {
            $_SESSION["end"] = [];
            header("Location: /Drivan/Views/Address/index.php", replace: false, response_code: 302);
            exit;
        }
        header("Location: /Drivan/Views/Address/upsertAddress.php?action=U&Id=$Id", replace: false, response_code: 302);
        exit;
    }
}
