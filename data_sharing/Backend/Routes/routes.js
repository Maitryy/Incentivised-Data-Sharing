const router =  require("express").Router();
const Post = require("../models/post.js");

router.post("/posts",async (req,res) => {
    try {
        const{title, description, keyword} = req.body;
        if(!description || !title  || !keyword)
            return res
                .status(400)
                .json({errorMessage: "Please enter all details"});

        const existingPost = await Post.findOne({title})
        if(existingPost)
            return res
                .status(400)
                .json({errorMessage: "A post with same title already exists"});    

        const NewPost = new Post({
            description: description,
            title: title,
            keyword: keyword
        });
        await NewPost.save();

        res.send(true);

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;