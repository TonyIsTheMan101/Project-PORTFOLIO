<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = isset($_POST["name"]) ? strip_tags(trim($_POST["name"])) : "";
    $email = isset($_POST["email"]) ? filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL) : "";
    $subject = isset($_POST["subject"]) ? strip_tags(trim($_POST["subject"])) : "";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

    // Check if all required fields are filled
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Set the recipient email address
        $to = "your-email-address@example.com";

        // Set the email headers
        $headers = "From: $name <$email>" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            // Email sent successfully
            $response = array(
                "status" => "success",
                "message" => "Message sent successfully."
            );
        } else {
            // Error sending email
            $response = array(
                "status" => "error",
                "message" => "Error sending message. Please try again later."
            );
        }
    } else {
        // Invalid form data
        $response = array(
            "status" => "error",
            "message" => "Invalid form data. Please fill all required fields."
        );
    }

    // Send JSON response
    header("Content-Type: application/json");
    echo json_encode($response);
} else {
    // Invalid request method
    http_response_code(403);
    echo "Forbidden";
}
?>
