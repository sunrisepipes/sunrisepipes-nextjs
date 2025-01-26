import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team1 from '@/app/Components/Team/Team1';
import Choose4 from '@/app/Components/Choose/Choose4';
import React from 'react';

const page = () => {
  return (
    <div>
        <BreadCumb
          bgimg="/assets/images/bg/breadcumgBg.png"
          Title="Team"
      ></BreadCumb>
      <Choose4 className="section-padding"></Choose4>
      <Team1></Team1>      
    </div>
  );
};

export default page;