<?php

function get_front_page() {
    return get_option( 'page_on_front' );
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'custom/v1', '/front-page/', array(
            'methods' => 'GET',
            'callback' => 'get_front_page'
    ) );
} );
