<?php
    $results = get_group_field('content_blocks', 'g-sap_life_results', 29);
    $results_content = $results['content'];
?>

<section class="results py-20">
    <div class="life_results">
        <h3><?php echo $results_content['header']; ?></h3>
        <?php echo $results_content['content']; ?>
    </div>
    <canvas id="credit-sufficient-students"></canvas>
</section>
