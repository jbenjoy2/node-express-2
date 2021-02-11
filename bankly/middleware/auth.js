/** Middleware for handling req authorization for routes. */

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

/** Authorization Middleware: Requires user is logged in. */

function requireLogin(req, res, next) {
	try {
		if (req.curr_username) {
			return next();
		} else {
			return next({ status: 401, message: 'Unauthorized' });
		}
	} catch (err) {
		return next(err);
	}
}

/** Authorization Middleware: Requires user is logged in and is admin. */

function requireAdmin(req, res, next) {
	try {
		if (req.curr_admin) {
			return next();
		} else {
			return next({ status: 401, message: 'Unauthorized' });
		}
	} catch (err) {
		return next(err);
	}
}

// Authorization middleware, requires user to be logged in OR admin
// FIXES BUG 3
function requireLoginOrAdmin(req, res, next) {
	try {
		// if (logged in AND (either is admin or the correct user)), return next, otherwise throw 401
		if (req.curr_username && (req.curr_admin || req.curr_username === req.params.username)) {
			return next();
		} else {
			return next({ status: 401, message: 'Unauthorized' });
		}
	} catch (error) {
		return next(err);
	}
}

/** Authentication Middleware: put user on request
 *
 * If there is a token, verify it, get payload (username/admin),
 * and store the username/admin on the request, so other middleware/routes
 * can use it.
 *
 * It's fine if there's no token---if not, don't set anything on the
 * request.
 *
 * If the token is invalid, an error will be raised.
 *
 **/

function authUser(req, res, next) {
	try {
		const token = req.body._token || req.query._token;
		if (token) {
			// FIXES BUG#6: VERIFY THE TOKEN DON'T DECODE IT!
			let payload = jwt.verify(token, SECRET_KEY);
			req.curr_username = payload.username;
			req.curr_admin = payload.admin;
		}
		return next();
	} catch (err) {
		err.status = 401;
		return next(err);
	}
} // end

module.exports = {
	requireLogin,
	requireAdmin,
	requireLoginOrAdmin,
	authUser
};
