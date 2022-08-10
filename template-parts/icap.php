<?php
    $icap = get_group_field('content_blocks', 'icap', 29);
    $icap_banner = $icap['banner'];
    $icap_banner_image = $icap_banner['image'];
    $icap_banner_content = $icap_banner['content'];
    $icap_banner_content_header = $icap_banner_content['header'];
    $icap_banner_content_columns = $icap_banner_content['columns'];
    $icap_banner_content_footer = $icap_banner_content['footer'];
    $icap_banner_content_footer_header = $icap_banner_content_footer['header'];
    $icap_banner_content_footer_header_image = $icap_banner_content_footer_header['image'];
    $icap_banner_content_footer_header_text = $icap_banner_content_footer_header['text'];
    $icap_banner_content_footer_header_underline = $icap_banner_content_footer_header['underline'];
    $icap_banner_content_footer_header_content = $icap_banner_content_footer['content'];
    $icap_learn_more = $icap['learn_more'];
?>

<section class="icap mt-20 relative w-screen left-2/4 right-2/4 ml-[-50vw] mr-[-50vw] text-white">
    <div class="flex">
        <div class="flex-none w-1/2">
            <figure>
                <img src="<?php echo $icap_banner_image['url']; ?>" alt="<?php echo $icap_banner_image['alt']; ?>">
            </figure>
        </div>
        <div class="bg-gsap-blue flex flex-col justify-center w-1/2">
            <div class="max-w-2xl mx-auto">
                <div class="text-center font-magdelinBold mb-6">
                    <?php echo $icap_banner_content_header; ?>
                </div>
                <div class="columns flex">
                    <?php foreach($icap_banner_content_columns as $item): $column_image = $item['column']['image']; $column_image_list = $item['column']['list']; $column_arrow = $item['column']['arrow'] ?>
                        <div class="column flex-none px-4 w-1/2">
                            <figure class="mb-6">
                                <img class="h-32 mx-auto" src="<?php echo $column_image['url']; ?>" alt="<?php echo $column_image['alt']; ?>" />
                            </figure>
                            <div class="text-center">
                                <?php foreach($column_image_list as $list): $list_item = $list['list_item'] ?>
                                    <div class="border-t border-white last:border-b-0 py-4 last:pb-0">
                                        <?php echo $list_item; ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <figure class="mt-3">
                                <img class="w-16 mx-auto" src="<?php echo $column_arrow['url']; ?>" alt="<?php echo $column_arrow['alt']; ?>" />
                            </figure>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="mt-6">
                    <div class="mb-8">
                        <div class="w-60 mx-auto">
                            <div class="flex items-center">
                                <figure class="mr-3">
                                    <img class="w-8" src="<?php echo $icap_banner_content_footer_header_image['url']; ?>" alt="<?php echo $icap_banner_content_footer_header_image['alt']; ?>" />
                                </figure>
                                <h4 class="uppercase tracking-[.2rem] mb-0 text-[1.50rem] flex-grow"><?php echo $icap_banner_content_footer_header_text; ?></h4>
                            </div>
                            <figure class="mt-2">
                                <img class="w-full" src="<?php echo $icap_banner_content_footer_header_underline['url'];?>" alt="<?php echo $icap_banner_content_footer_header_underline['alt'];?>" />
                            </figure>
                        </div>
                    </div>
                    <div class="text-center max-w-lg mx-auto">
                        <?php echo $icap_banner_content_footer_header_content; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
