<?php

$data = json_encode($_POST['txt']);
$url = 'http://sentiment.vivekn.com/api/batch/';

       $curl = curl_init($url);
       $curl_post_data = $data;

       curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
       curl_setopt($curl, CURLOPT_POST, true);
       curl_setopt($curl, CURLOPT_POSTFIELDS, $curl_post_data);
       $curl_response = curl_exec($curl);
       curl_close($curl);

       $response = ($curl_response);
       echo $response;

?>

