(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/dashboard-view/dashboard-view.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/dashboard-view/dashboard-view.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"userInfo\">\r\n    <nav class=\"navbar navbar-dark fixed-top navbar-expand-lg p-1\">\r\n        <a class=\"navbar-brand col-auto col-sm-2 p-0 mr-0\" style=\"color:#fff\">\r\n            <img src=\"../../../assets/icons/main_icon.ico\" height=\"25\" class=\"d-inline-block align-top\" alt=\"\">\r\n            Bug Tracker</a>\r\n\r\n        <!-- navbar toggler -->\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto d-md-none\">\r\n                <li class=\"nav-item\" style=\"color: #fff\">\r\n                    {{userName}}<span style=\"float: right\"><a class=\"nav-link\" (click)=\"logout()\">Logout</a></span>\r\n                </li>\r\n\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\">Dashboard <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"createNewIssue()\">Add new issue</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <form class=\"form-inline my-2 my-lg-0 \" style=\"width:100% ;display:flex; flex-wrap: nowrap\">\r\n                <input class=\"form-control mr-2 w-100\" type=\"search\" name=\"search\"\r\n                    placeholder=\"Search by issue title, reporter or status\" aria-label=\"Search\"\r\n                    [(ngModel)]=\"searchText\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" text-nowrap type=\"submit\">Search</button>\r\n            </form>\r\n\r\n            <!-- navbar-toggler end -->\r\n        </div>\r\n    </nav>\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n        <!-- sidebar - for nav/logout -->\r\n        <nav class=\"col-sm-2 d-none d-md-block bg-light sidebar\">\r\n            <div class=\"sidebar-sticky d-flex align-items-start flex-column\">\r\n\r\n                <a class=\"nav-link active d-flex\">\r\n                    <i class=\"material-icons mr-1\">\r\n                        home\r\n                    </i>\r\n                    Dashboard <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n\r\n                <a class=\" mb-auto nav-link d-flex\" style=\"cursor: pointer\" (click)=\"createNewIssue()\">\r\n                    <i class=\"material-icons mr-1\">\r\n                        add\r\n                    </i>\r\n                    Add new issue\r\n                </a>\r\n\r\n                <i class=\"material-icons align-self-center\">\r\n                    account_circle\r\n                </i>\r\n\r\n                <span class=\"profile align-self-center\">\r\n                    {{userName}}\r\n                </span>\r\n\r\n                <a class=\"profile align-self-center\" style=\"cursor: pointer\" (click)=\"logout()\">\r\n                    Logout\r\n                </a>\r\n\r\n            </div>\r\n        </nav>\r\n        <!-- sidebar ends -->\r\n\r\n        <!-- main content -->\r\n        <main role=\"main\" class=\"col-md-10 ml-sm-auto \">\r\n\r\n            <div class=\"d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\r\n                <h1 class=\"h2\">Dashboard</h1>\r\n                <div class=\"btn-toolbar \">\r\n                    <div class=\"btn-group mr-2\">\r\n                        <button class=\"btn btn-sm btn-dark\" data-toggle=\"modal\" data-target=\"#exampleModalScrollable\">\r\n                            Notifications <span class=\"badge badge-light\">{{notifCounter}}</span>\r\n                        </button>\r\n                        <!-- Modal -->\r\n                        <div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\"\r\n                            aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\r\n                            <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\r\n                                <div class=\"modal-content\">\r\n                                    <div class=\"modal-header\">\r\n                                        <h5 class=\"modal-title\" id=\"exampleModalScrollableTitle\">Notifications</h5>\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                            <span aria-hidden=\"true\">&times;</span>\r\n                                        </button>\r\n                                    </div>\r\n                                    <div class=\"modal-body\">\r\n                                        <div *ngIf=\"notifCounter; else noNotifs\">\r\n                                            <div *ngFor=\"let data of notifData\">\r\n                                                <div *ngIf=\"issueEdited; else issueCmnt\"\r\n                                                    (click)=\"selectedIssue(data.issueId)\" data-dismiss=\"modal\"\r\n                                                    style=\"cursor: pointer\">\r\n                                                    {{data.editedBy}} edited the issue <b>{{data.issueTitle}}</b>\r\n                                                    <hr>\r\n                                                </div>\r\n                                                <ng-template #issueCmnt>\r\n                                                    {{data.editedBy}} commented on the issue <b>{{data.issueTitle}}</b>\r\n                                                    <hr>\r\n                                                </ng-template>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <ng-template #noNotifs>\r\n                                            No Notifications!\r\n                                        </ng-template>\r\n                                    </div>\r\n                                    <div class=\"modal-footer\">\r\n                                        <button type=\"button\" class=\"btn btn-secondary\"\r\n                                            data-dismiss=\"modal\">Close</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <h2>Your issues</h2>\r\n            <div *ngIf=\"allIssues!=0; else noIssues\">\r\n                <div class=\"table-responsive\">\r\n                    <table class=\"table table-striped table-hover table-sm\">\r\n                        <thead class=\"thead-dark\">\r\n                            <tr>\r\n                                <th>\r\n                                    <a [href]=\"\" (click)=\"sortIssues('title')\">\r\n                                        Title\r\n                                        <span *ngIf=\"sortType == 'title' && !sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_down\r\n                                            </i>\r\n                                        </span>\r\n                                        <span *ngIf=\"sortType == 'title' && sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_up\r\n                                            </i>\r\n                                        </span>\r\n                                    </a>\r\n                                </th>\r\n                                <th>\r\n                                    <a [href]=\"\" (click)=\"sortIssues('reporter')\">\r\n                                        Reporter\r\n                                        <span *ngIf=\"sortType == 'reporter' && !sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_down\r\n                                            </i>\r\n                                        </span>\r\n                                        <span *ngIf=\"sortType == 'reporter' && sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_up\r\n                                            </i>\r\n                                        </span>\r\n                                    </a>\r\n                                </th>\r\n                                <th>\r\n                                    <a [href]=\"\" (click)=\"sortIssues('createdOn')\">\r\n                                        Created On\r\n                                        <span *ngIf=\"sortType == 'createdOn' && !sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_down\r\n                                            </i>\r\n                                        </span>\r\n                                        <span *ngIf=\"sortType == 'createdOn' && sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_up\r\n                                            </i>\r\n                                        </span>\r\n                                    </a>\r\n                                </th>\r\n                                <th>\r\n                                    <a [href]=\"\" (click)=\"sortIssues('status')\">\r\n                                        Status\r\n                                        <span *ngIf=\"sortType == 'status' && !sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_down\r\n                                            </i>\r\n                                        </span>\r\n                                        <span *ngIf=\"sortType == 'status' && sortDesc\">\r\n                                            <i class=\"material-icons\">\r\n                                                arrow_drop_up\r\n                                            </i>\r\n                                        </span>\r\n                                    </a>\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"(allIssues | search: searchText) as result\">\r\n                            <tr *ngFor=\"let issue of allIssues | paginate: { itemsPerPage: 10, currentPage: page }\r\n                | search: searchText\" style=\"cursor: pointer\" (click)=\"selectedIssue(issue.issueId)\">\r\n                                <td>{{issue.title}}</td>\r\n                                <td>{{issue.reporter}}</td>\r\n                                <td>{{issue.createdOn | date}}</td>\r\n                                <td>{{issue.status}}</td>\r\n                            </tr>\r\n                            <h5 *ngIf=\"result.length===0\"> Your search didn't match any records!</h5>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n            </div>\r\n            <ng-template #noIssues>\r\n                <h4>No issues found</h4>\r\n            </ng-template>\r\n        </main>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/issue-description-view/issue-description-view.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/issue-description-view/issue-description-view.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signup my-5\">\r\n                <div class=\"card-body\">\r\n                    <a (click)=\"goBack()\" style=\"cursor:pointer\">\r\n                        <i class=\"material-icons\">\r\n                            arrow_back\r\n                        </i>\r\n                    </a>\r\n\r\n\r\n                    <div *ngIf=\"editBlock;else createBlock\">\r\n\r\n                        <h5 class=\"card-title text-center\">Edit this issue</h5>\r\n\r\n                        <form class=\"form-signup\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\r\n\r\n                            <!-- title -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Title</h6>\r\n                                <input type=\"text\" [(ngModel)]=\"currentIssue.title\" #title=\"ngModel\" name=\"title\"\r\n                                    class=\"form-control\" placeholder=\"Title\"\r\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required autofocus>\r\n                                <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- reporter -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Reporter </h6>\r\n                                <input disabled=\"disabled\" type=\"text\" name=\"reporter\"\r\n                                    [(ngModel)]=\"currentIssue.reporter\" #reporter=\"ngModel\" class=\"form-control\">\r\n                            </div>\r\n\r\n                            <!-- assignee -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Assignee </h6>\r\n                                <select name=\"assignee\" placeholder=\"Select assignee\"\r\n                                    [(ngModel)]=\"currentIssue.assigneeId\" #assigneeId=\"ngModel\" class=\"form-control\"\r\n                                    required>\r\n                                    <option value=\"\" disabled>Select your option</option>\r\n                                    <option *ngFor=\"let selAssignee of allUsers\" [value]=\"selAssignee.userId\">\r\n                                        {{selAssignee.firstName + ' ' + selAssignee.lastName}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n\r\n\r\n                            <!-- status -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Status </h6>\r\n                                <select name=\"status\" [(ngModel)]=\"currentIssue.status\" #status=\"ngModel\"\r\n                                    id=\"inputStatus\" class=\"form-control\" placeholder=\"Select Status\"\r\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && status.invalid }\" required>\r\n                                    <option>in-Backlog</option>\r\n                                    <option>in-Progress</option>\r\n                                    <option>in-Test</option>\r\n                                    <option>Done</option>\r\n                                </select>\r\n                                <div *ngIf=\"f.submitted && status.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"status.errors.required\">Status is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <!-- Created On -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Created On </h6>\r\n                                <input disabled=\"disabled\" type=\"text\" name=\"date\" [(ngModel)]=\"currentIssue.createdOn\"\r\n                                    #date=\"ngModel\" class=\"form-control\">\r\n                            </div>\r\n\r\n                            <!-- Follow issue checkbox -->\r\n                            <div class=\"row form-label-group\" style=\"margin-right:0\">\r\n                                <h6 class=\"col\"> Follow this issue </h6>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"isChecked\"\r\n                                    (change)=\"followCheckBox(isChecked?'Y':'N')\" name=\"follow\" #follow=\"ngModel\"\r\n                                    class=\"col-1 form-control\">\r\n                            </div>\r\n\r\n                            <!-- View followers -->\r\n                            <div class=\"row form-label-group\" style=\"margin-right:0\">\r\n                                <h6 class=\"col\"> View followers </h6>\r\n                                <button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n                                    <i class=\"material-icons\">\r\n                                        remove_red_eye\r\n                                    </i>\r\n                                </button>\r\n                                <!-- Modal -->\r\n                                <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n                                    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n                                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                                        <div class=\"modal-content\">\r\n                                            <div class=\"modal-header\">\r\n                                                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Followers</h5>\r\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                                                    aria-label=\"Close\">\r\n                                                    <span aria-hidden=\"true\">&times;</span>\r\n                                                </button>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                                <div *ngIf=\"followersList; else noFollowers\">\r\n                                                    <div class=\"row m-1\" *ngFor=\"let follower of followersList\">\r\n                                                        <div class=\"col-1\">\r\n                                                            <i class=\"material-icons\">\r\n                                                                account_circle\r\n                                                            </i>\r\n                                                        </div>\r\n                                                        <div class=\"col\">\r\n                                                            <span><b>{{follower.followerName}}</b></span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                                <ng-template #noFollowers>\r\n                                                    <div style=\"text-align:center\">\r\n                                                        No followers found!\r\n                                                    </div>\r\n                                                </ng-template>\r\n\r\n                                            </div>\r\n                                            <div class=\"modal-footer\">\r\n                                                <button type=\"button\" class=\"btn btn-secondary\"\r\n                                                    data-dismiss=\"modal\">Close</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- description field -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Description </h6>\r\n                                <ejs-richtexteditor #fromRTE name=\"description\" [(ngModel)]=\"currentIssue.description\"\r\n                                    id=\"inputDescription\">\r\n                                </ejs-richtexteditor>\r\n\r\n                                <!-- <label for=\"inputDescription\">Description</label> -->\r\n                            </div>\r\n\r\n                            <button (click)=\"editIssue(f.value)\" class=\"btn btn-lg btn-primary btn-block text-uppercase\"\r\n                                type=\"submit\">Edit & Save</button>\r\n                        </form>\r\n\r\n\r\n                        <!-- show previous comments -->\r\n                        <h6> Comments on this issue</h6>\r\n                        <div class=\"form-label-group sideBar mt-2\" *ngIf=\"commentsList\">\r\n\r\n                            <div class=\"row sideBar-body\" *ngFor=\"let comment of commentsList\">\r\n                                <div class=\"col-1 sideBar-avatar\">\r\n                                    <i class=\"material-icons\">\r\n                                        account_circle\r\n                                    </i>\r\n                                </div>\r\n\r\n                                <div class=\"col\">\r\n                                    <span><b>{{comment.commenterName}}</b></span>\r\n                                    <p class=\"card-text\">\r\n                                        {{comment.commentText}}\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"col-3 float-right\">\r\n                                    <small class=\"text-muted float-right text-secondary\">{{comment.commentDate | date}}\r\n                                    </small>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <form class=\"form-signup\" (ngSubmit)=\"cmnt.form.valid && onSubmit()\" #cmnt=\"ngForm\" novalidate>\r\n                            <!-- add new comments -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Add a new comment</h6>\r\n                                <textarea name=\"comments\" [(ngModel)]=\"comments\" class=\"form-control\"\r\n                                    placeholder=\"comments...\"\r\n                                    [ngClass]=\"{ 'is-invalid': cmnt.submitted && comments.invalid }\" required>\r\n                                    <div *ngIf=\"cmnt.submitted && comments.invalid\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"comments.errors.required\">Comment is required</div>\r\n                                    </div>\r\n                                    </textarea>\r\n                            </div>\r\n\r\n                            <button (click)=\"addNewComment()\" class=\"btn btn-lg btn-primary btn-block text-uppercase\"\r\n                                type=\"submit\">Add comment</button>\r\n                            <hr class=\"my-4\">\r\n                        </form>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    <!---------------------- Create new issue form ---------------------->\r\n                    <ng-template #createBlock>\r\n\r\n                        <h5 class=\"card-title text-center\">Create new issue</h5>\r\n\r\n                        <form class=\"form-signup\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\r\n\r\n                            <!-- title -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Title</h6>\r\n                                <input type=\"text\" [(ngModel)]=\"titleText\" #title=\"ngModel\" name=\"titleText\"\r\n                                    class=\"form-control\" placeholder=\"Title\"\r\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required autofocus>\r\n                                <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                                </div>\r\n                                <!-- <label for=\"inputTitle\">Title</label> -->\r\n                            </div>\r\n\r\n                            <!-- assignee -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Assign To </h6>\r\n                                <select name=\"assignee\" [(ngModel)]=\"assigneeText\" #assignee=\"ngModel\"\r\n                                    class=\"form-control\" [ngClass]=\"{ 'is-invalid': f.submitted && assignee.invalid }\"\r\n                                    required>\r\n                                    <option value=\"\" disabled selected>-- Select assignee --</option>\r\n                                    <option *ngFor=\"let assignee of allUsers\" [value]=\"assignee.userId\">\r\n                                        {{assignee.firstName + ' ' + assignee.lastName}}\r\n                                    </option>\r\n                                </select>\r\n                                <div *ngIf=\"f.submitted && assignee.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"assignee.errors.required\">Assignee Name is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <!-- status -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Status </h6>\r\n                                <select name=\"status\" [(ngModel)]=\"statusText\" #status=\"ngModel\" id=\"inputStatus\"\r\n                                    class=\"form-control\" placeholder=\"Select Status\"\r\n                                    [ngClass]=\"{ 'is-invalid': f.submitted && status.invalid }\" required>\r\n                                    <option value=\"\" disabled selected>-- Select status --</option>\r\n                                    <option>in-Backlog</option>\r\n                                    <option>in-Progress</option>\r\n                                    <option>in-Test</option>\r\n                                    <option>Done</option>\r\n                                </select>\r\n                                <div *ngIf=\"f.submitted && status.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"status.errors.required\">Status is required</div>\r\n                                </div>\r\n                                <!-- <label for=\"inputStatus\">Status</label> -->\r\n                            </div>\r\n\r\n                            <!-- description field -->\r\n                            <div class=\"form-label-group\">\r\n                                <h6> Description </h6>\r\n                                <ejs-richtexteditor #fromRTE name=\"description\" [(ngModel)]=\"descriptionText\"\r\n                                    id=\"inputDescription\">\r\n                                </ejs-richtexteditor>\r\n                            </div>\r\n\r\n                            <button (click)=\"createNewIssue()\" class=\"btn btn-lg btn-primary btn-block text-uppercase\"\r\n                                type=\"submit\">Create</button>\r\n\r\n                            <hr class=\"my-4\">\r\n\r\n                        </form>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n        <div class=\"card card-signin my-5\">\r\n          <div class=\"card-body\">\r\n            <div class=\"app-logo mb-2\">\r\n              <img class=\"text-center img\" src=\"../../../assets/images/software_bug.jpg\">\r\n            </div>\r\n            <h5 class=\"card-title text-center\">Sign In</h5>\r\n            <form class=\"form-signin\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n  \r\n              <!---------- email field --------->\r\n              <div class=\"form-label-group\">\r\n  \r\n                <input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"inputEmail\"\r\n                  class=\"form-control\" placeholder=\"Email address\"\r\n                  [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email autofocus>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\r\n                </div>\r\n                <label for=\"inputEmail\">Email address</label>\r\n              </div>\r\n  \r\n              <!---------- password field --------->\r\n              <div class=\"form-label-group\">\r\n  \r\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" id=\"inputPassword\"\r\n                  class=\"form-control\" placeholder=\"Password\"\r\n                  [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\">\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n                <label for=\"inputPassword\">Password</label>\r\n              </div>\r\n  \r\n  \r\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n              <hr class=\"my-4\">\r\n  \r\n              <div class=\"text-center w-full p-t-115\">\r\n                <span class=\"txt1\">\r\n                  Not a member?\r\n                </span>\r\n                <a class=\"txt1 bo1 hov1\" style=\"cursor: pointer\" (click)=\"goToSignUp()\">\r\n                  Sign up now\r\n                </a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signup my-5\">\r\n                <div class=\"card-body\">\r\n                    <a (click)=\"goToSignIn()\">\r\n                        <i class=\"material-icons\">\r\n                            arrow_back\r\n                        </i>\r\n                    </a>\r\n                    <div class=\"app-logo mb-2\">\r\n                        <i class=\"material-icons\">\r\n                            person_add\r\n                        </i>\r\n\r\n\r\n                    </div>\r\n                    <h5 class=\"card-title text-center\">Sign Up</h5>\r\n\r\n                    <form class=\"form-signup\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n                        <div class=\"form-label-group\">\r\n\r\n                            <input type=\"text\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\r\n                                id=\"inputfirstName\" class=\"form-control\" placeholder=\"First Name\"\r\n                                [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required autofocus>\r\n                            <div *ngIf=\"f.submitted && firstName.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"firstName.errors.required\">First Name is required</div>\r\n                            </div>\r\n                            <label for=\"inputfirstName\">First Name</label>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-label-group\">\r\n\r\n                            <input type=\"text\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\"\r\n                                id=\"inputlastName\" class=\"form-control\" placeholder=\"Last Name\"\r\n                                [ngClass]=\"{ 'is-invalid': f.submitted && lastName.invalid }\" required>\r\n                            <div *ngIf=\"f.submitted && lastName.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"lastName.errors.required\">Last Name is required</div>\r\n                            </div>\r\n                            <label for=\"inputlastName\">Last Name</label>\r\n                        </div>\r\n\r\n                        <div class=\"form-label-group\">\r\n\r\n                            <input type=\"text\" name=\"mobNum\" [(ngModel)]=\"model.mobNum\" #mobNum=\"ngModel\"\r\n                                id=\"inputmobNum\" class=\"form-control\" placeholder=\"Mobile Number\"\r\n                                [ngClass]=\"{ 'is-invalid': f.submitted && mobNum.invalid }\" required>\r\n                            <div *ngIf=\"f.submitted && mobNum.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"mobNum.errors.required\">Mobile Number is required</div>\r\n                            </div>\r\n                            <label for=\"inputmobNum\">Mobile Number</label>\r\n                        </div>\r\n\r\n                        <!---------- email field --------->\r\n                        <div class=\"form-label-group\">\r\n\r\n                            <input type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" id=\"inputEmail\"\r\n                                class=\"form-control\" placeholder=\"Email address\"\r\n                                [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email>\r\n                            <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"email.errors.required\">Email is required</div>\r\n                                <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\r\n                            </div>\r\n                            <label for=\"inputEmail\">Email address</label>\r\n                        </div>\r\n\r\n\r\n                        <!---------- password field --------->\r\n                        <div class=\"form-label-group\">\r\n\r\n                            <input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                                id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\"\r\n                                [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required minlength=\"6\">\r\n                            <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"password.errors.required\">Password is required</div>\r\n                                <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\r\n                            </div>\r\n                            <label for=\"inputPassword\">Password</label>\r\n                        </div>\r\n\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign up</button>\r\n                        <hr class=\"my-4\">\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'issue-tracking-tool';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _issue_tracker_issue_tracker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./issue-tracker/issue-tracker.module */ "./src/app/issue-tracker/issue-tracker.module.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _issue_tracker_issue_tracker_module__WEBPACK_IMPORTED_MODULE_7__["IssueTrackerModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], pathMatch: 'full' },
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
                { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] }
            ]),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot()
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);


