<?php
header('Content-type: application/json');
echo "{";
echo '"date":"' . date("Y-m-d") . '",';
echo '"time":"' . date("H:i") . '"';
echo "}";
?>