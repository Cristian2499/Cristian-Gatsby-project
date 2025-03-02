"use strict";
exports.id = "component---src-templates-blog-post-js";
exports.ids = ["component---src-templates-blog-post-js"];
exports.modules = {

/***/ "./src/templates/blog-post.js?export=default":
/*!***************************************************!*\
  !*** ./src/templates/blog-post.js?export=default ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BlogPost = ({
  data
}) => {
  const post = data.markdownRemark;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  }));
};
const query = "2217683904";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-js.js.map