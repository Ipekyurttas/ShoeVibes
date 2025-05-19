import ProfileHome from "../component/ProfileHomeNav.jsx";
import CategoryNav from "./CategoryNav";
import Footer from "../component/Footer.jsx";
import ProfileSideBar from "../component/ProfileSideBar.jsx";  // Düzeltildi dosya adı

export default function SettingsPage() {



    return (
        <div className="container">
            <ProfileHome />
            <CategoryNav />
            <br /><br />

            <div className="row">
                <div className="col-12 col-md-4">
                    <ProfileSideBar />

                </div>
                <div className="col-12 col-md-6">
                    {/* İstersen buraya başka içerik ekleyebilirsin */}
                </div>
            </div>

            <br /><br />
            <Footer />
        </div>
    );
}
