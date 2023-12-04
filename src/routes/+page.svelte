<script>
    import CircleArrowDownLeftImage from '$lib/images/icons/circle-arrow-down-left-sharp.svg';
    import CreditCardImage from '$lib/images/icons/credit-card.svg';
    import MapsSquare from '$lib/images/icons/maps-square-02.svg';
    import maps from '$lib/images/preview/maps.png'
    import CheckMarkCircleImage from '$lib/images/icons/checkmark-circle-02.svg';
    import CursorMagicSelectionImage from '$lib/images/icons/cursor-magic-selection-02.svg';
    import BubbleChatQuestionImage from '$lib/images/icons/bubble-chat-question.svg';
    import PlaySquareImage from '$lib/images/icons/play-square.svg';
    import CopyImage from '$lib/images/icons/copy-01.svg';
    import UnhappyImage from '$lib/images/icons/unhappy.svg';
    import PreviewImage from '$lib/images/preview/image_2023-12-01_23-37-05.png';
    import Preview8Image from '$lib/images/preview/image 8.png';
    import Preview2Image from '$lib/images/preview/image2.png'
    import Preview8_1Image from '$lib/images/preview/image 8(1).png';
    import Preview9Image from '$lib/images/preview/image 9.png';
    import gif1 from '$lib/images/preview/gif1.gif'
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import { PUBLIC_BASE_URL } from '$env/static/public';
    import MasterLogo from '$lib/images/globe.svg'

</script>

<Header />

<section id="home" class="container">
    <div class="splitted_wrapper">
        <div class="main_info">
            <span class="mark primary-color">
                <img src="{ CreditCardImage }" alt="#">
                No credit card required
            </span>

            <h1 class="title">
                The fastest way to obtain more cargo reservations.
            </h1>

            <p>
                Send an email to brokers, calculate Revenue Per Mile (RPM), open Google Maps, and report unreliable brokers using Master Dispatch.
            </p>

            <div class="action_buttons">
                <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="shadow_btn" style="margin: 0">
                    <img src="{ CircleArrowDownLeftImage }" alt="#" style="margin-right: 10px">
                    Start Free
                </a>
            </div>
        </div>

        <img class="preview_image" src="{ gif1 }" alt="#" height="350px">
    </div>

    <h3>
        Master Dispatch works with the largest load boards
    </h3>

    <div class="company_logos">
        <img src="{ Preview8Image }" alt="#">
        <img src="{ Preview9Image }" alt="#">
        <img src="{ Preview8_1Image }" alt="#">
    </div>

    <div class="shadow"></div>
</section>

<section class="features container" id="features">
    <div class="feature">
        <div class="preview" id="feature1">
            <img src="{ PreviewImage }" alt="#">

            <div class="shadow min right"></div>
        </div>

        <div class="info">
            <span class="mark primary-color">
                <img src="{ CopyImage }" alt="#">
                No more copy-pasting
            </span>

            <h1 class="title">
                Send emails to brokers with a single click.
            </h1>

            <p>
                Generate customized templates with dynamic variables and distribute individualized emails to brokers on a large scale.
            </p>

            <div class="additional_marks">
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Multiple Templates
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Email Signatures
                </div>
            </div>
        </div>
    </div>
    <div class="feature">
        <div class="info">
            <span class="mark primary-color">
                <img src="{ UnhappyImage }" alt="#">
                No more headache
            </span>

            <h1 class="title">
                Automatically compute Revenue Per Mile (RPM).
            </h1>

            <p>
                Analyze and break down the rate per mile for any load, and effortlessly filter out the most lucrative ones directly on the load board.
            </p>
        </div>

        <div class="preview">
            <img src="{ Preview2Image }" alt="#" height="300">

            <div class="shadow min right"></div>
        </div>
    </div>
    <div class="feature">
        <div class="preview" id="feature2">
            <img src="{ maps }" alt="#" height="320">

            <div class="shadow min left"></div>
        </div>

        <div class="info">
            <span class="mark primary-color">
                <img src="{ MapsSquare }" alt="#">
                Your favorite maps
            </span>

            <h1 class="title">
                Integrate load details with Google Maps.
            </h1>

            <p>
                Instantly view the shipping route on Google Maps and access all vital information about the shipment, such as:
            </p>

            <div class="additional_marks">
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    The current location of the truck.
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    The final delivery location.
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Information regarding the tools or equipment utilized.
                </div>
            </div>
        </div>
    </div>
</section>

<section class="product container" id="product">
    <div class="mark primary-color">
        <img src="{ CursorMagicSelectionImage }" alt="#">
        No more manual grind!
    </div>

    <h1>
        Effortlessly reserve loads with a single click
    </h1>

    <div class="pros_list">
        <div class="pros">
            <span class="primary-color">
                1
            </span>

            <h3 class="primary-color">
                10X Faster
            </h3>

            <p>
                You can secure additional load bookings for your trucks during the initial month of usage.
            </p>
        </div>
        <div class="pros">
            <span class="primary-color">
                2
            </span>

            <h3>
                5000 users
            </h3>

            <p>
                Registered and have been using our extension daily in just a few months.
            </p>
        </div>
        <div class="pros">
            <span class="primary-color">
                3
            </span>

            <h3>
                3 minutes
            </h3>

            <p>
                To start things off and see how it benefits your tracking business
            </p>
        </div>
    </div>

    <div class="additional_block">
        <div class="main">
            <img src="{ BubbleChatQuestionImage }" alt="#">
            <h2>
                Wanna know how it works?
            </h2>
        </div>

        <a href="#product" class="shadow_btn">
            <img src="{ PlaySquareImage }" alt="#" style="margin-right: 10px">
            Watch a Tutorial
        </a>
    </div>
