<script>
    // import '../styles.css';

    import LogoImage from '$lib/images/Logo.svg';
    import MenuImage from '$lib/images/icons/Menu.svg';
    import { PUBLIC_BASE_URL } from '$env/static/public';
</script>


<header class="header container" id="header">
    <div class="burger_menu_wrapper">
        <img class="burger_menu" id="burger_menu_image" src="{ MenuImage }" alt="#">
        <div>
            <img src="{ LogoImage }" alt="#">
            <div class="links" id="header_links">
                <a rel="external" href="{ PUBLIC_BASE_URL }/" class="header_btn">Home</a>
                <a rel="external" href="{ PUBLIC_BASE_URL }/#features" class="header_btn">Features</a>
                <a rel="external" href="{ PUBLIC_BASE_URL }/#product" class="header_btn">Product</a>
                <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="header_btn">Pricing</a>
            </div>
        </div>
        <div class="burger_menu_links" id="burger_menu_links">
            <a rel="external" href="{ PUBLIC_BASE_URL }/" class="header_btn">Home</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#features" class="header_btn">Features</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#product" class="header_btn">Product</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="header_btn">Pricing</a>
        </div>
    </div>


    <div class="additional_links" id="header_additional_links">
        <a rel="external" href="https://chrome.google.com/webstore/detail/dispatch-buddy/cecdeddepbioldoadbpgddhkgmfdcmmk" class="header_btn">View on web store</a>
        <a rel="external" href="https://dispatchbuddy-mail-templater.vercel.app" class="header_btn">
            My Account
        </a>
    </div>
</header>

