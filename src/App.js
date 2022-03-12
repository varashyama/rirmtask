import './App.css';
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppShell from './components/app-shell/app_shell';
import Compose from './components/compose/compose';


function App() {
  return (
    <div className="h-100">
      <AppShell>
        <div className="container-fluid  bg-light h-100">
          <div className="row">
            <section className="col-12 col-md-4 col-lg-3">
              <Compose />
            </section>
            <section className="col-12 col-md-8">
              inbox
            </section>
          </div>
        </div>
      </AppShell>
    </div>
  )
}

export default App;

