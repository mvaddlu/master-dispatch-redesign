import { redirect } from "@sveltejs/kit";
import { browser } from "$app/environment";
import { PUBLIC_BACKEND_URL } from '$env/static/public';

export function load({ params }) {
    
    if(!browser) {
        return {};
    };

    var tokens = localStorage.getItem("tokens");
    // @ts-ignore
    tokens = JSON.parse(tokens);
    
    if (!tokens) {
        throw redirect(303, "/sign-in");
    }

    const backendUrl = {
        PUBLIC_BACKEND_URL: PUBLIC_BACKEND_URL,
    };

    switch (params.price) {
        case "10":
            return backendUrl; 
        case "25":
            return backendUrl;
        case "96":
            return backendUrl;
        case "240":
            return backendUrl;
        default:
            throw redirect(303, "/");
    }

};

