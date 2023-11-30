
<script async>
// @ts-nocheck
    import "$lib/css/app.css"
    import { page } from '$app/stores';
    import { loadScript } from "@paypal/paypal-js";
    import { userStore } from "$lib/userStore";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";    

    const { price } = $page.params
    export let data;
    const PUBLIC_BACKEND_URL = data['PUBLIC_BACKEND_URL'];
    let paypal;

    const handlePaypalPayment = async () => {
    
        try {
            paypal = await loadScript({
                clientId: "AX_oLJffAk5BUz4D_5CQg-Ga1AFF3nOoEP7yE_hFM318HzyEi0a0kLoevTh5AtJgrOaY1JUN3nc0G-Y0",
                currency:"USD" 
                }
            )
            console.log(paypal)
        }
        catch (error) {
            console.error("failed to load the PayPal JS SDK script", error);
        }
        
        if (paypal) {
            try {
                await paypal.Buttons(
                    {
                        createOrder: (data, actions) => createPaypalOrder(data, actions),
                        onApprove: (data, actions) => onPayPalPaymentApprove(data, actions),
                        style: {
                            layout: "vertical"
                        }
                    }
                )
                .render('#paypal-render');
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    
    function createPaypalOrder(data, actions) {
        const order = {
            purchase_units: [
                {
                    amount: {
                        value: price
                    }
                }
            ]
        }
        return actions.order.create(order);
    }
    

    async function onPayPalPaymentApprove(data, actions) {
        console.log(actions);
        console.log(actions.order);
        let details = await actions.order.capture();

        console.log("DETAILS: " + details);




        console.log(data.orderID);
        const APIurl = `${PUBLIC_BACKEND_URL}/payment/create`

        const requestBody = {
            email: $userStore.email,
            price: price
        }

        const requestHeaders = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(requestBody)
        }
        let response = await fetch(APIurl, requestHeaders);
        response = await response.json();
        let hiddenForm = document.getElementById("hidden-form-submit");
        hiddenForm.click();

    }
    
    handlePaypalPayment();
</script>

<Header />
<!-- <div class='bg-gray-50 w-screen min-h-screen flex flex-col justify-between items-center'> -->
    <!-- <div class="w-[80vw]  font-bold text-[#444] mx-auto h-[35px] mt-3 flex justify-between text-[19px]">
        <a href='/#Promo' class='no-underline text-slate-600 flex items-center'>
            <img src={logo} alt='' class="w-[35px] h-[35px] rotate-[15deg]"/> Dispatch Buddy
        </a>
        <div class="block md:hidden">
            <MenuBurger  backgroundColor="rgb(153, 153, 153)">
                <div class="flex flex-col gap-3 text-white">
                    <a class='no-underline ' href='/#Features'>
                        Features
                    </a>
                    <a class='no-underline ' href='/#Product'>
                        Product
                    </a>
                    <a class='no-underline ' href='/#Pricing'>
                        Pricing
                    </a>
                    <a class='no-underline ' href='/contact'>
                        Contact Us
                    </a>

                </div>
            </MenuBurger>

        </div>
        <a class='hidden md:block no-underline h-[35px] hover:text-slate-600 flex items-center justify-center' href='/#Features'>
            <div>Features</div>
        </a>
        <a class='hidden md:block no-underline h-[35px]  hover:text-slate-600 flex items-center justify-center' href='/#Product'>
            <div>Product</div>
        </a>
        <a class='hidden md:block no-underline h-[35px]  hover:text-slate-600 flex items-center justify-center' href='/#Pricing'>
            <div>Pricing</div>
        </a>
        <a class='hidden md:block no-underline h-[35px]  hover:text-slate-600 flex items-center justify-center' href='/contact'>
            <div>Contact Us</div>
        </a>
    </div> -->
    <div id="paypal-render" class="container">
    </div>     
    <!-- <div  class=' w-[90vw] xl:w-[1200px] text-[#444] min-h-[220px] mt-5 md:mx-auto flex flex-col md:flex-row  justify-around  border-t border-slate-500 border-solid'>
        <div class='flex flex-col p-10 text-[21px] gap-5'>
            <div class='text-[28px] font-bold flex items-center'>
                <img src={logo} alt='' class="w-10 h-10 rotate-[15deg]"/> Dispatch Buddy
            </div>
            <div>
                Info@dispatchbuddy.com
            </div>
        </div>
        <div class="flex ">
            <div class='flex flex-col  p-10 text-[18px] gap-3'>
                <div class='font-bold'>
                    Explore
                </div>
                <a class='no-underline hover:text-slate-600' href='/#Features'>
                    Features
                </a>
                <a class='no-underline hover:text-slate-600' href='/#Product'>
                    Product
                </a>
                <a class='no-underline hover:text-slate-600' href='/#Pricing'>
                    Pricing
                </a>
            </div>
            <div class='flex flex-col  p-10 text-[18px] gap-3'>
                <div class='font-bold'>
                    Company
                </div>
                <a class='no-underline hover:text-slate-600' href='/contact'>
                    Contact Us
                </a>
                <a href='/policy' class='no-underline hover:text-slate-600'>
                    Privacy policy
                </a>
                <a href="/term" class="no-underline hover:text-slate-600">
                    Terms of Condition
                </a>
            </div>
        </div>
    </div> -->
    <form method="POST" hidden>
        <input type="text" name="price" value={price}>
        <button type="submit" id="hidden-form-submit"></button>
    </form>
<!-- </div> -->

<Footer />


<style>
    #paypal-render {
        max-width: 500px;
        margin: 70px auto;
    }
</style>