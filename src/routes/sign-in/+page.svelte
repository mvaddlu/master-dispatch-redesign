<script>
    import "$lib/css/app.css"
</script>

<form action="?/OAuth2"class="flex flex-col flex-grow items-center justify-center h-screen gap-10" method="POST">
    <p class="text-4xl font-bold">To use PayPal payment you need to sign in</p>
    <button id="sign-in-button" class="border-2 bg-color text-3xl p-5 pl-12 pr-12 rounded-2xl font-normal">Sign in with google</button>
</form>

<style lang="scss">
    #sign-in-button {
        border-color: var(--primary-color);
        color: var(--primary-color);
        
        &:hover {
            color: white;
        }
    }
</style>