import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Suspense, lazy } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Spinner } from "./components/Common";
import { Store } from "./components/context";
import { taskRequests } from "./services/requests";
import { arrayLength } from "./utils/data";


const HomeScreen = lazy(() => import('./pages'))
const TaskHomeScreen = lazy(() => import('./pages/tasks'))
const TaskDetailsScreen = lazy(() => import('./pages/tasks/details'))

function App() {
  const [lists, setLists] = useState<any>([])

  const updateLists = (lists: any) => {
    setLists([...lists])
  }
  const getAllLists = useCallback(async () => {
    try {
      const response = await taskRequests.getAllTickets()
      const allLists = await response.data
      if (arrayLength(allLists)) {
        setLists([...allLists])
      }
    } catch (error: any) {
      const message = error?.response?.data?.message
      toast.error(message || 'Network error, please try again later')
    }
  }, [])

  useEffect(() => {
    getAllLists()
  }, [getAllLists])

  return (
    <Store.Provider value={{
      lists: lists,
      setLists: updateLists
    }}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/tasks" element={<TaskHomeScreen />} />
            <Route path="/tasks/:id/details" element={<TaskDetailsScreen />} />
          </Routes>
          <Toaster />
        </Suspense>

      </Router>
    </Store.Provider>


  );
}

export default App;
