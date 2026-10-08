//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-MWLVGIMB.js
var manifest = { "c4f962364d2c89600e953e9a94fe8bad3185671d0346de51a65ef9c286259079": {
	functionName: "submitCakeOrderRequest_createServerFn_handler",
	importer: () => import("./_ssr/cake-orders.functions-jQHllsvk.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
