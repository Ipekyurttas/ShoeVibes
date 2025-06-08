import React, { useState } from "react";
import ProfileHome from "../component/ProfileHomeNav.jsx";
import CategoryNav from "./CategoryNav";
import Footer from "../component/Footer.jsx";
import ProfileSideBar from "../component/ProfileSideBar.jsx";

export default function SettingsPage() {
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [showLocaleForm, setShowLocaleForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        shoeSize: "",
        language: "tr",
        timezone: "Europe/Istanbul"
    });

    const toggleAccountForm = () => setShowAccountForm(prev => !prev);
    const toggleLocaleForm = () => setShowLocaleForm(prev => !prev);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const labelStyle = { width: "150px", fontSize: "14px", marginRight: "10px" };
    const inputStyle = { width: "220px", fontSize: "14px" };

    return (
        <div>
            <ProfileHome />
            <CategoryNav />
            <br /><br />

            <div className="row">
                {/* Sidebar */}
                <div className="col-12 col-md-2">
                    <ProfileSideBar />
                </div>

                {/* İçerik Alanı */}
                <div className="col-12 col-md-6">

                    {/* Kullanıcı Hesabı Başlığı */}
                    <h5
                        style={{ cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}
                        onClick={toggleAccountForm}
                    >
                        Kullanıcı Hesabı {showAccountForm ? "▲" : "▼"}
                    </h5>

                    {showAccountForm && (
                        <div className="mt-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2 d-flex align-items-center">
                                    <label htmlFor="name" style={labelStyle}>İsim - Soyisim</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="name"
                                        placeholder="Ad Soyad"
                                        style={inputStyle}
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-2 d-flex align-items-center">
                                    <label htmlFor="email" style={labelStyle}>E-posta</label>
                                    <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        id="email"
                                        placeholder="E-posta"
                                        style={inputStyle}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-2 d-flex align-items-center">
                                    <label htmlFor="password" style={labelStyle}>Şifre</label>
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        id="password"
                                        placeholder="Şifre"
                                        style={inputStyle}
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="shoeSize" style={labelStyle}>Ayak Numarası</label>
                                    <input
                                        type="number"
                                        className="form-control form-control-sm"
                                        id="shoeSize"
                                        placeholder="Örn: 42"
                                        min="30"
                                        max="50"
                                        style={{ ...inputStyle, width: "100px" }}
                                        value={formData.shoeSize}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary" style={{ width: "100px", height: "50px", marginLeft: "400px", marginTop: "-15px", marginBottom: "15px" }}>
                                    Güncelle
                                </button>
                            </form>
                        </div>
                    )}

                    <hr />

                    {/* Dil ve Bölge Ayarları */}
                    <h5
                        style={{ cursor: "pointer", fontWeight: "bold", fontSize: "15px" }}
                        onClick={toggleLocaleForm}
                    >
                        Dil ve Bölge Ayarları {showLocaleForm ? "▲" : "▼"}
                    </h5>

                    {showLocaleForm && (
                        <div className="mt-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="language" style={labelStyle}>Dil Seçimi</label>
                                    <select
                                        id="language"
                                        className="form-select form-select-sm"
                                        style={inputStyle}
                                        value={formData.language}
                                        onChange={handleChange}
                                    >
                                        <option value="tr">Türkçe</option>
                                        <option value="en">English</option>
                                        <option value="de">Deutsch</option>
                                    </select>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <label htmlFor="timezone" style={labelStyle}>Zaman Dilimi</label>
                                    <select
                                        id="timezone"
                                        className="form-select form-select-sm"
                                        style={inputStyle}
                                        value={formData.timezone}
                                        onChange={handleChange}
                                    >
                                        <option value="Europe/Istanbul">Europe/Istanbul</option>
                                        <option value="Europe/Berlin">Europe/Berlin</option>
                                        <option value="America/New_York">America/New York</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary" style={{ width: "100px", height: "50px", marginLeft: "400px", marginTop: "-15px", marginBottom: "15px" }}>
                                    Kaydet
                                </button>
                            </form>
                        </div>
                    )}
                    <div>

                    </div>

                </div>
            </div>

            <br /><br />
            <Footer />
        </div>
    );
}