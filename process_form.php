<?php

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Send an email with the form data
$to = 'youremail@example.com';
$subject = 'New message from your website';
$body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage: $message";
$headers = "From: $email";

if (mail($to, $subject, $body, $headers)) {
  echo 'Message sent successfully!';
} else {
  echo 'An error occurred. Please try again later.';
}

?>
