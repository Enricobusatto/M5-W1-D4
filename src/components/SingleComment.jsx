import 'bootstrap/dist/css/bootstrap.min.css';
import './css.components/SingleComment.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function SingleComment({ comment }) {

    return (
        <div className='comment'>
            <h4><strong>Recensioni :</strong> </h4>
            <h5 className="text-center">{comment.comment}</h5>
            <p className="text-muted">Voto: {comment.rate} ⭐</p>
            <small>Autore: {comment.author}</small>
            <div className="d-flex justify-content-space-between mt-3">
                <button>
                    <i className='bi bi-pencil-square'>Modifica </i>
                </button>
                <button>
                    <i className='bi bi-trash3'>Elimina</i>
                </button>
            </div>
        </div>
    );
}

export default SingleComment;