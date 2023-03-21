this is the working main page

<style>
    * {
        margin: 0px;
        padding: 0px;
    }

    .body {
        height: 200vh;
        background: rgb(255, 255, 255);
    }



    .topnav {
        overflow: hidden;
        background-color: #e9e9e9;
    }


    .container-graph {
        display: flex;
        justify-content: space-around;
        flex-directon: row;
        align-items: center;
        flex-wrap: wrap;

    }

    .button{
        width: 20px;
        height: 250px;
    }

    .button-set{
        display: flex;
        margin-bottom: 50px;
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


            <div class="container-graph">
                <div class="button-set">
                    <img src="dow.png" height="250px" width="auto" alt="graph">
                    <button type="button" class="button"> + </button>
                </div>
                <div class="button-set">
                    <img src="dow.png" height="250px" width="auto" alt="graph">
                    <button type="button" class="button"> + </button>
                </div>
                <div class="button-set">
                    <img src="dow.png" height="250px" width="auto" alt="graph">
                    <button type="button" class="button"> + </button>
                </div>
                <div class="button-set">
                    <img src="dow.png" height="250px" width="auto" alt="graph">
                    <button type="button" class="button"> + </button>
                </div>

            </div>

               

        
        </article>
    </div>

</div>
