
import PropTypes from 'prop-types'

const Card = ({ comment, handleDelete }) => {
  return (
    <div className="shadow-2xl bg-white  rounded-md font-extrabold justify-between px-3 flex gap-3 w-44 min-h-24 items-center text-black">
      <h2>{comment?.commentField}</h2>
      <button onClick={() => handleDelete(comment?._id)} className="btn  btn-success">
        X
      </button>
    </div>
  );
};

Card.propTypes = {
  comment: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card