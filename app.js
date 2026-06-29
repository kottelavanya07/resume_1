// Master Resume Application Logic

// Default data fallback for CORS/file:// protocol support
const DEFAULT_RESUME_DATA = {
  "personal": {
    "name": "Alex Chen",
    "title": "AI/ML Engineer & Software Engineer",
    "email": "alex.chen@email.com",
    "phone": "+1 (555) 019-2834",
    "location": "San Francisco, CA",
    "website": "https://alexchen.dev",
    "github": "https://github.com/alexchen-dev",
    "linkedin": "https://linkedin.com/in/alexchen-dev"
  },
  "professionalSummary": {
    "text": "Highly analytical and results-driven AI/ML Engineer and Software Engineer with 3+ years of experience designing, training, and deploying production-grade machine learning models and scalable software architectures. Proven track record in optimizing deep learning pipelines, building distributed systems, and translating complex data into actionable business intelligence. Specialized in Large Language Models (LLMs), Computer Vision, and high-performance backend systems."
  },
  "education": [
    {
      "degree": "Master of Science in Computer Science (Specialization in Machine Learning)",
      "university": "Stanford University",
      "year": "2025",
      "gpa": "3.92 / 4.00"
    },
    {
      "degree": "Bachelor of Science in Computer Science & Data Science",
      "university": "University of California, Berkeley",
      "year": "2023",
      "gpa": "3.85 / 4.00"
    }
  ],
  "technicalSkills": {
    "programmingLanguages": ["Python", "C++", "Java", "JavaScript (ES6+)", "SQL", "Go", "R"],
    "machineLearning": ["Supervised/Unsupervised Learning", "Reinforcement Learning", "Scikit-Learn", "XGBoost", "Feature Engineering", "Model Evaluation & Selection"],
    "deepLearning": ["PyTorch", "TensorFlow", "Keras", "Transformers (Hugging Face)", "CNNs", "RNNs/LSTMs", "LLM Fine-tuning (LoRA, QLoRA)"],
    "dataScience": ["Statistical Analysis", "Data Visualization (Matplotlib, Seaborn)", "Pandas", "NumPy", "A/B Testing", "Time Series Forecasting"],
    "databases": ["PostgreSQL", "MongoDB", "Redis", "Pinecone (Vector DB)", "MySQL", "DynamoDB"],
    "webTechnologies": ["HTML5", "CSS3", "React.js", "Node.js", "Express", "FastAPI", "RESTful APIs", "GraphQL"],
    "toolsPlatforms": ["Docker", "Kubernetes", "Git", "Jupyter", "Apache Spark", "Linux/Bash", "MLflow", "Weights & Biases"],
    "cloud": ["AWS (EC2, S3, SageMaker, Lambda)", "Google Cloud Platform (GCP)", "Azure"],
    "versionControl": ["Git", "GitHub", "GitLab"],
    "operatingSystems": ["Linux (Ubuntu/CentOS)", "macOS", "Windows"]
  },
  "projects": [
    {
      "title": "MediScan AI - Deep Learning Medical Diagnostics Portal",
      "description": "A cloud-native medical imaging diagnostics platform that utilizes deep learning to identify abnormalities in chest X-rays with high precision.",
      "technologies": ["PyTorch", "FastAPI", "React.js", "Docker", "AWS SageMaker", "MongoDB"],
      "contribution": "Designed and trained the core ResNet-based CNN model; developed the FastAPI backend for model serving and async inference pipeline.",
      "achievements": [
        "Achieved a 94.2% ROC-AUC score in detecting pleural effusion and pneumonia across a dataset of 100K+ images.",
        "Reduced inference latency by 45% (from 1.2s to 0.66s) by implementing model quantization and TensorRT optimization.",
        "Dockerized the microservices architecture, enabling seamless autoscaling on AWS ECS to handle up to 200 concurrent requests."
      ],
      "github": "https://github.com/alexchen-dev/mediscan-ai",
      "demo": "https://mediscan-demo.alexchen.dev"
    },
    {
      "title": "LlamaFlow - Autonomous LLM Agent Framework",
      "description": "An open-source orchestration framework for building agentic workflows with memory, tool usage, and self-reflection loops.",
      "technologies": ["Python", "Hugging Face Transformers", "Pinecone", "LangChain", "OpenAI API", "Streamlit"],
      "contribution": "Created the core graph-based reasoning engine; integrated vector database for long-term memory retrieval and RAG pipeline.",
      "achievements": [
        "Gained 1,200+ stars on GitHub within 3 months of public release.",
        "Optimized agent context windows, decreasing API token usage by 30% through intelligent prompt pruning and semantic chunking.",
        "Implemented a self-correction mechanism that reduced agent hallucination rates by 22% on complex multi-step logical tasks."
      ],
      "github": "https://github.com/alexchen-dev/llama-flow",
      "demo": "https://llamaflow.alexchen.dev"
    }
  ],
  "researchPublications": [
    {
      "title": "Optimizing Edge Deployment of Deep Convolutional Networks via Dynamic Layer Pruning",
      "journal": "IEEE International Conference on Machine Learning & Applications (ICMLA)",
      "year": "2024",
      "doi": "https://doi.org/10.1109/ICMLA.2024.00012",
      "description": "Proposed a novel dynamic pruning heuristic that evaluates runtime layer importance, achieving a 3x speedup on edge hardware (Nvidia Jetson) with less than a 1.5% drop in accuracy."
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Machine Learning - Specialty",
      "organization": "Amazon Web Services (AWS)",
      "date": "December 2025",
      "credentialId": "AWS-ML-12345XYZ",
      "verificationLink": "https://aws.verification.com/credentials/alex-chen-ml"
    },
    {
      "name": "TensorFlow Developer Certificate",
      "organization": "Google / TensorFlow Certificate Network",
      "date": "June 2024",
      "credentialId": "TF-DEV-98765ABC",
      "verificationLink": "https://credential.tensorflow.org/verify/alex-chen"
    }
  ],
  "internships": [
    {
      "organization": "NVIDIA",
      "role": "AI Research Intern",
      "duration": "June 2024 - September 2024",
      "responsibilities": [
        "Researched tensor parallelism techniques for scaling Transformer training across multi-node GPU clusters.",
        "Contributed to Megatron-LM codebase, implementing a custom CUDA kernel for optimized attention mask operations.",
        "Collaborated with senior scientists to write technical specifications for hardware-software co-design."
      ],
      "technologies": ["PyTorch", "CUDA", "C++", "Megatron-LM", "Git", "Linux"],
      "achievements": [
        "Improved GPU memory utilization by 18% during LLM fine-tuning, permitting larger batch sizes without Out-Of-Memory (OOM) errors.",
        "Co-authored an internal whitepaper detailing multi-GPU communication optimizations."
      ]
    },
    {
      "organization": "Tesla",
      "role": "Data Scientist Intern (Autopilot Team)",
      "duration": "June 2023 - September 2023",
      "responsibilities": [
        "Developed automated data curation pipelines to filter high-entropy corner cases from fleet camera video feeds.",
        "Trained multi-task neural network models for lane line detection and semantic segmentation.",
        "Conducted extensive statistical quality checks on labeled training datasets."
      ],
      "technologies": ["Python", "PyTorch", "SQL", "Docker", "Hadoop", "OpenCV"],
      "achievements": [
        "Automated the classification of false-positive lane detections, saving manual labeling operations by an estimated 150 hours/week.",
        "Boosted validation accuracy of lane edge detection by 2.1% under low-visibility night and rain conditions."
      ]
    }
  ],
  "workExperience": [
    {
      "organization": "Cognitive Systems Inc.",
      "role": "Machine Learning Engineer",
      "duration": "September 2024 - Present",
      "responsibilities": [
        "Design and scale internal machine learning APIs supporting real-time recommendation engines for 5M+ active users.",
        "Lead the migration of legacy machine learning models to distributed PyTorch-based training pipelines.",
        "Mentor 2 junior engineers and define deployment best-practices using CI/CD pipelines."
      ],
      "technologies": ["Python", "PyTorch", "Kubernetes", "AWS", "FastAPI", "MLflow", "PostgreSQL"],
      "achievements": [
        "Boosted recommendation model conversion rates by 8.4% through deep CTR neural network redesign.",
        "Reduced system infrastructure costs by $12K/month by consolidating redundant cloud instances and transitioning to Spot instances for batch inference."
      ]
    }
  ],
  "leadershipResponsibilities": [
    {
      "role": "President",
      "organization": "UC Berkeley AI Student Association",
      "duration": "September 2022 - May 2023",
      "description": "Organized weekly research reading groups and technical workshops for 300+ active student members. Secured $5,000 in industry sponsorships from local tech companies to host guest lectures and career panels."
    },
    {
      "role": "Technical Mentor",
      "organization": "CalHacks Hackathon",
      "duration": "October 2024",
      "description": "Mentored 15 student teams during a 36-hour hackathon, debugging React/Node, FastAPI backend issues, and guiding model integrations."
    }
  ],
  "hackathonsCompetitions": [
    {
      "title": "Stanford AI Hackathon",
      "ranking": "1st Place (Out of 120 Teams)",
      "award": "Best Use of Generative AI",
      "technologies": ["Python", "OpenAI API", "LangChain", "Vector DB"],
      "description": "Built an interactive conversational assistant for legal documents that extracts and traces citation clauses to verified statutes."
    },
    {
      "title": "Kaggle: Feedback Prize - Evaluating Student Writing",
      "ranking": "Top 2% (Silver Medal)",
      "award": "Silver Medalist",
      "technologies": ["Python", "PyTorch", "Hugging Face DeBERTa", "Optuna"],
      "description": "Ensembled several DeBERTa-v3 model variants to classify argumentative elements in essays, optimizing cross-entropy loss."
    }
  ],
  "awardsAchievements": [
    {
      "title": "Outstanding Graduate Award in Data Science",
      "organization": "UC Berkeley College of Computing",
      "year": "2023"
    },
    {
      "title": "Regents and Chancellor's Scholarship Recipient",
      "organization": "University of California, Berkeley",
      "year": "2019 - 2023"
    }
  ],
  "languages": [
    {
      "language": "English",
      "proficiency": "Native"
    },
    {
      "language": "Mandarin",
      "proficiency": "Professional Working"
    },
    {
      "language": "Spanish",
      "proficiency": "Conversational"
    }
  ],
  "professionalProfiles": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/alexchen-dev"
    },
    {
      "platform": "GitHub",
      "url": "https://github.com/alexchen-dev"
    },
    {
      "platform": "Portfolio website",
      "url": "https://alexchen.dev"
    },
    {
      "platform": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=alexchen"
    },
    {
      "platform": "LeetCode",
      "url": "https://leetcode.com/alexchen_dev"
    }
  ],
  "additionalInformation": [
    {
      "category": "Conferences & Workshops",
      "description": "Attended NeurIPS 2024, ICML 2025. Completed Stanford Workshop on Distributed Deep Learning Systems (2024)."
    },
    {
      "category": "Professional Memberships",
      "description": "Member, IEEE Computer Society (since 2022) & Association for Computing Machinery (ACM)."
    },
    {
      "category": "Extracurriculars",
      "description": "Active contributor to open-source PyTorch projects. Enjoy hiking and digital photography."
    }
  ]
};

