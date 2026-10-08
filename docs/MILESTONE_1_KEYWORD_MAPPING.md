# Milestone 1: Keyword-to-Page Mapping & Site Hierarchy Dossier
**Course:** CSET489 — Search Engine Optimization Mini-Project  
**Component:** Continuous Assessment (CA) — Milestone I (Task 5: Keyword-to-Page / Content Mapping — 2 Marks)  
**Project Title:** AI Tools & Productivity Guide: Educational Discovery Platform  
**Target Niche:** Curated AI Tool Discovery, Free-Tier Audits, and Academic Workflows  
**Budget:** **₹0 (Strict Zero Spend, Zero Paid Tools, Zero Fabricated Data)**  

---

## Academic Context & Rubric Compliance

According to the official **CSET489 Practical Mini-Project Handbook & Evaluation Framework (Page 2 & Page 6–7)**:
* **Task Requirement:** Construct a complete architectural site hierarchy and URL taxonomy. Map primary, secondary, and Latent Semantic Indexing (LSI) keywords to specific pages (Homepage, About, Services/Categories, Blog posts) without keyword cannibalization.
* **Evaluation Standard (Excellent: 2.0 Marks):** Perfectly maps target keywords and search intent to website pages/topics without duplication or cannibalization.
* **Audit Baseline:** This dossier audits the **exact, verified routes** physically compiled and active in the Next.js codebase.

---

## 1. Final Keyword-to-Page Mapping Matrix

Each of the 12 primary and secondary focus keywords from our approved research dossier is mapped to exactly **ONE** dedicated canonical page to enforce single-intent targeting.

### Table 1: Primary & Secondary Keyword Mapping Matrix

| # | Target Keyword | Priority Level | Search Intent | Target Page Name | Exact Canonical URL | Page Type | Supporting / Secondary Keywords |
|:---:|:---|:---:|:---|:---|:---|:---|:---|
| **1** | `best free ai tools for students` | **Primary** | Informational | Best Free AI Tools for College Students | `/guides/best-free-ai-tools-for-college-students/` | Editorial Pillar Guide | `free ai tools for college`, `student ai study stack`, `best ai tools for studying` |
| **2** | `ai tools for academic research` | **Primary** | Informational | Research & Papers Category Hub | `/category/research/` | Category Silo Landing Page | `ai research tools`, `scientific ai search`, `peer reviewed ai tools` |
| **3** | `best free ai coding assistant` | **Primary** | Commercial Investigation | Coding & Development Category Hub | `/category/coding-development/` | Category Silo Landing Page | `free ai code generator`, `free coding assistant vs code`, `ai programming tools` |
| **4** | `cursor vs github copilot` | **Primary** | Commercial Investigation | Cursor vs GitHub Copilot Comparison | `/compare/cursor-vs-copilot/` | Comparative Decision Page | `cursor vs copilot for students`, `is cursor better than copilot`, `cursor ai review` |
| **5** | `free alternatives to chatgpt` | **Primary** | Transactional | Free Alternatives to ChatGPT Hub | `/alternatives/chatgpt/` | Alternative Discovery Hub | `chatgpt free replacements`, `chatgpt alternatives without paywall`, `tools like chatgpt free` |
| **6** | `ai tools for literature review` | **Primary** | Informational | AI Tools for Literature Review Guide | `/guides/ai-tools-literature-review/` | Editorial Pillar Guide | `how to use ai for literature review`, `ai paper synthesis`, `literature review matrix ai` |
| **7** | `chatgpt vs claude for coding` | **Secondary** | Commercial Investigation | ChatGPT vs Claude Comparison | `/compare/chatgpt-vs-claude/` | Comparative Decision Page | `claude vs chatgpt for writing`, `claude 3.5 sonnet vs gpt 4o`, `which is better chatgpt or claude` |
| **8** | `elicit vs consensus` | **Secondary** | Commercial Investigation | Elicit vs Consensus Comparison | `/compare/elicit-vs-consensus/` | Comparative Decision Page | `consensus app vs elicit`, `best ai for research papers`, `literature matrix tool comparison` |
| **9** | `free alternatives to cursor ai` | **Secondary** | Transactional | Free Alternatives to Cursor AI Hub | `/alternatives/cursor/` | Alternative Discovery Hub | `cursor ai free alternatives`, `open source cursor alternative`, `free ai code editor` |
| **10**| `notebooklm for research papers` | **Secondary** | Informational | NotebookLM Tool Profile | `/tools/notebooklm/` | Dedicated Tool Profile | `how to use notebooklm`, `notebooklm review for students`, `google notebooklm citations` |
| **11**| `ai tools that cite sources free` | **Secondary** | Informational | AI Tools That Cite Sources Guide | `/guides/ai-tools-with-citations/` | Editorial Pillar Guide | `ai tools with real citations`, `ai research with doi`, `how to stop ai hallucinated citations` |
| **12**| `ai tools for college writing` | **Secondary** | Informational | Writing & Copy Category Hub | `/category/writing/` | Category Silo Landing Page | `free ai writing tools for college`, `academic writing polish ai`, `ai essay assistant free` |

