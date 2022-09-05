<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
    <title><?php bloginfo('name'); ?></title>
</head>

<body>
    <div class="<?php echo is_front_page() ? 'page-home' : 'page' ?> page_wrap">
        <?php get_template_part('template-parts/global/ribbon'); ?>
        <?php get_template_part('template-parts/navigation/secondary'); ?>
        <header>
            <div class="wrapper">
                <div>
                    <?php get_template_part('template-parts/global/gsap-logo-combined'); ?>
                </div>
                <div class="navigation_container">
                    <?php get_template_part('template-parts/navigation/primary'); ?>
                </div>
                <div class="mobile_menu_container">
                    <div class="mobile_menu">
                        <div class="mobile_menu_icon">
                            <div class="mobile_menu_icon_line"></div>
                            <div class="mobile_menu_icon_line"></div>
                            <div class="mobile_menu_icon_line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
