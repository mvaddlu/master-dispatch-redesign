import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { SECRET_GOOGLE_ID, SECRET_GOOGLE_SECRET } from '$env/static/private'
import { PUBLIC_BASE_URL, PUBLIC_BACKEND_URL } from '$env/static/public';
import { _getUserInformation } from "../oauth/+server";

export const GET = async({ url }) => {
    
    const redirectURL = `${PUBLIC_BASE_URL}/oauth-in`;
    
    const code = await url.searchParams.get('code');
    let googleInfo;
    let urlParameters = { 
        accessToken: "",
        refreshToken: "",
        email: "",
        expiryDate: 0
    }

    try {
            const oAuth2Client = new OAuth2Client(SECRET_GOOGLE_ID, SECRET_GOOGLE_SECRET, redirectURL);
            const response = await oAuth2Client.getToken(code);
            oAuth2Client.setCredentials(response.tokens);
            
            googleInfo = await _getUserInformation(oAuth2Client.credentials.access_token);

            urlParameters.accessToken = oAuth2Client.credentials.access_token;
            urlParameters.refreshToken = oAuth2Client.credentials.refresh_token;
            urlParameters.expiryDate = oAuth2Client.credentials.expiry_date || "";
            urlParameters.email = googleInfo.email;
            
    }
    catch (error) {
        console.log('Error signin in with google', error);
        
        throw redirect(303, `${PUBLIC_BASE_URL}/sign-in`)
    }
    
    let response = await fetchUserToApi({email: urlParameters.email, name: googleInfo.name});

    urlParameters.refreshToken = encodeURIComponent(urlParameters.refreshToken);
    let parameters = `${urlParameters.accessToken}&${urlParameters.refreshToken}&${urlParameters.expiryDate}&${urlParameters.email}`
    throw redirect(303, `${PUBLIC_BASE_URL}/auth/${parameters}`);
}

async function fetchUserToApi({email, name}) {

    const url = `${PUBLIC_BACKEND_URL}/sign-up`
    
    const headers = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, name}),
    };

    let response = await fetch(url, headers);

    if(!response.ok) {
        throw redirect(303, `${PUBLIC_BASE_URL}/sign-in`);
    }
    
    response = await response.json();
    return response
}