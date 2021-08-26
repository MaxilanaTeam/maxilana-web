/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 99047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ ProductBadge_ProductBadge; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/index.js
var lib = __webpack_require__(39389);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/products/ProductBadge/ProductBadge.module.css
var ProductBadge_module = __webpack_require__(73227);
var ProductBadge_module_default = /*#__PURE__*/__webpack_require__.n(ProductBadge_module);
;// CONCATENATED MODULE: ./components/products/ProductBadge/ProductBadge.tsx






const ProductBadge = ({
  type
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("span", {
    className: classnames_default()((ProductBadge_module_default()).root, (ProductBadge_module_default())[type]),
    children: type === 'shop' ? /*#__PURE__*/jsx_runtime.jsx(lib.ShopFilled, {}) : /*#__PURE__*/jsx_runtime.jsx(lib.CarFilled, {})
  });
};

/* harmony default export */ var ProductBadge_ProductBadge = (ProductBadge);
;// CONCATENATED MODULE: ./components/products/ProductBadge/index.ts


/***/ }),

/***/ 7307:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* reexport */ Collapse_Collapse; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/index.js
var lib = __webpack_require__(39389);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./hooks/useToggleState.ts
var useToggleState = __webpack_require__(92161);
// EXTERNAL MODULE: ./components/ui/Collapse/Collapse.module.css
var Collapse_module = __webpack_require__(64077);
var Collapse_module_default = /*#__PURE__*/__webpack_require__.n(Collapse_module);
;// CONCATENATED MODULE: ./components/ui/Collapse/Collapse.tsx








const Collapse = ({
  title,
  children
}) => {
  const [collapsed, toggle] = (0,useToggleState/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()((Collapse_module_default()).root, {
      [(Collapse_module_default()).collapsed]: collapsed
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (Collapse_module_default()).header,
      role: "button",
      onClick: () => toggle(),
      children: [typeof title === 'string' ? /*#__PURE__*/jsx_runtime.jsx("span", {
        className: "heading",
        children: title
      }) : title, /*#__PURE__*/jsx_runtime.jsx(lib.DownOutlined, {
        className: (Collapse_module_default()).indicator
      })]
    }), !collapsed && /*#__PURE__*/jsx_runtime.jsx("div", {
      className: (Collapse_module_default()).content,
      children: children
    })]
  });
};

/* harmony default export */ var Collapse_Collapse = (Collapse);
;// CONCATENATED MODULE: ./components/ui/Collapse/index.ts


/***/ }),

/***/ 11325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Il": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.I; },
/* harmony export */   "zx": function() { return /* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.z; },
/* harmony export */   "UO": function() { return /* reexport safe */ _Collapse__WEBPACK_IMPORTED_MODULE_7__.Z; }
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7646);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80629);
/* harmony import */ var _CheckableTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76702);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14821);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33897);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81124);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82481);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7307);









/***/ }),

/***/ 92161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


const useToggleState = (value = false) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);

  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};

/* harmony default export */ __webpack_exports__["Z"] = (useToggleState);

/***/ }),

