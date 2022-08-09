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

    <div class="pulsating__button__container">
        <div class="bg border-gsap-orange border absolute w-[40px] h-[40px] rounded-full left-0 right-0 top-[-1.25rem] mx-auto"></div>
        <div class="bg border-gsap-orange border absolute w-[40px] h-[40px] rounded-full left-0 right-0 top-[-1.25rem] mx-auto"></div>
        <button class="pulsating__button flex justify-center items-center absolute z-50 bg-gsap-orange outline-0 w-[40px] h-[40px] rounded-full left-0 right-0 mx-auto top-[-1.25rem]"></button>
    </div>

    <div class="max-w-[1440px] mx-auto">
        <div class="relative z-10">
            <h3 class="text-gsap-blue uppercase text-center font-magdelin"><?php echo $hatties_cta; ?></h3>
            <div class="flex text-black max-w-5xl mx-auto">
                <div class="flex-none max-w-sm mr-20">
                    <h1 class="uppercase"><?php echo $hatties_content_header; ?></h1>
                    <?php echo $hatties_content_content; ?>
                </div>
                <div>
                    <table class="table-auto">
                        <?php if($hatties_content_table['header']): ?>
                            <thead>
                            <tr>
                                <?php foreach($hatties_content_table['header'] as $header): ?>
                                    <th class="px-4 py-2"><?php echo $header['c']; ?></th>
                                <?php endforeach; ?>
                            </tr>
                            </thead>
                        <?php endif; ?>
                        <tbody>
                        <?php foreach($hatties_content_table['body'] as $body): ?>
                            <tr>
                                <?php foreach($body as $cell): ?>
                                    <td class="px-4 py-2"><?php echo $cell['c']; ?></td>
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
