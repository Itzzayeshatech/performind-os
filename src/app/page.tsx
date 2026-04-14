import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            PerforMind OS
          </h1>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto">
            AI-Powered Performance Intelligence
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
          <Card className="group hover:shadow-2xl transition-all p-8 border-0 bg-white/80 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                  👥
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">2,847</CardTitle>
                  <p className="text-slate-600 font-semibold">Employees</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className="bg-indigo-100 text-indigo-800 font-bold px-4 py-1">
                +23 this month
              </Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all p-8 border-0 bg-white/80 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                  🏆
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">89%</CardTitle>
                  <p className="text-slate-600 font-semibold">Avg Score</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className="bg-emerald-100 text-emerald-800 font-bold px-4 py-1">
                +1.2% ↑
              </Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all p-8 border-0 bg-white/80 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                  📊
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">96%</CardTitle>
                  <p className="text-slate-600 font-semibold">Completion</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className="bg-amber-100 text-amber-800 font-bold px-4 py-1">
                -0.3% ↓
              </Badge>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all p-8 border-0 bg-white/80 backdrop-blur-xl">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  🚨
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold">17</CardTitle>
                  <p className="text-slate-600 font-semibold">Alerts</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className="bg-red-100 text-red-800 font-bold px-4 py-1">
                +4 today
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Data Pipeline */}
        <Card className="border-2 border-indigo-200/50 bg-gradient-to-r from-indigo-50 to-purple-50/50 p-12 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">Live Data Pipeline</h2>
            <Badge variant="outline" className="bg-emerald-100 text-emerald-800">
              Real-time Active
            </Badge>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold">
                GH
              </div>
              <span className="font-semibold text-slate-800">GitHub</span>
            </div>
            
            <div className="w-20 h-px bg-gradient-to-r from-slate-400 to-blue-400" />
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold">
                JI
              </div>
              <span className="font-semibold text-slate-800">Jira</span>
            </div>
            
            <div className="w-20 h-px bg-gradient-to-r from-blue-400 to-emerald-400" />
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold">
                SL
              </div>
              <span className="font-semibold text-slate-800">Slack</span>
            </div>
            
            <div className="w-20 h-px bg-gradient-to-r from-emerald-400 to-indigo-400" />
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg text-white font-bold">
                AI
              </div>
              <span className="font-semibold text-slate-800">PerforMind AI</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}