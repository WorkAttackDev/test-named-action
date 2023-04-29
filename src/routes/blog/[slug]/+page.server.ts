import type { Actions } from './$types';

export const config = {
    isr: {
        expiration: 1800, // 30 minutes
        // allowQuery: ["slug"],
    },
};

export const actions = {
    comment: async (event) => {
        // get form data
        const data = Object.fromEntries((await event.request.formData()).entries());

        console.log(data);

        return { data };
    }
} satisfies Actions;