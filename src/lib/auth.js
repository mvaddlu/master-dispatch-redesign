import { browser } from "$app/environment";


export function getCredentials() {
    if(browser) {
        return JSON.parse(localStorage.getItem('tokens'));
    }
}