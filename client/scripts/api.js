
var API = {

  server:'fill me',

  create: function (url,blog, successCB, errorCB = null) {
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url:url,
      type: 'POST',
      data: JSON.stringify(blog),
      contentType: 'application/json',
      success:successCB,
      error:errorCB
  })},
  readAll: function(url,successCB, errorCB = null) {
    $.ajax({
      // This is the url you should use to communicate with the API server.
      url:url,
      type: "GET",
      contentType: 'application/json',
      success:successCB,
      error:errorCB
  }) 
},
findOne:(url,user,successCB)=>{
  $.ajax({
    // This is the url you should use to communicate with the API server.
     url:`${url}/${user}`,
    type: "GET",
    contentType: 'application/json',
    success:successCB,
    
})
}

}


export default API

