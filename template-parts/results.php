<?php
    $results = get_group_field('content_blocks', 'g-sap_life_results', 29);
    $results_content = $results['content'];
    $credit_sufficient_students = $results_content['credit_sufficient_students'];
    $graduation_rate = $results_content['graduation_rate'];
    $dropout_rate = $results_content['dropout_rate'];
    $earned_results = $results['earned_results'];
    $earned_results_bg = $earned_results['earned_results_bg'];
    $earned_results_column = $earned_results['earned_results_column'];
    $earned_results_column_image = $earned_results_column['image'];
    $earned_results_column_title = $earned_results_column['title'];
    $earned_results_content_column = $earned_results['content_column'];
    $earned_results_list = $earned_results_content_column['list'];
    $earned_results_list_item = $earned_results_list['list_item'];
    $earned_results_content_column_content = $earned_results_content_column['content'];
?>

<section class="results">
    <div class="life_results">
        <h3 class="opacity-0"><?php echo $results_content['header']; ?></h3>
       <article class="opacity-0">
           <?php echo $results_content['content']; ?>
       </article>
    </div>
    <section class="charts">
        <div>
            <div class="relative h-[40vh] w-full">
                <canvas id="credit-sufficient-students"></canvas>
            </div>
            <div class="chart_content">
                <div class="chart_content_columns">
                    <?php foreach ($credit_sufficient_students as $student): ?>
                        <div>
                            <h4><?php echo $student['header']; ?></h4>
                            <?php echo $student['content']; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="relative h-[40vh]">
                    <canvas id="graduation-rate"></canvas>
                </div>
                <div class="chart_content chart_content_sm">
                    <h4><?php echo $graduation_rate['header']; ?></h4>
                    <?php echo $graduation_rate['content']; ?>
                </div>
            </div>
            <div class="column">
                <div class="relative h-[40vh]">
                    <canvas id="dropouts"></canvas>
                </div>
                <div class="chart_content chart_content_sm">
                    <?php echo $dropout_rate; ?>
                </div>
            </div>
        </div>
    </section>
    <div class="earned_results">
        <figure class="background_dots"  style="background: url('<?php echo $earned_results_bg['url']; ?>');"></figure>
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
