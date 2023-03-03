header
has links to stuff: 
<a href="/">Main</a>
<!-- This section will need some logic to check if the user is logged in or not - this will have to be implemented in conjeunction with user authentication -->
<a href="/login">Login</a>
<a href="/signup">Signup</a>
<a href="/portfolio">Portfolio</a>
<a href="/team">Team</a>
<div class="header">
    <div class="header-left">
        <img src="logo.png" height="50px" width="auto" alt="quant logo">
    </div>

    <div class="header-right">
        <div class="container-search">
            <div class="topnav">
                <input type="text" placeholder="Search..">
            </div>
        </div>

        <div class="row">
            <div class="col-6 col-sm-4">User Profile</div>
            <div class="col-6 col-sm-4">Portfolio</div>
            <div class="col-6 col-sm-4">Settings</div>
        </div>
    </div>
 </div>

 <style>
        .header {
        background: #88b3eb;
        display: flex;
        padding: 20px;
        border-bottom: 1px solid #e9e9e9;
    }

    .header-left {
        flex-grow: 1;
        display: flex;
        gap: 10px;
        text-align: left;
    }

    .topnav {
        overflow: hidden;
        background-color: #e9e9e9;
    }

    .header-right {
        color: black;
        text-align: right;
    }

    .container-search {
        padding-top: 4px;
        display: flex;
        justify-content: center;
        padding-bottom: 4px;
    }

    a {
        color: gray;
        text-decoration: none;
    }
 </style>