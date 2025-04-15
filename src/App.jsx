import {useState} from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";



const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Static credentials check
    if (email === "user@example.com" && password === "password123") {
      // Redirect to home-mfe
      window.location.href = "http://localhost:3002"; // Update with your actual home-mfe URL
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <Card className="w-full max-w-md shadow-xl rounded-2xl">
      <CardContent className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center">Welcome Back</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="flex items-center gap-2">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <Button variant="outline" className="w-full flex gap-2 items-center">
          <FcGoogle className="w-5 h-5" />
          Sign in M with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don’t have an account? <a href="#" className="underline">Sign up</a>
        </p>
      </CardContent>
    </Card>
  </div>
  )
}

export default App
