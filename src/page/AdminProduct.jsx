import React from 'react'
import AdminProductContent from '../component/AdminProductContent'
import UserHeader from '../component/UserHeader'
import AdminSideBar from '../component/AdminSideBar'

function AdminProduct() {
  return (
        <div>
            <UserHeader />
            <div className="container-fluid mt-4 bg-white">
                <div className="row">
                    <div className="col-md-3">
                        <div style={{ position: "sticky", top: "80px" }}>
                            <AdminSideBar />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <AdminProductContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProduct