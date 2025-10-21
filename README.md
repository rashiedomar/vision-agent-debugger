# 🔍 Vision Agent Debugger

> Debug and visualize how Vision AI agents "see" and reason about images

## 🎯 What is this?

When Vision LLMs (GPT-4V, Claude, Gemini) analyze images, they're black boxes. You don't know:
- Where they focused their attention
- Which reasoning step failed  
- Why they made mistakes

**Vision Agent Debugger** makes Vision AI transparent by showing:
- ✅ Visual attention heatmaps
- ✅ Step-by-step reasoning breakdown
- ✅ Error detection and analysis
- ✅ Multi-model comparison

## 🚀 Features

- **Attention Visualization**: See exactly which image regions the agent focused on
- **Reasoning Path**: Graph showing the agent's thought process
- **Error Detection**: Automatically identifies where reasoning failed
- **Model Comparison**: Compare GPT-4V, Claude, and Gemini side-by-side
- **Cost Tracking**: Monitor API costs per analysis

## 🛠️ Tech Stack

**Frontend**: React, Vite, Tailwind CSS, Canvas API  
**Backend**: Python, FastAPI, Google Gemini, Anthropic Claude  
**CV Models**: CLIP (OpenAI)

## 📦 Installation

### Prerequisites
- Node.js 18+
- Python 3.9+
- API keys (Google AI, OpenAI, Anthropic)

### Quick Start
```bash
# 1. Clone the repo
git clone https://github.com/rashiedomar/vision-agent-debugger.git
cd vision-agent-debugger

# 2. Setup backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Add your API keys to backend/.env

# 3. Setup frontend (coming soon)
cd ../frontend
npm install

# 4. Run backend
cd backend
python main.py
```

Visit `http://localhost:8000` to see API docs

## 🎮 Usage

1. Upload an image
2. Enter your analysis task (e.g., "Count all red cars")
3. Click "Debug Agent"
4. Explore the visual attention maps and reasoning steps

## 📄 License

MIT License

## 👤 Author

**Abdulrashiid O.**  
AI & Computer Vision Engineer | Deep Learning Researcher  
[LinkedIn](https://linkedin.com/in/abdulrashiid-o) | [GitHub](https://github.com/rashiedomar)

---

⭐ Star this repo if you find it useful!