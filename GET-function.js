app.get('/say',(req,res)=>{axios.get('https://tcukvr7ulb.execute-api.us-east-2.amazonaws.com/helloWorld/helloworld2?', { params:{keyword:req.query.keyword}})
                          .then(function(response){ res.send(req.query.keyword);})
                          .catch(err => {console.error(err);}) 
                          })
