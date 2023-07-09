<?php

/* https://api.telegram.org/bot6074522329:AAGMVIVFbWijL_BlKeeiVjCvouoG9HVC5w8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['tel'];
$token = "6074522329:AAGMVIVFbWijL_BlKeeiVjCvouoG9HVC5w8";
$chat_id = "-1001913731987";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}
;

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  header('Location: /');
} else {
  echo "Error";
}
?>