import { Helmet } from 'react-helmet-async';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Profile = () => {

  return (
    <div className="flex  min-h-[500px] items-center justify-center">
      <Helmet>
        <title>HomeScapeHub | Profile</title>
      </Helmet>
      <ProfileCard/>

    </div>
  );

}

Profile.propTypes = {}

export default Profile
