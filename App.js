import MyDrawer from './Components/Header/Drawer';
import AddMetric from './Pages/AddMetric';
import ViewMetrics from './Pages/ViewMetrics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div>
        {/* <GetValueWindow tenant= {0} intersection="catpromo" metricId="sum_max_buy_cost" /> */}
        {/* <ViewMetrics/> */}
        {/* <PopUp buttonContent = "Get Values" content={<GetValueWindow tenant= {1} intersection="promocond" metricId="amount_off" />}/> */}
        <MyDrawer sx={{ display: 'flew', x: 0 }} />
        <Routes>
          <Route exact path="/AddMetric" element={<AddMetric />} />
          <Route exact path="/ViewMetrics" element={<ViewMetrics />}>
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>


  );
}

export default App;
