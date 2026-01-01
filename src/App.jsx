import { Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'


function App() {
return (
<Routes>
<Route path="/" element={<h1>Home</h1>} />
<Route path="/profile" element={<Profile />} />
</Routes>
)
}


export default App