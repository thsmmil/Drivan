<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carros - Drivan</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
    <script src="../../wwwroot/js/car.js"></script>
</head>

<body>
    <?php include('../Shared/layoutHeader.php'); ?>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card gutter-b mx-4 mt-4 shadow" style="border-radius: 1rem;">
                        <div class="card-header">
                            <div class="card-title">
                                <h3 class="card-label">
                                    Meus Carros
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-12 border p-3">
                                <table id="carTable" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Modelo</th>
                                            <th>Marca</th>
                                            <th>Placa</th>
                                            <th>Ano</th>
                                            <th>Cor</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Palio</td>
                                            <td>Fiat</td>
                                            <td>PEQ8668</td>
                                            <td>2010</td>
                                            <td>Preto</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Sprinter</td>
                                            <td>Mercedes</td>
                                            <td>PEQ8668</td>
                                            <td>2013</td>
                                            <td>Prata</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</body>

</html>