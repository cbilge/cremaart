<?php
    
function Parse ($url) {

	$fileContents= file_get_contents($url);

	$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);

	$fileContents = trim(str_replace('"', "'", $fileContents));

	$simpleXml = simplexml_load_string($fileContents);

	$json = json_encode($simpleXml);

	return $json;

}

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $src = $_GET["source"];

    if ($src == "design") {
       $designurl = 'design.xml';
       echo Parse($designurl);
    }
    elseif ($src == "shop") {
       $shopurl = 'shop.xml';
       echo Parse($shopurl);
    }
    elseif ($src == "blog") {
       $blogurl = 'blog.xml';
       echo Parse($blogurl);
    }
}
?>