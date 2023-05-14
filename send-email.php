    $name = $_POST['name'];
    $visitor_email = $_POST['email']
    $message = $_POST['message']

 
    $email_from = 'doraresta@hotmail.com';

    $email_subject = "New Client Request/Contact Me Form";

    $email_body = "User Name: $name. \n".
                    "User Email: $visitor_email.\n".
                        "User Message: $message.\n";


    $to = "drcounsellingservices.com, doraresta@hotmail.com"

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers)

    header("Location: getincontact.html");

?>
