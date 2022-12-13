const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    // "ObjectID":"" ,
    "topic":{type:String, required:true} ,
    "description":{type:String, required:true},
    "posted_at":{type:Date, required:true},  // yyyy/mm/dd
    "posted_by":{type:String, required:true}
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;