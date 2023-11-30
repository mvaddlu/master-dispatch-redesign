import { redirect } from "@sveltejs/kit";


export const actions = {
    default: async({ request }) => {
        let data = await request.formData();
        let price = data.get("price");
        
        switch(price) {
            case "10":
                throw redirect(303, "/starter");
            case "25":
                throw redirect(303, "/pro");
            case "96":
                throw redirect(303,'/starter')
            case "240":
                throw redirect(303,'/pro')
            default:
                throw redirect(303, "/");
        }
    }
}