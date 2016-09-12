/** config constant */
(function() {
	var moduleConfig = angular.module('moduleConfig', []);
	moduleConfig.constant('config', {
		local: {
			baseUrl: 'http://localhost',
			getprofile: '/get-profile',
			register: '/register',
			removeProfile: '/remove-profile',
			getall: 'get-all-profile',
		},
		alpha: {
			baseUrl: 'http://localhost',
			getprofile: '/get-profile',
			register: '/register',
			removeProfile: '/remove-profile',
			getall: 'get-all-profile',
		},
		staging: {
			baseUrl: 'http://localhost',
			getprofile: '/get-profile',
			register: '/register',
			removeProfile: '/remove-profile',
			getall: 'get-all-profile',
		},
		production: {
			baseUrl: 'http://localhost',
			getprofile: '/get-profile',
			register: '/register',
			removeProfile: '/remove-profile',
			getall: 'get-all-profile',
		},

	});
	/** config constant language */
	moduleConfig.constant('lang', {
		th: {
			message: {
				success: 'ทำรายการสำเร็จ',
				fail: 'ไม่สามารถทำรายการได้',
			},
			error: {
				404: 'ไม่พบหน้าที่คุณเรียก',
				500: 'เกิดข้อผิดพลาด',
			},
			display: {},
			alert: {},
			alert: {},
		},
		en: {
			message: {
				success: 'ทำรายการสำเร็จ',
				fail: 'ไม่สามารถทำรายการได้',
			},
			error: {
				404: 'ไม่พบหน้าที่คุณเรียก',
				500: 'เกิดข้อผิดพลาด',
			},
			display: {},
			alert: {},
			alert: {},
		},
	});
	/** config facebook constant */
	moduleConfig.constant('facebookConfig', {
		appId: '295136370824606',
		status: true,
		cookie: true,
		xfbml: true,
		version: 'v2.4'
	});
}());