/***/ 9273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ busqueda; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./api/getAllCities.ts
var getAllCities = __webpack_require__(53465);
// EXTERNAL MODULE: ./components/layout/index.ts
var layout = __webpack_require__(19115);
// EXTERNAL MODULE: ./api/getProducts.ts
var getProducts = __webpack_require__(29788);
// EXTERNAL MODULE: ./components/ui/index.ts
var ui = __webpack_require__(11325);
// EXTERNAL MODULE: ./utils/slugify.ts
var slugify = __webpack_require__(32105);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/antd/lib/index.js
var lib = __webpack_require__(69215);
// EXTERNAL MODULE: ./node_modules/lodash.omit/index.js
var lodash_omit = __webpack_require__(76427);
var lodash_omit_default = /*#__PURE__*/__webpack_require__.n(lodash_omit);
// EXTERNAL MODULE: ./utils/parseQuery.ts
var parseQuery = __webpack_require__(38151);
// EXTERNAL MODULE: ./components/products/ProductBadge/index.ts + 1 modules
var ProductBadge = __webpack_require__(99047);
// EXTERNAL MODULE: ./components/products/ProductsFilters/ProductsFilters.module.css
var ProductsFilters_module = __webpack_require__(92330);
var ProductsFilters_module_default = /*#__PURE__*/__webpack_require__.n(ProductsFilters_module);
;// CONCATENATED MODULE: ./components/products/ProductsFilters/ProductsFilters.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const categories = [{
  id: 1,
  name: 'Joyería',
  categoriesId: [1, 3, 4]
}, {
  id: 2,
  name: 'Relojes',
  categoriesId: [1, 3, 4]
}, {
  id: 3,
  name: 'Computadoras',
  categoriesId: [1, 3, 4]
}, {
  id: 4,
  name: 'Herramientas',
  categoriesId: [1, 3, 4]
}, {
  id: 5,
  name: 'Instrumentos musicales',
  categoriesId: [1, 3, 4]
}, {
  id: 6,
  name: 'Automobiles',
  categoriesId: [1, 3, 4]
}, {
  id: 7,
  name: 'Celulares',
  categoriesId: [1, 3, 4]
}, {
  id: 8,
  name: 'Electrodomésticos',
  categoriesId: [1, 3, 4]
}, {
  id: 9,
  name: 'Videojuegos',
  categoriesId: [1, 3, 4]
}];

