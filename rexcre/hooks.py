from . import __version__ as app_version

app_name = "rexcre"
app_title = "RexCRE"
app_publisher = "jmg"
app_description = "jmg"
app_email = "jmg"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = ["/assets/rexcre/css/custom_sidebar.css"]
# app_include_js = ["rexcre.bundle.js"]
# app_include_js = ["/assets/rexcre/js/rexcre.js"]


# include js, css files in header of web template
# web_include_css = "/assets/rexcre/css/rexcre.css"
# web_include_js = "/assets/rexcre/js/rexcre.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "rexcre/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
doctype_list_js = {"Note" : "public/js/note_list.js", 
                   "Lead" : "public/js/lead_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "rexcre.utils.jinja_methods",
#	"filters": "rexcre.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "rexcre.install.before_install"
# after_install = "rexcre.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "rexcre.uninstall.before_uninstall"
# after_uninstall = "rexcre.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "rexcre.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"rexcre.tasks.all"
#	],
#	"daily": [
#		"rexcre.tasks.daily"
#	],
#	"hourly": [
#		"rexcre.tasks.hourly"
#	],
#	"weekly": [
#		"rexcre.tasks.weekly"
#	],
#	"monthly": [
#		"rexcre.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "rexcre.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "rexcre.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "rexcre.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["rexcre.utils.before_request"]
# after_request = ["rexcre.utils.after_request"]

# Job Events
# ----------
# before_job = ["rexcre.utils.before_job"]
# after_job = ["rexcre.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"rexcre.auth.validate"
# ]

website_route_rules = [{'from_route': '/falcon/<path:app_path>', 'to_route': 'falcon'},]

has_permission = {
    "Raven Channel": "raven.permissions.channel_has_permission",
    "Raven Channel Member": "raven.permissions.channel_member_has_permission",
    "Raven Message": "raven.permissions.message_has_permission",
}

on_session_creation = "raven.api.user_availability.set_user_active"
on_logout = "raven.api.user_availability.set_user_inactive"