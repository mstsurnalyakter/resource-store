import  PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <div className='bg-slate-200 p-3 m-3 rounded-xl'>
        <h2 className='text-2xl'>{title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}

export default Bookmark