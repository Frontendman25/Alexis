<?php
//Принимаем постовые данные
$name=$_POST['name'];
$email=$_POST['email'];
$subject=$_POST['subject'];
$message=$_POST['message'];
//Тут указываем на какой ящик посылать письмо
$to = "designer24@i.ua";
//Далее идет тема и само сообщение
// Тема письма
$from_site = "Заявка с сайта";
// Сообщение письма
$message = "
Имя пользователя: ".htmlspecialchars($name)."<br />
Телефон: <a href='tel:$email'>".htmlspecialchars($email)."</a>";
// Отправляем письмо при помощи функции mail();
$headers = "From: alexis <designer24@i.ua>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $from_site, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
//header('Location: thanks.html');
exit();
?>