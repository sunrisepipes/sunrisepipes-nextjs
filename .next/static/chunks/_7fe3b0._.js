(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7fe3b0._.js", {

"[project]/src/app/Components/BlogDetails/BlogDetails.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const BlogDetails = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogDetails.useEffect": ()=>{
            loadBackgroudImages();
        }
    }["BlogDetails.useEffect"], []);
    // --------------------------
    // 9 BLOG DETAIL FUNCTIONS
    // --------------------------
    const blog1 = ()=>({
            title: "Blog 1 – Retail Industry Changes",
            image: "/assets/images/blog/blogCardThumb3_1.png",
            content: `
      Blog 1 full details here...
      Retail industry facing modern challenges...
    `
        });
    const blog2 = ()=>({
            title: "Blog 2 – Cyber Security Insights",
            image: "/assets/images/blog/blogCardThumb3_2.png",
            content: `
      Blog 2 details...
      Complete Cyber Security report...
    `
        });
    const blog3 = ()=>({
            title: "Blog 3 – IT Services Update",
            image: "/assets/images/blog/blogCardThumb3_3.png",
            content: `
      Blog 3 description here...
      IT Services overview...
    `
        });
    const blog4 = ()=>({
            title: "Blog 4 – Software Development Trends",
            image: "/assets/images/blog/blogCardThumb3_1.png",
            content: `
      Blog 4 full content...
    `
        });
    const blog5 = ()=>({
            title: "Blog 5 – App Development Tips",
            image: "/assets/images/blog/blogCardThumb3_2.png",
            content: `
      Blog 5 details...
    `
        });
    const blog6 = ()=>({
            title: "Blog 6 – UI/UX Design Cases",
            image: "/assets/images/blog/blogCardThumb3_3.png",
            content: `
      Blog 6 content...
    `
        });
    const blog7 = ()=>({
            title: "Blog 7 – Cloud Technology",
            image: "/assets/images/blog/blogCardThumb3_1.png",
            content: `
      Cloud tech full details...
    `
        });
    const blog8 = ()=>({
            title: "Blog 8 – Business Digitalization",
            image: "/assets/images/blog/blogCardThumb3_2.png",
            content: `
      Business digitalization full blog...
    `
        });
    const blog9 = ()=>({
            title: "Blog 9 – IT Consultancy Growth",
            image: "/assets/images/blog/blogCardThumb3_3.png",
            content: `
      IT consultancy trends...
    `
        });
    // --------------------------
    // FUNCTION MAPPING
    // --------------------------
    const blogData = {
        1: blog1(),
        2: blog2(),
        3: blog3(),
        4: blog4(),
        5: blog5(),
        6: blog6(),
        7: blog7(),
        8: blog8(),
        9: blog9()
    };
    // --------------------------
    // GET ID FROM URL
    // --------------------------
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const id = params.get("id") || 1;
    // SELECTED BLOG
    const currentBlog = blogData[id];
    // --------------------------
    // MAIN HTML TEMPLATE
    // --------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "news-standard section-padding fix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "news-details-area",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row g-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-lg-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "blog-post-details",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "single-blog-post",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "post-featured-thumb",
                                            "data-background": currentBlog.image
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "post-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "wow fadeInUp",
                                                    "data-wow-delay": ".4s",
                                                    children: currentBlog.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3 wow fadeInUp",
                                                    "data-wow-delay": ".6s",
                                                    dangerouslySetInnerHTML: {
                                                        __html: currentBlog.content
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-12 col-lg-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Components/BlogDetails/BlogDetails.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
_s(BlogDetails, "4Vs5pK3SYAgENbqCs7t8mYvGceE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = BlogDetails;
const __TURBOPACK__default__export__ = BlogDetails;
var _c;
__turbopack_refresh__.register(_c, "BlogDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // "use client"
 // import { useEffect } from "react";
 // import loadBackgroudImages from "../Common/loadBackgroudImages";
 // import Link from "next/link";
 // import Image from "next/image";
 // const BlogDetails = () => {
 //         useEffect(() => {
 //             loadBackgroudImages();
 //           }, []);
 //     return (
 //         <section className="news-standard section-padding fix">
 //         <div className="container">
 //             <div className="news-details-area">
 //                 <div className="row g-5">
 //                     <div className="col-12 col-lg-8">
 //                         <div className="blog-post-details">
 //                             <div className="single-blog-post">
 //                                 <div className="post-featured-thumb" data-background="/assets/images/blog/blogCardThumb3_1.png">
 //                                 </div>
 //                                 <div className="post-content">
 //                                     <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
 //                                         <li>
 //                                         <i className="bi bi-person"></i>
 //                                             By Admin
 //                                         </li>
 //                                         <li>
 //                                         <i className="bi bi-chat"></i>
 //                                             2 Comments
 //                                         </li>
 //                                         <li>
 //                                         <Image src="/assets/images/icon/tagIcon.png" alt="img" width={20} height={20}   />
 //                                             IT Services
 //                                         </li>
 //                                     </ul>
 //                                     <h3 className="wow fadeInUp" data-wow-delay=".4s">Tackling the Changes of Retail
 //                                         Industry</h3>
 //                                     <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
 //                                         Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
 //                                         dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
 //                                         exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
 //                                         aute irure and dolor in reprehenderit.
 //                                     </p>
 //                                     <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
 //                                         The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta
 //                                         arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus
 //                                         libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac
 //                                         ante rutrum sed the is sodales augue consequat.
 //                                     </p>
 //                                     <p className="wow fadeInUp" data-wow-delay="1s">
 //                                         Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis
 //                                         convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra
 //                                         bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat
 //                                         auctor.
 //                                     </p>
 //                                     <div className="hilight-text mt-4 mb-4 wow fadeInUp" data-wow-delay=".8s">
 //                                         <p>Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
 //                                             ultricies urnacondimentum, sapien neque
 //                                             lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci
 //                                             sit
 //                                             amet
 //                                             est vehicula.
 //                                         </p>
 //                                         <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
 //                                             viewBox="0 0 36 36" fill="none">
 //                                             <path
 //                                                 d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
 //                                                 stroke="#7444FD" />
 //                                             <path
 //                                                 d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
 //                                                 stroke="#7444FD" />
 //                                         </svg>
 //                                     </div>
 //                                     <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
 //                                         Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
 //                                         in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
 //                                         consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
 //                                         imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
 //                                         Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
 //                                         Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
 //                                         condimentum, vel euismod erat placerat. In iaculis arcu eros.
 //                                     </p>
 //                                     <div className="row g-4 wow fadeInUp" data-wow-delay="1s">
 //                                         <div className="col-lg-6">
 //                                             <div className="details-image">
 //                                             <Image src="/assets/images/blog/blogCardThumb3_2.png" alt="img" width={352} height={256}   />
 //                                             </div>
 //                                         </div>
 //                                         <div className="col-lg-6">
 //                                             <div className="details-image">
 //                                             <Image src="/assets/images/blog/blogCardThumb3_3.png" alt="img" width={352} height={256}   />
 //                                             </div>
 //                                         </div>
 //                                     </div>
 //                                     <p className="pt-5 wow fadeInUp" data-wow-delay="1.2s">
 //                                         Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
 //                                         dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
 //                                         exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
 //                                         aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do
 //                                         eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
 //                                         veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut
 //                                         aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in
 //                                         reprehenderit.
 //                                     </p>
 //                                 </div>
 //                             </div>
 //                             <div className="row tag-share-wrap mt-4 mb-30 wow fadeInUp" data-wow-delay=".8s">
 //                                 <div className="col-lg-8 col-12">
 //                                     <div className="tagcloud">
 //                                         <h6 className="d-inline me-2">Tags: </h6>
 //                                         <a href="#">News</a>
 //                                         <a href="#">business</a>
 //                                         <a href="#">marketing</a>
 //                                     </div>
 //                                 </div>
 //                                 <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
 //                                     data-wow-delay="1.2s">
 //                                     <div className="social-share">
 //                                         <span className="me-3">Share:</span>
 //                                         <a href="#"><i className="bi bi-facebook"></i></a>
 //                                         <a href="#"><i className="bi bi-twitter"></i></a>
 //                                         <a href="#"><i className="bi bi-linkedin"></i></a>
 //                                         <a href="#"><i className="bi bi-pinterest"></i></a>
 //                                     </div>
 //                                 </div>
 //                             </div>
 //                             <div className="comments-area wow fadeInUp" data-wow-delay="1.2s">
 //                                 <div className="comments-heading">
 //                                     <h3>02 Comments</h3>
 //                                 </div>
 //                                 <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
 //                                     <div className="image">
 //                                     <Image src="/assets/images/blog/blogProfileThumb3_1.png" alt="img" width={96} height={96}   />
 //                                     </div>
 //                                     <div className="content">
 //                                         <div
 //                                             className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
 //                                             <div className="con">
 //                                                 <h5><a href="#">Albert Flores</a></h5>
 //                                                 <span>March 20, 2024 at 2:37 pm</span>
 //                                             </div>
 //                                             <div className="btn">
 //                                                 <a href="#" className="reply">Reply</a>
 //                                             </div>
 //                                         </div>
 //                                         <p className="mt-10 mb-0">Neque porro est qui dolorem ipsum quia quaed inventor
 //                                             veritatis et quasi
 //                                             architecto var sed efficitur turpis gilla sed
 //                                             sit amet finibus eros. Lorem Ipsum is simply dummy
 //                                         </p>
 //                                     </div>
 //                                 </div>
 //                                 <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
 //                                     <div className="image">
 //                                     <Image src="/assets/images/blog/blogProfileThumb3_2.png" alt="img" width={96} height={96}   />
 //                                     </div>
 //                                     <div className="content">
 //                                         <div
 //                                             className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
 //                                             <div className="con">
 //                                                 <h5><a href="#">Alex Flores</a></h5>
 //                                                 <span>March 20, 2024 at 2:37 pm</span>
 //                                             </div>
 //                                             <div className="btn">
 //                                                 <a href="#" className="reply">Reply</a>
 //                                             </div>
 //                                         </div>
 //                                         <p className="mt-10 mb-0">Neque porro est qui dolorem ipsum quia quaed inventor
 //                                             veritatis et quasi
 //                                             architecto var sed efficitur turpis gilla sed
 //                                             sit amet finibus eros. Lorem Ipsum is simply dummy
 //                                         </p>
 //                                     </div>
 //                                 </div>
 //                             </div>
 //                             <div className="comment-form-wrap pt-5 wow fadeInUp" data-wow-delay="1.2s">
 //                                 <h3>Leave a comments</h3>
 //                                 <form id="contact-form">
 //                                     <div className="row g-4">
 //                                         <div className="col-lg-6">
 //                                             <div className="form-clt">
 //                                                 <input type="text" name="name" id="name" placeholder="Your Name" />
 //                                             </div>
 //                                         </div>
 //                                         <div className="col-lg-6">
 //                                             <div className="form-clt">
 //                                                 <input type="text" name="email" id="email2" placeholder="Your Email" />
 //                                             </div>
 //                                         </div>
 //                                         <div className="col-lg-12">
 //                                             <div className="form-clt">
 //                                                 <textarea name="message" id="message"
 //                                                     placeholder="Write Message"></textarea>
 //                                             </div>
 //                                         </div>
 //                                         <div className="col-lg-6">
 //                                             <button type="submit" className="theme-btn">
 //                                                 Post a Comment
 //                                                 <i className="bi bi-arrow-right"></i>
 //                                             </button>
 //                                         </div>
 //                                     </div>
 //                                 </form>
 //                             </div>
 //                         </div>
 //                     </div>
 //                     <div className="col-12 col-lg-4">
 //                     <div className="main-sidebar">
 //                         <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
 //                             <div className="wid-title">
 //                                 <h3>Search</h3>
 //                             </div>
 //                             <div className="search-widget">
 //                                 <form action="#">
 //                                     <input type="text" placeholder="Search here" />
 //                                     <button type="submit"><i className="bi bi-search"></i></button>
 //                                 </form>
 //                             </div>
 //                         </div>
 //                         <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
 //                             <div className="wid-title">
 //                                 <h3>Categories</h3>
 //                             </div>
 //                             <div className="news-widget-categories">
 //                                 <ul>
 //                                     <li><Link href="/blog/blog-details">Database Security <span>(08)</span></Link></li>
 //                                     <li><Link href="/blog/blog-details">IT Consultancy <span>(11)</span></Link></li>
 //                                     <li className="active"><Link href="/blog/blog-details">App Development <span>(12)</span></Link>
 //                                     </li>
 //                                     <li><Link href="/blog/blog-details">UI/UX Design <span>(18)</span></Link></li>
 //                                     <li><Link href="/blog/blog-details">Cyber Security <span>(07)</span></Link></li>
 //                                 </ul>
 //                             </div>
 //                         </div>
 //                         <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
 //                             <div className="wid-title">
 //                                 <h3>Recent Post</h3>
 //                             </div>
 //                             <div className="recent-post-area">
 //                                 <div className="recent-items">
 //                                     <div className="recent-thumb">
 //                                         <Image src="/assets/images/blog/blogRecentThumb1_1.jpg" alt="img" width={78} height={79}   />
 //                                     </div>
 //                                     <div className="recent-content">
 //                                         <ul>
 //                                             <li>
 //                                                <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
 //                                                 18 Dec, 2024
 //                                             </li>
 //                                         </ul>
 //                                         <h6>
 //                                             <Link href="/blog/blog-details">
 //                                                 Keep Your Business Safe & 
 //                                                 Endure High Availability
 //                                             </Link>
 //                                         </h6>
 //                                     </div>
 //                                 </div>
 //                                 <div className="recent-items">
 //                                     <div className="recent-thumb">
 //                                          <Image src="/assets/images/blog/blogRecentThumb1_2.jpg" alt="img" width={78} height={79}   />
 //                                     </div>
 //                                     <div className="recent-content">
 //                                         <ul>
 //                                             <li>
 //                                                 <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
 //                                                 18 Dec, 2024
 //                                             </li>
 //                                         </ul>
 //                                         <h6>
 //                                             <Link href="/blog/blog-details">
 //                                                 Tacking the Changes of <br/>
 //                                                 Retail Industry
 //                                             </Link>
 //                                         </h6>
 //                                     </div>
 //                                 </div>
 //                                 <div className="recent-items">
 //                                     <div className="recent-thumb">
 //                                         <Image src="/assets/images/blog/blogRecentThumb1_3.jpg" alt="img" width={78} height={79}   />
 //                                     </div>
 //                                     <div className="recent-content">
 //                                         <ul>
 //                                             <li>
 //                                                <Image src="/assets/images/icon/calendarIcon.svg" alt="img" width={20} height={20}   />
 //                                                 18 Dec, 2024
 //                                             </li>
 //                                         </ul>
 //                                         <h6>
 //                                             <Link href="/blog/blog-details">
 //                                                 What’s the Holding Back <br/>
 //                                                 the It Solution
 //                                             </Link>
 //                                         </h6>
 //                                     </div>
 //                                 </div>
 //                             </div>
 //                         </div>
 //                         <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".9s">
 //                             <div className="wid-title">
 //                                 <h3>Tags</h3>
 //                             </div>
 //                             <div className="news-widget-categories">
 //                                 <div className="tagcloud">
 //                                     <a href="#">Security</a>
 //                                     <a href="#">Business</a>
 //                                     <a href="#">Digital</a>
 //                                     <a href="#">Technology</a>
 //                                     <a href="#">Change</a>
 //                                     <a href="#">Video</a>
 //                                     <a href="#">UI/UX Desing</a>
 //                                     <a href="#">Startup</a>
 //                                     <a href="#">Services</a>
 //                                 </div>
 //                             </div>
 //                         </div>
 //                     </div>
 //                     </div>
 //                 </div>
 //             </div>
 //         </div>
 //     </section>
 //     );
 // };
 // export default BlogDetails;
}}),
"[project]/src/app/Components/Common/loadBackgroudImages.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>loadBackgroudImages)
});
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Common/BreadCumb.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/Components/Common/loadBackgroudImages.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const BreadCumb = ({ Title, bgimg })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BreadCumb.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Common$2f$loadBackgroudImages$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        }
    }["BreadCumb.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "breadcumb-section fix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "breadcumb-container-wrapper",
            "data-background": bgimg,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shape1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/shape/breadCumbShape1_1.png",
                            alt: "img",
                            width: 669,
                            height: 848
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                            lineNumber: 18,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                        lineNumber: 18,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shape2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/shape/breadCumbShape1_2.png",
                            alt: "img",
                            width: 698,
                            height: 877
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                            lineNumber: 19,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                        lineNumber: 19,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "breadcumb-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "page-heading",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: Title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                                    lineNumber: 22,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "links",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: [
                                                "Home",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "slash",
                                                    children: "/"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                                                    lineNumber: 24,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                                            lineNumber: 24,
                                            columnNumber: 23
                                        }, this),
                                        Title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                                    lineNumber: 23,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                            lineNumber: 21,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                        lineNumber: 20,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
                lineNumber: 17,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Common/BreadCumb.jsx",
        lineNumber: 15,
        columnNumber: 7
    }, this);
};
_s(BreadCumb, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = BreadCumb;
const __TURBOPACK__default__export__ = BreadCumb;
var _c;
__turbopack_refresh__.register(_c, "BreadCumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(innerpage)/blog/blog-details/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_7fe3b0._.js.map