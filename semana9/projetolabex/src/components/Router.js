import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

// Importando as páginas
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ApplicationFormPage from "./ApplicationFormPage";
import TripDetailPage from "./TripDetailsPage";


export function Router(){

    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/sobre/:linguagem">
            {/* O que será renderizado quando a rota for "/sobre" */}
            <LoginPage />
          </Route>
          <Route exact path="/sobredia/:linguagem">
            {/* O que será renderizado quando a rota for "/sobre" */}
            <ApplicationFormPage/>
          </Route>
          <Route exact path="/">
            {/* O que será renderizado quando a rota for "/"" */}
            <HomePage />
          </Route>
          <Route path="/">
            {/* O que será renderizado quando a rota for desconhecida */}
            <h3>Eita Giovana, o forninho caiu (404)</h3>
          </Route>
        
    
       
      
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/trip">
          <TripDetailPage />
        </Route>

</Switch>


  </BrowserRouter>


    )
}