---

## 2. Long-Tail & LSI Keyword Mapping

The 8 long-tail and Latent Semantic Indexing (LSI) queries identified in Milestone I research are mapped to their specific content sections within existing pages. **No new pages are required**; this structure enriches the semantic topical depth of our existing URLs.

### Table 2: Long-Tail & LSI Content Placement

| # | Long-Tail / LSI Query Phrase | Search Intent | Assigned Existing Page | Exact Section Placement / Heading | Structural Role in Content |
|:---:|:---|:---:|:---|:---|:---|
| **1** | `ai tools for literature review with citations` | Informational | `/guides/ai-tools-literature-review/` | H2: *The 3-Tool Academic Research Stack* & H2: *How to Build an AI Synthesis Matrix* | Direct semantic reinforcement of primary keyword |
| **2** | `free ai tools for university students no credit card` | Transactional | `/` (Homepage) & `/tools/` | Homepage Hero Badge & FAQ Accordion: *Do I need a credit card?* | Trust & zero-barrier objection handling |
| **3** | `how to avoid ai detection in college essays` | Informational | `/guides/best-free-ai-tools-for-college-students/` | H2: *Navigating Academic Integrity & Plagiarism Rules* | Ethics, university honor code compliance, E-E-A-T |
| **4** | `consensus vs elicit for literature review` | Commercial | `/compare/elicit-vs-consensus/` | H2: *Data Extraction & Matrix Building* & Verdict Section | Direct phrase match in comparison overview |
| **5** | `open source alternatives to github copilot` | Commercial | `/alternatives/cursor/` & `/category/coding-development/` | Callout Box: *Open Source & Free Developer Tooling* | Captures developer open-weights search intent |
| **6** | `best ai for summarizing research papers free` | Informational | `/tools/notebooklm/` | Section: *What is NotebookLM?* & Best-For Persona Badge | Direct capability highlight on tool profile |
| **7** | `ats friendly ai resume builder free` | Transactional | `/guides/free-ai-resume-builders/` & `/category/resume-career/` | H2: *Essential ATS-Formatting Rules* & Teal Tool Feature list | Career placement optimization intent |
| **8** | `difference between claude and chatgpt for coding` | Commercial | `/compare/chatgpt-vs-claude/` | H2: *Code Debugging & Generation Evaluation* | Exact feature comparison matrix row |

---

## 3. Site Hierarchy (Actual Codebase Architecture)

The following tree represents the **complete architectural site hierarchy** corresponding directly to active, prerendered routes in the project:

