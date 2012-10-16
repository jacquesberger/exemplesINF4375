<?php
header('Content-type: text/xml');
echo '<?xml version="1.0" encoding="utf-8"?>';
echo "<exchange>";
echo "<date>" . date("Y-m-d") . "</date>";
echo "<time>" . date("H:i") . "</time>";
echo "</exchange>";
?>