let currentResumeData = { ...DEFAULT_RESUME_DATA };
let activeFilter = 'all';

// Load Resume Data
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

async function initApp() {
    setupTheme();
    setupEventListeners();
    
    try {
        const response = await fetch('resume.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch resume.json: ${response.statusText}`);
        }
        currentResumeData = await response.json();
        console.log("Successfully loaded resume.json");
    } catch (err) {
        console.warn("Could not fetch resume.json (might be running locally via file:// protocol). Falling back to default data.", err);
        currentResumeData = DEFAULT_RESUME_DATA;
    }
    
    renderResume(currentResumeData);
    
    // Set initial text inside textarea
    document.getElementById("json-editor-textarea").value = JSON.stringify(currentResumeData, null, 2);
}

// Setup Theme Switcher
function setupTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    
    // Check local storage or preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.className = savedTheme;
    } else {
        body.className = "dark-theme"; // Default
    }
    
    updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
    const body = document.body;
    const themeIcon = document.querySelector("#theme-toggle .theme-icon");
    if (body.classList.contains("light-theme")) {
        themeIcon.textContent = "🌙";
    } else {
        themeIcon.textContent = "☀️";
    }
}

// Event Listeners
function setupEventListeners() {
    // Theme Button
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");
        } else {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");
        }
        updateThemeToggleIcon();
    });

    // Print Button
    document.getElementById("print-btn").addEventListener("click", () => {
        window.print();
    });

    // Modal Events
    const editorModal = document.getElementById("editor-modal");
    document.getElementById("edit-json-btn").addEventListener("click", () => {
        buildFormEditor(currentResumeData);
        document.getElementById("json-editor-textarea").value = JSON.stringify(currentResumeData, null, 2);
        
        // Reset tab view to Form Editor by default
        document.querySelectorAll(".tab-link").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
        document.querySelector("[data-tab='form-editor-tab']").classList.add("active");
        document.getElementById("form-editor-tab").classList.add("active");
        
        editorModal.classList.add("active");
    });
    
    document.getElementById("close-modal-btn").addEventListener("click", () => {
        editorModal.classList.remove("active");
    });

    // Close modal on click outside content
    editorModal.addEventListener("click", (e) => {
        if (e.target === editorModal) {
            editorModal.classList.remove("active");
        }
    });

    // Tab switching inside modal
    document.querySelectorAll(".tab-link").forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
            document.querySelectorAll(".tab-link").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
            
            tabBtn.classList.add("active");
            const targetPane = document.getElementById(tabBtn.getAttribute("data-tab"));
            targetPane.classList.add("active");
            
            // If switching to raw JSON, sync it
            if (tabBtn.getAttribute("data-tab") === "json-editor-tab") {
                document.getElementById("json-editor-textarea").value = JSON.stringify(currentResumeData, null, 2);
            }
        });
    });

    // Copy JSON to clipboard
    document.getElementById("copy-json-btn").addEventListener("click", () => {
        const text = document.getElementById("json-editor-textarea").value;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById("copy-json-btn");
            const originalText = btn.textContent;
            btn.textContent = "Copied! ✓";
            btn.classList.add("btn-primary");
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove("btn-primary");
            }, 2000);
        }).catch(err => {
            console.error("Clipboard copy failed: ", err);
            alert("Failed to copy. Please select the text and copy manually.");
        });
    });

    // Download JSON
    document.getElementById("download-json-btn").addEventListener("click", () => {
        const text = document.getElementById("json-editor-textarea").value;
        try {
            JSON.parse(text); // Check valid first
            const blob = new Blob([text], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "resume.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (e) {
            alert("Invalid JSON format. Please fix any errors before downloading.");
        }
    });

    // Real-time Textarea Change Handler (debounced or oninput)
    document.getElementById("json-editor-textarea").addEventListener("input", handleJsonEdit);

    // Search bar functionality
    document.getElementById("skill-search").addEventListener("input", (e) => {
        const query = e.target.value.trim();
        searchAndHighlight(query);
    });

    // Project filters
    document.getElementById("filter-tags").addEventListener("click", (e) => {
        if (e.target.classList.contains("tag-btn")) {
            // Remove active classes
            document.querySelectorAll(".tag-btn").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            activeFilter = e.target.getAttribute("data-filter");
            renderProjects(currentResumeData.projects);
        }
    });
}

