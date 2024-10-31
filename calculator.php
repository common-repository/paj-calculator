<?php
/**
* Plugin Name: Paj Calculator
* Plugin URI: http://www.pajworld.com/pajculator
* Description: This is the very simple Calculator.
* Version: 1.0
* Author: PAJWORLD
* Author URI: http://www.pajworld.com/
**/

/**
* Register a custom menu page.
*/
function calculator_page(){
	add_menu_page( 
	__( 'Custom Menu Title', 'textdomain' ),
	'Calculator',
	'manage_options',
	'numariccalculator',
	'calculator',
	'dashicons-format-chat',
	200
	); 
	
}

function calculator(){
	$pluginPath = plugin_dir_url( __FILE__ );
	include_once 'calculator-ui.php';
}
add_action('admin_menu', 'calculator_page');

function calculator_namespace() {
	
    wp_register_style('bootstrap_min', plugins_url('/css/bootstrap.min.css',__FILE__ ));
    wp_enqueue_style('bootstrap_min');
	wp_register_style('creative_min', plugins_url('/css/creative.min.css',__FILE__ ));
    wp_enqueue_style('creative_min');
	wp_register_script('calculator_js', plugins_url('/js/calculate.js',__FILE__ ));
    wp_enqueue_script('calculator_js');
}

add_action( 'admin_init','calculator_namespace');

?>
