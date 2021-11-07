import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Header from './components/Header';
import JobDetail from './pages/JobDetail';
import Jobs from './pages/Jobs';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="font-KumbhSans bg-grey-light dark:bg-blue-midnight dark:text-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/jobs" />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="job-detail" element={<JobDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
