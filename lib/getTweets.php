<?php

require_once('TwitterAPIExchange.php');

//$id = json_decode($_POST(['id']));
//var_dump($id);

//echo $id;

$settings = array(
    'oauth_access_token' => "567858909-WB4sjO5u020bEpuQYniKs8YCZxCLJ9HNxdtFzLcM",
    'oauth_access_token_secret' => "n37D8TvUJWrU8vbbtSL35iybAzMBhzIF44HyaqcDIwjca",
    'consumer_key' => "W7dML0jCjrp8tasZKYMuU5i1c",
    'consumer_secret' => "SMr5p3S3cjuSlZXZlI8wpGVKvPxcKeIzdCBxwa5vke54LDV4jX"
);


$url = 'https://api.twitter.com/1.1/search/tweets.json';
//$getfield = '?q=chip kelly&count=100&max_id=651602512756125700'; //+ $id;
//$getfield = '?q=chip kelly&count=100&max_id=' + $id;
$getfield = '?q=chip kelly&count=100';

$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();
    
 ?>