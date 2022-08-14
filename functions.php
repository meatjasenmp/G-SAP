<?php

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page();
}

function theme_navigation() {
    register_nav_menu('primary-navigation',__( 'Primary Navigation' ));
}
add_action( 'init', 'theme_navigation' );


if ( function_exists( 'get_field' ) ) {
    function get_group_field( string $group, string $field, $post_id = 0 ) {
        $group_data = get_field( $group, $post_id );
        if ( is_array( $group_data ) && array_key_exists( $field, $group_data ) ) {
            return $group_data[ $field ];
        }
        return null;
    }
}

wp_enqueue_style('css', get_template_directory_uri()."/dist/app.css", null, "1.0.0", false);
wp_enqueue_script('js', get_template_directory_uri()."/dist/app.js", null, "1.0.0", true);
wp_enqueue_style('custom-font', get_template_directory_uri()."/MyFontsWebfontsKit.css", null, "1.0.0", false);
