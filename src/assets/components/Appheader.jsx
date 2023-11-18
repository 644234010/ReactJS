import { useState } from "react";
import TrangItem from "./TrangItem";
function  AppHeader({onButtonClick}){
    const backgroundStyles = {
        backgroundImage: 'url("/Image/02.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '99vw',height: '65vh',
      };
      return(
      <header style={backgroundStyles}  >
        <h2 className="h2">Trang Tour</h2>
        <h1 className="h1">ยินดีต้อนรับสู่ 5 สถานที่ท่องเที่ยวจังหวัดตรัง</h1>
        <button className='buttonX' onClick={onButtonClick}>กดเพื่อดูรายละเอียด</button>
        </header>
      )
}
export default AppHeader;