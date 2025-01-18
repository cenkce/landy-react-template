import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";

const HomPage = lazy(() => import(`../pages/Home`));

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        return (
        <Route
          path={["/", "/home"]}
          exact={true}
          component={HomPage}
        />
        );
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
