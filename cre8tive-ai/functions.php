<?php
// Disable WordPress admin bar for cleaner React rendering
add_filter('show_admin_bar', '__return_false');

// Add security headers
function add_security_headers() {
    header('X-Frame-Options: SAMEORIGIN');
    header('X-Content-Type-Options: nosniff');
    header('X-XSS-Protection: 1; mode=block');
    header('Referrer-Policy: strict-origin-when-cross-origin');
}
add_action('send_headers', 'add_security_headers');

// Enqueue React scripts and styles with proper dependencies
function enqueue_react_scripts() {
    // Deregister WordPress jQuery to avoid conflicts
    wp_deregister_script('jquery');
    
    // Register jQuery as a dependency
    wp_register_script('jquery', 
        'https://code.jquery.com/jquery-3.6.0.min.js',
        array(),
        '3.6.0',
        true
    );

    // Enqueue main JavaScript bundle
    wp_enqueue_script(
        'react-app-main',
        get_template_directory_uri() . '/dist/index-4G-vykYs.js',
        array('jquery'),  // Add jQuery as dependency
        null,
        true
    );
    
    // Enqueue CSS
    wp_enqueue_style(
        'react-app-styles',
        get_template_directory_uri() . '/dist/index-DklI0mvP.css',
        array(),
        null
    );

    // Add runtime configuration
    wp_localize_script('react-app-main', 'wpConfig', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('wp_rest'),
        'baseUrl' => get_site_url()
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_react_scripts');

// Enqueue ElevenLabs widget with proper timing
function enqueue_elevenlabs_widget() {
    wp_enqueue_script(
        'elevenlabs-widget',
        'https://elevenlabs.io/convai-widget/index.js',
        array('react-app-main'),  // Make sure it loads after React
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_elevenlabs_widget');

// Add theme support
function cre8tive_ai_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'cre8tive_ai_theme_support');

// Allow iframe embedding for Vimeo
function allow_iframe_headers() {
    header('Content-Security-Policy: frame-ancestors \'self\' https://*.vimeo.com https://*.elevenlabs.io;');
}
add_action('send_headers', 'allow_iframe_headers');

// Handle 404s gracefully
function handle_404() {
    if (is_404()) {
        wp_redirect(home_url('/'));
        exit();
    }
}
add_action('template_redirect', 'handle_404');