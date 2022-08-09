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
    $about_quote_content = $about_quote['content'];
    $about_quote_citation = $about_quote['citation'];
?>

<section class="about mt-20">
    <div class="flex justify-between items-center">
        <div>
            <figure class="relative">
                <div class="absolute top-12 left-12">
                    <span class="block font-magdelinBold"><?php echo $biography_image_title_name; ?></span>
                    <span class="block"><?php echo $biography_image_title_title; ?></span>
                </div>
                <img class="rounded-full max-w-2xl" src="<?php echo $biography_image_image['url']; ?>" alt="<?php echo $biography_image_image['alt']; ?>">
            </figure>
        </div>
        <div class="flex-none max-w-[400px]">
            <h5 class="text-gsap-orange tracking-wider"><?php echo $biography_content_sub_header; ?></h5>
            <h2><?php echo $biography_content_header; ?></h2>
            <?php echo $biography_content_content; ?>
        </div>
    </div>
    <div>
        <h5><?php echo $about_mission_statement_subheader; ?></h5>
        <?php echo $about_mission_statement_content; ?>
    </div>
    <div>
        <blockquote>
            <h1><?php echo $about_quote_content; ?></h1>
            <cite><?php echo $about_quote_citation; ?></cite>
        </blockquote>
    </div>
</section>
