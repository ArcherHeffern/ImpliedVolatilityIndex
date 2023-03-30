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
        display:flex;
        align-items: center;
        overflow: scroll;
    }
    .slide {
        width: 200px;
        float:right;
        border-right: 1px solid lightgrey;
    }

    ul {
        padding-left:0;
        list-style-type: none;
        display:table;
        margin: 0 auto;
        text-align:left;
    }

    li {
        float:right;
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
        width: 40px;
        height: 40px;
        padding: 10px;
        margin-top: 12px;
        border:none;
        cursor: pointer;
        background-color: transparent;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    .btn:active {
    transform: scale(1.1);
    }
    
    
    

</style>

<script>
    import { slide } from 'svelte/transition'

    const financialHeader = [
        {title: 'Crude Oil', data: '73.11'},
        {title: 'Gold', data: '1,974.00'},
        {title: 'Silver', data: '23.48'},
        {title: 'Russell 2000', data: '1,746.73'},
        {title: 'Nasdaq', data: '11,679.98'},
        {title: 'Dow 30', data: '32,372.59'},
        {title: 'S&P 500', data: '3,963.60'},
    ]
    let startIndex = 0;
    const numOfSlide = 5; 
    let showingItems = financialHeader.slice(startIndex, startIndex + numOfSlide);


    const next = () => {
        if (startIndex > 0) {
            startIndex--;
        }
        showingItems = financialHeader.slice(startIndex, startIndex + numOfSlide);
        return showingItems;
    }
    const prev = () => {
        if (startIndex < financialHeader.length - numOfSlide) {
            startIndex++;
        } 
        showingItems = financialHeader.slice(startIndex, startIndex + numOfSlide);
        return showingItems;
    };




</script>

<div class="body">

    <div class="slider">
            
            <ul>
                <li>
                    <button class="btn btn-prev" on:click={prev}>
                        <div id="left">
                             <i class="bi bi-chevron-left" id="prevButton" style="font-size: 1.5rem;color:#453DE0;"></i>
                        </div>  
                    </button>
                    <button class="btn btn-next" on:click={next}>
                        <div id="right">
                            <i class="bi bi-chevron-right" id="nextButton" style="font-size: 1.5rem;color:#453DE0;"></i>
                        </div>
                        </button>
                </li>
                {#each showingItems as item}
                    <li transition:slide id={item.title} class="slide">
                        <h3>
                            <span class="title">{item.title}</span>
                            <br>
                            <span class="data">{item.data}</span>
                            <span class="chart"></span>
                        </h3>
                    </li>
            {/each}
            </ul>
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



