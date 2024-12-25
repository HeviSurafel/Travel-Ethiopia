const mongoose=require("mongoose");
const likeSchema=new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true 
      },
      blog: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"blog"
      },
      itemType: {
        type: String,
        enum: ['blog', 'Comment', 'Reply'],
        defualt:'blog'
      }
},{
    timestamps: true
})
module.exports = mongoose.model("like", likeSchema);