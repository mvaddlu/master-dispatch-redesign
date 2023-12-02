import { redirect } from "@sveltejs/kit";


export const actions = {
    default: async({ request }) => {
        let data = await request.formData();
        let price = data.get("price");
        
        switch(price) {
            case "35":
                throw redirect(303, "/starter");
            case "50":
                throw redirect(303, "/pro");
            case "336":
                throw redirect(303,'/starter')
            case "480":
                throw redirect(303,'/pro')
            default:
                throw redirect(303, "/");
        }
    }
}