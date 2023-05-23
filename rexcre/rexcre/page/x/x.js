frappe.pages['x'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'CRE CRM',
        single_column: false
    });

    // Instantiate a new sidebar
    var sidebar = new frappe.ui.Sidebar({
        wrapper: $(wrapper).find('.layout-side-section'),
        css_class: 'custom-sidebar'
    });

    // Function to render a ListView
    function render_list(doctype) {
        // Check if the listview exists and destroy it if so
        if(page.listView) {
            page.listView.destroy();
        }

        // Create a new ListFactory instance
        var list_factory = new frappe.views.ListFactory();
        
        // Set the page route
        frappe.route_options = { "doctype": doctype };

        // Generate the list view
        list_factory.make(['List', doctype]);
    }

    // Add navigation items to the sidebar
    sidebar.add_item({
        label: 'Leads',
        on_click: function() {
            render_list('Lead');
        }
    });

    sidebar.add_item({
        label: 'Deals',
        on_click: function() {
            render_list('Deal');
        }
    });

    // Render default ListView (Leads in this case)
    render_list('Lead');
};
