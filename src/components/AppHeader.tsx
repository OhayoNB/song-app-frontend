import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <section className="app-header main-layout full">
      <div className="layout-container">
        <div>Thing or Two.</div>
        <nav className="navbar">
          <NavLink end to="/upload">
            Upload file
          </NavLink>
          <NavLink end to="/song-list">
            Song List
          </NavLink>
        </nav>
      </div>
    </section>
  )
}