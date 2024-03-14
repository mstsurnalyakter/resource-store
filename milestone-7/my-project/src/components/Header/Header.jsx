import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='mb-16'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-[#111] text-4xl font-bold">Knowledge Cafe</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div className="w-10 rounded-full">
              <img alt="profile image" src={profile} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
}


export default Header