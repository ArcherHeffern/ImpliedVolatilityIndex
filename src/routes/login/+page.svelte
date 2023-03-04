<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous">
</svelte:head>

<!-- put login page in if statements, and forgot password page in the else statement
Search up conditionals in svelte
-->

<script>
    let forgotPassword = false;

    function togglePassword() {
        forgotPassword = !forgotPassword
    }
</script>
{#if !forgotPassword}
<body>
    <header>
        <div class="moon">
            <button><i class="bi bi-moon-stars"></i></button>
        </div>
    </header>
    <main>
        <div class="card">
            <div class="innerbox">
                <div class="front">
                    <h1>Log In</h1>
                    <div class="user">
                        <input required="" placeholder="Name" class="userfield" type="input">
                        <label class="form__label" for="name">User Name</label>
                    </div>
                    <div class="password">
                        <input required="" placeholder="Password" class="password__field" type="password">
                        <label class="password__label" for="name">Password</label>
                    </div>
                    <div class="forgotpass">
                        <a on:click|preventDefault={togglePassword}><span>Forgot Password?</span></a>
                    </div>
                    <div class="signinButton">
                        <button> Log In</button>
                    </div>

                    <div class="account">
                        <p>Don't have an account?</p>
                        <button class="signin" onclick="openSignup()">Sign Up</button>
                        <br>
                        <p class="or">or</p>
                        <br>
                        <button class="google_signin">
                            <span><i class="bi bi-google"></i></span> Login with Google
                        </button>
                    </div>
                </div>
                <div class="back">
                    <p class="nameofpage">Sign up</p>
                    <div class="name">
                        <label for="username">Username:</label>
                        <br>
                        <input type="text" id="username" name="username"><br>
                    </div>

                    <div class="email">
                        <label for="Email">Email:</label>
                        <br>
                        <input type="email" name="email" id="Email">
                    </div>

                    <div class="enterpassword">
                        <label for="password">Password:</label>
                        <br>
                        <input type="password" name="password" id="password">
                    </div>

                    <div class="conformpassword">
                        <label for="password">Confirm Password:</label>
                        <br>
                        <input type="password" name="password" id="conformpassword">
                    </div>

                    <div class="signupbutton">
                        <button>
                            Sign Up
                        </button>
                    </div>

                    <div class="accountAlready">
                        <p class="a">Already have an account?</p>
                        <button class="login" onclick="openLogin()">Log In</button>
                        <br>
                        <p class="or">or</p>
                        <br>
                        <button class="google_signUp">
                            <span><i class="bi bi-google"></i></span> Signup with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
{:else}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="forgotpass.css">
    <title>Forgot Password</title>
</head>

<body>
    <main>
        <div class="container">
            <div class="card">
                <div class="enterusername">
                    <label class="name" for="Username">Username:</label>
                    <br>
                    <input class="username" type="username" name="username" id="username" required>
                </div>
                <div><button class="button"><a href="http://127.0.0.1:5500/loginpage/index.html">submit</a>
                </button>
              </div>
            </div>
        </div>
    </main>
</body>
</html>


<a on:click|preventDefault={togglePassword}>Go back</a>

{/if}

<style>
* {
    padding: 0;
    border: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

:root {
    --background-color: linear-gradient(123deg, #0fb0b6, #1f307a, #8b3e0f);

}

body {
    background: var(--background-color);
    background-size: 600% 600%;
    -webkit-animation: AnimationName 15s ease infinite;
    -moz-animation: AnimationName 15s ease infinite;
    animation: AnimationName 15s ease infinite;
}

.dark-theme {
    --background-color: #000;

}

/* this is the for darkmode */
.moon {
    /* font-size: 30px; */
    position: absolute;
    top: 1rem;
    left: 80rem;
    color: white;
}

.moon button {
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 3rem;

}


.moon button:hover {
    background-color: rgb(10, 98, 133);
    color: black;
    /* box-shadow: 0 0 20px #01010150; */
}

.moon button:active {
    background-color: transparent;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
}

/* this is the code for the card */
.card {
    width: 400px;
    height: 550px;
    margin: 7em auto;
    border-radius: 20px;
    background: #8830d5;
    perspective: 1000px;


}

.innerbox {
    position: relative;
    width: 100%;
    height: 100%;
    /* this is controls thje back or fornt */
    /* transform: rotateY(-180deg); */
    transform-style: preserve-3d;

}

.front,
.back {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background-position: center;
    background-size: cover;
    backface-visibility: hidden;
}

.back {
    transform: rotateY(180deg);
}

.front h1 {
    text-align: center;
    color: black;
    text-decoration: underline white;
}

/* this code contian user input */
.user {
    position: relative;
    padding: 1rem 0 0 1rem;
    /* the margin below conntols the positon */
    margin: .5rem 0 1rem 3rem;
    width: 200%;
    max-width: 250px;
}

.userfield {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #111111;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.userfield::placeholder {
    color: transparent;
}

.userfield:placeholder-shown~.form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
}

.userfield:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.userfield:focus~.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.userfield:required,
.userfield:invalid {
    box-shadow: none;
}

/* this is the end for the input field */


/* the code below is for the password form */
.password {
    position: relative;
    padding: 20px 0 0;
    /* margin-top: 10px; */
    margin: 0 0 2rem 4rem;
    width: 200%;
    max-width: 250px;
}

.password__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #111111;
    outline: 0;
    font-size: 17px;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.password__field::placeholder {
    color: transparent;
}

.password__field:placeholder-shown~.password__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
}

.password__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.password__field:focus~.password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.password__field:required,
.password__field:invalid {
    box-shadow: none;
}

/* end of password form */

/* forgot password */
.forgotpass {
    text-align: center;
}

.forgotpass a {
    text-decoration: none;
    color: white;
    margin: 0 0 1rem 0;
}

.forgotpass a:hover {
    color: rgb(224, 18, 18);
}



/*  this is the log in button*/
.signinButton button {
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #2ba8fb;
    color: #ffffff;
    margin: 1rem 1rem 0 8rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
}

button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
}

