import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 p-3 mb-3">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
}

export default Header