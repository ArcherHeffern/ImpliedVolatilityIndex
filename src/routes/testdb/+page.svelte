<script lang="ts">
    let count = 14
    import { db } from '../fireconfig';
    // import { doc, setDoc } from 'firebase/firestore'
    // import { collection, addDoc } from "firebase/firestore";

   
    
    async function writeDailySpecial() {
    // const specialOfTheDay = doc(db, `dailySpecial/2021-09-${count}`)
    // const usersRef = collection(db, "users");
    try {
        const docData = {
            doc_id: count,
            description: "a latte",
            price: 3.99,
            milk: "Whole",
            vegan: false
        }
        count++;
    
        // await setDoc(specialOfTheDay, docData)
        // const docRef = await addDoc(usersRef, docData);
        // return docRef
    } catch (e) {
        console.log(e)
    }
}

writeDailySpecial()

</script>

<button on:click={writeDailySpecial}>Add a doc</button>