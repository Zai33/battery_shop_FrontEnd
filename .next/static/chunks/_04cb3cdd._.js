(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/breadcrumb/BreadCrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
;
;
const Breadcrumb = (param)=>{
    let { items } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center text-gray-600 text-sm mt-4 mb-4",
        children: items.map((item, index)=>{
            const isLast = index === items.length - 1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    item.href && !isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "hover:text-blue-600 cursor-pointer transition",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/breadcrumb/BreadCrumb.tsx",
                        lineNumber: 22,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isLast ? "text-gray-900 font-semibold" : "",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/components/breadcrumb/BreadCrumb.tsx",
                        lineNumber: 29,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "mx-2 w-4 h-4 text-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/components/breadcrumb/BreadCrumb.tsx",
                        lineNumber: 34,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/components/breadcrumb/BreadCrumb.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/breadcrumb/BreadCrumb.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Breadcrumb;
const __TURBOPACK__default__export__ = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/libs/apiErrorHandler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleApiError",
    ()=>handleApiError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const handleApiError = (error)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
        var _error_response_data, _error_response, _error_response_data1, _error_response1;
        const backendMessage = ((_error_response = error.response) === null || _error_response === void 0 ? void 0 : (_error_response_data = _error_response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || ((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data1 = _error_response1.data) === null || _error_response_data1 === void 0 ? void 0 : _error_response_data1.error) || "Request failed";
        throw new Error(backendMessage);
    }
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error("Network error. Please try again.");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/libs/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateBuyback",
    ()=>CreateBuyback,
    "CreateNewProduct",
    ()=>CreateNewProduct,
    "CreateNewSupplier",
    ()=>CreateNewSupplier,
    "DeleteBuyBackById",
    ()=>DeleteBuyBackById,
    "DeleteProductById",
    ()=>DeleteProductById,
    "DeleteSaleById",
    ()=>DeleteSaleById,
    "DeleteSupplier",
    ()=>DeleteSupplier,
    "GetAllBuyBacks",
    ()=>GetAllBuyBacks,
    "GetAllCategories",
    ()=>GetAllCategories,
    "GetAllProducts",
    ()=>GetAllProducts,
    "GetAllSale",
    ()=>GetAllSale,
    "GetAllSales",
    ()=>GetAllSales,
    "GetAllSuppliers",
    ()=>GetAllSuppliers,
    "GetBuyBackById",
    ()=>GetBuyBackById,
    "GetProductById",
    ()=>GetProductById,
    "GetSaleById",
    ()=>GetSaleById,
    "LoginUser",
    ()=>LoginUser,
    "ResendOtp",
    ()=>ResendOtp,
    "SaleCreate",
    ()=>SaleCreate,
    "SearchProductByName",
    ()=>SearchProductByName,
    "SignUpUser",
    ()=>SignUpUser,
    "UpdateProductById",
    ()=>UpdateProductById,
    "UpdateSupplier",
    ()=>UpdateSupplier,
    "VerifyOtp",
    ()=>VerifyOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/apiErrorHandler.ts [app-client] (ecmascript)");
;
;
//create axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});
const LoginUser = async (email, password)=>{
    try {
        const res = await api.post("/auth/login", {
            email,
            password
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c = LoginUser;
const SignUpUser = async (email, name, password, confirmPassword)=>{
    try {
        const res = await api.post("/auth/register", {
            email,
            name,
            password,
            confirmPassword
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c1 = SignUpUser;
const VerifyOtp = async (userId, otp)=>{
    try {
        const res = await api.post("/auth/register/verify-otp", {
            userId,
            otp
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c2 = VerifyOtp;
const ResendOtp = async (userId)=>{
    try {
        const res = await api.post("/auth/register/resend-otp", {
            userId
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c3 = ResendOtp;
const GetAllCategories = async (token)=>{
    try {
        const res = await api.get("/category", {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c4 = GetAllCategories;
const GetAllSuppliers = async (token)=>{
    try {
        const res = await api.get("/supplier", {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c5 = GetAllSuppliers;
const CreateNewSupplier = async (data, token)=>{
    try {
        const res = await api.post("/supplier/create", data, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c6 = CreateNewSupplier;
const DeleteSupplier = async (id, token)=>{
    try {
        const res = await api.delete("/supplier/delete/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c7 = DeleteSupplier;
const UpdateSupplier = async (id, data, token)=>{
    try {
        const res = await api.put("/supplier/update/".concat(id), data, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c8 = UpdateSupplier;
const GetAllProducts = async (token, page)=>{
    try {
        const res = await api.get("/product?page=".concat(page), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c9 = GetAllProducts;
const CreateNewProduct = async (data, token)=>{
    try {
        const res = await api.post("/product/create", data, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c10 = CreateNewProduct;
const GetProductById = async (id, token)=>{
    try {
        const res = await api.get("/product/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c11 = GetProductById;
const UpdateProductById = async (id, data, token)=>{
    try {
        const res = await api.patch("/product/update/".concat(id), data, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c12 = UpdateProductById;
const DeleteProductById = async (id, token)=>{
    try {
        const res = await api.delete("/product/delete/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c13 = DeleteProductById;
const GetAllSales = async (token, page)=>{
    try {
        const res = await api.get("/sale?page=".concat(page, "&limit=10"), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c14 = GetAllSales;
const SaleCreate = async (token, saleData)=>{
    try {
        const res = await api.post("/sale/create", saleData, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c15 = SaleCreate;
const GetAllSale = async (token, page)=>{
    try {
        const res = await api.get("/sale?page=".concat(page), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c16 = GetAllSale;
const GetSaleById = async (token, id)=>{
    try {
        const res = await api.get("/sale/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c17 = GetSaleById;
const DeleteSaleById = async (token, id)=>{
    try {
        const res = await api.delete("/sale/delete/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c18 = DeleteSaleById;
const GetAllBuyBacks = async (token, page)=>{
    try {
        const res = await api.get("/buy-back?page=".concat(page), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c19 = GetAllBuyBacks;
const GetBuyBackById = async (token, id)=>{
    try {
        const res = await api.get("/buy-back/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c20 = GetBuyBackById;
const DeleteBuyBackById = async (token, id)=>{
    try {
        const res = await api.delete("/buy-back/delete/".concat(id), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c21 = DeleteBuyBackById;
const CreateBuyback = async (token, data)=>{
    try {
        const res = await api.post("/buy-back/create", data, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c22 = CreateBuyback;
const SearchProductByName = async (token, keyword)=>{
    try {
        const res = await api.get("/product/search?key=".concat(keyword), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$apiErrorHandler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        throw error;
    }
};
_c23 = SearchProductByName;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23;
__turbopack_context__.k.register(_c, "LoginUser");
__turbopack_context__.k.register(_c1, "SignUpUser");
__turbopack_context__.k.register(_c2, "VerifyOtp");
__turbopack_context__.k.register(_c3, "ResendOtp");
__turbopack_context__.k.register(_c4, "GetAllCategories");
__turbopack_context__.k.register(_c5, "GetAllSuppliers");
__turbopack_context__.k.register(_c6, "CreateNewSupplier");
__turbopack_context__.k.register(_c7, "DeleteSupplier");
__turbopack_context__.k.register(_c8, "UpdateSupplier");
__turbopack_context__.k.register(_c9, "GetAllProducts");
__turbopack_context__.k.register(_c10, "CreateNewProduct");
__turbopack_context__.k.register(_c11, "GetProductById");
__turbopack_context__.k.register(_c12, "UpdateProductById");
__turbopack_context__.k.register(_c13, "DeleteProductById");
__turbopack_context__.k.register(_c14, "GetAllSales");
__turbopack_context__.k.register(_c15, "SaleCreate");
__turbopack_context__.k.register(_c16, "GetAllSale");
__turbopack_context__.k.register(_c17, "GetSaleById");
__turbopack_context__.k.register(_c18, "DeleteSaleById");
__turbopack_context__.k.register(_c19, "GetAllBuyBacks");
__turbopack_context__.k.register(_c20, "GetBuyBackById");
__turbopack_context__.k.register(_c21, "DeleteBuyBackById");
__turbopack_context__.k.register(_c22, "CreateBuyback");
__turbopack_context__.k.register(_c23, "SearchProductByName");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/buyback/components/CreateBuyBack.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2f$BreadCrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/breadcrumb/BreadCrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/libs/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$recycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Recycle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/recycle.js [app-client] (ecmascript) <export default as Recycle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CreateBuyBack = ()=>{
    _s();
    const [buybackForm, setBuybackForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        customerInfo: {
            name: "",
            phone: ""
        },
        buybackData: []
    });
    const [loading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const token = localStorage.getItem("token") || "";
    // buyback item handlers
    const addBuyBackItem = ()=>{
        setBuybackForm({
            ...buybackForm,
            buybackData: [
                ...buybackForm.buybackData,
                {
                    batterySize: "",
                    quantity: 1,
                    reusableQty: 0,
                    buyPrice: 0,
                    total: 0
                }
            ]
        });
    };
    const removeBuyBackItem = (index)=>{
        const updated = buybackForm.buybackData.filter((_, i)=>i !== index);
        setBuybackForm({
            ...buybackForm,
            buybackData: updated
        });
    };
    const updateBuyBackItem = (index, field, value)=>{
        setBuybackForm((prev)=>{
            const updated = prev.buybackData.map((item, i)=>i === index ? {
                    ...item,
                    [field]: value
                } : item);
            const itemChanged = updated[index];
            updated[index] = {
                ...itemChanged,
                total: (itemChanged.quantity || 0) * (itemChanged.buyPrice || 0)
            };
            return {
                ...prev,
                buybackData: updated,
                oldBatteryPrice: updated.reduce((s, it)=>s + (it.total || 0), 0)
            };
        });
    };
    const calculateBuyBackTotal = ()=>{
        return buybackForm.buybackData.reduce((sum, item)=>sum + item.total, 0);
    };
    const handleSubmit = async (e)=>{
        e.stopPropagation();
        setIsLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$libs$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBuyback"])(token, buybackForm);
            if (res.con) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Create Successfully");
                setBuybackForm({
                    customerInfo: {
                        name: "",
                        phone: ""
                    },
                    buybackData: []
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(res.message);
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Failed to create new Buyback. Please try again.";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(message);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gray-50 p-4 md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-800 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$recycle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Recycle$3e$__["Recycle"], {
                                    className: "w-8 h-8 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Create Buy-Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$breadcrumb$2f$BreadCrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: [
                            {
                                label: "Dashboard",
                                href: "/dashboard"
                            },
                            {
                                label: "Buy-Back",
                                href: "/dashboard/buyback"
                            },
                            {
                                label: "buy-back create"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg text-start",
                            children: "Customer Info"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col w-full md:flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            className: "text-gray-600 font-medium mb-2",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "name",
                                            type: "text",
                                            placeholder: "U/Daw xxxx-xxxx",
                                            value: buybackForm.customerInfo.name,
                                            className: "border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                            onChange: (e)=>setBuybackForm({
                                                    ...buybackForm,
                                                    customerInfo: {
                                                        ...buybackForm.customerInfo,
                                                        name: e.target.value
                                                    }
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col w-full md:flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "phone",
                                            className: "text-gray-600 font-medium mb-2",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "phone",
                                            type: "text",
                                            placeholder: "09 xxxxxxx",
                                            value: buybackForm.customerInfo.phone,
                                            className: "border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none",
                                            onChange: (e)=>setBuybackForm({
                                                    ...buybackForm,
                                                    customerInfo: {
                                                        ...buybackForm.customerInfo,
                                                        phone: e.target.value
                                                    }
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-500 mt-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-medium mb-3 mt-3",
                                    children: "BayBack Info"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        buybackForm.buybackData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative grid grid-cols-9 gap-4 p-4 shadow-md rounded-xl bg-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-medium mb-1 block",
                                                                children: "Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3",
                                                                value: item.batterySize,
                                                                onChange: (e)=>updateBuyBackItem(index, "batterySize", e.target.value),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        disabled: true,
                                                                        children: "Select Size"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N20",
                                                                        children: "N20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N35",
                                                                        children: "N35"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N50",
                                                                        children: "N50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N70",
                                                                        children: "N70"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N100",
                                                                        children: "N100"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N120",
                                                                        children: "N120"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N150",
                                                                        children: "N150"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "N200",
                                                                        children: "N200"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-medium mb-1 block",
                                                                children: "Qty"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: 1,
                                                                className: "w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3",
                                                                value: item.quantity || "",
                                                                placeholder: "1",
                                                                onChange: (e)=>updateBuyBackItem(index, "quantity", Number(e.target.value))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "font-medium mb-1 block",
                                                                children: "Price"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                className: "w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg p-3",
                                                                value: item.buyPrice || "",
                                                                placeholder: "0",
                                                                onChange: (e)=>updateBuyBackItem(index, "buyPrice", Number(e.target.value))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-2 -right-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "flex items-center justify-center w-8 h-8 bg-red-200 rounded-full shadow hover:bg-red-300 transition-colors",
                                                            onClick: ()=>removeBuyBackItem(index),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-4 h-4 text-red-600"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-4 py-2 bg-gray-800 text-white rounded-lg w-fit hover:bg-gray-900",
                                            onClick: addBuyBackItem,
                                            children: "+ Add BuyBack Battery"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-medium mt-3",
                                            children: [
                                                "BuyBack Total:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-yellow-800",
                                                    children: calculateBuyBackTotal().toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                "Ks"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-500 mt-3"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-4 flex items-center justify-end gap-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>window.history.back(),
                                            className: "flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-red-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "w-4 h-4 text-red-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Cancel"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all ".concat(loading ? "opacity-70 cursor-not-allowed" : ""),
                                            onClick: handleSubmit,
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Saving..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Save"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/buyback/components/CreateBuyBack.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateBuyBack, "3IZH+yqeEqLQ2NrV2WgiMUSQCT4=");
_c = CreateBuyBack;
const __TURBOPACK__default__export__ = CreateBuyBack;
var _c;
__turbopack_context__.k.register(_c, "CreateBuyBack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_04cb3cdd._.js.map