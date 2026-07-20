<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// پاسخ به درخواست OPTIONS (برای CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// فقط متد POST قبول کن
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Only POST method is allowed']);
    exit();
}

// دریافت داده‌های JSON از درخواست
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// اعتبارسنجی داده‌ها
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

// گرفتن مقادیر
$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$role = isset($data['role']) ? trim($data['role']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// اعتبارسنجی فیلدهای ضروری
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email and message are required']);
    exit();
}

// اعتبارسنجی ایمیل
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit();
}

// ========== تنظیمات ایمیل ==========
$to = 'majid.moe2001@gmail.com'; // 🔁 ایمیل خودت رو اینجا بذار
$subject = "New Contact Form Message from $name";

// ساخت بدنه ایمیل
$emailBody = "
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1e3a8a); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
        .value { background: white; padding: 10px; border: 1px solid #e5e7eb; border-radius: 5px; margin-top: 0; }
        .role-badge { display: inline-block; background: #3b82f6; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.9em; }
        .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #6b7280; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📬 New Contact Form Message</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>👤 Name:</div>
                <div class='value'>" . htmlspecialchars($name) . "</div>
            </div>
            <div class='field'>
                <div class='label'>📧 Email:</div>
                <div class='value'>" . htmlspecialchars($email) . "</div>
            </div>
            <div class='field'>
                <div class='label'>💼 Role:</div>
                <div class='value'>" . (!empty($role) ? htmlspecialchars($role) : 'Not specified') . "</div>
            </div>
            <div class='field'>
                <div class='label'>💬 Message:</div>
                <div class='value'>" . nl2br(htmlspecialchars($message)) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>Sent from your website contact form</p>
            <p>IP Address: " . $_SERVER['REMOTE_ADDR'] . " | Time: " . date('Y-m-d H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// هدرهای ایمیل
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: ' . $email,
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// ارسال ایمیل
$mailSent = mail($to, $subject, $emailBody, implode("\r\n", $headers));

// پاسخ به کلاینت
if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send email. Please check server configuration.'
    ]);
}
?>