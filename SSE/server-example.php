header("Content-Type: text/event-stream\n\n");

$counter = 0;
while (1) {

  $curDate = date(DATE_ISO8601);
  echo 'id: ' . $counter;
  echo "\n";
  echo 'data: Test Message -- ' . $curDate;
  echo "\n\n";

  $counter ++;

  ob_end_flush();
  flush();
  sleep(1);
}