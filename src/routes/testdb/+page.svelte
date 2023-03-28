<script lang="ts">
    let count = 14
    import { db } from '../fireconfig';
    import { doc, setDoc } from 'firebase/firestore'

    
    async function writeDailySpecial() {
    const specialOfTheDay = doc(db, `dailySpecial/2021-09-${count}`)
    try {
        const docData = {
            doc_id: count,
            description: "a latte",
            price: 3.99,
            milk: "Whole",
            vegan: false
        }
        count++;
    
        await setDoc(specialOfTheDay, docData)
    } catch (e) {
        console.log(e)
    }
}

writeDailySpecial()

</script>

<button on:click={writeDailySpecial}>Add a doc</button>