// JSON validation and dynamic updates (Code tab)
function handleJsonEdit(e) {
    const jsonText = e.target.value;
    const errorBox = document.getElementById("editor-error");
    
    try {
        const parsed = JSON.parse(jsonText);
        errorBox.classList.add("hidden");
        errorBox.textContent = "";
        
        // Update model and re-render page details
        currentResumeData = parsed;
        renderResume(parsed);
    } catch (err) {
        errorBox.classList.remove("hidden");
        errorBox.textContent = `JSON Error: ${err.message}`;
    }
}

// Dynamic Visual Form Editor Generator
function buildFormEditor(data) {
    const form = document.getElementById("visual-resume-form");
    form.innerHTML = ""; // Clear existing

    const container = document.createElement("div");
    container.className = "form-container";

    // 1. Personal Information Section
    const personalSec = createFormSection("Personal Details");
    personalSec.appendChild(createFormGroup("Full Name", "p-name", data.personal.name || ""));
    personalSec.appendChild(createFormGroup("Job Title", "p-title", data.personal.title || ""));
    
    const row1 = createFormRow();
    row1.appendChild(createFormGroup("Email Address", "p-email", data.personal.email || ""));
    row1.appendChild(createFormGroup("Phone Number", "p-phone", data.personal.phone || ""));
    personalSec.appendChild(row1);
    
    const row2 = createFormRow();
    row2.appendChild(createFormGroup("Location (City, State)", "p-location", data.personal.location || ""));
    row2.appendChild(createFormGroup("Website URL", "p-website", data.personal.website || ""));
    personalSec.appendChild(row2);
    
    const row3 = createFormRow();
    row3.appendChild(createFormGroup("GitHub URL", "p-github", data.personal.github || ""));
    row3.appendChild(createFormGroup("LinkedIn URL", "p-linkedin", data.personal.linkedin || ""));
    personalSec.appendChild(row3);
    
    container.appendChild(personalSec);

    // 2. Professional Summary Section
    const summarySec = createFormSection("Professional Summary");
    summarySec.appendChild(createFormGroup("Summary Text", "p-summary-text", (data.professionalSummary && data.professionalSummary.text) || "", true));
    container.appendChild(summarySec);

    // 3. Technical Skills Section
    const skillsSec = createFormSection("Technical Skills (Comma Separated)");
    const skills = data.technicalSkills || {};
    skillsSec.appendChild(createFormGroup("Programming Languages", "s-programmingLanguages", (skills.programmingLanguages || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Machine Learning", "s-machineLearning", (skills.machineLearning || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Deep Learning", "s-deepLearning", (skills.deepLearning || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Data Science", "s-dataScience", (skills.dataScience || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Databases", "s-databases", (skills.databases || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Web Technologies", "s-webTechnologies", (skills.webTechnologies || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Tools & Platforms", "s-toolsPlatforms", (skills.toolsPlatforms || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Cloud & Infrastructure", "s-cloud", (skills.cloud || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Version Control", "s-versionControl", (skills.versionControl || []).join(", ")));
    skillsSec.appendChild(createFormGroup("Operating Systems", "s-operatingSystems", (skills.operatingSystems || []).join(", ")));
    container.appendChild(skillsSec);

    // Dynamic Lists configuration helper
    const dynamicLists = [
        {
            title: "Education",
            key: "education",
            fields: [
                { label: "Degree & Major", name: "degree", type: "input" },
                { label: "University", name: "university", type: "input" },
                { label: "Graduation Year", name: "year", type: "input" },
                { label: "GPA or Percentage", name: "gpa", type: "input" }
            ]
        },
        {
            title: "Work Experience",
            key: "workExperience",
            fields: [
                { label: "Organization", name: "organization", type: "input" },
                { label: "Role / Position", name: "role", type: "input" },
                { label: "Duration (e.g. Jan 2024 - Present)", name: "duration", type: "input" },
                { label: "Technologies (Comma Separated)", name: "technologies", type: "input" },
                { label: "Responsibilities (One per line)", name: "responsibilities", type: "textarea" },
                { label: "Key Achievements (One per line)", name: "achievements", type: "textarea" }
            ]
        },
        {
            title: "Internships",
            key: "internships",
            fields: [
                { label: "Organization", name: "organization", type: "input" },
                { label: "Role / Position", name: "role", type: "input" },
                { label: "Duration", name: "duration", type: "input" },
                { label: "Technologies (Comma Separated)", name: "technologies", type: "input" },
                { label: "Responsibilities (One per line)", name: "responsibilities", type: "textarea" },
                { label: "Key Achievements (One per line)", name: "achievements", type: "textarea" }
            ]
        },
        {
            title: "Projects",
            key: "projects",
            fields: [
                { label: "Project Title", name: "title", type: "input" },
                { label: "Description", name: "description", type: "textarea" },
                { label: "Technologies (Comma Separated)", name: "technologies", type: "input" },
                { label: "Your Contribution", name: "contribution", type: "input" },
                { label: "Key Achievements (One per line)", name: "achievements", type: "textarea" },
                { label: "GitHub Link", name: "github", type: "input" },
                { label: "Live Demo Link", name: "demo", type: "input" }
            ]
        },
        {
            title: "Research Publications",
            key: "researchPublications",
            fields: [
                { label: "Paper Title", name: "title", type: "input" },
                { label: "Journal/Conference", name: "journal", type: "input" },
                { label: "Publication Year", name: "year", type: "input" },
                { label: "DOI or Publication Link", name: "doi", type: "input" },
                { label: "Short Description", name: "description", type: "textarea" }
            ]
        },
        {
            title: "Certifications",
            key: "certifications",
            fields: [
                { label: "Certificate Name", name: "name", type: "input" },
                { label: "Issuing Organization", name: "organization", type: "input" },
                { label: "Completion Date", name: "date", type: "input" },
                { label: "Credential ID (if available)", name: "credentialId", type: "input" },
                { label: "Verification Link (if available)", name: "verificationLink", type: "input" }
            ]
        },
        {
            title: "Leadership & Responsibilities",
            key: "leadershipResponsibilities",
            fields: [
                { label: "Role", name: "role", type: "input" },
                { label: "Organization", name: "organization", type: "input" },
                { label: "Duration", name: "duration", type: "input" },
                { label: "Description", name: "description", type: "textarea" }
            ]
        },
        {
            title: "Hackathons & Competitions",
            key: "hackathonsCompetitions",
            fields: [
                { label: "Competition/Hackathon Title", name: "title", type: "input" },
                { label: "Ranking (e.g. 1st Place)", name: "ranking", type: "input" },
                { label: "Award Name (if any)", name: "award", type: "input" },
                { label: "Technologies Used (Comma Separated)", name: "technologies", type: "input" },
                { label: "Short Description", name: "description", type: "textarea" }
            ]
        },
        {
            title: "Awards & Achievements",
            key: "awardsAchievements",
            fields: [
                { label: "Award Title", name: "title", type: "input" },
                { label: "Issuing Organization", name: "organization", type: "input" },
                { label: "Year Awarded", name: "year", type: "input" }
            ]
        },
        {
            title: "Languages",
            key: "languages",
            fields: [
                { label: "Language", name: "language", type: "input" },
                { label: "Proficiency (e.g. Native, Fluent)", name: "proficiency", type: "input" }
            ]
        },
        {
            title: "Professional Profiles",
            key: "professionalProfiles",
            fields: [
                { label: "Platform Name (e.g. GitHub, LeetCode)", name: "platform", type: "input" },
                { label: "Profile Link URL", name: "url", type: "input" }
            ]
        },
        {
            title: "Additional Information",
            key: "additionalInformation",
            fields: [
                { label: "Category Title", name: "category", type: "input" },
                { label: "Description", name: "description", type: "textarea" }
            ]
        }
    ];

    dynamicLists.forEach(listConfig => {
        const items = data[listConfig.key] || [];
        const section = createFormSection(listConfig.title);
        section.id = `form-sec-${listConfig.key}`;
        
        const listContainer = document.createElement("div");
        listContainer.className = "list-items-container";
        listContainer.id = `list-container-${listConfig.key}`;

        // Render each item
        items.forEach((item, idx) => {
            listContainer.appendChild(createListItemEditor(listConfig, item, idx));
        });

        section.appendChild(listContainer);

        // Add Item Button
        const addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "add-btn";
        addBtn.textContent = `+ Add New ${listConfig.title.slice(0, -1) || "Item"}`;
        addBtn.addEventListener("click", () => {
            const index = listContainer.children.length;
            const emptyItem = {};
            listConfig.fields.forEach(f => {
                if (f.name === "technologies" || f.name === "responsibilities" || f.name === "achievements") {
                    emptyItem[f.name] = [];
                } else {
                    emptyItem[f.name] = "";
                }
            });
            listContainer.appendChild(createListItemEditor(listConfig, emptyItem, index));
            saveFormToData();
        });

        section.appendChild(addBtn);
        container.appendChild(section);
    });

    form.appendChild(container);
    
    // Add real-time event listener to update visual resume on keystroke
    form.addEventListener("input", saveFormToData);
}

// Helpers for Building Form DOM Nodes
function createFormSection(title) {
    const section = document.createElement("div");
    section.className = "form-section";
    const header = document.createElement("div");
    header.className = "form-section-title";
    header.textContent = title;
    section.appendChild(header);
    return section;
}

function createFormGroup(labelTxt, id, value, isTextarea = false) {
    const group = document.createElement("div");
    group.className = "form-group";
    
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelTxt;
    group.appendChild(label);
    
    let control;
    if (isTextarea) {
        control = document.createElement("textarea");
        control.rows = 4;
    } else {
        control = document.createElement("input");
        control.type = "text";
    }
    control.id = id;
    control.value = value;
    group.appendChild(control);
    
    return group;
}

function createFormRow() {
    const row = document.createElement("div");
    row.className = "form-row";
    return row;
}

function createListItemEditor(config, item, index) {
    const card = document.createElement("div");
    card.className = "list-editor-item";
    card.setAttribute("data-index", index);
    card.setAttribute("data-key", config.key);

    const header = document.createElement("div");
    header.className = "list-item-header";
    
    const number = document.createElement("span");
    number.className = "list-item-number";
    number.textContent = `#${index + 1}`;
    header.appendChild(number);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => {
        card.remove();
        // Re-index remaining items
        const container = document.getElementById(`list-container-${config.key}`);
        Array.from(container.children).forEach((child, idx) => {
            child.setAttribute("data-index", idx);
            child.querySelector(".list-item-number").textContent = `#${idx + 1}`;
        });
        saveFormToData();
    });
    header.appendChild(deleteBtn);
    card.appendChild(header);

    // Build fields dynamically
    config.fields.forEach(field => {
        let val = item[field.name] || "";
        if (field.name === "technologies") {
            val = Array.isArray(val) ? val.join(", ") : val;
        } else if (field.name === "responsibilities" || field.name === "achievements") {
            val = Array.isArray(val) ? val.join("\n") : val;
        }
        
        const inputId = `form-field-${config.key}-${index}-${field.name}`;
        card.appendChild(createFormGroup(field.label, inputId, val, field.type === "textarea"));
    });

    return card;
}

// Convert Form Inputs back to Clean JSON Data
function saveFormToData() {
    const data = {
        personal: {
            name: document.getElementById("p-name").value.trim(),
            title: document.getElementById("p-title").value.trim(),
            email: document.getElementById("p-email").value.trim(),
            phone: document.getElementById("p-phone").value.trim(),
            location: document.getElementById("p-location").value.trim(),
            website: document.getElementById("p-website").value.trim(),
            github: document.getElementById("p-github").value.trim(),
            linkedin: document.getElementById("p-linkedin").value.trim()
        },
        professionalSummary: {
            text: document.getElementById("p-summary-text").value.trim()
        },
        technicalSkills: {
            programmingLanguages: splitCommaStr(document.getElementById("s-programmingLanguages").value),
            machineLearning: splitCommaStr(document.getElementById("s-machineLearning").value),
            deepLearning: splitCommaStr(document.getElementById("s-deepLearning").value),
            dataScience: splitCommaStr(document.getElementById("s-dataScience").value),
            databases: splitCommaStr(document.getElementById("s-databases").value),
            webTechnologies: splitCommaStr(document.getElementById("s-webTechnologies").value),
            toolsPlatforms: splitCommaStr(document.getElementById("s-toolsPlatforms").value),
            cloud: splitCommaStr(document.getElementById("s-cloud").value),
            versionControl: splitCommaStr(document.getElementById("s-versionControl").value),
            operatingSystems: splitCommaStr(document.getElementById("s-operatingSystems").value)
        }
    };

    // Helper mapping fields for lists
    const arrayKeys = [
        "education", "workExperience", "internships", "projects", 
        "researchPublications", "certifications", "leadershipResponsibilities", 
        "hackathonsCompetitions", "awardsAchievements", "languages", 
        "professionalProfiles", "additionalInformation"
    ];

    arrayKeys.forEach(key => {
        data[key] = [];
        const container = document.getElementById(`list-container-${key}`);
        if (container) {
            const itemNodes = container.querySelectorAll(".list-editor-item");
            itemNodes.forEach(node => {
                const idx = node.getAttribute("data-index");
                const item = {};
                
                // Find all fields for this specific list config
                const inputs = node.querySelectorAll("input, textarea");
                inputs.forEach(input => {
                    const fieldName = input.id.split("-").pop(); // Get last split item e.g. title
                    const rawVal = input.value;
                    
                    if (fieldName === "technologies") {
                        item[fieldName] = splitCommaStr(rawVal);
                    } else if (fieldName === "responsibilities" || fieldName === "achievements") {
                        item[fieldName] = splitNewlineStr(rawVal);
                    } else {
                        item[fieldName] = rawVal.trim();
                    }
                });
                
                data[key].push(item);
            });
        }
    });

    currentResumeData = data;
    renderResume(data);
}

function splitCommaStr(str) {
    if (!str) return [];
    return str.split(",").map(s => s.trim()).filter(s => s.length > 0);
}

function splitNewlineStr(str) {
    if (!str) return [];
    return str.split("\n").map(s => s.trim()).filter(s => s.length > 0);
}

// Dynamic Rendering Engine
function renderResume(data) {
    if (!data) return;

    // Header & Personal Details
    document.getElementById("user-name").textContent = data.personal.name || "";
    document.getElementById("user-title").textContent = data.personal.title || "";
    
    const contactBar = document.getElementById("user-contact");
    contactBar.innerHTML = "";
    
    const contacts = [
        { val: data.personal.email, text: data.personal.email, prefix: "✉️" },
        { val: data.personal.phone, text: data.personal.phone, prefix: "📞" },
        { val: data.personal.location, text: data.personal.location, prefix: "📍" },
        { val: data.personal.website, text: cleanUrl(data.personal.website), link: data.personal.website, prefix: "🌐" }
    ];

    contacts.forEach(item => {
        if (item.val) {
            const span = document.createElement("span");
            span.className = "contact-item";
            if (item.link) {
                span.innerHTML = `<span class="no-print">${item.prefix} </span><a href="${item.link}" target="_blank">${item.text}</a>`;
            } else {
                span.innerHTML = `<span class="no-print">${item.prefix} </span>${item.text}`;
            }
            contactBar.appendChild(span);
        }
    });

    // 1. Professional Summary
    document.getElementById("summary-text").textContent = (data.professionalSummary && data.professionalSummary.text) || "";

    // 8. Work Experience
    renderWorkExperience(data.workExperience);

    // 7. Internships
    renderInternships(data.internships);

    // 4. Projects
    renderProjects(data.projects);

    // 5. Research Publications
    renderPublications(data.researchPublications);

    // 10. Hackathons & Competitions
    renderHackathons(data.hackathonsCompetitions);

    // 3. Technical Skills
    renderSkills(data.technicalSkills);

    // 2. Education
    renderEducation(data.education);

    // 6. Certifications
    renderCertifications(data.certifications);

    // 9. Leadership & Responsibilities
    renderLeadership(data.leadershipResponsibilities);

    // 11. Awards & Achievements
    renderAwards(data.awardsAchievements);

    // 12. Languages
    renderLanguages(data.languages);

    // 13. Professional Profiles
    renderProfiles(data.professionalProfiles);

    // 14. Additional Information
    renderAdditional(data.additionalInformation);
}

// Clean url for visual print layout
function cleanUrl(url) {
    if (!url) return "";
    return url.replace(/https?:\/\/(www\.)?/, "");
}

// Helpers for Sub-Sections Rendering

function renderWorkExperience(list) {
    const container = document.getElementById("experience-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        container.innerHTML = "<p class='text-muted'>No work experience listed.</p>";
        return;
    }
    
    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "entry-card";
        
        let techHtml = "";
        if (item.technologies && item.technologies.length > 0) {
            techHtml = `<div class="tag-container"><span class="no-print filter-label">Tech:</span> ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>`;
        }

        let bulletsHtml = "";
        if (item.responsibilities && item.responsibilities.length > 0) {
            bulletsHtml += `<ul class="bullet-list">`;
            item.responsibilities.forEach(bullet => {
                bulletsHtml += `<li>${bullet}</li>`;
            });
            if (item.achievements && item.achievements.length > 0) {
                item.achievements.forEach(bullet => {
                    bulletsHtml += `<li><strong>Achievement:</strong> ${bullet}</li>`;
                });
            }
            bulletsHtml += `</ul>`;
        }

        card.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">${item.role} <span class="entry-org">@ ${item.organization}</span></span>
                <span class="entry-meta">${item.duration}</span>
            </div>
            ${techHtml}
            ${bulletsHtml}
        `;
        container.appendChild(card);
    });
}

function renderInternships(list) {
    const container = document.getElementById("internships-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-internships").style.display = "none";
        return;
    }
    document.getElementById("section-internships").style.display = "block";
    
    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "entry-card";
        
        let techHtml = "";
        if (item.technologies && item.technologies.length > 0) {
            techHtml = `<div class="tag-container"><span class="no-print filter-label">Tech:</span> ${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>`;
        }

        let bulletsHtml = "";
        if (item.responsibilities && item.responsibilities.length > 0) {
            bulletsHtml += `<ul class="bullet-list">`;
            item.responsibilities.forEach(bullet => {
                bulletsHtml += `<li>${bullet}</li>`;
            });
            if (item.achievements && item.achievements.length > 0) {
                item.achievements.forEach(bullet => {
                    bulletsHtml += `<li><strong>Achievement:</strong> ${bullet}</li>`;
                });
            }
            bulletsHtml += `</ul>`;
        }

        card.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">${item.role} <span class="entry-org">@ ${item.organization}</span></span>
                <span class="entry-meta">${item.duration}</span>
            </div>
            ${techHtml}
            ${bulletsHtml}
        `;
        container.appendChild(card);
    });
}

function renderProjects(list) {
    const container = document.getElementById("projects-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        container.innerHTML = "<p class='text-muted'>No projects listed.</p>";
        return;
    }
    
    let filteredList = list;
    if (activeFilter !== 'all') {
        filteredList = list.filter(proj => 
            proj.technologies && proj.technologies.some(t => t.toLowerCase() === activeFilter.toLowerCase())
        );
    }

    if (filteredList.length === 0) {
        container.innerHTML = `<p class='text-muted'>No projects matching tag "${activeFilter}".</p>`;
        return;
    }

    filteredList.forEach(item => {
        const card = document.createElement("div");
        card.className = "entry-card";
        
        let linksHtml = [];
        if (item.github) linksHtml.push(`<a href="${item.github}" target="_blank">GitHub</a>`);
        if (item.demo) linksHtml.push(`<a href="${item.demo}" target="_blank">Demo</a>`);
        
        const linksString = linksHtml.length > 0 ? ` <span class="no-print entry-meta">(${linksHtml.join(" | ")})</span>` : "";

        let techHtml = "";
        if (item.technologies && item.technologies.length > 0) {
            techHtml = `<div class="tag-container">${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>`;
        }

        let achievementsHtml = "";
        if (item.achievements && item.achievements.length > 0) {
            achievementsHtml = `<ul class="bullet-list">`;
            item.achievements.forEach(ach => {
                achievementsHtml += `<li>${ach}</li>`;
            });
            achievementsHtml += `</ul>`;
        }

        card.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">${item.title} ${linksString}</span>
                <span class="entry-meta">${item.contribution || "Developer"}</span>
            </div>
            <p style="font-size: 0.95rem; margin-top: 0.25rem; color: var(--text-secondary);">${item.description}</p>
            ${techHtml}
            ${achievementsHtml}
        `;
        container.appendChild(card);
    });
}

function renderPublications(list) {
    const container = document.getElementById("publications-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-publications").style.display = "none";
        return;
    }
    document.getElementById("section-publications").style.display = "block";

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "entry-card";
        
        const doiLink = item.doi ? `<span class="no-print"> (<a href="${item.doi}" target="_blank">DOI</a>)</span>` : "";

        card.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">"${item.title}" ${doiLink}</span>
                <span class="entry-meta">${item.year}</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--accent-color); font-weight: 500;">${item.journal}</p>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.25rem;">${item.description}</p>
        `;
        container.appendChild(card);
    });
}

function renderHackathons(list) {
    const container = document.getElementById("hackathons-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-hackathons").style.display = "none";
        return;
    }
    document.getElementById("section-hackathons").style.display = "block";

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "entry-card";
        
        let techHtml = "";
        if (item.technologies && item.technologies.length > 0) {
            techHtml = `<div class="tag-container">${item.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>`;
        }

        card.innerHTML = `
            <div class="entry-header">
                <span class="entry-title">${item.title} <span class="entry-org">(${item.ranking || item.award})</span></span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-secondary);">${item.description}</p>
            ${techHtml}
        `;
        container.appendChild(card);
    });
}

