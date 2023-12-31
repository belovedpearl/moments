import React from 'react'
import appStyles from '../../App.module.css'
import Container from "react-bootstrap/Container";
import Asset from '../../components/Asset';
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';

const PopularProfiles = ({mobile}) => {
  // const [profileData, setProfileData] = useState({
  //   pageProfile: {results: []},
  //   popularProfiles: {results: []}
  // })
  // const {popularProfiles} = profileData
  // const currentUser = useCurrentUser()

  // useEffect(() => {
  //   const handleMount = async () => {
  //       try{
  //          const {data} = await axiosReq.get(
  //           "/profiles/?ordering=-followers_count"
  //          )
  //          setProfileData(prevState => ({
  //           ...prevState,
  //           popularProfiles: data,
  //                  }))
  //       } catch (err){
  //           console.log(err)
  //       }
  //   }
  //   handleMount()
  // }, [currentUser]) replaced with prompts from ProfileDataContexts below

  const { popularProfiles } = useProfileData();

  return (
    <Container className={`${appStyles.Content} ${
      mobile && "d-lg-none text-center mb-3"
    }`}>
    {popularProfiles.results.length ? (
       <>
       <p>Most followed profiles.</p>
       {mobile ? (
         <div className="d-flex justify-content-around">
           {popularProfiles.results.slice(0, 4).map((profile) => (
            //  <p key={profile.id}>{profile.owner}</p> replaced with below code
             <Profile key={profile.id} profile={profile} mobile />
           ))}
         </div>
       ) : (
         popularProfiles.results.map((profile) => (
          //  <p key={profile.id}>{profile.owner}</p>
          <Profile key={profile.id} profile={profile} />
         ))
       )}
     </> 
    ) : (
      <Asset spinner />
    )}
  </Container>
  )
}

export default PopularProfiles