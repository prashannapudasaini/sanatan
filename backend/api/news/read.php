<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';

$database = new Database();
$db = $database->getConnection();

// Query News
$query = "SELECT id, title_en, title_np, content_en, content_np, image_url, published_date FROM news ORDER BY published_date DESC";
$stmt = $db->prepare($query);
$stmt->execute();

$num = $stmt->rowCount();

if($num > 0) {
    $news_arr = array();
    $news_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        
        $news_item = array(
            "id" => $id,
            "title_en" => $title_en,
            "title_np" => $title_np,
            // Decode HTML entities if WYSIWYG editor was used
            "content_en" => html_entity_decode($content_en),
            "content_np" => html_entity_decode($content_np),
            "image_url" => $image_url,
            "published_date" => $published_date
        );
        array_push($news_arr["records"], $news_item);
    }
    http_response_code(200);
    echo json_encode($news_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No news found."));
}
?>