<?php
    $hatties = get_group_field('content_blocks', 'hatties_effect', 29);
    $hatties_background = $hatties['background'];
    $hatties_cta = $hatties['cta'];
    $hatties_content = $hatties['content'];
    $hatties_content_header = $hatties_content['header'];
    $hatties_content_content = $hatties_content['content'];
    $hatties_content_table = $hatties_content['table'];
?>

<section class="hatties_effect relative mt-20 w-screen left-2/4 right-2/4 ml-[-50vw] mr-[-50vw]">
    <figure class="absolute top-0 left-0 h-full w-full bg-cover"  style="background: url('<?php echo $hatties_background['url']; ?>')"></figure>

    <?php get_template_part('template-parts/global/pulsating-button'); ?>

    <div class="max-w-[1440px] mx-auto pt-12 pb-20">
        <div class="relative z-10">
            <h3 class="uppercase text-center font-magdelin tracking-widest"><?php echo $hatties_cta; ?></h3>
            <div class="flex p-6 flex-col text-black lg:mt-16 max-w-5xl mx-auto">
                <div class="flex-none md:max-w-lg md:mb-10 md:mx-auto lg:mr-20 text-center">
                    <h1 class="uppercase"><?php echo $hatties_content_header; ?></h1>
                    <?php echo $hatties_content_content; ?>
                </div>
                <div>
                    <table class="table-auto bg-white text-sm w-full">
                        <?php if($hatties_content_table['header']): ?>
                            <thead>
                                <tr class="bg-gsap-blue text-xs text-white text-left uppercase">
                                    <?php foreach($hatties_content_table['header'] as $header): ?>
                                        <th class="px-4 py-2 border-l border-b border-r dark:border-slate-100"><?php echo $header['c']; ?></th>
                                    <?php endforeach; ?>
                                </tr>
                            </thead>
                        <?php endif; ?>
                        <tbody>
                        <?php foreach($hatties_content_table['body'] as $body): ?>
                            <tr class="first:bg-gsap-green first:font-magdelinBold">
                                <?php foreach($body as $cell): ?>
                                    <td class="px-4 py-2 border-l border-b border-r dark:border-slate-100"><?php echo $cell['c']; ?></td>
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
