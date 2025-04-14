import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="py-8 px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h2>

          <form className="space-y-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded-sm" />
                Remember me
              </label>
              <a href="#" className="hover:underline text-primary">Forgot password?</a>
            </div>

            <Button type="submit" className="w-[100%] bg-primary hover:bg-primary/80">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-primary hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