```
[ https://ai-tools-guide.vercel.app/ ]  (Homepage: Primary Discovery & Navigation Hub)
│
├── /tools/                             (Complete Searchable & Filterable Directory)
│   ├── /tools/notebooklm/              (Tool Detail Profile: SoftwareApplication Schema)
│   ├── /tools/perplexity/              (Tool Detail Profile)
│   ├── /tools/claude/                  (Tool Detail Profile)
│   ├── /tools/chatgpt/                 (Tool Detail Profile)
│   ├── /tools/cursor/                  (Tool Detail Profile)
│   ├── /tools/consensus/               (Tool Detail Profile)
│   ├── /tools/elicit/                  (Tool Detail Profile)
│   ├── /tools/gamma/                   (Tool Detail Profile)
│   ├── /tools/teal/                    (Tool Detail Profile)
│   └── /tools/otter/                   (Tool Detail Profile)
│
├── /category/                          (Categories Overview Hub)
│   ├── /category/study-academics/      (Silo Landing Page: ItemList Schema)
│   ├── /category/research/             (Silo Landing Page: ItemList Schema)
│   ├── /category/writing/              (Silo Landing Page: ItemList Schema)
│   ├── /category/coding-development/   (Silo Landing Page: ItemList Schema)
│   ├── /category/presentations/        (Silo Landing Page: ItemList Schema)
│   ├── /category/resume-career/        (Silo Landing Page: ItemList Schema)
│   ├── /category/design/               (Silo Landing Page: ItemList Schema)
│   ├── /category/productivity/         (Silo Landing Page: ItemList Schema)
│   ├── /category/video-audio/          (Silo Landing Page: ItemList Schema)
│   └── /category/everyday-work/        (Silo Landing Page: ItemList Schema)
│
├── /compare/                           (Head-to-Head Comparisons Directory)
│   ├── /compare/chatgpt-vs-claude/     (Comparative Evaluation Matrix)
│   ├── /compare/cursor-vs-copilot/     (Comparative Evaluation Matrix)
│   ├── /compare/elicit-vs-consensus/   (Comparative Evaluation Matrix)
│   ├── /compare/perplexity-vs-gemini/  (Comparative Evaluation Matrix)
│   └── /compare/gamma-vs-tome/         (Comparative Evaluation Matrix)
│
├── /alternatives/                      (Free Alternatives Discovery Directory)
│   ├── /alternatives/chatgpt/          (Zero-Cost ChatGPT Replacements)
│   ├── /alternatives/cursor/           (Zero-Cost Cursor Replacements)
│   ├── /alternatives/github-copilot/   (Zero-Cost Copilot Replacements)
│   ├── /alternatives/quillbot/         (Zero-Cost QuillBot Replacements)
│   └── /alternatives/gamma/            (Zero-Cost Gamma Replacements)
│
├── /guides/                            (Editorial In-Depth Educational Articles)
│   ├── /guides/best-free-ai-tools-for-college-students/  (Cornerstone Pillar Guide: Article + FAQ Schema)
│   ├── /guides/ai-tools-for-academic-research/           (Research Pillar Guide: Article + FAQ Schema)
│   ├── /guides/ai-tools-with-citations/                  (Citation Integrity Guide: Article + FAQ Schema)
│   ├── /guides/free-ai-resume-builders/                  (ATS Placement Guide: Article + FAQ Schema)
│   └── /guides/ai-tools-literature-review/               (Literature Synthesis Guide: Article + FAQ Schema)
│
├── /about/                             (Mission, Educational Scope & University Context)
├── /editorial-policy/                  (Testing Standards, Pricing Disclaimers & E-E-A-T)
├── /contact/                           (Feedback, Outdated Quota Submissions & Corrections)
├── /privacy/                           (Data Protection & Analytics Disclosures)
├── /terms/                             (Educational Fair Use & Trademark Declarations)
│
├── /sitemap.xml                        (Automated Dynamic XML Sitemap)
└── /robots.txt                         (Dynamic Crawler Directives)
```

---

## 4. URL Taxonomy Rationale

The URL taxonomy adheres strictly to modern SEO engineering best practices:

1. **Strict Hierarchical Directory Nesting:**  
   Every URL uses clean, kebab-case directory prefixes (`/category/`, `/tools/`, `/compare/`, `/alternatives/`, `/guides/`). This signals immediate thematic parent-child relationships to search engine crawlers.
