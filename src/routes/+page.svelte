This is the main section

<style>
    * {
        margin: 0px;
        padding: 0px;
    }

    .body {
        height: 200vh;
        background: rgb(255, 255, 255);
    }

    .header {
        background: #88b3eb;
        display: flex;
        padding: 20px;
        border-bottom: 1px solid #e9e9e9;
    }

    .header-left {
        flex-grow: 1;
        display: flex;
        gap: 10px;
        text-align: left;
    }

    .topnav {
        overflow: hidden;
        background-color: #e9e9e9;
    }



    .container-list {
        padding-top: 20px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 20px;
    }

    .container-graph {
        margin: 30px;
        display: flex;
        justify-content: space-around;
        flex-directon: row;
        flex-wrap: wrap;
    }

    .scroll-list{
        margin: 90px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }


    #text-content {
        padding-left: 10px;
    }

    /* a {
        color: gray;
        text-decoration: none;
    } */

</style>

<script>
    
</script>

<div class="body">

    <div class="main">
       <article>

           <div class="scroll-list">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
                <img src="dow.png" height="100px" width="auto" alt="graph">
           </div>

           <div class="container-list">

               <div class="container-graph">
                   <img src="dow.png" height="250px" width="auto" alt="graph">
                   <button type="button"> + </button>
                   <img src="dow.png" height="250px" width="auto" alt="graph">
                   <button type="button"> + </button>
                   <img src="dow.png" height="250px" width="auto" alt="graph">
                   <button type="button"> + </button>
                   <img src="dow.png" height="250px" width="auto" alt="graph">
                   <button type="button"> + </button>
               </div>

               
           </div>

        
        </article>
    </div>

</div>
