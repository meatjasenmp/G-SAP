<?php
    $results = get_group_field('content_blocks', 'g-sap_life_results', 29);
    $results_content = $results['content'];
    $results_earned_results = $results_content['earned_results'];
?>

<section class="results py-20">
    <div>
        <h1 class="text-gsap-blue"><?php echo $results_content['header']; ?></h1>
        <?php echo $results_content['content']; ?>
    </div>
    <div class="relative h-[80vh] w-[80vw]">
        <canvas id="credit-sufficient-students"></canvas>
    </div>
</section>
