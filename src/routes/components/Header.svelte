<script>
    // import '../styles.css';

    import MenuImage from '$lib/images/icons/Menu.svg';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import MasterLogo from '$lib/images/globe.svg'
</script>


<header class="header container" id="header">
    <div class="burger_menu_wrapper">
        <img class="burger_menu" id="burger_menu_image" src="{ MenuImage }" alt="#">
        <div>
            <div class="logo_inner">
                <img src={ MasterLogo } alt="" style="width: 45px; height: 45px; margin: .75rem">
                <span class="logo">MasterDispatch</span>
            </div>
            <div class="links container" id="header_links">
                <div style="display:flex;">
                    <a rel="external" href="{ PUBLIC_BASE_URL }/" class="shadow_btn">Home</a>
                    <a rel="external" href="{ PUBLIC_BASE_URL }/#features" class="shadow_btn">Features</a>
                    <a rel="external" href="{ PUBLIC_BASE_URL }/#product" class="shadow_btn">Product</a>
                    <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="shadow_btn">Pricing</a>
                </div>
                <div style="display: flex;">
                    <a rel="external" href="https://chrome.google.com/webstore/detail/dispatch-buddy/cecdeddepbioldoadbpgddhkgmfdcmmk" class="shadow_btn">View on web store</a>
                    <a rel="external" href="https://dispatchbuddy-mail-templater.vercel.app" class="shadow_btn">
                        My Account
                    </a>
                </div>
            </div>
        </div>
        <div class="burger_menu_links" id="burger_menu_links">
            <a rel="external" href="{ PUBLIC_BASE_URL }/" class="shadow_btn">Home</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#features" class="shadow_btn">Features</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#product" class="shadow_btn">Product</a>
            <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="shadow_btn">Pricing</a>
        </div>
    </div>


</header>

