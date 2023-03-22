

<!-- put login page in if statements, and forgot password page in the else statement
Search up conditionals in svelte
-->

<script lang="ts">

    import { DB } from '../db';

</script>

        <form action="">
            <div class="card">
                <div class="front">
                    <div class="login">
                        <h1>Log In</h1>
                    </div>
                    <div class="user">
                        <input required placeholder="Name" class="userfield" type="input">
                        <label class="form__label" for="name">User Name</label>
                    </div>
                    <div class="password">
                        <input required placeholder="Password" class="password__field" type="password">
                        <label class="password__label" for="name">Password</label>
                    </div>
                    <div class="remember">
                        <input type="checkbox" name="checkbox" id="checkbox">
                        <p>Remember me</p>

                    </div>

                    <div class="account">
                        <div class="signbutton">
                            <button class="login"> Log In</button>
                            <br>
                            <p id="or">or</p>
                            <br>
                            <a href='/signup' class="signin">Create Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>


<style>
* {
    font-family: 'Raleway', sans-serif;
}


/* this is the code for the card */
.card {
    height: 83vh;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
}

.remember input {
    width: 1.2rem;
    height: 1.2rem;
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
    /* transition: all .1s; */
}


.signin {
    background: transparent;
    font-size: 1.5rem;
    border: 0;
    color: black;
    text-decoration: none;
}

.login {
    background: none;
    font-size: 1.5rem;
    border: 0;
}

.signbutton button:hover,
.signin:hover {
    color: #6fc5ff;
    transition: all .1s;
}

</style>

