<!DOCTYPE html>
<html lang="de">

<head>
    
		<meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Cube Kingdom ist ein deutschen Minecraft Community Server, der jeden willkommen heißt!">
    <meta name="theme-color" content="#ffbb00">
    <meta name="author" content="PlsReload9383">

    <meta property="og:title" content="Anmelden">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.cube-kingdom.de/user/login">
    <meta property="og:image" content="https://www.cube-kingdom.de/storage/img/favicon.png">
    <meta property="og:description" content="Cube Kingdom ist ein deutschen Minecraft Community Server, der jeden willkommen heißt!">
    <meta property="og:site_name" content="Cube Kingdom">
    <meta name="keywords" content="cube-kingdom, minecraft, communityserver, smp, smp-server, home, homepage">

    <!-- CSRF Token -->
    <?php
    //starting the session
    session_start();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    $csrf_token = $_SESSION['csrf_token'];
    ?>
    <meta name="csrf-token" content="<?php echo $csrf_token; ?>">

    <!-- Website Title -->
    <title>Anmelden | Cube Kingdom</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="../storage/img/favicon.png">

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
    <link rel="stylesheet" href="../../cdn.jsdelivr.net/npm/%40splidejs/splide%40latest/dist/css/splide.min.css">
    <link href="../../unpkg.com/aos%402.3.1/dist/aos.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/themes/revolution/css/components.css">
    <link rel="stylesheet" href="../assets/themes/revolution/css/animations.css">
    <link rel="stylesheet" href="../assets/themes/revolution/css/style.css">
    <style>
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
    </style>
</head>

