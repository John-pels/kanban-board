import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


const HomeScreen = lazy(() => import('./pages'))
const TaskHomeScreen = lazy(() => import('./pages/tasks'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/tasks" element={<TaskHomeScreen />} />
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;
