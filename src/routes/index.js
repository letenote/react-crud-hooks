import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { menu } from './menu';
import Navbar from "../components/Navbar";

const Routes = () => {
  return(
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          {menu && menu.map((menu, index) => (
            <RouteWithSubRoutes
              key={`${index + 1}${menu}`}
              exact={menu.exact}
              routeType={menu.type}
              nestedRoute={menu.nested}
              path={menu.path}
              component={menu.lazyComponent}
            />
          ))}
          <Route render={(props) => <>not page found</>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
};

const RouteWithSubRoutes = ({ component: Component, ...rest }) => {
  return (
    <div>
      <React.Suspense fallback={"loading..."}>
        <Route
          {...rest}
          render={(props) => {
              if(rest.routeType === "single"){
                return <Component {...props} />
              }
              if(rest.routeType === "nested"){
                return RouteWithNestedRoutes(rest)
              }
          }}
        />
      </React.Suspense>
    </div>
  );
}

const RouteWithNestedRoutes = (rest) => {
  return(
    <Switch>
      { NestedRouteLoop(rest) }
      <Route render={(props) => <>not page found</>} />
    </Switch>
  )
}

const NestedRouteLoop = ( rest ) => {
  return rest.nestedRoute.map((menu, menuIndex) => (
    <Route 
      {...rest}
      key={menuIndex} 
      exact={menu.exact} 
      path={menu.path} 
      render={(props) => <menu.lazyComponent {...props} />}
    />
  ))
}


export default Routes;