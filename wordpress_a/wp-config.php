<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/var/www/vhosts/web-2829.web-interface.eu/cube-kingdom.de/wordpress_a/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'trybase' );

/** Database username */
define( 'DB_USER', 'tryb' );

/** Database password */
define( 'DB_PASSWORD', 'Feheka0709@' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'khe+/9ppQ~4_fDaE]Ed2_ogE0dd6w6[-t)uOZPo_(K~S_!!Ssis3ugUy&@:[EvSc');
define('SECURE_AUTH_KEY', '1|D3a[_8]D9pMFBst#@%p(/u1tx7Ypj_bkU89tPn|Dwu(07H[ykV081t]j97m%K:');
define('LOGGED_IN_KEY', '/w*FS/:(EQ[0w2zDKEy4-k|v!mI:-J|BMZo_a-uj7R5M%9/h#E(AiO-4@Y69Ab1(');
define('NONCE_KEY', 'CiI)74+[M2O*5O/13CXyF(+2K#h+KBp*1l#6-F06Be2h;-dY75s]E7-x#7lFD@bq');
define('AUTH_SALT', ')sw5L50@@89Kyl7gg86|Y@3P-e99CS60SA884%wzuipoVwjz0/G84g-~IE4r5AAT');
define('SECURE_AUTH_SALT', '1GX2Pm1oI||n1Ey-v0459:78mn4U]_xWp0iB-bSsA51-WRI+5*!-pC;ea@w-@v4G');
define('LOGGED_IN_SALT', '11Q5a;eHg|@/D[Q9-(%-9Ux6u27P6iZWqW4v3sE-Zf7YO&*8T3wa0p&_uFtsT9mO');
define('NONCE_SALT', '9v_|FbprhK4@iS89AOfsH73@e1|XLbSQs)yS772pa[tm5A6A0c*98def6O1;W(KJ');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'try';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
