export const GET_MENUS = `
  query GetMenus {
    menus {
      nodes {
        id
        name
        menuItems {
          nodes {
            id
            label
            uri
            parentId
            childItems {
              nodes {
                id
                label
                uri
                parentId
                childItems {
                  nodes {
                    id
                    label
                    uri
                    parentId
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// FOOTER MENU
export const Quick_Links_menu = `
  query GetMenus {
    menus {
      nodes {
        id
        name
        menuItems {
          nodes {
            id
            label
            uri
            parentId
          }
        }
      }
    }
  }
`;
