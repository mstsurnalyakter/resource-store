import PropTypes from 'prop-types'

const People2 = ({people}) => {
    const {name,profession} = people;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Profession: {profession}</p>
    </div>
  )
}

People2.propTypes = {
    people:PropTypes.object.isRequired
}


export default People2