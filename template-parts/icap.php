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
    $icap_learn_more_sub_header = $icap_learn_more['sub_header'];
    $icap_learn_more_columns = $icap_learn_more['columns'];
    $icap_learn_more_background_image = $icap_learn_more['background_image'];
?>
<section class="icap">
    <div class="wrapper">
        <div class="image_container">
            <figure>
                <img src="<?php echo $icap_banner_image['url']; ?>" alt="<?php echo $icap_banner_image['alt']; ?>">
            </figure>
        </div>
        <div class="icap_columns">
            <div class="icap_columns_wrapper">
                <div class="icap_banner_content_header">
                    <?php echo $icap_banner_content_header; ?>
                </div>
                <div class="columns">
                    <?php foreach($icap_banner_content_columns as $item): $column_image = $item['column']['image']; $column_image_list = $item['column']['list']; $column_arrow = $item['column']['arrow'] ?>
                        <div class="column">
                            <figure class="column_image">
                                <img src="<?php echo $column_image['url']; ?>" alt="<?php echo $column_image['alt']; ?>" />
                            </figure>
                            <div class="column_text">
                                <?php foreach($column_image_list as $list): $list_item = $list['list_item'] ?>
                                    <div class="list_item">
                                        <?php echo $list_item; ?>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <figure class="arrow">
                                <img class="w-16 mx-auto" src="<?php echo $column_arrow['url']; ?>" alt="<?php echo $column_arrow['alt']; ?>" />
                            </figure>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="graduation">
                    <div class="graduation_wrapper">
                        <div class="graduation_graphic">
                            <div class="graduation_graphic_text">
                                <figure>
                                    <img src="<?php echo $icap_banner_content_footer_header_image['url']; ?>" alt="<?php echo $icap_banner_content_footer_header_image['alt']; ?>" />
                                </figure>
                                <h4><?php echo $icap_banner_content_footer_header_text; ?></h4>
                            </div>
                            <figure class="graduation_graphic_underline">
                                <img src="<?php echo $icap_banner_content_footer_header_underline['url'];?>" alt="<?php echo $icap_banner_content_footer_header_underline['alt'];?>" />
                            </figure>
                        </div>
                    </div>
                    <div class="icap_banner_content_footer_header_content">
                        <?php echo $icap_banner_content_footer_header_content; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="learn_more_columns">
        <?php get_template_part('template-parts/global/pulsating-button'); ?>
        <figure class="background_dots" style="background: url('<?php echo $icap_learn_more_background_image['url']; ?>')"></figure>
        <div class="learn_more_columns_wrapper">
            <h3><?php echo $icap_learn_more_sub_header; ?></h3>
            <div class="columns">
                <?php foreach($icap_learn_more_columns as $column): $column_sub_header = $column['column']['sub_header']; $column_header = $column['column']['header']; $column_content = $column['column']['content']; ?>
                    <div class="column">
                        <span><?php echo $column_sub_header; ?></span>
                        <h4><?php echo $column_header; ?></h4>
                        <?php echo $column_content; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
