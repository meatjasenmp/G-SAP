<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
    <title><?php bloginfo('name'); ?></title>
</head>

<body class="overflow-x-hidden font-gibson font-light bg-black">
<div class="<?php echo is_front_page() ? 'page-home' : 'page' ?>">
