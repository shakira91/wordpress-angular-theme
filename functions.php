<?php

function get_menus() {
    $menus = wp_get_nav_menu_items('menu');
    return $menus;
}

function theme_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'theme_logo_setup');

function get_site_logo() {
    return get_custom_logo();
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/site-logo/', array(
            'methods' => 'GET',
            'callback' => 'get_site_logo'
    ) );
} );


add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/menus/', array(
            'methods' => 'GET',
            'callback' => 'get_menus'
    ) );
} );

function get_front_page() {
    return get_option( 'page_on_front' );
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/front-page/', array(
            'methods' => 'GET',
            'callback' => 'get_front_page'
    ) );
} );

