<?php
// router.php
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$file = __DIR__ . $path;

if (is_file($file)) {
    return false; // serve direto
}

if (file_exists(__DIR__ . '/index.php')) {
    require_once __DIR__ . '/index.php';
} else {
    http_response_code(404);
    echo "Arquivo não encontrado: $path";
}
