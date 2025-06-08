import ProfileHomeNav from '../component/ProfileHomeNav';
import CategoryNav from '../component/CategoryNav';
import Footer from '../component/Footer';
import Home1 from '../component/Home1';
import Home from './Home';

function ProfileHome() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Home />;
  }

  return (
    <>
      <ProfileHomeNav />
      <CategoryNav />
      <Home1 />
      <Footer />
    </>
  );
}

export default ProfileHome;