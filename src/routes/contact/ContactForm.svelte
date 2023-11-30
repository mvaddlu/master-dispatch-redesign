<script>
    export let form;
</script>

<form method="POST" action="?/sendEmail" class='bg-white text-[#999] flex flex-col m-5 items-center gap-3 rounded-xl p-5 min-h-[350px] w-[90vw] md:w-[560px]'>
    <div class='text-[26px] text-[#444] font-bold'>
        We're thrilled to be of assistance!
    </div>
    <div class='max-w-[450px] text-sm lg:mx-[65px]'>
        Kindly provide some information, and we will get in touch with you shortly.
    </div>
    <div class='flex justify-between gap-5 w-[80vw] md:w-[480px]'>
        <input name="firstName" type="text" placeholder='First name' class='outline-none border border-solid w-[35vw] md:w-[200px] border-slate-400 rounded-md p-2 max-h-[45px] focus:border-green-400'/>
        <input name="lastName" type="text" placeholder='Last name' class='outline-none border border-solid w-[35vw] md:w-[200px] border-slate-400 rounded-md p-2 max-h-[45px]  focus:border-green-400' />
    </div>
    
    <input name="email" type="email" placeholder='Email' class='outline-none border w-[80vw] md:w-[480px] border-solid border-slate-400 rounded-md p-2 max-h-[45px]  focus:border-green-400' />
    <input name="websiteUrl" type="text" placeholder='Web site' class='outline-none border w-[80vw] md:w-[480px] border-solid border-slate-400 rounded-md p-2 max-h-[45px]  focus:border-green-400' />
    <input name="numOfDispatchers" type="number" placeholder='Numbers of dispatchers' class='outline-none border w-[80vw] md:w-[480px] border-solid border-slate-400 rounded-md p-2 max-h-[45px]  focus:border-green-400' />
    <textarea  name="description" placeholder='How we can help?' class='outline-none  resize-none border w-[80vw] md:w-[480px] border-solid border-slate-400 rounded-md p-2 h-[150px]  focus:border-green-400' />
    {#if form?.error}
        <h2 class="p-5 bg-gradient-to-tr from-gray-400 to-slate-500">{form.message}</h2>
    {/if}
    {#if form?.success}
        <h2 class="p-2 bg-gradient-to-tr from-gray-400 to-slate-500 text-white rounded-xl pl-10 pr-10">{form.message}</h2>
    {/if}
    <button class='w-[80vw] md:w-[480px] h-[45px] transition-all bg-gradient-to-tr from-gray-400 text-lg justify-center to-slate-600 hover:to-slate-400 rounded-xl text-white  focus:border-green-400'>
        Submit
    </button>
</form>