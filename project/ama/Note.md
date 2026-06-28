To install **Git** and the **Git CLI** using PowerShell, you can use the following commands depending on your environment:

### 🖥️ Windows with Winget (recommended)
```powershell
winget install --id Git.Git -e --source winget
```
- Installs Git along with Git Bash and Git CLI tools.
- `-e` ensures exact match on the package ID.

### 📦 Windows with Chocolatey
If you use Chocolatey:
```powershell
choco install git -y
```

### ⚙️ Manual Installer via PowerShell
You can also download and run the installer directly:
```powershell
Invoke-WebRequest -Uri "https://github.com/git-for-windows/git/releases/latest/download/Git-2.45.2-64-bit.exe" -OutFile "git-installer.exe"
Start-Process "git-installer.exe" -Wait
```

After installation, verify Git is available:
```powershell
git --version
```

This will confirm the **Git CLI** is installed and ready to use.

Would you like me to show you how to configure Git username and Git email right after installation so your commits are properly identified?

---

**You can install Python, Node.js (with npm), and .NET directly from PowerShell using `winget` or official scripts. The fastest method is `winget`, which handles PATH setup automatically and ensures you get the latest stable versions.**

---

## 🐍 Install Python
```powershell
winget install -e --id Python.Python.3.13
```
- Installs Python 3.13 (latest stable).
- After installation, restart PowerShell and verify:
```powershell
python --version
pip --version
```
  [DEV Community](https://dev.to/jajera/install-python-on-windows-via-cli-winget-3lnm)

---

## 🌐 Install Node.js + npm
```powershell
winget install -e --id OpenJS.NodeJS.LTS
```
- Installs the **LTS version** of Node.js, which includes **npm** by default.
- Verify installation:
```powershell
node -v
npm -v
```
  [GeeksForGeeks](https://www.geeksforgeeks.org/installation-guide/install-node-js-windows-macos-linux/)  [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/?pubDate=20260610)

---

## ⚙️ Install .NET SDK
```powershell
winget install -e --id Microsoft.DotNet.SDK.8
```
- Installs the latest **.NET 8 SDK**, which includes the runtime and CLI.
- Verify installation:
```powershell
dotnet --info
```
  [Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/core/install/windows)

---

## 📊 Quick Comparison

| Tool | PowerShell Install Command | Includes | Verify Command |
|------|-----------------------------|----------|----------------|
| **Python** | `winget install -e --id Python.Python.3.13` | Python + pip | `python --version` |
| **Node.js** | `winget install -e --id OpenJS.NodeJS.LTS` | Node.js + npm | `node -v`, `npm -v` |
| **.NET SDK** | `winget install -e --id Microsoft.DotNet.SDK.8` | .NET SDK + runtime | `dotnet --info` |

---

## ⚠️ Important Notes
- **Restart PowerShell** after each install so PATH updates take effect.
- Use **LTS versions** for stability (Python 3.13, Node.js LTS, .NET 8).
- If `python` opens the Microsoft Store instead of running, disable execution aliases:  
  *Settings → Apps → Advanced app settings → App execution aliases → Turn off `python.exe` and `python3.exe`.*   [DEV Community](https://dev.to/jajera/install-python-on-windows-via-cli-winget-3lnm)

---

Would you like me to also show you how to set up environment variables for these tools so they’re globally available across all shells and scripts?

---

To install the **GitHub CLI (`gh`)** on Windows using PowerShell, you can use `winget` or `choco` depending on your package manager:

---

## ⚡ Install with Winget (recommended)
```powershell
winget install --id GitHub.cli -e
```
- Installs the official GitHub CLI.
- `-e` ensures exact match on the package ID.

---

## 📦 Install with Chocolatey
```powershell
choco install gh -y
```

---

## 🔍 Verify Installation
After installation, check that it works:
```powershell
gh --version
```

---

## 🚀 First-Time Setup
Once installed, authenticate with GitHub:
```powershell
gh auth login
```
- Choose **GitHub.com**.
- Select HTTPS or SSH for git operations.
- Follow the prompts to log in via browser or token.

---

Would you like me to also show you how to use `gh` for common workflows like creating a repo, cloning a repo, or managing pull requests?

---
