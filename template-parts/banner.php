<?php
    $page_banner = get_group_field('content_blocks', 'page_banner', 29);
    $page_banner_header = $page_banner['page_banner_header'];
    $page_banner_content = $page_banner['page_banner_content'];
    $page_banner_content_content = $page_banner_content['content'];
    $page_banner_content_list = $page_banner_content['list'];
    $page_banner_images = $page_banner['page_banner_images'];
?>

<section class="site_banner flex flex-col flex-col-reverse items-center my-10">
    <article class="mt-10 lg:max-w-lg lg:mr-28">
        <h1 class="text-gsap-blue"><?php echo $page_banner_header; ?></h1>

        <?php echo $page_banner_content_content; ?>

        <ul class="mt-4">
            <?php foreach($page_banner_content_list as $list): ?>
                <?php foreach($list as $item): $content = $item['list_content']; $list_bullet = $item['list_bullet'] ?>
                    <li class="flex font-magdelinBold">
                        <img class="w-6 mr-2" src="<?php echo $list_bullet['url']; ?>" alt="<?php echo $list_bullet['alt']; ?>">
                        <span><?php echo $content; ?></span>
                    </li>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>

    </article>
    <div class="relative flex-none w-80 lg:w-2/5">
        <figure class="absolute bottom-0 right-0 z-10 w-24">
            <?php get_template_part('template-parts/global/life-circle'); ?>
        </figure>
        <div class="banner_images">
            <?php foreach($page_banner_images as $page_banner_image): $image = $page_banner_image['image']; $label = $page_banner_image['label'] ?>
                <div class="absolute top-0">
                    <p class="absolute -right-[-2rem] lg:-right-[-6rem] top-20 leading-3 text-white font-magdelinBold text-xs"><?php echo $label; ?></p>
                    <figure>
                        <img class="w-full rounded-[50%] banner_image" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                    </figure>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
