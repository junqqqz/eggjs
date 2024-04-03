const helper = require("../extend/helper");

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const QuestionSchema = new Schema({
    isStar: {
      type:Boolean
    }
  },{
    collection:"Question",
    versionkey:false
  });

  return mongoose.model('Question', QuestionSchema);
}
