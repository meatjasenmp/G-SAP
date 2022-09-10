<?php
    $hatties = get_group_field('content_blocks', 'hatties_effect', 29);
    $hatties_background = $hatties['background'];
    $hatties_cta = $hatties['cta'];
    $hatties_content = $hatties['content'];
    $hatties_content_header = $hatties_content['header'];
    $hatties_content_content = $hatties_content['content'];
    $hatties_content_table = $hatties_content['table'];
?>

<section class="hatties_effect" id="hatties_effect_drawer">
    <figure class="background_dots"  style="background: url('<?php echo $hatties_background['url']; ?>');"></figure>

    <?php get_template_part('template-parts/global/pulsating-button', null, array('id' => 'hatties_effect_drawer')); ?>

    <div class="wrapper">
        <div class="inner_wrapper">
            <h4 class="opacity-0"><?php echo $hatties_cta; ?></h4>
            <div class="content">
                <article>
                    <h1 class="opacity-0"><?php echo $hatties_content_header; ?></h1>
                    <div class="hatties_effect_content opacity-0">
                        <?php echo $hatties_content_content; ?>
                    </div>
                </article>
                <div class="table_wrapper opacity-0">
                    <table>
                        <?php if($hatties_content_table['header']): ?>
                            <thead>
                                <tr>
                                    <?php foreach($hatties_content_table['header'] as $header): ?>
                                        <th><?php echo $header['c']; ?></th>
                                    <?php endforeach; ?>
                                </tr>
                            </thead>
                        <?php endif; ?>
                        <tbody>
                        <?php foreach($hatties_content_table['body'] as $body): ?>
                            <tr>
                                <?php foreach($body as $cell): ?>
                                    <td><?php echo $cell['c']; ?></td>
                                <?php endforeach; ?>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