//importing http client to make requests



let AppService = class AppService {
    //private baseUrl = "http://localhost:3000/api/v1";
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://api.issuetracker.info/api/v1';
        //------------------------------ user functions -------------------------------------- 
        //getter function for getting any local user info if it is already saved
        //this function is used in user Module login.component.ts
        this.getUserInfoFromLocalStorage = () => {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        //setter function for setting any user info in local Storage for session management
        //this function is used in user Module login.component.ts
        this.setUserInfoInLocalStorage = (data) => {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    //new way to send data parameters is using HttpParams() and sending it as 1 param
    signupFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(`${this.baseUrl}/users/signup`, params);
    }
    signinFunction(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(`${this.baseUrl}/users/signin`, params);
    }
    logout() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authToken', ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'));
        let userdetails = this.getUserInfoFromLocalStorage();
        return this.http.post(`${this.baseUrl}/users/logout/${userdetails.userId}`, params);
    } // end logout function
    //------------------------ dashboard ----------------------------------
    getAllIssues(userId) {
        return this.http.get(`${this.baseUrl}/issue/getAllIssues/${userId}?authToken=${ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("authToken")}`);
    }
    //-------------------- issue description ---------------------------------
    getAllUsers() {
        return this.http.get(`${this.baseUrl}/issue/getAllUsers?authToken=${ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("authToken")}`);
    }
    getIssueById(issueId) {
        return this.http.get(`${this.baseUrl}/issue/selectedIssue/${issueId}?authToken=${ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("authToken")}`);
    }
    createNewIssue(data) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken'))
            .set('title', data.title)
            .set('description', data.description)
            .set('reporter', data.reporter)
            .set('reporterId', data.reporterId)
            .set('assignee', data.assignee)
            .set('assigneeId', data.assigneeId)
            .set('status', data.status);
        return this.http.post(`${this.baseUrl}/issue/createNew`, params);
    }
    editIssue(issueId, data) {
        return this.http.put(`${this.baseUrl}/issue/edit/${issueId}?authToken=${ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')}`, data);
    }
    addNewComment(issueId, data) {
        return this.http.put(`${this.baseUrl}/issue/addComment/${issueId}?authToken=${ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken')}`, data);
    }
    handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error)
            errorMessage = 'An error occurred ${err.error.message}';
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/issue-tracker/dashboard-view/dashboard-view.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/issue-tracker/dashboard-view/dashboard-view.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*:root{\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .sidebar {\r\n    position: fixed;\r\n    z-index: 100; \r\n    padding: 48px 0 0; \r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  .sidebar-sticky {\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; \r\n  }\r\n  \r\n  .sidebar .nav-link {\r\n    font-weight: 700;\r\n    color: #333;  \r\n  }\r\n  \r\n  .sidebar .nav-link.active {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .profile{\r\n    padding: 0.5rem 0;\r\n    font-weight: 700;\r\n    color: #333\r\n  }\r\n  \r\n  [role=\"main\"] {\r\n    padding-top: 48px;\r\n  }\r\n  \r\n  .navbar.navbar-dark{\r\n    background-color: black;\r\n  }\r\n  \r\n  a{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  th > a {\r\n    cursor:pointer;\r\n    color: #ffffff;\r\n  }\r\n  \r\n  th > a > span > i {\r\n    vertical-align: bottom;\r\n  }\r\n  \r\n  .form-control{\r\n    background-color: rgb(3, 3, 3);\r\n    border-color: #fff;\r\n  }\r\n  \r\n  .form-control:focus{\r\n  background-color: #fff;\r\n  }\r\n  \r\n  .btn-outline-success{\r\n    color: #fff;\r\n    border-color: #fff;\r\n  }\r\n  \r\n  .btn-outline-success:hover{\r\n    color: black;\r\n    background-color: #fff!important;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtdHJhY2tlci9kYXNoYm9hcmQtdmlldy9kYXNoYm9hcmQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQjtFQUNGOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUdBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLGtCQUFrQjtFQUNwQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUtdHJhY2tlci9kYXNoYm9hcmQtdmlldy9kYXNoYm9hcmQtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKjpyb290e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDA7IFxyXG4gICAgcGFkZGluZzogNDhweCAwIDA7IFxyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyLXN0aWNreSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gIH1cclxuICBcclxuICAuc2lkZWJhciAubmF2LWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMzMzOyAgXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxle1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMzMzNcclxuICB9XHJcbiAgXHJcbiAgW3JvbGU9XCJtYWluXCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiA0OHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubmF2YmFyLm5hdmJhci1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICB0aCA+IGEge1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgdGggPiBhID4gc3BhbiA+IGkge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB9IFxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMywgMyk7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/issue-tracker/dashboard-view/dashboard-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/issue-tracker/dashboard-view/dashboard-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardViewComponent", function() { return DashboardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







let DashboardViewComponent = class DashboardViewComponent {
    constructor(appService, socketService, router, toastr) {
        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this.toastr = toastr;
        this.sortDesc = false;
        this.allIssues = [];
        this.notifCounter = 0;
        this.notifData = [];
        this.issueEdited = false;
        //get the all issues assigned to/created-by logged-in user
        this.getAllIssues = () => {
            this.appService.getAllIssues(this.userInfo.userId).subscribe((data) => {
                if (data.status == 200) {
                    this.allIssues = data['data'];
                    // console.log("All Issues: " + JSON.stringify(this.allIssues[0].issueId))
                }
                else if (data.status == 404) {
                    // console.log("All issue in err:" + this.allIssues.length)
                    this.toastr.info("No issues found!");
                }
            });
        };
        //verify the logged-in user & join all issues room which have been assigned to the user
        this.verifyUserAndJoinIssues = () => {
            this.socketService.verifyUser()
                .subscribe((data) => {
                this.disconnectedSocket = false;
                this.socketService.setUser(this.authToken);
            }); //end subscribe
        }; //end verifyUserAndJoinIssues
        // for creating and joining a unique socket room for every user
        // for receiving update if a new issue is assigned.
        this.joinChatRoom = () => {
            let roomData = {
                roomId: this.userInfo.userId,
                userId: this.userInfo.userId,
                userName: this.userName
            };
            this.socketService.startRoom().subscribe(data => {
                this.socketService.emitJoinRoom(roomData);
            });
        };
        // navigate to next view to create new issue
        this.createNewIssue = () => {
            this.router.navigate(['/description']);
        };
        // navigate to issue-description view
        this.selectedIssue = (issueId) => {
            this.router.navigate(['/description', issueId]);
        };
        this.logout = () => {
            this.appService.logout()
                .subscribe((apiResponse) => {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authToken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
                    this.socketService.disconnect(this.userInfo.userId);
                    this.router.navigate(['/']); //navigating to signin page
                }
                else {
                    this.toastr.error(apiResponse.message);
                }
            }, (err) => {
                this.toastr.error('some error occured');
            });
        }; //end logout
        this.authError = () => {
            this.socketService.authError().subscribe(data => {
                this.toastr.error(data.error);
            });
        };
        // console.log("Inside dashboard constructor")
    }
    ngOnInit() {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("authToken");
        // console.log("dashboard authToken: " + this.authToken)
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("userName");
        // console.log("dashboard userName: " + this.userName)
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        // console.log("dashboard userInfo: " + JSON.stringify(this.userInfo))
        this.getAllIssues();
        this.verifyUserAndJoinIssues();
        this.joinChatRoom();
        // for listening to update when a new issue is assigned to this user.
        this.socketService.updateIssueList().subscribe((data) => {
            this.getAllIssues();
            this.toastr.info(`A new issue ${data.newIssueTitle} has been assigned to you by ${data.newReporterName}`, 'New notification');
        });
        this.socketService.receiveNotification().subscribe((data) => {
            if (data.editedContent == 'comment') {
                this.issueEdited = false;
                this.notifCounter++;
                if (Array.isArray(this.notifData)) {
                    this.notifData.push(data);
                }
                else {
                    this.notifData = [];
                    this.notifData.push(data);
                }
                this.toastr.success(`Open notifications panel for details`, 'New Notification');
            }
            else {
                this.issueEdited = true;
                this.notifCounter++;
                if (Array.isArray(this.notifData)) {
                    this.notifData.push(data);
                }
                else {
                    this.notifData = [];
                    this.notifData.push(data);
                }
                this.toastr.success(`Open notifications panel for details`, 'New Notification');
            }
        });
        this.authError();
    }
    // click user-event: for sorting issues
    // sortType/property: which column to sort
    // sortDesc: to track whether to sort in descending order or not. Also for toggling icon in table header
    // in Array.prototype.sort(): -1 is for ascending & 1 is for descending sort order
    sortIssues(property) {
        this.sortType = property;
        this.sortDesc = !this.sortDesc;
        this.allIssues.sort(this.dynamicSort(property));
    }
    dynamicSort(property) {
        // default: minus(-)1 
        // only for toggling result b/w asc/desc
        let sortOrder = -1;
        //sortDesc: for changing the order of sorting i.e ascending or descending
        // sortDesc icon: down icon to sort in ascending order when list is reverse sorted
        // sortDesc icon: up icon to reverse sort when list is sorted
        if (this.sortDesc)
            sortOrder = 1;
        return function (a, b) {
            let result = (a[property].toLowerCase() < b[property].toLowerCase()) ? -1 : (a[property].toLowerCase() > b[property].toLowerCase()) ? 1 : 0;
            // to make result the opposite i.e toggle between ascending/descending
            return result * sortOrder;
        };
    }
};
DashboardViewComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
DashboardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/dashboard-view/dashboard-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-view.component.css */ "./src/app/issue-tracker/dashboard-view/dashboard-view.component.css")).default]
    })
], DashboardViewComponent);



