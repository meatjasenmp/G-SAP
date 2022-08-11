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

<section class="resources text-white pt-20 pb-40 relative w-screen left-2/4 right-2/4 ml-[-50vw] mr-[-50vw]">
    <figure class="absolute top-0 left-0 h-full w-full bg-cover"  style="background: url('<?php echo $resources_background['url']; ?>')"></figure>
    <div class="max-w-[1440px] mx-auto relative z-10">
        <div class="max-w-xl mx-auto text-center">
            <h5 class="uppercase tracking-widest text-sm"><?php echo $resources_sub_header; ?></h5>
            <h1 class="mb-3"><?php echo $resources_header_text; ?></h1>
            <?php echo $resources_header_content; ?>
        </div>
        <div class="mt-20 max-w-4xl mx-auto relative">
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
                                <div class="max-w-xs mx-auto flex flex-col items-center text-center">
                                    <div>
                                        <h4 class="mb-0"><?php echo $sub_header; ?></h4>
                                        <?php echo $content; ?>
                                    </div>
                                    <div class="flex items-center">
                                        <figure class="mr-1 w-3">
                                            <img src="<?php echo $footer['image']['url']; ?>" alt="<?php echo $footer['image']['alt']; ?>" />
                                        </figure>
                                        <span class="text-xs uppercase font-magdelinBold block"><?php echo $footer['text']; ?></span>
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
