import './index.scss'
import { useEffect } from 'react'
import Header from "../../components/Admin/Header"
import { Redirect } from 'react-router-dom'
import MainContent from '../../components/Admin/MainContent'

function Admin() {
  useEffect(
    function () {
      document.title = "Admin";
    }
    , []);

  const userType = JSON.parse(window.localStorage.getItem('userInfo'))?.type === 'admin'

  if (!userType) {
    return <Redirect to="/" />
  }

  return (
    <div id="admin-container">
      <Header />
      <MainContent />
    </div>
  );
}

export default Admin;