<script>
    import "$lib/css/app.css";
    import ContactForm from "./ContactForm.svelte";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    export let form;
</script>


<Header />
<div class='bg-gray-50 overflow-x-hidden w-screen min-h-screen flex flex-col justify-between items-center'>
    <div class='max-w-[1200px] bg-gradient-to-tr mb-10 from-gray-400 text-lg to-slate-600 rounded-xl text-white xl:mx-auto mt-14 min-h-[600px] flex items-center flex-col lg:flex-row  justify-center  gap-4 md:gap-12 md:mx-5 '>
        <div class='flex flex-col p-10  gap-3'>
            <div class='text-[36px] font-bold text-white '>
                Contact  Us
            </div>
            <div class='max-w-[380px] text-white'>
                Email, call, or fill out the form to discover how we can assist your trucking business.
            </div>
            <div class=" text-white">
                Info@dispatchbuddy.com
            </div>
        </div>
        <ContactForm {form}/>
    </div>
</div>

<Footer />