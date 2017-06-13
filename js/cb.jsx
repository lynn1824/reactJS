class Comment extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <span className="author">{this.props.author}</span>
            </div>
        );
    }
}

var comments = [
    {author: "jasonchen", body: "this is my jasonchen!~!"},
    {author: "jasonli", body: "this is my jasonli!~!"},
];

class CommentList extends React.Component {
    render() {
        var commentsNode = this.props.comments.map(function (comment, index) {
            return <Comment key={'comment-' + index} author={comment.author}>{comment.body}</Comment>
        })
        return (
            <div className="comment-list">{commentsNode}</div>
        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className="comment-form">
                CommentForm
            </div>
        );
    }
}

class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                Comment-Box
                <CommentList comments={comments}/>
                <CommentForm/>
            </div>
        );
    }
}

React.render(
    <CommentBox/>,
    document.getElementById('content')
);