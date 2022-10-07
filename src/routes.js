import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

import {
  FaUsers,
} from "react-icons/fa";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import Users from "views/admin/users";
import Items from "views/admin/items";
import Branches from "views/admin/Branches";
import Categories from "views/admin/categories";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={FaUsers} width='20px' height='20px' color='inherit' />,
    component: Users,
  },
  {
    name: "Items",
    layout: "/admin",
    path: "/items",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Items,
  },
  {
    name: "Branches",
    layout: "/admin",
    path: "/branches",
    icon: <Icon as={FaUsers} width='20px' height='20px' color='inherit' />,
    component: Branches,
  },
  {
    name: "Categories",
    layout: "/admin",
    path: "/categories",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Categories,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  }
];

export default routes;
