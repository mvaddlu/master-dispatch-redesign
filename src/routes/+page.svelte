<script>
    import CircleArrowDownLeftImage from '$lib/images/icons/circle-arrow-down-left-sharp.svg';
    import CreditCardImage from '$lib/images/icons/credit-card.svg';
    import MapsSquare from '$lib/images/icons/maps-square-02.svg';
    import maps from '$lib/images/preview/maps.png'
    import CheckMarkCircleImage from '$lib/images/icons/checkmark-circle-02.svg';
    import CursorMagicSelectionImage from '$lib/images/icons/cursor-magic-selection-02.svg';
    import BubbleChatQuestionImage from '$lib/images/icons/bubble-chat-question.svg';
    import PlaySquareImage from '$lib/images/icons/play-square.svg';
    import MaskGroupImage from '$lib/images/icons/Mask group.svg';
    import CopyImage from '$lib/images/icons/copy-01.svg';
    import UnhappyImage from '$lib/images/icons/unhappy.svg';
    import ChromeImage from '$lib/images/media/chrome.svg';
    import PreviewImage from '$lib/images/preview/Image.png';
    import Preview8Image from '$lib/images/preview/image 8.png';
    import Preview8_1Image from '$lib/images/preview/image 8(1).png';
    import Preview9Image from '$lib/images/preview/image 9.png';
    import Preview10Image from '$lib/images/preview/image 10.png';
    import gif1 from '$lib/images/preview/gif1.gif'
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte';
    import { PUBLIC_BASE_URL } from '$env/static/public';
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
                The Fastest Way to Book <span class="primary-color">More Loads</span>
            </h1>

            <p>
                Email to brokers, calculate RPM, open Google Maps, and report Unreliable brokers with Dispatch Buddy
            </p>

            <div class="action_buttons">
                <a rel="external" href="{ PUBLIC_BASE_URL }/#pricing" class="action_button">
                    <img src="{ CircleArrowDownLeftImage }" alt="#">
                    Get Started
                </a>

                <a rel="external" href="https://chrome.google.com/webstore/detail/dispatch-buddy/cecdeddepbioldoadbpgddhkgmfdcmmk" class="action_button">
                    <img src="{ ChromeImage }" alt="#">
                    View on web store
                </a>
            </div>
        </div>

        <img class="preview_image" src="{ gif1 }" alt="#">
    </div>

    <h3>
        Dispatch Buddy works with the largest load boards
    </h3>

    <div class="company_logos">
        <img src="{ Preview8Image }" alt="#">
        <img src="{ Preview9Image }" alt="#">
        <img src="{ Preview8_1Image }" alt="#">
    </div>

<!--    <div class="shadow"></div>-->
</section>

<section class="features container" id="features">
    <div class="feature">
        <div class="preview" id="feature1">
            <img src="{ PreviewImage }" alt="#">

<!--            <div class="shadow min right"></div>-->
        </div>

        <div class="info">
            <span class="mark primary-color">
                <img src="{ CopyImage }" alt="#">
                No more copy-pasting
            </span>

            <h1 class="title">
                Email brokers with a click
            </h1>

            <p>
                Create custom templates with dynamic variables and send personalized emails to brokers at scale
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
                Calculate RPM automatically
            </h1>

            <p>
                Break down the rate per mile for any load and easily filter out the highest paying ones directly on the load board
            </p>
        </div>

        <div class="preview">
            <img src="{ Preview10Image }" alt="#">

<!--            <div class="shadow min right"></div>-->
        </div>
    </div>
    <div class="feature">
        <div class="preview" id="feature2">
            <img src="{ maps }" alt="#" height="300">

            <div class="shadow min left"></div>
        </div>

        <div class="info">
            <span class="mark primary-color">
                <img src="{ MapsSquare }" alt="#">
                Your favorite maps
            </span>

            <h1 class="title">
                Google Maps with load details
            </h1>

            <p>
                Instantly view the load route on Google Maps and access all the necessary load details
            </p>

            <div class="additional_marks">
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Truck location
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Pickup origin
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Delivery destination
                </div>
                <div class="mark">
                    <img src="{ CheckMarkCircleImage }" alt="#">
                    Tool information
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
        Book loads like a pro with <span class="primary-color">one click!</span>
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
                You can book more loads for your trucks in the first month of use
            </p>
        </div>
        <div class="pros">
            <span class="primary-color">
                2
            </span>

            <h3>
                500 users
            </h3>

            <p>
                Signed up and been using our extension every day in just a few months
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

        <a href="#product" class="action_button">
            <img src="{ PlaySquareImage }" alt="#">
            Watch a Tutorial
        </a>
    </div>
</section>

<section class="pricing container" id="pricing">
    <h1>
        Pricing plan
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
            <img class="plan__image" src="{ MaskGroupImage }" alt="#">

            <span class="plan__name">
                Starter
            </span>

            <span class="plan__billing">
                $<span id="starter_billing">96</span><span id="starter_billing_period" class="plan__billing__period">/yearly</span>
            </span>

            <span id="starter_yearly_sum" class="plan__yearly_sum">
                or $10 mo
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
                        Income/RPM Calculator
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Gmail, Outlook, SMTP
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Email Signature
                    </li>
                </ul>
            </div>

            <a id="starter_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/96">
                <div class="plan__get_started_button">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#">
                    Get Started
                </div>
            </a>
        </div>
        <div class="plan pro">
            <img class="plan__image" src="{ MaskGroupImage }" alt="#">

            <span class="plan__name">
                Dispatch PRO
            </span>

            <span class="plan__billing">
                $<span id="pro_billing">240</span><span id="pro_billing_period" class="plan__billing__period">/yearly</span>
            </span>

            <span id="pro_yearly_sum" class="plan__yearly_sum">
                or $25 mo
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
                        Post Truck Filters
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Income/RPM Calculator
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Google Maps
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Gmail, Outlook, SMTP
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Unlimited Email Templates
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Email Signature
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        DAT, Truckstop, DAT One
                    </li>
                </ul>
            </div>

            <a id="pro_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/240">
                <div class="plan__get_started_button">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#">
                    Get Started
                </div>
            </a>
        </div>
        <div class="plan free">
            <img class="plan__image" src="{ MaskGroupImage }" alt="#">

            <span class="plan__name">
                Free Plan
            </span>

            <span class="plan__billing">
                Free
            </span>

            <span class="plan__yearly_sum">
                &nbsp;
            </span>

            <hr class="plan__dividing_line">

            <div class="plan__includes_list__wrapper">
                Includes:
                <ul class="plan__includes_list">
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        100 emails
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Post Truck Filters
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Income/RPM Calculator
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Google Maps
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Gmail, Outlook, SMTP
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Unlimited Email Templates
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        Email Signature
                    </li>
                    <li class="plan__includes_list__item">
                        <img src="{ CheckMarkCircleImage }" alt="#">
                        DAT, Truckstop, DAT One
                    </li>
                </ul>
            </div>

            <a id="free_paypal_link" rel="external" class="plan__get_started_button_wrapper" href="{ PUBLIC_BASE_URL }/paypal/0">
                <div class="plan__get_started_button">
                    <img class="plan__get_started_button__image" src="{ CircleArrowDownLeftImage }" alt="#">
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
        How to do I install Dispatch Buddy

        <div class="answer">
            Installing Dispatch Buddy is very simple: subscribe to the service, install the extension, login in the extensio, use it. That's it!
        </div>
    </div>

    <div class="question">
        Is it safe to use my Gmail account with Dispatch Buddy

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


