<?php session_start();
if (!isset($_SESSION["login"])) {
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
}
if (isset($_GET['logout'])) {
    Logout();
}
function Logout()
{
    session_destroy();
    header("Location: /Drivan/Views/index.php", replace: false, response_code: 302);
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="../../wwwroot/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../wwwroot/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../wwwroot/images/favicon-16x16.png">
    <link rel="manifest" href="../../wwwroot/images/site.webmanifest">
</head>

<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-secondary">
        <div class="container">
            <a class="navbar-brand" <?= "href='/Drivan/Views/Home/index" . $_SESSION["typeUser"] . ".php'" ?>>
                <img src="../../wwwroot/images/icon.png" alt="" width="30" height="24" class="d-inline-block align-text-center">
                Drivan
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link active" <?= "href='/Drivan/Views/Home/index" . $_SESSION["typeUser"] . ".php'" ?>>Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link active" href="#">Viagem</a>
                    </li>
                    <?php
                    if ($_SESSION["typeUser"] == "Passageiro") {
                    } else{
                        echo "
                        <li class='nav-item active'>
                            <a class='nav-link active' href='/Drivan/Views/Car/index.php'>Carro</a>
                        </li>
                        ";
                    }  
                    ?>
                    <li class="nav-item active me-auto">
                        <a class="nav-link active" href="?logout=true">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</body>

</html>