<?php
$db = new SQLite3('mydb.sq3');
$sql = "SELECT * FROM items ";
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)){
  echo $row['name'] . ': $' . $row['price'] . '<br/>';
}
unset($db);