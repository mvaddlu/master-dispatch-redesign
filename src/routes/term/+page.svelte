<script>
    import "$lib/css/app.css";
    import logo from '$lib/images/Logo.svg'
    import MenuBurger from "svelte-burger-menu";
    import ContactForm from "../contact/ContactForm.svelte";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header />
<div class='bg-gray-50 overflow-x-hidden w-screen min-h-screen flex flex-col justify-between items-center'>
    <section id="" class="sm:max-w-screen-sm md:max-w-[920px] lg:max-w-[1086px] xl:max-w-[1152px] 3/2xl:max-w-[1280px] 2xl:max-w-screen-2xl p-[14.5px] lg:px-8 mx-auto flex w-full flex-col mt-4 items-center justify-center text-center ">
        <h2 class="w-full md:max-w-2xl mt-3 text-3xl font-bold text-gray-800  lg:text-4xl ">Terms of Condition</h2>
        <div class="w-full md:max-w-2xl py-4 text-lg lg:text-xl xl:text-xl text-gray-800 ">
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Introduction</b></h2>
            <p>These terms of condition (the "Terms") govern your access to and use of the Dispatch Buddy Chrome extension (the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Use of the Service</b></h2>
            <p>You may use the Service only in accordance with these Terms and any applicable laws. You may not use the Service for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Content</b></h2>
            <p>The Service may allow you to submit, upload, publish or otherwise make available content, including but not limited to text, images, and videos (the "Content"). You retain all rights in, and are solely responsible for, the Content you make available through the Service.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Accounts</b></h2>
            <p>You may need to create an account to use certain features of the Service. You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We shall not be liable for any loss or damage arising from your failure to comply with the above.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Termination</b></h2>
            <p>We may terminate or suspend your access to the Service at any time, with or without cause, with or without notice. If you wish to terminate this agreement or your Dispatch Buddy account (if you have one), you may simply discontinue using the Service.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl">Emailing</h2>
            <p>We will only request access to send emails on the user's behalf when explicitly prompted by the user through our application or Chrome extension.<br>We will not send any emails without the user's explicit action, such as clicking a "send" button.<br>We will not store any of the user's email content or recipient information unless explicitly given permission by the user.<br>We will not share or sell any of the user's personal information or email data to any third parties.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl">Sending Grant</h2>
            <p>The user is responsible for ensuring that they have the necessary rights to send emails through our service on behalf of their own account.<br>We are not liable for any damages caused by the use of our service to send emails.<br>The user agrees to use the service only for lawful purposes and in compliance with all applicable laws and regulations.<br>We reserve the right to terminate the user's access to the service if they are found to be in violation of these terms.<br>By using our service, the user agrees to our privacy policy and terms of service.</p>
            <h2 class="text-gray-500 text-lg lg:text-xl xl:text-xl"><b>Changes to the Service and Terms</b></h2>
            <p>We reserve the right to make changes to the Service or these Terms at any time. If we make changes to these Terms, we will provide notice of such changes, such as by sending an email notification or by posting a notice on our website. Your continued use of the Service after any changes to these Terms indicates your acceptance of such changes.</p>
            <p class="mt-4 mx-auto">Copyright © 2023 Dispatch Buddy, All rights reserved.</p>
        </div>
    </section>
</div>
<Footer />