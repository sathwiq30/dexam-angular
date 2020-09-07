(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-landing-landing-module~views-sessions-sessions-module"],{

/***/ "./src/app/shared/animations/shared-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/shared-animations.ts ***!
  \********************************************************/
/*! exports provided: SharedAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedAnimations", function() { return SharedAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");

var reusable = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});
var SharedAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["useAnimation"])(reusable)])]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            display: 'none'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            display: 'block'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms'))
    ]),
];


/***/ }),

/***/ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/landing/blog-details-page/blog-details-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: BlogDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsPageComponent", function() { return BlogDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blog-details/blog-details.component */ "./src/app/views/landing/components/blog-details/blog-details.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");





var BlogDetailsPageComponent = /** @class */ (function () {
    function BlogDetailsPageComponent() {
    }
    BlogDetailsPageComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsPageComponent.ɵfac = function BlogDetailsPageComponent_Factory(t) { return new (t || BlogDetailsPageComponent)(); };
    BlogDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsPageComponent, selectors: [["app-blog-details-page"]], decls: 4, vars: 0, consts: [[1, "landing_wrap", "landing-gradient-purple-indigo"]], template: function BlogDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-blog-details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__["ContactFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvYmxvZy1kZXRhaWxzLXBhZ2UvYmxvZy1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BlogDetailsPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-details-page',
                templateUrl: './blog-details-page.component.html',
                styleUrls: ['./blog-details-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/best/best.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/best/best.component.ts ***!
  \*****************************************************************/
/*! exports provided: BestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestComponent", function() { return BestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BestComponent = /** @class */ (function () {
    function BestComponent() {
    }
    BestComponent.prototype.ngOnInit = function () {
    };
    BestComponent.ɵfac = function BestComponent_Factory(t) { return new (t || BestComponent)(); };
    BestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestComponent, selectors: [["app-best"]], decls: 48, vars: 0, consts: [["id", "extra-feature-wrap", 1, "best-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "mb-4"], [1, "card", "o-hidden", "text-left"], [1, "card-body"], [1, "left_icon", "float-left", "w-20", "p-3", "text-center"], [1, "eva", "eva-clock-outline"], [1, "right_content", "w-70", "float-left", "p-3"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "eva", "eva-calendar-outline"], [1, "col-md-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-lock-outline"], [1, "col-md-6", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-book-open-outline"]], template: function BestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " What Best For you");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Get Response Faster");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Year-Round Availability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Security & compliance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Automate Invoicing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9iZXN0L2Jlc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
    return BestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-best',
                templateUrl: './best.component.html',
                styleUrls: ['./best.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/blog-details/blog-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/blog-details/blog-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent() {
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
    BlogDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 105, vars: 0, consts: [["id", "intro-wrap", 1, "blog-details-wrap"], [1, "blog_header", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "text-white"], [1, "mt-4", "text-white"], [1, "lead", "text-white"], [1, "container", "p-t-b-80"], [1, "col-lg-8"], [1, "lead"], [1, "blockquote"], [1, "mb-0"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "card", "my-5", "mb-5"], [1, "card-header"], [1, "card-body"], [1, "form-group"], ["rows", "3", 1, "form-control"], ["type", "submit", 1, "btn", "btn-gradient"], [1, "media", "mb-4"], ["src", "./assets/images/landing/faces/15.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "media-body"], [1, "mt-0"], [1, "media"], ["src", "./assets/images/landing/faces/13.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "media", "mt-4"], ["src", "./assets/images/landing/faces/12.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], ["src", "./assets/images/landing/faces/5.jpg", "alt", "", 1, "d-flex", "mr-3", "w-10", "rounded-circle"], [1, "col-md-4"], [1, "card", "my-4"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", 1, "form-control", "rounded-pill"], [1, "input-group-btn", "ml-2"], ["type", "button", 1, "btn", "btn-gradient"], [1, "col-lg-6"], [1, "list-unstyled", "mb-0"], ["href", "#"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Beauty of Sunshine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " by Alex Micheal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "blockquote", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Someone famous in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "cite", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Source Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Leave a Comment:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Jhon Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Alex Petro");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Jassica Pearl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Micheal Clark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, tenetur. Repellat a quaerat culpa illo excepturi. Dignissimos, officia eum! Architecto dolores porro dolor delectus corrupti earum nesciunt sapiente aliquam dignissimos? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Technology");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sports");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Media");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Life Style");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Movies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Drama");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Sidebar Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem minima debitis beatae, recusandae similique quibusdam, sint tenetur blanditiis quia at, itaque reprehenderit eaque. Veritatis repellat ad modi corrupti ab? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9ibG9nLWRldGFpbHMvYmxvZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return BlogDetailsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-blog-details",
                templateUrl: "./blog-details.component.html",
                styleUrls: ["./blog-details.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/contact-form/contact-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/contact-form/contact-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





var _c0 = function () { return { y: "-120px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function ContactFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactFormComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r370); var ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r369.success = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Your Message Sent succefully");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
} }
var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.formValues = {
            'email': null,
            'name': null,
            'subject': null,
            'message': null,
        };
        this.error = null;
        this.success = null;
    }
    ContactFormComponent.prototype.ngOnInit = function () { };
    ContactFormComponent.prototype.submitForm = function (form) {
        this.formValues.email = form.value.email;
        this.formValues.name = form.value.name;
        this.formValues.subject = form.value.subject;
        this.formValues.message = form.value.message;
        this.success = true;
    };
    ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
    ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 34, vars: 2, consts: [["id", "contacts-wrap", 1, "contact-form-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "form-wrap", "col-md-6", "mb-4"], [1, "section-header", "mb-5"], [1, "font-weight-bold"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "form", 1, "row", "form", 3, "ngSubmit"], ["contactForm", "ngForm"], [1, "form-group", "mb-4", "col-md-6"], ["for", ""], [1, "eva", "eva-person-outline"], ["type", "text", "name", "Name", "id", "", "placeholder", "Your Name", "required", "", "ngModel", "", 1, "form-control"], [1, "eva", "eva-email-outline"], ["type", "email", "required", "", "name", "email", "email", "", "ngModel", "", "placeholder", "Your email", "aria-describedby", "helpId", 1, "form-control"], [1, "form-group", "mb-4", "col-md-12"], [1, "eva", "eva-edit-2-outline"], ["type", "text", "required", "", "name", "subject", "ngModel", "", "placeholder", "Your subject here", "aria-describedby", "helpId", 1, "form-control"], [1, "eva", "eva-edit-outline"], ["placeholder", "Your message here", "required", "", "name", "message", "ngModel", "", "rows", "5", 1, "form-control"], [1, "form-group", "col-md-12"], ["type", "submit", 1, "btn", "btn-block", "half-button", "form-submit-button", "btn-large", "btn-gradient", 3, "disabled"], [1, "col-md-6", "align-items-center"], [1, "right-contact-wrap", "ml-5"], ["src", "./assets/images/landing/svg/contact2.svg", "alt", "Image", 1, "img-responsive", "zoom-fade"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            var _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Get in Touch With Us !");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContactFormComponent_div_9_Template, 6, 4, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r371); var _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); return ctx.submitForm(_r368); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "textarea", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Send message ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r368.valid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return ContactFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-contact-form",
                templateUrl: "./contact-form.component.html",
                styleUrls: ["./contact-form.component.scss"],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/demos/demos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/landing/components/demos/demos.component.ts ***!
  \*******************************************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var DemosComponent = /** @class */ (function () {
    function DemosComponent() {
        this.isCollapsed = true;
    }
    DemosComponent.prototype.ngOnInit = function () {
    };
    DemosComponent.ɵfac = function DemosComponent_Factory(t) { return new (t || DemosComponent)(); };
    DemosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemosComponent, selectors: [["app-demos"]], decls: 224, vars: 6, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16"], [1, "container"], [1, "d-flex", "flex-grow-1", "mobile_menu"], [1, "w-100", "d-lg-none", "d-block"], ["href", "# ", 1, "navbar-brand-two", "mx-auto", "d-inline-block"], ["src", "./assets/images/landing/lOGO_d/logo_white.png ", "alt", "logo "], [1, "w-100", "text-right"], ["type", "button ", "aria-controls", "collapseExample ", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "eva", "eva-menu-outline", "text-30", "text-white"], ["id", "collapseExample ", 1, "collapse", "navbar-collapse", "flex-grow-1", "text-right", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item"], ["href", "# ", "scrollTo", "intro-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "# ", "scrollTo", "demos-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "# ", "scrollTo", "features-wrap", 1, "nav-link", "m-2", "menu-item"], ["id", "intro-wrap", 1, "demo-intro-Wrap", "bg-primary", "text-left", "text-white"], [1, "row"], [1, "col-lg", "demo-intro-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "introList", "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "demo-intro-Buttons"], ["scrollTo", "demos-wrap", "href", "# ", "role", "button ", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase"], ["id", " ", "target", "_blank", "href", "https://themeforest.net/item/dexam-angular-bootstrap-app-landing-page/23137988", "role", "button ", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-lg", "demo-intro-RightSection", "d-flex", "align-items-center"], [1, "demo-intro-ProductImage"], ["src", "./assets/images/landing/header/demo.svg", "alt", " ", 1, "img-responsive"], [1, "overlay"], ["id", "demos-wrap", 1, "work1Wrap"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold", "mb-3"], [1, "col-md-6", "mb-4"], [1, "card", "o-hidden"], ["routerLink", "/landing/v1"], ["src", "./assets/images/landing/demos/1.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body", "text-center"], [1, "card-title", "font-weight-bold", "m-0"], [1, "card-footer", "text-center"], ["routerLink", "/landing/v1", 1, "btn", "btn-primary"], ["routerLink", "/landing/v2"], ["src", "./assets/images/landing/demos/2.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v2", 1, "btn", "btn-primary"], ["routerLink", "/landing/v3"], ["src", "./assets/images/landing/demos/3.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v3", 1, "btn", "btn-primary"], ["routerLink", "/landing/v4"], ["src", "./assets/images/landing/demos/4.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v4", 1, "btn", "btn-primary"], ["routerLink", "/landing/v5"], ["src", "./assets/images/landing/demos/5.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v5", 1, "btn", "btn-primary"], ["routerLink", "/landing/v6"], ["src", "./assets/images/landing/demos/6.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v6", 1, "btn", "btn-primary"], ["routerLink", "/landing/v7"], ["src", "./assets/images/landing/demos/7.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v7", 1, "btn", "btn-primary"], ["routerLink", "/landing/v8"], ["src", "./assets/images/landing/demos/8.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v8", 1, "btn", "btn-primary"], ["routerLink", "/landing/v9"], ["src", "./assets/images/landing/demos/9.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v9", 1, "btn", "btn-primary"], ["routerLink", "/landing/v10"], ["src", "./assets/images/landing/demos/10.jpg", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v10", 1, "btn", "btn-primary"], ["routerLink", "/landing/v11"], ["src", "./assets/images/landing/demos/11.png", "alt", "Card image cap", 1, "card-img-top"], ["routerLink", "/landing/v11", 1, "btn", "btn-primary"], ["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-4", "mb-4"], [1, "card"], [1, "card-body", "p-5", "text-center"], [1, "card-title", "pt-2", "font-weight-medium"], [1, "col-md-12", "mt-4", "text-center"], ["scrollTo", "demos-wrap", "href", "# ", "role", "button ", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase"], ["id", " ", "target", "_blank", "href", "https://themeforest.net/item/dexam-angular-bootstrap-app-landing-page/23137988", "role", "button ", 1, "btn", "btn-success", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase"]], template: function DemosComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemosComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Dexam- Angular+HTML App Landing Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Dexam is highly customizable Angular 9 + Bootstrap 4 Landing Page. Dexam is built with Official @angular/cli tool and uses NG Bootstrap .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Angular Authentication Pages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Super Flexible And Customizable ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " View Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Buy Dexam ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Ten Amazing Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "All Sections are individual Components So You can use whatever You want .");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Version One");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Version Two");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "img", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Version Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "img", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Version Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Version Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "a", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Version Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "img", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Version Seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "img", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "Version Eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Version Nine");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Version Ten");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "img", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h5", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Version Eleven");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, " View Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "section", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h2", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Some Features Of Dexam");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "Angular CLI");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Responsive");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Major Browser Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "NGU Carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "NG-Bootstrap");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Easy to Customize");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "SignUp Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "SignIn Page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "h4", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Forgot password page");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "a", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, " View Demos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "a", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " Buy Dexam ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0)));
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"], _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: transparent !important;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n  position: absolute;\n}\n#home-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\nspan.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n}\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%] {\n  padding: 180px 0px 30px;\n  color: #fff !important;\n  overflow: hidden;\n  position: relative;\n  z-index: 99;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-RightSection[_ngcontent-%COMP%] {\n  position: relative;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-RightSection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n  opacity: 1;\n}\n.demo-intro-Wrap[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  height: 100%;\n  background-size: cover;\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background-size: cover;\n}\n@media only screen and (max-width: 992px) {\n  .demo-intro-Wrap[_ngcontent-%COMP%]   .demo-intro-LeftSection[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n  }\n}\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n@media only screen and (max-width: 746px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    background: #2f3883 !important;\n    margin-top: 0px;\n    text-align: center;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2RlbW9zL0M6XFxVc2Vyc1xcc2F0aHdcXERlc2t0b3BcXGRleGFtLWFuZ3VsYXIvc3JjXFxhcHBcXHZpZXdzXFxsYW5kaW5nXFxjb21wb25lbnRzXFxkZW1vc1xcZGVtb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9kZW1vcy9kZW1vcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQ0VKO0FERUE7RUFDRSw2QkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNFSjtBREVBO0VBQ0UsWUFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0FDQ0Y7QURFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtBQ0VKO0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGO0FER0U7RUFDRSxlQUFBO0FDQUo7QURJQTtFQUNFO0lBQ0UsVUFBQTtFQ0RGOztFREdBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNBRjs7RURFQTtJQUNFLGVBQUE7RUNDRjs7RURDQTtJQUNFLGNBQUE7RUNFRjs7RURBQTtJQUNFLHVCQUFBO0VDR0Y7O0VEREE7SUFDRSxpQkFBQTtFQ0lGOztFREZBO0lBQ0Usd0JBQUE7RUNLRjs7RURIQTtJQUNFLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VDTUY7O0VESkE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLDRCQUFBO0VDT0Y7QUFDRjtBREpBOztFQUVFLHFCQUFBO0VBQ0EsYUFBQTtBQ01GO0FERkE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNLRjtBREpFO0VBQ0Usa0JBQUE7QUNNSjtBRExJO0VBQ0UsbUJBQUE7QUNPTjtBREpFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ01KO0FERUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0FDREo7QURLQTtFQUVJO0lBQ0Usa0JBQUE7RUNISjtBQUNGO0FETUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDSkY7QUFDRjtBRE1BO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDSkY7O0VETUE7SUFDRSxrQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sYW5kaW5nL2NvbXBvbmVudHMvZGVtb3MvZGVtb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxuICB9XHJcbn1cclxuXHJcbnNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1vYmlsZV9tZW51IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaG9tZXRvcC1idG46aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNob21lLWhlYWRlcjpub3QoLmhlYWRlci1maXhlZCkgLmhvbWV0b3AtYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUge1xyXG4gIHRvcDogLTIycHg7XHJcbiAgYm90dG9tOiAtMjJweDtcclxufVxyXG5cclxuLmhvbWUtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbiNtZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICNob21lLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAjaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC5oZWFkZXItbW9iaWxlLXRvcCB7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDA7XHJcbiAgfVxyXG4gICNtZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhvbWUtbG9nbyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcbiAgLnRvcC1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpob3ZlcixcclxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLy8gaW50cm8gcGFydFxyXG4uZGVtby1pbnRyby1XcmFwIHtcclxuICBwYWRkaW5nOiAxODBweCAwcHggMzBweDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIC5kZW1vLWludHJvLVJpZ2h0U2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMyQTI2M0I7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTI5ZGVnLCByZ2IoMTkzLCAxNSwgNjUpIDAsIHJnYigzNSwgNTksIDEzNikgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtMjlkZWcsIHJnYigxOTMsIDE1LCA2NSkgMCwgcmdiKDM1LCA1OSwgMTM2KSAxMDAlKTtcclxuICAgIC8vIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTI5ZGVnLCByZ2IoMTkzLCAxNSwgNjUpIDAsIHJnYigzNSwgNTksIDEzNikgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTI5ZGVnLCByZ2IoMTkzLCAxNSwgNjUpIDAsIHJnYigzNSwgNTksIDEzNikgMTAwJSk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTI5ZGVnLCByZ2IoMTkzLCAxNSwgNjUpIDAsIHJnYigzNSwgNTksIDEzNikgMTAwJSk7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLThweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2xhbmRpbmcvcGF0dGVybi9iZy5wbmcpIGJvdHRvbSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5kZW1vLWludHJvLVdyYXAge1xyXG4gICAgLmRlbW8taW50cm8tTGVmdFNlY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcclxuICAubW9iaWxlX21lbnUge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NnB4KSB7XHJcbiAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMyZjM4ODMgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgbGkubmF2LWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iLCIjaG9tZS1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNob21lLWhlYWRlciBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG59XG5cbnNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XG59XG5cbi5tb2JpbGVfbWVudSB7XG4gIGhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2JpbGVfbWVudSBhIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhvbWV0b3AtYnRuOmhvdmVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hvbWUtaGVhZGVyOm5vdCguaGVhZGVyLWZpeGVkKSAuaG9tZXRvcC1idG4gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXJpcHBsZSB7XG4gIHRvcDogLTIycHg7XG4gIGJvdHRvbTogLTIycHg7XG59XG5cbi5ob21lLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUtbG9nbyBhIHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuI21lbnUtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDEwcHg7XG59XG5cbi5pY29uLWJ1dHRvbiAubWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjaG9tZS1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAjaG9tZS1oZWFkZXIgPiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC5oZWFkZXItbW9iaWxlLXRvcCB7XG4gICAgcGFkZGluZzogMTNweCAwO1xuICB9XG5cbiAgI21lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC5jb250YWluZXIge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmhvbWUtbG9nbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAudG9wLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgfVxufVxuLm5hdmJhci10b2dnbGVyOmhvdmVyLFxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGVtby1pbnRyby1XcmFwIHtcbiAgcGFkZGluZzogMTgwcHggMHB4IDMwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG4uZGVtby1pbnRyby1XcmFwIC5kZW1vLWludHJvLVJpZ2h0U2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZW1vLWludHJvLVdyYXAgLmRlbW8taW50cm8tUmlnaHRTZWN0aW9uIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZGVtby1pbnRyby1XcmFwIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAxO1xufVxuLmRlbW8taW50cm8tV3JhcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmRlbW8taW50cm8tV3JhcCAuZGVtby1pbnRyby1MZWZ0U2VjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gIC5tb2JpbGVfbWVudSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ2cHgpIHtcbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMmYzODgzICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGxpLm5hdi1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return DemosComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DemosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-demos',
                templateUrl: './demos.component.html',
                styleUrls: ['./demos.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/faqs/faqs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/faqs/faqs.component.ts ***!
  \*****************************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");




var _c0 = function () { return { y: "20px", opacity: "0", delay: "0ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
function FaqsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
function FaqsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Support duration \u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqsComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
function FaqsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
} }
var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
    FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 21, vars: 1, consts: [["id", "faqs-wrap", 1, "faqs-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-4", "mb-lg-0", "mb-md-0", "mb-4"], ["activeIds", "ngb-panel-0", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Why we Best of all"], ["ngbPanelContent", ""], ["ngbPanelTitle", ""], ["title", "How we serve customer"], [1, "col-md-5", "offset-md-1", "col-sm-12", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/faqs2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-accordion", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FaqsComponent_ng_template_13_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ngb-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FaqsComponent_ng_template_15_Template, 5, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FaqsComponent_ng_template_16_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FaqsComponent_ng_template_18_Template, 2, 4, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOthers", true);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbPanelTitle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]] } });
    return FaqsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faqs',
                templateUrl: './faqs.component.html',
                styleUrls: ['./faqs.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/features-two/features-two.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/features-two/features-two.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturesTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesTwoComponent", function() { return FeaturesTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FeaturesTwoComponent = /** @class */ (function () {
    function FeaturesTwoComponent() {
    }
    FeaturesTwoComponent.prototype.ngOnInit = function () {
    };
    FeaturesTwoComponent.ɵfac = function FeaturesTwoComponent_Factory(t) { return new (t || FeaturesTwoComponent)(); };
    FeaturesTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesTwoComponent, selectors: [["app-features-two"]], decls: 58, vars: 0, consts: [["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "col-md-6", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-4", "pb-4", "text-center"], [1, "eva", "eva-clock-outline", "text-36"], [1, "card-title", "pt-2", "font-weight-medium"], [1, "eva", "eva-shopping-bag-outline", "text-36"], [1, "col-md-6", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-lock-outline", "text-36"], [1, "eva", "eva-people-outline", "text-36"], [1, "col-md-12", "col-sm-12", "col-lg-5", "offset-lg-1", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/features2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FeaturesTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Why do students and parents choose NamasteGurus?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Expert Tutors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tutors with good Knowledge base");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Not just Tutors, but Mentors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Responsible for your Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Online Tutoring ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Interactive online platform between teacher and students");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Attendance tracking");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Assessments / Unit tests ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Academic Calendar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Learn Anytime, Anywhere");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Pick your own Date, Time & Topics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Learn from the Safety of your Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Learn even when away from Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Assessments");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Personalized Workplans ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Regular Feedback");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mZWF0dXJlcy10d28vZmVhdHVyZXMtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FeaturesTwoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features-two',
                templateUrl: './features-two.component.html',
                styleUrls: ['./features-two.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/features/features.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/features/features.component.ts ***!
  \*************************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(); };
    FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 48, vars: 0, consts: [["id", "features-wrap", 1, "features_wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], ["animateOnScroll", "", "animationName", "animated fadeIn", 1, "col-md-6", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-4", "pb-4", "text-center"], [1, "eva", "eva-clock-outline", "text-30"], [1, "card-title", "pt-2", "text-16"], [1, "eva", "eva-file-text-outline", "text-30"], [1, "eva", "eva-shopping-bag-outline", "text-30"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4", "mb-lg-0"], [1, "eva", "eva-lock-outline", "text-30"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-people-outline", "text-30"], [1, "eva", "eva-bell-outline", "text-30", "text-gradient"], [1, "col-md-6", "col-lg-5", "col-sm-12", "offset-lg-1", "d-flex", "align-items-center"], ["src", "./assets/images/landing/svg/features2.svg", "alt", "", 1, "img-responsive", "w-100"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Exciting Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Time Tracking");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Invoicing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sales Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Data Safety");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contracts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FeaturesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/footer/footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 0, consts: [["id", "footer-wrap", 1, "footer_wrap"], [1, "container"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "o-hidden", "text-left"], [1, ""], [1, "card-title", "font-weight-bold"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], ["href", "#"], [1, "col-md-3", "mb-4", "mb-lg-0", "mb-md-0"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "col-md-3", "mb-lg-0", "mb-md-0"], [1, "address-wrap", "mb-3"], [1, "list-group", "list-unstyled"], [1, "eva", "eva-pin-outline", "mr-2"], [1, "eva", "eva-email-outline", "mr-2"], [1, "eva", "eva-phone-call-outline", "mr-2"], [1, "social-wrap"], [1, "social-btns-wrap"], ["href", "#", 1, "social-btn", "text-30", "facebook", "ml-0"], [1, "eva", "eva-facebook"], ["href", "#", 1, "social-btn", "text-30", "twitter"], [1, "eva", "eva-twitter"], ["href", "#", 1, "social-btn", "text-30", "google"], [1, "eva", "eva-google"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dexam");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dexam is highly customizable Angular 9 + bootstrap 4 landing Page. Dexam is built with official @angular/cli tool and uses NG Bootstrap . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Other Pages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Marketing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Campaign");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Digital Agency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Awesome Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Minimal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Intuitive ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Super Flexible");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "UI-Lib ,United Kingdom");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "test@yahoo.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " +8801961081993");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/header-white/header-white.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/header-white/header-white.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeaderWhiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWhiteComponent", function() { return HeaderWhiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");







var _c0 = function (a0) { return { "header-fixed": a0 }; };
var HeaderWhiteComponent = /** @class */ (function () {
    function HeaderWhiteComponent(document, window) {
        this.document = document;
        this.window = window;
        this.isCollapsed = true;
        this.menuOpened = false;
    }
    HeaderWhiteComponent.prototype.ngOnInit = function () { };
    HeaderWhiteComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderWhiteComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderWhiteComponent.prototype.buyEgret = function () {
        this.window.open("https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi");
    };
    HeaderWhiteComponent.ɵfac = function HeaderWhiteComponent_Factory(t) { return new (t || HeaderWhiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])); };
    HeaderWhiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderWhiteComponent, selectors: [["app-header-white"]], hostVars: 2, hostBindings: function HeaderWhiteComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderWhiteComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-opened", ctx.menuOpened);
        } }, decls: 39, vars: 5, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16", 3, "ngClass"], [1, "container"], [1, "d-flex", "flex-grow-1", "mobile_menu"], [1, "w-100", "d-lg-none", "d-block"], ["href", "#"], ["src", "https://firebasestorage.googleapis.com/v0/b/homemade-de936.appspot.com/o/namastegurus.png?alt=media&token=d1695749-12c1-43f9-937f-38cc931ba848", "alt", "logo", 2, "width", "200px !important"], [1, "w-100", "text-right"], ["type", "button", "aria-controls", "collapseExample", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "eva", "eva-menu-outline", "text-30", "text-white"], ["id", "collapseExample", 1, "collapse", "navbar-collapse", "flex-grow-1", "text-right", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item"], ["href", "#", "scrollTo", "intro-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "#", "scrollTo", "features-wrap", 1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "#", "scrollTo", "services-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "works-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "pricing-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "teams-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "testimonials-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "news-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#", "scrollTo", "contacts-wrap", 1, "nav-link", "m-2", "menu-item"]], template: function HeaderWhiteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderWhiteComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isFixed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n}\n\n#home-header[_ngcontent-%COMP%]   span.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n\n.header-fixed[_ngcontent-%COMP%]   span.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #3c3754 !important;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n\n.header-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #fff !important;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: 0.6s slideDown forwards;\n          animation: 0.6s slideDown forwards;\n  transition: all 0.5s ease-in-out !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333 !important;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .hometop-btn[_ngcontent-%COMP%] {\n  line-height: 60px !important;\n}\n\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    background: #fff;\n    margin-top: 0px;\n    text-align: center;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .header-fixed[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n    color: #3c3754 !important;\n  }\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n\n@media only screen and (max-width: 746px) {\n  a[_ngcontent-%COMP%] {\n    color: #333;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hlYWRlci13aGl0ZS9DOlxcVXNlcnNcXHNhdGh3XFxEZXNrdG9wXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xcaGVhZGVyLXdoaXRlXFxoZWFkZXItd2hpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXItd2hpdGUvaGVhZGVyLXdoaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRUo7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0VBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsMkNBQUE7QUNDRjs7QURBRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0FDRUo7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREFFO0VBQ0UsZ0JBQUE7QUNFSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FER0U7RUFDRSxlQUFBO0FDQUo7O0FESUE7RUFDRTtJQUNFLFVBQUE7RUNERjs7RURHQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDQUY7O0VERUE7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxjQUFBO0VDRUY7O0VEQUE7SUFDRSx1QkFBQTtFQ0dGOztFRERBO0lBQ0UsaUJBQUE7RUNJRjs7RURGQTtJQUNFLHdCQUFBO0VDS0Y7O0VESEE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ01GOztFREpBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSw0QkFBQTtFQ09GOztFRExBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0Usa0JBQUE7RUNTRjs7RURQQTtJQUNFLHlCQUFBO0VDVUY7QUFDRjs7QURQQTs7RUFFRSxxQkFBQTtFQUNBLGFBQUE7QUNTRjs7QURQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUNVRjtBQUNGOztBRFJBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSw2QkFBQTtJQUNBLHFDQUFBO0VDVUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXItd2hpdGUvaGVhZGVyLXdoaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMjJweCAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuI2hvbWUtaGVhZGVyIHNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhlYWRlci1maXhlZCBzcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMzYzM3NTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbn1cclxuXHJcbi5tb2JpbGVfbWVudSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcbn1cclxuXHJcbiNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhvbWV0b3AtYnRuOmhvdmVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jaG9tZS1oZWFkZXI6bm90KC5oZWFkZXItZml4ZWQpIC5ob21ldG9wLWJ0biA6Om5nLWRlZXAgLm1hdC1idXR0b24tcmlwcGxlIHtcclxuICB0b3A6IC0yMnB4O1xyXG4gIGJvdHRvbTogLTIycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICBhbmltYXRpb246IDAuNnMgc2xpZGVEb3duIGZvcndhcmRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlci1maXhlZCAuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1maXhlZCAuaG9tZXRvcC1idG4ge1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lLWxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4jbWVudS10b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1idXR0b24ge1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAjaG9tZS1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAuaGVhZGVyLW1vYmlsZS10b3Age1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gIH1cclxuICAjbWVudS10b2dnbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5ob21lLWxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgfVxyXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBsaS5uYXYtaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5oZWFkZXItZml4ZWQgLmV2YSB7XHJcbiAgICBjb2xvcjogIzNjMzc1NCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyOmhvdmVyLFxyXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcclxuICAubW9iaWxlX21lbnUge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0NnB4KSB7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxuICB9XHJcbn1cclxuIiwiI2hvbWUtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbiNob21lLWhlYWRlciBzcGFuLm5hdmJhci10b2dnbGVyLWljb24gLmV2YSB7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyLWZpeGVkIHNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMzYzM3NTQgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xufVxuXG4ubW9iaWxlX21lbnUge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubW9iaWxlX21lbnUgYSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbiNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ob21ldG9wLWJ0bjpob3ZlciA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNob21lLWhlYWRlcjpub3QoLmhlYWRlci1maXhlZCkgLmhvbWV0b3AtYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUge1xuICB0b3A6IC0yMnB4O1xuICBib3R0b206IC0yMnB4O1xufVxuXG4uaGVhZGVyLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBhbmltYXRpb246IDAuNnMgc2xpZGVEb3duIGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1maXhlZCBhIHtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbn1cblxuLmhlYWRlci1maXhlZCAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItZml4ZWQgLmhvbWV0b3AtYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmhvbWUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaG9tZS1sb2dvIGEge1xuICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4jbWVudS10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLmljb24tYnV0dG9uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICNob21lLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmhlYWRlci1tb2JpbGUtdG9wIHtcbiAgICBwYWRkaW5nOiAxM3B4IDA7XG4gIH1cblxuICAjbWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG9tZS1sb2dvIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC50b3AtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1lbnUtb3BlbmVkOmhvc3QgLnRvcC1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBsaS5uYXYtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmhlYWRlci1maXhlZCAuZXZhIHtcbiAgICBjb2xvcjogIzNjMzc1NCAhaW1wb3J0YW50O1xuICB9XG59XG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLm1vYmlsZV9tZW51IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDZweCkge1xuICBhIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcbiAgfVxufSJdfQ== */"] });
    return HeaderWhiteComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderWhiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header-white",
                templateUrl: "./header-white.component.html",
                styleUrls: ["./header-white.component.scss"]
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.menu-opened"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/components/header/header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");









function HeaderComponent_li_26_li_4_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r390 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r390.name);
} }
function HeaderComponent_li_26_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_26_li_4_li_4_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var it_r388 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](it_r388.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", it_r388.subject);
} }
function HeaderComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_26_li_4_Template, 5, 2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r386 = ctx.$implicit;
    var ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r385.data.classes);
} }
var _c0 = function (a0) { return { "header-fixed": a0 }; };
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(http, document, window) {
        this.http = http;
        this.document = document;
        this.window = window;
        this.isCollapsed = true;
        this.menuOpened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://namasteguru.herokuapp.com/api/admin/getallslots')
            .toPromise()
            .then(function (succ) {
            console.log(succ);
            // this.classes = succ.message.classes
            _this.data = succ.message;
        })
            .catch(function (err) { return console.log(err); });
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset ||
            this.document.documentElement.scrollTop ||
            this.document.body.scrollTop ||
            0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderComponent.prototype.hidemenu = function () {
        this.isCollapsed = true;
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-opened", ctx.menuOpened);
        } }, decls: 33, vars: 6, consts: [["id", "home-header", 1, "navbar", "navbar-expand-lg", "text-16", 3, "ngClass"], [1, "container"], [1, "d-flex", "justify-content-between", "flex-grow-1", "mobile_menu"], ["href", "#", 1, "navbar-brand", "d-none", "d-lg-inline-block"], [1, "nav-link", "m-2", "menu-item", "nav-active"], ["href", "#", 1, "navbar-brand-two", "d-inline-block"], ["src", "../../../../../favicon.ico", "alt", "logo"], [1, "text-right"], ["type", "button", "aria-controls", "collapseExample", 1, "navbar-toggler", 3, "click"], [1, "eva", "eva-menu-outline", "text-30", "text-white", "d-none", "d-md-block"], [1, "navbar-toggler-icon", "d-block", "d-md-none"], ["id", "collapseExample", 1, "collapse", "navbar-collapse", "flex-grow-1", "text-right", 3, "ngbCollapse"], [1, "navbar-nav", "ml-auto", "flex-nowrap"], [1, "nav-item", 3, "click"], ["href", "#", 1, "nav-link", "m-2", "menu-item"], [1, "nav-item"], [1, "nav-link", "m-2", "menu-item"], [4, "ngFor", "ngForOf"], ["href", "#", "scrollTo", "contacts-wrap", 1, "nav-link", "m-2", "menu-item"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Namaste Guru");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_16_listener() { return ctx.hidemenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Student");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_19_listener() { return ctx.hidemenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tutor ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Tutoring Courses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_li_26_Template, 5, 2, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_27_listener() { return ctx.hidemenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_30_listener() { return ctx.hidemenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isFixed));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.standard);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_5__["ScrollToDirective"]], styles: ["#home-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  background: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  z-index: 9999;\n}\n\na[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.mobile_menu[_ngcontent-%COMP%] {\n  height: 60px;\n  align-items: center;\n}\n\n.mobile_menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n}\n\n#home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.hometop-btn[_ngcontent-%COMP%]:hover     .mat-button-focus-overlay {\n  display: none;\n}\n\n#home-header[_ngcontent-%COMP%]:not(.header-fixed)   .hometop-btn[_ngcontent-%COMP%]     .mat-button-ripple {\n  top: -22px;\n  bottom: -22px;\n}\n\n.header-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: 0.6s slideDown forwards;\n          animation: 0.6s slideDown forwards;\n  transition: all 0.5s ease-in-out !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.header-fixed[_ngcontent-%COMP%]   .hometop-btn[_ngcontent-%COMP%] {\n  line-height: 60px !important;\n}\n\n.home-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.home-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inherit;\n}\n\n#menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  position: relative;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: black;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 15px 1px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);\n  text-align: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: left;\n  background: transparent;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  opacity: 0;\n  visibility: hidden;\n  transform-origin: 0% 0%;\n  transition: transform 0.3s, opacity 0.3s;\n  transform-style: preserve-3d;\n  transform: rotateX(-75deg);\n  position: absolute;\n  top: 50px;\n  \n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: rotateX(0deg);\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 170px;\n  float: none;\n  display: list-item;\n  position: relative;\n}\n\n\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  top: -50px;\n  left: 145px;\n}\n\n\n\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \" +\";\n}\n\nli[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:only-child:after {\n  content: \"\";\n}\n\n@media (max-width: 991px) {\n  #home-header[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  #home-header[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%] {\n    height: 60px;\n    padding: 0;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .header-mobile-top[_ngcontent-%COMP%] {\n    padding: 13px 0;\n  }\n\n  #menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .home-logo[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n\n  .top-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3;\n  }\n\n  .menu-opened[_nghost-%COMP%]   .top-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    line-height: 56px !important;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    margin-top: 0px;\n    text-align: center;\n    height: 100vh;\n    overflow-y: scroll;\n  }\n\n  li.nav-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: none;\n    position: relative;\n    top: 10px;\n    \n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    top: 10px;\n    left: 5px;\n  }\n\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n  outline: none;\n}\n\nspan.navbar-toggler-icon[_ngcontent-%COMP%]   .eva[_ngcontent-%COMP%] {\n  -webkit-text-fill-color: #fff;\n}\n\n@media only screen and (max-width: 765px) {\n  .mobile_menu[_ngcontent-%COMP%] {\n    height: 60px;\n    align-items: center;\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbGFuZGluZy9jb21wb25lbnRzL2hlYWRlci9DOlxcVXNlcnNcXHNhdGh3XFxEZXNrdG9wXFxkZXhhbS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcbGFuZGluZ1xcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSxzRUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBRE1FO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FESUk7RUFDRSxxQkFBQTtBQ0ZOOztBREdNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRFI7O0FER007RUFDRSxnQkFBQTtBQ0RSOztBREVRO0VBQ0UsNkVBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDRFY7O0FERVU7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FDQVo7O0FERVU7RUFDRSxnQ0FBQTtFQUNBLCtCQUFBO0FDQVo7O0FERVU7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDQVo7O0FEUUEsOEJBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FDTkY7O0FEU0EsK0JBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ1BGOztBRFVBLHdCQUFBOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUkY7O0FEV0EsaUNBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDVEY7O0FEWUEsdURBQUE7O0FBRUE7RUFDRSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxXQUFBO0FDVkY7O0FEYUE7RUFDRTtJQUNFLFVBQUE7RUNWRjs7RURZQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDVEY7O0VEV0E7SUFDRSxlQUFBO0VDUkY7O0VEVUE7SUFDRSxjQUFBO0VDUEY7O0VEU0E7SUFDRSx1QkFBQTtFQ05GOztFRFFBO0lBQ0UsaUJBQUE7RUNMRjs7RURPQTtJQUNFLHdCQUFBO0VDSkY7O0VETUE7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ0hGOztFREtBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSw0QkFBQTtFQ0ZGOztFRElBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNERjs7RURHQTtJQUNFLGtCQUFBO0VDQUY7O0VERUE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsK0JBQUE7RUNDRjs7RURDQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7RUNFRjs7RURBQTtJQUNFLHFCQUFBO0VDR0Y7QUFDRjs7QURBQTs7RUFFRSxxQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZzogMjJweCAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxufVxyXG5cclxuLm1vYmlsZV9tZW51IHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaG9tZXRvcC1idG46aG92ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNob21lLWhlYWRlcjpub3QoLmhlYWRlci1maXhlZCkgLmhvbWV0b3AtYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1yaXBwbGUge1xyXG4gIHRvcDogLTIycHg7XHJcbiAgYm90dG9tOiAtMjJweDtcclxufVxyXG5cclxuLmhlYWRlci1maXhlZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgYW5pbWF0aW9uOiAwLjZzIHNsaWRlRG93biBmb3J3YXJkcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWZpeGVkIC5jb250YWluZXIge1xyXG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGVyLWZpeGVkIC5ob21ldG9wLWJ0biB7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbiNtZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duIG1lbnVcclxubmF2IHtcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gICAgICAgICAgICAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBIaWRlIERyb3Bkb3ducyBieSBEZWZhdWx0ICovXHJcblxyXG5uYXYgdWwgdWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNzVkZWcpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgLyogdGhlIGhlaWdodCBvZiB0aGUgbWFpbiBuYXYgKi9cclxufVxyXG5cclxuLyogRGlzcGxheSBEcm9wZG93bnMgb24gSG92ZXIgKi9cclxuXHJcbm5hdiB1bCBsaTpob3ZlciA+IHVsIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4vKiBGaXNydCBUaWVyIERyb3Bkb3duICovXHJcblxyXG5uYXYgdWwgdWwgbGkge1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBmbG9hdDogbm9uZTtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBTZWNvbmQsIFRoaXJkIGFuZCBtb3JlIFRpZXJzXHQqL1xyXG5cclxubmF2IHVsIHVsIHVsIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtNTBweDtcclxuICBsZWZ0OiAxNDVweDtcclxufVxyXG5cclxuLyogQ2hhbmdlIHRoaXMgaW4gb3JkZXIgdG8gY2hhbmdlIHRoZSBEcm9wZG93biBzeW1ib2wgKi9cclxuXHJcbmxpID4gYTphZnRlciB7XHJcbiAgY29udGVudDogXCIgK1wiO1xyXG59XHJcblxyXG5saSA+IGE6b25seS1jaGlsZDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgI2hvbWUtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICNob21lLWhlYWRlciA+IC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLm1lbnUtb3BlbmVkOmhvc3QgLmhlYWRlci1tb2JpbGUtdG9wIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMDtcclxuICB9XHJcbiAgI21lbnUtdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaG9tZS1sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gIH1cclxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiAgbGkubmF2LWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBuYXYgdWwgdWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIC8qIHRoZSBoZWlnaHQgb2YgdGhlIG1haW4gbmF2ICovXHJcbiAgfVxyXG4gIG5hdiB1bCB1bCB1bCBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIG5hdiB1bCBsaTpob3ZlciA+IHVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjpob3ZlcixcclxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuc3Bhbi5uYXZiYXItdG9nZ2xlci1pY29uIC5ldmEge1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NXB4KSB7XHJcbiAgLm1vYmlsZV9tZW51IHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICB9XHJcbn1cclxuIiwiI2hvbWUtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDIycHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XG59XG5cbi5tb2JpbGVfbWVudSB7XG4gIGhlaWdodDogNjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tb2JpbGVfbWVudSBhIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn1cblxuI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhvbWV0b3AtYnRuOmhvdmVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2hvbWUtaGVhZGVyOm5vdCguaGVhZGVyLWZpeGVkKSAuaG9tZXRvcC1idG4gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXJpcHBsZSB7XG4gIHRvcDogLTIycHg7XG4gIGJvdHRvbTogLTIycHg7XG59XG5cbi5oZWFkZXItZml4ZWQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBhbmltYXRpb246IDAuNnMgc2xpZGVEb3duIGZvcndhcmRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWZpeGVkIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1maXhlZCAuaG9tZXRvcC1idG4ge1xuICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ob21lLWxvZ28gYSB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG5cbiNtZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4uaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5uYXYgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbm5hdiB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubmF2IHVsIGxpIHVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbm5hdiB1bCBsaSB1bCBsaSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiB1bCBsaSB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxubmF2IHVsIGxpIHVsIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbn1cbm5hdiB1bCBsaSB1bCBsaSB1bCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBIaWRlIERyb3Bkb3ducyBieSBEZWZhdWx0ICovXG5uYXYgdWwgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC03NWRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICAvKiB0aGUgaGVpZ2h0IG9mIHRoZSBtYWluIG5hdiAqL1xufVxuXG4vKiBEaXNwbGF5IERyb3Bkb3ducyBvbiBIb3ZlciAqL1xubmF2IHVsIGxpOmhvdmVyID4gdWwge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG59XG5cbi8qIEZpc3J0IFRpZXIgRHJvcGRvd24gKi9cbm5hdiB1bCB1bCBsaSB7XG4gIHdpZHRoOiAxNzBweDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBTZWNvbmQsIFRoaXJkIGFuZCBtb3JlIFRpZXJzXHQqL1xubmF2IHVsIHVsIHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiAxNDVweDtcbn1cblxuLyogQ2hhbmdlIHRoaXMgaW4gb3JkZXIgdG8gY2hhbmdlIHRoZSBEcm9wZG93biBzeW1ib2wgKi9cbmxpID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICtcIjtcbn1cblxubGkgPiBhOm9ubHktY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgI2hvbWUtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgI2hvbWUtaGVhZGVyID4gLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAuaGVhZGVyLW1vYmlsZS10b3Age1xuICAgIHBhZGRpbmc6IDEzcHggMDtcbiAgfVxuXG4gICNtZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob21lLWxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG5cbiAgLnRvcC1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudS1vcGVuZWQ6aG9zdCAudG9wLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgfVxuXG4gIC5tZW51LW9wZW5lZDpob3N0IC50b3AtbWVudSBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cblxuICBsaS5uYXYtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgbmF2IHVsIHVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgLyogdGhlIGhlaWdodCBvZiB0aGUgbWFpbiBuYXYgKi9cbiAgfVxuXG4gIG5hdiB1bCB1bCB1bCBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiA1cHg7XG4gIH1cblxuICBuYXYgdWwgbGk6aG92ZXIgPiB1bCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4ubmF2YmFyLXRvZ2dsZXI6aG92ZXIsXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNwYW4ubmF2YmFyLXRvZ2dsZXItaWNvbiAuZXZhIHtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgLm1vYmlsZV9tZW51IHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxufSJdfQ== */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss"]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.menu-opened"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-eight/intro-eight.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroEightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroEightComponent", function() { return IntroEightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var IntroEightComponent = /** @class */ (function () {
    function IntroEightComponent() {
    }
    IntroEightComponent.prototype.ngOnInit = function () {
    };
    IntroEightComponent.ɵfac = function IntroEightComponent_Factory(t) { return new (t || IntroEightComponent)(); };
    IntroEightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroEightComponent, selectors: [["app-intro-eight"]], decls: 18, vars: 0, consts: [["id", "intro-wrap", 1, "intro-eight-Wrap", "text-white", "text-center"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "intro-eight-subtitle"], [1, "font-weight-bold", "mb-3", "text-white"], [1, "intro-eight-Title", "font-weight-bold", "text-42", "t-shadow", "mb-3", "text-white"], [1, "intro-eight-Description"], [1, "text-18", "mb-4"], [1, "intro-eight-Buttons", "mb-5"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "overlay"]], template: function IntroEightComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dexam Angular Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Be Productive While working with a team ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 admin template. Dexam is built with Official @angular/cli tool, supports AOT compilation and uses NG Bootstrap and third-party NGX packages.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1laWdodC9pbnRyby1laWdodC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return IntroEightComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroEightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-eight',
                templateUrl: './intro-eight.component.html',
                styleUrls: ['./intro-eight.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IntroElevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroElevenComponent", function() { return IntroElevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");



var IntroElevenComponent = /** @class */ (function () {
    function IntroElevenComponent() {
    }
    IntroElevenComponent.prototype.ngOnInit = function () {
    };
    IntroElevenComponent.prototype.submitForm = function (form) {
    };
    IntroElevenComponent.ɵfac = function IntroElevenComponent_Factory(t) { return new (t || IntroElevenComponent)(); };
    IntroElevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroElevenComponent, selectors: [["app-intro-eleven"]], decls: 21, vars: 1, consts: [["id", "intro-wrap", 1, "intro-eleven-Wrap", "text-white", "text-center"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "intro-eleven-subtitle"], [1, "font-weight-bold", "mb-3", "text-white"], [1, "intro-eleven-Title", "font-weight-bold", "text-42", "t-shadow", "mb-3", "text-white"], [1, "intro-eleven-Description", "text-16"], [1, "mb-4"], [1, "intro-eleven-Buttons", "mb-5"], [1, "d-flex", "align-items-center", "justify-content-center", "subscription_form", "m-auto", 3, "ngSubmit"], ["subscription", "ngForm"], [1, "form-group"], ["type", "email", "required", "", "ngModel", "", "name", "email", "email", "", "id", "", "aria-describedby", "emailHelpId", "placeholder", "", 1, "form-control", "email_field"], ["type", "submit", 1, "btn", "btn-submit", "btn-success", 3, "disabled"], [1, "overlay"]], template: function IntroElevenComponent_Template(rf, ctx) { if (rf & 1) {
            var _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dexam Angular Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your complete Angular App Landing Page ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing template. Dexam is built with Official @angular/cli tool and uses NG Bootstrap and third-party packages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function IntroElevenComponent_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r392); var _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx.submitForm(_r391); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subscribe Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r391.valid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1lbGV2ZW4vaW50cm8tZWxldmVuLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return IntroElevenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroElevenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-eleven',
                templateUrl: './intro-eleven.component.html',
                styleUrls: ['./intro-eleven.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-five/intro-five.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-five/intro-five.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroFiveComponent", function() { return IntroFiveComponent; });
/* harmony import */ var _shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroFiveComponent = /** @class */ (function () {
    function IntroFiveComponent() {
    }
    IntroFiveComponent.prototype.ngOnInit = function () {
    };
    IntroFiveComponent.ɵfac = function IntroFiveComponent_Factory(t) { return new (t || IntroFiveComponent)(); };
    IntroFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroFiveComponent, selectors: [["app-intro-five"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-five-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-five-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-five-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-five-RightSection", "d-flex", "align-items-center"], [1, "intro-five-ProductImage"], ["src", "./assets/images/landing/svg/v5-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroFiveComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New way to Build your Dreams ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1maXZlL2ludHJvLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroFiveComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-five',
                templateUrl: './intro-five.component.html',
                styleUrls: ['./intro-five.component.scss'],
                animations: [_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-four/intro-four.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-four/intro-four.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroFourComponent", function() { return IntroFourComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroFourComponent = /** @class */ (function () {
    function IntroFourComponent() {
    }
    IntroFourComponent.prototype.ngOnInit = function () {
    };
    IntroFourComponent.ɵfac = function IntroFourComponent_Factory(t) { return new (t || IntroFourComponent)(); };
    IntroFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroFourComponent, selectors: [["app-intro-four"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-four-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-four-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-four-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-four-RightSection", "d-flex", "align-items-center"], [1, "intro-four-ProductImage"], ["src", "./assets/images/landing/svg/v4-header3.svg", "alt", "", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroFourComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "A Place to Keep your Projects secure");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1mb3VyL2ludHJvLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroFourComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-four',
                templateUrl: './intro-four.component.html',
                styleUrls: ['./intro-four.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-nine/intro-nine.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-nine/intro-nine.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroNineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroNineComponent", function() { return IntroNineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroNineComponent = /** @class */ (function () {
    function IntroNineComponent() {
    }
    IntroNineComponent.prototype.ngOnInit = function () {
    };
    IntroNineComponent.ɵfac = function IntroNineComponent_Factory(t) { return new (t || IntroNineComponent)(); };
    IntroNineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroNineComponent, selectors: [["app-intro-nine"]], decls: 28, vars: 4, consts: [["id", "intro-wrap", 1, "intro-nine-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-nine-LeftSection", "pb-3"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-nine-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-5", "offset-md-1", "intro-nine-RightSection", "d-flex", "align-items-center"], [1, "intro-nine-ProductImage"], ["src", "./assets/images/landing/svg/v2-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroNineComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Design and Sell Your Dream Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Authentication Pages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1uaW5lL2ludHJvLW5pbmUuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]] } });
    return IntroNineComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroNineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro-nine',
                templateUrl: './intro-nine.component.html',
                styleUrls: ['./intro-nine.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-seven/intro-seven.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSevenComponent", function() { return IntroSevenComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroSevenComponent = /** @class */ (function () {
    function IntroSevenComponent() {
    }
    IntroSevenComponent.prototype.ngOnInit = function () {
    };
    IntroSevenComponent.ɵfac = function IntroSevenComponent_Factory(t) { return new (t || IntroSevenComponent)(); };
    IntroSevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroSevenComponent, selectors: [["app-intro-seven"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-seven-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-seven-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-seven-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-seven-RightSection", "d-flex", "align-items-center"], [1, "intro-seven-ProductImage"], ["src", "./assets/images/landing/svg/v7-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroSevenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Manage Your Entire Business with one App ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 admin template. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1zZXZlbi9pbnRyby1zZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroSevenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroSevenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-seven',
                templateUrl: './intro-seven.component.html',
                styleUrls: ['./intro-seven.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-six/intro-six.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-six/intro-six.component.ts ***!
  \***************************************************************************/
/*! exports provided: IntroSixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSixComponent", function() { return IntroSixComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroSixComponent = /** @class */ (function () {
    function IntroSixComponent() {
    }
    IntroSixComponent.prototype.ngOnInit = function () {
    };
    IntroSixComponent.ɵfac = function IntroSixComponent_Factory(t) { return new (t || IntroSixComponent)(); };
    IntroSixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroSixComponent, selectors: [["app-intro-six"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro-six-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-six-LeftSection", "pb-5"], [1, "introTitle", "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "introDescription", "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-six-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-six-RightSection", "d-flex", "align-items-center"], [1, "intro-six-ProductImage"], ["src", "./assets/images/landing/svg/v6-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroSixComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Build Relationships That infulence Your Business ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Page.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby1zaXgvaW50cm8tc2l4LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroSixComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroSixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-six',
                templateUrl: './intro-six.component.html',
                styleUrls: ['./intro-six.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-ten/intro-ten.component.ts ***!
  \***************************************************************************/
/*! exports provided: IntroTenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroTenComponent", function() { return IntroTenComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroTenComponent = /** @class */ (function () {
    function IntroTenComponent() {
    }
    IntroTenComponent.prototype.ngOnInit = function () {
    };
    IntroTenComponent.ɵfac = function IntroTenComponent_Factory(t) { return new (t || IntroTenComponent)(); };
    IntroTenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroTenComponent, selectors: [["app-intro-ten"]], decls: 28, vars: 4, consts: [["id", "intro-wrap", 1, "intro-ten-Wrap", "bg-primary", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-ten-LeftSection", "pb-3"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-ten-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro-ten-RightSection", "d-flex", "align-items-center"], [1, "intro-ten-ProductImage"], ["src", "./assets/images/landing/svg/v10-header4.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroTenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "More Effecient CRM Software for you.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing Pages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Authentication Pages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Super Flexible And Customizable");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby10ZW4vaW50cm8tdGVuLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroTenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroTenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-ten',
                templateUrl: './intro-ten.component.html',
                styleUrls: ['./intro-ten.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro-three/intro-three.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/intro-three/intro-three.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IntroThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroThreeComponent", function() { return IntroThreeComponent; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../landing-v3/forrutes/forrutes.component */ "./src/app/views/landing/landing-v3/forrutes/forrutes.component.ts");
/* harmony import */ var _landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../landing-v3/start/start.component */ "./src/app/views/landing/landing-v3/start/start.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "400ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var IntroThreeComponent = /** @class */ (function () {
    function IntroThreeComponent(dialog) {
        this.dialog = dialog;
    }
    IntroThreeComponent.prototype.ngOnInit = function () {
    };
    IntroThreeComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_2__["ForrutesComponent"], {
            width: '1050px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IntroThreeComponent.prototype.openDialog1 = function () {
        var dialogRef = this.dialog.open(_landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], {
            width: '1050px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    IntroThreeComponent.ɵfac = function IntroThreeComponent_Factory(t) { return new (t || IntroThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
    IntroThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IntroThreeComponent, selectors: [["app-intro-three"]], decls: 28, vars: 4, consts: [["id", "intro-wrap", 1, "intro-three-Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro-three-LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro-three-Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button", 3, "click"], ["id", "", "routerLink", "/sessions/signup", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button", 3, "click"], [1, "col-md-6", "intro-three-RightSection", "d-flex", "align-items-center"], [1, "intro-three-ProductImage"], ["src", "./assets/images/landing/svg/v3-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function IntroThreeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Digitalize your Learning with NamasteGurus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "We let your mind thrive ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Best platform to conduct online classes for schools and individuals ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Personalized home tuitions");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Conduct your own webinars");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntroThreeComponent_Template_a_click_20_listener() { return ctx.openDialog1(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IntroThreeComponent_Template_a_click_22_listener() { return ctx.openDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRyby10aHJlZS9pbnRyby10aHJlZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return IntroThreeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IntroThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-intro-three',
                templateUrl: './intro-three.component.html',
                styleUrls: ['./intro-three.component.scss'],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro1/intro1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/intro1/intro1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Intro1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro1Component", function() { return Intro1Component; });
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var _c0 = function () { return { x: "200px", opacity: "0", delay: "100ms", duration: "500ms" }; };
var _c1 = function (a1) { return { value: "*", params: a1 }; };
var Intro1Component = /** @class */ (function () {
    function Intro1Component() {
    }
    Intro1Component.prototype.ngOnInit = function () { };
    Intro1Component.ɵfac = function Intro1Component_Factory(t) { return new (t || Intro1Component)(); };
    Intro1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Intro1Component, selectors: [["app-intro1"]], decls: 25, vars: 4, consts: [["id", "intro-wrap", 1, "intro1Wrap", "text-left", "text-white"], [1, "container"], [1, "row"], [1, "col-md-6", "intro1LeftSection", "pb-5"], [1, "font-weight-bold", "text-white", "text-42", "mb-3", "t-shadow"], [1, "text-20", "mb-4"], [1, "mb-5", "lead"], [1, "list-inline"], [1, "mb-3"], [1, "eva", "eva-checkmark-outline", "mr-2", "text-warning"], [1, "intro1Buttons"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "col-md-6", "intro1RightSection", "d-flex", "align-items-center"], [1, "intro1ProductImage"], ["src", "./assets/images/landing/svg/v1-header.svg", "alt", "", 1, "img-responsive"], [1, "overlay"]], template: function Intro1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Your complete Angular App Landing Page ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing template. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Minimal, Intuitive and Fully Responsive Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Super Flexible And Customizable ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@animate", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0)));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRybzEvaW50cm8xLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]] } });
    return Intro1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Intro1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-intro1",
                templateUrl: "./intro1.component.html",
                styleUrls: ["./intro1.component.scss"],
                animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_0__["SharedAnimations"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/intro2/intro2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/intro2/intro2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Intro2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro2Component", function() { return Intro2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var Intro2Component = /** @class */ (function () {
    function Intro2Component() {
    }
    Intro2Component.prototype.ngOnInit = function () {
    };
    Intro2Component.ɵfac = function Intro2Component_Factory(t) { return new (t || Intro2Component)(); };
    Intro2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Intro2Component, selectors: [["app-intro2"]], decls: 18, vars: 0, consts: [["id", "intro-wrap", 1, "intro2Wrap", "text-white", "text-center"], [1, "container"], [1, "row"], [1, "col-sm"], [1, "intro2subtitle"], [1, "font-weight-bold", "mb-3", "text-white"], [1, "intro2Title", "font-weight-bold", "text-42", "t-shadow", "mb-3", "text-white"], [1, "intro2Description", "text-18"], [1, "mb-4"], [1, "intro2Buttons", "mb-5"], ["name", "", "id", "", "routerLink", "/sessions/signin", "href", "#", "role", "button", 1, "btn", "btn-outline-white", "btn-lg", "pl-5", "pr-5", "pb-2", "mr-2", "mb-4", "text-uppercase", "half-button"], ["id", "", "routerLink", "/sessions/signup", "href", "#", "role", "button", 1, "btn", "btn-warning", "btn-lg", "pl-5", "pr-5", "pb-2", "mb-4", "text-uppercase", "half-button"], [1, "overlay"]], template: function Intro2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dexam Angular Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Build Your Business With Secure Data");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Meet Dexam Highly customizable Angular 9 + Bootstrap 4 Landing template. Dexam is built with Official @angular/cli tool and uses NG Bootstrap and third-party packages. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9pbnRybzIvaW50cm8yLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Intro2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Intro2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro2',
                templateUrl: './intro2.component.html',
                styleUrls: ['./intro2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/left-image/left-image.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/landing/components/left-image/left-image.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LeftImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftImageComponent", function() { return LeftImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function LeftImageComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r374 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r374.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var LeftImageComponent = /** @class */ (function () {
    function LeftImageComponent() {
        this.carouselTileItems = [
            {
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
                photo: "./assets/images/landing/svg/slider8.svg"
            },
            {
                photo: "./assets/images/landing/svg/slider7.svg"
                // photo: "./assets/images/landing/app_screenshots/550/02.png"
            },
            {
                photo: "./assets/images/landing/svg/slider9.svg"
                // photo: "./assets/images/landing/app_screenshots/550/03.png"
            },
            {
                photo: "./assets/images/landing/svg/slider10.svg"
                // photo: "./assets/images/landing/app_screenshots/550/04.png"
            },
            {
                photo: "./assets/images/landing/svg/slider1.svg"
                // photo: "./assets/images/landing/app_screenshots/550/05.png"
            },
            {
                photo: "./assets/images/landing/svg/slider4.svg"
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 1,
            velocity: 0,
            touch: true,
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
    }
    LeftImageComponent.prototype.ngOnInit = function () { };
    LeftImageComponent.ɵfac = function LeftImageComponent_Factory(t) { return new (t || LeftImageComponent)(); };
    LeftImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftImageComponent, selectors: [["app-left-image"]], decls: 39, vars: 6, consts: [[1, "left-image-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-5", "mb-lg-0", "mb-md-0", "mt-mb-5", "mt-lg-5"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "col-md-5", "offset-md-1", "col-sm-12"], [1, "col-md-12", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "pt-3", "pb-3"], [1, "card-title", "font-weight-bold"], [1, "m-0"], [1, "col-md-12", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["alt", "Card image cap", 1, "img-responsive", "w-100", "mb-4", 3, "src"]], template: function LeftImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We Ready to Provide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeftImageComponent_ngu_tile_11_Template, 2, 1, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sales and Marketing Alignment");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Relationship-based Engagement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Transparent Pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r372 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r372.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r372.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9sZWZ0LWltYWdlL2xlZnQtaW1hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LeftImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-left-image",
                templateUrl: "./left-image.component.html",
                styleUrls: ["./left-image.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/news-two/news-two.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/news-two/news-two.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewsTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsTwoComponent", function() { return NewsTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var NewsTwoComponent = /** @class */ (function () {
    function NewsTwoComponent() {
    }
    NewsTwoComponent.prototype.ngOnInit = function () {
    };
    NewsTwoComponent.ɵfac = function NewsTwoComponent_Factory(t) { return new (t || NewsTwoComponent)(); };
    NewsTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsTwoComponent, selectors: [["app-news-two"]], decls: 39, vars: 0, consts: [["id", "news-wrap", 1, "news-two-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-4"], [1, "card", "text-left", "o-hidden"], [1, "card_img_left", "w-40", "float-left"], ["src", "./assets/images/landing/news/news1.svg", "alt", "Card image", 1, "card-img"], [1, "card_right_content", "w-60", "p-3", "float-right"], [1, "pt-3", "pb-4"], [1, "m-0", "text-capitalize", "font-weight-bold"], [1, "font-weight-light", "text-uppercase"], [1, "font-weight-light", "pb-3"], ["routerLink", "/landing/blog-details", 1, "btn", "btn-gradient", "half-button"], [1, "col-md-6", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-0"], ["src", "./assets/images/landing/news/news2.svg", "alt", "Card image", 1, "card-img"]], template: function NewsTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent News From Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Beauty of Sunshine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "by Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Never look backward");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "by Smith Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9uZXdzLXR3by9uZXdzLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NewsTwoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-two',
                templateUrl: './news-two.component.html',
                styleUrls: ['./news-two.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/news/news.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/news/news.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 72, vars: 0, consts: [["id", "news-wrap", 1, "news-wrap", "light-gray", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-4"], [1, "card", "bg-dark", "text-white", "o-hidden"], ["src", "./assets/images/landing/news/news1.jpg", "alt", "Card image", 1, "card-img"], [1, "card-img-overlay"], [1, "text-center", "pt-4"], [1, "font-weight-bold", "mb-2", "text-white"], ["routerLink", "/landing/blog-details", 1, "btn", "btn-gradient", "half-button"], [1, "p-1", "text-left", "card-footer", "font-weight-light"], [1, "mr-2"], [1, "eva", "eva-message-circle-outline", "text-white", "mr-1"], [1, "eva", "eva-calendar-outline", "text-white", "mr-1"], [1, ""], [1, "eva", "eva-person-outline", "text-white", "mr-1"], ["src", "./assets/images/landing/news/news4.jpg", "alt", "Card image", 1, "card-img"], ["src", "./assets/images/landing/news/news3.jpg", "alt", "Card image", 1, "card-img"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent News From Blog");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit, sequi quisquam repellendus corporis adipisci veniam! Mollitia suscipit excepturi laboriosam rem ut voluptas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Read More");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "03.12.2018");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Alex Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MifQ== */"] });
    return NewsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/pricing-one/pricing-one.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PricingOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingOneComponent", function() { return PricingOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PricingOneComponent = /** @class */ (function () {
    function PricingOneComponent() {
    }
    PricingOneComponent.prototype.ngOnInit = function () {
    };
    PricingOneComponent.ɵfac = function PricingOneComponent_Factory(t) { return new (t || PricingOneComponent)(); };
    PricingOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingOneComponent, selectors: [["app-pricing-one"]], decls: 136, vars: 0, consts: [["id", "pricing-wrap", 1, "pricing-one-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-4", "pricing-single-wrap"], [1, "card", "o-hidden"], [1, "card-header", "text-center", "p-3", "mb-2"], [1, "card-title", "font-weight-bold", "mb-2", "text-uppercase"], [1, "text-uppercase", "mb-0"], [1, "card-body", "pt-0", "text-center"], [1, "card-text", "mb-2"], [1, "money", "text-shadow", "text-45", "font-weight-bold"], [1, "text-30", "font-weight-normal"], [1, "offer-lists", "mb-4"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "p-1"], [1, "list-group-item", "p-1", "text-muted"], ["href", "#", 1, "btn", "btn-gradient", "half-button", "pl-5", "pr-5", "pt-2", "pb-2"], [1, "card-header", "text-center", "p-3", "mb-2", "bg-gradient", "text-white"], [1, "card-title", "text-white", "font-weight-bold", "mb-2", "text-uppercase"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4", "pricing-single-wrap"], [1, "col-sm-6", "col-md-6", "col-lg-3", "mb-lg-0", "mb-md-0", "mb-sm-0", "pricing-single-wrap"]], template: function PricingOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose a Plan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "1 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "10 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "starter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "20");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "20 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "business");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "60");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "10 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "40 GB of Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "enterprise");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "sup", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "100");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, ".00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "/Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "20 Users access");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Unlimited Bandwidth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Unlimited secure storage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "24/7 phone support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Advanced branding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9wcmljaW5nLW9uZS9wcmljaW5nLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return PricingOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing-one',
                templateUrl: './pricing-one.component.html',
                styleUrls: ['./pricing-one.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/right-image/right-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/right-image/right-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RightImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightImageComponent", function() { return RightImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function RightImageComponent_ngu_tile_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r378 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r378.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var RightImageComponent = /** @class */ (function () {
    function RightImageComponent() {
        this.carouselTileItems = [
            {
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
                photo: "./assets/images/landing/svg/slider1.svg"
            },
            {
                photo: "./assets/images/landing/svg/slider2.svg"
                // photo: "./assets/images/landing/app_screenshots/550/02.png"
            },
            {
                photo: "./assets/images/landing/svg/slider3.svg"
                // photo: "./assets/images/landing/app_screenshots/550/03.png"
            },
            {
                photo: "./assets/images/landing/svg/slider4.svg"
                // photo: "./assets/images/landing/app_screenshots/550/04.png"
            },
            {
                photo: "./assets/images/landing/svg/slider5.svg"
                // photo: "./assets/images/landing/app_screenshots/550/05.png"
            },
            {
                photo: "./assets/images/landing/svg/slider6.svg"
                // photo: "./assets/images/landing/app_screenshots/550/01.png"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 1,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    RightImageComponent.prototype.ngOnInit = function () { };
    RightImageComponent.ɵfac = function RightImageComponent_Factory(t) { return new (t || RightImageComponent)(); };
    RightImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightImageComponent, selectors: [["app-right-image"]], decls: 58, vars: 6, consts: [[1, "right-image-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12", "col-lg-6", "col-sm-12", "mb-4", "mb-lg-0"], [1, "row", "m-0"], [1, "col-md-6", "col-sm-6", "mb-4"], [1, "card"], [1, "card-body", "d-flex", "pt-4", "pb-4"], [1, "mr-2"], [1, "eva", "eva-pie-chart-outline", "mr-1", "text-36"], [1, ""], [1, "card-title", "font-weight-bold"], [1, "m-0"], [1, "eva", "eva-clock-outline", "mr-1", "text-36"], [1, "col-md-6", "col-sm-6", "mb-4", "mb-lg-0", "mb-md-0", "mb-sm-0"], [1, "eva", "eva-lock-outline", "mr-1", "text-36"], [1, "col-md-6", "col-sm-6", "mb-0", "mb-lg-0", "mb-md-0", "mb-sm-0"], [1, "eva", "eva-pricetags-outline", "mr-1", "text-36"], [1, "col-md-12", "col-lg-5", "col-sm-12", "offset-lg-1"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], ["alt", "Card image cap", 1, "img-responsive", "mb-4", 3, "src"]], template: function RightImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What Customer Love Most");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Full Analytics ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Diagnose quickly");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Safe & Secure");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Best Pricing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contrary to popular belief, Lorem Ipsum is not simply random text. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngu-carousel", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RightImageComponent_ngu_tile_53_Template, 2, 1, "ngu-tile", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r376.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r376.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9yaWdodC1pbWFnZS9yaWdodC1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return RightImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-right-image",
                templateUrl: "./right-image.component.html",
                styleUrls: ["./right-image.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ServicesCauroselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesCauroselComponent", function() { return ServicesCauroselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function ServicesCauroselComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r361 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r361.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r361.title);
} }
var ServicesCauroselComponent = /** @class */ (function () {
    function ServicesCauroselComponent() {
        this.carouselTileItems = [
            {
                icon: "./assets/images/landing/services/service1.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Online Private Tuitions "
            },
            {
                icon: "./assets/images/landing/services/services14.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Online Classes for schools"
            },
            {
                icon: "./assets/images/landing/services/services15.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Conducting Webinars          "
            },
            {
                icon: "./assets/images/landing/services/services16.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Basic School admin activities"
            },
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            slide: 4,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    ServicesCauroselComponent.prototype.ngOnInit = function () { };
    ServicesCauroselComponent.ɵfac = function ServicesCauroselComponent_Factory(t) { return new (t || ServicesCauroselComponent)(); };
    ServicesCauroselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesCauroselComponent, selectors: [["app-services-caurosel"]], decls: 16, vars: 6, consts: [["id", "services-wrap", 1, "services-caurosel-wrap", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "service-wrap"], [1, "card", "o-hidden", "mb-4"], [1, "card-header", "p-0", "text-left"], [1, "img-responsive", 3, "src"], [1, "card-body", "text-left"], [1, "card-title", "text-capitalize", "font-weight-bold"], [1, "card-footer", "pl-3", "text-left"], ["href", "#", 1, "btn", "btn-lg", "p-1", "mr-1", "text-dark"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"]], template: function ServicesCauroselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What NamasteGurus offer you\u2026");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NamasteGurus will provide the below online services for tutoring world.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServicesCauroselComponent_ngu_tile_11_Template, 13, 2, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r359.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r359.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9zZXJ2aWNlcy1jYXVyb3NlbC9zZXJ2aWNlcy1jYXVyb3NlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ServicesCauroselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesCauroselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-services-caurosel",
                templateUrl: "./services-caurosel.component.html",
                styleUrls: ["./services-caurosel.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/services/services.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/components/services/services.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 120, vars: 0, consts: [["id", "services-wrap", 1, "services-wrap", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "service-wrap", "col-md-6", "col-lg-3", "col-sm-12"], [1, "card", "o-hidden", "mb-4"], [1, "card-header", "p-0", "text-center"], ["src", "./assets/images/landing/services/service1.svg", 1, "img-responsive"], [1, "card-body"], [1, "card-title", "text-capitalize", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3"], ["href", "#", 1, "btn", "btn-lg", "p-1", "mr-1", "text-dark"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"], ["src", "./assets/images/landing/services/services9.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services10.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services5.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-4", "mb-lg-0"], ["src", "./assets/images/landing/services/services6.svg", 1, "img-responsive"], ["src", "./assets/images/landing/services/services14.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-4", "mb-lg-0", "mb-md-0"], ["src", "./assets/images/landing/services/services15.svg", 1, "img-responsive"], [1, "card", "o-hidden", "mb-lg-0", "mb-md-0"], ["src", "./assets/images/landing/services/services16.svg", 1, "img-responsive"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Service One");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Service Two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Service Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Service Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Service Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "With supporting text below as a natural lead-in to additional content.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Service Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Service Seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Servcie Eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "With supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ServicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/team/team.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/landing/components/team/team.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 89, vars: 0, consts: [["id", "teams-wrap", 1, "team-wrap", "p-t-b-80", "light-gray"], [1, "container"], [1, "row"], [1, "col-md-12", "section-header", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-4"], [1, "card", "card-profile-1"], [1, "card-body", "text-center"], [1, "avatar", "box-shadow-2", "mb-3"], ["src", "./assets/images/landing/faces/15.jpg", "alt", ""], [1, "font-weight-medium", "card-title", "m-0"], [1, "mt-0"], [1, "btn", "btn-gradient", "half-button"], [1, "card-socials-simple", "mt-4"], ["href", "", 1, "text-20", "mr-2"], [1, "eva", "eva-twitter", "twitter"], [1, "eva", "eva-google", "google"], [1, "eva", "eva-facebook", "facebook"], ["src", "./assets/images/landing/faces/12.jpg", "alt", ""], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4"], ["src", "./assets/images/landing/faces/16.jpg", "alt", ""], [1, "col-md-6", "col-lg-3", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["src", "./assets/images/landing/faces/5.jpg", "alt", ""]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meet our Team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Jhon Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "UI/UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact Jhon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Jassica Pearl");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "QA Tester");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contact Jassica");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kara Smith");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Backend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Contact Kara");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mike Danvers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Frontend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Contact Mike");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MifQ== */"] });
    return TeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TestimonialCauroselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialCauroselComponent", function() { return TestimonialCauroselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function TestimonialCauroselComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r365 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r365.testimonial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r365.user_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r365.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r365.user_designation);
} }
var TestimonialCauroselComponent = /** @class */ (function () {
    function TestimonialCauroselComponent() {
        this.carouselTileItems = [
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/15.jpg",
                user_name: "Jhone Doe",
                user_designation: "Software Engineer"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/3.jpg",
                user_name: "Smith DOe",
                user_designation: "Creative Manager"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/5.jpg",
                user_name: "Micheal Clark",
                user_designation: "Marketing Manager"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/12.jpg",
                user_name: "Jassica june",
                user_designation: "Frontend Developer"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/13.jpg",
                user_name: "Gray Simon",
                user_designation: "Production Leader"
            },
            {
                testimonial: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                user_image: "./assets/images/landing/faces/5.jpg",
                user_name: "Jhone Doe",
                user_designation: "Software Engineer"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    TestimonialCauroselComponent.prototype.ngOnInit = function () { };
    TestimonialCauroselComponent.ɵfac = function TestimonialCauroselComponent_Factory(t) { return new (t || TestimonialCauroselComponent)(); };
    TestimonialCauroselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialCauroselComponent, selectors: [["app-testimonial-caurosel"]], decls: 16, vars: 6, consts: [["id", "testimonials-wrap", 1, "testimonial-caurosel-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "card", "mb-4", "p-3", "single-testimonial-wrap"], [1, "card-body", "text-left"], [1, "mb-4"], [1, "test-user-details", "text-left", "abs"], [1, "user-img", "w-20", "float-left", "mr-1"], ["alt", "", 1, "rounded-circle", 3, "src"], [1, "user-name", "font-weight-bold", "mt-1", "w-75", "float-right"], [1, "user-designation", "w-75", "float-right"]], template: function TestimonialCauroselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What our customers says");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestimonialCauroselComponent_ngu_tile_11_Template, 12, 4, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r363.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r363.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZXN0aW1vbmlhbC1jYXVyb3NlbC90ZXN0aW1vbmlhbC1jYXVyb3NlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TestimonialCauroselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialCauroselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-testimonial-caurosel",
                templateUrl: "./testimonial-caurosel.component.html",
                styleUrls: ["./testimonial-caurosel.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/testimonial/testimonial.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/landing/components/testimonial/testimonial.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TestimonialComponent = /** @class */ (function () {
    function TestimonialComponent() {
    }
    TestimonialComponent.prototype.ngOnInit = function () {
    };
    TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) { return new (t || TestimonialComponent)(); };
    TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialComponent, selectors: [["app-testimonial"]], decls: 80, vars: 0, consts: [["id", "testimonials-wrap", 1, "testimonial-wrap", "p-t-b-80"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-4", "single-testimonial-wrap"], [1, "card", "p-3"], [1, "card-body"], [1, "mb-4"], [1, "test-user-details", "text-left", "abs"], [1, "user-img", "w-20", "float-left", "mr-1"], ["src", "./assets/images/landing/faces/15.jpg", "alt", "", 1, "rounded-circle"], [1, "user-name", "font-weight-bold", "mt-1", "w-75", "float-right"], [1, "user-designation", "w-75", "float-right"], ["src", "./assets/images/landing/faces/2.jpg", "alt", "", 1, "rounded-circle"], ["src", "./assets/images/landing/faces/3.jpg", "alt", "", 1, "rounded-circle"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-lg-0", "mb-4", "single-testimonial-wrap"], ["src", "./assets/images/landing/faces/5.jpg", "alt", "", 1, "rounded-circle"], ["src", "./assets/images/landing/faces/12.jpg", "alt", "", 1, "rounded-circle"], [1, "col-md-6", "col-lg-4", "col-sm-12", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-0", "single-testimonial-wrap"], ["src", "./assets/images/landing/faces/13.jpg", "alt", "", 1, "rounded-circle"]], template: function TestimonialComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What our customers says");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Jhone Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Alex Dan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Creative Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Smith Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Assistant Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Micheal Clark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Marketing Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Jassica June");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Frontend Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Gray Simon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Production Leader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return TestimonialComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonial',
                templateUrl: './testimonial.component.html',
                styleUrls: ['./testimonial.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/landing/components/works-carousel/works-carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WorksCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksCarouselComponent", function() { return WorksCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");



function WorksCarouselComponent_ngu_tile_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r357 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r357.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r357.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r357.text, " ");
} }
var WorksCarouselComponent = /** @class */ (function () {
    function WorksCarouselComponent() {
        this.carouselTileItems = [
            {
                photo: "./assets/images/landing/products/products9.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project One"
            },
            {
                photo: "./assets/images/landing/products/products11.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Two"
            },
            {
                photo: "./assets/images/landing/products/products15.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Three"
            },
            {
                photo: "./assets/images/landing/products/products17.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Four"
            },
            {
                photo: "./assets/images/landing/products/products13.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Five"
            },
            {
                photo: "./assets/images/landing/products/products12.svg",
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus\n    vitae dignissimos, sapiente est atque tenetur",
                title: "Project Six"
            }
        ];
        this.carouselTiles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        };
        this.carouselTile = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 250,
            point: {
                visible: true
            },
            load: 2,
            velocity: 0,
            touch: true,
            easing: "cubic-bezier(0, 0, 0.2, 1)"
        };
    }
    WorksCarouselComponent.prototype.ngOnInit = function () { };
    WorksCarouselComponent.ɵfac = function WorksCarouselComponent_Factory(t) { return new (t || WorksCarouselComponent)(); };
    WorksCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksCarouselComponent, selectors: [["app-works-carousel"]], decls: 16, vars: 6, consts: [["id", "works-wrap", 1, "work-carousel-wrap"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-12"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", 1, "ngu_control_button", "half-button", "leftRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-left-outline"], ["NguCarouselNext", "", 1, "ngu_control_button", "half-button", "rightRs", "btn", "btn-circle", "btn-white", "btn-shadow"], [1, "eva", "eva-chevron-right-outline"], [1, "card", "text-left", "o-hidden", "mb-4"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3"], ["href", "#", 1, "btn", "btn-lg", "p-1", "mr-1", "text-dark"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"]], template: function WorksCarouselComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngu-carousel", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WorksCarouselComponent_ngu_tile_11_Template, 13, 3, "ngu-tile", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.carouselTile)("dataSource", ctx.carouselTileItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r355.isFirst ? 0.5 : 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", _r355.isLast ? 0.5 : 1);
        } }, directives: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵg"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵe"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵd"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_1__["ɵj"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy93b3Jrcy1jYXJvdXNlbC93b3Jrcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return WorksCarouselComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-works-carousel",
                templateUrl: "./works-carousel.component.html",
                styleUrls: ["./works-carousel.component.scss"]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works1/works1.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/works1/works1.component.ts ***!
  \*********************************************************************/
/*! exports provided: Works1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Works1Component", function() { return Works1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Works1Component = /** @class */ (function () {
    function Works1Component() {
    }
    Works1Component.prototype.ngOnInit = function () {
    };
    Works1Component.ɵfac = function Works1Component_Factory(t) { return new (t || Works1Component)(); };
    Works1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Works1Component, selectors: [["app-works1"]], decls: 86, vars: 0, consts: [["id", "works-wrap", 1, "work1Wrap"], [1, "container"], [1, "row"], [1, "section-header", "col-md-12", "mb-5"], [1, "font-weight-bold"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-4"], [1, "card", "o-hidden"], ["src", "./assets/images/landing/products/products9.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "font-weight-bold"], [1, "card-text"], [1, "card-footer", "pl-3"], ["href", "#", 1, "btn", "btn-lg", "p-1", "text-dark", "mr-1"], [1, "eva", "eva-link-2-outline"], [1, "eva", "eva-share"], ["src", "./assets/images/landing/products/products15.svg", "alt", "Card image cap", 1, "card-img-top"], ["src", "./assets/images/landing/products/products11.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-4"], ["src", "./assets/images/landing/products/products12.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0", "mb-4"], ["src", "./assets/images/landing/products/products14.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "col-md-6", "col-lg-4", "col-sm-6", "mb-lg-0", "mb-md-0", "mb-sm-0"], ["src", "./assets/images/landing/products/products17.svg", "alt", "Card image cap", 1, "card-img-top"]], template: function Works1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Recent Works");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Work one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Work two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Work Three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Work Four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Work Five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Work Six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Some quick example text to build on the card title and make up the bulk of the card's content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy93b3JrczEvd29ya3MxLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Works1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Works1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works1',
                templateUrl: './works1.component.html',
                styleUrls: ['./works1.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/components/works2/works2.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/landing/components/works2/works2.component.ts ***!
  \*********************************************************************/
/*! exports provided: Works2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Works2Component", function() { return Works2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Works2Component = /** @class */ (function () {
    function Works2Component() {
    }
    Works2Component.prototype.ngOnInit = function () {
    };
    Works2Component.ɵfac = function Works2Component_Factory(t) { return new (t || Works2Component)(); };
    Works2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Works2Component, selectors: [["app-works2"]], decls: 3, vars: 0, consts: [[1, "work2Wrap"], [1, "container"], [1, "row"]], template: function Works2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvY29tcG9uZW50cy93b3JrczIvd29ya3MyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Works2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Works2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-works2',
                templateUrl: './works2.component.html',
                styleUrls: ['./works2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/helpers/scrollTo.directives.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/landing/helpers/scrollTo.directives.ts ***!
  \**************************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ScrollToDirective = /** @class */ (function () {
    function ScrollToDirective(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ScrollToDirective.prototype.ngOnInit = function () { };
    ScrollToDirective.prototype.currentYPosition = function () {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    };
    ScrollToDirective.prototype.elmYPosition = function (eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    };
    ScrollToDirective.prototype.smoothScroll = function (e) {
        // console.log(e);
        e.preventDefault();
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    };
    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]("scrollTo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "scrollTo", ""]], hostBindings: function ScrollToDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) { return ctx.smoothScroll($event); });
        } } });
    return ScrollToDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: "[scrollTo]" }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
                args: ["scrollTo"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/views/landing/helpers/window.helpers.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/landing/helpers/window.helpers.ts ***!
  \*********************************************************/
/*! exports provided: _window, WINDOW, WindowRef, BrowserWindowRef, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


function _window() {
    return window;
}
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("WindowToken");
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error("Not implemented.");
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
    return BrowserWindowRef;
}(WindowRef));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
var windowProvider = {
    provide: WINDOW,
    useFactory: _window,
    deps: []
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];


/***/ }),

/***/ "./src/app/views/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-details-page/blog-details-page.component */ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts");
/* harmony import */ var _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-v4/landing-v4.component */ "./src/app/views/landing/landing-v4/landing-v4.component.ts");
/* harmony import */ var _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-v2/landing-v2.component */ "./src/app/views/landing/landing-v2/landing-v2.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-v1/landing-v1.component */ "./src/app/views/landing/landing-v1/landing-v1.component.ts");
/* harmony import */ var _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-v3/landing-v3.component */ "./src/app/views/landing/landing-v3/landing-v3.component.ts");
/* harmony import */ var _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-v5/landing-v5.component */ "./src/app/views/landing/landing-v5/landing-v5.component.ts");
/* harmony import */ var _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-v6/landing-v6.component */ "./src/app/views/landing/landing-v6/landing-v6.component.ts");
/* harmony import */ var _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-v7/landing-v7.component */ "./src/app/views/landing/landing-v7/landing-v7.component.ts");
/* harmony import */ var _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-v8/landing-v8.component */ "./src/app/views/landing/landing-v8/landing-v8.component.ts");
/* harmony import */ var _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-v9/landing-v9.component */ "./src/app/views/landing/landing-v9/landing-v9.component.ts");
/* harmony import */ var _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-v10/landing-v10.component */ "./src/app/views/landing/landing-v10/landing-v10.component.ts");
/* harmony import */ var _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/demos/demos.component */ "./src/app/views/landing/components/demos/demos.component.ts");
/* harmony import */ var _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing-v11/landing-v11.component */ "./src/app/views/landing/landing-v11/landing-v11.component.ts");

















var routes = [
    {
        path: "",
        component: _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_6__["LandingV3Component"]
    },
    {
        path: "v1",
        component: _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_5__["LandingV1Component"]
    },
    {
        path: "v2",
        component: _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_3__["LandingV2Component"]
    },
    {
        path: "v3",
        component: _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_6__["LandingV3Component"]
    },
    {
        path: "v4",
        component: _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_2__["LandingV4Component"]
    },
    {
        path: "v5",
        component: _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_7__["LandingV5Component"]
    },
    {
        path: "v6",
        component: _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_8__["LandingV6Component"]
    },
    {
        path: "v7",
        component: _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_9__["LandingV7Component"]
    },
    {
        path: "v8",
        component: _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_10__["LandingV8Component"]
    },
    {
        path: "v9",
        component: _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_11__["LandingV9Component"]
    },
    {
        path: "v10",
        component: _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_12__["LandingV10Component"]
    },
    {
        path: "v11",
        component: _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_14__["LandingV11Component"]
    },
    {
        path: "blog-details",
        component: _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_1__["BlogDetailsPageComponent"]
    },
    {
        path: "demos",
        component: _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_13__["DemosComponent"]
    }
];
var LandingRoutingModule = /** @class */ (function () {
    function LandingRoutingModule() {
    }
    LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
    LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
    return LandingRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v1/landing-v1.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v1/landing-v1.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV1Component", function() { return LandingV1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro1/intro1.component */ "./src/app/views/landing/components/intro1/intro1.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV1Component = /** @class */ (function () {
    function LandingV1Component() {
        this.backgroundColor = "landing-gradient-red-orange";
        this.showCustomizer = false;
    }
    LandingV1Component.prototype.ngOnInit = function () { };
    LandingV1Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV1Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV1Component.ɵfac = function LandingV1Component_Factory(t) { return new (t || LandingV1Component)(); };
    LandingV1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV1Component, selectors: [["app-landing-v1"]], decls: 42, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_26_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_27_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_28_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_29_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_30_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_31_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_32_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_33_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_34_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_35_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_36_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_37_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_38_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_39_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV1Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_3__["Intro1Component"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MS9sYW5kaW5nLXYxLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v1",
                templateUrl: "./landing-v1.component.html",
                styleUrls: ["./landing-v1.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v10/landing-v10.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/landing/landing-v10/landing-v10.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingV10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV10Component", function() { return LandingV10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-ten/intro-ten.component */ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV10Component = /** @class */ (function () {
    function LandingV10Component() {
        this.backgroundColor = "landing-purple";
        this.showCustomizer = false;
    }
    LandingV10Component.prototype.ngOnInit = function () { };
    LandingV10Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV10Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV10Component.ɵfac = function LandingV10Component_Factory(t) { return new (t || LandingV10Component)(); };
    LandingV10Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV10Component, selectors: [["app-landing-v10"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV10Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-ten");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV10Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_3__["IntroTenComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MTAvbGFuZGluZy12MTAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LandingV10Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV10Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v10",
                templateUrl: "./landing-v10.component.html",
                styleUrls: ["./landing-v10.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v11/landing-v11.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/landing/landing-v11/landing-v11.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingV11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV11Component", function() { return LandingV11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-eleven/intro-eleven.component */ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV11Component = /** @class */ (function () {
    function LandingV11Component() {
        this.backgroundColor = "landing-gradient-steel-gray";
        this.showCustomizer = false;
    }
    LandingV11Component.prototype.ngOnInit = function () {
    };
    LandingV11Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV11Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV11Component.ɵfac = function LandingV11Component_Factory(t) { return new (t || LandingV11Component)(); };
    LandingV11Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV11Component, selectors: [["app-landing-v11"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV11Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-eleven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV11Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_3__["IntroElevenComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12MTEvbGFuZGluZy12MTEuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LandingV11Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV11Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v11',
                templateUrl: './landing-v11.component.html',
                styleUrls: ['./landing-v11.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v2/landing-v2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v2/landing-v2.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV2Component", function() { return LandingV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-nine/intro-nine.component */ "./src/app/views/landing/components/intro-nine/intro-nine.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV2Component = /** @class */ (function () {
    function LandingV2Component() {
        this.backgroundColor = "landing-indigo-light";
        this.showCustomizer = false;
    }
    LandingV2Component.prototype.ngOnInit = function () { };
    LandingV2Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV2Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV2Component.ɵfac = function LandingV2Component_Factory(t) { return new (t || LandingV2Component)(); };
    LandingV2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV2Component, selectors: [["app-landing-v2"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-nine");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV2Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_3__["IntroNineComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Mi9sYW5kaW5nLXYyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v2",
                templateUrl: "./landing-v2.component.html",
                styleUrls: ["./landing-v2.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v3/forrutes/forrutes.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/landing/landing-v3/forrutes/forrutes.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForrutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForrutesComponent", function() { return ForrutesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var _c0 = function () { return ["/auth/s/signup"]; };
var _c1 = function () { return ["/auth/signup"]; };
var ForrutesComponent = /** @class */ (function () {
    function ForrutesComponent(dialog, dialogRef) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
    }
    ForrutesComponent.prototype.ngOnInit = function () {
    };
    ForrutesComponent.prototype.openDialog = function () {
        // const dialogRef = this.dialog.open(SignupComponent, {
        //   width: '1050px'   
        // });
        this.onNoClick();
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed'); 
        // });
    };
    ForrutesComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ForrutesComponent.ɵfac = function ForrutesComponent_Factory(t) { return new (t || ForrutesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    ForrutesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForrutesComponent, selectors: [["app-forrutes"]], decls: 15, vars: 4, consts: [[1, "p-0"], [1, "row", "p-0"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-8", "p-0", "small", 2, "background-color", "rgba(3, 94, 230, 0.52)"], ["src", "../../../assets/side.PNG", "alt", "", 2, "width", "inherit", "padding", "0"], [1, "col-12", "col-sm-6", "col-md-5", "col-lg-3", "p-0"], ["src", "./../../../assets/Capture.PNG", "alt", "", 2, "height", "30vh", "width", "inherit"], [1, "row", 2, "overflow-x", "hidden"], [1, "col-5", "ml-3"], ["routerLinkActive", "router-link-active", "src", "../../../assets/student.PNG", 2, "width", "inherit", "margin-left", "10px", 3, "routerLink", "click"], [2, "width", "inherit", "height", "30vh", "margin-left", "10px", "text-align", "center"], [1, "col-5"], ["routerLinkActive", "router-link-active", "src", "../../../assets/teacher.PNG", 2, "width", "inherit", "margin-left", "10px", "cursor", "pointer", 3, "routerLink", "click"], [2, "width", "inherit", "margin-left", "10px", "text-align", "center"]], template: function ForrutesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForrutesComponent_Template_img_click_8_listener() { return ctx.openDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Student");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForrutesComponent_Template_img_click_12_listener() { return ctx.openDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teacher");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12My9mb3JydXRlcy9mb3JydXRlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ForrutesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForrutesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forrutes',
                templateUrl: './forrutes.component.html',
                styleUrls: ['./forrutes.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v3/landing-v3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v3/landing-v3.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV3Component", function() { return LandingV3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/intro-three/intro-three.component */ "./src/app/views/landing/components/intro-three/intro-three.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");














var _c0 = function (a0) { return [a0]; };
var LandingV3Component = /** @class */ (function () {
    function LandingV3Component(dialog) {
        this.dialog = dialog;
        this.backgroundColor = "landing-gradient-meridian";
        this.showCustomizer = false;
    }
    LandingV3Component.prototype.ngOnInit = function () {
    };
    LandingV3Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV3Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV3Component.ɵfac = function LandingV3Component_Factory(t) { return new (t || LandingV3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
    LandingV3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV3Component, selectors: [["app-landing-v3"]], decls: 10, vars: 3, consts: [[1, "landing_wrap", 3, "ngClass"]], template: function LandingV3Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-three");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.backgroundColor));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_4__["IntroThreeComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_6__["ServicesCauroselComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_7__["LeftImageComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_8__["TeamComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_9__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12My9sYW5kaW5nLXYzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV3Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v3',
                templateUrl: './landing-v3.component.html',
                styleUrls: ['./landing-v3.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v3/start/start.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/landing/landing-v3/start/start.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var _c0 = function () { return ["/auth/s/signin"]; };
var _c1 = function () { return ["/auth/signin"]; };
var StartComponent = /** @class */ (function () {
    function StartComponent(dialog, dialogRef) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype.openDialog = function () {
        // const dialogRef = this.dialog.open(SignupComponent, {
        //   width: '1050px'   
        // });
        this.onNoClick();
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log('The dialog was closed'); 
        // });
    };
    StartComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
    StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 15, vars: 4, consts: [[1, "p-0"], [1, "row", "p-0"], [1, "col-12", "col-sm-6", "col-md-6", "col-lg-8", "p-0", "small", 2, "background-color", "rgba(3, 94, 230, 0.52)"], ["src", "../../../assets/side.PNG", "alt", "", 2, "width", "inherit", "padding", "0"], [1, "col-12", "col-sm-6", "col-md-5", "col-lg-3", "p-0"], ["src", "./../../../assets/Capture.PNG", "alt", "", 2, "height", "30vh", "width", "inherit"], [1, "row", 2, "overflow-x", "hidden"], [1, "col-5", "ml-3"], ["routerLinkActive", "router-link-active", "src", "../../../assets/student.PNG", 2, "width", "inherit", "margin-left", "10px", 3, "routerLink", "click"], [2, "width", "inherit", "height", "30vh", "margin-left", "10px", "text-align", "center"], [1, "col-5"], ["routerLinkActive", "router-link-active", "src", "../../../assets/teacher.PNG", 2, "width", "inherit", "margin-left", "10px", "cursor", "pointer", 3, "routerLink", "click"], [2, "width", "inherit", "margin-left", "10px", "text-align", "center"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_img_click_8_listener() { return ctx.openDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Student");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_img_click_12_listener() { return ctx.openDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Teacher");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12My9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return StartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v4/landing-v4.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v4/landing-v4.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV4Component", function() { return LandingV4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-four/intro-four.component */ "./src/app/views/landing/components/intro-four/intro-four.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV4Component = /** @class */ (function () {
    function LandingV4Component() {
        this.backgroundColor = "landing-red-light";
        this.showCustomizer = false;
    }
    LandingV4Component.prototype.ngOnInit = function () { };
    LandingV4Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV4Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV4Component.ɵfac = function LandingV4Component_Factory(t) { return new (t || LandingV4Component)(); };
    LandingV4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV4Component, selectors: [["app-landing-v4"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV4Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-four");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV4Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_3__["IntroFourComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12NC9sYW5kaW5nLXY0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV4Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v4",
                templateUrl: "./landing-v4.component.html",
                styleUrls: ["./landing-v4.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v5/landing-v5.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v5/landing-v5.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV5Component", function() { return LandingV5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-five/intro-five.component */ "./src/app/views/landing/components/intro-five/intro-five.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV5Component = /** @class */ (function () {
    function LandingV5Component() {
        this.backgroundColor = "landing-gradient-slight-ocean";
        this.showCustomizer = false;
    }
    LandingV5Component.prototype.ngOnInit = function () {
    };
    LandingV5Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV5Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV5Component.ɵfac = function LandingV5Component_Factory(t) { return new (t || LandingV5Component)(); };
    LandingV5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV5Component, selectors: [["app-landing-v5"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV5Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-five");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV5Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_3__["IntroFiveComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12NS9sYW5kaW5nLXY1LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV5Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v5',
                templateUrl: './landing-v5.component.html',
                styleUrls: ['./landing-v5.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v6/landing-v6.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v6/landing-v6.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV6Component", function() { return LandingV6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-six/intro-six.component */ "./src/app/views/landing/components/intro-six/intro-six.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV6Component = /** @class */ (function () {
    function LandingV6Component() {
        this.backgroundColor = "landing-gradient-blue-red";
        this.showCustomizer = false;
    }
    LandingV6Component.prototype.ngOnInit = function () { };
    LandingV6Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV6Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV6Component.ɵfac = function LandingV6Component_Factory(t) { return new (t || LandingV6Component)(); };
    LandingV6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV6Component, selectors: [["app-landing-v6"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV6Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-six");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV6Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_3__["IntroSixComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Ni9sYW5kaW5nLXY2LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV6Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v6",
                templateUrl: "./landing-v6.component.html",
                styleUrls: ["./landing-v6.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v7/landing-v7.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v7/landing-v7.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV7Component", function() { return LandingV7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-seven/intro-seven.component */ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV7Component = /** @class */ (function () {
    function LandingV7Component() {
        this.backgroundColor = "landing-gradient-purple-indigo";
        this.showCustomizer = false;
    }
    LandingV7Component.prototype.ngOnInit = function () {
    };
    LandingV7Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV7Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV7Component.ɵfac = function LandingV7Component_Factory(t) { return new (t || LandingV7Component)(); };
    LandingV7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV7Component, selectors: [["app-landing-v7"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV7Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-seven");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial-caurosel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV7Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_3__["IntroSevenComponent"], _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesTwoComponent"], _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_5__["ServicesCauroselComponent"], _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_6__["Works1Component"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialCauroselComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12Ny9sYW5kaW5nLXY3LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV7Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-v7',
                templateUrl: './landing-v7.component.html',
                styleUrls: ['./landing-v7.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v8/landing-v8.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v8/landing-v8.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV8Component", function() { return LandingV8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro-eight/intro-eight.component */ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV8Component = /** @class */ (function () {
    function LandingV8Component() {
        this.backgroundColor = "landing-indigo-deep";
        this.showCustomizer = false;
    }
    LandingV8Component.prototype.ngOnInit = function () { };
    LandingV8Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV8Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV8Component.ɵfac = function LandingV8Component_Factory(t) { return new (t || LandingV8Component)(); };
    LandingV8Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV8Component, selectors: [["app-landing-v8"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV8Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro-eight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV8Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_3__["IntroEightComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12OC9sYW5kaW5nLXY4LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV8Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV8Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v8",
                templateUrl: "./landing-v8.component.html",
                styleUrls: ["./landing-v8.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing-v9/landing-v9.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/landing/landing-v9/landing-v9.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingV9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingV9Component", function() { return LandingV9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/intro2/intro2.component */ "./src/app/views/landing/components/intro2/intro2.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");


















var _c0 = function (a0) { return [a0]; };
var _c1 = function (a0) { return { show: a0 }; };
var LandingV9Component = /** @class */ (function () {
    function LandingV9Component() {
        this.backgroundColor = "landing-sky-blue";
        this.showCustomizer = false;
    }
    LandingV9Component.prototype.ngOnInit = function () { };
    LandingV9Component.prototype.changeBg = function (colorName) {
        this.backgroundColor = "landing-" + colorName;
    };
    LandingV9Component.prototype.toggleCustomizer = function () {
        this.showCustomizer = !this.showCustomizer;
    };
    LandingV9Component.ɵfac = function LandingV9Component_Factory(t) { return new (t || LandingV9Component)(); };
    LandingV9Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingV9Component, selectors: [["app-landing-v9"]], decls: 56, vars: 6, consts: [[1, "landing_wrap", 3, "ngClass"], [1, "customizer", "card", 3, "ngClass"], [1, "row"], [1, "col-md-12"], [1, "setting_wrap", 3, "click"], [1, "eva", "eva-settings-2-outline", "animated", "infinite", "rotateInUpLeft"], [1, ""], [1, "card-body"], [1, "card-title"], ["name", "", "id", "", "role", "button", 1, "btn", "teal", "btn-circle", "m-2", 3, "click"], ["name", "", "id", "", "role", "button", 1, "btn", "blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "midnight-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "dark-purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "purple", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "pink", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "slate-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-purple-indigo", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-blue-red", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-black-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-steel-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-grade-gray", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cristal-clear", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-cool-blue", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-moonlight-asteriod", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-hervey", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-altra-violet", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-slight-ocean", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-red-sunset", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-quepal", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-lawrencium", "btn-circle", "m-2", 3, "click"], ["role", "button", 1, "btn", "gradient-meridian", "btn-circle", "m-2", 3, "click"]], template: function LandingV9Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-services");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-best");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-left-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-right-image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-pricing-one");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-team");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-testimonial");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-news-two");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-faqs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_div_click_19_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Solid Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_25_listener() { return ctx.changeBg("teal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_26_listener() { return ctx.changeBg("blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_27_listener() { return ctx.changeBg("midnight-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_28_listener() { return ctx.changeBg("indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_29_listener() { return ctx.changeBg("dark-purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_30_listener() { return ctx.changeBg("purple"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_31_listener() { return ctx.changeBg("pink"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_32_listener() { return ctx.changeBg("red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_33_listener() { return ctx.changeBg("gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_34_listener() { return ctx.changeBg("slate-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gradient Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_40_listener() { return ctx.changeBg("gradient-purple-indigo"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_41_listener() { return ctx.changeBg("gradient-blue-red"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_42_listener() { return ctx.changeBg("gradient-black-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_43_listener() { return ctx.changeBg("gradient-black-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_44_listener() { return ctx.changeBg("gradient-steel-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_45_listener() { return ctx.changeBg("gradient-grade-gray"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_46_listener() { return ctx.changeBg("gradient-cristal-clear"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_47_listener() { return ctx.changeBg("gradient-cool-blue"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_48_listener() { return ctx.changeBg("gradient-moonlight-asteriod"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_49_listener() { return ctx.changeBg("gradient-hervey"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_50_listener() { return ctx.changeBg("gradient-altra-violet"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_51_listener() { return ctx.changeBg("gradient-slight-ocean"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_52_listener() { return ctx.changeBg("gradient-red-sunset"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_53_listener() { return ctx.changeBg("gradient-quepal"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_54_listener() { return ctx.changeBg("gradient-lawrencium"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingV9Component_Template_a_click_55_listener() { return ctx.changeBg("gradient-meridian"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showCustomizer));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_3__["Intro2Component"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_6__["WorksCarouselComponent"], _components_best_best_component__WEBPACK_IMPORTED_MODULE_7__["BestComponent"], _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_8__["LeftImageComponent"], _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_9__["RightImageComponent"], _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_10__["PricingOneComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialComponent"], _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_13__["NewsTwoComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_14__["FaqsComponent"], _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_15__["ContactFormComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmRpbmcvbGFuZGluZy12OS9sYW5kaW5nLXY5LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return LandingV9Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingV9Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-landing-v9",
                templateUrl: "./landing-v9.component.html",
                styleUrls: ["./landing-v9.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/scrollTo.directives */ "./src/app/views/landing/helpers/scrollTo.directives.ts");
/* harmony import */ var _helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/window.helpers */ "./src/app/views/landing/helpers/window.helpers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/__ivy_ngcc__/fesm5/ngu-carousel.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/views/landing/landing-routing.module.ts");
/* harmony import */ var _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-v1/landing-v1.component */ "./src/app/views/landing/landing-v1/landing-v1.component.ts");
/* harmony import */ var _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/intro1/intro1.component */ "./src/app/views/landing/components/intro1/intro1.component.ts");
/* harmony import */ var _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/intro2/intro2.component */ "./src/app/views/landing/components/intro2/intro2.component.ts");
/* harmony import */ var _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/works1/works1.component */ "./src/app/views/landing/components/works1/works1.component.ts");
/* harmony import */ var _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/works2/works2.component */ "./src/app/views/landing/components/works2/works2.component.ts");
/* harmony import */ var _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/works-carousel/works-carousel.component */ "./src/app/views/landing/components/works-carousel/works-carousel.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/views/landing/components/services/services.component.ts");
/* harmony import */ var _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/services-caurosel/services-caurosel.component */ "./src/app/views/landing/components/services-caurosel/services-caurosel.component.ts");
/* harmony import */ var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/testimonial/testimonial.component */ "./src/app/views/landing/components/testimonial/testimonial.component.ts");
/* harmony import */ var _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/testimonial-caurosel/testimonial-caurosel.component */ "./src/app/views/landing/components/testimonial-caurosel/testimonial-caurosel.component.ts");
/* harmony import */ var _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pricing-one/pricing-one.component */ "./src/app/views/landing/components/pricing-one/pricing-one.component.ts");
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ "./src/app/views/landing/components/contact-form/contact-form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/views/landing/components/footer/footer.component.ts");
/* harmony import */ var _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./landing-v2/landing-v2.component */ "./src/app/views/landing/landing-v2/landing-v2.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/views/landing/components/features/features.component.ts");
/* harmony import */ var _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/features-two/features-two.component */ "./src/app/views/landing/components/features-two/features-two.component.ts");
/* harmony import */ var _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/best/best.component */ "./src/app/views/landing/components/best/best.component.ts");
/* harmony import */ var _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/left-image/left-image.component */ "./src/app/views/landing/components/left-image/left-image.component.ts");
/* harmony import */ var _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/right-image/right-image.component */ "./src/app/views/landing/components/right-image/right-image.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/views/landing/components/team/team.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/views/landing/components/news/news.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/views/landing/components/faqs/faqs.component.ts");
/* harmony import */ var _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/news-two/news-two.component */ "./src/app/views/landing/components/news-two/news-two.component.ts");
/* harmony import */ var _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/intro-three/intro-three.component */ "./src/app/views/landing/components/intro-three/intro-three.component.ts");
/* harmony import */ var _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./landing-v3/landing-v3.component */ "./src/app/views/landing/landing-v3/landing-v3.component.ts");
/* harmony import */ var _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/intro-four/intro-four.component */ "./src/app/views/landing/components/intro-four/intro-four.component.ts");
/* harmony import */ var _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./landing-v4/landing-v4.component */ "./src/app/views/landing/landing-v4/landing-v4.component.ts");
/* harmony import */ var _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/intro-five/intro-five.component */ "./src/app/views/landing/components/intro-five/intro-five.component.ts");
/* harmony import */ var _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./landing-v5/landing-v5.component */ "./src/app/views/landing/landing-v5/landing-v5.component.ts");
/* harmony import */ var _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./landing-v6/landing-v6.component */ "./src/app/views/landing/landing-v6/landing-v6.component.ts");
/* harmony import */ var _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/intro-six/intro-six.component */ "./src/app/views/landing/components/intro-six/intro-six.component.ts");
/* harmony import */ var _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/intro-seven/intro-seven.component */ "./src/app/views/landing/components/intro-seven/intro-seven.component.ts");
/* harmony import */ var _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./landing-v7/landing-v7.component */ "./src/app/views/landing/landing-v7/landing-v7.component.ts");
/* harmony import */ var _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/intro-eight/intro-eight.component */ "./src/app/views/landing/components/intro-eight/intro-eight.component.ts");
/* harmony import */ var _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./landing-v8/landing-v8.component */ "./src/app/views/landing/landing-v8/landing-v8.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/views/landing/components/header/header.component.ts");
/* harmony import */ var _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/header-white/header-white.component */ "./src/app/views/landing/components/header-white/header-white.component.ts");
/* harmony import */ var _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/intro-nine/intro-nine.component */ "./src/app/views/landing/components/intro-nine/intro-nine.component.ts");
/* harmony import */ var _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./landing-v9/landing-v9.component */ "./src/app/views/landing/landing-v9/landing-v9.component.ts");
/* harmony import */ var _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/intro-ten/intro-ten.component */ "./src/app/views/landing/components/intro-ten/intro-ten.component.ts");
/* harmony import */ var _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./landing-v10/landing-v10.component */ "./src/app/views/landing/landing-v10/landing-v10.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/demos/demos.component */ "./src/app/views/landing/components/demos/demos.component.ts");
/* harmony import */ var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/blog-details/blog-details.component */ "./src/app/views/landing/components/blog-details/blog-details.component.ts");
/* harmony import */ var _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./blog-details-page/blog-details-page.component */ "./src/app/views/landing/blog-details-page/blog-details-page.component.ts");
/* harmony import */ var _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/intro-eleven/intro-eleven.component */ "./src/app/views/landing/components/intro-eleven/intro-eleven.component.ts");
/* harmony import */ var _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./landing-v11/landing-v11.component */ "./src/app/views/landing/landing-v11/landing-v11.component.ts");
/* harmony import */ var _landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./landing-v3/start/start.component */ "./src/app/views/landing/landing-v3/start/start.component.ts");
/* harmony import */ var _landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./landing-v3/forrutes/forrutes.component */ "./src/app/views/landing/landing-v3/forrutes/forrutes.component.ts");
/* harmony import */ var src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! src/app/shared/modules/angular-material.module */ "./src/app/shared/modules/angular-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



// import { NgForm } from "@angular/forms";
























































var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LandingModule });
    LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, providers: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__["WINDOW_PROVIDERS"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_56__["AngularMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"],
            ]] });
    return LandingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__["LandingV1Component"],
        _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__["Intro1Component"],
        _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__["Intro2Component"],
        _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__["Works1Component"],
        _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__["Works2Component"],
        _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__["WorksCarouselComponent"],
        _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
        _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__["ServicesCauroselComponent"],
        _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
        _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialCauroselComponent"],
        _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__["PricingOneComponent"],
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__["ContactFormComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__["LandingV2Component"],
        _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__["FeaturesComponent"],
        _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesTwoComponent"],
        _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__["BestComponent"],
        _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__["LeftImageComponent"],
        _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__["RightImageComponent"],
        _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__["TeamComponent"],
        _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"],
        _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__["FaqsComponent"],
        _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__["NewsTwoComponent"],
        _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__["IntroThreeComponent"],
        _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__["LandingV3Component"],
        _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__["IntroFourComponent"],
        _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__["LandingV4Component"],
        _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__["IntroFiveComponent"],
        _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__["LandingV5Component"],
        _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__["LandingV6Component"],
        _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__["IntroSixComponent"],
        _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__["IntroSevenComponent"],
        _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__["LandingV7Component"],
        _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__["IntroEightComponent"],
        _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__["LandingV8Component"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__["HeaderComponent"],
        _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__["ScrollToDirective"],
        _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"],
        _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__["IntroNineComponent"],
        _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__["LandingV9Component"],
        _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__["IntroTenComponent"],
        _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__["LandingV10Component"],
        _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__["DemosComponent"],
        _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__["BlogDetailsComponent"],
        _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__["BlogDetailsPageComponent"],
        _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__["IntroElevenComponent"],
        _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__["LandingV11Component"],
        _landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_54__["StartComponent"],
        _landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_55__["ForrutesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
        _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_56__["AngularMaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"]], exports: [_components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingRoutingModule"],
                    _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_56__["AngularMaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_48__["FormsModule"],
                ],
                declarations: [
                    _landing_v1_landing_v1_component__WEBPACK_IMPORTED_MODULE_7__["LandingV1Component"],
                    _components_intro1_intro1_component__WEBPACK_IMPORTED_MODULE_8__["Intro1Component"],
                    _components_intro2_intro2_component__WEBPACK_IMPORTED_MODULE_9__["Intro2Component"],
                    _components_works1_works1_component__WEBPACK_IMPORTED_MODULE_10__["Works1Component"],
                    _components_works2_works2_component__WEBPACK_IMPORTED_MODULE_11__["Works2Component"],
                    _components_works_carousel_works_carousel_component__WEBPACK_IMPORTED_MODULE_12__["WorksCarouselComponent"],
                    _components_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                    _components_services_caurosel_services_caurosel_component__WEBPACK_IMPORTED_MODULE_14__["ServicesCauroselComponent"],
                    _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_15__["TestimonialComponent"],
                    _components_testimonial_caurosel_testimonial_caurosel_component__WEBPACK_IMPORTED_MODULE_16__["TestimonialCauroselComponent"],
                    _components_pricing_one_pricing_one_component__WEBPACK_IMPORTED_MODULE_17__["PricingOneComponent"],
                    _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_18__["ContactFormComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _landing_v2_landing_v2_component__WEBPACK_IMPORTED_MODULE_20__["LandingV2Component"],
                    _components_features_features_component__WEBPACK_IMPORTED_MODULE_21__["FeaturesComponent"],
                    _components_features_two_features_two_component__WEBPACK_IMPORTED_MODULE_22__["FeaturesTwoComponent"],
                    _components_best_best_component__WEBPACK_IMPORTED_MODULE_23__["BestComponent"],
                    _components_left_image_left_image_component__WEBPACK_IMPORTED_MODULE_24__["LeftImageComponent"],
                    _components_right_image_right_image_component__WEBPACK_IMPORTED_MODULE_25__["RightImageComponent"],
                    _components_team_team_component__WEBPACK_IMPORTED_MODULE_26__["TeamComponent"],
                    _components_news_news_component__WEBPACK_IMPORTED_MODULE_27__["NewsComponent"],
                    _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_28__["FaqsComponent"],
                    _components_news_two_news_two_component__WEBPACK_IMPORTED_MODULE_29__["NewsTwoComponent"],
                    _components_intro_three_intro_three_component__WEBPACK_IMPORTED_MODULE_30__["IntroThreeComponent"],
                    _landing_v3_landing_v3_component__WEBPACK_IMPORTED_MODULE_31__["LandingV3Component"],
                    _components_intro_four_intro_four_component__WEBPACK_IMPORTED_MODULE_32__["IntroFourComponent"],
                    _landing_v4_landing_v4_component__WEBPACK_IMPORTED_MODULE_33__["LandingV4Component"],
                    _components_intro_five_intro_five_component__WEBPACK_IMPORTED_MODULE_34__["IntroFiveComponent"],
                    _landing_v5_landing_v5_component__WEBPACK_IMPORTED_MODULE_35__["LandingV5Component"],
                    _landing_v6_landing_v6_component__WEBPACK_IMPORTED_MODULE_36__["LandingV6Component"],
                    _components_intro_six_intro_six_component__WEBPACK_IMPORTED_MODULE_37__["IntroSixComponent"],
                    _components_intro_seven_intro_seven_component__WEBPACK_IMPORTED_MODULE_38__["IntroSevenComponent"],
                    _landing_v7_landing_v7_component__WEBPACK_IMPORTED_MODULE_39__["LandingV7Component"],
                    _components_intro_eight_intro_eight_component__WEBPACK_IMPORTED_MODULE_40__["IntroEightComponent"],
                    _landing_v8_landing_v8_component__WEBPACK_IMPORTED_MODULE_41__["LandingV8Component"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_42__["HeaderComponent"],
                    _helpers_scrollTo_directives__WEBPACK_IMPORTED_MODULE_0__["ScrollToDirective"],
                    _components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"],
                    _components_intro_nine_intro_nine_component__WEBPACK_IMPORTED_MODULE_44__["IntroNineComponent"],
                    _landing_v9_landing_v9_component__WEBPACK_IMPORTED_MODULE_45__["LandingV9Component"],
                    _components_intro_ten_intro_ten_component__WEBPACK_IMPORTED_MODULE_46__["IntroTenComponent"],
                    _landing_v10_landing_v10_component__WEBPACK_IMPORTED_MODULE_47__["LandingV10Component"],
                    _components_demos_demos_component__WEBPACK_IMPORTED_MODULE_49__["DemosComponent"],
                    _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_50__["BlogDetailsComponent"],
                    _blog_details_page_blog_details_page_component__WEBPACK_IMPORTED_MODULE_51__["BlogDetailsPageComponent"],
                    _components_intro_eleven_intro_eleven_component__WEBPACK_IMPORTED_MODULE_52__["IntroElevenComponent"],
                    _landing_v11_landing_v11_component__WEBPACK_IMPORTED_MODULE_53__["LandingV11Component"],
                    _landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_54__["StartComponent"],
                    _landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_55__["ForrutesComponent"],
                ],
                exports: [_components_header_white_header_white_component__WEBPACK_IMPORTED_MODULE_43__["HeaderWhiteComponent"]],
                providers: [_helpers_window_helpers__WEBPACK_IMPORTED_MODULE_1__["WINDOW_PROVIDERS"]],
                entryComponents: [
                    _landing_v3_forrutes_forrutes_component__WEBPACK_IMPORTED_MODULE_55__["ForrutesComponent"],
                    _landing_v3_start_start_component__WEBPACK_IMPORTED_MODULE_54__["StartComponent"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_57__["HttpClient"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=default~views-landing-landing-module~views-sessions-sessions-module.js.map