/***/ }),

/***/ "./src/app/issue-tracker/issue-description-view/issue-description-view.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/issue-tracker/issue-description-view/issue-description-view.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .container-fluid {\r\n    background: #9CECFB;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n  }\r\n  \r\n  .app-logo{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\n  }\r\n  \r\n  .img{\r\n    max-width: 100%;\r\n    height: 12vh;\r\n    \r\n  }\r\n  \r\n  .card-signup {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signup .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signup .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signup {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signup .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  /* .form-label-group>input,\r\n  .form-label-group>label {\r\n    \r\n  }\r\n  padding: var(--input-padding-y) var(--input-padding-x); */\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0.7rem;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    /* padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3)); */\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .sideBar {\r\n    max-height: 200px;\r\n    width: 100%;\r\n    /* padding: 0.3rem !important;\r\n    margin: 0 !important; */\r\n    background-color: #fff;\r\n    overflow-y: scroll;\r\n    border: 1px solid #f7f7f7;\r\n    \r\n  }\r\n  \r\n  .sideBar-body {\r\n    margin: 0 !important;\r\n    /* padding-top: 1vh;\r\n    height: 4rem; */\r\n    border-bottom: 0.6px solid #dcdedf;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .sideBar-body:hover {\r\n    background-color: #f2f2f2;\r\n  }\r\n  \r\n  .sideBar-avatar {\r\n    text-align: center;\r\n    padding: 0 !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUtdHJhY2tlci9pc3N1ZS1kZXNjcmlwdGlvbi12aWV3L2lzc3VlLWRlc2NyaXB0aW9uLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFFOUIsK0JBQStCO0lBQy9CLGdFQUFnRTtJQUNoRSxxRUFBcUU7RUFDdkU7O0VBQ0E7QUFDRixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZOztFQUVkOztFQUNBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTs7OzsyREFJeUQ7O0VBRXpEO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBTUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrRkFBa0Y7SUFDbEYsZ0RBQWdEO0VBQ2xEOztFQUdBO0lBQ0UsNkNBQTZDO0lBQzdDLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUlBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWDsyQkFDdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7O0VBRTNCOztFQUdBO0lBQ0Usb0JBQW9CO0lBQ3BCO21CQUNlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUtdHJhY2tlci9pc3N1ZS1kZXNjcmlwdGlvbi12aWV3L2lzc3VlLWRlc2NyaXB0aW9uLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0taW5wdXQtcGFkZGluZy14OiAxLjVyZW07XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteTogLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICM5Q0VDRkI7XHJcbiAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNTJENCwgIzY1QzdGNywgIzlDRUNGQik7XHJcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA1MkQ0LCAjNjVDN0Y3LCAjOUNFQ0ZCKTtcclxuICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICB9XHJcbiAgLmFwcC1sb2dve1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTJ2aDtcclxuICAgIFxyXG4gIH1cclxuICAuY2FyZC1zaWdudXAge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ251cCAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWdudXAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWdudXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ251cCAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAvKiAuZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBcclxuICB9XHJcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpOyAqL1xyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDAuN3JlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgLyogcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bil+bGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLnNpZGVCYXIge1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDAuM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuc2lkZUJhci1ib2R5IHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDF2aDtcclxuICAgIGhlaWdodDogNHJlbTsgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDAuNnB4IHNvbGlkICNkY2RlZGY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlQmFyLWJvZHk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVCYXItYXZhdGFyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/issue-tracker/issue-description-view/issue-description-view.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/issue-tracker/issue-description-view/issue-description-view.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IssueDescriptionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionViewComponent", function() { return IssueDescriptionViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








//for formatting date

let IssueDescriptionViewComponent = class IssueDescriptionViewComponent {
    constructor(location, appService, socketService, router, toastr, activatedRoute, locale) {
        this.location = location;
        this.appService = appService;
        this.socketService = socketService;
        this.router = router;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.locale = locale;
        this.allUsers = [];
        this.currentIssue = '';
        this.tempIssueData = '';
        this.editBlock = false;
        this.hasChanges = false;
        this.assigneeText = '';
        this.statusText = '';
        // -----------------------
        this.isChecked = false;
        this.followersList = [];
        this.commentsList = [];
        this.comments = '';
        this.goBack = () => {
            this.location.back();
        };
        this.getallUsers = () => {
            this.appService.getAllUsers().subscribe((data) => {
                if (data.status === 200) {
                    // console.log("Inside getAllUsers success:" + JSON.stringify(data.data))
                    this.allUsers = data.data;
                }
                else {
                    // console.log("Inside getAllUsers failure" + data.message)
                }
            });
        };
        this.getSelectedIssue = () => {
            this.appService.getIssueById(this.issueId).subscribe((data) => {
                // console.log(data)
                if (data.status === 200) {
                    this.currentIssue = data.data;
                    // if we do this.tempIssueData = data.data then it will point to the same location as 
                    // this.currentIssue hence changes in one will impact the other var too.
                    // so make a deep copy like below
                    this.tempIssueData = Object.assign({}, data.data);
                    //below code stmt is for assigning assigneeId to tempisData assignee
                    // so that while tracking form changes comparision is made b/w id
                    this.tempIssueData.assignee = data.data.assigneeId;
                    // format date to short date
                    this.currentIssue.createdOn = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(this.currentIssue.createdOn, 'yyyy-MMMM-dd', this.locale);
                    this.commentsList = data.data.comments.reverse();
                    // console.log("Current issue: " + JSON.stringify(this.currentIssue))
                }
                else {
                    // console.log(data.message)
                }
            });
        };
        this.getSelectedIssueFollowers = () => {
            this.socketService.emitGetFollowersList(this.issueId);
            this.socketService.getFollowersList(this.issueId).subscribe((data) => {
                // console.log("inside getFollowersList: " + JSON.stringify(data))
                for (let key in data) {
                    // console.log("followers list key:" + key)
                    if (key === this.userInfo.userId) {
                        this.isChecked = true;
                    }
                    this.followersList.push({ followerName: data[key] });
                }
                // console.log("followers list: " + this.followersList)
            });
        };
        // click event - to create a new issue
        this.createNewIssue = () => {
            let createAndFollow = () => {
                return new Promise((resolve, reject) => {
                    let assigneeName;
                    for (let user of this.allUsers) {
                        if (user.userId === this.assigneeText) {
                            assigneeName = user.firstName + ' ' + user.lastName;
                        }
                    }
                    let newIssueData = {
                        title: this.titleText,
                        description: this.descriptionText,
                        reporter: this.userName,
                        reporterId: this.userInfo.userId,
                        assignee: assigneeName,
                        assigneeId: this.assigneeText,
                        status: this.statusText,
                        createdOn: Date.now
                    };
                    // console.log("New Issue data:" + JSON.stringify(newIssueData))
                    this.appService.createNewIssue(newIssueData).subscribe((data) => {
                        if (data.status === 200) {
                            this.toastr.success("New Issue created sucessfully!");
                            // when a new issue is created, 2 followers will always be there i.e:
                            // reporter & assignee
                            let reporterFollowerData = {
                                issueId: data.data.issueId,
                                userId: data.data.reporterId,
                                userName: data.data.reporter,
                                issueTitle: data.data.title
                            };
                            let assigneeFollowerData = {
                                issueId: data.data.issueId,
                                userId: data.data.assigneeId,
                                userName: data.data.assignee,
                                issueTitle: data.data.title
                            };
                            this.socketService.followIssue(reporterFollowerData);
                            this.socketService.followIssue(assigneeFollowerData);
                            resolve(data);
                        }
                        else {
                            this.toastr.error(data.message, "Error");
                            reject(data.message);
                        }
                    });
                });
            };
            let sendNotif = (data) => {
                return new Promise((resolve, reject) => {
                    let notifData = {
                        assigneeId: data.data.assigneeId,
                        issueId: data.data.issueId,
                        newIssueTitle: data.data.title,
                        newReporterName: data.data.reporter,
                        editedContent: 'new issue'
                    };
                    console.log("After creating new issue, new issue data: " + data.data.assigneeId);
                    this.socketService.notifyNewAssigneeOfNewIssue(notifData);
                    this.router.navigate(['dashboard']);
                    resolve();
                    // this.socketService.notifyNewAssigneeOfNewIssue(notifData)
                });
            };
            createAndFollow()
                .then(sendNotif)
                .then(() => {
                console.log("Inside final resolve, Notification sent");
            }).catch((err) => {
                console.log(err);
            });
        };
        // click event - to edit an existing issue
        this.editIssue = (form) => {
            // ----- custom logic to track form field changes and specify which field changed --------
            this.hasChanges = false;
            let whatChanged = [];
            for (let prop in form) {
                if (prop !== 'follow' && prop !== 'assignee') {
                    if (this.tempIssueData[prop] !== form[prop]) {
                        this.hasChanges = true;
                        whatChanged.push(prop);
                        this.tempIssueData[prop] = form[prop];
                    }
                }
                if (prop === 'assignee' && this.tempIssueData['assignee'] !== form['assignee']) {
                    this.hasChanges = true;
                    whatChanged.push('assignee');
                    this.tempIssueData['assignee'] = form['assignee'];
                    console.log("New assignee: " + this.currentIssue.assigneeId + form['assignee']);
                    let followData = {
                        issueId: this.issueId,
                        userId: form['assignee'],
                        userName: this.userName
                    };
                    this.socketService.followIssue(followData);
                    let notifData = {
                        assigneeId: form['assignee'],
                        issueId: this.issueId,
                        newIssueTitle: form['title'],
                        newReporterName: this.userName,
                        editedContent: 'new issue'
                    };
                    this.socketService.notifyNewAssigneeOfNewIssue(notifData);
                }
            }
            if (this.hasChanges === true) {
                this.appService.editIssue(this.issueId, this.currentIssue).subscribe((data) => {
                    if (data.status === 200) {
                        this.toastr.success("Edited successfully");
                        console.log("whatchanged: " + whatChanged);
                        let notifData = {
                            editedBy: this.userName,
                            editedContent: whatChanged,
                            issueTitle: this.currentIssue.title,
                            issueId: this.issueId
                        };
                        this.socketService.notifyFollowers(notifData);
                        // this.router.navigate(['dashboard'])
                        //     for(let x in whatChanged){
                        //       console.log("what cahnged: " +whatChanged[x])
                        //     if(whatChanged[x] === 'assignee'){
                        //       console.log("Inside notif loop")
                        //     let notifNewAssigneeData = {
                        //       newIssueTitle: this.currentIssue.title,
                        //       newReporterName: this.userName
                        //     }
                        //     this.socketService.notifyNewAssigneeOfNewIssue(notifNewAssigneeData)
                        //   }
                        // }
                    }
                    else {
                        this.toastr.error(data.message);
                    }
                });
            }
            else {
                this.toastr.error("No chnages made!");
            }
        };
        // click event - to add a new comment to an issue
        this.addNewComment = () => {
            if (this.comments === null || this.comments === '' || this.comments.length === 0) {
                this.toastr.error("Comment can't be blank!");
            }
            else {
                let commentData = {
                    commenterId: this.userInfo.userId,
                    commenterName: this.userName,
                    commentText: this.comments
                };
                this.appService.addNewComment(this.issueId, commentData).subscribe((data) => {
                    if (data.status === 200) {
                        // this.commentsList.push(data.data.comments)
                        this.commentsList = data.data.comments.reverse();
                        // console.log("This is commentsList" + JSON.stringify(this.commentsList))
                        this.comments = '';
                        let notifData = {
                            editedBy: this.userName,
                            editedContent: 'comment',
                            issueTitle: this.currentIssue.title,
                            issueId: this.issueId
                        };
                        this.socketService.notifyFollowers(notifData);
                    }
                    else {
                        this.toastr.error(data.message);
                    }
                });
            }
        };
    }
    ngOnInit() {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("authToken");
        // console.log("issue-desc authToken: " + this.authToken)
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("userName");
        // console.log("issue-desc userName: " + this.userName)
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        // console.log("issue-desc userInfo: " + JSON.stringify(this.userInfo))
        if (this.activatedRoute.snapshot.paramMap.get('issueId')) {
            this.issueId = this.activatedRoute.snapshot.paramMap.get('issueId');
        }
        this.getallUsers();
        // activate edit block only if we get an issueId from dashboard, i.e. user clicked on existing issue
        if (!(this.issueId === null || this.issueId === undefined || this.issueId === '' || this.issueId.length === 0)) {
            this.editBlock = true;
            this.getSelectedIssue();
            this.getSelectedIssueFollowers();
        }
    }
    followCheckBox(event) {
        if (event === 'Y') {
            // console.log("following")
            let followerData = {
                issueId: this.issueId,
                userId: this.userInfo.userId,
                userName: this.userName,
                issueTitle: this.currentIssue.title
            };
            this.socketService.followIssue(followerData);
            this.getSelectedIssueFollowers();
        }
        else if (event === 'N') {
            let unFollowData = {
                issueId: this.issueId,
                userId: this.userInfo.userId
            };
            this.socketService.unFollowIssue(unFollowData);
            this.getSelectedIssueFollowers();
        }
    }
};
IssueDescriptionViewComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
IssueDescriptionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-issue-description',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./issue-description-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issue-tracker/issue-description-view/issue-description-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./issue-description-view.component.css */ "./src/app/issue-tracker/issue-description-view/issue-description-view.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
], IssueDescriptionViewComponent);



