
import PropTypes from 'prop-types'

const UsersCard = ({user}) => {
  return (
    <div className='bg-sky-300 p-5'>
      <h2>{user?.email}</h2>
      <h2>{user?.createAt}</h2>
    </div>
  );
}

UsersCard.propTypes = {
    user:PropTypes.object.isRequired
}

export default UsersCard