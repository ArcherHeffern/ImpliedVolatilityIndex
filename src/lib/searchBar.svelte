<style>
.search-bar {
padding: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;

width: 750px;
height: 50px;

background: rgba(250, 250, 250, 0.93);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
}

input[type="text"] {
  font-size: 24px;
  font-family: 'Outfit';
  flex: 1;
  border: none;
  outline: none;
}

button {
  display:none
} 
</style>

<div>
  <form>
  <input class="search-bar" type="text" placeholder="  Search...">
  </form>
  <button>Search</button>
</div>

<script>
  let searchTerm = "";

  function handleSearch() {
    console.log(`Searching for ${searchTerm}`);
  }
</script>
<!-- <input type="text" bind:value={searchTerm} on:keydown={handleSearch}> -->