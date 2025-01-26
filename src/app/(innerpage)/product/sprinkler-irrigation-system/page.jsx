import BreadCumb from '@/app/Components/Common/BreadCumb';
import MdpeDetails from '@/app/Components/ProjectDetails/MdpePipes';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Sprinkler Irrigation System Details"
            ></BreadCumb>    
            <MdpeDetails></MdpeDetails>       
    </div>
  );
};

export default page;