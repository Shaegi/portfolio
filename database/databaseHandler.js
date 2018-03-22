var xmlDoc = readXml("database/projects.xml");
var xml = readXML2("database/projects.xml");
readTitle(1);
function readXml(xmlFile){
  var xmlDoc;

  if(typeof window.DOMParser != "undefined") {
      xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",xmlFile,false);
      if (xmlhttp.overrideMimeType){
          xmlhttp.overrideMimeType('text/xml');
      }
      xmlhttp.send();
      xmlDoc=xmlhttp.responseXML;
  }
  else{
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async="false";
      xmlDoc.load(xmlFile);
    }
    return xmlDoc;
}
function readXML2(xmlFile){
  var client = new XMLHttpRequest();
  client.onload = handler;
  client.open("GET", xmlFile);
  client.send();
  return handler();
}
function handler() {
  if(this.status == 200 &&
    this.responseXML != null) {
      return data;
  } else {

  }
}
function readTitle(id){
  console.log(xml);
  console.log(xmlDoc.getElementsByTagName("project"));
}
function readDescription(id){

}
