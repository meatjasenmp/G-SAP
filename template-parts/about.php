<?php
    $about = get_group_field('content_blocks', 'about', 29);
    $biography = $about['biography'];
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

<section class="about mt-20">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
        <div>
            <figure class="relative">
                <div class="absolute top-12 left-12">
                    <span class="block font-magdelinBold"><?php echo $biography_image_title_name; ?></span>
                    <span class="block"><?php echo $biography_image_title_title; ?></span>
                </div>
                <img class="rounded-full max-w-2xl" src="<?php echo $biography_image_image['url']; ?>" alt="<?php echo $biography_image_image['alt']; ?>">
                <figure class="absolute bottom-[3.5rem] right-0 z-10">
                    <?php get_template_part('template-parts/global/life-circle'); ?>
                </figure>
            </figure>
        </div>
        <div class="flex-none max-w-[400px]">
            <h5 class="text-gsap-orange tracking-wider"><?php echo $biography_content_sub_header; ?></h5>
            <h2><?php echo $biography_content_header; ?></h2>
            <?php echo $biography_content_content; ?>
        </div>
    </div>
    <div class="max-w-xl mx-auto text-center mt-20">
        <h5 class="uppercase text-gsap-blue tracking-wider mb-1 text-sm"><?php echo $about_mission_statement_subheader; ?></h5>
        <p class="text-[1.15rem]"><?php echo strip_tags($about_mission_statement_content, ''); ?></p>
    </div>
    <div class="mt-20">
        <figure class="max-w-2xl mx-auto">
            <img src="<?php echo $about_quote_image['url'] ?>" alt="<?php echo $about_quote_image['alt'] ?>">
        </figure>
    </div>
</section>
