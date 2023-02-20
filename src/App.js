import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/pages/Authentication/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { Leads } from "./components/pages/Dashboard/Leads/Leads";
import RequireAuth from "./util/RequireAuth";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<Leads />} />
                    <Route path="leads" element={<Leads />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