/***/ }),

/***/ "./src/app/issue-tracker/issue-tracker.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/issue-tracker/issue-tracker.module.ts ***!
  \*******************************************************/
/*! exports provided: IssueTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTrackerModule", function() { return IssueTrackerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-view/dashboard-view.component */ "./src/app/issue-tracker/dashboard-view/dashboard-view.component.ts");
/* harmony import */ var _issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./issue-description-view/issue-description-view.component */ "./src/app/issue-tracker/issue-description-view/issue-description-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-richtexteditor */ "./node_modules/@syncfusion/ej2-angular-richtexteditor/@syncfusion/ej2-angular-richtexteditor.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _shared_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../shared/search-pipe */ "./src/app/shared/search-pipe.ts");
/* harmony import */ var _route_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-guard.service */ "./src/app/issue-tracker/route-guard.service.ts");







// https://www.syncfusion.com/kb/9864/how-to-get-started-easily-with-syncfusion-angular-7-rich-text-editor




let IssueTrackerModule = class IssueTrackerModule {
};
IssueTrackerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__["DashboardViewComponent"], _issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_4__["IssueDescriptionViewComponent"], _shared_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _syncfusion_ej2_angular_richtexteditor__WEBPACK_IMPORTED_MODULE_7__["RichTextEditorAllModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'dashboard', component: _dashboard_view_dashboard_view_component__WEBPACK_IMPORTED_MODULE_3__["DashboardViewComponent"] },
                { path: 'description', component: _issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_4__["IssueDescriptionViewComponent"] },
                { path: 'description/:issueId', component: _issue_description_view_issue_description_view_component__WEBPACK_IMPORTED_MODULE_4__["IssueDescriptionViewComponent"] }
            ])
        ],
        providers: [_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]]
    })
], IssueTrackerModule);



