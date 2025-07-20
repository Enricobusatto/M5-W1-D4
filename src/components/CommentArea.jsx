import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import CommentList from './CommentList.jsx';

const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODViMWFiZjk2OGRlNTAwMTU1MmEzZTgiLCJpYXQiOjE3NTMwMjU5OTQsImV4cCI6MTc1NDIzNTU5NH0.AP3341mMG33Mc5lqmhYFaDj3z01WErAWIRwmHX6alnE';

function CommentArea({ asin }) {
  const [comments, setComment] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
          {
            headers: {
              Authorization: key,
            },
          }
        );
        const data = await response.json();
        setComment(data);
        console.log('data is:', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [asin]);

  return (
    <CommentList comments={comments} />

  )
}

export default CommentArea;