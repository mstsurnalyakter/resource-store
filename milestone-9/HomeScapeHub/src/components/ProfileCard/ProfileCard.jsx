import useContextData from '../../hooks/useContextData'

const ProfileCard = () => {
    const {user} = useContextData()
    return (
      <div className="flex  min-h-[500px] items-center justify-center">
        {user && (
          <div
            className="flex border w-80 md:w-96 flex-col py-16 justify-center mx-auto  shadow-md  text-white rounded-xl sm:px-12
        bg-gradient-to-r from-[#328EFF] via-purple-600 to-pink-300 bg-300%  animate-gradient
        "
          >
            <div className='bg-transparent text-black '>
              <img
                src={user?.photoURL}
                alt="User Profile Image"
                className="w-32 h-32 border-[4px] mx-auto rounded-full  dark:bg-gray-500 aspect-square
            bg-white

            "
              />
            </div>
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-3">
                <h2 className="text-xl font-semibold sm:text-2xl">
                  {user?.displayName || "user name not found"}
                </h2>
                <p className=" text-xs sm:text-base dark:text-gray-600 font-medium">
                  {user?.email || "user name not found"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

ProfileCard.propTypes = {}

export default ProfileCard
