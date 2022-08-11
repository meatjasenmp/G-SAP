<?php
    $resources = get_group_field('content_blocks', 'resources', 29);
    $resources_sub_header = $resources['sub_header'];
    $resources_header = $resources['header'];
    $resources_header_text = $resources_header['text'];
    $resources_header_content = $resources_header['content'];
    $resources_carousel = $resources['carousel'];
    $resources_carousel_cells = $resources_carousel['cells'];
?>

<section class="resources bg-gsap-blue text-white py-16 relative w-screen left-2/4 right-2/4 ml-[-50vw] mr-[-50vw]">
    <div class="max-w-[1440px] mx-auto">
        <div class="max-w-xl mx-auto text-center">
            <h5 class="uppercase tracking-widest text-sm"><?php echo $resources_sub_header; ?></h5>
            <h1 class="mb-3"><?php echo $resources_header_text; ?></h1>
            <?php echo $resources_header_content; ?>
        </div>
        <div class="carousel">
            <?php foreach($resources_carousel_cells as $cell): ?>
                <?php foreach($cell as $cell_item): $image = $cell_item['image']; $header = $cell_item['text']; $content = $cell_item['content']; $footer = $cell_item['footer']; ?>
                    <div class="cell">
                        <figure>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                        </figure>
                        <div>
                            <h5><?php echo $header; ?></h5>
                            <?php echo $content; ?>
                            <div>
                                <figure>
                                    <img src="<?php echo $footer['image']['url']; ?>" alt="<?php echo $footer['image']['alt']; ?>" />
                                </figure>
                                <span><?php echo $footer['text']; ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>
