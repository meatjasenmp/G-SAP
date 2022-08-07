<?php
    $page_banner =  get_group_field('content_blocks', 'page_banner', 29);
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

        <ul class="mt-4">
            <?php foreach($page_banner_content_list as $list): ?>
                <?php foreach($list as $item): $content = $item['list_content']; $list_bullet = $item['list_bullet'] ?>
                    <li class="flex mb-4 last:mb-0 font-magdelinBold">
                        <img class="w-6 mr-2" src="<?php echo $list_bullet['url']; ?>" alt="<?php echo $list_bullet['alt']; ?>">
                        <span><?php echo $content; ?></span>
                    </li>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>

    </article>
</section>
