import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import VideosCorporativos from './pages/VideosCorporativos'
import VideosAnimados from './pages/VideosAnimados'
import Videos from './pages/Videos'
import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'
import SecurityProtection from './components/SecurityProtection'

export default function App() {
  return (
    <>
      <SecurityProtection />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/videos-corporativos" component={VideosCorporativos} />
        <Route path="/videos-animados" component={VideosAnimados} />
        <Route path="/videos" component={Videos} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/contacto" component={Contacto} />
        <Route>
          {/* 404 */}
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
              <p className="text-white/70 mb-8">Página no encontrada</p>
              <a href="/" className="btn-orange">Volver al inicio</a>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  )
}