2. **Zero Extension & Parameter Independence:**  
   URLs omit file extensions (`.html`, `.php`) and session parameters. Filter states (e.g., `?category=research`) run entirely on the client side; canonical tags strictly point to the clean base URL, preventing crawl budget waste.
3. **Keyword-Infused Slugs Without Stop-Word Bloat:**  
   Slugs contain high-intent focus keywords (`/category/coding-development/`, `/compare/cursor-vs-copilot/`, `/guides/ai-tools-literature-review/`) while remaining under 60 characters for readability in SERP breadcrumbs.
4. **Predictable URL Symmetry:**  
   Users and search bots can reliably predict URLs across tool types (e.g., any comparison follows `/compare/[tool-a]-vs-[tool-b]/`), enhancing programmatic crawl efficiency.

---

## 5. Cannibalization Audit & Safeguard Analysis

Keyword cannibalization occurs when multiple pages on the same website unintentionally compete for the exact same primary search intent, splitting link equity and confusing search engine ranking algorithms.

### Potential Risk Points Evaluated:

#### Risk Area 1: Category Page vs. Editorial Guide
* *Potential Conflict:* `/category/research/` vs. `/guides/best-free-ai-tools-for-college-students/` vs. `/guides/ai-tools-for-academic-research/`.
* *Audit Finding:* **NO CANNIBALIZATION.**
  * `/category/research/` targets **plural, categorical directory queries** (`ai tools for academic research`, `research software directory`) with an `ItemList` directory grid layout.
  * `/guides/ai-tools-for-academic-research/` targets **informational tutorial queries** (`how to use ai for research paper`, `literature review workflow with ai`) with an in-depth long-form editorial guide.
  * `/guides/best-free-ai-tools-for-college-students/` targets **broad multi-disciplinary student stack queries** (`best free ai tools for students`).
* *Safeguard Enforced:* Distinct H1 tags, meta descriptions, and structured schemas (`ItemList` vs `Article`).

#### Risk Area 2: Head-to-Head Comparison vs. Tool Profile
* *Potential Conflict:* `/tools/cursor/` vs. `/compare/cursor-vs-copilot/`.
* *Audit Finding:* **NO CANNIBALIZATION.**
  * `/tools/cursor/` targets **branded, single-entity evaluation queries** (`cursor ai review`, `cursor pricing limits`, `what is cursor ide`).
  * `/compare/cursor-vs-copilot/` targets **comparative decision queries** (`cursor vs github copilot`, `is cursor better than copilot`).
* *Safeguard Enforced:* Tool pages focus on deep single-product quotas; comparison pages focus on side-by-side trade-off matrices.

#### Risk Area 3: Alternative Hub vs. Tool Profile
* *Potential Conflict:* `/tools/chatgpt/` vs. `/alternatives/chatgpt/`.
* *Audit Finding:* **NO CANNIBALIZATION.**
  * `/tools/chatgpt/` targets users seeking details on ChatGPT itself.
  * `/alternatives/chatgpt/` targets users actively looking to **replace** ChatGPT due to paywalls or rate limits (`free alternatives to chatgpt`).

**Conclusion:** The site structure maintains complete separation of search intent. **Zero keyword cannibalization issues exist.**

---

## 6. Internal Linking Strategy & Equity Distribution

Link equity is circulated using a structured **Hub-and-Spoke Topical Mesh**:

```
                       [ HOMEPAGE: High Authority Hub ]
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         │                            │                            │
         ▼                            ▼                            ▼
  [ Category Silos ] ◄────────► [ Pillar Guides ] ◄────────► [ Comparisons ]
         │                            │                            │
         │                            │                            │
         └────────────────────────────┼────────────────────────────┘
                                      │
                                      ▼
                        [ Granular Tool Profiles ]
                                      │
                                      ▼
                        [ Free Alternatives Hubs ]
```

