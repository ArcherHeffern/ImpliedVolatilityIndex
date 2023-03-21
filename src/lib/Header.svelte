<div class = "main">
    <div id = "mainHeader">
        <div id = "containerlogo">
            <img id = "quant-logo" src="logo.png" alt="Quant logo">
        </div>
        <div id="container_middle">
        </div>
        <div id = "container_navbar">
            <a href="/">stock</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/team">About</a>
            <a href="/login">Log in</a>    
        </div>
        <div id="countainer_signup">
            <a href="/signup"><img id = "signup_button" src="signup.png" alt="signup button"></a>    
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100&display=swap" rel="stylesheet">
</div>


<style>
/* The following are <div> setting */
.main {
    font-family: 'Outfit', sans-serif;
    background-color: white;
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
    /* border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 0px black solid; */
}
#containerlogo {
    /* border: 2px solid red; */
    width: 10%;
    display: flex;
    justify-content: flex-start;
    height: 70px;
    margin: 0 10px 0 0;
}
#quant-logo {
    /* border: 2px solid black; */
    height: 60px;
    width: 265px;
    margin: 12px -5px 0 30px;
}


#container_middle {
    width: 40%;    
    /* display: flex;
        border-style: none;
        justify-content:space-around;
        text-align: left;
        margin-left: 15px; */
        
}
#container_navbar {
    /* border: 2px solid blue; */
    width: 35%;
    display: flex;
    justify-content:right;
    gap: 40px;
    height: 70px;
    margin: 0 10px 0 0;
}
#countainer_signup {
    width: 15%;
    display: flex;
    justify-content:space-around;
    height: 70px;
    margin: 0 10px 0 0;
}
#signup_button {
    height: 80px;
    width: 140px;
    margin: -17px 0 0 0;
}

/* The following are font setting */

a {
    margin: 25px 0px 0 0;
    height: 20px;
    text-decoration: none;
    font-size:28px;
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

</style>
<!-- This section will need some logic to check if the user is logged in or not - this will have to be implemented in conjeunction with user authentication -->
