
<script>
    let signupbutton = false;

    function Switch() {
        signin = !signin
    }

</script>

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
                <div class="signupbutton" >
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </div>
</form>


<style>
    * {
    padding: 0;
    margin: 0;
    font-family: 'Gothic A1', sans-serif;
    font-family: 'Hind', sans-serif;
    font-family: 'Nosifer', cursive;
    font-family: 'Press Start 2P', cursive;
    font-family: 'Raleway', sans-serif;
}


.card2 {
    height: 83vh;
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