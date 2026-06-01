<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once '../../config/database.php';
require '../../vendor/autoload.php';
use \Firebase\JWT\JWT;

$database = new Database();
$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->email) && !empty($data->password)) {
    $query = "SELECT id, name, password_hash, role FROM users WHERE email = ? LIMIT 0,1";
    $stmt = $db->prepare($query);
    $stmt->execute([$data->email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if($user && password_verify($data->password, $user['password_hash'])) {
        $secret_key = "YOUR_SUPER_SECRET_KEY"; // Move to .env in production
        $issuer_claim = "sdbnepal.org.np";
        $issuedat_claim = time(); 
        $expire_claim = $issuedat_claim + 3600; // 1 hour

        $token = array(
            "iss" => $issuer_claim,
            "iat" => $issuedat_claim,
            "exp" => $expire_claim,
            "data" => array("id" => $user['id'], "role" => $user['role'])
        );

        $jwt = JWT::encode($token, $secret_key, 'HS256');
        echo json_encode(["message" => "Login successful.", "jwt" => $jwt]);
    } else {
        http_response_code(401);
        echo json_encode(["message" => "Login failed. Invalid credentials."]);
    }
}
?>