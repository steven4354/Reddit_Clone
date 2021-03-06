var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentableSchema = new Schema(
  {
    title: String,
    text: String,
    score: Number,
    depth: Number,
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Commentable"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    timestamps: true
  }
);

let Commentable = mongoose.model("Commentable", CommentableSchema);

module.exports = Commentable;
