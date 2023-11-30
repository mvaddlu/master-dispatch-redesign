<script>
    import "$lib/css/app.css"
</script>

<form action="?/OAuth2" method="POST" class="flex flex-col items-center h-[100vh] w-[100vw] flex-grow justify-center gap-5">
    <button id="sign-up-button" class="border-2 hover:bg-primary p-5 text-white rounded-xl hover:bg-blue-700 text-3xl pl-12 pr-12">Sign up with Google</button>
</form>

<style lang="scss">
    #sign-up-button {
        transform: translateY(-50%);
        border-color: var(--primary-color);
        color: var(--primary-color);
        
        &:hover {
            color: white;
        }
    }
</style>