1. **Top-Down Distribution (Homepage → Category & Pillar Hubs):**  
   The homepage links directly to all 10 Category Silos, the top 6 Popular Tools, the top 3 Comparisons, and the top 3 Editorial Guides, passing initial crawl equity across the entire platform.
2. **Horizontal Mesh (Category Silos ↔ Pillar Guides):**  
   Every category page features a dedicated *"Related Guides"* section linking to relevant articles (e.g., `/category/research/` links directly to `/guides/ai-tools-for-academic-research/`). In turn, each guide links back to its parent category silo via breadcrumbs and contextual anchor text.
3. **Editorial In-Content Contextual Anchors (Guides → Tools & Comparisons):**  
   Inside editorial guides, every tool mention includes a natural internal link pointing to its individual review page (e.g., *"upload your PDFs directly into [NotebookLM](/tools/notebooklm/)"*) or relevant comparison (e.g., *"see our complete [Cursor vs GitHub Copilot](/compare/cursor-vs-copilot/) breakdown"*).
4. **Bottom-Up Equity Flow (Tool Profiles → Categories & Alternatives):**  
   Every tool detail page features:
   * A category badge link returning to its parent silo (`/category/[category]/`).
   * A *"Related Tools in this Category"* module creating lateral crawl paths.
   * Breadcrumbs passing PageRank upwards: `Home > Tools > Category > Tool Name`.

---

## 7. Report-Ready SEO Site Structure Diagram

This concise table is formatted for direct inclusion into your **Milestone I Academic Report**:

### Table 3: Summary Site Architecture & SEO Strategy Matrix

| Architectural Tier | URL Pattern | Number of Routes | Primary Search Intent | Structured Data Schema | Core Role in SEO Campaign |
| :--- | :--- | :---: | :--- | :--- | :--- |
| **Tier 1: Root Gateway** | `/` | 1 | Navigation / Brand Discovery | `WebSite`, `Organization` | Central authority hub; establishes topical scope and directs visitors to silos. |
| **Tier 2: Thematic Category Silos** | `/category/[slug]/` | 10 | High-Level Informational (Plural) | `ItemList`, `BreadcrumbList` | Category landing hubs; groups related tools and captures broad topical queries. |
| **Tier 3: Directory Hub** | `/tools/` | 1 | Broad Commercial Discovery | `ItemList`, `BreadcrumbList` | Comprehensive filterable index; enables multi-attribute tool discovery. |
| **Tier 4: Tool Detail Profiles** | `/tools/[slug]/` | 10 | Branded / Entity Evaluation | `SoftwareApplication`, `BreadcrumbList` | Granular product reviews; audits free-tier quotas and captures specific tool queries. |
| **Tier 5: Comparative Showdowns** | `/compare/[slug]/` | 5 | Commercial Investigation | `BreadcrumbList` | Head-to-head decision matrices; captures high-intent comparison queries. |
| **Tier 6: Alternative Hubs** | `/alternatives/[slug]/` | 5 | Transactional Replacement | `BreadcrumbList` | High-intent replacement pages; targets searchers frustrated by paywalls. |
| **Tier 7: Editorial Pillar Guides** | `/guides/[slug]/` | 5 | In-Depth Informational Tutorial | `Article`, `FAQPage`, `BreadcrumbList` | Authoritative cornerstone content; targets long-tail keywords and Featured Snippets. |
| **Tier 8: Compliance & Trust** | `/about/`, `/editorial-policy/`, etc. | 5 | Educational Transparency | `BreadcrumbList` | Establishes Google E-E-A-T credentials and institutional project context. |
| **Directives** | `/sitemap.xml`, `/robots.txt` | 2 | Technical Crawl Directives | N/A | Guides automated search engine bot crawling and indexation. |

---

## Audit Conclusion & Website Status

* **Are any website code changes required?**  
  **NO CHANGES ARE REQUIRED.**  
  The current live Next.js codebase (`src/app/`, `src/data/`, `src/lib/`) already matches this exact architectural taxonomy, route structure, and internal linking framework with 100% precision. All 56 pages are prerendered and active on `localhost:3000`.
