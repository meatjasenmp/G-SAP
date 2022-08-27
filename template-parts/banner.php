<?php
    $page_banner = get_group_field('content_blocks', 'page_banner', 29);
    $page_banner_header = $page_banner['page_banner_header'];
    $page_banner_content = $page_banner['page_banner_content'];
    $page_banner_content_content = $page_banner_content['content'];
    $page_banner_content_list = $page_banner_content['list'];
    $page_banner_images = $page_banner['page_banner_images'];
?>

<section class="site_banner">
    <article>
        <h1><?php echo $page_banner_header; ?></h1>

        <?php echo $page_banner_content_content; ?>

        <ul>
            <?php foreach($page_banner_content_list as $list): ?>
                <?php foreach($list as $item): $content = $item['list_content']; $list_bullet = $item['list_bullet'] ?>
                    <li>
                        <img src="<?php echo $list_bullet['url']; ?>" alt="<?php echo $list_bullet['alt']; ?>">
                        <span><?php echo $content; ?></span>
                    </li>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>

    </article>
    <div class="banner_image_container">
        <figure class="absolute life_circle">
            <?php get_template_part('template-parts/global/life-circle'); ?>
        </figure>
        <div class="banner_images">
            <?php foreach($page_banner_images as $page_banner_image): $image = $page_banner_image['image']; $label = $page_banner_image['label'] ?>
                <div>
                    <p><?php echo $label; ?></p>
                    <figure>
                        <img class="banner_image" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                    </figure>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
