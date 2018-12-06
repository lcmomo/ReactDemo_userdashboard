import  React from 'react';
import  style from './Home.css'
import  Header from '../components/Header.js'
import Users from './users/pages'
const MainLayout=({children,location})=>{
  return (
    <div className={style.normal}>
      <Header location={location}></Header>
      <div className={style.content}>
        <div className={style.main}>
          <Users/>
        </div>
      </div>

    </div>
  );
}
export default MainLayout;
