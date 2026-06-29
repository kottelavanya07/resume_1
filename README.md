# Recruiter-Ready & ATS-Friendly Professional Profile & Master Resume

This project is a modern, premium, web-based professional profile and master resume designed for **AI/ML Engineers, Data Scientists, Software Engineers, and Data Analysts**.

The profile operates as a Single Page Application (SPA) that dynamically parses database entries from `resume.json`. It delivers a beautiful, glassmorphic visual web layout with theme controls and keyword searching/filtering for human recruiters, while automatically adapting into a clean, linear, graphics-free, single-column document when exported to PDF for **Applicant Tracking Systems (ATS)**.

---

## 📂 Project Structure

- `resume.json`: Stores all resume content across the 14 required master sections.
- `index.html`: Holds the semantic page layout and interactive modal editor containers.
- `style.css`: Declares custom properties for visual styling, light/dark themes, transitions, and strict `@media print` rules for ATS-friendly PDF printing.
- `app.js`: Script containing dynamic rendering engine, keyword highlighting, project tag filters, and JSON syntax validation logic.
- `render.yaml`: Configuration file for automatic deployment as a Static Site on Render.

---

## 🚀 How to Run Locally

Since this app uses standard vanilla technologies, there are no build steps, node_modules, or complicated setups required.

### Option 1: Live Server (Recommended)
Running through a local web server allows the app to fetch `resume.json` dynamically.
If you have Python or Node installed:
* **Node.js**: Run `node server.js`
* **Python**: Run `python -m http.server 8000`
Then open your browser to `http://localhost:8000`.

### Option 2: Direct Double-Click
If you double-click `index.html` directly to open it in a browser, browser CORS restrictions may prevent the script from fetching `resume.json` over `file://`.
To prevent page breakages, `app.js` detects this and **automatically falls back to a hardcoded copy of your profile data** inside the script, so it will still render and function perfectly!

---

## ✍️ How to Customize Your Resume

You can easily keep this master resume updated as you gain new achievements:

### Method A: Direct File Edit (Recommended for persistence)
Open `resume.json` in your favorite code editor, modify the values in the JSON structure, and save. The web page will load your changes on the next refresh.

### Method B: In-Browser Visual Form Editor
1. Open the page in your browser and click the **"Edit Data"** button in the header.
2. In the **"Visual Editor"** tab (default), edit your details normally:
   * Modify personal details in standard text fields.
   * Add new projects, certificates, or jobs by clicking the **"+ Add New"** buttons.
   * Delete items you no longer want by clicking **"Remove"**.
   * Enter comma-separated skills or multi-line bullet lists in standard text fields.
3. Every keystroke is compiled dynamically: your web profile behind the modal updates in real-time!
4. (Optional) Switch to the **"JSON Code"** tab to copy the raw structured database code.
5. Click **"Download JSON"** to save your updated configuration file, then replace your local `resume.json` in the workspace.

---

## ☁️ How to Publish to Render

This project is fully prepared for one-click deployment to **Render** as a **Static Site** (which is free, fast, and does not experience cold starts).

### Option A: Using the Render Blueprint (GitHub)
1. Push this folder to a new repository on **GitHub** or **GitLab**.
2. Go to your **Render Dashboard** (https://dashboard.render.com).
3. Click **New +** and select **Blueprint**.
4. Connect your GitHub repository.
5. Render will automatically read the `render.yaml` configuration and deploy your static site.

### Option B: Manual Setup
If you prefer not to use the blueprint config:
1. Click **New +** and select **Static Site**.
2. Connect your GitHub repository.
3. Use the following settings:
   - **Name**: `your-resume-name`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `./` (or just `.`)
4. Click **Create Static Site**.

---

## 🖨️ How to Export to PDF (ATS-Friendly Version)

The stylesheet contains specialized print directives that strip away the dark background, gradients, search fields, buttons, and grid layouts, formatting it into a standard black-and-white, left-aligned layout ideal for ATS parsing systems.

1. Open the profile page in your browser.
2. Click the **"Export PDF"** button (or press `Ctrl + P` / `Cmd + P`).
3. In the print dialog, adjust these settings:
   - **Destination**: Save as PDF
   - **Margins**: Default (or Custom at `0.75` inches for ideal spacing)
   - **Headers and Footers**: **Uncheck** (to hide date, file path, and page numbers from header/footer, which can confuse ATS parsers)
   - **Background graphics**: **Uncheck** (ensures a clean, 100% white background)
4. Click **Save** to export your recruiter-ready PDF resume.
