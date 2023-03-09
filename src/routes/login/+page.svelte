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
    <main>
        <div class="card">
            <div class="innerbox">
                <div class="front">
                    <div class="user">
                        <input required="" placeholder="Name" class="userfield" type="input">
                        <label class="form__label" for="name">User Name</label>
                    </div>
                    <div class="password">
                        <input required="" placeholder="Password" class="password__field" type="password">
                        <label class="password__label" for="name">Password</label>
                    </div>
                    <div class="remember">
                        <p><span class="input"><input type="checkbox" name="checkbox" id="checkboc"></span>Remember me
                        </p>

                    </div>

                    <div class="account">
                        <div class="signbutton">
                            <button class="signin">Create Account</button>
                            <br>
                            <p id="or">or</p>
                            <br>
                            <button class="login"> Log In</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </main>
</body>
{:else}
<body>
    <div class="container2">
        <div class="back">
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
</body>


<!-- <a on:click|preventDefault={togglePassword}>Go back</a> -->

{/if}

<style>
    
</style>
