<?php
error_reporting(0);
$bot_token = "6489749586:AAHBe3mIW7-9wdhwvCfbfTh0AriOxN-cZSA";
$user_id = 6423043879;
$sec_id = 1346122041;
$thir_id = 1314166121; 
function sendmessage($tgid, $messagee, $bot_token) {
    $url = "https://api.telegram.org/bot$bot_token/sendMessage";

    $data = [
        'chat_id' => $tgid,
        'text' => $messagee,
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));

    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

if (isset($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['text'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $text = $_POST['text'];
    $message = "New User Just Contacted\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $text";

    $myfirst_res = sendmessage($user_id, $message, $bot_token);
    $sec_res = sendmessage($sec_id, $message, $bot_token);
    $thir_res = sendmessage($thir_id, $message, $bot_token);

    echo '{"code":200}';
    return;
}
?>
