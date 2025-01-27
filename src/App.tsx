import MainLayout from "./components/layout/Main.Layout"
import ProtectedRoute from "./components/layout/ProtectedRoute"

function App() {

  return <ProtectedRoute> <MainLayout /> </ProtectedRoute>

}

export default App
