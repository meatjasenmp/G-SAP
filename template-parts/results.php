<?php
    $results = get_group_field('content_blocks', 'g-sap_life_results', 29);
    $results_content = $results['content'];
    $earned_results = $results['earned_results'];
    $earned_results_column = $earned_results['earned_results_column'];
    $earned_results_column_image = $earned_results_column['image'];
    $earned_results_column_title = $earned_results_column['title'];
    $earned_results_content_column = $earned_results['content_column'];
    $earned_results_list = $earned_results_content_column['list'];
    $earned_results_list_item = $earned_results_list['list_item'];
    $earned_results_content_column_content = $earned_results_content_column['content'];
?>

<section class="results py-20">
    <div class="life_results">
        <h3><?php echo $results_content['header']; ?></h3>
        <?php echo $results_content['content']; ?>
    </div>
    <section class="charts">
        <div>
            <canvas id="credit-sufficient-students"></canvas>
        </div>
        <div class="columns">
            <div>
                <canvas id="graduation-rate"></canvas>
            </div>
            <div>
                <canvas id="dropouts"></canvas>
            </div>
        </div>
    </section>
    <div class="earned_results">
        <div class="earned_results_container">
            <div class="wrapper">
                <div class="column_1">
                    <figure class="opacity-0">
                        <img src="<?php echo $earned_results_column_image['url']; ?>" alt="<?php echo $earned_results_column_image['alt']; ?>">
                    </figure>
                    <h1 class="opacity-0"><?php echo $earned_results_column_title; ?></h1>
                </div>
                <div class="column_2">
                    <div class="column_2_wrapper">
                        <?php $i = 0; foreach($earned_results_list as $list): ?>
                            <?php foreach($list as $item ): $checkbox = $item['checkbox']; $text = $item['text']; ?>
                                <?php echo ($i % 2 === 0) ? '<div>' : '';  $i++; ?>
                                <div class="column_2_item opacity-0">
                                    <img src="<?php echo $checkbox['url']; ?>" alt="<?php echo $checkbox['alt']; ?>">
                                    <span><?php echo $text; ?></span>
                                </div>
                                <?php echo ($i % 2 === 0) ? '</div>' : ''?>
                            <?php endforeach; ?>
                        <?php endforeach; ?>
                    </div>
                    <div class="column_2_text opacity-0">
                        <?php echo strip_tags($earned_results_content_column_content, '<strong><em><a>'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
