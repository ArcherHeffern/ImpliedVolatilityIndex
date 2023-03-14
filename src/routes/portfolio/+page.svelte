<style>
    table, th, td {
        border-bottom: 0.5px solid #000000;
    }
    .rows {
        color: #000000;

    }
    .cells {
        color: #6A6A65;
    }
    .rows, .cells {
        font-weight: 500;
        font-size: 20px;
        line-height: 70%;
        letter-spacing: -0.005em;
        border-bottom: 0.5px solid #000000;
    }

    .viewAnalysis {
        position: absolute;
        left: 41%;
        right: 41%;
        top: 80%;
        bottom: 15%;

        border: 1px solid #000000;
        border-radius: 20px;
        text-align: center;

        font-weight: 200;
        font-size: 30px;
        line-height: 38px;
        color: #000000;
    }
</style>

<script>
    import './styles.css'
    function analysisPopUp(){
      window.open("analysisplaceholder","bfs","fullscreen,scrollbars")
    }
</script>

<div class="stockTable">
        <table>
            <div class = "rows">
                <tr>
                    <th>Stocks</th>
                    <th>Price</th> 
                    <th>Data1</th>
                    <th>Data2</th>
                    <th> </th>
                </tr>
            </div>
            <div class = "cells">
                <tr>
                    <td>stock1</td>
                    <td>price</td> 
                    <td>data1</td>
                    <td>data2</td>
                    <td>icon-placeholder</td>
                </tr>
                <tr>
                    <td>stock2</td>
                    <td>price</td> 
                    <td>data1</td>
                    <td>data2</td>
                    <td>icon-placeholder</td>
                </tr>
                <tr>
                    <td>stock1</td>
                    <td>price</td> 
                    <td>data1</td>
                    <td>data2</td>
                    <td>icon-placeholder</td>
                </tr>
                <tr>
                    <td>stock1</td>
                    <td>price</td> 
                    <td>data1</td>
                    <td>data2</td>
                    <td>icon-placeholder</td>
                </tr>
            </div>
    </table>
</div>
<button class="viewAnalysis" onClick = "analysisPopUp()" >View Analysis</button>

