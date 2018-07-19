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

function register_widgets_init() {
    // register_sidebar( array(
	// 	'name'          => 'Main Content',
	// 	'before_widget' => '<div class="widget-area-main">',
	// 	'after_widget'  => '</div>',
	// 	'before_title'  => '<h2>',
	// 	'after_title'   => '</h2>',
	// ));
    register_sidebar( array(
		'name'          => 'Footer Content',
		'before_widget' => '<div class="widget-area-footer">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2>',
		'after_title'   => '</h2>',
    ));
}
add_action( 'widgets_init', 'register_widgets_init' );


function get_front_page() {
    return get_option( 'page_on_front' );
}

function get_main_widgets() {
    return dynamic_sidebar('Main Content');
}

function get_footer_widgets() {
    return dynamic_sidebar('Footer Content');
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/menus/', array(
            'methods' => 'GET',
            'callback' => 'get_menus'
    ) );
} );

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/site-logo/', array(
            'methods' => 'GET',
            'callback' => 'get_site_logo'
    ) );
} );

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/front-page/', array(
            'methods' => 'GET',
            'callback' => 'get_front_page'
    ) );
} );

// add_action( 'rest_api_init', function () {
//     register_rest_route( 'custom/v1', '/main-widgets/', array(
//             'methods' => 'GET',
//             'callback' => 'get_main_widgets'
//     ) );
// } );

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/footer-widgets/', array(
            'methods' => 'GET',
            'callback' => 'get_footer_widgets'
    ) );
} );


