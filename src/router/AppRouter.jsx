import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { ControlPage } from '../menu/pages/ControlPage';
export const AppRouter = () => {
  const authstatus = 'authenticated'
  return (
    <Routes>
      {
        (authstatus === 'not-authenticated')
          ?
          <Route path="/auth/*" element={<LoginPage />} />
          : <Route path="/*" element={<ControlPage />} />
      }
      <Route path="/*" element={<Navigate to="/auth/login" />} />


    </Routes>
  )
}
