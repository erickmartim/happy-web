import React from 'react';
import useAuth from 'common/hooks/useAuth';
import Sidebar from 'common/components/DashboardSidebar';
import Orphanage from './Orphanage';
import { Link } from 'react-router-dom';
import { FiMapPin } from 'react-icons/fi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

import 'styles/pages/dashboard/index.scss';


export default function Dashboard() {
  const {signOut} = useAuth();
  return (
    <>
    <Sidebar>
      <Link to="" className="btn btn-borderless btn-dark-blue active">
        <FiMapPin size={24}></FiMapPin>
      </Link>
      <Link to="" className="btn btn-borderless btn-dark-blue badge">
        <HiOutlineExclamationCircle size={24}></HiOutlineExclamationCircle>
      </Link>
    </Sidebar>
    <div className="dashboard-page" id="dashboard-page">
      
      <div className="content-wrapper">
        <header className="dashboard-header">
          <h1>Orfanatos Cadastrados</h1>
          <span>2 orfanatos</span>
        </header>

        <div className="dashboard-content">
          <div className="orfanatos-lista">
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={true} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
            <Orphanage id={1} name="Orf. Esperança" pendingApproval={false} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}