"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-animate-height";
exports.ids = ["vendor-chunks/react-animate-height"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-animate-height/dist/esm/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-animate-height/dist/esm/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n// ------------------ Helpers\nfunction isNumber(n) {\n    const number = parseFloat(n);\n    return !isNaN(number) && isFinite(number);\n}\nfunction isPercentage(height) {\n    // Percentage height\n    return (typeof height === 'string' &&\n        height[height.length - 1] === '%' &&\n        isNumber(height.substring(0, height.length - 1)));\n}\nfunction hideContent(element, height) {\n    // Check for element?.style is added cause this would fail in tests (react-test-renderer)\n    // Read more here: https://github.com/Stanko/react-animate-height/issues/17\n    if (height === 0 && (element === null || element === void 0 ? void 0 : element.style)) {\n        element.style.display = 'none';\n    }\n}\nfunction showContent(element, height) {\n    // Check for element?.style is added cause this would fail in tests (react-test-renderer)\n    // Read more here: https://github.com/Stanko/react-animate-height/issues/17\n    if (height === 0 && (element === null || element === void 0 ? void 0 : element.style)) {\n        element.style.display = '';\n    }\n}\nconst ANIMATION_STATE_CLASSES = {\n    animating: 'rah-animating',\n    animatingUp: 'rah-animating--up',\n    animatingDown: 'rah-animating--down',\n    animatingToHeightZero: 'rah-animating--to-height-zero',\n    animatingToHeightAuto: 'rah-animating--to-height-auto',\n    animatingToHeightSpecific: 'rah-animating--to-height-specific',\n    static: 'rah-static',\n    staticHeightZero: 'rah-static--height-zero',\n    staticHeightAuto: 'rah-static--height-auto',\n    staticHeightSpecific: 'rah-static--height-specific',\n};\nfunction getStaticStateClasses(animationStateClasses, height) {\n    return [\n        animationStateClasses.static,\n        height === 0 && animationStateClasses.staticHeightZero,\n        typeof height === 'number' && height > 0\n            ? animationStateClasses.staticHeightSpecific\n            : null,\n        height === 'auto' && animationStateClasses.staticHeightAuto,\n    ]\n        .filter((v) => v)\n        .join(' ');\n}\n// ------------------ Component\nconst propsToOmitFromDiv = [\n    'animateOpacity',\n    'animationStateClasses',\n    'applyInlineTransitions',\n    'children',\n    'className',\n    'contentClassName',\n    'contentRef',\n    'delay',\n    'duration',\n    'easing',\n    'height',\n    'onHeightAnimationEnd',\n    'onHeightAnimationStart',\n    'style',\n];\nconst AnimateHeight = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((componentProps, ref) => {\n    // const AnimateHeight = forwardRef((componentProps: AnimateHeightProps, ref) => {\n    // const AnimateHeight: React.FC<AnimateHeightProps> = (componentProps) => {\n    const { animateOpacity = false, animationStateClasses = {}, applyInlineTransitions = true, children, className = '', contentClassName, delay: userDelay = 0, duration: userDuration = 500, easing = 'ease', height, onHeightAnimationEnd, onHeightAnimationStart, style, contentRef, } = componentProps;\n    const divProps = Object.assign({}, componentProps);\n    propsToOmitFromDiv.forEach((propKey) => {\n        delete divProps[propKey];\n    });\n    // ------------------ Initialization\n    const prevHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(height);\n    const contentElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const animationClassesTimeoutID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    const timeoutID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n    const stateClasses = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Object.assign(Object.assign({}, ANIMATION_STATE_CLASSES), animationStateClasses));\n    const isBrowser = typeof window !== 'undefined';\n    const prefersReducedMotion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isBrowser && window.matchMedia\n        ? window.matchMedia('(prefers-reduced-motion)').matches\n        : false);\n    const delay = prefersReducedMotion.current ? 0 : userDelay;\n    const duration = prefersReducedMotion.current ? 0 : userDuration;\n    let initHeight = height;\n    let initOverflow = 'visible';\n    if (typeof height === 'number') {\n        // Reset negative height to 0\n        initHeight = height < 0 ? 0 : height;\n        initOverflow = 'hidden';\n    }\n    else if (isPercentage(initHeight)) {\n        // If value is string \"0%\" make sure we convert it to number 0\n        initHeight = height === '0%' ? 0 : height;\n        initOverflow = 'hidden';\n    }\n    const [currentHeight, setCurrentHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initHeight);\n    const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initOverflow);\n    const [useTransitions, setUseTransitions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [animationStateClassNames, setAnimationStateClassNames] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getStaticStateClasses(stateClasses.current, height));\n    // ------------------ Did mount\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        // Hide content if height is 0 (to prevent tabbing into it)\n        hideContent(contentElement.current, currentHeight);\n        // This should be explicitly run only on mount\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    // ------------------ Height update\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (height !== prevHeight.current && contentElement.current) {\n            showContent(contentElement.current, prevHeight.current);\n            // Cache content height\n            contentElement.current.style.overflow = 'hidden';\n            const contentHeight = contentElement.current.offsetHeight;\n            contentElement.current.style.overflow = '';\n            // set total animation time\n            const totalDuration = duration + delay;\n            let newHeight;\n            let timeoutHeight;\n            let timeoutOverflow = 'hidden';\n            let timeoutUseTransitions;\n            const isCurrentHeightAuto = prevHeight.current === 'auto';\n            if (typeof height === 'number') {\n                // Reset negative height to 0\n                newHeight = height < 0 ? 0 : height;\n                timeoutHeight = newHeight;\n            }\n            else if (isPercentage(height)) {\n                // If value is string \"0%\" make sure we convert it to number 0\n                newHeight = height === '0%' ? 0 : height;\n                timeoutHeight = newHeight;\n            }\n            else {\n                // If not, animate to content height\n                // and then reset to auto\n                newHeight = contentHeight; // TODO solve contentHeight = 0\n                timeoutHeight = 'auto';\n                timeoutOverflow = undefined;\n            }\n            if (isCurrentHeightAuto) {\n                // This is the height to be animated to\n                timeoutHeight = newHeight;\n                // If previous height was 'auto'\n                // set starting height explicitly to be able to use transition\n                newHeight = contentHeight;\n            }\n            // Animation classes\n            const newAnimationStateClassNames = [\n                stateClasses.current.animating,\n                (prevHeight.current === 'auto' || height < prevHeight.current) &&\n                    stateClasses.current.animatingUp,\n                (height === 'auto' || height > prevHeight.current) &&\n                    stateClasses.current.animatingDown,\n                timeoutHeight === 0 && stateClasses.current.animatingToHeightZero,\n                timeoutHeight === 'auto' &&\n                    stateClasses.current.animatingToHeightAuto,\n                typeof timeoutHeight === 'number' && timeoutHeight > 0\n                    ? stateClasses.current.animatingToHeightSpecific\n                    : null,\n            ]\n                .filter((v) => v)\n                .join(' ');\n            // Animation classes to be put after animation is complete\n            const timeoutAnimationStateClasses = getStaticStateClasses(stateClasses.current, timeoutHeight);\n            // Set starting height and animating classes\n            // When animating from 'auto' we first need to set fixed height\n            // that change should be animated\n            setCurrentHeight(newHeight);\n            setOverflow('hidden');\n            setUseTransitions(!isCurrentHeightAuto);\n            setAnimationStateClassNames(newAnimationStateClassNames);\n            // Clear timeouts\n            clearTimeout(timeoutID.current);\n            clearTimeout(animationClassesTimeoutID.current);\n            if (isCurrentHeightAuto) {\n                // When animating from 'auto' we use a short timeout to start animation\n                // after setting fixed height above\n                timeoutUseTransitions = true;\n                // Short timeout to allow rendering of the initial animation state first\n                timeoutID.current = setTimeout(() => {\n                    setCurrentHeight(timeoutHeight);\n                    setOverflow(timeoutOverflow);\n                    setUseTransitions(timeoutUseTransitions);\n                    // ANIMATION STARTS, run a callback if it exists\n                    onHeightAnimationStart === null || onHeightAnimationStart === void 0 ? void 0 : onHeightAnimationStart(timeoutHeight);\n                }, 50);\n                // Set static classes and remove transitions when animation ends\n                animationClassesTimeoutID.current = setTimeout(() => {\n                    setUseTransitions(false);\n                    setAnimationStateClassNames(timeoutAnimationStateClasses);\n                    // ANIMATION ENDS\n                    // Hide content if height is 0 (to prevent tabbing into it)\n                    hideContent(contentElement.current, timeoutHeight);\n                    // Run a callback if it exists\n                    onHeightAnimationEnd === null || onHeightAnimationEnd === void 0 ? void 0 : onHeightAnimationEnd(timeoutHeight);\n                }, totalDuration);\n            }\n            else {\n                // ANIMATION STARTS, run a callback if it exists\n                onHeightAnimationStart === null || onHeightAnimationStart === void 0 ? void 0 : onHeightAnimationStart(newHeight);\n                // Set end height, classes and remove transitions when animation is complete\n                timeoutID.current = setTimeout(() => {\n                    setCurrentHeight(timeoutHeight);\n                    setOverflow(timeoutOverflow);\n                    setUseTransitions(false);\n                    setAnimationStateClassNames(timeoutAnimationStateClasses);\n                    // ANIMATION ENDS\n                    // If height is auto, don't hide the content\n                    // (case when element is empty, therefore height is 0)\n                    if (height !== 'auto') {\n                        // Hide content if height is 0 (to prevent tabbing into it)\n                        hideContent(contentElement.current, newHeight); // TODO solve newHeight = 0\n                    }\n                    // Run a callback if it exists\n                    onHeightAnimationEnd === null || onHeightAnimationEnd === void 0 ? void 0 : onHeightAnimationEnd(newHeight);\n                }, totalDuration);\n            }\n        }\n        prevHeight.current = height;\n        return () => {\n            clearTimeout(timeoutID.current);\n            clearTimeout(animationClassesTimeoutID.current);\n        };\n        // This should be explicitly run only on height change\n        // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [height]);\n    // ------------------ Render\n    const componentStyle = Object.assign(Object.assign({}, style), { height: currentHeight, overflow: overflow || (style === null || style === void 0 ? void 0 : style.overflow) });\n    if (useTransitions && applyInlineTransitions) {\n        componentStyle.transition = `height ${duration}ms ${easing} ${delay}ms`;\n        // Include transition passed through styles\n        if (style === null || style === void 0 ? void 0 : style.transition) {\n            componentStyle.transition = `${style.transition}, ${componentStyle.transition}`;\n        }\n        // Add webkit vendor prefix still used by opera, blackberry...\n        componentStyle.WebkitTransition = componentStyle.transition;\n    }\n    const contentStyle = {};\n    if (animateOpacity) {\n        contentStyle.transition = `opacity ${duration}ms ${easing} ${delay}ms`;\n        // Add webkit vendor prefix still used by opera, blackberry...\n        contentStyle.WebkitTransition = contentStyle.transition;\n        if (currentHeight === 0) {\n            contentStyle.opacity = 0;\n        }\n    }\n    // Check if user passed aria-hidden prop\n    const hasAriaHiddenProp = typeof divProps['aria-hidden'] !== 'undefined';\n    const ariaHidden = hasAriaHiddenProp\n        ? divProps['aria-hidden']\n        : height === 0;\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", Object.assign({}, divProps, { \"aria-hidden\": ariaHidden, className: `${animationStateClassNames} ${className}`, style: componentStyle, ref: ref }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: contentClassName, style: contentStyle, ref: (el) => {\n                contentElement.current = el;\n                if (contentRef) {\n                    contentRef.current = el;\n                }\n            } }, children)));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimateHeight);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYW5pbWF0ZS1oZWlnaHQvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFnQjtBQUN0QztBQUNBO0FBQ0EsWUFBWSxrREFBa0QsNk5BQTZOO0FBQzNSLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLDZDQUFNO0FBQzdCLDJCQUEyQiw2Q0FBTTtBQUNqQyxzQ0FBc0MsNkNBQU07QUFDNUMsc0JBQXNCLDZDQUFNO0FBQzVCLHlCQUF5Qiw2Q0FBTSwrQkFBK0I7QUFDOUQ7QUFDQSxpQ0FBaUMsNkNBQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0NBQVE7QUFDdEQsb0NBQW9DLCtDQUFRO0FBQzVDLGdEQUFnRCwrQ0FBUTtBQUN4RCxvRUFBb0UsK0NBQVE7QUFDNUU7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5REFBeUQsWUFBWSw2R0FBNkc7QUFDbEw7QUFDQSw4Q0FBOEMsU0FBUyxLQUFLLFFBQVEsRUFBRSxNQUFNO0FBQzVFO0FBQ0E7QUFDQSwyQ0FBMkMsaUJBQWlCLElBQUksMEJBQTBCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxTQUFTLEtBQUssUUFBUSxFQUFFLE1BQU07QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0RBQW1CLHdCQUF3QixjQUFjLHlDQUF5QywwQkFBMEIsRUFBRSxVQUFVLG9DQUFvQztBQUN4TCxRQUFRLGdEQUFtQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLENBQUM7QUFDRCxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVraW5zLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFuaW1hdGUtaGVpZ2h0L2Rpc3QvZXNtL2luZGV4LmpzPzhjZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzXG5mdW5jdGlvbiBpc051bWJlcihuKSB7XG4gICAgY29uc3QgbnVtYmVyID0gcGFyc2VGbG9hdChuKTtcbiAgICByZXR1cm4gIWlzTmFOKG51bWJlcikgJiYgaXNGaW5pdGUobnVtYmVyKTtcbn1cbmZ1bmN0aW9uIGlzUGVyY2VudGFnZShoZWlnaHQpIHtcbiAgICAvLyBQZXJjZW50YWdlIGhlaWdodFxuICAgIHJldHVybiAodHlwZW9mIGhlaWdodCA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgaGVpZ2h0W2hlaWdodC5sZW5ndGggLSAxXSA9PT0gJyUnICYmXG4gICAgICAgIGlzTnVtYmVyKGhlaWdodC5zdWJzdHJpbmcoMCwgaGVpZ2h0Lmxlbmd0aCAtIDEpKSk7XG59XG5mdW5jdGlvbiBoaWRlQ29udGVudChlbGVtZW50LCBoZWlnaHQpIHtcbiAgICAvLyBDaGVjayBmb3IgZWxlbWVudD8uc3R5bGUgaXMgYWRkZWQgY2F1c2UgdGhpcyB3b3VsZCBmYWlsIGluIHRlc3RzIChyZWFjdC10ZXN0LXJlbmRlcmVyKVxuICAgIC8vIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vU3RhbmtvL3JlYWN0LWFuaW1hdGUtaGVpZ2h0L2lzc3Vlcy8xN1xuICAgIGlmIChoZWlnaHQgPT09IDAgJiYgKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zdHlsZSkpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNob3dDb250ZW50KGVsZW1lbnQsIGhlaWdodCkge1xuICAgIC8vIENoZWNrIGZvciBlbGVtZW50Py5zdHlsZSBpcyBhZGRlZCBjYXVzZSB0aGlzIHdvdWxkIGZhaWwgaW4gdGVzdHMgKHJlYWN0LXRlc3QtcmVuZGVyZXIpXG4gICAgLy8gUmVhZCBtb3JlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFua28vcmVhY3QtYW5pbWF0ZS1oZWlnaHQvaXNzdWVzLzE3XG4gICAgaWYgKGhlaWdodCA9PT0gMCAmJiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LnN0eWxlKSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG59XG5jb25zdCBBTklNQVRJT05fU1RBVEVfQ0xBU1NFUyA9IHtcbiAgICBhbmltYXRpbmc6ICdyYWgtYW5pbWF0aW5nJyxcbiAgICBhbmltYXRpbmdVcDogJ3JhaC1hbmltYXRpbmctLXVwJyxcbiAgICBhbmltYXRpbmdEb3duOiAncmFoLWFuaW1hdGluZy0tZG93bicsXG4gICAgYW5pbWF0aW5nVG9IZWlnaHRaZXJvOiAncmFoLWFuaW1hdGluZy0tdG8taGVpZ2h0LXplcm8nLFxuICAgIGFuaW1hdGluZ1RvSGVpZ2h0QXV0bzogJ3JhaC1hbmltYXRpbmctLXRvLWhlaWdodC1hdXRvJyxcbiAgICBhbmltYXRpbmdUb0hlaWdodFNwZWNpZmljOiAncmFoLWFuaW1hdGluZy0tdG8taGVpZ2h0LXNwZWNpZmljJyxcbiAgICBzdGF0aWM6ICdyYWgtc3RhdGljJyxcbiAgICBzdGF0aWNIZWlnaHRaZXJvOiAncmFoLXN0YXRpYy0taGVpZ2h0LXplcm8nLFxuICAgIHN0YXRpY0hlaWdodEF1dG86ICdyYWgtc3RhdGljLS1oZWlnaHQtYXV0bycsXG4gICAgc3RhdGljSGVpZ2h0U3BlY2lmaWM6ICdyYWgtc3RhdGljLS1oZWlnaHQtc3BlY2lmaWMnLFxufTtcbmZ1bmN0aW9uIGdldFN0YXRpY1N0YXRlQ2xhc3NlcyhhbmltYXRpb25TdGF0ZUNsYXNzZXMsIGhlaWdodCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIGFuaW1hdGlvblN0YXRlQ2xhc3Nlcy5zdGF0aWMsXG4gICAgICAgIGhlaWdodCA9PT0gMCAmJiBhbmltYXRpb25TdGF0ZUNsYXNzZXMuc3RhdGljSGVpZ2h0WmVybyxcbiAgICAgICAgdHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicgJiYgaGVpZ2h0ID4gMFxuICAgICAgICAgICAgPyBhbmltYXRpb25TdGF0ZUNsYXNzZXMuc3RhdGljSGVpZ2h0U3BlY2lmaWNcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgaGVpZ2h0ID09PSAnYXV0bycgJiYgYW5pbWF0aW9uU3RhdGVDbGFzc2VzLnN0YXRpY0hlaWdodEF1dG8sXG4gICAgXVxuICAgICAgICAuZmlsdGVyKCh2KSA9PiB2KVxuICAgICAgICAuam9pbignICcpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tIENvbXBvbmVudFxuY29uc3QgcHJvcHNUb09taXRGcm9tRGl2ID0gW1xuICAgICdhbmltYXRlT3BhY2l0eScsXG4gICAgJ2FuaW1hdGlvblN0YXRlQ2xhc3NlcycsXG4gICAgJ2FwcGx5SW5saW5lVHJhbnNpdGlvbnMnLFxuICAgICdjaGlsZHJlbicsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnRlbnRDbGFzc05hbWUnLFxuICAgICdjb250ZW50UmVmJyxcbiAgICAnZGVsYXknLFxuICAgICdkdXJhdGlvbicsXG4gICAgJ2Vhc2luZycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ29uSGVpZ2h0QW5pbWF0aW9uRW5kJyxcbiAgICAnb25IZWlnaHRBbmltYXRpb25TdGFydCcsXG4gICAgJ3N0eWxlJyxcbl07XG5jb25zdCBBbmltYXRlSGVpZ2h0ID0gUmVhY3QuZm9yd2FyZFJlZigoY29tcG9uZW50UHJvcHMsIHJlZikgPT4ge1xuICAgIC8vIGNvbnN0IEFuaW1hdGVIZWlnaHQgPSBmb3J3YXJkUmVmKChjb21wb25lbnRQcm9wczogQW5pbWF0ZUhlaWdodFByb3BzLCByZWYpID0+IHtcbiAgICAvLyBjb25zdCBBbmltYXRlSGVpZ2h0OiBSZWFjdC5GQzxBbmltYXRlSGVpZ2h0UHJvcHM+ID0gKGNvbXBvbmVudFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhbmltYXRlT3BhY2l0eSA9IGZhbHNlLCBhbmltYXRpb25TdGF0ZUNsYXNzZXMgPSB7fSwgYXBwbHlJbmxpbmVUcmFuc2l0aW9ucyA9IHRydWUsIGNoaWxkcmVuLCBjbGFzc05hbWUgPSAnJywgY29udGVudENsYXNzTmFtZSwgZGVsYXk6IHVzZXJEZWxheSA9IDAsIGR1cmF0aW9uOiB1c2VyRHVyYXRpb24gPSA1MDAsIGVhc2luZyA9ICdlYXNlJywgaGVpZ2h0LCBvbkhlaWdodEFuaW1hdGlvbkVuZCwgb25IZWlnaHRBbmltYXRpb25TdGFydCwgc3R5bGUsIGNvbnRlbnRSZWYsIH0gPSBjb21wb25lbnRQcm9wcztcbiAgICBjb25zdCBkaXZQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudFByb3BzKTtcbiAgICBwcm9wc1RvT21pdEZyb21EaXYuZm9yRWFjaCgocHJvcEtleSkgPT4ge1xuICAgICAgICBkZWxldGUgZGl2UHJvcHNbcHJvcEtleV07XG4gICAgfSk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tIEluaXRpYWxpemF0aW9uXG4gICAgY29uc3QgcHJldkhlaWdodCA9IHVzZVJlZihoZWlnaHQpO1xuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkNsYXNzZXNUaW1lb3V0SUQgPSB1c2VSZWYoKTtcbiAgICBjb25zdCB0aW1lb3V0SUQgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBzdGF0ZUNsYXNzZXMgPSB1c2VSZWYoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBBTklNQVRJT05fU1RBVEVfQ0xBU1NFUyksIGFuaW1hdGlvblN0YXRlQ2xhc3NlcykpO1xuICAgIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID0gdXNlUmVmKGlzQnJvd3NlciAmJiB3aW5kb3cubWF0Y2hNZWRpYVxuICAgICAgICA/IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbiknKS5tYXRjaGVzXG4gICAgICAgIDogZmFsc2UpO1xuICAgIGNvbnN0IGRlbGF5ID0gcHJlZmVyc1JlZHVjZWRNb3Rpb24uY3VycmVudCA/IDAgOiB1c2VyRGVsYXk7XG4gICAgY29uc3QgZHVyYXRpb24gPSBwcmVmZXJzUmVkdWNlZE1vdGlvbi5jdXJyZW50ID8gMCA6IHVzZXJEdXJhdGlvbjtcbiAgICBsZXQgaW5pdEhlaWdodCA9IGhlaWdodDtcbiAgICBsZXQgaW5pdE92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIGlmICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBSZXNldCBuZWdhdGl2ZSBoZWlnaHQgdG8gMFxuICAgICAgICBpbml0SGVpZ2h0ID0gaGVpZ2h0IDwgMCA/IDAgOiBoZWlnaHQ7XG4gICAgICAgIGluaXRPdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1BlcmNlbnRhZ2UoaW5pdEhlaWdodCkpIHtcbiAgICAgICAgLy8gSWYgdmFsdWUgaXMgc3RyaW5nIFwiMCVcIiBtYWtlIHN1cmUgd2UgY29udmVydCBpdCB0byBudW1iZXIgMFxuICAgICAgICBpbml0SGVpZ2h0ID0gaGVpZ2h0ID09PSAnMCUnID8gMCA6IGhlaWdodDtcbiAgICAgICAgaW5pdE92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgfVxuICAgIGNvbnN0IFtjdXJyZW50SGVpZ2h0LCBzZXRDdXJyZW50SGVpZ2h0XSA9IHVzZVN0YXRlKGluaXRIZWlnaHQpO1xuICAgIGNvbnN0IFtvdmVyZmxvdywgc2V0T3ZlcmZsb3ddID0gdXNlU3RhdGUoaW5pdE92ZXJmbG93KTtcbiAgICBjb25zdCBbdXNlVHJhbnNpdGlvbnMsIHNldFVzZVRyYW5zaXRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYW5pbWF0aW9uU3RhdGVDbGFzc05hbWVzLCBzZXRBbmltYXRpb25TdGF0ZUNsYXNzTmFtZXNdID0gdXNlU3RhdGUoZ2V0U3RhdGljU3RhdGVDbGFzc2VzKHN0YXRlQ2xhc3Nlcy5jdXJyZW50LCBoZWlnaHQpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0gRGlkIG1vdW50XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gSGlkZSBjb250ZW50IGlmIGhlaWdodCBpcyAwICh0byBwcmV2ZW50IHRhYmJpbmcgaW50byBpdClcbiAgICAgICAgaGlkZUNvbnRlbnQoY29udGVudEVsZW1lbnQuY3VycmVudCwgY3VycmVudEhlaWdodCk7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGV4cGxpY2l0bHkgcnVuIG9ubHkgb24gbW91bnRcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0gSGVpZ2h0IHVwZGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoZWlnaHQgIT09IHByZXZIZWlnaHQuY3VycmVudCAmJiBjb250ZW50RWxlbWVudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBzaG93Q29udGVudChjb250ZW50RWxlbWVudC5jdXJyZW50LCBwcmV2SGVpZ2h0LmN1cnJlbnQpO1xuICAgICAgICAgICAgLy8gQ2FjaGUgY29udGVudCBoZWlnaHRcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBjb250ZW50RWxlbWVudC5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnRlbnRFbGVtZW50LmN1cnJlbnQuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgIC8vIHNldCB0b3RhbCBhbmltYXRpb24gdGltZVxuICAgICAgICAgICAgY29uc3QgdG90YWxEdXJhdGlvbiA9IGR1cmF0aW9uICsgZGVsYXk7XG4gICAgICAgICAgICBsZXQgbmV3SGVpZ2h0O1xuICAgICAgICAgICAgbGV0IHRpbWVvdXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgdGltZW91dE92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBsZXQgdGltZW91dFVzZVRyYW5zaXRpb25zO1xuICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50SGVpZ2h0QXV0byA9IHByZXZIZWlnaHQuY3VycmVudCA9PT0gJ2F1dG8nO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgbmVnYXRpdmUgaGVpZ2h0IHRvIDBcbiAgICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBoZWlnaHQgPCAwID8gMCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNQZXJjZW50YWdlKGhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZSBpcyBzdHJpbmcgXCIwJVwiIG1ha2Ugc3VyZSB3ZSBjb252ZXJ0IGl0IHRvIG51bWJlciAwXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID09PSAnMCUnID8gMCA6IGhlaWdodDtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90LCBhbmltYXRlIHRvIGNvbnRlbnQgaGVpZ2h0XG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZW4gcmVzZXQgdG8gYXV0b1xuICAgICAgICAgICAgICAgIG5ld0hlaWdodCA9IGNvbnRlbnRIZWlnaHQ7IC8vIFRPRE8gc29sdmUgY29udGVudEhlaWdodCA9IDBcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRPdmVyZmxvdyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0N1cnJlbnRIZWlnaHRBdXRvKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgaGVpZ2h0IHRvIGJlIGFuaW1hdGVkIHRvXG4gICAgICAgICAgICAgICAgdGltZW91dEhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcmV2aW91cyBoZWlnaHQgd2FzICdhdXRvJ1xuICAgICAgICAgICAgICAgIC8vIHNldCBzdGFydGluZyBoZWlnaHQgZXhwbGljaXRseSB0byBiZSBhYmxlIHRvIHVzZSB0cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgbmV3SGVpZ2h0ID0gY29udGVudEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFuaW1hdGlvbiBjbGFzc2VzXG4gICAgICAgICAgICBjb25zdCBuZXdBbmltYXRpb25TdGF0ZUNsYXNzTmFtZXMgPSBbXG4gICAgICAgICAgICAgICAgc3RhdGVDbGFzc2VzLmN1cnJlbnQuYW5pbWF0aW5nLFxuICAgICAgICAgICAgICAgIChwcmV2SGVpZ2h0LmN1cnJlbnQgPT09ICdhdXRvJyB8fCBoZWlnaHQgPCBwcmV2SGVpZ2h0LmN1cnJlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2xhc3Nlcy5jdXJyZW50LmFuaW1hdGluZ1VwLFxuICAgICAgICAgICAgICAgIChoZWlnaHQgPT09ICdhdXRvJyB8fCBoZWlnaHQgPiBwcmV2SGVpZ2h0LmN1cnJlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2xhc3Nlcy5jdXJyZW50LmFuaW1hdGluZ0Rvd24sXG4gICAgICAgICAgICAgICAgdGltZW91dEhlaWdodCA9PT0gMCAmJiBzdGF0ZUNsYXNzZXMuY3VycmVudC5hbmltYXRpbmdUb0hlaWdodFplcm8sXG4gICAgICAgICAgICAgICAgdGltZW91dEhlaWdodCA9PT0gJ2F1dG8nICYmXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlQ2xhc3Nlcy5jdXJyZW50LmFuaW1hdGluZ1RvSGVpZ2h0QXV0byxcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGltZW91dEhlaWdodCA9PT0gJ251bWJlcicgJiYgdGltZW91dEhlaWdodCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZUNsYXNzZXMuY3VycmVudC5hbmltYXRpbmdUb0hlaWdodFNwZWNpZmljXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2KSA9PiB2KVxuICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgICAgICAvLyBBbmltYXRpb24gY2xhc3NlcyB0byBiZSBwdXQgYWZ0ZXIgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0QW5pbWF0aW9uU3RhdGVDbGFzc2VzID0gZ2V0U3RhdGljU3RhdGVDbGFzc2VzKHN0YXRlQ2xhc3Nlcy5jdXJyZW50LCB0aW1lb3V0SGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIFNldCBzdGFydGluZyBoZWlnaHQgYW5kIGFuaW1hdGluZyBjbGFzc2VzXG4gICAgICAgICAgICAvLyBXaGVuIGFuaW1hdGluZyBmcm9tICdhdXRvJyB3ZSBmaXJzdCBuZWVkIHRvIHNldCBmaXhlZCBoZWlnaHRcbiAgICAgICAgICAgIC8vIHRoYXQgY2hhbmdlIHNob3VsZCBiZSBhbmltYXRlZFxuICAgICAgICAgICAgc2V0Q3VycmVudEhlaWdodChuZXdIZWlnaHQpO1xuICAgICAgICAgICAgc2V0T3ZlcmZsb3coJ2hpZGRlbicpO1xuICAgICAgICAgICAgc2V0VXNlVHJhbnNpdGlvbnMoIWlzQ3VycmVudEhlaWdodEF1dG8pO1xuICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RhdGVDbGFzc05hbWVzKG5ld0FuaW1hdGlvblN0YXRlQ2xhc3NOYW1lcyk7XG4gICAgICAgICAgICAvLyBDbGVhciB0aW1lb3V0c1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJRC5jdXJyZW50KTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DbGFzc2VzVGltZW91dElELmN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKGlzQ3VycmVudEhlaWdodEF1dG8pIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGFuaW1hdGluZyBmcm9tICdhdXRvJyB3ZSB1c2UgYSBzaG9ydCB0aW1lb3V0IHRvIHN0YXJ0IGFuaW1hdGlvblxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHNldHRpbmcgZml4ZWQgaGVpZ2h0IGFib3ZlXG4gICAgICAgICAgICAgICAgdGltZW91dFVzZVRyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBTaG9ydCB0aW1lb3V0IHRvIGFsbG93IHJlbmRlcmluZyBvZiB0aGUgaW5pdGlhbCBhbmltYXRpb24gc3RhdGUgZmlyc3RcbiAgICAgICAgICAgICAgICB0aW1lb3V0SUQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SGVpZ2h0KHRpbWVvdXRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRPdmVyZmxvdyh0aW1lb3V0T3ZlcmZsb3cpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VUcmFuc2l0aW9ucyh0aW1lb3V0VXNlVHJhbnNpdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBTklNQVRJT04gU1RBUlRTLCBydW4gYSBjYWxsYmFjayBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgb25IZWlnaHRBbmltYXRpb25TdGFydCA9PT0gbnVsbCB8fCBvbkhlaWdodEFuaW1hdGlvblN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkhlaWdodEFuaW1hdGlvblN0YXJ0KHRpbWVvdXRIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgc3RhdGljIGNsYXNzZXMgYW5kIHJlbW92ZSB0cmFuc2l0aW9ucyB3aGVuIGFuaW1hdGlvbiBlbmRzXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uQ2xhc3Nlc1RpbWVvdXRJRC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFVzZVRyYW5zaXRpb25zKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QW5pbWF0aW9uU3RhdGVDbGFzc05hbWVzKHRpbWVvdXRBbmltYXRpb25TdGF0ZUNsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBTklNQVRJT04gRU5EU1xuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGNvbnRlbnQgaWYgaGVpZ2h0IGlzIDAgKHRvIHByZXZlbnQgdGFiYmluZyBpbnRvIGl0KVxuICAgICAgICAgICAgICAgICAgICBoaWRlQ29udGVudChjb250ZW50RWxlbWVudC5jdXJyZW50LCB0aW1lb3V0SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUnVuIGEgY2FsbGJhY2sgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIG9uSGVpZ2h0QW5pbWF0aW9uRW5kID09PSBudWxsIHx8IG9uSGVpZ2h0QW5pbWF0aW9uRW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkhlaWdodEFuaW1hdGlvbkVuZCh0aW1lb3V0SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9LCB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFOSU1BVElPTiBTVEFSVFMsIHJ1biBhIGNhbGxiYWNrIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgIG9uSGVpZ2h0QW5pbWF0aW9uU3RhcnQgPT09IG51bGwgfHwgb25IZWlnaHRBbmltYXRpb25TdGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25IZWlnaHRBbmltYXRpb25TdGFydChuZXdIZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIFNldCBlbmQgaGVpZ2h0LCBjbGFzc2VzIGFuZCByZW1vdmUgdHJhbnNpdGlvbnMgd2hlbiBhbmltYXRpb24gaXMgY29tcGxldGVcbiAgICAgICAgICAgICAgICB0aW1lb3V0SUQuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SGVpZ2h0KHRpbWVvdXRIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRPdmVyZmxvdyh0aW1lb3V0T3ZlcmZsb3cpO1xuICAgICAgICAgICAgICAgICAgICBzZXRVc2VUcmFuc2l0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEFuaW1hdGlvblN0YXRlQ2xhc3NOYW1lcyh0aW1lb3V0QW5pbWF0aW9uU3RhdGVDbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQU5JTUFUSU9OIEVORFNcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaGVpZ2h0IGlzIGF1dG8sIGRvbid0IGhpZGUgdGhlIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gKGNhc2Ugd2hlbiBlbGVtZW50IGlzIGVtcHR5LCB0aGVyZWZvcmUgaGVpZ2h0IGlzIDApXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgIT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBjb250ZW50IGlmIGhlaWdodCBpcyAwICh0byBwcmV2ZW50IHRhYmJpbmcgaW50byBpdClcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVDb250ZW50KGNvbnRlbnRFbGVtZW50LmN1cnJlbnQsIG5ld0hlaWdodCk7IC8vIFRPRE8gc29sdmUgbmV3SGVpZ2h0ID0gMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1biBhIGNhbGxiYWNrIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBvbkhlaWdodEFuaW1hdGlvbkVuZCA9PT0gbnVsbCB8fCBvbkhlaWdodEFuaW1hdGlvbkVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25IZWlnaHRBbmltYXRpb25FbmQobmV3SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9LCB0b3RhbER1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcmV2SGVpZ2h0LmN1cnJlbnQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElELmN1cnJlbnQpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNsYXNzZXNUaW1lb3V0SUQuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGV4cGxpY2l0bHkgcnVuIG9ubHkgb24gaGVpZ2h0IGNoYW5nZVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW2hlaWdodF0pO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLSBSZW5kZXJcbiAgICBjb25zdCBjb21wb25lbnRTdHlsZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUpLCB7IGhlaWdodDogY3VycmVudEhlaWdodCwgb3ZlcmZsb3c6IG92ZXJmbG93IHx8IChzdHlsZSA9PT0gbnVsbCB8fCBzdHlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGUub3ZlcmZsb3cpIH0pO1xuICAgIGlmICh1c2VUcmFuc2l0aW9ucyAmJiBhcHBseUlubGluZVRyYW5zaXRpb25zKSB7XG4gICAgICAgIGNvbXBvbmVudFN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7ZHVyYXRpb259bXMgJHtlYXNpbmd9ICR7ZGVsYXl9bXNgO1xuICAgICAgICAvLyBJbmNsdWRlIHRyYW5zaXRpb24gcGFzc2VkIHRocm91Z2ggc3R5bGVzXG4gICAgICAgIGlmIChzdHlsZSA9PT0gbnVsbCB8fCBzdHlsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3R5bGUudHJhbnNpdGlvbikge1xuICAgICAgICAgICAgY29tcG9uZW50U3R5bGUudHJhbnNpdGlvbiA9IGAke3N0eWxlLnRyYW5zaXRpb259LCAke2NvbXBvbmVudFN0eWxlLnRyYW5zaXRpb259YDtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgd2Via2l0IHZlbmRvciBwcmVmaXggc3RpbGwgdXNlZCBieSBvcGVyYSwgYmxhY2tiZXJyeS4uLlxuICAgICAgICBjb21wb25lbnRTdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gY29tcG9uZW50U3R5bGUudHJhbnNpdGlvbjtcbiAgICB9XG4gICAgY29uc3QgY29udGVudFN0eWxlID0ge307XG4gICAgaWYgKGFuaW1hdGVPcGFjaXR5KSB7XG4gICAgICAgIGNvbnRlbnRTdHlsZS50cmFuc2l0aW9uID0gYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyAke2Vhc2luZ30gJHtkZWxheX1tc2A7XG4gICAgICAgIC8vIEFkZCB3ZWJraXQgdmVuZG9yIHByZWZpeCBzdGlsbCB1c2VkIGJ5IG9wZXJhLCBibGFja2JlcnJ5Li4uXG4gICAgICAgIGNvbnRlbnRTdHlsZS5XZWJraXRUcmFuc2l0aW9uID0gY29udGVudFN0eWxlLnRyYW5zaXRpb247XG4gICAgICAgIGlmIChjdXJyZW50SGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICBjb250ZW50U3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBwYXNzZWQgYXJpYS1oaWRkZW4gcHJvcFxuICAgIGNvbnN0IGhhc0FyaWFIaWRkZW5Qcm9wID0gdHlwZW9mIGRpdlByb3BzWydhcmlhLWhpZGRlbiddICE9PSAndW5kZWZpbmVkJztcbiAgICBjb25zdCBhcmlhSGlkZGVuID0gaGFzQXJpYUhpZGRlblByb3BcbiAgICAgICAgPyBkaXZQcm9wc1snYXJpYS1oaWRkZW4nXVxuICAgICAgICA6IGhlaWdodCA9PT0gMDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgZGl2UHJvcHMsIHsgXCJhcmlhLWhpZGRlblwiOiBhcmlhSGlkZGVuLCBjbGFzc05hbWU6IGAke2FuaW1hdGlvblN0YXRlQ2xhc3NOYW1lc30gJHtjbGFzc05hbWV9YCwgc3R5bGU6IGNvbXBvbmVudFN0eWxlLCByZWY6IHJlZiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY29udGVudENsYXNzTmFtZSwgc3R5bGU6IGNvbnRlbnRTdHlsZSwgcmVmOiAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50RWxlbWVudC5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRSZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB9LCBjaGlsZHJlbikpKTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZUhlaWdodDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-animate-height/dist/esm/index.js\n");

/***/ })

};
;