import { BrowserRouter ,Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './components/login'
import AdminContent from './components/adminContent'
import StudentContent from './components/studentContent'
import StudentDashboard from "./components/studentDashboard";

function App() {
  return (
    
    <Routes>

      <Route path="/" element={<Login/>} />

      <Route path="/user" element={<StudentContent />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<StudentDashboard />} />
        {/* <Route path="actions" element={<UserActions />} /> */}
      </Route>

      <Route path="/admin" element={<AdminContent />}>
        {/* Default route inside admin dashboard */}
        <Route index element={<Navigate to="overview" replace />} />
      </Route>

    </Routes>
  )
}

export default App
