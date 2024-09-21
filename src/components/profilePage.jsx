import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Lock, LogOut, Trash2, CreditCard, Settings, HeadphonesIcon } from "lucide-react"

export default function ProfilePage() {
  const [selectedOption, setSelectedOption] = useState('profile')
  const [showAccountOptions, setShowAccountOptions] = useState(false)

  const profileInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY"
  }

  const renderContent = () => {
    switch (selectedOption) {
      case 'profile':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(profileInfo).map(([key, value]) => (
                <div key={key}>
                  <h3 className="text-sm font-medium text-gray-500">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <p className="mt-1 text-sm text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case 'edit-profile':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Edit Profile</h2>
            {Object.entries(profileInfo).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                <Input id={key} defaultValue={value} />
              </div>
            ))}
            <Button>Save Changes</Button>
          </div>
        )
      case 'change-password':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Change Password</h2>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Update Password</Button>
          </div>
        )
      case 'subscription':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Subscription Plan</h2>
            <p>Current Plan: Basic</p>
            <p>Next billing date: 01/01/2024</p>
            <Button>Upgrade Plan</Button>
          </div>
        )
      case 'preferences':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">User Preferences</h2>
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select id="language" className="w-full p-2 border rounded">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select id="timezone" className="w-full p-2 border rounded">
                <option>UTC-5 (Eastern Time)</option>
                <option>UTC-6 (Central Time)</option>
                <option>UTC-7 (Mountain Time)</option>
                <option>UTC-8 (Pacific Time)</option>
              </select>
            </div>
            <Button>Save Preferences</Button>
          </div>
        )
      case 'support':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Customer Support</h2>
            <p>Need help? Contact our support team:</p>
            <p>Email: support@example.com</p>
            <p>Phone: 1-800-123-4567</p>
            <Button>Open Support Ticket</Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white p-6 space-y-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h2 className="text-xl font-bold">John Doe</h2>
        </div>
        <Button
          variant={selectedOption === 'profile' ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setSelectedOption('profile')
            setShowAccountOptions(false)
          }}
        >
          <UserCircle className="mr-2 h-4 w-4" />
          My Profile
        </Button>
        <Button
          variant={showAccountOptions ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setShowAccountOptions(!showAccountOptions)}
        >
          <Settings className="mr-2 h-4 w-4" />
          Account
        </Button>
        <Button
          variant={selectedOption === 'subscription' ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setSelectedOption('subscription')
            setShowAccountOptions(false)
          }}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Subscription Plan
        </Button>
        <Button
          variant={selectedOption === 'preferences' ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setSelectedOption('preferences')
            setShowAccountOptions(false)
          }}
        >
          <Settings className="mr-2 h-4 w-4" />
          User Preferences
        </Button>
        <Button
          variant={selectedOption === 'support' ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => {
            setSelectedOption('support')
            setShowAccountOptions(false)
          }}
        >
          <HeadphonesIcon className="mr-2 h-4 w-4" />
          Customer Support
        </Button>
      </aside>
      <main className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6">
          {showAccountOptions ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Account Options</h2>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setSelectedOption('edit-profile')}
              >
                <UserCircle className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setSelectedOption('change-password')}
              >
                <Lock className="mr-2 h-4 w-4" />
                Change Password
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Account
              </Button>
            </div>
          ) : (
            renderContent()
          )}
        </div>
      </main>
    </div>
  )
}