<body data-bs-theme="dark">
    <div id="navbarContainer" class="style-1 container flex-1">
        <div class="navbar-left">
            <a href="javascript:void(0)" id="navbarMobileOpen" class=" text-white mr-3">
                <i class="bi-list"></i>
            </a>
            <a href="../index.php">
                <img class="navbar-logo" src="../storage/img/logo-round-bg.png" alt="">
            </a>
            <a class="navbar-item " href="../index.php">
                <i class="bi bi-house"></i> Startseite
            </a>
            <a class="navbar-item " href="../wartung.php">
                <i class="bi bi-boxes"></i> Projekte
            </a>
            <a class="navbar-item " href="../news.php">
                <i class="bi bi-journals"></i> Blog
            </a>
            <a class="navbar-item " href="../faq.php">
                <i class="bi bi-patch-question"></i> FAQ
            </a>
            <a class="navbar-item " href="../wartung.php">
                <i class="bi bi-fire"></i> Ränge
            </a>
            <a class="navbar-item " href="../wiki.php">
                <i class="bi bi-info-circle"></i> Regeln &amp; Wiki
            </a>
            <a class="navbar-item " href="login.php">
                <i class="bi bi-person-raised-hand"></i> Support
            </a>
        </div>
        <div class="navbar-right">
            <a href="https://dc.cube-kingdom.de" data-text="Discord" class="navbar-btn btn-theme">
                Discord
            </a>
        <!--
            <a href="register.php" data-text="Registrieren" class="navbar-btn btn-theme-second">
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
        <a class="btn btn-theme-simple mt-2 btn-block " href="../index.php">
            <i class="bi bi-house"></i> Startseite
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="../wartung.php">
            <i class="bi bi-boxes"></i> Projekte
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="../news.php">
            <i class="bi bi-journals"></i> Blog
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="../faq.php">
            <i class="bi bi-patch-question"></i> FAQ
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="../wartung.php">
            <i class="bi bi-fire"></i> Ränge
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="../wiki.php">
            <i class="bi bi-info-circle"></i> Regeln &amp; Wiki
        </a>
        <a class="btn btn-theme-simple mt-2 btn-block " href="lol.php">
            <i class="bi bi-person-raised-hand"></i> Support
        </a>
    </div>
    <div id="bannerHeader" scroll-to-end style="position:relative; padding-top:100px; background: linear-gradient(90deg, rgba(36, 36, 36, 0.685) 0%, rgba(0, 0, 0, 0.322) 100%),url('../storage/img/bg.png') center / cover no-repeat">
        <img src="../storage/img/logo-round-bg.png" style="width:100px;" alt="">
        <h1 class="header-text">
            Anmelden
        </h1>
        <div class="header-divider">
            <svg xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg) translateY(-3px);" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path fill="#262626" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v60.7c0,0-108.4,48.4-204.5,15.8c-96.1-32.7-266.9-11.1-322.8,0C467.7,76,484.7,61.7,473,67.3z"></path>
                <path fill="#262626" opacity="0.66" d="M734,67.3c-45.5,0-95.2-10.4-149.3-26.9c-203.9-63.6-263.1,65.7-320.3,31.7C113,26,0,57.9,0,57.9V0h1000v60.7c0,0-108.4-8.1-204.5-40.7C699.4-12.7,644.2,67.3,734,67.3z"></path>
                <path fill="#262626" d="M766.1,28.8c-200-58.6-266.8,93.3-320.3,52.6C360.8,43.3,256.6,42.6,203,28.6C154.5,16,105.6,28.6,0,73.9V0h1000v60.7c0,0-113.1-12.9-204.5-28.8C764.1,19.3,764.5,30.7,766.1,28.8z"></path>
            </svg>
        </div>
    </div>
    <div class="container mb-5">
        <form id="loginForm" method="POST" action="login_query.php">
            <?php
            // Display error messages if any
            if (isset($_SESSION['error'])) {
                echo '<div class="alert alert-danger" role="alert">' . $_SESSION['error'] . '</div>';
                unset($_SESSION['error']);
            }
            ?>
            <div class="card border-0 shadow-lg">
                <div class="card-body">
                    <div class="form-group">
                        <label for="username" class="form-label">Username:</label>
                        <input type="text" name="username" id="username" class="form-control" required>
                    </div>
                    <div class="form-group mt-3">
                        <label for="password" class="form-label">Passwort:</label>
                        <input type="password" name="password" id="password" class="form-control" required>
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-theme btn-block">Anmelden</button>
                    </div>
                    <input type="hidden" name="csrf_token" value="<?php echo $csrf_token; ?>">
                </div>
            </div>
        </form>
    </div>

    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center mt-5 mb-5">
                    <a href="discord.cube-kingdom.de" class="btn btn-theme-simple">
                        <i class="bi bi-discord"></i> Discord
                    </a>
                    <a href="https://www.instagram.com/sloyni" class="btn btn-theme-simple">
                        <i class="bi bi-instagram"></i> Instagram
                    </a>
                    <a href="https://github.com/Sloyni" class="btn btn-theme-simple">
                        <i class="bi bi-github"></i> GitHub
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path fill="#262626" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v60.7c0,0-108.4,48.4-204.5,15.8c-96.1-32.7-266.9-11.1-322.8,0C467.7,76,484.7,61.7,473,67.3z"></path>
                <path fill="#262626" opacity="0.66" d="M734,67.3c-45.5,0-95.2-10.4-149.3-26.9c-203.9-63.6-263.1,65.7-320.3,31.7C113,26,0,57.9,0,57.9V0h1000v60.7c0,0-108.4-8.1-204.5-40.7C699.4-12.7,644.2,67.3,734,67.3z"></path>
                <path fill="#262626" d="M766.1,28.8c-200-58.6-266.8,93.3-320.3,52.6C360.8,43.3,256.6,42.6,203,28.6C154.5,16,105.6,28.6,0,73.9V0h1000v60.7c0,0-113.1-12.9-204.5-28.8C764.1,19.3,764.5,30.7,766.1,28.8z"></path>
            </svg>
            <div class="footer-bar-content">
                <a href="impressum.php" class="footer-bar-item">Impressum</a>
                <a href="datenschutz.php" class="footer-bar-item">Datenschutz</a>
                <p class="footer-bar-item">
                    &copy; <?php echo date('Y'); ?> Cube Kingdom
                </p>
            </div>
        </div>
    </footer>
</body>

</html>