function renderSkills(skillsObj) {
    const container = document.getElementById("skills-list");
    container.innerHTML = "";
    if (!skillsObj) return;

    // Mapping keys to readable names
    const skillCategories = {
        "programmingLanguages": "Programming Languages",
        "machineLearning": "Machine Learning",
        "deepLearning": "Deep Learning",
        "dataScience": "Data Science",
        "databases": "Databases",
        "webTechnologies": "Web Technologies",
        "toolsPlatforms": "Tools & Platforms",
        "cloud": "Cloud & Infrastructure",
        "versionControl": "Version Control",
        "operatingSystems": "Operating Systems"
    };

    Object.keys(skillCategories).forEach(key => {
        const skillsList = skillsObj[key];
        if (skillsList && skillsList.length > 0) {
            const div = document.createElement("div");
            div.className = "skill-group";
            div.innerHTML = `
                <div class="skill-category">${skillCategories[key]}</div>
                <div class="skills-inline-tags">
                    ${skillsList.map(skill => `<span class="skill-item-tag">${skill}</span>`).join("")}
                </div>
            `;
            container.appendChild(div);
        }
    });
}

function renderEducation(list) {
    const container = document.getElementById("education-list");
    container.innerHTML = "";
    if (!list || list.length === 0) return;

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "edu-card";
        
        const gpaHtml = item.gpa ? `<span>GPA: ${item.gpa}</span>` : "";

        card.innerHTML = `
            <div class="edu-degree">${item.degree}</div>
            <div class="edu-uni">${item.university}</div>
            <div class="edu-meta">
                <span>Class of ${item.year}</span>
                ${gpaHtml}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderCertifications(list) {
    const container = document.getElementById("certifications-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-certifications").style.display = "none";
        return;
    }
    document.getElementById("section-certifications").style.display = "block";

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "cert-card";
        
        const credId = item.credentialId ? `<span>ID: ${item.credentialId}</span>` : "";
        const verifyLink = item.verificationLink ? `<a href="${item.verificationLink}" target="_blank">Verify</a>` : "";

        card.innerHTML = `
            <div class="cert-name">${item.name}</div>
            <div class="cert-org">${item.organization}</div>
            <div class="cert-meta">
                <span>${item.date}</span>
                ${credId}
                ${verifyLink}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderLeadership(list) {
    const container = document.getElementById("leadership-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-leadership").style.display = "none";
        return;
    }
    document.getElementById("section-leadership").style.display = "block";

    list.forEach(item => {
        const div = document.createElement("div");
        div.style.marginBottom = "0.75rem";
        div.innerHTML = `
            <div style="font-weight:600; font-size:0.95rem;">${item.role} <span class="entry-org">@ ${item.organization}</span></div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom: 0.15rem;">${item.duration || ""}</div>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">${item.description}</p>
        `;
        container.appendChild(div);
    });
}

