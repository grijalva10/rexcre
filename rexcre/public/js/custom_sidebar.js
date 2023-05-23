// frappe.provide("frappe.views");

// frappe.views.CustomSidebar = class CustomSidebar {
//     constructor() {
//         this.setup_sidebar();
//     }

//     setup_sidebar() {
//         // Create the sidebar
//         this.sidebar = new frappe.ui.Sidebar({
//             wrapper: $('<div class="cre-sidebar overlay-sidebar"></div>'),
//             css_class: 'custom-sidebar'
//         });

//         // Define menu items
//         const menuItems = [
//             {
//                 title: 'CRE',
//                 items: [
//                     {
//                         label: 'Leads',
//                         href: '/app/lead',
//                         icon: 'icon-users'
//                     }
//                 ]
//             }
//         ];

//         // Add menu items to the sidebar
//         menuItems.forEach(item => {
//             const section = this.sidebar.get_section(item.title);

//             if (item.items && Array.isArray(item.items)) {
//                 item.items.forEach(subItem => {
//                     const menuItem = {
//                         label: subItem.label,
//                         icon: subItem.icon,
//                         href: subItem.href
//                     };

//                     const sidebarItem = $('<a class="item-anchor"></a>')
//                         .attr('href', menuItem.href)
//                         .html(`
//                             <span class="sidebar-item-icon">
//                                 <svg class="icon icon-md">
//                                     <use href="#${menuItem.icon}"></use>
//                                 </svg>
//                             </span>
//                             <span class="sidebar-item-label">${menuItem.label}</span>
//                         `);

//                     this.sidebar.add_item(sidebarItem, section);
//                 });
//             }
//         });

//         // Move sidebar to layout-side-section
//         let sideSection = $('.layout-side-section');
//         sideSection.empty(); // removes current contents
//         sideSection.append(this.sidebar.wrapper);

//         // Move existing content to custom-actions
//         let customActions = $('.custom-actions');
//         let sideSectionContent = sideSection.contents(); // saves the current contents
//         customActions.append(sideSectionContent);

//         // Add click event for the toggle button
//         $('.toggle-sidebar').on('click', () => this.toggleSidebar());
        
//         // Add event listener to close the sidebar when clicked outside
//         $(document).on('click', (e) => {
//             if (!$(e.target).closest('.custom-sidebar').length && $('.custom-sidebar').hasClass('open')) {
//                 this.toggleSidebar();
//             }
//         });
//     }

//     toggleSidebar() {
//         if (window.innerWidth < 768) {  // Check if it is a mobile device
//             $('body').toggleClass('overlay-sidebar-open');
//         } else {
//             $('.main-section').toggleClass('open');
//         }
//     }
// };

// // Instantiate the sidebar
// new frappe.views.CustomSidebar();

frappe.provide("frappe.views");

frappe.views.CustomSidebar = class CustomSidebar {
    constructor(wrapper) {
        this.wrapper = wrapper;
        this.setup_sidebar();
    }

    setup_sidebar() {
        // Define menu items
        const menuItems = [
            {
                title: 'CRE',
                items: [
                    {
                        label: 'Leads',
                        href: '/app/lead',
                        icon: 'icon-users'
                    }
                ]
            }
        ];

        // Add menu items to the sidebar
        menuItems.forEach(item => {
            const section = this.wrapper.append(`<h3>${item.title}</h3>`);

            if (item.items && Array.isArray(item.items)) {
                item.items.forEach(subItem => {
                    const menuItem = {
                        label: subItem.label,
                        icon: subItem.icon,
                        href: subItem.href
                    };

                    const sidebarItem = $('<a class="item-anchor"></a>')
                        .attr('href', menuItem.href)
                        .html(`
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
