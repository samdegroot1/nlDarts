<?php

global $project;
$project = 'nldarts';

global $databaseConfig;
$databaseConfig = array(
	'type' => 'MySQLDatabase',
	'server' => 'localhost',
	'username' => 'root',
	'password' => 'root',
	'database' => 'SS_nlDarts',
	'path' => ''
);

// Set the site locale
i18n::set_locale('en_US');
