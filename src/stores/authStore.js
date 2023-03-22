import {writable } from 'svelte/store';

const authStore = writable({
    isLoggedIn: false, 
    firebaseControlled: false
})

export default {
    subscribe: authStore.subscribe,
    set: authStore.set,
}