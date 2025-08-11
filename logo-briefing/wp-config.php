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
define( 'DB_NAME', 'dbwmcrcssxgzwx' );

/** Database username */
define( 'DB_USER', 'uwxgfkyxaftb5' );

/** Database password */
define( 'DB_PASSWORD', 'jhpw56vvkezz' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

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
define( 'AUTH_KEY',          ' [:)Io8QiUqCwY2Y6m@1i&,_4BL::*e,ay-_6.S2mgiwN3{?Q]C24ZD}M?JaMbG(' );
define( 'SECURE_AUTH_KEY',   'Dli%[Cek}#O3iNUnn#[M.&tc-&S#l`!v6^jeqZj;dQ#Z?b7)<T_tyQaof8Y^ZajZ' );
define( 'LOGGED_IN_KEY',     'GXtb^->O~~s%yr~VXB@>1d_2hfcoYsuy<&0RXRlCBw8eqQ_,Tl/G:5v8P#s#zB]s' );
define( 'NONCE_KEY',         'om_/zrVG.t;{?F2<?a0`Rm]mkyB  Q3P^<=yTwSej}4ccg=(j71[NS3:2`fNx~*O' );
define( 'AUTH_SALT',         'Hs{GwjOXqIPrG>oa|N~bC07~.AWl ,@*m^w*_F wiJ5g-eNG8)a To:tP6vE]-sI' );
define( 'SECURE_AUTH_SALT',  'YS!c7qA?Qo_#5g=bwFul:IMw/_jt+11)#s-pVb]2)R?02klCiy_l$tiU0cCi%l1Z' );
define( 'LOGGED_IN_SALT',    'W ^3143jyFlN3v4~F;r<VJPMudsx@W:a$KQT+z7LAhaTM0w_|NFyU9U9G29:+U&&' );
define( 'NONCE_SALT',        'F:z8*5d)^)ZO`BC[By *,vq,ohjWAKeeLEt}NZ*ByYb}e&tEmVD3o6||.-,HMxzB' );
define( 'WP_CACHE_KEY_SALT', '>PTvkJ|x-L8Pkys:.)6lOr4]FLr-8158<?mq$W*Jf`8AJ8g{1SP9Eznf^r376qUZ' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jpn_';

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
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
