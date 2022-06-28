<?php 

function makePost($ApiEndpoint, $data){
    $payload = json_encode($data);
    $ch = curl_init($ApiEndpoint);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($payload))
    );
    $data = json_decode(curl_exec($ch));
    return $data;
}
function makeGet($ApiEndpoint){
    $ch = curl_init($ApiEndpoint);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $user = json_decode(curl_exec($ch));
    return $user;
}
function makePut($ApiEndpoint, $data){
    $payload = json_encode($data);
    $ch = curl_init($ApiEndpoint);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($payload))
    );
    $data = json_decode(curl_exec($ch));
    return $data;
}
function makeDelete($ApiEndpoint){
    $ch = curl_init($ApiEndpoint);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $user = json_decode(curl_exec($ch));
    return $user;
}
?>