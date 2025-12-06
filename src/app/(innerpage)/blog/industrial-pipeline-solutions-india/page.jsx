import Blog5 from '@/app/Components/Blog/industrial-pipeline-solutions-india/blog5';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
         <BreadCumb
                bgimg="/assets/images/bg/breadcumgBg.png"
                Title="Industrial pipeline Solutions India"
            ></BreadCumb>
            <Blog5></Blog5>        
    </div>
  );
};

export default page;