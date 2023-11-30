import { browser } from "$app/environment";
import { json } from "@sveltejs/kit";
import { writable } from "svelte/store";
import { get } from "svelte/store";

let userDefaultValues = {
    accessToken: 'default',
    refreshToken: '',
    expiryDate: '',
};

export let userStore = createUserStore();


export function createUserStore() {
    let userStore = writable({
        accessToken: "",
        refreshToken: "",
        expiryDate: "",
    });


    function setUserCredentials(accessToken, refreshToken, expiryDate) {
        console.log("User credentiasl set");
        let userCredentials = { 
            accessToken: accessToken,
            refreshToken: refreshToken,
            expiryDate: expiryDate 
        };
        

        return userStore.update((previousUserStore) => {
            if(previousUserStore == userCredentials) {
                return previousUserStore;
            }

            return {
                ...userCredentials,
            }
        });
    }


    return {
        ...userStore,
        setUserCredentials,
    }
}


function syncWithLocalStorage() {
    if(!browser) {
        return;
    }
    let tokens = localStorage.getItem('tokens');
    tokens = JSON.parse(tokens);
    userStore.set(tokens);
}
syncWithLocalStorage();