<style>
    .body {
        background: white;
    }
    .container-graph {
        display: flex;
        justify-content: space-around;
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

    .slider {
        width:100%;
        max-width: 1000px;
        height: 70px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }

    .slide {
        width: 100%;
        max-width:200px;
        display: block;
        height: 70px;
        transition: all 0.5s;
    }

    ul {
        padding-left:0;
        list-style-type: none;
        display:block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
    }

    li {
        width: 15.3%;
        display:inline-block;
        border-right: 1px solid lightgrey;
    }

    h3 {
        display: block;
        font-size: 1em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        margin-left: 1%;
    }

    .data {
        color: #453DE0;
    }
    .btn {
        position: absolute;
        width: 40px;
        height: 40px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        z-index: 10px;
        cursor: pointer;
        background-color: #fff;
    }

    .btn:active {
    transform: scale(1.1);
    }

    .btn-prev {
    top: 17.7%;
    left: 2%;
    }

    .btn-next {
    top: 17.7%;
    right: 2%;
    }
    
    

</style>

<script>
    import Carousel from "svelte-carousel";

    let carousel; // for calling methods of the carousel instance
    
    const handleNextClick = () => {
        carousel.goToNext()
    }

    const handlePrevClick = () => {
        carousel.goToPrev()
    }
</script>

<div class="body">

    <div class="main">
        <Carousel
            particlesToShow={5}
            particlesToScroll={2}
        >
           <ul class="slider">
                <div>
                    <li class="slide">
                            <h3 class="S&P 500">
                            <span class="title">S&P 500</span>
                            <br>
                            <span class="data">3,963.60</span>
                            <span class="chart"></span>
                            </h3> 
                    </li>
                </div>
                <div>
                    <li class="slide">
                        <h3 class="Dow 30">
                        <span class="title">Dow 30</span>
                        <br>
                        <span class="data">32,372.59</span>
                        <span class="chart"></span>
                        </h3>
                    </li>
                </div>
                
                <div>
                    <li class="slide">
                        <h3 class="Nasdaq">
                        <span class="title">Nasdaq</span>
                        <br>
                        <span class="data">11,679.98</span>
                        <span class="chart"></span>
                        </h3>
                    </li>
                </div>
                
                <div>
                   <li class="slide">
                        <h3 class="Russell 2000">
                        <span class="title">Russell 2000</span>
                        <br>
                        <span class="data">1,746.73</span>
                        <span class="chart"></span>
                        </h3>                  
                    </li>
                </div>
                
                <div>
                    <li class="slide">
                        <h3 class="Crude Oil">
                        <span class="title">Crude Oil</span>
                        <br>
                        <span class="data">73.11</span>
                        <span class="chart"></span>
                        </h3>                
                    </li>
                </div>
                
                <div>
                    <li class="slide">
                        <h3 class="Gold">
                        <span class="title">Gold</span>
                        <br>
                        <span class="data">1,974.00</span>
                        <span class="chart"></span>
                    </h3>
                    </li>
                </div>
                
                <div>
                    <li class="slide">
                        <h3 class="Silver">
                        <span class="title">Silver</span>
                        <br>
                        <span class="data">23.48</span>
                        <span class="chart"></span>
                        </h3>    
                    </li>
                </div>
                
            </ul>
            <button class="btn btn-prev" on:click={handlePrevClick}><i class="bi bi-chevron-left" style="font-size: 1.5rem; color: #453DE0;"></i></button>
            <button class="btn btn-next" on:click={handleNextClick}><i class="bi bi-chevron-right" style="font-size: 1.5rem; color: #453DE0;"></i></button>
        </Carousel>
        </div>
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