const ProductsFilters = ({
  cities
}) => {
  const {
    query
  } = (0,router.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (ProductsFilters_module_default()).root,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime.jsx("span", {
        className: "heading mx-4 py-6",
        children: "Categor\xEDas"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
        className: (ProductsFilters_module_default()).categories,
        children: [/*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: `/busqueda?${(0,parseQuery/* default */.Z)(lodash_omit_default()(query, 'category'))}`,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (ProductsFilters_module_default()).categoryItem,
              children: "Todas las categor\xEDas"
            })
          })
        }), categories.map(category => /*#__PURE__*/jsx_runtime.jsx("li", {
          children: /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
            href: `/busqueda?${(0,parseQuery/* default */.Z)(_objectSpread(_objectSpread({}, query), {}, {
              categoria: category.categoriesId.join(',')
            }))}`,
            children: /*#__PURE__*/jsx_runtime.jsx("a", {
              className: (ProductsFilters_module_default()).categoryItem,
              children: category.name
            })
          })
        }, category.id))]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "p-4 pb-0",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center mb-6",
        children: [/*#__PURE__*/jsx_runtime.jsx("span", {
          className: "h6",
          children: "Filtros"
        }), /*#__PURE__*/jsx_runtime.jsx(next_link.default, {
          href: "/busqueda",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            className: "uppercase text-price text-xs",
            children: "Borrar filtros"
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(ui/* Collapse */.UO, {
        title: "Ubicaci\xF3n",
        children: /*#__PURE__*/jsx_runtime.jsx(lib/* Radio.Group */.Y8.Group, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [/*#__PURE__*/jsx_runtime.jsx(lib/* Radio */.Y8, {
              value: "all",
              className: "block",
              children: "Todas"
            }), !!cities && cities.map(city => /*#__PURE__*/jsx_runtime.jsx(lib/* Radio */.Y8, {
              value: city.id,
              className: "block",
              children: city.name
            }, city.id))]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "p-4",
      children: /*#__PURE__*/jsx_runtime.jsx(lib/* Checkbox.Group */.XZ.Group, {
        className: "saleTypeCheckboxes",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(lib/* Space */.T, {
          direction: "vertical",
          className: "space-y-3",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(lib/* Checkbox */.XZ, {
            value: "inStore",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: ["Venta en sucursal", /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "block text-secondary",
                children: "Culiacan y Navolato"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(ProductBadge/* default */.Z, {
              type: "shop"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(lib/* Checkbox */.XZ, {
            value: "online",
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
              children: ["Venta en l\xEDnea", /*#__PURE__*/jsx_runtime.jsx("span", {
                className: "block text-secondary",
                children: "Env\xEDos a todo m\xE9xico"
              })]
            }), /*#__PURE__*/jsx_runtime.jsx(ProductBadge/* default */.Z, {
              type: "car"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var ProductsFilters_ProductsFilters = (ProductsFilters);
;// CONCATENATED MODULE: ./components/products/ProductsFilters/index.ts

;// CONCATENATED MODULE: ./components/products/index.ts


;// CONCATENATED MODULE: ./pages/busqueda.tsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const getServerSideProps = async ctx => {
  const {
    query
  } = ctx;

  const _ref = query || {},
        {
    page,
    limit
  } = _ref,
        filters = _objectWithoutProperties(_ref, ["page", "limit"]);

  try {
    const _await$getProducts = await (0,getProducts/* default */.Z)(query),
          {
      rows: products
    } = _await$getProducts,
          pagination = _objectWithoutProperties(_await$getProducts, ["rows"]);

    const cities = await (0,getAllCities/* default */.Z)();
    return {
      props: {
        pagination,
        products,
        filters,
        cities
      }
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: 40,
      props: {}
    };
  }
};

const Busqueda = ({
  pagination,
  products,
  cities
}) => {
  const imageBaseURL = "https://www.maxilana.com/images/remates";

  if (!imageBaseURL) {
    throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
  }

  return /*#__PURE__*/jsx_runtime.jsx(layout/* Layout */.Ar, {
    title: "Buscador de productos",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
      className: "container mx-auto p-4 flex gap-8 flex-col md:flex-row mb-12 mt-4",
      children: [/*#__PURE__*/jsx_runtime.jsx("aside", {
        className: "min-w-[250px]",
        children: /*#__PURE__*/jsx_runtime.jsx(ProductsFilters_ProductsFilters, {
          cities: cities
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex-",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "h4",
          children: "Resultado de la b\xFAsqueda"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          className: "text-secondary",
          children: [pagination === null || pagination === void 0 ? void 0 : pagination.count, " productos"]
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 my-12",
          children: !!(products !== null && products !== void 0 && products.length) && products.map(product => /*#__PURE__*/jsx_runtime.jsx(ui/* ProductCard */.Il, {
            href: product !== null && product !== void 0 && product.slug ? `/producto/${product === null || product === void 0 ? void 0 : product.slug}` : `/producto/${product.id}-${(0,slugify/* default */.Z)(product.name)}`,
            title: product.name,
            price: product.price,
            salePrice: product.netPrice,
            image: `${imageBaseURL}/${product.code}.jpg`
          }, product.id))
        }), /*#__PURE__*/jsx_runtime.jsx(ui/* Button */.zx, {
          text: "Cargar mas",
          fullWidth: true,
          theme: "secondary"
        })]
      })]
    })
  });
};

/* harmony default export */ var busqueda = (Busqueda);

/***/ }),

/***/ 62809:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; },
/* harmony export */   "unstable_getStaticParams": function() { return /* binding */ unstable_getStaticParams; },
/* harmony export */   "unstable_getStaticProps": function() { return /* binding */ unstable_getStaticProps; },
/* harmony export */   "unstable_getStaticPaths": function() { return /* binding */ unstable_getStaticPaths; },
/* harmony export */   "unstable_getServerProps": function() { return /* binding */ unstable_getServerProps; },
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "_app": function() { return /* binding */ _app; },
/* harmony export */   "renderReqToHTML": function() { return /* binding */ renderReqToHTML; },
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3660);
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35706);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32738);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19392);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"NEXT_PUBLIC_API_BASEURL=https://www.maxilana.com/api\n\nNEXT_PUBLIC_PRODUCT_IMAGES_BASEURL=https://www.maxilana.com/images/remates\n# Agregar al final /[ProductId].jpg (TodPas las imágenes miden 512x512 pixeles)\n# los productos pueden tener hasta 6 imágenes para obtenerlas todas se debe agregar _1,_2 después\n# del id del producto y antes de .jpg\n# Ejemplo:  https://www.maxilana.com/images/remates/:ProductId_2.jpg\n"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(6021)

      const appMod = __webpack_require__(71476)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(9273)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ __webpack_exports__["default"] = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/busqueda",
        buildId: "CczD5jIf00xI7Yu6VlF5-",
        escapedBuildId: "CczD5jIf00xI7Yu6VlF5\-",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"10971749d0d071a82f42371a969a8d41",previewModeSigningKey:"eab13b487472eb0bff5fd8e933a55e93ca7a7835212f45aaf161c6aa30138ea1",previewModeEncryptionKey:"891c37a9705e6ac84c75332ae14f664442a06292b70a6b52cc95c86f16e58b0e"}
      })
      
    

/***/ }),

/***/ 92330:
/***/ (function(module) {

// Exports
module.exports = {
	"root": "ProductsFilters_root__3aqwc",
	"categories": "ProductsFilters_categories__3_HbD",
	"categoryItem": "ProductsFilters_categoryItem__3Q6vV"
};


/***/ }),

/***/ 64077:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Collapse_header__3V6Am",
	"indicator": "Collapse_indicator__1Hl0E",
	"collapsed": "Collapse_collapsed__2wm1x"
};


/***/ }),

/***/ 42357:
/***/ (function(module) {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 64293:
/***/ (function(module) {

"use strict";
module.exports = require("buffer");;

/***/ }),

/***/ 45532:
/***/ (function(module) {

"use strict";
module.exports = require("critters");;

/***/ }),

/***/ 76417:
/***/ (function(module) {

"use strict";
module.exports = require("crypto");;

/***/ }),

/***/ 28614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 35747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 98605:
/***/ (function(module) {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 57211:
/***/ (function(module) {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 33700:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");;

/***/ }),

/***/ 12087:
/***/ (function(module) {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 85622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 71191:
/***/ (function(module) {

"use strict";
module.exports = require("querystring");;

/***/ }),

/***/ 92413:
/***/ (function(module) {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 24304:
/***/ (function(module) {

"use strict";
module.exports = require("string_decoder");;

/***/ }),

/***/ 33867:
/***/ (function(module) {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ 78835:
/***/ (function(module) {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 31669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 78761:
/***/ (function(module) {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [4322,9293,446,9917,8647,8027,7912,1428,2474,8343,2481,4095,629,5280,2667,4474,3382,6675,3368,2206], function() { return __webpack_require__(62809); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [{"url":"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap","content":"@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}"}];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);/* webpack/runtime/require chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			8068: 1,
/******/ 			7307: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = function(chunkId) { return installedChunks[chunkId]; };
/******/ 		
/******/ 		var installChunk = function(chunk) {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			__webpack_require__.e(4322);
/******/ 			__webpack_require__.e(9293);
/******/ 			__webpack_require__.e(446);
/******/ 			__webpack_require__.e(9917);
/******/ 			__webpack_require__.e(8647);
/******/ 			__webpack_require__.e(8027);
/******/ 			__webpack_require__.e(7912);
/******/ 			__webpack_require__.e(1428);
/******/ 			__webpack_require__.e(2474);
/******/ 			__webpack_require__.e(8343);
/******/ 			__webpack_require__.e(2481);
/******/ 			__webpack_require__.e(4095);
/******/ 			__webpack_require__.e(629);
/******/ 			__webpack_require__.e(5280);
/******/ 			__webpack_require__.e(2667);
/******/ 			__webpack_require__.e(4474);
/******/ 			__webpack_require__.e(3382);
/******/ 			__webpack_require__.e(6675);
/******/ 			__webpack_require__.e(3368);
/******/ 			__webpack_require__.e(2206);
/******/ 			return next();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;