<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Exemple avec Ajax - échange XML</title>
<link href="style.css" rel="stylesheet" type="text/css">
<script type="text/javascript">
<?php require("script.js"); ?>
</script>
</head>
<body>
	<div id="page">
		<h1>Quelle heure est-il sur le serveur web?</h1>
		<p>
			Il est présentement <span id="time"><?php echo date("H:i"); ?> </span>
			sur le serveur.
		</p>
		<p>
			Et la date : <span id="date"><?php echo date("Y-m-d"); ?></span>.
		</p>
		<p>
			<button onclick="reload();">Mettre à jour</button>
		</p>
	</div>
</body>
</html>
