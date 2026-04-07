"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", score: 85 }, { name: "Feb", score: 87 }, { name: "Mar", score: 89 },
  { name: "Apr", score: 91 }
]

export default function Dashboard() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Dashboard
      </h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Performance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
