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

<style>
    body {
        background-color: whitesmoke;
    }

    p.tablecat{
        font-family: 'Times New Roman', Times, serif;
        border: solid cornflowerblue;
        margin-right: 120px;
    }

    .flex-container-table{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .tablecat-container{
        margin-top: 30px;
    }

    #table{
        padding-left: 300px;
        padding-bottom: 300px;
        padding-top: 300px;
        padding-right: 300px;
        outline-style: solid;
    }

    h1{
        text-align: center;
        margin-top: 100px;
    }

    .flex-container-trending{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }

    .news-item{
        text-align: center;
        border: solid cornflowerblue;
        margin-left: 200px;
        margin-right: 200px;
        padding-top: 50px;
    }

    footer{
        background-color: cornflowerblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>


<html lang="en-US">
<body>

<div class="flex-container-table">
<div class="tablecat-container">

<p class="tablecat"> 100 Most Popular </p>
<p class="tablecat"> Tech </p>
<p class="tablecat"> Energy </p>
<p class="tablecat"> Healthcare </p>
<p class="tablecat"> etc </p>

</div>

<p id="table"> This is a data table </p>
</div>

<div class="flex-container-trending">
<h1> Trending Now </h1>
<p class="news-item"> Trending news item 1 </p>
<p class="news-item"> Trending news item 2 </p>
<p class="news-item"> Trending news item 4 </p>
<p class="news-item"> Trending news item etc... </p>
</div>

<footer>
  <p> contact@email.com </p>
</footer>



</body>
</html>
