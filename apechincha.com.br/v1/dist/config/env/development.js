'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressHbs = require('express-hbs');

var _expressHbs2 = _interopRequireDefault(_expressHbs);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.set('port', 9000);
    app.set('views', _path2.default.join(__dirname, './../../views'));
    app.set('view engine', 'hbs');

    app.use(_express2.default.static(_path2.default.join(__dirname, './../../public')));
    app.use((0, _morgan2.default)('dev'));
    app.use(_bodyParser2.default.urlencoded({ extended: false }));
    app.use(_bodyParser2.default.json());
    app.use((0, _methodOverride2.default)('_method'));
    app.use((0, _expressSession2.default)({
        secret: '73124b74b10b5bb2acft560898098',
        resave: false,
        saveUninitialized: false
    }));

    app.engine('hbs', _expressHbs2.default.express4({
        defaultLayout: _path2.default.join(app.get('views'), 'layouts/main.hbs'),
        partialsDir: _path2.default.join(app.get('views'), 'partials'),
        layoutsDir: _path2.default.join(app.get('views'), 'layouts')
    }));
};