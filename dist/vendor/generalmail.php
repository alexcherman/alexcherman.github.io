<?php 

$name = $_POST['general_name'];
$surname = $_POST['general_surname'];
$email = $_POST['general_mail'];
$message = $_POST['general_message'];

require_once('../vendor/phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'commditysmtp@gmail.com'; 
$mail->Password = 'iq5YulUp62'; 
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; 

$mail->setFrom('commditysmtp@gmail.com'); 
$mail->addAddress('commoditytestmail@gmail.com');     

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Commodity general enquiries';
$mail->Body    = '' .$name . ' ' .$surname. ' left you a message:' . '<br> "' .$message. '"' . '<br>Mail: ' .$email;
$mail->AltBody = '';


//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Sent';
}
?>