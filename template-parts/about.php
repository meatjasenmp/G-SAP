<?php
    $about = get_group_field('content_blocks', 'about', 29);
    $biography = $about['biography'];
    $biography_arrow = $biography['arrow'];
    $biography_image = $biography['image'];
    $biography_image_image = $biography_image['image'];
    $biography_image_title = $biography_image['title'];
    $biography_image_title_name = $biography_image_title['name'];
    $biography_image_title_title = $biography_image_title['title'];
    $biography_content = $biography['content'];
    $biography_content_sub_header = $biography_content['sub_header'];
    $biography_content_header = $biography_content['header'];
    $biography_content_content = $biography_content['content'];
    $about_mission_statement = $about['mission_statement'];
    $about_mission_statement_subheader = $about_mission_statement['sub_header'];
    $about_mission_statement_content = $about_mission_statement['content'];
    $about_quote = $about['quote'];
    $about_quote_image = $about_quote['image'];
?>

<section class="about">
    <div class="wrapper">
        <div class="portrait_image_title portrait_image_title_mobile">
            <h5 class="text-gsap-orange tracking-wider opacity-0"><?php echo $biography_content_sub_header; ?></h5>
            <span class="biography_image_name opacity-0"><?php echo $biography_image_title_name; ?></span>
            <span class="biography_image_title opacity-0"><?php echo $biography_image_title_title; ?></span>
        </div>
        <div class="portrait_image_container">
            <figure class="portrait_image_wrapper">
                <div class="portrait_image_title">
                    <span class="biography_image_name opacity-0"><?php echo $biography_image_title_name; ?></span>
                    <span class="biography_image_title opacity-0"><?php echo $biography_image_title_title; ?></span>
                </div>
                <img class="portrait_image opacity-0" src="<?php echo $biography_image_image['url']; ?>" alt="<?php echo $biography_image_image['alt']; ?>">
                <figure class="life_circle opacity-0">
                    <?php get_template_part('template-parts/global/life-circle'); ?>
                </figure>
            </figure>
        </div>
        <div class="biography_wrapper">
            <h5 class="text-gsap-orange tracking-wider"><?php echo $biography_content_sub_header; ?></h5>
            <h2><?php echo $biography_content_header; ?></h2>
            <div class="biography_wrapper_content">
                <?php echo $biography_content_content; ?>
            </div>
<!--            <figure class="arrow">-->
<!--                <img src="--><?php //echo $biography_arrow['url']; ?><!--" alt="--><?php //echo $biography_arrow['alt']; ?><!--">-->
<!--            </figure>-->
        </div>
    </div>
    <div class="mission_statement">
        <h5 class="opacity-0"><?php echo $about_mission_statement_subheader; ?></h5>
        <p class="opacity-0"><?php echo strip_tags($about_mission_statement_content, ''); ?></p>
    </div>
    <div class="quote_image opacity-0">
        <figure>
            <img src="<?php echo $about_quote_image['url'] ?>" alt="<?php echo $about_quote_image['alt'] ?>">
        </figure>
    </div>
</section>
