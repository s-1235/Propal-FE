import BgContainer from "./bgContainer";
import ProfileData from "./profileData";
const ViewProfile = (props) => {
  return (
    <>
      <BgContainer />
      <ProfileData MyProfile={props.myProfile} />
    </>
  );
};
export default ViewProfile;
