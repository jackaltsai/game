"use strict";
(self.webpackChunkruffle_selfhosted = self.webpackChunkruffle_selfhosted || []).push([[339], {
    972: (e, n, _) => {
        function t(e, n) {
            const _ = e.length
              , t = e.getChannelData(0)
              , r = e.getChannelData(1);
            let b = 0
              , c = 0;
            for (; c < _; )
                t[c] = n[b],
                r[c] = n[b + 1],
                c++,
                b += 2
        }
        function r(e, n) {
            return e[n]
        }
        _.d(n, {
            $s: () => r,
            tM: () => t
        })
    }
    ,
    339: (e, n, _) => {
        _.r(n),
        _.d(n, {
            Ruffle: () => V,
            default: () => K,
            initSync: () => G
        });
        var t = _(972);
        e = _.hmd(e);
        const r = "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : void 0;
        let b, c = 0, f = null;
        function a() {
            return null !== f && 0 !== f.byteLength || (f = new Uint8Array(b.memory.buffer)),
            f
        }
        const u = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
            encode: () => {
                throw Error("TextEncoder not available")
            }
        }
          , o = "function" == typeof u.encodeInto ? function(e, n) {
            return u.encodeInto(e, n)
        }
        : function(e, n) {
            const _ = u.encode(e);
            return n.set(_),
            {
                read: e.length,
                written: _.length
            }
        }
        ;
        function i(e, n, _) {
            if (void 0 === _) {
                const _ = u.encode(e)
                  , t = n(_.length, 1) >>> 0;
                return a().subarray(t, t + _.length).set(_),
                c = _.length,
                t
            }
            let t = e.length
              , r = n(t, 1) >>> 0;
            const b = a();
            let f = 0;
            for (; f < t; f++) {
                const n = e.charCodeAt(f);
                if (n > 127)
                    break;
                b[r + f] = n
            }
            if (f !== t) {
                0 !== f && (e = e.slice(f)),
                r = _(r, t, t = f + 3 * e.length, 1) >>> 0;
                const n = a().subarray(r + f, r + t);
                f += o(e, n).written
            }
            return c = f,
            r
        }
        function g(e) {
            return null == e
        }
        let w = null;
        function d() {
            return null !== w && 0 !== w.byteLength || (w = new Int32Array(b.memory.buffer)),
            w
        }
        const l = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        }) : {
            decode: () => {
                throw Error("TextDecoder not available")
            }
        };
        function s(e, n) {
            return e >>>= 0,
            l.decode(a().subarray(e, e + n))
        }
        "undefined" != typeof TextDecoder && l.decode();
        let m = null;
        function p() {
            return null !== m && 0 !== m.byteLength || (m = new Float64Array(b.memory.buffer)),
            m
        }
        let y = null;
        function h(e) {
            const n = typeof e;
            if ("number" == n || "boolean" == n || null == e)
                return `${e}`;
            if ("string" == n)
                return `"${e}"`;
            if ("symbol" == n) {
                const n = e.description;
                return null == n ? "Symbol" : `Symbol(${n})`
            }
            if ("function" == n) {
                const n = e.name;
                return "string" == typeof n && n.length > 0 ? `Function(${n})` : "Function"
            }
            if (Array.isArray(e)) {
                const n = e.length;
                let _ = "[";
                n > 0 && (_ += h(e[0]));
                for (let t = 1; t < n; t++)
                    _ += ", " + h(e[t]);
                return _ += "]",
                _
            }
            const _ = /\[object ([^\]]+)\]/.exec(toString.call(e));
            let t;
            if (!(_.length > 1))
                return toString.call(e);
            if (t = _[1],
            "Object" == t)
                try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (e) {
                    return "Object"
                }
            return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : t
        }
        function x(e, n, _, t) {
            const r = {
                a: e,
                b: n,
                cnt: 1,
                dtor: _
            }
              , c = (...e) => {
                r.cnt++;
                const n = r.a;
                r.a = 0;
                try {
                    return t(n, r.b, ...e)
                } finally {
                    0 == --r.cnt ? b.__wbindgen_export_3.get(r.dtor)(n, r.b) : r.a = n
                }
            }
            ;
            return c.original = r,
            c
        }
        function v(e, n, _) {
            b.wasm_bindgen__convert__closures__invoke1_mut__hf9414ceb8b9c024d(e, n, _)
        }
        function S(e, n, _) {
            b.closure472_externref_shim(e, n, _)
        }
        function A(e, n) {
            b.wasm_bindgen__convert__closures__invoke0_mut__h02386b21d2eabc63(e, n)
        }
        function D(e, n) {
            b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hecd7c9c8f9341c5c(e, n)
        }
        function T(e, n) {
            b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd9245044cdb4253d(e, n)
        }
        function I(e, n, _) {
            b.closure1292_externref_shim(e, n, _)
        }
        function E(e, n, _) {
            b.closure4460_externref_shim(e, n, _)
        }
        function P(e) {
            const n = b.__externref_table_alloc();
            return b.__wbindgen_export_2.set(n, e),
            n
        }
        function M(e, n) {
            try {
                return e.apply(this, n)
            } catch (e) {
                const n = P(e);
                b.__wbindgen_exn_store(n)
            }
        }
        function k(e) {
            const n = b.__wbindgen_export_2.get(e);
            return b.__externref_table_dealloc(e),
            n
        }
        let F = null;
        function R() {
            return null !== F && 0 !== F.byteLength || (F = new Uint32Array(b.memory.buffer)),
            F
        }
        function B(e, n) {
            const _ = n(4 * e.length, 4) >>> 0
              , t = R();
            for (let n = 0; n < e.length; n++)
                t[_ / 4 + n] = P(e[n]);
            return c = e.length,
            _
        }
        let L = null;
        function C(e, n) {
            return e >>>= 0,
            (null !== L && 0 !== L.byteLength || (L = new Float32Array(b.memory.buffer)),
            L).subarray(e / 4, e / 4 + n)
        }
        function O(e, n) {
            return e >>>= 0,
            d().subarray(e / 4, e / 4 + n)
        }
        function q(e, n) {
            return e >>>= 0,
            a().subarray(e / 1, e / 1 + n)
        }
        let U = null;
        function W(e, n) {
            return e >>>= 0,
            (null !== U && 0 !== U.byteLength || (U = new Uint8ClampedArray(b.memory.buffer)),
            U).subarray(e / 1, e / 1 + n)
        }
        class V {
            static __wrap(e) {
                e >>>= 0;
                const n = Object.create(V.prototype);
                return n.__wbg_ptr = e,
                n
            }
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                b.__wbg_ruffle_free(e)
            }
            constructor(e, n, _) {
                return b.ruffle_new(e, n, _)
            }
            stream_from(e, n) {
                try {
                    const t = b.__wbindgen_add_to_stack_pointer(-16)
                      , r = i(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , f = c;
                    b.ruffle_stream_from(t, this.__wbg_ptr, r, f, n);
                    var _ = d()[t / 4 + 0];
                    if (d()[t / 4 + 1])
                        throw k(_)
                } finally {
                    b.__wbindgen_add_to_stack_pointer(16)
                }
            }
            load_data(e, n, _) {
                try {
                    const r = b.__wbindgen_add_to_stack_pointer(-16)
                      , f = i(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , a = c;
                    b.ruffle_load_data(r, this.__wbg_ptr, e, n, f, a);
                    var t = d()[r / 4 + 0];
                    if (d()[r / 4 + 1])
                        throw k(t)
                } finally {
                    b.__wbindgen_add_to_stack_pointer(16)
                }
            }
            play() {
                b.ruffle_play(this.__wbg_ptr)
            }
            pause() {
                b.ruffle_pause(this.__wbg_ptr)
            }
            is_playing() {
                return 0 !== b.ruffle_is_playing(this.__wbg_ptr)
            }
            volume() {
                return b.ruffle_volume(this.__wbg_ptr)
            }
            set_volume(e) {
                b.ruffle_set_volume(this.__wbg_ptr, e)
            }
            renderer_debug_info() {
                return b.ruffle_renderer_debug_info(this.__wbg_ptr)
            }
            renderer_name() {
                return b.ruffle_renderer_name(this.__wbg_ptr)
            }
            prepare_context_menu() {
                return b.ruffle_prepare_context_menu(this.__wbg_ptr)
            }
            run_context_menu_callback(e) {
                b.ruffle_run_context_menu_callback(this.__wbg_ptr, e)
            }
            set_fullscreen(e) {
                b.ruffle_set_fullscreen(this.__wbg_ptr, e)
            }
            clear_custom_menu_items() {
                b.ruffle_clear_custom_menu_items(this.__wbg_ptr)
            }
            destroy() {
                b.ruffle_destroy(this.__wbg_ptr)
            }
            add_font(e, n) {
                const _ = i(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                b.ruffle_add_font(this.__wbg_ptr, _, t, n)
            }
            set_default_font(e, n) {
                const _ = i(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c
                  , r = B(n, b.__wbindgen_malloc)
                  , f = c;
                b.ruffle_set_default_font(this.__wbg_ptr, _, t, r, f)
            }
            call_exposed_callback(e, n) {
                const _ = i(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c
                  , r = B(n, b.__wbindgen_malloc)
                  , f = c;
                return b.ruffle_call_exposed_callback(this.__wbg_ptr, _, t, r, f)
            }
            set_trace_observer(e) {
                b.ruffle_set_trace_observer(this.__wbg_ptr, e)
            }
            audio_context() {
                return b.ruffle_audio_context(this.__wbg_ptr)
            }
            static is_wasm_simd_used() {
                return 0 !== b.ruffle_is_wasm_simd_used()
            }
        }
        function H() {
            const n = {};
            var f;
            return n.wbg = {},
            n.wbg.__wbindgen_string_get = function(e, n) {
                const _ = "string" == typeof n ? n : void 0;
                var t = g(_) ? 0 : i(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , r = c;
                d()[e / 4 + 1] = r,
                d()[e / 4 + 0] = t
            }
            ,
            n.wbg.__wbindgen_cb_drop = function(e) {
                const n = e.original;
                if (1 == n.cnt--)
                    return n.a = 0,
                    !0;
                return !1
            }
            ,
            n.wbg.__wbg_setMetadata_128bd20648a12d07 = function(e, n) {
                e.setMetadata(n)
            }
            ,
            n.wbg.__wbindgen_is_function = function(e) {
                return "function" == typeof e
            }
            ,
            n.wbg.__wbindgen_string_new = function(e, n) {
                return s(e, n)
            }
            ,
            n.wbg.__wbg_getProperty_af1b259e02b39917 = function() {
                return M((function(e, n) {
                    return (0,
                    t.$s)(e, n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_onCallbackAvailable_d54d3847055a0720 = function(e, n, _) {
                e.onCallbackAvailable(s(n, _))
            }
            ,
            n.wbg.__wbg_onFSCommand_68fd9326a1eb7ff5 = function() {
                return M((function(e, n, _, t, r) {
                    return e.onFSCommand(s(n, _), s(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbindgen_number_get = function(e, n) {
                const _ = "number" == typeof n ? n : void 0;
                p()[e / 8 + 1] = g(_) ? 0 : _,
                d()[e / 4 + 0] = !g(_)
            }
            ,
            n.wbg.__wbindgen_boolean_get = function(e) {
                return "boolean" == typeof e ? e ? 1 : 0 : 2
            }
            ,
            n.wbg.__wbindgen_is_null = function(e) {
                return null === e
            }
            ,
            n.wbg.__wbindgen_number_new = function(e) {
                return e
            }
            ,
            n.wbg.__wbg_panic_52092d3d09d11787 = function(e, n) {
                e.panic(n)
            }
            ,
            n.wbg.__wbg_displayRootMovieDownloadFailedMessage_ed4ad3ae9522c8a3 = function(e) {
                e.displayRootMovieDownloadFailedMessage()
            }
            ,
            n.wbg.__wbg_displayMessage_6b8a0011f836541f = function(e, n, _) {
                e.displayMessage(s(n, _))
            }
            ,
            n.wbg.__wbg_setFullscreen_85ac797b8823b727 = function() {
                return M((function(e, n) {
                    e.setFullscreen(0 !== n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_openVirtualKeyboard_e0659b8d0c7b81ed = function(e) {
                e.openVirtualKeyboard()
            }
            ,
            n.wbg.__wbg_isVirtualKeyboardFocused_1719ab4ec034b0ab = function(e) {
                return e.isVirtualKeyboardFocused()
            }
            ,
            n.wbg.__wbg_displayUnsupportedVideo_619cdc62d232655a = function(e, n, _) {
                e.displayUnsupportedVideo(s(n, _))
            }
            ,
            n.wbg.__wbg_ruffle_new = function(e) {
                return V.__wrap(e)
            }
            ,
            n.wbg.__wbg_copyToAudioBufferInterleaved_efb71b16faf5adb2 = function(e, n, _) {
                (0,
                t.tM)(e, C(n, _))
            }
            ,
            n.wbg.__wbindgen_error_new = function(e, n) {
                return new Error(s(e, n))
            }
            ,
            n.wbg.__wbindgen_is_bigint = function(e) {
                return "bigint" == typeof e
            }
            ,
            n.wbg.__wbindgen_bigint_from_i64 = function(e) {
                return e
            }
            ,
            n.wbg.__wbindgen_jsval_eq = function(e, n) {
                return e === n
            }
            ,
            n.wbg.__wbindgen_bigint_from_u64 = function(e) {
                return BigInt.asUintN(64, e)
            }
            ,
            n.wbg.__wbindgen_is_object = function(e) {
                return "object" == typeof e && null !== e
            }
            ,
            n.wbg.__wbindgen_in = function(e, n) {
                return e in n
            }
            ,
            n.wbg.__wbindgen_is_string = function(e) {
                return "string" == typeof e
            }
            ,
            n.wbg.__wbindgen_is_undefined = function(e) {
                return void 0 === e
            }
            ,
            n.wbg.__wbg_new_abda76e883ba8a5f = function() {
                return new Error
            }
            ,
            n.wbg.__wbg_stack_658279fe44541cf6 = function(e, n) {
                const _ = i(n.stack, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_error_f851667af71bcfc6 = function(e, n) {
                let _, t;
                try {
                    _ = e,
                    t = n,
                    console.error(s(e, n))
                } finally {
                    b.__wbindgen_free(_, t, 1)
                }
            }
            ,
            n.wbg.__wbindgen_jsval_loose_eq = function(e, n) {
                return e == n
            }
            ,
            n.wbg.__wbg_String_917f38a1211cf44b = function(e, n) {
                const _ = i(String(n), b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_getwithrefkey_3b3c46ba20582127 = function(e, n) {
                return e[n]
            }
            ,
            n.wbg.__wbg_set_8761474ad72b9bf1 = function(e, n, _) {
                e[n] = _
            }
            ,
            n.wbg.__wbg_log_c9486ca5d8e2cbe8 = function(e, n) {
                let _, t;
                try {
                    _ = e,
                    t = n,
                    console.log(s(e, n))
                } finally {
                    b.__wbindgen_free(_, t, 1)
                }
            }
            ,
            n.wbg.__wbg_log_aba5996d9bde071f = function(e, n, _, t, r, c, f, a) {
                let u, o;
                try {
                    u = e,
                    o = n,
                    console.log(s(e, n), s(_, t), s(r, c), s(f, a))
                } finally {
                    b.__wbindgen_free(u, o, 1)
                }
            }
            ,
            n.wbg.__wbg_mark_40e050a77cc39fea = function(e, n) {
                performance.mark(s(e, n))
            }
            ,
            n.wbg.__wbg_measure_aa7a73f17813f708 = function() {
                return M((function(e, n, _, t) {
                    let r, c, f, a;
                    try {
                        r = e,
                        c = n,
                        f = _,
                        a = t,
                        performance.measure(s(e, n), s(_, t))
                    } finally {
                        b.__wbindgen_free(r, c, 1),
                        b.__wbindgen_free(f, a, 1)
                    }
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_queueMicrotask_e5949c35d772a669 = "function" == typeof queueMicrotask ? queueMicrotask : (f = "queueMicrotask",
            () => {
                throw new Error(`${f} is not defined`)
            }
            ),
            n.wbg.__wbg_queueMicrotask_2be8b97a81fe4d00 = function(e) {
                return e.queueMicrotask
            }
            ,
            n.wbg.__wbg_crypto_58f13aa23ffcb166 = function(e) {
                return e.crypto
            }
            ,
            n.wbg.__wbg_process_5b786e71d465a513 = function(e) {
                return e.process
            }
            ,
            n.wbg.__wbg_versions_c2ab80650590b6a2 = function(e) {
                return e.versions
            }
            ,
            n.wbg.__wbg_node_523d7bd03ef69fba = function(e) {
                return e.node
            }
            ,
            n.wbg.__wbg_msCrypto_abcb1295e768d1f2 = function(e) {
                return e.msCrypto
            }
            ,
            n.wbg.__wbg_require_2784e593a4674877 = function() {
                return M((function() {
                    return e.require
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_randomFillSync_a0d98aa11c81fe89 = function() {
                return M((function(e, n) {
                    e.randomFillSync(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getRandomValues_504510b5564925af = function() {
                return M((function(e, n) {
                    e.getRandomValues(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_performance_bdf4f1a290fc5c5c = function(e) {
                return e.performance
            }
            ,
            n.wbg.__wbg_now_d87295c25be68e8b = function(e) {
                return e.now()
            }
            ,
            n.wbg.__wbg_instanceof_WebGl2RenderingContext_dcef4c962fd699e9 = function(e) {
                let n;
                try {
                    n = e instanceof WebGL2RenderingContext
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_beginQuery_b77f6789672396e4 = function(e, n, _) {
                e.beginQuery(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindBufferRange_ad7054c3ee5c6ef9 = function(e, n, _, t, r, b) {
                e.bindBufferRange(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_bindSampler_c9bd2f21f904cae4 = function(e, n, _) {
                e.bindSampler(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindVertexArray_cf524b9892e28075 = function(e, n) {
                e.bindVertexArray(n)
            }
            ,
            n.wbg.__wbg_blitFramebuffer_a4c9adfdb6b1ffa8 = function(e, n, _, t, r, b, c, f, a, u, o) {
                e.blitFramebuffer(n, _, t, r, b, c, f, a, u >>> 0, o >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_77ca7e60658033e8 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_cbf46e29ed1643f0 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferSubData_5479137ae34eb123 = function(e, n, _, t) {
                e.bufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_clearBufferfi_8633a4d3aa04e632 = function(e, n, _, t, r) {
                e.clearBufferfi(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_clearBufferfv_1312425cb4447d52 = function(e, n, _, t, r) {
                e.clearBufferfv(n >>> 0, _, C(t, r))
            }
            ,
            n.wbg.__wbg_clearBufferiv_e8f1973594b7e7a4 = function(e, n, _, t, r) {
                e.clearBufferiv(n >>> 0, _, O(t, r))
            }
            ,
            n.wbg.__wbg_clearBufferuiv_98c25f3ef7dc8e90 = function(e, n, _, t, r) {
                var b, c;
                e.clearBufferuiv(n >>> 0, _, (b = t,
                c = r,
                b >>>= 0,
                R().subarray(b / 4, b / 4 + c)))
            }
            ,
            n.wbg.__wbg_clientWaitSync_e74bab9938ab7b7d = function(e, n, _, t) {
                return e.clientWaitSync(n, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_07f751e93c00be4b = function(e, n, _, t, r, b, c, f, a, u) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a, u)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_6545cb75eb624829 = function(e, n, _, t, r, b, c, f, a) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage3D_e0d4519911d0b863 = function(e, n, _, t, r, b, c, f, a, u, o, i) {
                e.compressedTexSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o, i)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage3D_08e1c9b05dc8f93b = function(e, n, _, t, r, b, c, f, a, u, o) {
                e.compressedTexSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o)
            }
            ,
            n.wbg.__wbg_copyBufferSubData_c282baaee7e6fb21 = function(e, n, _, t, r, b) {
                e.copyBufferSubData(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_copyTexSubImage3D_beaa4a8381ab52b6 = function(e, n, _, t, r, b, c, f, a, u) {
                e.copyTexSubImage3D(n >>> 0, _, t, r, b, c, f, a, u)
            }
            ,
            n.wbg.__wbg_createQuery_a559d866fa594eb0 = function(e) {
                const n = e.createQuery();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createSampler_66a5e941bf2be2a8 = function(e) {
                const n = e.createSampler();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createVertexArray_4b35fb59f7da9bd3 = function(e) {
                const n = e.createVertexArray();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_deleteQuery_ff90dbf671ef4184 = function(e, n) {
                e.deleteQuery(n)
            }
            ,
            n.wbg.__wbg_deleteSampler_1e3940f00e5639ae = function(e, n) {
                e.deleteSampler(n)
            }
            ,
            n.wbg.__wbg_deleteSync_32395a8439b45ec5 = function(e, n) {
                e.deleteSync(n)
            }
            ,
            n.wbg.__wbg_deleteVertexArray_afb77924ff489c1d = function(e, n) {
                e.deleteVertexArray(n)
            }
            ,
            n.wbg.__wbg_drawArraysInstanced_e0a60611a5b267d1 = function(e, n, _, t, r) {
                e.drawArraysInstanced(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_drawBuffers_fa92ed1b3c7f16a4 = function(e, n) {
                e.drawBuffers(n)
            }
            ,
            n.wbg.__wbg_drawElementsInstanced_df3722302ea1b54a = function(e, n, _, t, r, b) {
                e.drawElementsInstanced(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_endQuery_d14f68c8db4cd117 = function(e, n) {
                e.endQuery(n >>> 0)
            }
            ,
            n.wbg.__wbg_fenceSync_fc59acc5642fcbb0 = function(e, n, _) {
                const t = e.fenceSync(n >>> 0, _ >>> 0);
                return g(t) ? 0 : P(t)
            }
            ,
            n.wbg.__wbg_framebufferTextureLayer_5e14109c032678e5 = function(e, n, _, t, r, b) {
                e.framebufferTextureLayer(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_getBufferSubData_6832ba0767286ba3 = function(e, n, _, t) {
                e.getBufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_getIndexedParameter_ef2c629bdfa92696 = function() {
                return M((function(e, n, _) {
                    return e.getIndexedParameter(n >>> 0, _ >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getQueryParameter_e15e3de18f843799 = function(e, n, _) {
                return e.getQueryParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getSyncParameter_33996dfdd2d7882e = function(e, n, _) {
                return e.getSyncParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getUniformBlockIndex_69eb3648b08216fe = function(e, n, _, t) {
                return e.getUniformBlockIndex(n, s(_, t))
            }
            ,
            n.wbg.__wbg_invalidateFramebuffer_3bae1c067f2cb2a1 = function() {
                return M((function(e, n, _) {
                    e.invalidateFramebuffer(n >>> 0, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readBuffer_1e70c33b68a2b14b = function(e, n) {
                e.readBuffer(n >>> 0)
            }
            ,
            n.wbg.__wbg_readPixels_c626351cb7e50b7e = function() {
                return M((function(e, n, _, t, r, b, c, f) {
                    e.readPixels(n, _, t, r, b >>> 0, c >>> 0, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readPixels_11e23d99e8d82b28 = function() {
                return M((function(e, n, _, t, r, b, c, f) {
                    e.readPixels(n, _, t, r, b >>> 0, c >>> 0, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_renderbufferStorageMultisample_5b37401ac2e98a39 = function(e, n, _, t, r, b) {
                e.renderbufferStorageMultisample(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_samplerParameterf_9e97455fe5f62f3b = function(e, n, _, t) {
                e.samplerParameterf(n, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_samplerParameteri_fb56f6aeb62e8652 = function(e, n, _, t) {
                e.samplerParameteri(n, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_texImage2D_aa3331ba2fb50c54 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o) {
                    e.texImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, 0 === u ? void 0 : q(u, o))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texStorage2D_d54c1b39afd82600 = function(e, n, _, t, r, b) {
                e.texStorage2D(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_texStorage3D_55a9e5921ca9e5cd = function(e, n, _, t, r, b, c) {
                e.texStorage3D(n >>> 0, _, t >>> 0, r, b, c)
            }
            ,
            n.wbg.__wbg_texSubImage2D_be1edbc37b17c97c = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_2d448f50a6536ac3 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_48f642dc3aa75118 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_e5a83a5fa6af1c7b = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_0ff7387a82ce7d1d = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_c39972668b221cda = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_959436f754f2ab55 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_2c0587d160badf03 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_b3a335476f63413e = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_eb62b7a16a5ca1e4 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, c, f, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_uniform2fv_4d1cfba3bb56370b = function(e, n, _, t) {
                e.uniform2fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform2iv_98e443584b4e7aa0 = function(e, n, _, t) {
                e.uniform2iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniform3fv_a5aa096fec7ac224 = function(e, n, _, t) {
                e.uniform3fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform3iv_173aeeea1df8fd31 = function(e, n, _, t) {
                e.uniform3iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniform4fv_5b488014de1f2331 = function(e, n, _, t) {
                e.uniform4fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform4iv_4a7d13e838035a99 = function(e, n, _, t) {
                e.uniform4iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniformBlockBinding_3f335c565d354653 = function(e, n, _, t) {
                e.uniformBlockBinding(n, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_uniformMatrix2fv_97f55388f859e53d = function(e, n, _, t, r) {
                e.uniformMatrix2fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix3fv_747befbbe746edfa = function(e, n, _, t, r) {
                e.uniformMatrix3fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix4fv_1826d923932cf3bb = function(e, n, _, t, r) {
                e.uniformMatrix4fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_vertexAttribDivisor_c7e452c112f8fba9 = function(e, n, _) {
                e.vertexAttribDivisor(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_vertexAttribIPointer_3c9eecc6d010eb7c = function(e, n, _, t, r, b) {
                e.vertexAttribIPointer(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_activeTexture_5a67b794a7ff8ef9 = function(e, n) {
                e.activeTexture(n >>> 0)
            }
            ,
            n.wbg.__wbg_attachShader_06c432ad16c8823a = function(e, n, _) {
                e.attachShader(n, _)
            }
            ,
            n.wbg.__wbg_bindBuffer_c0ef32bca575b1bf = function(e, n, _) {
                e.bindBuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindFramebuffer_d0a5dbfb286c50fc = function(e, n, _) {
                e.bindFramebuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindRenderbuffer_2b3c56d5e3a06843 = function(e, n, _) {
                e.bindRenderbuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindTexture_b93b09b8ccb1ad79 = function(e, n, _) {
                e.bindTexture(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_blendColor_13cd680b4a571d0c = function(e, n, _, t, r) {
                e.blendColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_blendEquation_95764654793819fa = function(e, n) {
                e.blendEquation(n >>> 0)
            }
            ,
            n.wbg.__wbg_blendEquationSeparate_15c450dcb532d4b6 = function(e, n, _) {
                e.blendEquationSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFunc_8dcdda416da47fff = function(e, n, _) {
                e.blendFunc(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFuncSeparate_1b0a9589131ac4ec = function(e, n, _, t, r) {
                e.blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_colorMask_bce35700ad725680 = function(e, n, _, t, r) {
                e.colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r)
            }
            ,
            n.wbg.__wbg_compileShader_81181e6a219b7098 = function(e, n) {
                e.compileShader(n)
            }
            ,
            n.wbg.__wbg_copyTexSubImage2D_3db6d0348e149b43 = function(e, n, _, t, r, b, c, f, a) {
                e.copyTexSubImage2D(n >>> 0, _, t, r, b, c, f, a)
            }
            ,
            n.wbg.__wbg_createBuffer_6ead16b08a511599 = function(e) {
                const n = e.createBuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createFramebuffer_ae61f7f60e4f7262 = function(e) {
                const n = e.createFramebuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createProgram_c835e8e8ff672d87 = function(e) {
                const n = e.createProgram();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createRenderbuffer_546ad13076d171b8 = function(e) {
                const n = e.createRenderbuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createShader_ae014363ffc75c3a = function(e, n) {
                const _ = e.createShader(n >>> 0);
                return g(_) ? 0 : P(_)
            }
            ,
            n.wbg.__wbg_createTexture_bf3e90c90068415a = function(e) {
                const n = e.createTexture();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_cullFace_8caec08bdeac55b3 = function(e, n) {
                e.cullFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_deleteBuffer_dd6dab889155f66c = function(e, n) {
                e.deleteBuffer(n)
            }
            ,
            n.wbg.__wbg_deleteFramebuffer_5c3db6bf8da47a23 = function(e, n) {
                e.deleteFramebuffer(n)
            }
            ,
            n.wbg.__wbg_deleteProgram_fa4467f1f5240581 = function(e, n) {
                e.deleteProgram(n)
            }
            ,
            n.wbg.__wbg_deleteRenderbuffer_b60f60b4646bc91f = function(e, n) {
                e.deleteRenderbuffer(n)
            }
            ,
            n.wbg.__wbg_deleteShader_1763981bc55a576a = function(e, n) {
                e.deleteShader(n)
            }
            ,
            n.wbg.__wbg_deleteTexture_767a200bf1091c20 = function(e, n) {
                e.deleteTexture(n)
            }
            ,
            n.wbg.__wbg_depthFunc_c292cb73977174cf = function(e, n) {
                e.depthFunc(n >>> 0)
            }
            ,
            n.wbg.__wbg_depthMask_bde3394690e9c8af = function(e, n) {
                e.depthMask(0 !== n)
            }
            ,
            n.wbg.__wbg_depthRange_96428a1b266ada78 = function(e, n, _) {
                e.depthRange(n, _)
            }
            ,
            n.wbg.__wbg_disable_7c1d698fcc9ac41f = function(e, n) {
                e.disable(n >>> 0)
            }
            ,
            n.wbg.__wbg_disableVertexAttribArray_eb9b9b0042076ad2 = function(e, n) {
                e.disableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_drawArrays_c5972b3d73095bf5 = function(e, n, _, t) {
                e.drawArrays(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_enable_fb591cc986e74bb0 = function(e, n) {
                e.enable(n >>> 0)
            }
            ,
            n.wbg.__wbg_enableVertexAttribArray_224e3bb561570cc2 = function(e, n) {
                e.enableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_framebufferRenderbuffer_8d91d955b0482c63 = function(e, n, _, t, r) {
                e.framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_framebufferTexture2D_006e888dee2f2eb6 = function(e, n, _, t, r, b) {
                e.framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_frontFace_5bd1fe45478a0153 = function(e, n) {
                e.frontFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_getActiveUniform_2cc7724078a3fc49 = function(e, n, _) {
                const t = e.getActiveUniform(n, _ >>> 0);
                return g(t) ? 0 : P(t)
            }
            ,
            n.wbg.__wbg_getError_54d0953dc572e9d3 = function(e) {
                return e.getError()
            }
            ,
            n.wbg.__wbg_getExtension_9167625a19377c9e = function() {
                return M((function(e, n, _) {
                    const t = e.getExtension(s(n, _));
                    return g(t) ? 0 : P(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getParameter_f9803d52fbf91f53 = function() {
                return M((function(e, n) {
                    return e.getParameter(n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getProgramInfoLog_056131faf2350ad7 = function(e, n, _) {
                const t = n.getProgramInfoLog(_);
                var r = g(t) ? 0 : i(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = c;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getProgramParameter_790db16915da3254 = function(e, n, _) {
                return e.getProgramParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getShaderInfoLog_20c948f5d991e6fd = function(e, n, _) {
                const t = n.getShaderInfoLog(_);
                var r = g(t) ? 0 : i(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = c;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getShaderParameter_37b950cbc20b6795 = function(e, n, _) {
                return e.getShaderParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getSupportedExtensions_0025d1c62129a18d = function(e) {
                const n = e.getSupportedExtensions();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_getUniformLocation_a7c602314cbc2c05 = function(e, n, _, t) {
                const r = e.getUniformLocation(n, s(_, t));
                return g(r) ? 0 : P(r)
            }
            ,
            n.wbg.__wbg_linkProgram_bc5dc3f9357619ca = function(e, n) {
                e.linkProgram(n)
            }
            ,
            n.wbg.__wbg_pixelStorei_d72d429580d66228 = function(e, n, _) {
                e.pixelStorei(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_polygonOffset_041f7e38a611f668 = function(e, n, _) {
                e.polygonOffset(n, _)
            }
            ,
            n.wbg.__wbg_renderbufferStorage_66f193b116699606 = function(e, n, _, t, r) {
                e.renderbufferStorage(n >>> 0, _ >>> 0, t, r)
            }
            ,
            n.wbg.__wbg_scissor_ba4f49872ea487b7 = function(e, n, _, t, r) {
                e.scissor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_shaderSource_928e12db21ccefe3 = function(e, n, _, t) {
                e.shaderSource(n, s(_, t))
            }
            ,
            n.wbg.__wbg_stencilFuncSeparate_c81b6fc288a68cfe = function(e, n, _, t, r) {
                e.stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMask_ba73d86b68f2d1a9 = function(e, n) {
                e.stencilMask(n >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMaskSeparate_e1468048cf89c6ea = function(e, n, _) {
                e.stencilMaskSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOpSeparate_0bde3a74778a1126 = function(e, n, _, t, r) {
                e.stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_texParameteri_7258cda4d4572982 = function(e, n, _, t) {
                e.texParameteri(n >>> 0, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_uniform1f_e051ff9c7bf1e081 = function(e, n, _) {
                e.uniform1f(n, _)
            }
            ,
            n.wbg.__wbg_uniform1i_f13bd7d6ad492b5a = function(e, n, _) {
                e.uniform1i(n, _)
            }
            ,
            n.wbg.__wbg_uniform4f_97f4fd2d12afc909 = function(e, n, _, t, r, b) {
                e.uniform4f(n, _, t, r, b)
            }
            ,
            n.wbg.__wbg_useProgram_fcb92641d4c3215f = function(e, n) {
                e.useProgram(n)
            }
            ,
            n.wbg.__wbg_vertexAttribPointer_0959b49dbd9a1b3e = function(e, n, _, t, r, b, c) {
                e.vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, c)
            }
            ,
            n.wbg.__wbg_viewport_8fc784fc0658898b = function(e, n, _, t, r) {
                e.viewport(n, _, t, r)
            }
            ,
            n.wbg.__wbg_instanceof_Window_cde2416cf5126a72 = function(e) {
                let n;
                try {
                    n = e instanceof Window
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_document_183cf1eecfdbffee = function(e) {
                const n = e.document;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_location_61ca61017633c753 = function(e) {
                return e.location
            }
            ,
            n.wbg.__wbg_navigator_7078da62d92ff5ad = function(e) {
                return e.navigator
            }
            ,
            n.wbg.__wbg_devicePixelRatio_41f7bf915854e871 = function(e) {
                return e.devicePixelRatio
            }
            ,
            n.wbg.__wbg_localStorage_e11f72e996a4f5d9 = function() {
                return M((function(e) {
                    const n = e.localStorage;
                    return g(n) ? 0 : P(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_confirm_ed8bd6d5b11bb106 = function() {
                return M((function(e, n, _) {
                    return e.confirm(s(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_focus_55fe3aa7beabbc51 = function() {
                return M((function(e) {
                    e.focus()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_open_d3d452ff648d3681 = function() {
                return M((function(e, n, _, t, r) {
                    const b = e.open(s(n, _), s(t, r));
                    return g(b) ? 0 : P(b)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_cancelAnimationFrame_89e252309fb01baa = function() {
                return M((function(e, n) {
                    e.cancelAnimationFrame(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_requestAnimationFrame_244e975fcad8e9a1 = function() {
                return M((function(e, n) {
                    return e.requestAnimationFrame(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_fetch_8cebc656dc6b11b1 = function(e, n) {
                return e.fetch(n)
            }
            ,
            n.wbg.__wbg_body_11da0c1aa9610cb3 = function(e) {
                const n = e.body;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createElement_9ce3fdea8322ff34 = function() {
                return M((function(e, n, _) {
                    return e.createElement(s(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createElementNS_6a08d8f33e767e18 = function() {
                return M((function(e, n, _, t, r) {
                    return e.createElementNS(0 === n ? void 0 : s(n, _), s(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_querySelector_391afe271b8236d5 = function() {
                return M((function(e, n, _) {
                    const t = e.querySelector(s(n, _));
                    return g(t) ? 0 : P(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setid_fe7d3f00faee9503 = function(e, n, _) {
                e.id = s(n, _)
            }
            ,
            n.wbg.__wbg_clientWidth_15a0b51999d4f454 = function(e) {
                return e.clientWidth
            }
            ,
            n.wbg.__wbg_clientHeight_d1f0d14dadbdbebb = function(e) {
                return e.clientHeight
            }
            ,
            n.wbg.__wbg_setinnerHTML_b88bf159b62c2334 = function(e, n, _) {
                e.innerHTML = s(n, _)
            }
            ,
            n.wbg.__wbg_querySelector_a57eae24de697e5f = function() {
                return M((function(e, n, _) {
                    const t = e.querySelector(s(n, _));
                    return g(t) ? 0 : P(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_releasePointerCapture_c05fbeda019e781b = function() {
                return M((function(e, n) {
                    e.releasePointerCapture(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setAttribute_aebcae2169f2f869 = function() {
                return M((function(e, n, _, t, r) {
                    e.setAttribute(s(n, _), s(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setAttributeNS_3c1ca8e544224931 = function() {
                return M((function(e, n, _, t, r, b, c) {
                    e.setAttributeNS(0 === n ? void 0 : s(n, _), s(t, r), s(b, c))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setPointerCapture_50aea839ca77d6c4 = function() {
                return M((function(e, n) {
                    e.setPointerCapture(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_remove_e8b7a30da3792f66 = function(e) {
                e.remove()
            }
            ,
            n.wbg.__wbg_clipboardData_9df31a82d48f5917 = function(e) {
                const n = e.clipboardData;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_wasClean_f80e269a7035a33a = function(e) {
                return e.wasClean
            }
            ,
            n.wbg.__wbg_code_8a4e6c814f55b956 = function(e) {
                return e.code
            }
            ,
            n.wbg.__wbg_reason_38737e2df79b7571 = function(e, n) {
                const _ = i(n.reason, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_newwitheventinitdict_ceffda7854c21a6b = function() {
                return M((function(e, n, _) {
                    return new CloseEvent(s(e, n),_)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlDocument_678c856000dccc91 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLDocument
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_execCommand_03c5aa47ca921b68 = function() {
                return M((function(e, n, _) {
                    return e.execCommand(s(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_videoWidth_0004efb52b150ee1 = function(e) {
                return e.videoWidth
            }
            ,
            n.wbg.__wbg_videoHeight_91a100fca020a216 = function(e) {
                return e.videoHeight
            }
            ,
            n.wbg.__wbg_ctrlKey_ac674c31f44bd157 = function(e) {
                return e.ctrlKey
            }
            ,
            n.wbg.__wbg_shiftKey_a741da931809868b = function(e) {
                return e.shiftKey
            }
            ,
            n.wbg.__wbg_metaKey_d37dd650c2a748a7 = function(e) {
                return e.metaKey
            }
            ,
            n.wbg.__wbg_key_ab25ddd694dd43f3 = function(e, n) {
                const _ = i(n.key, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_code_6f828892fabc6b0f = function(e, n) {
                const _ = i(n.code, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_data_624fd2b6a4a5ac9e = function(e) {
                return e.data
            }
            ,
            n.wbg.__wbg_instanceof_HtmlElement_d9fe655ad4f1046c = function(e) {
                let n;
                try {
                    n = e instanceof HTMLElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setinnerText_51ae4ea67eab16cf = function(e, n, _) {
                e.innerText = s(n, _)
            }
            ,
            n.wbg.__wbg_style_bb2563875c0a818b = function(e) {
                return e.style
            }
            ,
            n.wbg.__wbg_setonclick_307a2514feddff6d = function(e, n) {
                e.onclick = n
            }
            ,
            n.wbg.__wbg_pointerId_58d55b218fe0dea2 = function(e) {
                return e.pointerId
            }
            ,
            n.wbg.__wbg_deltaY_b9ab90e34f3a0f1d = function(e) {
                return e.deltaY
            }
            ,
            n.wbg.__wbg_deltaMode_eeaea4efbd95e3d5 = function(e) {
                return e.deltaMode
            }
            ,
            n.wbg.__wbg_setbuffer_07bf42dc41827e0a = function(e, n) {
                e.buffer = n
            }
            ,
            n.wbg.__wbg_setonended_8dd87a3f89bdfdd8 = function(e, n) {
                e.onended = n
            }
            ,
            n.wbg.__wbg_start_5bf5f92a5044b4cf = function() {
                return M((function(e, n) {
                    e.start(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readyState_13e55da5ad6d64e2 = function(e) {
                return e.readyState
            }
            ,
            n.wbg.__wbg_setbinaryType_dcb62e0f2b346301 = function(e, n) {
                e.binaryType = n
            }
            ,
            n.wbg.__wbg_new_b9b318679315404f = function() {
                return M((function(e, n) {
                    return new WebSocket(s(e, n))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_close_f4135085ec3fc8f0 = function() {
                return M((function(e) {
                    e.close()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_send_c1cc1284964b7434 = function() {
                return M((function(e, n, _) {
                    e.send(s(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_send_2860805104507701 = function() {
                return M((function(e, n, _) {
                    e.send(q(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_length_5f77ecb5c40bc195 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_addColorStop_25bd1ceab4e5249d = function() {
                return M((function(e, n, _, t) {
                    e.addColorStop(n, s(_, t))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_2912c891505cbc22 = function() {
                return M((function(e, n, _, t, r) {
                    e.set(s(n, _), s(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlTextAreaElement_a38b7b941ea08357 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLTextAreaElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setvalue_15231c60278dee22 = function(e, n, _) {
                e.value = s(n, _)
            }
            ,
            n.wbg.__wbg_select_a6fb1f090dee4153 = function(e) {
                e.select()
            }
            ,
            n.wbg.__wbg_baseURI_35dede05a8ddbcb0 = function() {
                return M((function(e, n) {
                    const _ = n.baseURI;
                    var t = g(_) ? 0 : i(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , r = c;
                    d()[e / 4 + 1] = r,
                    d()[e / 4 + 0] = t
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_parentElement_592cb54944d3d002 = function(e) {
                const n = e.parentElement;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_appendChild_2e6a6c9d1f0d443d = function() {
                return M((function(e, n) {
                    return e.appendChild(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeChild_a63022ebbfa6ebf5 = function() {
                return M((function(e, n) {
                    return e.removeChild(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_bindVertexArrayOES_9b5e1523bc4318a9 = function(e, n) {
                e.bindVertexArrayOES(n)
            }
            ,
            n.wbg.__wbg_createVertexArrayOES_b9a61604d56a51c7 = function(e) {
                const n = e.createVertexArrayOES();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_deleteVertexArrayOES_fa21d7164c06faf0 = function(e, n) {
                e.deleteVertexArrayOES(n)
            }
            ,
            n.wbg.__wbg_size_3f52fa5fdd6ff84c = function(e) {
                return e.size
            }
            ,
            n.wbg.__wbg_newwithbuffersourcesequenceandoptions_3956f3afc3d17090 = function() {
                return M((function(e, n) {
                    return new Blob(e,n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_newwithu8arraysequenceandoptions_f520ece5c28a5211 = function() {
                return M((function(e, n) {
                    return new Blob(e,n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_CanvasRenderingContext2d_e264df6db9ec5a3d = function(e) {
                let n;
                try {
                    n = e instanceof CanvasRenderingContext2D
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setglobalAlpha_83c9926d654d3998 = function(e, n) {
                e.globalAlpha = n
            }
            ,
            n.wbg.__wbg_setglobalCompositeOperation_11870ed16a273f0a = function() {
                return M((function(e, n, _) {
                    e.globalCompositeOperation = s(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setstrokeStyle_1bf67b48c7e92f7c = function(e, n) {
                e.strokeStyle = n
            }
            ,
            n.wbg.__wbg_setfillStyle_343558d6a1a50509 = function(e, n) {
                e.fillStyle = n
            }
            ,
            n.wbg.__wbg_setfilter_d603d4dac077b111 = function(e, n, _) {
                e.filter = s(n, _)
            }
            ,
            n.wbg.__wbg_setimageSmoothingEnabled_440bffc026016be3 = function(e, n) {
                e.imageSmoothingEnabled = 0 !== n
            }
            ,
            n.wbg.__wbg_setlineWidth_52861f70ee5fc11d = function(e, n) {
                e.lineWidth = n
            }
            ,
            n.wbg.__wbg_setlineCap_edcaad1fc0d5ddf1 = function(e, n, _) {
                e.lineCap = s(n, _)
            }
            ,
            n.wbg.__wbg_setlineJoin_4d0e72651ba85036 = function(e, n, _) {
                e.lineJoin = s(n, _)
            }
            ,
            n.wbg.__wbg_setmiterLimit_7973579201c9a640 = function(e, n) {
                e.miterLimit = n
            }
            ,
            n.wbg.__wbg_drawImage_25efcf027dcc2208 = function() {
                return M((function(e, n, _, t) {
                    e.drawImage(n, _, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_clip_ec5cb0959015716a = function(e, n, _) {
                e.clip(n, _)
            }
            ,
            n.wbg.__wbg_fill_bcbc0476406322b7 = function(e, n, _) {
                e.fill(n, _)
            }
            ,
            n.wbg.__wbg_stroke_ae8518e473c4376a = function(e, n) {
                e.stroke(n)
            }
            ,
            n.wbg.__wbg_createLinearGradient_8f9eadd79f7c5fef = function(e, n, _, t, r) {
                return e.createLinearGradient(n, _, t, r)
            }
            ,
            n.wbg.__wbg_createPattern_d6103ec8fb3c3c33 = function() {
                return M((function(e, n, _, t) {
                    const r = e.createPattern(n, s(_, t));
                    return g(r) ? 0 : P(r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createRadialGradient_ab2a290ee5fd0e03 = function() {
                return M((function(e, n, _, t, r, b, c) {
                    return e.createRadialGradient(n, _, t, r, b, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_putImageData_a3f350ccbd660800 = function() {
                return M((function(e, n, _, t) {
                    e.putImageData(n, _, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_clearRect_bba8d57f3a4d13b9 = function(e, n, _, t, r) {
                e.clearRect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_fillRect_beae00c04b0cfb93 = function(e, n, _, t, r) {
                e.fillRect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_restore_74a0c86b727a531b = function(e) {
                e.restore()
            }
            ,
            n.wbg.__wbg_save_61ede9e2b8a62e6f = function(e) {
                e.save()
            }
            ,
            n.wbg.__wbg_resetTransform_8f98c1d66e7f89db = function() {
                return M((function(e) {
                    e.resetTransform()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setTransform_233d3936dc1e073d = function() {
                return M((function(e, n, _, t, r, b, c) {
                    e.setTransform(n, _, t, r, b, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_transform_b2efaa20d3c87088 = function() {
                return M((function(e, n, _, t, r, b, c) {
                    e.transform(n, _, t, r, b, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_href_92490614763f3f7c = function() {
                return M((function(e, n) {
                    const _ = i(n.href, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = c;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_protocol_a741904865edbf7b = function() {
                return M((function(e, n) {
                    const _ = i(n.protocol, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = c;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_assign_519c419582b364a5 = function() {
                return M((function(e, n, _) {
                    e.assign(s(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_new_ca6d092d761478c6 = function() {
                return M((function() {
                    return new Path2D
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addPath_627043dfbbaa5dd6 = function(e, n, _) {
                e.addPath(n, _)
            }
            ,
            n.wbg.__wbg_bezierCurveTo_6418ae0c6e441f67 = function(e, n, _, t, r, b, c) {
                e.bezierCurveTo(n, _, t, r, b, c)
            }
            ,
            n.wbg.__wbg_closePath_146579bd50ace9d0 = function(e) {
                e.closePath()
            }
            ,
            n.wbg.__wbg_lineTo_860f8ce8ae2bbdae = function(e, n, _) {
                e.lineTo(n, _)
            }
            ,
            n.wbg.__wbg_moveTo_abd134602dd1c7dd = function(e, n, _) {
                e.moveTo(n, _)
            }
            ,
            n.wbg.__wbg_quadraticCurveTo_a10c88191185c255 = function(e, n, _, t, r) {
                e.quadraticCurveTo(n, _, t, r)
            }
            ,
            n.wbg.__wbg_rect_626b57c4d2d96a13 = function(e, n, _, t, r) {
                e.rect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_size_4c24a4b2e2194883 = function(e) {
                return e.size
            }
            ,
            n.wbg.__wbg_type_670485b725fc547b = function(e) {
                return e.type
            }
            ,
            n.wbg.__wbg_name_8f6fe8ee0d6c0be8 = function(e, n) {
                const _ = i(n.name, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_connect_d1235c47cbe5a060 = function() {
                return M((function(e, n) {
                    return e.connect(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_name_6443ed5608a826ef = function(e, n) {
                const _ = i(n.name, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_lastModified_95cb14b2ccff3ec5 = function(e) {
                return e.lastModified
            }
            ,
            n.wbg.__wbg_instanceof_HtmlAnchorElement_b212e47cc4b7708b = function(e) {
                let n;
                try {
                    n = e instanceof HTMLAnchorElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setdownload_bed9c50d211d334f = function(e, n, _) {
                e.download = s(n, _)
            }
            ,
            n.wbg.__wbg_sethref_9efc2168fc43670a = function(e, n, _) {
                e.href = s(n, _)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlButtonElement_937d3bb8ffc470ae = function(e) {
                let n;
                try {
                    n = e instanceof HTMLButtonElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_instanceof_HtmlCanvasElement_838d8b92f3c55028 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLCanvasElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_width_b813b325b323728a = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_setwidth_06b3724e3657b03e = function(e, n) {
                e.width = n >>> 0
            }
            ,
            n.wbg.__wbg_height_646e862bac72cff1 = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_setheight_20af00b46a00cb54 = function(e, n) {
                e.height = n >>> 0
            }
            ,
            n.wbg.__wbg_getContext_a29bad1d160bec3d = function() {
                return M((function(e, n, _) {
                    const t = e.getContext(s(n, _));
                    return g(t) ? 0 : P(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getContext_897a215471051682 = function() {
                return M((function(e, n, _, t) {
                    const r = e.getContext(s(n, _), t);
                    return g(r) ? 0 : P(r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlFormElement_eb100a9bdacc9fe6 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLFormElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setaction_6a0e46394931ffc9 = function(e, n, _) {
                e.action = s(n, _)
            }
            ,
            n.wbg.__wbg_setmethod_81ae1acd6fd03957 = function(e, n, _) {
                e.method = s(n, _)
            }
            ,
            n.wbg.__wbg_settarget_a77390d923e83844 = function(e, n, _) {
                e.target = s(n, _)
            }
            ,
            n.wbg.__wbg_submit_331dac6cda6b2edd = function() {
                return M((function(e) {
                    e.submit()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_width_d8c4d2a00d10a364 = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_setwidth_f7d45a47fe2cc350 = function(e, n) {
                e.width = n >>> 0
            }
            ,
            n.wbg.__wbg_height_36ab0804b689fdcd = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_setheight_37f92bfe2df900f6 = function(e, n) {
                e.height = n >>> 0
            }
            ,
            n.wbg.__wbg_framebufferTextureMultiviewOVR_2f101ca6d3d5ec6c = function(e, n, _, t, r, b, c) {
                e.framebufferTextureMultiviewOVR(n >>> 0, _ >>> 0, t, r, b, c)
            }
            ,
            n.wbg.__wbg_headers_4711243cf3bffca0 = function(e) {
                return e.headers
            }
            ,
            n.wbg.__wbg_newwithstrandinit_29038da14d09e330 = function() {
                return M((function(e, n, _) {
                    return new Request(s(e, n),_)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_Response_944e2745b5db71f5 = function(e) {
                let n;
                try {
                    n = e instanceof Response
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_url_1f609e63ff1a7983 = function(e, n) {
                const _ = i(n.url, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_redirected_81fdcf58100ba68c = function(e) {
                return e.redirected
            }
            ,
            n.wbg.__wbg_status_7841bb47be2a8f16 = function(e) {
                return e.status
            }
            ,
            n.wbg.__wbg_ok_a7a86830ee82e976 = function(e) {
                return e.ok
            }
            ,
            n.wbg.__wbg_statusText_9347a20fc7826bd4 = function(e, n) {
                const _ = i(n.statusText, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_arrayBuffer_e32d72b052ba31d7 = function() {
                return M((function(e) {
                    return e.arrayBuffer()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_WebGlRenderingContext_7ff8d8adfb8c0fb3 = function(e) {
                let n;
                try {
                    n = e instanceof WebGLRenderingContext
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_drawingBufferWidth_b9a0aa225e7911c0 = function(e) {
                return e.drawingBufferWidth
            }
            ,
            n.wbg.__wbg_drawingBufferHeight_c1e66f23676caaaf = function(e) {
                return e.drawingBufferHeight
            }
            ,
            n.wbg.__wbg_bufferData_643bd0cc2cf33013 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_2070fa76f6302a3a = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_809a59d283cd6a75 = function(e, n, _, t, r) {
                e.bufferData(n >>> 0, q(_, t), r >>> 0)
            }
            ,
            n.wbg.__wbg_bufferSubData_76d6aed435b3f17a = function(e, n, _, t) {
                e.bufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_59dd12942cc23319 = function(e, n, _, t, r, b, c, f, a) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a)
            }
            ,
            n.wbg.__wbg_readPixels_14d882ae98f262f8 = function() {
                return M((function(e, n, _, t, r, b, c, f) {
                    e.readPixels(n, _, t, r, b >>> 0, c >>> 0, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texImage2D_54144ec7899f99f0 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u, o) {
                    e.texImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, 0 === u ? void 0 : q(u, o))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_5fb421f096442197 = function() {
                return M((function(e, n, _, t, r, b, c, f, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, c, f >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_uniform1fv_7636bd97e28fffc4 = function(e, n, _, t) {
                e.uniform1fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform2fv_c1f05515efaba190 = function(e, n, _, t) {
                e.uniform2fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform2iv_c659ebac35b9010a = function(e, n, _, t) {
                e.uniform2iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniform3fv_50103be86be2160a = function(e, n, _, t) {
                e.uniform3fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform3iv_94345e7755cd7065 = function(e, n, _, t) {
                e.uniform3iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniform4fv_62e2cdfa8d950cbb = function(e, n, _, t) {
                e.uniform4fv(n, C(_, t))
            }
            ,
            n.wbg.__wbg_uniform4iv_550441317ac173d0 = function(e, n, _, t) {
                e.uniform4iv(n, O(_, t))
            }
            ,
            n.wbg.__wbg_uniformMatrix2fv_e0a6af2cdd4a327f = function(e, n, _, t, r) {
                e.uniformMatrix2fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix3fv_289cf4b804d21c3d = function(e, n, _, t, r) {
                e.uniformMatrix3fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix4fv_0e689eebc768e6f5 = function(e, n, _, t, r) {
                e.uniformMatrix4fv(n, 0 !== _, C(t, r))
            }
            ,
            n.wbg.__wbg_activeTexture_3133544378a42f85 = function(e, n) {
                e.activeTexture(n >>> 0)
            }
            ,
            n.wbg.__wbg_attachShader_5f2b830f85fe5214 = function(e, n, _) {
                e.attachShader(n, _)
            }
            ,
            n.wbg.__wbg_bindBuffer_f5494dced2da6816 = function(e, n, _) {
                e.bindBuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindFramebuffer_9b0acb44ec7922f6 = function(e, n, _) {
                e.bindFramebuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindRenderbuffer_bd724af6f06a6668 = function(e, n, _) {
                e.bindRenderbuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindTexture_b65e04a9a41089c5 = function(e, n, _) {
                e.bindTexture(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_blendColor_b4987cfbdd3dcf93 = function(e, n, _, t, r) {
                e.blendColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_blendEquation_9d88092bf2289250 = function(e, n) {
                e.blendEquation(n >>> 0)
            }
            ,
            n.wbg.__wbg_blendEquationSeparate_24eecf7601450fe7 = function(e, n, _) {
                e.blendEquationSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFunc_be0e21ef9883279c = function(e, n, _) {
                e.blendFunc(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFuncSeparate_5b5fee01a93374c8 = function(e, n, _, t, r) {
                e.blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_clear_cdb6757c4784affb = function(e, n) {
                e.clear(n >>> 0)
            }
            ,
            n.wbg.__wbg_clearColor_0278b0551b3e7d28 = function(e, n, _, t, r) {
                e.clearColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_colorMask_0376e32b78af65ed = function(e, n, _, t, r) {
                e.colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r)
            }
            ,
            n.wbg.__wbg_compileShader_b67e96b6423b77f6 = function(e, n) {
                e.compileShader(n)
            }
            ,
            n.wbg.__wbg_copyTexSubImage2D_c003f0bcdc1e2f21 = function(e, n, _, t, r, b, c, f, a) {
                e.copyTexSubImage2D(n >>> 0, _, t, r, b, c, f, a)
            }
            ,
            n.wbg.__wbg_createBuffer_021d77b738829b0a = function(e) {
                const n = e.createBuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createFramebuffer_fa5434237a17b841 = function(e) {
                const n = e.createFramebuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createProgram_157eefe7131da099 = function(e) {
                const n = e.createProgram();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createRenderbuffer_6117a7baffe1e2ea = function(e) {
                const n = e.createRenderbuffer();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_createShader_a248274c77c19763 = function(e, n) {
                const _ = e.createShader(n >>> 0);
                return g(_) ? 0 : P(_)
            }
            ,
            n.wbg.__wbg_createTexture_d7064762f0a65367 = function(e) {
                const n = e.createTexture();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_cullFace_faffd470adfbe789 = function(e, n) {
                e.cullFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_deleteBuffer_08659fcc166ac49c = function(e, n) {
                e.deleteBuffer(n)
            }
            ,
            n.wbg.__wbg_deleteFramebuffer_1ac04c03ba626687 = function(e, n) {
                e.deleteFramebuffer(n)
            }
            ,
            n.wbg.__wbg_deleteProgram_911f2e7223030fb4 = function(e, n) {
                e.deleteProgram(n)
            }
            ,
            n.wbg.__wbg_deleteRenderbuffer_f75bf37baaa7f585 = function(e, n) {
                e.deleteRenderbuffer(n)
            }
            ,
            n.wbg.__wbg_deleteShader_c58d400272a58a2c = function(e, n) {
                e.deleteShader(n)
            }
            ,
            n.wbg.__wbg_deleteTexture_18c5c1f49778a77f = function(e, n) {
                e.deleteTexture(n)
            }
            ,
            n.wbg.__wbg_depthFunc_098a50bbcb104e79 = function(e, n) {
                e.depthFunc(n >>> 0)
            }
            ,
            n.wbg.__wbg_depthMask_60bb7d8db55837a0 = function(e, n) {
                e.depthMask(0 !== n)
            }
            ,
            n.wbg.__wbg_depthRange_52ea2c88bcec18d3 = function(e, n, _) {
                e.depthRange(n, _)
            }
            ,
            n.wbg.__wbg_disable_0469cc57066f58ac = function(e, n) {
                e.disable(n >>> 0)
            }
            ,
            n.wbg.__wbg_disableVertexAttribArray_c85182ad3bd570d0 = function(e, n) {
                e.disableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_drawArrays_d644ae72c03b2c27 = function(e, n, _, t) {
                e.drawArrays(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_drawElements_74abca35806a62bd = function(e, n, _, t, r) {
                e.drawElements(n >>> 0, _, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_enable_0a908e612a142cce = function(e, n) {
                e.enable(n >>> 0)
            }
            ,
            n.wbg.__wbg_enableVertexAttribArray_7e6345ac810e2ea4 = function(e, n) {
                e.enableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_framebufferRenderbuffer_383a59ed7a8f191b = function(e, n, _, t, r) {
                e.framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_framebufferTexture2D_aa51df9388740e60 = function(e, n, _, t, r, b) {
                e.framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_frontFace_0a8170a96ca805ae = function(e, n) {
                e.frontFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_getActiveUniform_d2922d4db3e9c275 = function(e, n, _) {
                const t = e.getActiveUniform(n, _ >>> 0);
                return g(t) ? 0 : P(t)
            }
            ,
            n.wbg.__wbg_getAttribLocation_f215c5d8469fbd93 = function(e, n, _, t) {
                return e.getAttribLocation(n, s(_, t))
            }
            ,
            n.wbg.__wbg_getExtension_4d6bc63c721ceeae = function() {
                return M((function(e, n, _) {
                    const t = e.getExtension(s(n, _));
                    return g(t) ? 0 : P(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getParameter_3de02d06ae9c1133 = function() {
                return M((function(e, n) {
                    return e.getParameter(n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getProgramInfoLog_650791ed1218ae54 = function(e, n, _) {
                const t = n.getProgramInfoLog(_);
                var r = g(t) ? 0 : i(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = c;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getProgramParameter_529c4bcf8c4ee18e = function(e, n, _) {
                return e.getProgramParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getShaderInfoLog_58a82681a9c442e7 = function(e, n, _) {
                const t = n.getShaderInfoLog(_);
                var r = g(t) ? 0 : i(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = c;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getShaderParameter_c1610eb33511085e = function(e, n, _) {
                return e.getShaderParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getUniformLocation_2c91af6518876e42 = function(e, n, _, t) {
                const r = e.getUniformLocation(n, s(_, t));
                return g(r) ? 0 : P(r)
            }
            ,
            n.wbg.__wbg_linkProgram_83243a6b6a0c9fb4 = function(e, n) {
                e.linkProgram(n)
            }
            ,
            n.wbg.__wbg_pixelStorei_4efa23d93154f77d = function(e, n, _) {
                e.pixelStorei(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_polygonOffset_3672ebaf6de04b50 = function(e, n, _) {
                e.polygonOffset(n, _)
            }
            ,
            n.wbg.__wbg_renderbufferStorage_5fb48c7f61b5137e = function(e, n, _, t, r) {
                e.renderbufferStorage(n >>> 0, _ >>> 0, t, r)
            }
            ,
            n.wbg.__wbg_scissor_d3671d6dc45f6c26 = function(e, n, _, t, r) {
                e.scissor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_shaderSource_f7a361c4354dbdf4 = function(e, n, _, t) {
                e.shaderSource(n, s(_, t))
            }
            ,
            n.wbg.__wbg_stencilFunc_e94a0c92cd4efaec = function(e, n, _, t) {
                e.stencilFunc(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_stencilFuncSeparate_af859a7c993612bb = function(e, n, _, t, r) {
                e.stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMask_99f21d29511d9d79 = function(e, n) {
                e.stencilMask(n >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMaskSeparate_24f9d07e96c9034d = function(e, n, _) {
                e.stencilMaskSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOp_57df877f36c86d7b = function(e, n, _, t) {
                e.stencilOp(n >>> 0, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOpSeparate_8786f8d830d34672 = function(e, n, _, t, r) {
                e.stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_texParameteri_b4d0b459f1fba172 = function(e, n, _, t) {
                e.texParameteri(n >>> 0, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_uniform1f_d7111d0363d58dc2 = function(e, n, _) {
                e.uniform1f(n, _)
            }
            ,
            n.wbg.__wbg_uniform1i_73819b7968ac4e58 = function(e, n, _) {
                e.uniform1i(n, _)
            }
            ,
            n.wbg.__wbg_uniform4f_6bb57df76119eb0e = function(e, n, _, t, r, b) {
                e.uniform4f(n, _, t, r, b)
            }
            ,
            n.wbg.__wbg_useProgram_521dfe9012fd77d6 = function(e, n) {
                e.useProgram(n)
            }
            ,
            n.wbg.__wbg_vertexAttribPointer_04346476271a47a3 = function(e, n, _, t, r, b, c) {
                e.vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, c)
            }
            ,
            n.wbg.__wbg_viewport_4bd44b9c38348e9c = function(e, n, _, t, r) {
                e.viewport(n, _, t, r)
            }
            ,
            n.wbg.__wbg_getSupportedProfiles_540bccdc401f1d36 = function(e) {
                const n = e.getSupportedProfiles();
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_drawArraysInstancedANGLE_82a216678a9be0ce = function(e, n, _, t, r) {
                e.drawArraysInstancedANGLE(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_drawElementsInstancedANGLE_4c5a141e1f624e92 = function(e, n, _, t, r, b) {
                e.drawElementsInstancedANGLE(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_vertexAttribDivisorANGLE_0f090c8b31e2ea47 = function(e, n, _) {
                e.vertexAttribDivisorANGLE(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_inverse_43feddd71a1896ae = function(e) {
                return e.inverse()
            }
            ,
            n.wbg.__wbg_width_6c5fb35574feaadc = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_height_f55737a1397fd32b = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_width_72c48cb3dc3570ce = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_height_b8a42f78b9ab2c9e = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_newwithsw_5fe9446d20911c26 = function() {
                return M((function(e, n) {
                    return new ImageData(e >>> 0,n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_newwithu8clampedarray_1e36534fa9bd46a2 = function() {
                return M((function(e, n, _) {
                    return new ImageData(W(e, n),_ >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_platform_7c341ced0a5e79f0 = function() {
                return M((function(e, n) {
                    const _ = i(n.platform, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = c;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_language_e2a23bf9f4b99268 = function(e, n) {
                const _ = n.language;
                var t = g(_) ? 0 : i(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , r = c;
                d()[e / 4 + 1] = r,
                d()[e / 4 + 0] = t
            }
            ,
            n.wbg.__wbg_get_758df923f75416e8 = function() {
                return M((function(e, n, _, t) {
                    const r = n[s(_, t)];
                    var f = g(r) ? 0 : i(r, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , a = c;
                    d()[e / 4 + 1] = a,
                    d()[e / 4 + 0] = f
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_127ec8f757a854fd = function() {
                return M((function(e, n, _, t, r) {
                    e[s(n, _)] = s(t, r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_delete_8390fe6d4b04b86c = function() {
                return M((function(e, n, _) {
                    delete e[s(n, _)]
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_destination_b80b78676c85be36 = function(e) {
                return e.destination
            }
            ,
            n.wbg.__wbg_sampleRate_8c0bf8ac802a959a = function(e) {
                return e.sampleRate
            }
            ,
            n.wbg.__wbg_currentTime_6e3ac52d729fcd7c = function(e) {
                return e.currentTime
            }
            ,
            n.wbg.__wbg_new_9bf2893f6b2ab17d = function() {
                return M((function() {
                    return new r
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_close_ee68dad4f8e4064e = function() {
                return M((function(e) {
                    return e.close()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_suspend_0b4d1ce7709dd714 = function() {
                return M((function(e) {
                    return e.suspend()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createBuffer_0bd1bbb8f809f354 = function() {
                return M((function(e, n, _, t) {
                    return e.createBuffer(n >>> 0, _ >>> 0, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createBufferSource_02e48ab801096cfd = function() {
                return M((function(e) {
                    return e.createBufferSource()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_resume_92afff9b4ed62b07 = function() {
                return M((function(e) {
                    return e.resume()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setTransform_c8feb4cdad95a47d = function(e, n) {
                e.setTransform(n)
            }
            ,
            n.wbg.__wbg_setProperty_de108d2e8182d9c0 = function() {
                return M((function(e, n, _, t, r) {
                    e.setProperty(s(n, _), s(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addEventListener_0f2891b0794e07fa = function() {
                return M((function(e, n, _, t) {
                    e.addEventListener(s(n, _), t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addEventListener_51709b9747ad8980 = function() {
                return M((function(e, n, _, t, r) {
                    e.addEventListener(s(n, _), t, r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addEventListener_2452b2c7b84acc8c = function() {
                return M((function(e, n, _, t, r) {
                    e.addEventListener(s(n, _), t, 0 !== r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_dispatchEvent_2434b822eb17a7b5 = function() {
                return M((function(e, n) {
                    return e.dispatchEvent(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeEventListener_104d11302bb212d1 = function() {
                return M((function(e, n, _, t) {
                    e.removeEventListener(s(n, _), t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeEventListener_5b1e762a7951280a = function() {
                return M((function(e, n, _, t, r) {
                    e.removeEventListener(s(n, _), t, 0 !== r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_result_5e08da49132b9af2 = function() {
                return M((function(e) {
                    return e.result
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setonload_a5989ad0a3cbb169 = function(e, n) {
                e.onload = n
            }
            ,
            n.wbg.__wbg_new_b71bf93085f9d631 = function() {
                return M((function() {
                    return new FileReader
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readAsArrayBuffer_55965fe069b748b7 = function() {
                return M((function(e, n) {
                    e.readAsArrayBuffer(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getData_8a2880812d381455 = function() {
                return M((function(e, n, _, t) {
                    const r = i(n.getData(s(_, t)), b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , f = c;
                    d()[e / 4 + 1] = f,
                    d()[e / 4 + 0] = r
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlInputElement_8f81a6600ceb1918 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLInputElement
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setaccept_d035496a337c3c03 = function(e, n, _) {
                e.accept = s(n, _)
            }
            ,
            n.wbg.__wbg_files_b7b48824af0dcef1 = function(e) {
                const n = e.files;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_setmultiple_c2646cc32fb42591 = function(e, n) {
                e.multiple = 0 !== n
            }
            ,
            n.wbg.__wbg_setname_b12def289a8f0caa = function(e, n, _) {
                e.name = s(n, _)
            }
            ,
            n.wbg.__wbg_settype_e400ea1c05f83f80 = function(e, n, _) {
                e.type = s(n, _)
            }
            ,
            n.wbg.__wbg_setvalue_7d187f6cc23d8192 = function(e, n, _) {
                e.value = s(n, _)
            }
            ,
            n.wbg.__wbg_drawBuffersWEBGL_03845b515a0bce06 = function(e, n) {
                e.drawBuffersWEBGL(n)
            }
            ,
            n.wbg.__wbg_a_fb50200002a90975 = function(e) {
                return e.a
            }
            ,
            n.wbg.__wbg_seta_1710bc665b6a4636 = function(e, n) {
                e.a = n
            }
            ,
            n.wbg.__wbg_b_8f57a6157f09b4ee = function(e) {
                return e.b
            }
            ,
            n.wbg.__wbg_c_4b5fede85e9dfd5c = function(e) {
                return e.c
            }
            ,
            n.wbg.__wbg_d_3d88f9bef34c61f7 = function(e) {
                return e.d
            }
            ,
            n.wbg.__wbg_setd_e8e3ad3c7e294673 = function(e, n) {
                e.d = n
            }
            ,
            n.wbg.__wbg_e_bcfedaedcc1dc9b8 = function(e) {
                return e.e
            }
            ,
            n.wbg.__wbg_f_25fb08cf8031bfe3 = function(e) {
                return e.f
            }
            ,
            n.wbg.__wbg_new_afefa9d6b4110bf8 = function() {
                return M((function() {
                    return new DOMMatrix
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_newwitharray64_a48a2e211d80680d = function() {
                return M((function(e, n) {
                    var _, t;
                    return new DOMMatrix((_ = e,
                    t = n,
                    _ >>>= 0,
                    p().subarray(_ / 8, _ / 8 + t)))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_currentTarget_d188b2c4da51f1d0 = function(e) {
                const n = e.currentTarget;
                return g(n) ? 0 : P(n)
            }
            ,
            n.wbg.__wbg_preventDefault_9299867e06da6909 = function(e) {
                e.preventDefault()
            }
            ,
            n.wbg.__wbg_length_1172ab9213274731 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_get_3519b46be2694573 = function(e, n) {
                const _ = e[n >>> 0];
                return g(_) ? 0 : P(_)
            }
            ,
            n.wbg.__wbg_offsetX_3a146805201e432d = function(e) {
                return e.offsetX
            }
            ,
            n.wbg.__wbg_offsetY_4a991814d3d6487d = function(e) {
                return e.offsetY
            }
            ,
            n.wbg.__wbg_button_22121917aaba48d0 = function(e) {
                return e.button
            }
            ,
            n.wbg.__wbg_createObjectURL_86955f30bbed45eb = function() {
                return M((function(e, n) {
                    const _ = i(URL.createObjectURL(n), b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = c;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_get_4a9aa5157afeb382 = function(e, n) {
                return e[n >>> 0]
            }
            ,
            n.wbg.__wbg_length_cace2e0b3ddc0502 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_new_08236689f0afb357 = function() {
                return new Array
            }
            ,
            n.wbg.__wbg_newnoargs_ccdcae30fd002262 = function(e, n) {
                return new Function(s(e, n))
            }
            ,
            n.wbg.__wbg_next_15da6a3df9290720 = function(e) {
                return e.next
            }
            ,
            n.wbg.__wbg_next_1989a20442400aaa = function() {
                return M((function(e) {
                    return e.next()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_done_bc26bf4ada718266 = function(e) {
                return e.done
            }
            ,
            n.wbg.__wbg_value_0570714ff7d75f35 = function(e) {
                return e.value
            }
            ,
            n.wbg.__wbg_iterator_7ee1a391d310f8e4 = function() {
                return Symbol.iterator
            }
            ,
            n.wbg.__wbg_get_2aff440840bb6202 = function() {
                return M((function(e, n) {
                    return Reflect.get(e, n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_call_669127b9d730c650 = function() {
                return M((function(e, n) {
                    return e.call(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_new_c728d68b8b34487e = function() {
                return new Object
            }
            ,
            n.wbg.__wbg_self_3fad056edded10bd = function() {
                return M((function() {
                    return self.self
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_window_a4f46c98a61d4089 = function() {
                return M((function() {
                    return window.window
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_globalThis_17eff828815f7d84 = function() {
                return M((function() {
                    return globalThis.globalThis
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_global_46f939f6541643c5 = function() {
                return M((function() {
                    return _.g.global
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_0ac78a2bc07da03c = function(e, n, _) {
                e[n >>> 0] = _
            }
            ,
            n.wbg.__wbg_includes_e2c5dca225263a18 = function(e, n, _) {
                return e.includes(n, _)
            }
            ,
            n.wbg.__wbg_isArray_38525be7442aa21e = function(e) {
                return Array.isArray(e)
            }
            ,
            n.wbg.__wbg_of_283796b230947688 = function(e) {
                return Array.of(e)
            }
            ,
            n.wbg.__wbg_of_6a2808915f6aed46 = function(e, n) {
                return Array.of(e, n)
            }
            ,
            n.wbg.__wbg_push_fd3233d09cf81821 = function(e, n) {
                return e.push(n)
            }
            ,
            n.wbg.__wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d = function(e) {
                let n;
                try {
                    n = e instanceof ArrayBuffer
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_values_452cc64929239194 = function(e) {
                return e.values()
            }
            ,
            n.wbg.__wbg_instanceof_Error_9f5881c3c4149389 = function(e) {
                let n;
                try {
                    n = e instanceof Error
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_new_ab87fd305ed9004b = function(e, n) {
                return new Error(s(e, n))
            }
            ,
            n.wbg.__wbg_message_35f9b952e1b922e2 = function(e) {
                return e.message
            }
            ,
            n.wbg.__wbg_name_e1152a59269f79e5 = function(e) {
                return e.name
            }
            ,
            n.wbg.__wbg_toString_d0cefe4046ecb265 = function(e) {
                return e.toString()
            }
            ,
            n.wbg.__wbg_apply_1c259fc7880fb101 = function() {
                return M((function(e, n, _) {
                    return e.apply(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_call_53fc3abd42e24ec8 = function() {
                return M((function(e, n, _) {
                    return e.call(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_isSafeInteger_c38b0a16d0c7cef7 = function(e) {
                return Number.isSafeInteger(e)
            }
            ,
            n.wbg.__wbg_getTime_ed6ee333b702f8fc = function(e) {
                return e.getTime()
            }
            ,
            n.wbg.__wbg_getTimezoneOffset_5cb2b8973dd9f251 = function(e) {
                return e.getTimezoneOffset()
            }
            ,
            n.wbg.__wbg_new_a49511604c14761d = function(e) {
                return new Date(e)
            }
            ,
            n.wbg.__wbg_new0_ad75dd38f92424e2 = function() {
                return new Date
            }
            ,
            n.wbg.__wbg_instanceof_Object_3c95bd459efa5c3c = function(e) {
                let n;
                try {
                    n = e instanceof Object
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_entries_6d727b73ee02b7ce = function(e) {
                return Object.entries(e)
            }
            ,
            n.wbg.__wbg_fromEntries_32e743561fa647fb = function() {
                return M((function(e) {
                    return Object.fromEntries(e)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_is_c74aa9bb973d6109 = function(e, n) {
                return Object.is(e, n)
            }
            ,
            n.wbg.__wbg_new_feb65b865d980ae2 = function(e, n) {
                try {
                    var _ = {
                        a: e,
                        b: n
                    };
                    const t = new Promise(( (e, n) => {
                        const t = _.a;
                        _.a = 0;
                        try {
                            return function(e, n, _, t) {
                                b.closure7829_externref_shim(e, n, _, t)
                            }(t, _.b, e, n)
                        } finally {
                            _.a = t
                        }
                    }
                    ));
                    return t
                } finally {
                    _.a = _.b = 0
                }
            }
            ,
            n.wbg.__wbg_resolve_a3252b2860f0a09e = function(e) {
                return Promise.resolve(e)
            }
            ,
            n.wbg.__wbg_then_89e1c559530b85cf = function(e, n) {
                return e.then(n)
            }
            ,
            n.wbg.__wbg_then_1bbc9edafd859b06 = function(e, n, _) {
                return e.then(n, _)
            }
            ,
            n.wbg.__wbg_buffer_344d9b41efe96da7 = function(e) {
                return e.buffer
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_b1262aece603a9a4 = function(e, n, _) {
                return new Int8Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_de55832ce930edf6 = function(e, n, _) {
                return new Int16Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_4256761d1703f95e = function(e, n, _) {
                return new Int32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_2dc04d99088b15e3 = function(e, n, _) {
                return new Uint8Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_new_d8a000788389a31e = function(e) {
                return new Uint8Array(e)
            }
            ,
            n.wbg.__wbg_set_dcfd613a3420f908 = function(e, n, _) {
                e.set(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_length_a5587d6cd79ab197 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_2dfd4b7f2d9095c8 = function(e, n, _) {
                return new Uint16Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_666c0bd209289750 = function(e, n, _) {
                return new Uint32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_4761a4dc62ec68a9 = function(e, n, _) {
                return new Float32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_instanceof_Uint8Array_19e6f142a5e7e1e1 = function(e) {
                let n;
                try {
                    n = e instanceof Uint8Array
                } catch (e) {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_newwithlength_13b5319ab422dcf6 = function(e) {
                return new Uint8Array(e >>> 0)
            }
            ,
            n.wbg.__wbg_buffer_b334b57bee6f611b = function(e) {
                return e.buffer
            }
            ,
            n.wbg.__wbg_subarray_6ca5cfa7fbb9abbe = function(e, n, _) {
                return e.subarray(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_ownKeys_8516cc27797cfb60 = function() {
                return M((function(e) {
                    return Reflect.ownKeys(e)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_40f7786a25a9cc7e = function() {
                return M((function(e, n, _) {
                    return Reflect.set(e, n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbindgen_bigint_get_as_i64 = function(e, n) {
                const _ = "bigint" == typeof n ? n : void 0;
                (null !== y && 0 !== y.byteLength || (y = new BigInt64Array(b.memory.buffer)),
                y)[e / 8 + 1] = g(_) ? BigInt(0) : _,
                d()[e / 4 + 0] = !g(_)
            }
            ,
            n.wbg.__wbindgen_debug_string = function(e, n) {
                const _ = i(h(n), b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = c;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbindgen_throw = function(e, n) {
                throw new Error(s(e, n))
            }
            ,
            n.wbg.__wbindgen_memory = function() {
                return b.memory
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1259 = function(e, n, _) {
                return x(e, n, 471, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1260 = function(e, n, _) {
                return x(e, n, 471, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1261 = function(e, n, _) {
                return x(e, n, 471, A)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1262 = function(e, n, _) {
                return x(e, n, 471, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1263 = function(e, n, _) {
                return x(e, n, 471, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1264 = function(e, n, _) {
                return x(e, n, 471, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1266 = function(e, n, _) {
                return x(e, n, 471, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper3249 = function(e, n, _) {
                return x(e, n, 1260, D)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper3319 = function(e, n, _) {
                return x(e, n, 1289, T)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper3321 = function(e, n, _) {
                return x(e, n, 1289, I)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper3323 = function(e, n, _) {
                return x(e, n, 1289, I)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper3325 = function(e, n, _) {
                return x(e, n, 1289, I)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper10340 = function(e, n, _) {
                return x(e, n, 4461, E)
            }
            ,
            n.wbg.__wbindgen_init_externref_table = function() {
                const e = b.__wbindgen_export_2
                  , n = e.grow(4);
                e.set(0, void 0),
                e.set(n + 0, void 0),
                e.set(n + 1, null),
                e.set(n + 2, !0),
                e.set(n + 3, !1)
            }
            ,
            n
        }
        function j(e, n) {
            return b = e.exports,
            N.__wbindgen_wasm_module = n,
            y = null,
            L = null,
            m = null,
            w = null,
            F = null,
            f = null,
            U = null,
            b.__wbindgen_start(),
            b
        }
        function G(e) {
            if (void 0 !== b)
                return b;
            const n = H();
            e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
            return j(new WebAssembly.Instance(e,n), e)
        }
        async function N(e) {
            if (void 0 !== b)
                return b;
            void 0 === e && (e = new URL(_(899),_.b));
            const n = H();
            ("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
            const {instance: t, module: r} = await async function(e, n) {
                if ("function" == typeof Response && e instanceof Response) {
                    if ("function" == typeof WebAssembly.instantiateStreaming)
                        try {
                            return await WebAssembly.instantiateStreaming(e, n)
                        } catch (n) {
                            if ("application/wasm" == e.headers.get("Content-Type"))
                                throw n;
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n)
                        }
                    const _ = await e.arrayBuffer();
                    return await WebAssembly.instantiate(_, n)
                }
                {
                    const _ = await WebAssembly.instantiate(e, n);
                    return _ instanceof WebAssembly.Instance ? {
                        instance: _,
                        module: e
                    } : _
                }
            }(await e, n);
            return j(t, r)
        }
        const K = N
    }
}]);
//# sourceMappingURL=core.ruffle.cc7cf63659ee97d0aa27.js.map
