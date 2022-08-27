<?php
    $resources = get_group_field('content_blocks', 'resources', 29);
    $resources_background = $resources['background'];
    $resources_sub_header = $resources['sub_header'];
    $resources_header = $resources['header'];
    $resources_header_text = $resources_header['text'];
    $resources_header_content = $resources_header['content'];
    $resources_carousel = $resources['carousel'];
    $resources_carousel_cells = $resources_carousel['cells'];
?>

<section class="resources">
    <figure class="background_dots"  style="background: url('<?php echo $resources_background['url']; ?>')"></figure>
    <div class="resources_wrapper">
        <div class="resources_header max-w-xl mx-auto text-center">
            <h5><?php echo $resources_sub_header; ?></h5>
            <h1><?php echo $resources_header_text; ?></h1>
            <?php echo $resources_header_content; ?>
        </div>
        <div class="carousel_wrapper">
            <?php get_template_part('template-parts/global/pulsating-button-carousel-left'); ?>
            <?php get_template_part('template-parts/global/pulsating-button-carousel-right'); ?>
            <div class="carousel">
                <?php foreach($resources_carousel_cells as $cell): ?>
                    <?php foreach($cell as $cell_item): $image = $cell_item['image']; $sub_header = $cell_item['sub_header']; $content = $cell_item['content']; $footer = $cell_item['footer']; ?>
                        <div class="carousel-cell">
                            <div class="cell-wrap">
                                <figure class="hero">
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                </figure>
                                <div class="cell_content">
                                    <div>
                                        <h4 ><?php echo $sub_header; ?></h4>
                                        <?php echo $content; ?>
                                    </div>
                                    <div class="presentation_time">
                                        <figure>
                                            <img src="<?php echo $footer['image']['url']; ?>" alt="<?php echo $footer['image']['alt']; ?>" />
                                        </figure>
                                        <span><?php echo $footer['text']; ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
