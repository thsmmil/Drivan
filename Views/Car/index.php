<?php include('../Shared/layoutHeader.php'); ?>
<?php
$ApiEndpoint = "http://localhost:3030/carros/";
$ch = curl_init($ApiEndpoint);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$car = json_decode(curl_exec($ch));
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carros - Drivan</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <script src="../../wwwroot/js/car.js"></script>
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
                                    <div class="row justify-content-between">
                                        <div class="col-6">
                                            Meus Carros
                                        </div>
                                        <div class="col-6 ms-auto text-end">
                                        <a href="../Car/upsertCar.php?action=I" class="view text-decoration-none text-muted" title="Criar" data-toggle="tooltip"><i class="material-icons">&#xE148;</i>Criar Usuário</a>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-12 border p-3" style="border-radius: 1rem;">
                                <table id="carTable" class="table table-striped table-bordered" style="width:100%; border-radius: 1rem;">
                                    <thead>
                                        <tr>
                                            <th>Modelo</th>
                                            <th>Marca</th>
                                            <th>Placa</th>
                                            <th>Ano</th>
                                            <th>Assentos</th>
                                            <th>Cor</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php

                                        if (isset($car)) {
                                            foreach ($car as $row) {
                                                echo "
                                                <tr>
                                                <td>
                                                    " . $row->Modelo . "
                                                </td>
                                                <td>
                                                    " . $row->Marca . "
                                                </td>
                                                <td>
                                                    " . $row->Placa . "
                                                </td>
                                                <td>
                                                    " . $row->Ano . "
                                                </td>
                                                <td>
                                                    " . $row->Assentos . "
                                                </td>
                                                <td>
                                                    " . $row->Cor . "
                                                </td>
                                                <td class='text-center'>
                                                <a href='../../Controllers/CarController.php?action=U&Id=" . $row->Id . "' class='btn btn-info' title='Editar' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>
                                                <a href='../../Controllers/CarController.php?action=D&Id=" . $row->Id . "' onclick='return texto()' class='btn btn-danger' title='Excluir' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>
                                                </td>
                                                
                                              </tr>
                                              ";
                                            }
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <script>
        function texto() {
            return confirm('Tem certeza que deseja apagar esse registro?');
        }
    </script>
</body>

</html>