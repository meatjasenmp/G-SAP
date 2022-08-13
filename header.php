<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <?php wp_head(); ?>
    <title><?php bloginfo('name'); ?></title>
</head>

<body class="overflow-x-hidden font-magdelin font-light max-w-[1440px] mx-auto">
    <div class="<?php echo is_front_page() ? 'page-home' : 'page' ?> p-12 relative">
        <?php get_template_part('template-parts/global/ribbon'); ?>
        <header>
            <div class="flex items-center">
                <div>
                    <?php get_template_part('template-parts/global/gsap-logo-combined'); ?>
                </div>
                <div class="ml-[10rem] hidden">
                    <?php get_template_part('template-parts/navigation/primary'); ?>
                </div>
            </div>
        </header>
