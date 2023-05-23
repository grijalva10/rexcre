frappe.views.ListView = class ListView extends frappe.views.ListView {
    render_view() {
        super.render_view();  // Call parent method

        let sideSection = $(".layout-side-section");

        if (sideSection.length > 0) {
            new frappe.views.CustomSidebar(sideSection);
        }
    }
};
