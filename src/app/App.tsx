import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="text-center bg-app-main">
      {/* her add your navbar */}
      <Outlet />
      {/* her add your Footer */}
    </div>
  )
}

export default App
