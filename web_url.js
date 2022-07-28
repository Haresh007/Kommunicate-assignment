function getUrlParameterValue(web_url,param) 
{
  var str=web_url
  var substr=param
  if(str.includes(substr))
  {
    if(substr==="utm_medium")
    {
      console.log("webplugin")
    }
    if(substr==="utm_campaign")
    {
      console.log("powerdby")
    }
  }
}

var web_url ="https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby"
var param="utm_medium"
getUrlParameterValue(web_url, param)
var param="utm_campaign"
getUrlParameterValue(web_url, param)