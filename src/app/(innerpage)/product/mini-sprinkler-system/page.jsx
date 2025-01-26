import BreadCumb from '@/app/Components/Common/BreadCumb';
import MiniSprinkler from '@/app/Components/ProjectDetails/MiniSprinkler';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Mini Sprinkler System Details"
            ></BreadCumb>    
            <MiniSprinkler></MiniSprinkler>       
    </div>
  );
};

export default page;