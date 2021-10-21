import Header from "components/Header";
import Footer from "components/Footer";
import DashboardPage from "pages/DashboardPage";
import ListClientPage from "pages/ListClientsPage";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
interface LayoutClientProps {}

const LayoutClient: React.FC<LayoutClientProps> = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact />
        <Route path="/clients" component={ListClientPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
};

export default LayoutClient;
