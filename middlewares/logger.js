exports.logger = (req,res,next)=>{
    req.hello = 'World'
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}
