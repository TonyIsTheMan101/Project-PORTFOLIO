<?php
if(isset($_POST['submit'])) {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = 'youremail@example.com';

    // Set the email subject
    $email_subject = 'New message from your website';

    // Set the email body
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    // Set the email headers
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send the email
    if(mail($to, $email_subject, $email_body, $headers)) {
        // If the email was sent successfully, redirect to a thank you page
        header('Location: thank_you.html');
        exit;
    } else {
        // If there was an error sending the email, display an error message
        echo 'An error occurred. Please try again later.';
    }
}
?>
