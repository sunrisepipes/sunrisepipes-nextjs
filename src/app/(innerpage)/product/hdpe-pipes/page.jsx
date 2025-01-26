import BreadCumb from '@/app/Components/Common/BreadCumb';
import HdpeDetails from '@/app/Components/ProjectDetails/HdpePipes';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="HDPE Details"
            ></BreadCumb>    
            <HdpeDetails></HdpeDetails>       
    </div>
  );
};

export default page;