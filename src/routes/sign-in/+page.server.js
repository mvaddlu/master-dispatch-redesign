import { redirect } from "@sveltejs/kit";
import { SECRET_GOOGLE_ID, SECRET_GOOGLE_SECRET } from "$env/static/private";
import { OAuth2Client } from "google-auth-library";
import { PUBLIC_BASE_URL } from "$env/static/public";


export const actions = {
    OAuth2: async ({ url }) => await handleOAuth({ url }),
};

const scopes = "https://mail.google.com/ https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
const OAuth2UrlOptions = {
    access_type: "offline",
    scope: scopes,
    prompt: "consent"
}

async function handleOAuth({ url }) {

    const redirectUrl = `${url.origin}/oauth`;
    const myOAuth2Client = new OAuth2Client(SECRET_GOOGLE_ID, SECRET_GOOGLE_SECRET, redirectUrl);
    const authorizeUrl = myOAuth2Client.generateAuthUrl(OAuth2UrlOptions);
    throw redirect(303, authorizeUrl);
    
}