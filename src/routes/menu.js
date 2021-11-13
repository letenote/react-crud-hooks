import React from "react";
import { Redirect } from "react-router-dom";

export const menu = [
  {
    path: "/",
    exact: true,
    type: "single",
    lazyComponent: () => <Redirect to={"/contact"}/>,
  },
  {
    path: "/contact",
    initial: "contact",
    type: "nested",
    exact: false,
    nested: [
      {
        path: "/contact",
        exact: true,
        type: "single",
        lazyComponent: React.lazy(() => import('../container/Contact'))
      },
      {
        path: "/contact/create",
        exact: true,
        type: "single",
        lazyComponent: React.lazy(() => import('../container/Create'))
      },
      {
        path: "/contact/update",
        exact: true,
        type: "single",
        lazyComponent: React.lazy(() => import('../container/Create'))
      },
      {
        path: "/contact/:id",
        exact: true,
        type: "single",
        lazyComponent: React.lazy(() => import('../container/Detail'))
      }
    ]
  }
]