class ProjectHandler{
  constructor(data){
    this.data = data;
  }
  getMainPageProjects(){
    let mainPageProjects = [];
    for(let i = 0, iMax = this.data.length; i < iMax; i++){
      let project = data[i]
      if(project.isOnProjectPage){
        mainPageProjects.push(data[i]);
      }
  }
    return mainPageProjects;
  }
  getArchiveProjects(){
      let archiveProjects = [];
      for(let i = 0, iMax = this.data.length; i < iMax; i++){
        let project = data[i];
        if(!project.isOnProjectPage){
          archiveProjects.push(data[i]);
        }
    }
    return archiveProjects;
  }
}

let handler = new ProjectHandler(data);
var url = window.location.href;
var projects;
if(url.indexOf("archive") > -1){
  projects = handler.getArchiveProjects();
}
else{
  projects = handler.getMainPageProjects();
}


createProjectList(projects);
createDescriptionOnClick();

function createProjectList(projects){
  const projectList = document.getElementById("projectList");
  for(let i = 0, iMax = projects.length; i < iMax; i++){
    const project = projects[i];
    const li = document.createElement('li');
    li.className = "projectImg"
    const img = document.createElement('img');
    img.src = "media/" + project.thumbnail + ".jpg";
    li.append(img);
    if(project.redirection == true){
      if(handler.getArchiveProjects().length < 1){
        continue;
      }
      $(li).click(function(){
        var url = document.location.host + project.directTo;
        window.location = url;
      });
    }else{
      $(li).click(function(){
        createDescription(project);
        expandProjectDescription();
      });
    }
    projectList.append(li);
  }
}

function createDescription(project){
  const descriptionDiv = $(".projectDescription")[0];
  removeChildNodes(descriptionDiv);
  const header = document.createElement("h2");
  header.innerHTML = project.projectName;
  descriptionDiv.append(header);
  if(project.subTitle){
    const subTitle = document.createElement("h3");
    subTitle.innerHTML = project.subTitle;
    descriptionDiv.append(subTitle);
  }
  addTags(descriptionDiv,project.tags)
  for(let i = 0, iMax = project.description.length; i < iMax; i++){
    const paragraphContent = project.description[i];
    const headlineText = paragraphContent.headline;
    const contentText = paragraphContent.content;
    const p = document.createElement("p");
    if(headlineText){
      const h3 = document.createElement("h4");
      h3.innerHTML = headlineText;
      p.append(h3);
    }
    const contentp = document.createElement("p");
    contentp.innerHTML = contentText;
    p.append(contentp);
    descriptionDiv.append(p);
  }
}

function addTags(div,tags){
  for(let i = 0, iMax = tags.length;i < iMax;i++){
    const oTag = tags[i];
    const badge = document.createElement('div');
    badge.className = "badges";
    badge.className += " " + oTag.type;
    badge.innerHTML = oTag.name;
    div.append(badge);
  }
}

function removeChildNodes(ele){
  while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
  }
}

function expandProjectDescription(){
  state.scrollable = true;
  TweenLite.to(".projectDescription", 0, {y:"+840vh"})
  $(".projectDescription").show();
  TweenLite.to(".projectDescription", .5, {y:0, ease: Power1.easeIn})
  document.getElementById('projectList').style.display="none";
  document.getElementById('slider').style.display="none";
  document.getElementById('slidedescription--active').style.display="none";
  document.getElementById('logo').style.display="none";
  document.getElementById('projHeadline').style.display="none";
}

function hideDescription(id){
  TweenLite.to(".projectDescription", 0, {y:0})
  TweenLite.to(".projectDescription", .6, {y:"+900vh", ease: Back.easeOut})
  document.getElementById('projectList').style.display="flex";
  document.getElementById('slider').style.display="block";
  document.getElementById('slidedescription--active').style.display="block";
  document.getElementById('logo').style.display="block";
  document.getElementById('projHeadline').style.display="block";
  state.scrollable = false;
}

function createDescriptionOnClick(){
  $(".projectDescription").click(function(){
    hideDescription();
  })
}