/*  this is the code for the class */
.account p {
    text-align: center;
    margin: 1rem 0 0 0;
    font-size: 20px;
}

/* this is the sign in button */

.signin {
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #2ba8fb;
    color: #ffffff;
    margin: 2rem 1rem 0 8rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
}

button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
}


.account .or {
    font-size: 30px;
}

/* this is the button for log in with goodle */


.google_signin {
    padding: 15px 40px 15px 40px;
    border-radius: 50px;
    background-color: #2ba8fb;
    color: #ffffff;
    margin: 0 0 0 6.5rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
}

button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
}

.google_signin span {
    color: black;
}



/* this is for the back side of the card */
.back {
    border-radius: 20px;
    background: #8830d5;
}

.nameofpage {
    text-align: center;
    font-size: 30px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-decoration: underline snow;
}

.name label {
    /* text-align: center; */
    font-size: 1rem;
    margin-top: 1rem;
    margin: .5rem 0 0 3rem;
}

.name input {
    width: 200px;
    height: 25px;
    border-radius: 15px;
    text-align: center;
    margin: .5rem 0 1rem 2rem;
}

.email label {
    font-size: 1rem;
    margin-top: 1rem;
    margin: 1rem 0 0 3rem;
}

.email input {
    width: 200px;
    height: 25px;
    border-radius: 15px;
    text-align: center;
    margin: .5rem 0 1rem 2rem;
}

.enterpassword label {
    font-size: 1rem;
    margin-top: 1rem;
    margin: 1rem 0 0 3rem;
}

.enterpassword input {
    width: 200px;
    height: 25px;
    border-radius: 15px;
    text-align: center;
    margin: .5rem 0 1rem 2rem;
}

.conformpassword label {
    font-size: 1rem;
    margin-top: 1rem;
    margin: 1rem 0 0 3rem;
}

.conformpassword input {
    width: 200px;
    height: 25px;
    border-radius: 15px;
    text-align: center;
    margin: .5rem 0 .5rem 2rem;
}

.signupbutton button {
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #0896f5;
    color: white;
    margin: .5rem 1rem 0 8rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

.accountAlready .a {
    text-align: center;
    margin-bottom: .5rem;
}

.accountAlready .login {
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #0896f5;
    color: white;
    margin: 0 1rem 0 8rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

.accountAlready .or {
    text-align: center;
    margin-bottom: 0;
}

.accountAlready .google_signUp {
    padding: 10px 50px;
    border-radius: 50px;
    background-color: #0896f5;
    margin: 0 0 0 6rem;
    font-weight: Bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}





/* below this, this is for the background */
@-webkit-keyframes AnimationName {
    0% {
        background-position: 35% 0%
    }

    50% {
        background-position: 66% 100%
    }

    100% {
        background-position: 35% 0%
    }
}

@-moz-keyframes AnimationName {
    0% {
        background-position: 35% 0%
    }

    50% {
        background-position: 66% 100%
    }

    100% {
        background-position: 35% 0%
    }
}

@keyframes AnimationName {
    0% {
        background-position: 35% 0%
    }

    50% {
        background-position: 66% 100%
    }

    100% {
        background-position: 35% 0%
    }
}

</style>


