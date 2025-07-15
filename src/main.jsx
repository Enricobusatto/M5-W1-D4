import { createRoot } from 'react-dom/client'
import MyNav from './components/MyNav.jsx'
import Welcome from './components/Welcome.jsx'
import AllTheBooks from './components/AllTheBooks.jsx'
import MyFooter from './components/MyFooter.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <MyNav />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
  </>

  // </StrictMode>,
)
