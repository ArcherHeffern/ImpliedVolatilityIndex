<script>
    
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .body {
        height: 200vh;
        background: rgb(255, 255, 255);
    }

    .container-list {
        padding-top: 20px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-evenly;
        padding-bottom: 20px;
    }

    .container-graph-content {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    #text-content {
        padding-left: 10px;
    }

</style>

<div class='body'>
    <div>
       <article>
           <div class="container-list">
               <div class="container-graph-content">
                   <section id="text-content">
                       <div class="col-6 col-sm-4">NASDAQ</div>
                       <div class="col-6 col-sm-4">DOWJONES</div>
                       <div class="col-6 col-sm-4">S&P 500</div>
                       <div class="col-6 col-sm-4">Bitcoin</div>
                   </section>
               </div>

               <div class="container-graph">
                   <img src="dow.png" height="200px" width="auto" alt="graph">
               </div>
           </div>
        </article>
    </div>
</div>