# 🚀 CyberCraft - AI-Powered Phishing Detection & Email Security

![CyberCraft](/public/landing.png)  

CyberCraft is an advanced AI-powered phishing detection system designed to enhance email security. It offers real-time scanning through a **Chrome Extension** and bulk email analysis via a **Web Interface**. Using **Machine Learning & NLP**, CyberCraft helps users identify malicious emails, URLs, and suspicious content before they become a threat.

## 🌟 Features
- 🛡️ **Real-Time Phishing Detection** (Chrome Extension)
- 📩 **Bulk Email Analysis** (Web Interface)
- 🔍 **AI-Powered Threat Analysis**
- 🚀 **Fast & Secure Processing**
- 📊 **Detailed Threat Reports**
- 🔒 **Privacy-Focused – No Data Storage**
- 📡 **Threat Intelligence Feeds Integration**

---

## 🛠️ Tech Stack
### **Frontend** (Web & Chrome Extension)
- **Next.js / React.js** (Web Interface)
- **Tailwind CSS** (Styling)
- **JavaScript / TypeScript**

### **Backend**
- **FastAPI (Python)** (AI Model API)
- **TensorFlow / Scikit-Learn** (ML Models)
- **PostgreSQL** (Data Storage, optional for logs)
- **Celery + Redis** (For async processing)

### **AI & Security**
- **NLP-Based Phishing Detection** (TF-IDF, BERT)
- **Threat Intelligence APIs**
- **Machine Learning Models** (Deep Learning & Behavioral Analytics)

---

## 📂 Project Structure
```
CyberCraft/
│-- frontend/         # Web Interface & Chrome Extension
│-- backend/    (Another Repo)         # FastAPI Backend & ML Model
│-- models/     (Google: Collab)         # Trained ML Models (TensorFlow)
│-- database/   (Another Repo)        # Optional Data Storage (PostgreSQL/MongoDB)
│-- README.md         # Project Overview
```

---

## 🏗️ Setup & Installation
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Shradhesh71/CyberCraft.git
cd CyberCraft
```
### 2️⃣ **Backend Setup (FastAPI + AI Model)**
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000
```
### 3️⃣ **Frontend Setup (Next.js Web Interface & Chrome Extension)**
```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Usage Guide
### **🔍 Web Interface for Bulk Email Scanning**
1. Upload emails in bulk (CSV format).
2. AI model scans each email for phishing threats.
3. View the report with risk scores.

### **🚀 Chrome Extension for Real-Time Email Security**
1. Install the extension.
2. CyberCraft scans incoming emails in **Gmail, Outlook, etc.**
3. Get alerts for phishing attempts in real time.

---

## 📖 API Endpoints
### **🔍 Predict Phishing**
```http
POST /predict
```
**Request Body:**
```json
{
    "subject": "Urgent: Verify Your Account Now!",
    "body": "Click the link to update your password now!",
    "urls": "http://phishingsite.com"
}
```
**Response:**
```json
{
    "prediction": "Phishing",
    "confidence": 0.98
}
```

---

## 🚀 Future Enhancements
- 📌 **AI-Powered URL Sandboxing**
- 🔥 **Enhanced Threat Intelligence Integration**
- 📡 **Dark Web Monitoring for Threats**
- 📲 **Mobile App for Email Security**

---

## 🤝 Contributing
We welcome contributions! Feel free to open an issue or submit a PR.

---

## 🔐 Security & Privacy
CyberCraft does **not** store any email data. All processing is done **locally & securely**.

---

## 📞 Contact & Support
For support, contact **[your email]** or visit **[your website]**.

🔗 **Follow us on Twitter:** [@Shradhesh](https://x.com/Shradeshjain835)  
📢 **Join Our Community:** [Discord](https://discord.gg/shradesh71)

---

## 🏆 Credits & Thanks
Special thanks to **AIxBlock** for supporting cybersecurity advancements!

---

**🚀 Stay Safe & Secure with CyberCraft!**
