const mongoose=require('mongoose');

const cateraraSchema=new mongoose.Schema({
    caterarId:{
        type:Number,
    },
    caterarName:{
        type:String,
    },
    address:{
        type:String,
    },
    phoneNumber:{
        type:Number,
    },
    openingTime:{
        type:null,
    },
    closingTime:{
        type:null,
    }
})

const caterar=mongoose.model('caterar',cateraraSchema);

module.exports=caterar;