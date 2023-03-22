<form action="/">
        <div class="back">
            <div class="signup">
                <h1>Sign up</h1>
            </div>
            <div class="name input-field">
                <input required="" placeholder="Name" class="my_field" type="input">
                <label class="my_label" for="name">Name</label>
            </div>

            <div class="new_email input-field">
                <input required="" placeholder="Username" class="my_field" type="input">
                <label class="my_label" for="Email">Email</label>
            </div>

            <div class="enterpassword input-field">
                <input required="" placeholder="Password" class="my_field" type="password">
                <label class="my_label" for="name">Password</label>
            </div>

            <div class="confirmpassword input-field">
                <input required="" placeholder="confirm_Password" class="my_field" type="password">
                <label class="my_label" for="name">Confirm Password</label>
            </div>
            <div class="signupbuttondiv input-field">
                <div class="signupbutton" >
                    <button>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
</form>


<style>
    * {
    font-family: 'Raleway', sans-serif;
}

.back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
}

.input-field {
    min-height: 50px;
    position: relative;
    padding-top: 20px;
    margin: 10px 0 2rem 20px;
}

.signup {
    text-align: center;
}

.my_field {
    position: relative;
    width: 300px;   /* Change width of the input fields */
    border: none;
    border-bottom: 2px solid black;
    outline: 0;
    font-size: 17px;
    color: black;
    padding: 7px 0;
    transition: border-color 0.2s;
}

.my_field::placeholder {
     visibility: hidden;
}

.my_field:placeholder-shown~.my_label {
    font-size: 17px;
    cursor: text;
    top: 20px;
}

.my_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: black;
    pointer-events: none;
}

.my_field:focus {
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
}

.my_field:focus~.my_label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
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
</style>