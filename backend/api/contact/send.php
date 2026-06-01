<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

// Get posted data
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->name) && !empty($data->email) && !empty($data->message)) {
    
    // Sanitize inputs to prevent XSS
    $name = htmlspecialchars(strip_tags($data->name));
    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $phone = isset($data->phone) ? htmlspecialchars(strip_tags($data->phone)) : '';
    $message = htmlspecialchars(strip_tags($data->message));

    // Validate Email
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        http_response_code(400);
        echo json_encode(array("message" => "Invalid email format."));
        exit();
    }

    // Insert into database
    $query = "INSERT INTO contact_messages SET name=:name, email=:email, phone=:phone, message=:message";
    $stmt = $db->prepare($query);

    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":phone", $phone);
    $stmt->bindParam(":message", $message);

    if($stmt->execute()) {
        http_response_code(201);
        echo json_encode(array("message" => "Message sent successfully."));
        
        // Optional: Implement PHPMailer here to send email to sdbnepal.org@gmail.com
        // require '../../vendor/autoload.php';
        // $mail = new PHPMailer\PHPMailer\PHPMailer();
        // Configure SMTP...
        
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to send message."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>