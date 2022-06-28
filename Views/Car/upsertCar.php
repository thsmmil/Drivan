<?php include('../Shared/layoutHeader.php'); ?>
<?php
if(isset($_SESSION["car"])){
    $car = $_SESSION["car"];
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Carro - Drivan</title>
    <?php
    $Year = date('Y');
    $action = $_GET["action"];
    ?>
</head>

<body>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card gutter-b mx-4 mt-4 shadow" style="border-radius: 1rem;">
                        <div class="card-header">
                            <div class="card-title">
                                <h3 class="card-label">
                                    <?php
                                    if ($action == "U") {
                                        echo "Atualizar Carro"; 
                                    } else {
                                        echo "Novo Carro";
                                    }
                                    ?>
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-6">

                                    <?php 
                                    if($action == "U"){
                                    echo "<form action='/Drivan/Controllers/CarController.php?action=$action' method='POST'>
                                    <h4>Informações do carro</h4>
                                    <div class='m-3 row'>
                                        <input type='hidden' name='Id' value=$car->Id>
                                        <label for='modelCar' class='col-sm-4 col-form-label'>Modelo</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='modelCar' placeholder='Modelo do Carro' value='$car->Modelo' name='Modelo' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='brandCar' class='col-sm-4 col-form-label'>Marca</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='brandCar' placeholder='Marca do Carro' value='$car->Marca' name='Marca'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='plateCar' class='col-sm-4 col-form-label'>Placa</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='plateCar' placeholder='Placa do Carro' value='$car->Placa' name='Placa'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='yearCar' class='col-sm-4 col-form-label'>Ano</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='yearCar' min='1950' name='Ano' value='$car->Ano' placeholder='Ano do Carro' max=' ' . $Year + 2 . ' ' ; />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='seatCar' class='col-sm-4 col-form-label'>Lugares</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='seatCar' min='2' name='Assentos' value='$car->Assentos' placeholder='Assentos no Carro' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='colorCar' class='col-sm-4 col-form-label'>Cor</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='colorCar' placeholder='Cor do Carro' value='$car->Cor' name='Cor'>
                                        </div>
                                    </div>
                                    <div class='ms-3'>
                                        <button type='submit' class='btn btn-primary rounded-pill'>Adicionar</button>
                                        <a class='btn btn-warning rounded-pill' href='./index.php'>Voltar a Listagem</a>
                                    </div>
                                </form>";
                            }
                            else{
                                echo "<form action='/Drivan/Controllers/CarController.php?action=$action' method='POST'>
                                    <h4>Informações do carro</h4>
                                    <div class='m-3 row'>
                                        <input type='hidden' value='" . $_SESSION["login"] . "' name='CPF'>
                                        <label for='modelCar' class='col-sm-4 col-form-label'>Modelo</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='modelCar' placeholder='Modelo do Carro' value='' name='Modelo' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='brandCar' class='col-sm-4 col-form-label'>Marca</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='brandCar' placeholder='Marca do Carro' value='' name='Marca'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='plateCar' class='col-sm-4 col-form-label'>Placa</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='plateCar' placeholder='Placa do Carro' value='' name='Placa'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='yearCar' class='col-sm-4 col-form-label'>Ano</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='yearCar' min='1950' name='Ano' value='' placeholder='Ano do Carro' max=' ' . $Year + 2 . ' ' ; />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='seatCar' class='col-sm-4 col-form-label'>Lugares</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='seatCar' min='2' name='Assentos' value='' placeholder='Assentos no Carro' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='colorCar' class='col-sm-4 col-form-label'>Cor</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='colorCar' placeholder='Cor do Carro' value='' name='Cor'>
                                        </div>
                                    </div>
                                    <div class='ms-3'>
                                        <button type='submit' class='btn btn-primary rounded-pill'>Adicionar</button>
                                        <a class='btn btn-warning rounded-pill' href='./index.php'>Voltar a Listagem</a>
                                    </div>
                                </form>";
                            }
                                
                                ?>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</body>

</html>