/***/ }),

/***/ "./src/app/issue-tracker/route-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/issue-tracker/route-guard.service.ts ***!
  \******************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




let RouteGuardService = class RouteGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        console.log("in route guard service");
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
};
RouteGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteGuardService);



/***/ }),

/***/ "./src/app/shared/search-pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/search-pipe.ts ***!
  \***************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(items, searchText) {
        // console.log("PIPE items: " + JSON.stringify(items))
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.title.toLowerCase().includes(searchText) || it.reporter.toLowerCase().includes(searchText) || it.status.toLowerCase().includes(searchText);
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


//importing socket io


//for http requests - GET, POST, PUT etc.

let SocketService = class SocketService {
    constructor(http) {
        this.http = http;
        this.url = "http://api.issuetracker.info";
        //-----------------events to be listened-----------------------
        this.authError = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('auth-error', (data) => {
                    observer.next(data);
                }); //end socket
            }); //end observer
        }; //end authError
        this.verifyUser = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('verifyUser', (data) => {
                    observer.next(data);
                }); //end socket
            }); //end return of Observable
        }; //end verifyUser
        this.setUser = (authToken) => {
            this.socket.emit("set-user", authToken);
        }; //end setUser 
        // when a user requests for following an issue
        this.followIssue = (followerData) => {
            this.socket.emit('follow-issue', followerData);
        };
        this.unFollowIssue = (unFollowerData) => {
            this.socket.emit('unfollow-issue', unFollowerData);
        };
        this.emitGetFollowersList = (issueId) => {
            this.socket.emit('get-all-followers', issueId);
        };
        this.notifyFollowers = (data) => {
            console.log("Inside notify emit");
            this.socket.emit('notify-all-followers', data);
        };
        this.startRoom = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('startUserRoom', (data) => {
                    observer.next(data);
                });
            });
        };
        this.emitJoinRoom = (data) => {
            this.socket.emit('joinUserRoom', data);
        };
        this.notifyNewAssigneeOfNewIssue = (data) => {
            this.socket.emit('notify-assignee-new-issue', data);
        };
        this.updateIssueList = () => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
                this.socket.on('update-issue-list', (data) => {
                    observer.next(data);
                });
            });
        };
        this.disconnect = (userId) => {
            this.socket.disconnect(userId);
        };
        // console.log("inside socket constructor")
        //first step where connection is established. i.e. Handshake moment
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    getFollowersList(issueId) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this.socket.on(issueId, (data) => {
                observer.next(data);
            });
        });
    }
    receiveNotification() {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
            this.socket.on('notification', (data) => {
                // console.log("New notification received!")
                observer.next(data);
            });
        });
    }
};
SocketService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketService);



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .container-fluid {\r\n    background-image: url(https://cdn.pixabay.com/photo/2015/12/13/18/33/christmas-1091551_1280.jpg);\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n  }\r\n  \r\n  .app-logo{\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\n  }\r\n  \r\n  .img{\r\n    /* background:url(\"/src/assets/images/bugMainImg.png\") no-repeat center center; */\r\n    max-width: 100%;\r\n    height: 12vh;\r\n    \r\n  }\r\n  \r\n  .card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n    background-image: url(https://www.designbolts.com/wp-content/uploads/2013/02/Pineapple-cut-Grey-Seamless-Pattern-For-Website-Background.jpg);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0.7rem;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    /* padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3)); */\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .txt1 {\r\n    /* font-family: Raleway-Regular; */\r\n    font-size: 16px;\r\n    color: #999999;\r\n    line-height: 1.4;\r\n  }\r\n  \r\n  .bo1 {\r\n    border-bottom: 1px solid #999999;\r\n  }\r\n  \r\n  .hov1:hover {\r\n    border-color: #d33f8d;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0dBQWdHO0lBQ2hHLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBQ0E7QUFDRixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtFQUNqQjs7RUFHQTtJQUNFLGlGQUFpRjtJQUNqRixlQUFlO0lBQ2YsWUFBWTs7RUFFZDs7RUFDQTtJQUNFLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLDRJQUE0STtFQUM5STs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBTUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrRkFBa0Y7SUFDbEYsZ0RBQWdEO0VBQ2xEOztFQUdBO0lBQ0UsNkNBQTZDO0lBQzdDLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0NBQWdDO0VBQ2xDOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTIvMTMvMTgvMzMvY2hyaXN0bWFzLTEwOTE1NTFfMTI4MC5qcGcpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuICAuYXBwLWxvZ297XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0gIFxyXG4gXHJcblxyXG4gIC5pbWd7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOnVybChcIi9zcmMvYXNzZXRzL2ltYWdlcy9idWdNYWluSW1nLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjsgKi9cclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTJ2aDtcclxuICAgIFxyXG4gIH1cclxuICAuY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cuZGVzaWduYm9sdHMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEzLzAyL1BpbmVhcHBsZS1jdXQtR3JleS1TZWFtbGVzcy1QYXR0ZXJuLUZvci1XZWJzaXRlLUJhY2tncm91bmQuanBnKTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbmluIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ25pbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gICAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMC43cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGA8bGFiZWw+YCBtYXJnaW4gKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgICAvKiBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICsgdmFyKC0taW5wdXQtcGFkZGluZy15KSAqICgyIC8gMykpOyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKX5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICB9XHJcblxyXG4gIC50eHQxIHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBSYWxld2F5LVJlZ3VsYXI7ICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibzEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3YxOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2QzM2Y4ZDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(appService, router, toastr) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.model = {};
        this.goToSignUp = () => {
            this.router.navigate(['/sign-up']);
        }; // end goToSignUp
    }
    ngOnInit() {
    }
    onSubmit() {
        let data = {
            email: this.model.email,
            password: this.model.password
        };
        this.appService.signinFunction(data).subscribe((apiResponse) => {
            if (apiResponse.status === 200) {
                // console.log(apiResponse)
                // this.cookieService.setItem('accept-cookie', 'true') 
                // this.acceptedCookie = true 
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set("authToken", apiResponse.data.authToken);
                //console.log("authToken in cookie sigin component: "+at)
                // console.log("authToken from apiResponse in sigin component: " + apiResponse.data.authToken)
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set("userId", apiResponse.data.userDetails.userId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set("userName", (apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName).trim());
                this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                this.toastr.success(apiResponse.message);
                this.router.navigate(['/dashboard']);
            }
            else {
                // console.log("login component in else part: " +apiResponse.message)
                this.toastr.error(apiResponse.message);
            }
        }, (err) => {
            // console.log("login component in error part: " +err.message)
            this.toastr.error(err.message);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root {\r\n    --input-padding-x: 1.5rem;\r\n    --input-padding-y: .75rem;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .container-fluid {\r\n    background-image: url(https://cdn.pixabay.com/photo/2015/12/13/18/33/christmas-1091551_1280.jpg);\r\n    min-height: 100vh;\r\n    min-width: 100vw;\r\n  }\r\n  \r\n  .app-logo{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .img{\r\n    max-width: 100%;\r\n    height: 12vh;\r\n    \r\n  }\r\n  \r\n  .card-signup {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n    background-image: url(https://www.designbolts.com/wp-content/uploads/2013/02/Pineapple-cut-Grey-Seamless-Pattern-For-Website-Background.jpg);\r\n  }\r\n  \r\n  .card-signup .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signup .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signup {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signup .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0.7rem;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    /* padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3)); */\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .txt1 {\r\n    /* font-family: Raleway-Regular; */\r\n    font-size: 16px;\r\n    color: #999999;\r\n    line-height: 1.4;\r\n  }\r\n  \r\n  .bo1 {\r\n    border-bottom: 1px solid #999999;\r\n  }\r\n  \r\n  .hov1:hover {\r\n    border-color: #d33f8d;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnR0FBZ0c7SUFDaEcsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7O0VBRWQ7O0VBQ0E7SUFDRSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5Qyw0SUFBNEk7RUFDOUk7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQU1BO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0ZBQWtGO0lBQ2xGLGdEQUFnRDtFQUNsRDs7RUFHQTtJQUNFLDZDQUE2QztJQUM3QyxnREFBZ0Q7SUFDaEQsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMTIvMTMvMTgvMzMvY2hyaXN0bWFzLTEwOTE1NTFfMTI4MC5qcGcpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gIH1cclxuICAuYXBwLWxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMnZoO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5jYXJkLXNpZ251cCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5kZXNpZ25ib2x0cy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDIvUGluZWFwcGxlLWN1dC1HcmV5LVNlYW1sZXNzLVBhdHRlcm4tRm9yLVdlYnNpdGUtQmFja2dyb3VuZC5qcGcpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWdudXAgLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbnVwIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tc2lnbnVwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWdudXAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICAgIC8qIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7ICovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuXHJcbiAgLnR4dDEge1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFJhbGV3YXktUmVndWxhcjsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbiAgXHJcbiAgLmJvMSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdjE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDMzZjhkO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SignupComponent = class SignupComponent {
    constructor(appService, router, toastr, location) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.model = {};
        this.goToSignIn = () => {
            // this.router.navigate(['/']);
            this.location.back();
        }; // end goToSignIn
    }
    ngOnInit() {
    }
    onSubmit() {
        let data = {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            mobileNumber: this.model.mobNum,
            email: this.model.email,
            password: this.model.password,
            createdOn: Date.now()
        };
        // console.log(data);
        this.appService.signupFunction(data).subscribe((apiResponse) => {
            // console.log(apiResponse);
            if (apiResponse.status === 200) {
                this.toastr.success('Signup successful');
                setTimeout(() => {
                    this.goToSignIn();
                }, 2000);
            }
            else {
                this.toastr.error(apiResponse.message);
            }
        }, (err) => {
            this.toastr.error('some error occured');
            // console.log("Error message: " + err.message)
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
            ])
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\frontend dist\IssueTrackingTool-Frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map