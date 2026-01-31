module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/constants [external] (constants, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("constants", () => require("constants"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/lib/sessions.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "createTelegramClient",
    ()=>createTelegramClient,
    "deleteSession",
    ()=>deleteSession,
    "generateSessionId",
    ()=>generateSessionId,
    "getSession",
    ()=>getSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/telegram/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$sessions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/telegram/sessions/index.js [app-route] (ecmascript)");
;
;
// In-memory session storage with TTL
const sessions = new Map();
// Clean up old sessions every 5 minutes
const SESSION_TTL = 10 * 60 * 1000; // 10 minutes
setInterval(()=>{
    const now = Date.now();
    for (const [id, session] of sessions.entries()){
        if (now - session.createdAt > SESSION_TTL) {
            session.client.disconnect().catch(()=>{});
            sessions.delete(id);
        }
    }
}, 5 * 60 * 1000);
function createSession(id, client, phone, phoneCodeHash) {
    sessions.set(id, {
        client,
        phoneCodeHash,
        phone,
        createdAt: Date.now()
    });
}
function getSession(id) {
    return sessions.get(id);
}
function deleteSession(id) {
    const session = sessions.get(id);
    if (session) {
        session.client.disconnect().catch(()=>{});
        sessions.delete(id);
    }
}
function generateSessionId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
async function createTelegramClient() {
    const apiId = parseInt(process.env.TELEGRAM_API_ID || '0');
    const apiHash = process.env.TELEGRAM_API_HASH || '';
    const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TelegramClient"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$sessions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StringSession"](''), apiId, apiHash, {
        connectionRetries: 5,
        deviceModel: 'Thread Hunter Web',
        systemVersion: 'Web',
        appVersion: '1.0.0'
    });
    await client.connect();
    return client;
}
}),
"[project]/app/api/init/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/telegram/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sessions.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const { phone } = await request.json();
        if (!phone || typeof phone !== 'string') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Phone number is required'
            }, {
                status: 400
            });
        }
        const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTelegramClient"])();
        const result = await client.invoke(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Api"].auth.SendCode({
            phoneNumber: phone,
            apiId: parseInt(process.env.TELEGRAM_API_ID || '0'),
            apiHash: process.env.TELEGRAM_API_HASH || '',
            settings: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$telegram$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Api"].CodeSettings({
                allowFlashcall: false,
                currentNumber: false,
                allowAppHash: false
            })
        }));
        // Type guard for SentCode vs SentCodeSuccess
        if (!('phoneCodeHash' in result)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unexpected response from Telegram'
            }, {
                status: 500
            });
        }
        const sessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateSessionId"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sessions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createSession"])(sessionId, client, phone, result.phoneCodeHash);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            sessionId
        });
    } catch (error) {
        console.error('Init error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        if (errorMessage.includes('PHONE_NUMBER_INVALID')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid phone number format'
            }, {
                status: 400
            });
        }
        if (errorMessage.includes('PHONE_NUMBER_BANNED')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'This phone number is banned'
            }, {
                status: 400
            });
        }
        if (errorMessage.includes('FLOOD')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Too many attempts. Please try again later.'
            }, {
                status: 429
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to send code. Please try again.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__722e2105._.js.map