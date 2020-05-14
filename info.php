<?php

$obj->insertSingleRow('MySQL PHP Insert Tutorial');

     $servername = "localhost:3306";
     $username = "ntann";
     $password = "!Aa30127800";
     $dbname = "MyDatabase";

     if(isset($_POST['submit'])) {
          $con = mysql_connect($servername, $username, $password, $dbname);
          if (!$con) {
                die('Could not connect: ' . mysql_error());          
          }

          $Title = ($_POST['NewTitle']);
          $ComName = ($_POST['NewComName']);
          $ConName = ($_POST['NewConName']);
          $ConAddress = ($_POST['NewConAddress']);
          $Start = ($_POST['NewStart']);
          $End = ($_POST['NewEnd']);
          $Email = ($_POST['NewEmail']);
          $Notes = ($_POST['NewNotes']);
          $sql = "INSERT INTO contracts VALUES ($Title, $ComName, $ConName, $ConAddress, $Start, $End, $Email, $Notes)";

          if (!mysql_query($sql,$con)) {
               die('Error: ' . mysql_error());
          }
          echo "1 record added";
          return $this->pdo->exec($sql);
          mysql_close($con)
     }

     function insertSingleRow($Title) {
          $task = array(':Title' => $Title);
          $sql = 'INSERT INTO Contracts (Title) VALUES (:Title);';
          $q = $this->pdo->prepare($sql);
          return $q->execute($task);
      }
?> 