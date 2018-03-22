<?php include_once "frontendHandler.php";?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Marvin Semmelroth</title>
    <link href="css/mycss.css" rel="stylesheet">
    <link rel="icon"  href="media/favicon.png" type="image/png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
    <script src="js/myjs.js"></script>
    <script src="database/databaseHandler.js"></script>
</head>
<?php
if(isset($_POST["name"])){
  $to = "marvin.semmelroth@gmail.com";
      $subject = $_POST['subject'];
      $message = $_POST["message"];
      $from = $_POST['email'];
      $headers = "From:" . $from;
      mail($to, $subject, $message, $headers);
          echo '<div class="contactSuccess">
              <strong>Danke!</strong> Die E-Mail wurde gesendet!:)</div>';
    }
 ?>
<body>
  <span class="slidedescription" id="des0">Home</span>
  <span class="slidedescription" id="des1">Projekte</span>
  <span class="slidedescription" id="des2">Über mich</span>
  <span class="slidedescription" id="des3">Kontakt</span>
  <div class="slider" id="slider">
    <div class="slide slideactive" id="slide0" onclick="changeSlide('0','down')" onmouseover="showSlideDescription('0')" onmouseout="hideSlideDescription('0')"></div>
    <div class="slideLine" id="slideline1" onclick="changeSlide('1','up')" onmouseover="showSlideDescription('1')" onmouseout="hideSlideDescription('1')"></div>
    <div class="slide" id="slide1" onclick="changeSlide('1','up')" onmouseover="showSlideDescription('1')" onmouseout="hideSlideDescription('1')"></div>
    <div class="slideLine" id="slideline2" onclick="changeSlide(2,'up')" onmouseover="showSlideDescription('2')" onmouseout="hideSlideDescription('2')"></div>
    <div class="slide" id="slide2" onclick="changeSlide(2,'up')" onmouseover="showSlideDescription('2')" onmouseout="hideSlideDescription('2')"></div>
    <div class="slideLine" id="slideline3" onclick="changeSlide(3,'up')" onmouseover="showSlideDescription('3')" onmouseout="hideSlideDescription('3')"></div>
    <div class="slide" id="slide3" onclick="changeSlide(3,'up')" onmouseover="showSlideDescription('3')" onmouseout="hideSlideDescription('3')"></div>
  </div>
  <img id="logo" class="logo" src="media/logo.svg"/>
  <div id="loading">
    <div class="logoContainer">
      <img class="loadingLogo" src="media/logo.svg">
      <h2>Loading</h2>
    </div>
  </div>
  <div id="particles-js" ></div>
  <div class="welcomeContainer" id="container0" onscroll="alert('hallo')" >
    <h1 class="headline">Ich bin ein <span id="welcomeText"></span></h1>
  </div>
  <div class="projectsContainer" id="container1" role="projects">
    <h1 id="projHeadline">Projekte</h1>
      <?php
        createProjectList();
      ?>

  </div>
  <div class="aboutContainer" id="container2" role="about">
      <h1>Über mich</h1>
      <div class="aboutContent">
          <div class="photoContainer">
          <img class="aboutFoto" src="media/profilfoto.jpg">
          </div>
          <div class="textContainer">
          <p class="aboutText"><strong>Hey, ich bin Marvin!</strong><br> Ich bin ein ein Medieninformatikstudent aus Mittelhessen.
             Schon früh habe ich meine Begeisterung für alles rund um den Computer gefunden. Dabei waren Computerspiele und Videoproduktion ein Hobby,
              bis ich mich dazu entschieden habe auch meine berufliche Laufbahn in diese Richtung zu lenken. Nun ist es nicht nur mehr ein Hobby
              als auch eine Leidenschaft.<br><br>
              Im Studium habe ich meine Begeiserung für Webseiten gefunden, da dies viele meiner Interessen verbindet -
              Gestaltung, Programmierung, Fotografie, Videoproduktion und vor allem <strong> kreativ sein. </strong>
          </p>
      </div>
      </div>
    </div>
    <div class="contactContainer"  id="container3" role="contact">
      <h1>Kontakt</h1><br>
      <form method="post" name="contactForm">
        <div class="contactContent">
          <input type="text" name="subject" placeholder="Betreff" required><br>
          <input type="email"name="email" placeholder="Email Adresse" required><br>
          <textarea type type="text" rows="5" name="message" placeholder="Meld' dich bei mir" required></textarea>
          <a class="contactButton"><button type="submit">Absenden</button></a>
          </div>
      </form>
    </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="js/particles.js"></script>
  <script src="js/app.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.typeit/4.3.0/typeit.min.js"></script>
  </body>
</html>
