articles= {
    "articleId": ObjectId,
    "title": String,
    "content": String,
    "category": String,
    "articleBy": ObjectId<Author>
}

"comments"= {
    "commentId": String,
    "commentedBy": ObjectId<Author>,
    "comment": String,
    "commentedAt": String,
    "parent": ObjectId<Comment>,
    "articleId": ObjectId<Article>,
}

"author" = {
    "authorId": ObjectId,
    "name": String,
    "address": String,
}

// "Get a connection object"
const client = MongoClient.connect(uri)

// "Get a database connection"
const db = client.db("articleDB")

// "Get a collection reference"

// "Article Reference"
const articleColRef = db.collection(articles)

// "CommentReference"
const CommentColRef = db.collection(comments)

// Total number of comments for article
const commentCount = CommentColRef.findAll({"articleId": articleId}).count()

// Write a query to fetch article detail and its comment including commentator
// details.

const articles = articleColRef.aggregate([
    {},
    {
        $lookup:{
            from: "author",
            localField: "articleBy",
            foreignField: "_id",
            as: "author"
        }
    },
    {
        $unwind: "$author"
    },
    {
        $lookup: {
            from: "comment",
            localField: "_id",
            foreignField: "articleId",
            as: "comments"
        }
    },
    {
        $unwind: "$comments"
    },
])




// Write a query to fetch articles having one or more than one comments.

let articlesList = []

let articleWithComment = articleColRef.aggregate([
    {},
    {
        $lookup: {
            from: "comment",
            localField: "_id",
            foreignField: "articleId",
            as: "comments"
        },
        $unwind: {
            path: "$comments",
            preserveNullAndEmptyArrays: false
        }
    },
]) 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// d) Write a query to fetch an array of article Id, that are written by an author.
var arr = []
articleColRef.find({"articleBy": authorId}).forEach(function(doc){arr.push(doc._id)})

