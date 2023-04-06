<script>
</script>
<!DOCTYPE html>
<!-- svelte-ignore a11y-missing-attribute -->
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    
body {
 font-family: Arial, Helvetica, sans-serif;
 margin: 0;
}


html {
 box-sizing: border-box;
}
*, *:before, *:after {
 box-sizing: inherit;
}
.row::after {
 content: "";
 clear: both;
 display: table;
}
.column {
 width: 50%;
 float: left;
 padding: 0 16px;
 box-sizing: border-box;
 margin-top: -40px;
}
@media screen and (max-width: 768px) {
 .column {
   width: 100%;
   float: none;
 }
}
.card {
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 margin: 64px;
 margin-bottom: 90px;
 width: 80%;
}


@media screen and (max-width: 768px) {
    .card {
        width: 100%;
        margin: 0 auto;
   }
}


.about-section {
 text-align: left;
 color: black;
 font-weight: bold;
 margin-top: 5%;
 margin-left: 5%;
}
.section-divider {
 border-bottom: 2px solid black;
 text-align: center;
 margin: 32px 5% 24px 5%;
 width: 90%;
}
.container {
   padding: 16px 16px;
   width: calc(100% - 58px); /* subtracting the width of the image */
}


.circle-img {
   float: right;
   margin-left: 8px;
   margin-right: -45px;
}
.title {
 color: grey;
 margin-bottom: 12px;
}
.img-container {
 width: 50px;
 height: 50px;
 border-radius: 50%;
 overflow: hidden;
 margin-right: 8px;
}
@media screen and (max-width: 650px) {
 .column {
   width: 100%;
   display: block;
 }
}


</style>
</head>
<body>
   <div class="about-section">
       <h1>Director</h1>
   </div>
     <div class="section-divider"></div>
   
       <div class="column">
         <div class="card">
           <div class="container">
               <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
             <h2>Jane Doe</h2>
             <p class="title">CEO & Founder</p>
             <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University. Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
             <p>jane@example.com</p>
           </div>
         </div>
       </div>
   
       <div class="column">
         <div class="card">
           <div class="container">
               <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
             <h2>John Doe</h2>
             <p class="title">Director</p>
             <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University. Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
             <p>john@example.com</p>
           </div>
         </div>
       </div>
     
       <div class="about-section">
           <h1>Web Engineer Team</h1>
       </div>
         <div class="section-divider"></div>
       
           <div class="column">
             <div class="card">
               <div class="container">
                   <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
                 <h2>Jane Doe</h2>
                 <p class="title">CEO & Founder</p>
                 <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
                 <p>jane@example.com</p>
               </div>
             </div>
           </div>
       
           <div class="column">
             <div class="card">
               <div class="container">
                   <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
                 <h2>John Doe</h2>
                 <p class="title">Director</p>
                 <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
                 <p>john@example.com</p>
               </div>
             </div>
           </div>
   
       <div class="about-section">
           <h1>Math Team</h1>
       </div>
       <div class="section-divider"></div>


       <div class="column">
         <div class="card">
           <div class="container">
               <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
             <h2>John Doe</h2>
             <p class="title">Designer</p>
             <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
             <p>john@example.com</p>
           </div>
         </div>
       </div>
   
       <div class="column">
           <div class="card">
           <div class="container">
               <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
           <h2>John Doe</h2>
           <p class="title">Designer</p>
           <p>Hello, my name is Daniel and I love volunteering. I am currently enrolled as a student studying Computer Science at Brandeis University.</p>
           <p>john@example.com</p>
       </div>
       </div>
   </div>
   <div class="about-section">
       <h1>Members</h1>
   </div>
   <div class="section-divider"></div>


   <div class="column">
       <div class="card">
       <!-- <img src="/w3images/team3.jpg" alt="John" style="width:100%"> -->
       <div class="container">
           <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
           <h2>John Doe</h2>
           <p class="title">Designer</p>
           <p>Some text that describes me.</p>
           <p>john@example.com</p>
       </div>
       </div>
   </div>
   <div class="column">
       <div class="card">
       <!-- <img src="/w3images/team3.jpg" alt="John" style="width:100%"> -->
       <div class="container">
           <img class="circle-img" src="https://via.placeholder.com/50" alt="Jane Doe">
           <h2>John Doe</h2>
           <p class="title">Designer</p>
           <p>Some text that describes me.</p>
           <p>john@example.com</p>
       </div>
       </div>
   </div>
</body>
</html>



