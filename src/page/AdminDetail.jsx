import React from 'react'
import UserHeader from '../component/UserHeader'
import AdminSideBar from '../component/AdminSideBar'
import AdminProfilContent from '../component/AdminProfilContent';

function AdminDetail() {
  return (
    <div>
        <UserHeader />
        <div className="container-fluid mt-4 bg-white">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-9">
            <AdminProfilContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDetail;