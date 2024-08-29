const JSONserver=require('json-server')
const MediaServer=JSONserver.create()
const router=JSONserver.router('db.json')
const middleware=JSONserver.defaults()
const PORT=3000 || process.env.PORT


MediaServer.use(middleware)
MediaServer.use(router)
MediaServer.listen(PORT,()=>{
  console.log(`media player server started running at PORT:${PORT},and waiting for request.`);
  
})