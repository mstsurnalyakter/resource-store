
import PropTypes from 'prop-types'

const TeamCard = ({item}) => {
    const { name, profession, image } = item || {};
    return (
      <div className="flex w-full border flex-col justify-center mx-auto  py-6 shadow-md rounded-xl sm:px-12">
        <img
          src={image}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-3">
            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
            <p className=" text-xs sm:text-base dark:text-gray-600 font-medium">
              {profession}
            </p>
          </div>
        </div>
      </div>
    );
}

TeamCard.propTypes = {
  item:PropTypes.object.isRequired
};

export default TeamCard