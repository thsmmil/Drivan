<?php include('../Shared/layoutHeader.php'); ?>
<?php
if (isset($_SESSION["end"])) {
    $end = $_SESSION["end"];
}
$action = $_GET["action"];
?>