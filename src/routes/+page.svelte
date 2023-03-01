<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        height: 200vh;
        background: rgb(255, 255, 255);
    }

    header {
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

    .title {
        color: black;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .header-right {
        color: black;
        text-align: right;
    }

    .container-search {
        padding-top: 4px;
        display: flex;
        justify-content: center;
        padding-bottom: 4px;
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

    a {
        color: gray;
        text-decoration: none;
    }

</style>

<script>
    
</script>

<body>
    <header>
       <div class="header-left">
           <img src="logo.png" height="50px" width="auto" alt="quant logo">
       </div>

       <div class="header-right">
           <div class="container-search">
               <div class="topnav">
                   <input type="text" placeholder="Search..">
               </div>
           </div>

           <div class="row">
               <div class="col-6 col-sm-4">User Profile</div>
               <div class="col-6 col-sm-4">Portfolio</div>
               <div class="col-6 col-sm-4">Settings</div>
           </div>
       </div>
    </header>

    <main>
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
    </main>

    <footer></footer>
</body>