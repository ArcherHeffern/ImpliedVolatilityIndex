<style>
    .portfolio {
        font-family: 'Outfit', sans-serif;
        background-color: white;
        display:flex;
        align-items:center;
        flex-direction: column;
    }

    table {

        border-collapse:collapse;
        font-size: 20px;
        line-height: 14px;
        letter-spacing: -0.005em;
    }
    table td{
        padding: 16px 100px 16px;
    }

    table thead td {
        font-weight:500;
        border-bottom: 1px solid #000000;
    }

    table tbody td {
        border-bottom: 1px solid #000000;
        font-weight:500;
        color: #6A6A65;
    }
    .viewAnalysis{
        font-family: 'Outfit', sans-serif;
        margin:50px auto;
        padding: 3px 40px 3px;
        background-color: white;
        border: 1px solid #000000;
        border-radius: 20px;
        text-align: center;

        font-weight: 200;
        font-size: 25px;
        line-height: 38px;
        color: #000000;
    }

    .trash,.modify {
        background-color: white;
        border:none;
        padding:10px;
    }


</style>

<script>
    function analysisPopUp(){
      window.open("analysisplaceholder","bfs","fullscreen,scrollbars")
    }

    function deleteRow(){
        var td = event.target.parentNode.parentNode; 
        var tr = td.parentNode; // the row to be removed
        tr.parentNode.removeChild(tr);
    }

    function modifyRow(){

    }
</script>

<div class="portfolio">
    <div class="stockTable">
        <table id="t">
            <thead>
                <tr>
                    <td>Stock</td>
                    <td>Price</td>
                    <td>Data1</td>
                    <td>Data2</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Stock1</td>
                    <td>Price</td>
                    <td>Data1</td>
                    <td>Data2</td>
                    <td>
                        <button class="trash" on:click={deleteRow}><img id = "trashBin" src="trash.png" alt="icon"></button> 
                        <button class="modify" on:click={modifyRow} ><img id = "pen" src="pen.png" alt="icon"></button>
                        </td>
                </tr>
                <tr>
                    <td>Stock2</td>
                    <td>Price</td>
                    <td>Data1</td>
                    <td>Data2</td>
                    <td>
                        <button class="trash" on:click={deleteRow}><img id = "trashBin" src="trash.png" alt="icon"></button>
                        <button class="modify" on:click={modifyRow} ><img id = "pen" src="pen.png" alt="icon"></button>
                    </td>
                </tr>
                <tr>
                    <td>Stock3</td>
                    <td>Price</td>
                    <td>Data1</td>
                    <td>Data2</td>
                    <td>
                        <button class="trash" on:click={deleteRow}><i class="bi bi-trash3" id="trashBin" style="color:#6A6A65"></i></button>
                        <button class="modify" on:click={modifyRow} ><i class="bi bi-pen" id="pen" style="color:#6A6A65"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <button class="viewAnalysis" onClick = "analysisPopUp()" >View Analysis</button>
</div>

