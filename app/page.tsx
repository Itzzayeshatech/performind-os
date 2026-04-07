export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Performind-OS</h1>
      <p className="text-xl text-center max-w-md">
        Resilient distributed system with Kubernetes, chaos engineering, 
        Jaeger tracing, and Grafana observability.
      </p>
      <div className="mt-8 space-x-4">
        <a href="/demo" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Live Demo
        </a>
        <a href="https://github.com/Itzzayeshatech/performind-os" className="border px-6 py-3 rounded hover:bg-gray-100">
          GitHub
        </a>
      </div>
    </main>
  )
}