// @ts-nocheck


function click_hide_menu(event) {
    let burger_image = document.getElementById("burger_menu_image");
    let burger_links = document.getElementById("burger_menu_links");
    
    if (!burger_image.contains(event.target) && burger_image.classList.contains("active")) {
        burger_image.classList.remove("active");
        burger_links.style.display = "none";
    }
}



export function init() {
    let squareInput = document.querySelector('#square-input');
    let squareRange = document.querySelector('#square-range');
    let inputs = document.querySelectorAll('input');
    let radioType = document.querySelectorAll('input[name="type"]');

    let totalPriceMonthlyElement = document.querySelector('#total-price-monthly');
    let totalPriceYearlyElement = document.querySelector('#total-price-yearly');


    squareRange.addEventListener('input', function(){
        squareInput.value = squareRange.value
    })


    function calculate(){
        let totalPrice = 35 * parseInt(squareInput.value);

        for(const radio of radioType){
            if(radio.checked){
                totalPrice = totalPrice * parseFloat(radio.value)
            }
        }

        totalPriceMonthlyElement.innerText = (totalPrice)
    }
    calculate()

    function calculate2(){
        let totalPrice = 335 * parseInt(squareInput.value);

        for(const radio of radioType){
            if(radio.checked){
                totalPrice = totalPrice * parseFloat(radio.value)
            }
        }

        totalPriceYearlyElement.innerText = (totalPrice)
    }
    calculate2();

    for(const input of inputs) {
        input.addEventListener('input', function(){
            calculate();
            calculate2()
        })
    }


    let questions = document.getElementsByClassName("question");
    
    for (let i = 0; i < questions.length; i++) {
        const el = questions[i];
    
        el.addEventListener("click", function() {
            if (el.classList.contains("active")) {
                el.classList.remove("active");
                return;
            }
    
            for (let k = 0; k < questions.length; k++) {
                questions[k].classList.remove("active");
            }
            el.classList.add("active");
        });
    }
    
    
    let billing_options = document.getElementsByClassName("billing_option");
    
    for (let i = 0; i < billing_options.length; i++) {
        const option = billing_options[i];
    
        option.addEventListener("click", function() {
            for (let k = 0; k < billing_options.length; k++) {
                billing_options[k].classList.remove("active");
            }

            const periodYearly = document.getElementById("total_billing_period_yearly")
            const periodMonthly = document.getElementById("total_billing_period_monthly")
            const monthlyDollar = document.getElementById("monthlyDollar")
            const yearlyDollar = document.getElementById("yearlyDollar")
            const monthlyBlock = document.getElementById("monthlyBlock")

            if (option.id === "monthly_billing") {
                document.getElementById("starter_billing").innerText = "35";
                document.getElementById("starter_paypal_link").href = "/paypal/35";
                document.getElementById("starter_billing_period").innerText = "/mo";
                document.getElementById("starter_yearly_sum").innerText = "or $336 yearly";
                
                document.getElementById("pro_billing").innerText = "50";
                document.getElementById("pro_paypal_link").href = "/paypal/50";
                document.getElementById("pro_billing_period").innerText = "/mo";
                document.getElementById("pro_yearly_sum").innerText = "or $480 yearly";

                document.getElementById("total-price-monthly").innerText = totalPriceMonthlyElement.innerText;
                document.getElementById("total_billing_period_monthly").innerText = "/mo";
                totalPriceYearlyElement.classList.add('display_none')
                totalPriceMonthlyElement.classList.remove('display_none')
                periodYearly.classList.add('display_none')
                periodMonthly.classList.remove('display_none')
                yearlyDollar.classList.add('display_none')
                monthlyDollar.classList.remove('display_none')
                monthlyBlock.classList.remove('display_none')

            } else {
                document.getElementById("starter_billing").innerText = "336";
                document.getElementById("starter_paypal_link").href = "/paypal/336";
                document.getElementById("starter_billing_period").innerText = "/yearly";
                document.getElementById("starter_yearly_sum").innerText = "or $35 /per month";
                
                document.getElementById("pro_billing").innerText = "480";
                document.getElementById("pro_paypal_link").href = "/paypal/480";
                document.getElementById("pro_billing_period").innerText = "/yearly";
                document.getElementById("pro_yearly_sum").innerText = "or $50 /per month";

                document.getElementById("total-price-yearly").innerText = totalPriceYearlyElement.innerText;
                document.getElementById("total_billing_period_yearly").innerText = "/yearly";
                totalPriceMonthlyElement.classList.add('display_none')
                totalPriceYearlyElement.classList.remove('display_none')
                periodMonthly.classList.add('display_none')
                periodYearly.classList.remove('display_none')
                monthlyDollar.classList.add('display_none')
                yearlyDollar.classList.remove('display_none')
            }
    
            option.classList.add("active");
        })
    }
    
    
    document.getElementById("burger_menu_image").addEventListener("click", function() {
        let burger_links = document.getElementById("burger_menu_links");
        
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            burger_links.style.display = "none";
            document.removeEventListener("click", click_hide_menu);
        } else {
            this.classList.add("active")
            burger_links.style.display = "flex";
            document.addEventListener("click", click_hide_menu);
        }
    })
}

