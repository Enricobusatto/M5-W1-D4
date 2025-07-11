import { createRoot } from 'react-dom/client'
import Welcome from './Welcome.jsx'
import MyNav from './Mynav.jsx'
import MyFooter from './MyFooter.jsx'
import AllTheBooks from './AllTheBooks.jsx'

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
