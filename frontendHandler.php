<?php
error_reporting(E_ALL);
ini_set('display_errors',true);
include_once 'database/databaseHandler.php';
function createProject($id){
  echo '<li class="projectImg">
            <a onClick="expandProjectDescription('.$id.')">
            <img width="100%" src="'.getMediaSource($id,0).'" alt="img01"></a>
  </li>';
}
function createProjectDescription($id){
  echo'
  <div id="proj'.$id.'" onClick="closeProjectDescription('.$id.')"class="proMo">
  <img class="projectClose" onClick="closeProjectDescription('.$id.')" src="media/close.svg" ></img>';
    echo '<div class="proMoText">';
    echo '<p>'.readDescription($id).'</p>';
    echo '</div></div>';
}
function createProjectList(){
  for($i=0; $i < getProjectCount();$i++){
    createProjectDescription($i);
  }
  echo '<ul id="projectList">';
    for($i=0; $i < getProjectCount();$i++){

        createProject($i);
    }
    echo '</ul>';
  }
?>
