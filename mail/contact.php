<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) 
    || empty($_POST['subject']) || empty($_POST['message'])
    || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
{
    die("Invalid form!");
}
	
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));
	
// Create the email and send the message

$to = "storecorvino@gmail.com";
$email_subject = $subject;
$email_body = $message;
$headers = "From: $name <$email_address>\n";
$headers .= "Reply-To: $email_address";	

mail($to, $email_subject, $email_body, $headers) or die('Error sending e-mail');

return true;			
?>