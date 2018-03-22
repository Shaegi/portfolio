<?php
if(file_exists('database/projects.xml')){
  $database = simplexml_load_file("database/projects.xml");
}
else{
  echo "Datei nicht gefunden";
}

function getProjectCount(){
  global $database;
  return $database->count();
}
function readLogo($id){
  global $database;
  return $database->project[(Int)$id]->logo;
}
function readTitle($id){
  global $database;
  return $database->project[(Int)$id]->title;
}
function readMeta($id, $meta){
  global $database;
  return $database->project[(Int)$id]->attributes()->{$meta};
}
function readShortDescription($id){
  global $database;
  return $database->project[(Int)$id]->shortDescription;
}
function readDescription($id){
  global $database;
  return $database->project[(Int)$id]->description;
}
function getMediaCount($id){
  global $database;
  return $database->project[(Int)$id]->media->element->count();
}
function getMediaSource($id,$i){
  global $database;
  return $database->project[(Int)$id]->media->element[$i];
}
function getTechnologieCount($id){
  global $database;
  return $database->project[(Int)$id]->technologies->technologie->count();
}
function readTechnologies($id,$i){
  global $database;
  return $database->project[(Int)$id]->technologies->technologie[$i];
}
function getTaskAreaCount($id){
  global $database;
  return $database->project[(Int)$id]->taskAreas->taskArea->count();
}
function readTaskArea($id,$i){
  global $database;
  return $database->project[(Int)$id]->taskAreas->taskArea[$i];
}
function readDuration($id){
  global $database;
  return $database->project[(Int)$id]->duration;
}
?>
