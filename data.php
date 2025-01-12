<?php
// Set the content type to JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


// Dummy data (Salesforce certifications paragraph)
$data = [
    "paragraph" => "Salesforce certifications have been a topic of debate among professionals. Some value the credentials highly, while others emphasize the importance of hands-on experience. Certifications provide proof of expertise and serve as a pathway for career growth. However, practical projects and real-world implementation often carry more weight in certain situations. It's always a good idea to balance both knowledge and application."
];

// Encode the data as JSON and send it as a response
echo json_encode($data);
?>
