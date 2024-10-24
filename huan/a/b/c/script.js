function execCmd(command, value = null) {
    if (command === 'fontSize') {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('fontSize', false, 7);  // Setze Größe auf maximal
        const spans = document.getElementsByTagName("span");
        for (let i = 0; i < spans.length; i++) {
            if (spans[i].style.fontSize === "xxx-large") {
                spans[i].style.fontSize = value + "px";  // Setze die tatsächliche Größe
            }
        }
    } else {
        document.execCommand(command, false, value);
    }
}

// Erstelle ein neues Date-Objekt für das aktuelle Datum
const heute = new Date();

// Hole den Tag, den Monat und das Jahr
const tag = heute.getDate();
const jahr = heute.getFullYear();

// Erstelle ein Array mit den Monatsnamen
const monate = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"
];

// Hole den Monatsnamen aus dem Array
const monat = monate[heute.getMonth()];

// Setze das Datum im gewünschten Format zusammen
const datumString = `${tag}. ${monat} ${jahr}`;

async function submitForm() {
    const title = document.getElementById('title').innerHTML;
    const subtitle = document.getElementById('subtitle').innerHTML;
    const author = document.getElementById('author').innerHTML;
    const filename = document.getElementById('filename').value;
    const body = document.getElementById('body').innerHTML;
    const foother = document.getElementById('foother').innerHTML;
    const imageFile = document.getElementById('image').files[0];
    
    const fileContent = `<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">


<!-- Cookie Consent by FreePrivacyPolicy.com https://www.FreePrivacyPolicy.com -->
<script type="text/javascript" src="//www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js" charset="UTF-8"></script>
<script type="text/javascript" charset="UTF-8">
document.addEventListener('DOMContentLoaded', function () {
cookieconsent.run({"notice_banner_type":"interstitial","consent_type":"express","palette":"dark","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_name":"Cube Kingdom","website_privacy_policy_url":"https://www.cube-kingdom.de/privacy-policy.html"});
});
</script>

<!-- OneSignal -->
<script type="text/plain" data-cookie-consent="functionality" src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<!-- end of OneSignal-->

<noscript>Cookie Consent by <a href="https://www.freeprivacypolicy.com/">Free Privacy Policy Generator</a></noscript>
<!-- End Cookie Consent by FreePrivacyPolicy.com https://www.FreePrivacyPolicy.com -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${title}">
    <meta name="theme-color" content="#ffbb00">
    <meta name="author" content="${author}">

    <meta property="og:title" content="${title}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.cube-kingdom.de/news/${filename}.html">
    <meta property="og:image" content="https://www.cube-kingdom.de/storage/img/favicon1.ico">
    <meta property="og:description" content="${title}">
    <meta property="og:site_name" content="Cube Kingdom">
    <meta property="og:article:author:username" content="${author}">
    <meta property="og:article:published_time" content="${datumString}">
    <meta property="og:article:modified_time" content="${datumString}">
    <meta name="keywords" content="cube-kingdom, minecraft, communityserver">

    <!-- Website Title -->
    <title>${title} | Cube Kingdom</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="../storage/img/favicon1.ico">

    <!-- Scripts -->
    <script src="../../unpkg.com/aos%402.3.1/dist/aos.js" defer></script>
    <script src="../../cdn.jsdelivr.net/npm/%40splidejs/splide%40latest/dist/js/splide.min.js" defer></script>
    <script src="../../cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
    <script src="../assets/vendor/axios/axios.min.js" defer></script>
    <script src="../../cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer></script>
    <script src="../assets/js/script.js" defer></script>

    <!-- Page level scripts -->
    <script src="../assets/themes/revolution/js/components.js" defer></script>
    <script src="../assets/themes/revolution/js/script.js" defer></script>
    <script src="../assets/themes/revolution/js/fixedNavbar.js" defer></script>
        
    <!-- Fonts -->
    <link rel="stylesheet" href="../assets/vendor/bootstrap-icons/bootstrap-icons.css">

    <link href="https://fonts.bunny.net/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&amp;display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="../../cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" id="style1">
    <link rel="stylesheet" href="../../cdn.jsdelivr.net/npm/%40splidejs/splide%40latest/dist/css/splide.min.css">
    <link href="../../unpkg.com/aos%402.3.1/dist/aos.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/themes/revolution/css/components.css">
    <link rel="stylesheet" href="../assets/themes/revolution/css/animations.css">
    <link rel="stylesheet" href="../assets/themes/revolution/css/style.css">

    <style>

.navbar-item.style1 {
            color: white;                /* Textfarbe für style1 */
            padding: 10px 20px;         /* Innenabstand */
            text-decoration: none;       /* Unterstreichung entfernen */
            display: inline-block;       /* Inline-Block, damit Padding funktioniert */
        }

        /* Styles für Buttons 5-8 (style2) */
        .navbar-item.style2 {
            color: white;                 /* Textfarbe für style2 */
            padding: 10px 20px;          /* Innenabstand */
            text-decoration: none;        /* Unterstreichung entfernen */
            display: inline-block;        /* Inline-Block, damit Padding funktioniert */
        }



         :root {
            --theme-font-family: 'Roboto', sans-serif;
            --theme-body-color: #ffffff;
            --theme-body-background: #262626;
            --bs-card-border-width: 0px;
            /* --theme-navbar-background: #101010 !important; */
            --theme-navbar-background: #262626 !important;
            --theme-button-color: #ffffff;
            --theme-button-background: #ffbb00;
            --theme-button-second-color: #000000;
            --theme-button-second-background: #ffffff;
            --theme-button-second-background-2: #dfdfdf;
            --theme-dropdown-background: #262626;
        }
p {
    hyphens: auto;
    word-break: normal;
    overflow-wrap: break-word;
}
    </style>
</head>

<body data-bs-theme="dark">


        <script type="text/javascript">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'de'}, 'google_translate_element');
          }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      
    <div id="navbarContainer" class="style-1 container flex-1">
        <div class="navbar-left">
            <a href="javascript:void(0)" id="navbarMobileOpen" class=" text-white mr-3">
                <i class="bi-list"></i>
            </a>
            <a href="../index.html">
                <img class="navbar-logo" src="../storage/img/logo-round-bg.png" alt="">
            </a>
            <a class="navbar-item " href="../index.html">
                <i class="bi bi-house"></i> Startseite
            </a>
            <a class="navbar-item " href="../projekte.html">
                <i class="bi bi-boxes"></i> Projekte
            </a>
            <a class="navbar-item " href="../news.html">
                <i class="bi bi-journals"></i> Blog
            </a>
            <a class="navbar-item " href="../faq.html">
                <i class="bi bi-patch-question"></i> FAQ
            </a>
            <!--
            <a class="navbar-item " href="../wartung.html">
                <i class="bi bi-fire"></i> Ränge
            </a>
          -->
            <a class="navbar-item " href="../wiki.html">
                <i class="bi bi-info-circle"></i> Regeln &amp; Wiki
            </a>
            <a class="navbar-item " href="../support.html">
                <i class="bi bi-person-raised-hand"></i> Support
            </a>
            <a class="navbar-item " href="../upload/event-forum.html">
                <i class="fas fa-gamepad icon"></i> Event Vorschläge
            </a>
            <a class="navbar-item " href="../pluginv/index.html">
                <i class="fas fa-plug icon"></i> Plugin Vorschläge
            </a>
        </div>
        <div class="navbar-right">
            <a href="https://dc.cube-kingdom.de" data-text="Discord" class="navbar-btn btn-theme">
                    Discord
                </a>
        <!--
            <a href="../wartung.html" data-text="Registrieren" class="navbar-btn btn-theme-second">
                        Registrieren
                    </a>
        -->
        </div>
    </div>
    <div id="navbarMobileContainer">
        <div class="text-center">
            <a class="d-block h4 text-white" href="javascript:void(0)" id="navbarMobileClose">
                <i class="bi-x-lg"></i>
            </a>
        </div>
        <h3 class="navbar-title">Menu</h3>
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../index.html">
            <i class="bi bi-house"></i> Startseite
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../projekte.html">
            <i class="bi bi-boxes"></i> Projekte
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../news.html">
            <i class="bi bi-journals"></i> Blog
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../faq.html">
            <i class="bi bi-patch-question"></i> FAQ
        </a>
        <!--
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../wartung.html">
            <i class="bi bi-fire"></i> Ränge
        </a>
      -->
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../wiki.html">
            <i class="bi bi-info-circle"></i> Regeln &amp; Wiki
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style1" href="../support.html">
            <i class="bi bi-person-raised-hand"></i> Support
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style2" href="../upload/event-forum.html">
            <i class="fas fa-gamepad icon"></i> Event Vorschläge
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block style2" href="../pluginv/index.html">
            <i class="fas fa-plug icon"></i> Plugin Vorschläge
        </a>


    </div>
    <div id="bannerHeader" scroll-to-end style="position:relative; padding-top:100px;  background: linear-gradient(90deg, rgba(36, 36, 36, 0.685) 0%, rgba(0, 0, 0, 0.322) 100%),url('../storage/img/bg.png') center / cover no-repeat">
        <img src="../storage/img/logo-round-bg.png" style="width:100px;" alt="">
        <h1 class="header-text">
            ${title} </h1>
        <div class="header-divider">
            <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg) translateY(-3px);" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#262626" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path fill="#262626" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path fill="#262626" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
        </div>
    </div>

    <div class="container">
        <div>
            <div id="status-message"></div>
        </div>
        <div id="post" class="container">

            <div class="card shadow-sm mb-4">
                <div class="card-body">
                    <h1 class="card-title mt-2 font-weight-bold text-center">${title}</h1><br>
                        <div style="text-align: center;">
                            <img src="../storage/posts/${imageFile.name}"><br>
                        </div>
                    <div class="card-text user-html-content">
                        <p style="text-align: center; font-size: 20pt;"><br><span style="font-size: 14pt;">${body}</span><br><br>
                        <br><br><span style="color: #0a54f3;">${foother}</span>
                        </p>
                    </div>
                    <hr>

                    <div class="d-flex justify-content-between align-items-center">

                        <span class="ms-3 ms-md-0">${datumString} von ${author}</span>
                    </div>
                </div>
            </div>

        <!-- Delete confirm modal -->
        <div class="modal fade" id="confirmDeleteModal" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="confirmDeleteLabel">messages.comments.delete-title</h2>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Schließen">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">messages.comments.delete-description</div>
                    <div class="modal-footer">
                        <button class="btn-theme-second" data-text="Abbrechen" type="button" data-dismiss="modal">Abbrechen</button>

                        <form id="confirmDeleteForm" method="POST">
                            <input type="hidden" name="_method" value="DELETE"> <input type="hidden" name="_token" value="0OxEs9J6a5c8srOwqCuR6y2AJTYcECttDc32cxRO" autocomplete="off">
                            <button class="btn btn-outline-danger" type="submit">Löschen</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footerStats" style="position:relative;  background: linear-gradient(90deg, rgba(36, 36, 36, 0.685) 0%, rgba(0, 0, 0, 0.322) 100%),url('../storage/img/bg.png') center / cover no-repeat">

        <div class="content-top-divider">
            <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg) translateY(-3px);" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#262626" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path fill="#262626" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path fill="#262626" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
        </div>

        <div style="height:50px;"></div>

        <div class="content-bottom-divider">
            <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg) translateY(-3px);" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#262626" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path fill="#262626" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path fill="#262626" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
    </svg>
        </div>
    </div>
    <footer>
        <div id="bigFooter">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="footer-title">Cube Kingdom</h1>
                        <p class="footer-text">
                            Cube Kingdom ist ein deutscher Minecraft Community-Server, der verschiedenste Projekte anbietet. Von Vanilla-Servern zu PvP-Projekten ist alles dabei.
                        </p>
                        <p class="footer-text">www.cube-kingdom.de wurde <span id="visitorCount">0</span> Mal besucht.</p>
                       <script src="https://www.cube-kingdom.de/counter/counter.js">
                                       </script>
                    </div>
                    <div class="col-md-3">
                        <h5 class="section-title">Hilfreiche Links</h5>
                        <div class="socials mt-3">
                            <div>
                                <a class="socials-item" target="_blank" href="https://www.cube-kingdom.de/impressum.html"><i
                                            class="bi-link-45deg"></i> Impressum</a>
                            </div>
                            <div>
                                <a class="socials-item" target="_blank" href="https://www.cube-kingdom.de/privacy-policy.html"><i
                                            class="bi-link-45deg"></i> Datenschutzbestimmungen</a>
                            </div>
                            <div>
                                <a class="socials-item" target="_blank" href="https://www.cube-kingdom.de/disclaimer.html"><i
                                            class="bi-link-45deg"></i> Disclaimer</a>
                            </div>
                            <div>
                                <a class="socials-item" target="_blank" href="https://www.cube-kingdom.de/acceptable-use.html"><i
                                            class="bi-link-45deg"></i> akzeptable Nutzung</a>
                            </div>
                            <div>
                                <a class="socials-item" target="_blank" href="https://www.cube-kingdom.de/terms.html"><i
                                            class="bi-link-45deg"></i> Terms & Conditions</a>
                            </div>
                            <div>
                                <!-- Below is the link that users can use to open Preferences Center to change their preferences. Do not modify the ID parameter. Place it where appropriate, style it as needed. -->
                                    <a class="socials-item" href="#" id="open_preferences_center"><i
                                    class="bi-link-45deg"></i> Update cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </footer>
    <div id="footer" class="d-md-flex justify-content-between container">
        <div>

            Copyright © 2024 Cube Kingdom
        </div>
            <!-- Google Translate Widget -->
            <div id="google_translate_element"></div>
    </div>
    <script>
        function copyIp(el) {
            // Retrieve the server IP from the data-ip attribute of the clicked button
            var serverIp = el.getAttribute('data-ip');
            if (!serverIp) {
                console.error('Server IP not found.');
                return;
            }

            // Create a temporary input element to select the IP text
            var tempInput = document.createElement("input");
            tempInput.style = "position: absolute; left: -1000px; top: -1000px";
            tempInput.value = serverIp;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            // Provide feedback to the user
            $(el).children('.after').html('Ip Adresse kopiert !');
            setTimeout(function() {
                $(el).children('.after').html('<i class="bi-link-45deg"></i> Klicken zum Kopieren <i class="bi-link-45deg"></i>');
            }, 2000);
        }
    </script>
</body>

<!-- Mirrored from Cube Kingdom.de/news/stoneblock3-start by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 27 Jul 2024 22:31:05 GMT -->

</html>
`;

    document.getElementById('fileContent').value = fileContent;

    // Submit the form to PHP with the HTML content and the image file
    const formData = new FormData(document.getElementById('blogForm'));
    const response = await fetch('create_file.php', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.text();
    alert(result);
}
