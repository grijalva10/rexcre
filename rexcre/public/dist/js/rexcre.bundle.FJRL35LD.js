(() => {
  // ../rexcre/rexcre/public/js/custom_sidebar.js
  frappe.provide("frappe.views");
  frappe.views.CustomSidebar = class CustomSidebar {
    constructor(wrapper) {
      this.wrapper = wrapper;
      this.setup_sidebar();
    }
    setup_sidebar() {
      const menuItems = [
        {
          title: "CRE",
          items: [
            {
              label: "Leads",
              href: "/app/lead",
              icon: "icon-users"
            }
          ]
        }
      ];
      menuItems.forEach((item) => {
        const section = this.wrapper.append(`<h3>${item.title}</h3>`);
        if (item.items && Array.isArray(item.items)) {
          item.items.forEach((subItem) => {
            const menuItem = {
              label: subItem.label,
              icon: subItem.icon,
              href: subItem.href
            };
            const sidebarItem = $('<a class="item-anchor"></a>').attr("href", menuItem.href).html(`
                            <span class="sidebar-item-icon">
                                <svg class="icon icon-md">
                                    <use href="#${menuItem.icon}"></use>
                                </svg>
                            </span>
                            <span class="sidebar-item-label">${menuItem.label}</span>
                        `);
            this.wrapper.append(sidebarItem);
          });
        }
      });
    }
  };

  // ../rexcre/rexcre/public/js/list_view.js
  frappe.views.ListView = class ListView extends frappe.views.ListView {
    render_view() {
      super.render_view();
      let sideSection = $(".layout-side-section");
      if (sideSection.length > 0) {
        new frappe.views.CustomSidebar(sideSection);
      }
    }
  };
})();
//# sourceMappingURL=rexcre.bundle.FJRL35LD.js.map
