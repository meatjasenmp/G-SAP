<?php
    $site_footer_cta = get_group_field('site_footer', 'cta', 'option');
    $site_tagline = get_group_field('site_footer', 'tagline', 'option');
    $site_copyright = get_group_field('site_footer', 'copyright', 'option');
?>
            <footer>
                <div class="footer_wrapper">
                    <h1><?php echo $site_footer_cta['header']; ?></h1>
                    <?php echo $site_footer_cta['content']; ?>
                    <div class="gsap_logo_combined">
                        <div class="image">
                            <?php get_template_part('template-parts/global/gsap-logo'); ?>
                        </div>
                        <div class="life_circle">
                            <?php get_template_part('template-parts/global/life-circle'); ?>
                        </div>
                    </div>
                    <span class="site_tagline"><?php echo $site_tagline; ?></span>
                </div>
            </footer>
        </div>
        <div class="copyright">
            <div class="copyright_wrapper">
               &copy; <?php echo date("Y"); ?> <?php echo  strip_tags($site_copyright, '<a>'); ?>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>
