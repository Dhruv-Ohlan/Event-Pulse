import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Protected Dashboard Routes wrapped in a Layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/timeline/:id?" element={<CampaignTimeline />} />
          <Route path="/editor/:id?" element={<ContentEditor />} />
          <Route path="/pulse" element={<CampusPulse />} />
          <Route path="/create-campaign" element={<CreateCampaignForm />} />
          <Route path="/export-summary/:id?" element={<ExportSummary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
