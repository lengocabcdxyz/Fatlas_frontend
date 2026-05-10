// LogoutButton.tsx
import { logout } from './api'

export default function LogoutButton() {
  return (
    <button onClick={logout}>
      Logout
    </button>
  )
}