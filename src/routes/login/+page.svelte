<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
        integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous">
</svelte:head>

<!-- put login page in if statements, and forgot password page in the else statement
Search up conditionals in svelte
-->

<script>
    let signin = false;

    function toggleflip() {
        signin = !signin
    }

</script>
{#if !signin}

        <!-- add a form tag -->
        <form action="">
            <div class="card">
                <div class="front">
                    <div class="login">
                        <h1>Log In</h1>
                    </div>
                    <div class="user">
                        <input required="" placeholder="Name" class="userfield" type="input">
                        <label class="form__label" for="name">User Name</label>
                    </div>
                    <div class="password">
                        <input required="" placeholder="Password" class="password__field" type="password">
                        <label class="password__label" for="name">Password</label>
                    </div>
                    <div class="remember">
                        <p><span class="input"><input type="checkbox" name="checkbox" id="checkboc"></span>Remember
                            me
                        </p>

                    </div>

                    <div class="account">
                        <div class="signbutton">
                            <button class="login"> Log In</button>
                            <br>
                            <p id="or">or</p>
                            <br>
                            <button class="signin" on:click={toggleflip}>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

{:else}
<form action="form">
    <div class="card2">
        <div class="back">
            <div class="signup">
                <h1>Sign up</h1>
            </div>
            <div class="name">
                <input required="" placeholder="Name" class="name_field" type="input">
                <label class="form2__label" for="name">Name</label>
            </div>

            <div class="new_email">
                <input required="" placeholder="Username" class="email_field" type="input">
                <label class="email2_label" for="Email">Email</label>
            </div>

            <div class="enterpassword">
                <input required="" placeholder="Password" class="new_password__field" type="password">
                <label class="New_password__label" for="name">Password</label>
            </div>

            <div class="confirmpassword">
                <input required="" placeholder="confirm_Password" class="confirm_password__field" type="password">
                <label class="confirm_password__label" for="name">Confirm Password</label>
            </div>
            <div class="signupbuttondiv">
                <div class="signupbutton">
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>

{/if}


<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Gothic A1', sans-serif;
    font-family: 'Hind', sans-serif;
    font-family: 'Nosifer', cursive;
    font-family: 'Press Start 2P', cursive;
    font-family: 'Raleway', sans-serif;
}


/* this is the code for the card */
.card {
    height: 81vh;
    display: flex;
}

.front {
    width: 400px;
    height: 450px;
    margin: auto;
    border-radius: 20px;
    background: #ffffff;
}

/* this code contian user input */
.login {
    text-align: center;
}

.user {
    position: relative;
    padding: 1rem 0 0 1rem;
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
    color: rgb(0, 0, 0);
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
    color: #0a0a0a;
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
    color: rgb(0, 0, 0);
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
    color: #090707;
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

/*  this is the start for remember me*/

.remember {
    text-align: center;
    margin: 0 0 2rem 0;
}

.remember input {
    width: 1.2rem;
    height: 1.2rem;
}

.remember span {
    color: yellow;
}


.account {
    display: flex;
    align-items: center;
    justify-content: center;



}

.account .signbutton {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.signin {
    background: transparent;
    font-size: 1.5rem;
    border: 0;
}


.login {
    background: none;
    font-size: 1.5rem;
    border: 0;
}

.signbutton button:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px #6fc5ff50;
}

.signbutton button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
}

/* /\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */
/* start of the sign-up page */
/* \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */

.card2 {
    height: 81vh;
    display: flex;
}

.back {
    width: 300px;
    height: 450px;
    margin: auto;
    border-radius: 20px;
    background: #ffffff;
}

.signup {
    text-align: center;
}

/* start of the name input */
.name {
    position: relative;
    padding: 20px 0 0;
    margin: 20px 0 2rem 20px;
    margin-top: 10px;
    width: 180%;
    max-width: 180px;
}

.name_field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #000000;
    outline: 0;
    font-size: 17px;
    color: rgb(0, 0, 0);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.name_field::placeholder {
    color: transparent;
}

.name_field:placeholder-shown~.form2__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.form2__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #000000;
    pointer-events: none;
}

.name_field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.name_field:focus~.form2__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.name_field:required,
.name_field:invalid {
    box-shadow: none;
}

/* end of tthe name input */

/* start of email input */

.new_email {
    position: relative;
    padding: 20px 0 0;
    margin: 20px 0 2rem 20px;
    margin-top: 10px;
    width: 180%;
    max-width: 180px;
}

.email_field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #000000;
    outline: 0;
    font-size: 17px;
    color: rgb(0, 0, 0);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.email_field::placeholder {
    color: transparent;
}

.email_field:placeholder-shown~.email2_label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.email2_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #000000;
    pointer-events: none;
}

.email_field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.email_field:focus~.email2_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.email_field:required,
.email_field:invalid {
    box-shadow: none;
}

/* end of Email input */


/* start of enter password */

.enterpassword {
    position: relative;
    padding: 20px 0 0;
    margin: 20px 0 2rem 20px;
    margin-top: 10px;
    width: 180%;
    max-width: 180px;
}

.new_password__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #000000;
    outline: 0;
    font-size: 17px;
    color: rgb(0, 0, 0);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.new_password__field::placeholder {
    color: transparent;
}

.new_password__field:placeholder-shown~.New_password__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.New_password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #000000;
    pointer-events: none;
}

.new_password__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.new_password__field:focus~.New_password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.new_password__field:required,
.new_password__field:invalid {
    box-shadow: none;
}

/* end of enter password */

/* the start of confirm password */

.confirmpassword {
    position: relative;
    padding: 20px 0 0;
    margin: 20px 0 2rem 20px;
    margin-top: 10px;
    width: 180%;
    max-width: 180px;
}

.confirm_password__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #000000;
    outline: 0;
    font-size: 17px;
    color: rgb(0, 0, 0);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}

.confirm_password__field::placeholder {
    color: transparent;
}

.confirm_password__field:placeholder-shown~.confirm_password__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.confirm_password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #000000;
    pointer-events: none;
}

.confirm_password__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.confirm_password__field:focus~.confirm_password__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
}

/* reset input */
.confirm_password__field:required,
.confirm_password__field:invalid {
    box-shadow: none;
}

/* end of confirm password */

/* start of the start button */

.signupbuttondiv {
    display: flex;
    justify-content: center;
}

.signupbutton button {
    width: 5.5rem;
    height: 2rem;
    background-color: rgb(154, 192, 225);
    border-radius: 3rem;
    border: none;
}

.signupbutton button:hover {
    background-color: #9cceef;
    box-shadow: 0 0 20px #6fc5ff50;
}

.signupbutton button:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
}
</style>

