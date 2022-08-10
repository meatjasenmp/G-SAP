<?php
    $icap = get_group_field('content_blocks', 'icap', 29);
    $icap_banner = $icap['banner'];
    $icap_banner_image = $icap_banner['image'];
    $icap_banner_content = $icap_banner['content'];
    $icap_banner_content_header = $icap_banner_content['header'];
    $icap_banner_content_columns = $icap_banner_content['columns'];
    $icap_learn_more = $icap['learn_more'];
?>

<section class="icap mt-20 relative w-screen left-2/4 right-2/4 ml-[-50vw] mr-[-50vw]">
    <div class="flex">
        <div class="flex-none w-1/2">
            <figure>
                <img src="<?php echo $icap_banner_image['url']; ?>" alt="<?php echo $icap_banner_image['alt']; ?>">
            </figure>
        </div>
        <div class="bg-gsap-blue flex-none w-1/2">
            <div class="max-w-lg mx-auto">
                <?php echo $icap_banner_content_header; ?>
                <div class="columns flex">
                    <?php foreach($icap_banner_content_columns as $item): $column_image = $item['column']['image']; $column_image_list = $item['column']['list'] ?>
                        <div class="column flex-none w-1/2">
                            <figure>
                                <img class="h-20" src="<?php echo $column_image['url']; ?>" alt="<?php echo $column_image['alt']; ?>">
                            </figure>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
