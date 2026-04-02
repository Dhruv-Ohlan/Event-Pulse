import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainDashboard from './pages/MainDashboard';
import CampaignTimeline from './pages/CampaignTimeline';
import ContentEditor from './pages/ContentEditor';
import CampusPulse from './pages/CampusPulse';
import CreateCampaignForm from './pages/CreateCampaignForm';
import ExportSummary from './pages/ExportSummary';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Protected Dashboard Routes wrapped in a Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/timeline" element={<CampaignTimeline />} />
          <Route path="/editor" element={<ContentEditor />} />
          <Route path="/pulse" element={<CampusPulse />} />
          <Route path="/create-campaign" element={<CreateCampaignForm />} />
          <Route path="/export-summary" element={<ExportSummary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
