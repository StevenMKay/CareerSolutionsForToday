<?php
// Spam protection and form handling
header('Content-Type: application/json');

// Check if form was submitted via POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Spam protection checks
function isSpam($data) {
    // Check honeypot field (should be empty)
    if (!empty($data['website'])) {
        return true;
    }
    
    // Check if form was submitted too quickly (less than 3 seconds)
    if (isset($data['form_start_time'])) {
        $time_diff = time() - intval($data['form_start_time']);
        if ($time_diff < 3) {
            return true;
        }
    }
    
    // Check for common spam patterns
    $spam_patterns = [
        '/\b(viagra|casino|poker|loan|mortgage|debt|insurance|credit)\b/i',
        '/\b(buy now|click here|limited time|act now)\b/i',
        '/http[s]?:\/\/[^\s]{4,}/i', // Multiple URLs
    ];
    
    $text_fields = ['message', 'firstName', 'lastName'];
    foreach ($text_fields as $field) {
        if (isset($data[$field])) {
            foreach ($spam_patterns as $pattern) {
                if (preg_match($pattern, $data[$field])) {
                    return true;
                }
            }
        }
    }
    
    return false;
}

// Validate and sanitize input
function validateInput($data) {
    $errors = [];
    
    // Required fields
    $required_fields = ['firstName', 'lastName', 'email', 'serviceType', 'message', 'mathCaptcha'];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst($field) . ' is required';
        }
    }
    
    // Validate email
    if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address';
    }
    
    // Validate math captcha (you'll need to implement this based on your frontend)
    // For now, we'll skip this validation as it requires session storage
    
    return $errors;
}

// Get and sanitize POST data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Sanitize all inputs
$data = [];
foreach ($input as $key => $value) {
    $data[$key] = htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

// Check for spam
if (isSpam($data)) {
    // Log spam attempt (optional)
    error_log('Spam attempt from IP: ' . $_SERVER['REMOTE_ADDR'] . ' - Data: ' . json_encode($data));
    
    // Return success to prevent bot from knowing it was blocked
    echo json_encode(['success' => true]);
    exit;
}

// Validate input
$errors = validateInput($data);
if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Prepare email
// TIP: Set CONTACT_TO in your server env to avoid hardcoding; falls back to placeholder.
$to = getenv('CONTACT_TO') ?: 'stevenk@careersolutionsfortoday.com'; // TODO: replace with your real inbox
$subject = 'New Contact Form Submission - ' . $data['serviceType'];

$email_body = "New contact form submission:\n\n";
$email_body .= "Name: " . $data['firstName'] . ' ' . $data['lastName'] . "\n";
$email_body .= "Email: " . $data['email'] . "\n";
$email_body .= "Company: " . ($data['company'] ?? 'Not provided') . "\n";
$email_body .= "Service Interest: " . $data['serviceType'] . "\n";
$email_body .= "Budget: " . ($data['budget'] ?? 'Not specified') . "\n";
$email_body .= "Timeline: " . ($data['timeline'] ?? 'Not specified') . "\n";
$email_body .= "Message:\n" . $data['message'] . "\n\n";
$email_body .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

$headers = array(
    'From' => 'contact-form@careersolutionsfortoday.com',
    'Reply-To' => $data['email'],
    'Return-Path' => 'contact-form@careersolutionsfortoday.com',
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= $key . ': ' . $value . "\r\n";
}

// Send email
$success = mail($to, $subject, $email_body, $header_string);

if ($success) {
    // Log successful submission
    error_log('Contact form submitted successfully from: ' . $data['email']);
    
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    error_log('Failed to send contact form email');
    echo json_encode(['success' => false, 'error' => 'Failed to send message']);
}
?>
