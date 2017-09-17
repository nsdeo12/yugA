var mongodb=require("mongodb");
var uri="mongodb://localhost:27017/example";
mongodb.MongoClient.connect(uri,function(err,db){
    if(err){
        return err
        process.exit(1);
    }
    db.collection('sample').insert({x:1},function(err,result){
        if(err){
            return err
        }
        else console.log("result",result);
    });
    db.collection('sample').find().toArray(function(err,document){
        if(err){
            return err;
        }
        else console.log("document",document);
    });
});