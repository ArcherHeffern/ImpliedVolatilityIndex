<style>
    * {
        padding: 0px;
        margin: 0px;
    }

    .footer-link {
        margin-top: 10px;
    }

    #footer-main {
        display: flex;
        flex-direction: column;
        border-top-style: solid;
        border-top-color: grey;
        width: 100%;
    }

    #footer-top {
        display: flex;
        flex-direction: row;
        margin-top: 8px;
        width: 100%;
    }

    #footer-left {
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
        margin-left: 15px;
        width: 50%;
    }

    #footer-right {
        display: flex;
        flex-direction: column;
        justify-content: right;
        text-align: right;
        margin-right: 15px;
        width: 50%;
    }

    #footer-bottom {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
        width: 100%;
    }

    #footer-copyright {
        margin-right: 15px;
        margin-bottom: 8px;
        color: gray;
    }
</style>

<script>

</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="footer-basic-alt.css">
    <title>Document</title>
</head>
<body>
    <div id="footer-main">
        <div id="footer-top">
            <div id="footer-left">
                <h1 class="footer-h1">Contact Us</h1>
                <a href="#" class="footer-link">LinkedIn</a>
            </div>
            <div id="footer-right">
                <h1 class="footer-h1">About Us</h1>
                <a href="#" class="footer-link">QUANT</a>
                <a href="#" class="footer-link">About Us Page</a>
            </div>
        </div>
        <div id="footer-bottom">
            <h4 id="footer-copyright">[copyright info]</h4>
        </div>
    </div>
</body>
</html>