<div class="main">
    <div id="mainHeader">
        <div id="containerlogo">
            <img id="quant-logo" src="logo.png" alt="Quant logo">
        </div>
        <div id="right_header">
            <div id="container_navbar">
                <a href="/">Stock</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/about">About</a>
                <a href="/login">Log in</a>    
            </div>
            <div id="countainer_signup">
                <a href="/signup" id="container_signup"><img id = "signup_button" src="signup.png" alt="signup button"></a>    
            </div>
        </div>
    </div>
</div>


<style>
/* The following are <div> setting */
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Outfit', sans-serif;
    font-weight: 100;
    background-color: white;
    height: 110px;
}

#mainHeader {
    display: flex;
    margin: 0 0 10px 0;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 0px black solid; */
}

#right_header {
    display: flex;
    align-items: center;
}

#containerlogo {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    height: 70px;
    margin: 0 10px 0 0;
}
#quant-logo {
    /* border: 2px solid black; */
    margin: 0 0 0 30px;
}
#container_navbar {
    /* border: 2px solid blue; */
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 40px;
    margin: 0 10px 0 0;
}
#countainer_signup {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
}

#container_signup {
    display: flex;
    justify-content: center;
    align-items: center;
}
#signup_button {
    height: 70px;
    margin: 0 50px 0 20px;
}

/* The following are font setting */

a {
    text-decoration: none;
    font-size:28px;
    color: black;
}
a:hover {  
    color: #38caef;
    transition: all .1s;
}

@media (max-width: 1020px) {
        #container_navbar {
            display: none;
        }
    }

</style>
<!-- This section will need some logic to check if the user is logged in or not - this will have to be implemented in conjeunction with user authentication -->
