import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";
import { userStore } from "$lib/userStore";
import { PUBLIC_BASE_URL } from "$env/static/public";


export function load({ params, url }) {
    console.log(params);
    
    let credentials = {
        accessToken: params.accessToken,
        refreshToken: params.refreshToken,
        expiryDate: params.expiryDate,
        email: params.email
        
    }

    if( browser ) {
        userStore.setUserCredentials(credentials.accessToken, credentials.refreshToken, credentials.expiryDate);
        localStorage.setItem('tokens', JSON.stringify(credentials));
        throw redirect(303, `${url.origin}/#Pricing`);
    }
}