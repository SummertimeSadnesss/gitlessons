class Comment {
    constructor(text) {
        this.text = text;
        this.votes = 0;
    }

    upvote(){
        this.votes += 1;
    }

    static mergeComments(first, second) {
        return `${first}${second}`
    }
}

const firstComment = new Comment('First Comment');

firstComment.upvote();
console.log(firstComment.votes);

console.log(Comment.mergeComments('First comment', 'Second comment'));