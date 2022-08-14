<?php
    $site_footer_cta = get_group_field('site_footer', 'cta', 'option');
    $site_tagline = get_group_field('site_footer', 'tagline', 'option');
    $site_copyright = get_group_field('site_footer', 'copyright', 'option');
?>
            <footer>
                <div class="max-w-3xl mx-auto py-20 flex flex-col items-center text-center">
                    <h1 class="text-gsap-blue !text-4xl"><?php echo $site_footer_cta['header']; ?></h1>
                    <?php echo $site_footer_cta['content']; ?>
                    <div class="gsap_logo_combined flex w-72 my-16">
                        <div class="relative z-10">
                            <?php get_template_part('template-parts/global/gsap-logo'); ?>
                        </div>
                        <div class="relative -ml-[9rem]">
                            <?php get_template_part('template-parts/global/life-circle'); ?>
                        </div>
                    </div>
                    <span class="uppercase block font-magdelinBold text-gsap-gray"><?php echo $site_tagline; ?></span>
                </div>
            </footer>
        </div>
        <div class="copyright bg-black text-white w-screen left-2/4 relative right-2/4 ml-[-50vw] mr-[-50vw] py-2">
            <div class="max-w-md mx-auto">
               &copy; <?php echo date("Y"); ?> <?php echo  strip_tags($site_copyright, '<a>'); ?>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>
