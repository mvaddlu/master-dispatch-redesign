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
    
            if (option.id === "monthly_billing") {
                document.getElementById("starter_billing").innerText = "10";
                document.getElementById("starter_paypal_link").href = "/paypal/10";
                document.getElementById("starter_billing_period").innerText = "/mo";
                document.getElementById("starter_yearly_sum").innerText = "or $96 yearly";
                
                document.getElementById("pro_billing").innerText = "25";
                document.getElementById("pro_paypal_link").href = "/paypal/25";
                document.getElementById("pro_billing_period").innerText = "/mo";
                document.getElementById("pro_yearly_sum").innerText = "or $240 yearly";
            } else {
                document.getElementById("starter_billing").innerText = "96";
                document.getElementById("starter_paypal_link").href = "/paypal/96";
                document.getElementById("starter_billing_period").innerText = "/yearly";
                document.getElementById("starter_yearly_sum").innerText = "or $10 mo";
                
                document.getElementById("pro_billing").innerText = "240";
                document.getElementById("pro_paypal_link").href = "/paypal/240";
                document.getElementById("pro_billing_period").innerText = "/yearly";
                document.getElementById("pro_yearly_sum").innerText = "or $25 mo";
    
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