</section>

<section class="pricing container" id="pricing">
    <h1>
        Cost-effective pricing.
    </h1>

    <p>
        Choose from our flexible pricing options below
    </p>

    <div class="state_button">
        <div class="wrapper">
            <div id="monthly_billing" class="billing_option">
                Monthly Billing
            </div>

            <div id="yearly_billing" class="billing_option active">
                Annual billing
            </div>
        </div>
    </div>

    <div class="plans">
        <div class="plan starter">
            <img class="plan__image" src="{ MasterLogo }" alt="#">

            <span class="plan__name">
                Basic
            </span>

            <span class="plan__billing">
                $<span id="starter_billing">336</span><span id="starter_billing_period" class="plan__billing__period">/yearly</span>
            </span>

            <span id="starter_yearly_sum" class="plan__yearly_sum">
                or $35 /per month
            </span>

            <hr class="plan__dividing_line">

            <div class="plan__includes_list__wrapper">
                Includes:
                <ul class="plan__includes_list">
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Unlimited emails
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        1 User Account
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        RPM calculator
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Gmail, Outlook, SMTP
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        1 Email Template
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Customer Support
                    </li>
                </ul>
            </div>

            <a id="starter_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/336">
                <div class="shadow_btn" style="justify-content: center">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#" style="padding-right: 5px;">
                    Get Started
                </div>
            </a>
        </div>
        <div class="plan pro">
            <img class="plan__image" src="{ MasterLogo }" alt="#">

            <span class="plan__name">
                Pro
            </span>

            <span class="plan__billing">
                $<span id="pro_billing">480</span><span id="pro_billing_period" class="plan__billing__period">/yearly</span>
            </span>

            <span id="pro_yearly_sum" class="plan__yearly_sum">
                or $50 /per month
            </span>

            <hr class="plan__dividing_line">

            <div class="plan__includes_list__wrapper">
                Includes:
                <ul class="plan__includes_list">
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Everything in Starter, plus:
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Unlimited user accounts
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Unlimited Emails
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Load Search Filters
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Google Maps
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Multiple email address
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        DAT, Truckstop, DAT One, Truckersedge
                    </li>
                </ul>
            </div>

            <a id="pro_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/480">
                <div class="shadow_btn" style="justify-content: center">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#" style="padding-right: 5px;">
                    Get Started
                </div>
            </a>
        </div>
        <div class="plan free">
            <img class="plan__image" src="{ MasterLogo }" alt="#">

            <span class="plan__name">
                Enterprice
            </span>
            <span class="plan__billing" id="plan__billing">
                <div class="display_none" id="monthlyBlock">
                    <span id="monthlyDollar">$</span><span id="total-price-monthly"></span><span id="total_billing_period_monthly" class="plan__billing__period"></span>
                </div>
                <div>
                    <span id="yearlyDollar">$</span><span id="total-price-yearly"></span><span id="total_billing_period_yearly" class="plan__billing__period">/yearly</span>
                </div>
            </span>
            <span>
                <div style="text-align: center;">
                    <input class="square_range" type="range" id="square-range" min="4" max="21" value="4" step="1" />
                    <div>User Account: <input class="square_input" disabled type="number" min="4" max="21" value="4" id="square-input" /></div>
                </div>
            </span>
            <hr class="plan__dividing_line">

            <div class="plan__includes_list__wrapper">
                Includes:
                <ul class="plan__includes_list">
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Everything in Pro, plus:
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        From 4 to Unlimited Users
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Multiple email addresses
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Google Maps with Tolls & Load Info
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Multiple Sending Addresses
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Email Signature
                    </li>
                </ul>
            </div>

            <a id="enterprice_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/120">
                <div class="shadow_btn" style="justify-content: center">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#" style="padding-right: 5px;">
                    Get Started
                </div>
            </a>
        </div>
    </div>
</section>

<section class="questions container" id="questions">
    <h1>
        Frequently Asked <span class="primary-color">Questions</span>
    </h1>

    <p>
        Can’t find the answer here? 
        <a rel="external" href="mailto:info@dispatchbuddy.com?subject=Subject%20Text&body=Body%20Text" class="primary-color">
            Contact support
        </a>
    </p>

    <div class="question">
        How to do I install Master Dispatch?

        <div class="answer">
            Installing Master Dispatch is very simple: subscribe to the service, install the extension, login in the extensio, use it. That's it!
        </div>
    </div>

    <div class="question">
        Is it safe to use my Gmail account with Master Dispatch?

        <div class="answer">
            Yes, it's completely safe. All user data stores locally on user machine, our program is just a translator between you and google api services.
        </div>
    </div>

    <div class="question">
        How do i use filters Google maps and calculator?

        <div class="answer">
            Very simple, you just need to check it as a checkbox in our extension in order for it to be active on all the pages, where extension is loading.
        </div>
    </div>

    <div class="question">
        What happens if I run out of free emails?

        <div class="answer">
            If you are using free 100 emails, then there will be no more posibillity to send emails with our extension, unless you become a subscriber of ours.
        </div>
    </div>
</section>

<Footer />


