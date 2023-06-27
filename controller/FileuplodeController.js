const path=require("path")
const multer=require("multer")
const fileSchema=require("../schema/FileuplodeSchema")

const storage=multer.diskStorage({
    destination:'./uloads/',
    filename:function(req,file,cd){
        cd(null,file.originalname);
    }
})

const uplode=multer(
    {
        storage:storage,
        limits:{
            fileSize:9000000
        }
    }
).single('file')


const uplodefile=(req,res)=>{
    console.log(req.file)

    uplode(req,res,(err)=>{
        if(err){
            res.status(500).json({
                err:err,
                message:"err for uplode file"
            })
        }
        else{
            console.log(req.file.originalname)
            //size
            console.log(req.file.size)
            //path
            console.log(req.file.path)
            var p=path(__dirname,"../uploads/"+req.file.originalname)
            console.log(p)   
            
            //type
            if(req.file==undefined){
                res.status(500).json({
                    message:"no file selected"
                })
            }
            else{
                const fileuplode=new fileSchema({
                    name:req.file.originalname,
                    url:p,
                    size:req.file.size,
                    username:req.body.username,
                    type:req.file.mimetype
                })               
                fileuplode.save((err,data)=>{
                    if(err){
                        res.status(404).json({
                            message:"err for uploding file dc",
                            err:err
                        })
                    }
                    else{
                        res.status(202).json({
                            message: 'File uploaded successfully',
                            file: req.file.originalname,
                            data:data
                        })
                    }
                })
            }
        }
    })
}

module.exports={
  uplodefile   
}