function renderAwards(list) {
    const container = document.getElementById("awards-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-awards").style.display = "none";
        return;
    }
    document.getElementById("section-awards").style.display = "block";

    list.forEach(item => {
        const div = document.createElement("div");
        div.style.marginBottom = "0.5rem";
        div.innerHTML = `
            <div style="font-weight:600; font-size:0.95rem;">${item.title}</div>
            <div style="font-size:0.85rem; color:var(--accent-color);">${item.organization} (${item.year})</div>
        `;
        container.appendChild(div);
    });
}

function renderLanguages(list) {
    const container = document.getElementById("languages-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-languages").style.display = "none";
        return;
    }
    document.getElementById("section-languages").style.display = "block";

    const tagsHtml = list.map(item => `<span class="skill-item-tag">${item.language} (${item.proficiency})</span>`).join("");
    container.innerHTML = `<div class="skills-inline-tags">${tagsHtml}</div>`;
}

function renderProfiles(list) {
    const container = document.getElementById("profiles-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-profiles").style.display = "none";
        return;
    }
    document.getElementById("section-profiles").style.display = "block";

    const wrapper = document.createElement("div");
    wrapper.className = "profile-links";
    
    list.forEach(item => {
        const a = document.createElement("a");
        a.className = "profile-link-item";
        a.href = item.url;
        a.target = "_blank";
        
        let icon = "🔗";
        const platformLower = item.platform.toLowerCase();
        if (platformLower.includes("linkedin")) icon = "💼";
        else if (platformLower.includes("github")) icon = "💻";
        else if (platformLower.includes("scholar")) icon = "🎓";
        else if (platformLower.includes("leetcode")) icon = "📝";
        else if (platformLower.includes("portfolio") || platformLower.includes("website")) icon = "🌐";
        
        a.innerHTML = `<span>${icon}</span> <span>${item.platform}</span>`;
        wrapper.appendChild(a);
    });
    
    container.appendChild(wrapper);
}

