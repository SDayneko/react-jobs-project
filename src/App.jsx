import logo from '../src/assets/images/logo.png'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import Navbar from './components/Navbar'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
    </>
  )
}

export default App