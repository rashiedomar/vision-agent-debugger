import { useState } from 'react'
import ImageUploader from './components/ImageUploader'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [task, setTask] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const handleAnalyze = async () => {
    if (!image || !task) {
      alert('Please upload an image and enter a task')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResults({
        message: 'Analysis coming soon!'
      })
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🔍 Vision Agent Debugger
          </h1>
          <p className="text-gray-300 text-lg">
            Debug and visualize how Vision AI agents see and reason
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            
            <ImageUploader image={image} setImage={setImage} />

            <div className="mt-6">
              <label className="block text-white font-semibold mb-2">
                Analysis Task
              </label>
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="e.g., Count all red cars in the image"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading || !image || !task}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {loading ? '🔄 Analyzing...' : '🚀 Debug Agent'}
            </button>

            {results && (
              <div className="mt-8 p-6 bg-green-500/20 border border-green-500/50 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">Results:</h3>
                <p className="text-gray-200">{results.message}</p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-white font-bold mb-2">Attention Maps</h3>
              <p className="text-gray-400">See where the agent focused</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-white font-bold mb-2">Reasoning Path</h3>
              <p className="text-gray-400">Track decision-making steps</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-3">⚠️</div>
              <h3 className="text-white font-bold mb-2">Error Detection</h3>
              <p className="text-gray-400">Identify failure points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App