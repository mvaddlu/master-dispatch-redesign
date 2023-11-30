import { redirect } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import { SECRET_GOOGLE_ID, SECRET_GOOGLE_SECRET } from '$env/static/private'
import { PUBLIC_BACKEND_URL, PUBLIC_BASE_URL } from '$env/static/public';

export const GET = async({ url }) => {
    
    const redirectURL = `${url.origin}/oauth`;

    const code = await url.searchParams.get('code');
    let urlParameters = { 
        accessToken: "",
        refreshToken: "",
        email: "",
        expiryDate: 0
    }

    let googleInfo;
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
        throw redirect(303, `${url.origin}/sign-in`)
    }

    let response = await isUserExistsInDatabase({email: urlParameters.email, name: googleInfo.name});
    
    if(!response) {
        throw redirect(303, `${url.origin}/sign-up`)
    };


    urlParameters.refreshToken = encodeURIComponent(urlParameters.refreshToken);
    let parameters = `${urlParameters.accessToken}&${urlParameters.refreshToken}&${urlParameters.expiryDate}&${urlParameters.email}`
    
    throw redirect(303, `${url.origin}/auth/${parameters}`);
}


export async function _getUserInformation(accessToken) {
    let header = {
    headers: {
        Authorization: `Bearer ${accessToken}`,
        }
    }

    let response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', header);
    response = await response.json();
    return response;
}


async function isUserExistsInDatabase({email, name}) {
    const url = `${PUBLIC_BACKEND_URL}/user/${email}`
    const headers = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    let response = await fetch(url, headers);
    if(!response.ok) {
        return false;
    }
    response = await response.json();
    return true;
}