/**
 * This is a list of JavaScript keywords, "standard library" objects, etc.
 *
 * See the README in this directory for more on how this list is assembled.
 *
 * There are duplicates, and that's okay.  But if you are removing items, be sure to look for multiple entries!
 */
export default {
    name: "JavaScript",
    commonCmds: [
        "if",
        "else",
        "for",
        "function",
        "let",
        "var",
        "const",
        "JSON",
        "Date",
        "window"
    ],
    cmds: [
        // keywords
        "await",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "export",
        "extends",
        "finally",
        "for",
        "function",
        "if",
        "import",
        "in",
        "instanceof",
        "new",
        "return",
        "super",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "var",
        "void",
        "while",
        "with",
        "yield",
        // some literals
        "null",
        "true",
        "false",
        // global object properties
        "infinity",
        "nan",
        "undefined",
        "eval",
        "isfinite",
        "isnan",
        "parsefloat",
        "parseint",
        "decodeuri",
        "decodeuricomponent",
        "encodeuri",
        "encodeuricomponent",
        "array",
        "arraybuffer",
        "boolean",
        "dataview",
        "date",
        "error",
        "evalerror",
        "float32array",
        "float64array",
        "function",
        "int8array",
        "int16array",
        "int32array",
        "map",
        "number",
        "object",
        "promise",
        "proxy",
        "rangeerror",
        "referenceerror",
        "regexp",
        "set",
        "sharedarraybuffer",
        "string",
        "symbol",
        "syntaxerror",
        "typeerror",
        "uint8array",
        "uint8clampedarray",
        "uint16array",
        "uint32array",
        "urierror",
        "weakmap",
        "weakset",

        // fundamental objects (ch 19)
        "object",
        "function",
        "boolean",
        "symbol",
        "error",

        // numbers and dates (ch 20)
        "number",
        "math",
        "date",

        // text processing (ch 21)
        "string",
        "regexp",

        // indexed collections (ch 22)
        "array",
        "typedarray",

        // keyed collections (ch 23)
        "map",
        "set",
        "weakmap",
        "weakset",

        // structured data (ch 24)
        "arraybuffer",
        "sharedarraybuffer",
        "dataview",
        "atomics",
        "json",

        // control abstraction objects (ch 25)
        "generator",
        "asyncgenerator",
        "promise",

        // reflection (ch 26)
        "reflect",
        "proxy",

        // some curiously hard to find ones in the spec
        "async",
        "let",
        "static",
        "else",
        "document",
        "window",
        "navigator",
        "then",
        "set",
        "get",
        "of",

        // Object.keys(window) in chrome
        "postMessage",
        "blur",
        "focus",
        "close",
        "parent",
        "opener",
        "top",
        "length",
        "frames",
        "closed",
        "location",
        "self",
        "window",
        "document",
        "name",
        "customElements",
        "history",
        "locationbar",
        "menubar",
        "personalbar",
        "scrollbars",
        "statusbar",
        "toolbar",
        "status",
        "frameElement",
        "navigator",
        "origin",
        "external",
        "screen",
        "innerWidth",
        "innerHeight",
        "scrollX",
        "pageXOffset",
        "scrollY",
        "pageYOffset",
        "visualViewport",
        "screenX",
        "screenY",
        "outerWidth",
        "outerHeight",
        "devicePixelRatio",
        "clientInformation",
        "screenLeft",
        "screenTop",
        "defaultStatus",
        "defaultstatus",
        "styleMedia",
        "onanimationend",
        "onanimationiteration",
        "onanimationstart",
        "onsearch",
        "ontransitionend",
        "onwebkitanimationend",
        "onwebkitanimationiteration",
        "onwebkitanimationstart",
        "onwebkittransitionend",
        "isSecureContext",
        "onabort",
        "onblur",
        "oncancel",
        "oncanplay",
        "oncanplaythrough",
        "onchange",
        "onclick",
        "onclose",
        "oncontextmenu",
        "oncuechange",
        "ondblclick",
        "ondrag",
        "ondragend",
        "ondragenter",
        "ondragleave",
        "ondragover",
        "ondragstart",
        "ondrop",
        "ondurationchange",
        "onemptied",
        "onended",
        "onerror",
        "onfocus",
        "oninput",
        "oninvalid",
        "onkeydown",
        "onkeypress",
        "onkeyup",
        "onload",
        "onloadeddata",
        "onloadedmetadata",
        "onloadstart",
        "onmousedown",
        "onmouseenter",
        "onmouseleave",
        "onmousemove",
        "onmouseout",
        "onmouseover",
        "onmouseup",
        "onmousewheel",
        "onpause",
        "onplay",
        "onplaying",
        "onprogress",
        "onratechange",
        "onreset",
        "onresize",
        "onscroll",
        "onseeked",
        "onseeking",
        "onselect",
        "onstalled",
        "onsubmit",
        "onsuspend",
        "ontimeupdate",
        "ontoggle",
        "onvolumechange",
        "onwaiting",
        "onwheel",
        "onauxclick",
        "ongotpointercapture",
        "onlostpointercapture",
        "onpointerdown",
        "onpointermove",
        "onpointerup",
        "onpointercancel",
        "onpointerover",
        "onpointerout",
        "onpointerenter",
        "onpointerleave",
        "onselectstart",
        "onselectionchange",
        "onafterprint",
        "onbeforeprint",
        "onbeforeunload",
        "onhashchange",
        "onlanguagechange",
        "onmessage",
        "onmessageerror",
        "onoffline",
        "ononline",
        "onpagehide",
        "onpageshow",
        "onpopstate",
        "onrejectionhandled",
        "onstorage",
        "onunhandledrejection",
        "onunload",
        "performance",
        "stop",
        "open",
        "alert",
        "confirm",
        "prompt",
        "print",
        "queueMicrotask",
        "requestAnimationFrame",
        "cancelAnimationFrame",
        "captureEvents",
        "releaseEvents",
        "requestIdleCallback",
        "cancelIdleCallback",
        "getComputedStyle",
        "matchMedia",
        "moveTo",
        "moveBy",
        "resizeTo",
        "resizeBy",
        "getSelection",
        "find",
        "webkitRequestAnimationFrame",
        "webkitCancelAnimationFrame",
        "fetch",
        "btoa",
        "atob",
        "setTimeout",
        "clearTimeout",
        "setInterval",
        "clearInterval",
        "createImageBitmap",
        "scroll",
        "scrollTo",
        "scrollBy",
        "onappinstalled",
        "onbeforeinstallprompt",
        "crypto",
        "ondevicemotion",
        "ondeviceorientation",
        "ondeviceorientationabsolute",
        "indexedDB",
        "webkitStorageInfo",
        "sessionStorage",
        "localStorage",
        "chrome",
        "speechSynthesis",
        "webkitRequestFileSystem",
        "webkitResolveLocalFileSystemURL",
        "openDatabase"
    ]
};
