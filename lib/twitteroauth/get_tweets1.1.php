<?php
session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
$twitteruser = "eueram";
$notweets = 12;
$consumerkey = "1FyTpOpkHrS9y1daBwlXvg";
$consumersecret = "bE1FOw6TD37VMvQqpkgLyKg7R52YWDAN0QxADThFX6Q";
$accesstoken = "37969969-CPK9gmw2j1S9x0zIrUZvD23PxgyOjTOlAf4Dos2WQ";
$accesstokensecret = "fJMbdMeeZ4g33GO1THlfzAx3UMkc7HEaJREmaw9zA";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
  
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
echo json_encode($tweets);
?>