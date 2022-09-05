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
        <h1 class="banner_header opacity-0"><?php echo $page_banner_header; ?></h1>

        <div class="banner_content opacity-0">
            <?php echo $page_banner_content_content; ?>
        </div>

        <ul class="banner_content_bullets">
            <?php foreach($page_banner_content_list as $list): ?>
                <?php foreach($list as $item): $content = $item['list_content']; $list_bullet = $item['list_bullet'] ?>
                    <li class="opacity-0">
                        <img src="<?php echo $list_bullet['url']; ?>" alt="<?php echo $list_bullet['alt']; ?>">
                        <span><?php echo $content; ?></span>
                    </li>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>

    </article>
    <div class="banner_image_container">
        <figure class="absolute life_circle opacity-0">
            <?php get_template_part('template-parts/global/life-circle'); ?>
        </figure>
        <div class="banner_images opacity-0">
            <?php foreach($page_banner_images as $key => $page_banner_image): $image = $page_banner_image['image']; $label = $page_banner_image['label']; ?>
                <div class="banner_image_slide <?php echo $key === 0 ? 'active' : '' ?>">
                    <p><?php echo $label; ?></p>
                    <figure>
                        <img class="banner_image" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                    </figure>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
