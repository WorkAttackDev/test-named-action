import type { Actions } from './$types';

export const actions = {
    comment: async (event) => {
        console.log(event);
    }
} satisfies Actions;