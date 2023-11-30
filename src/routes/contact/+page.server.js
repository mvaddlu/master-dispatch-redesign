import { PUBLIC_BACKEND_URL } from '$env/static/public';


export const actions = {
    sendEmail: async({ request }) => {
        let formData = await request.formData();

        let messageData = formDatatoObject(formData);
        
        console.log("🚀 ~ file: +page.server.js:9 ~ sendEmail:async ~ messageData:", messageData)
        
        
        
        let response = await sendRequest(messageData);
        
        if (response?.error) {
            return {
                error: true,
                message: "Sign in"
            }
        }

        return {
            success: true,
            message: "Success!"
        }
    }
}


function formDatatoObject(formData) {
    return {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        description: formData.get("description"),
        numberOfDispatchers: Number(formData.get("numOfDispatchers")),
        website: formData.get("websiteUrl"),
    }
}


async function sendRequest(messageData) {
    
    const url = `${PUBLIC_BACKEND_URL}/form/send`;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
    }
    let response;
    try {
        response = await fetch(url, options);
    }
    catch(error) {
        console.log(error);
        return {
            error: true,
            message: "Something went wrong"
        }
    }

    if(!response.ok) {
        return {
            error: true,
            message: "Something went wrong"
        }
    }
    
    response = await response.json();
    console.log("🚀 ~ file: +page.server.js:69 ~ sendRequest ~ response:", response)
    return response;
}