<script>
    // import '../styles.css';

    import MasterLogo from '$lib/images/globe.svg'

    import ArrowImage from '$lib/images/icons/Arrow.svg';
    import FacebookImage from '$lib/images/media/facebook-02.svg';
    import InstagramImage from '$lib/images/media/instagram.svg';
    import LinkedinImage from '$lib/images/media/linkedin-01.svg';
    import YoutubeImage from '$lib/images/media/youtube.svg';
    import { PUBLIC_BASE_URL } from '$env/static/public';
</script>

<footer class="container">
    <div class="logo_inner">
        <img src={ MasterLogo } alt="" style=" margin-right: .75rem; margin-left: 1.5rem;">
        <span class="logo">MasterDispatch</span>
    </div>
    <div class="menu">
        <div class="menu_links main_links">
            <a rel="external" href="{ PUBLIC_BASE_URL }/#home" class="footer_btn">Home</a>
            <a href="#features" class="footer_btn">Features</a>
            <a href="#product" class="footer_btn">Product</a>
            <a href="#pricing" class="footer_btn">Pricing</a>
        </div>

        <div class="menu_links additional_links">
            <a href="{ PUBLIC_BASE_URL }" class="footer_btn">Blog</a>
            <a href="{ PUBLIC_BASE_URL }/policy" class="footer_btn">Privacy policy</a>
            <a href="{ PUBLIC_BASE_URL }/term" class="footer_btn">Terms of Condition</a>
        </div>

            <div class="menu_links contact_links">
                <p class="menu_item">support@masterdispatch.com</p>
                <div class="socials menu_item">
                    <a href="#/">
                        <img src="{ LinkedinImage }" alt="#">
                    </a>
                    <a href="#/">
                        <img src="{ InstagramImage }" alt="#">
                    </a>
                    <a href="#/">
                        <img src="{ FacebookImage }" alt="#">
                    </a>
                    <a href="#/">
                        <img src="{ YoutubeImage }" alt="#">
                    </a>
                </div>
        </div>

    </div>

    <span class="footer_rights">
        Copyright © 2023. MasterDispatch
    </span>

    
    <a href="#header" class="arrow_up">
        <img src="{ ArrowImage }" alt="#">
    </a>
</footer>