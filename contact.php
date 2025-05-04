<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Log received data
error_log("Received POST data: " . print_r($_POST, true));

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to validate email
function is_valid_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Function to validate phone number (basic validation)
function is_valid_phone($phone) {
    return preg_match('/^[0-9\-\+\(\)\s]{10,20}$/', $phone);
}

try {
    // Get and sanitize form data
    $name = sanitize_input($_POST['name'] ?? '');
    $company = sanitize_input($_POST['company'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $phone = sanitize_input($_POST['phone'] ?? '');
    $package = sanitize_input($_POST['package'] ?? '');
    $services = json_decode($_POST['services'] ?? '[]', true);
    $message = sanitize_input($_POST['message'] ?? '');

    // Validate required fields
    if (empty($name) || empty($company) || empty($email) || empty($phone) || empty($message)) {
        throw new Exception('All required fields must be filled out');
    }

    // Validate email
    if (!is_valid_email($email)) {
        throw new Exception('Invalid email format');
    }

    // Validate phone
    if (!is_valid_phone($phone)) {
        throw new Exception('Invalid phone number format');
    }

    // Prepare email content
    $to = 'haseebbpspacer123@gmail.com';
    $subject = 'New Contact Form Submission from ' . $company;

    // Format services list
    $servicesList = !empty($services) ? implode("\n", $services) : 'None selected';

    // Create email body with HTML formatting
    $emailBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background: linear-gradient(to right, #6366f1, #3b82f6);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
            }
            .content {
                background: #ffffff;
                padding: 20px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 5px 5px;
            }
            .section {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e7eb;
            }
            .section:last-child {
                border-bottom: none;
                margin-bottom: 0;
                padding-bottom: 0;
            }
            .label {
                font-weight: bold;
                color: #4b5563;
                margin-bottom: 5px;
            }
            .value {
                color: #1f2937;
            }
            .services-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .services-list li {
                padding: 5px 0;
                color: #1f2937;
            }
            .message-box {
                background: #f3f4f6;
                padding: 15px;
                border-radius: 5px;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>New Contact Form Submission</h2>
        </div>
        <div class='content'>
            <div class='section'>
                <div class='label'>Name</div>
                <div class='value'>$name</div>
            </div>
            <div class='section'>
                <div class='label'>Company</div>
                <div class='value'>$company</div>
            </div>
            <div class='section'>
                <div class='label'>Contact Information</div>
                <div class='value'>
                    Email: $email<br>
                    Phone: $phone
                </div>
            </div>
            <div class='section'>
                <div class='label'>Selected Package</div>
                <div class='value'>" . ($package ?: 'None') . "</div>
            </div>
            <div class='section'>
                <div class='label'>Selected Services</div>
                <div class='value'>
                    <ul class='services-list'>";

    // Add services to the list
    if (!empty($services)) {
        foreach ($services as $service) {
            $emailBody .= "<li>• $service</li>";
        }
    } else {
        $emailBody .= "<li>None selected</li>";
    }

    $emailBody .= "
                    </ul>
                </div>
            </div>
            <div class='section'>
                <div class='label'>Message</div>
                <div class='message-box'>$message</div>
            </div>
        </div>
    </body>
    </html>";

    // Set email headers for HTML content
    $headers = array(
        'From: Vision Accountants <noreply@visionaccountants.com>',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion(),
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8'
    );

    // Log email attempt
    error_log("Attempting to send email to: " . $to);
    error_log("Email subject: " . $subject);
    error_log("Email body: " . $emailBody);

    // Send email
    $mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

    if ($mailSent) {
        error_log("Email sent successfully to: " . $to);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you for your message. We will get back to you soon!'
        ]);
    } else {
        error_log("Failed to send email to: " . $to);
        throw new Exception('Failed to send email');
    }

} catch (Exception $e) {
    // Log the error
    error_log("Mail Error: " . $e->getMessage());
    
    // Send error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again later.',
        'debug' => $e->getMessage() // Only in development
    ]);
}
?> 