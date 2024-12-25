const mongoose=require("mongoose");
const replaySchema=new mongoose.Schema({
    content: { 
        type: String, 
        required: true 
      },
      author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
      },
      comment: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment',
        required: true 
      },
      likes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Like' 
      }],
      likeCount: { 
        type: Number, 
        default: 0 
      }
},{
    timestamps: true
})
module.exports = mongoose.model("replay", commentSchema);