function renderAdditional(list) {
    const container = document.getElementById("additional-list");
    container.innerHTML = "";
    if (!list || list.length === 0) {
        document.getElementById("section-additional").style.display = "none";
        return;
    }
    document.getElementById("section-additional").style.display = "block";

    list.forEach(item => {
        const div = document.createElement("div");
        div.style.marginBottom = "0.75rem";
        div.innerHTML = `
            <div style="font-weight:600; font-size:0.9rem; color:var(--text-primary); text-transform:uppercase; font-family: var(--font-heading); margin-bottom: 0.15rem;">${item.category}</div>
            <p style="font-size:0.9rem; color:var(--text-secondary);">${item.description}</p>
        `;
        container.appendChild(div);
    });
}

// Search and Highlight Algorithm
let searchTimeout;
function searchAndHighlight(query) {
    clearTimeout(searchTimeout);
    
    // Debounce to keep the text typing smooth
    searchTimeout = setTimeout(() => {
        removeHighlights();
        if (!query) return;

        const container = document.querySelector(".resume-container");
        walkTextNodes(container, (node) => {
            const val = node.nodeValue;
            const idx = val.toLowerCase().indexOf(query.toLowerCase());
            if (idx >= 0) {
                const parent = node.parentNode;
                // Avoid highlighting script tags, input elements or anything in no-print elements
                if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'INPUT' || parent.tagName === 'TEXTAREA' || parent.closest('.no-print')) {
                    return;
                }
                
                const fragment = document.createDocumentFragment();
                let lastIdx = 0;
                
                // Find all matches in this text node
                const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
                let match;
                while ((match = regex.exec(val)) !== null) {
                    const matchText = match[0];
                    const matchIdx = match.index;
                    
                    // Text before the match
                    if (matchIdx > lastIdx) {
                        fragment.appendChild(document.createTextNode(val.substring(lastIdx, matchIdx)));
                    }
                    
                    // Match element
                    const mark = document.createElement("mark");
                    mark.className = "keyword-match";
                    mark.textContent = matchText;
                    fragment.appendChild(mark);
                    
                    lastIdx = regex.lastIndex;
                }
                
                // Remaining text
                if (lastIdx < val.length) {
                    fragment.appendChild(document.createTextNode(val.substring(lastIdx)));
                }
                
                parent.replaceChild(fragment, node);
            }
        });
    }, 150);
}

// Helper to remove keyword matches
function removeHighlights() {
    const marks = document.querySelectorAll(".keyword-match");
    marks.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize(); // Merge adjacent text nodes
    });
}

// Helper to walk text nodes safely
function walkTextNodes(node, callback) {
    if (node.nodeType === Node.TEXT_NODE) {
        callback(node);
        return;
    }
    
    // Convert children to a static array so modifications during walk don't cause infinite loops or skips
    const children = Array.from(node.childNodes);
    for (let child of children) {
        walkTextNodes(child, callback);
    }
}

// Escape regex special chars
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
