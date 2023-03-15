<style>
.main {
    font-family: 'Chivo', monospace;
    background-color: rgb(237, 237, 237);
    /* margin: 0.2rem; */
}
/* .main {
    border: none;
} */
#mainHeader {
    /* border: 2px solid black; */
    display: flex;
    height: 70px;
    width: 100%;
    background-color: white;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 0px black solid;
}
#container1 {
    /* border: 2px solid red; */
    width: 70%;
    display: flex;
    justify-content: flex-start;
    height: 70px;
}
#container2 {
    /* border: 2px solid blue; */
    width: 30%;
    display: flex;
    justify-content:space-around;
    gap: 20px;
    height: 70px;
    margin: 0 10px 0 0;
}
a {
    margin: 25px 0px 0 0;
    height: 20px;
    text-decoration: none;
}
a:link {
    color: black;
}
a:hover {  
    color: rgb(255, 85, 85);
}
a:active {
    text-decoration: none; 
}
a:visited {
    color: black;
    text-decoration: none; 
}
a:visited:hover {  
    color: rgb(255, 85, 85);
}
#quant-logo {
    /* border: 2px solid black; */
    height: 50px;
    margin: 12px -5px 0 30px;
}
.one {
    font-size: 1.5rem;
    /* border: black 2px solid; */
    margin: 8px 0 0 0;
}
.two {
    font-size: 1.5rem;
    /* border: black 2px solid; */
    margin: -10px 0 0 0;
}
section {
    display: flex;
    gap: 20px;
}
#logo-text {
    /* border: 2px red solid; */
    width: 60%;
    display: flex;
    flex-wrap: wrap;
}
</style>>
<!-- This section will need some logic to check if the user is logged in or not - this will have to be implemented in conjeunction with user authentication -->
<div class = "main">
    <div id = "mainHeader">
        <div id = "container1">
            <section>
                <img id = "quant-logo" src="quant-logo.png" alt="Quant logo">
                <div id = "logo-text">
                    <p class = "one"> Brandeis University </p>
                    <p class = "two"> Quant Club</p>
                </div>
            </section>
        </div>
        <div id = "container2">
            <a href="/">Main</a>
            <a href="/login">Log in</a>
            <a href="/signup">Signup</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/team">Team</a>
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@600&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
</div>

<script>

</script>