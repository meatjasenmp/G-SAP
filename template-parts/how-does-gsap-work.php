<?php
    $how = get_group_field('content_blocks', 'how_does_g-sap_work', 29);
    $content = $how['content'];
    $content_header = $content['header'];
    $arrow = $content['arrow'];
    $content_content = $content['content'];
    $columns = $content['columns'];
    $hero_image = $content['hero_image'];
    $desktop_image = $hero_image['desktop_image'];
    $earned_results = $content['earned_results'];
    $earned_results_column = $earned_results['earned_results_column'];
    $earned_results_column_image = $earned_results_column['image'];
    $earned_results_column_title = $earned_results_column['title'];
    $earned_results_content_column = $earned_results['content_column'];
    $earned_results_list = $earned_results_content_column['list'];
    $earned_results_list_item = $earned_results_list['list_item'];
    $earned_results_content_column_content = $earned_results_content_column['content'];
    $student_investment_of_time = $content['student_investment_of_time'];
    $student_investment_of_time_header = $student_investment_of_time['header'];
    $student_investment_of_time_header_image = $student_investment_of_time_header['image'];
    $student_invest_of_time_header_text = $student_investment_of_time_header['text'];
    $student_investment_of_time_content = $student_investment_of_time['content'];
?>

<section class="how">
    <h1 class="text-gsap-blue"><?php echo $content_header; ?></h1>
    <figure class="w-8">
        <img src="<?php echo $arrow['url']; ?>" alt="<?php echo $arrow['alt']; ?>">
    </figure>
    <div class="columns flex justify-between mt-8">
        <div class="column flex-none w-72">
            <?php echo $content_content; ?>
        </div>
        <div class="column flex">
            <?php foreach($columns as $column):  ?>
                <?php foreach($column as $item): $image = $item['image']; $content = $item['content'] ?>
                    <div class="column flex-none w-72 mr-8 last:mr-0">
                        <figure>
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
                        </figure>
                        <?php echo $content; ?>
                    </div>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="hero_image">
        <img src="<?php echo $desktop_image['url']; ?>" alt="<?php echo $desktop_image['alt']; ?>">
    </div>
    <div class="earned_results flex">
        <div class="bg-gsap-blue text-white">
            <div class="flex">
                <div>
                    <figure>
                        <img src="<?php echo $earned_results_column_image['url']; ?>" alt="<?php echo $earned_results_column_image['alt']; ?>">
                    </figure>
                    <h1><?php echo $earned_results_column_title; ?></h1>
                </div>
                <div>
                    <div class="flex">
                        <?php $i = 0; foreach($earned_results_list as $list): ?>
                            <?php foreach($list as $item ): $checkbox = $item['checkbox']; $text = $item['text']; ?>
                                <?php echo ($i % 2 === 0) ? '<div>' : '';  $i++; ?>
                                    <div class="flex items-center mb-3 last:mb-0">
                                        <img src="<?php echo $checkbox['url']; ?>" alt="<?php echo $checkbox['alt']; ?>">
                                        <span><?php echo $text; ?></span>
                                    </div>
                                <?php echo ($i % 2 === 0) ? '</div>' : ''?>
                            <?php endforeach; ?>
                        <?php endforeach; ?>
                    </div>
                    <div>
                        <?php echo $earned_results_content_column_content; ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-gsap-blue">
            <header class="flex items-center">
                <img class="mr-1" src="<?php echo $student_investment_of_time_header_image['url']; ?>" alt="<?php echo $student_investment_of_time_header_image['alt']; ?>">
                <span class="uppercase text-xs"><?php echo $student_invest_of_time_header_text; ?></span>
            </header>
            <span class="text-sm">
                <?php echo strip_tags($student_investment_of_time_content, '<strong><em>'); ?>
            </span>
        </div>
    </div>
</section>