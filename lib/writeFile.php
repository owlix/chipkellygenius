<?php

	function writeLine($idNum){
	$myfile = fopen("id.txt", "w") or die("Unable to open file!");
	fwrite($myfile, $idNum);
	fclose($myfile); 
	}
	
	
	function readLine(){
     $file = fopen("id.txt","r");
     $val = fread($file,filesize("id.txt"));
     fclose($file); 
     return $val;
	}  
	
	
	// writeFile.php?max_id=234907
	if(isset($_GET['max_id'])){
		//echo "its set";
		writeLine($_GET['max_id']);
	} else {
		writeLine("23232");
	}
	
	$outy = readLine();
	$array = array('data' => $outy);
    echo json_encode($array);
?>