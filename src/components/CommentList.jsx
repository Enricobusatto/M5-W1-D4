import 'bootstrap/dist/css/bootstrap.min.css';
import SingleComment from './SingleComment.jsx';
import Carousel from 'react-bootstrap/Carousel';

function CommentList({ comments }) {
    return (
        <Carousel slide={true}>
            {comments.map((comment) => (
                <Carousel.Item key={comment._id}>
                    <SingleComment comment={comment} />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CommentList;
