import { AITool } from '@/types';

export const TOOLS: AITool[] = [
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    slug: 'notebooklm',
    category: 'research',
    categoryName: 'Research & Papers',
    tagline: 'Source-grounded academic research notebook powered by your own uploaded documents.',
    shortDescription: 'Google NotebookLM is a specialized research companion that grounds all responses in user-uploaded PDFs, Google Docs, and web links, effectively eliminating fabricated citations.',
    detailedDescription: 'Unlike generic chatbots that draw answers from broad web training datasets, NotebookLM operates strictly on the specific documents you provide. When you upload research papers, textbook chapters, or lecture notes, NotebookLM synthesizes information, generates study guides, and cites exact quotes with inline page references from your sources. It is particularly valued by college students and researchers for literature synthesis and exam preparation without hallucination risks.',
    pricingModel: 'Free',
    freeTierSummary: 'Free access with a Google account. Current capacity allows up to 50 sources per notebook (with up to 500,000 words per source). Specific tier limits are subject to Google workspace policy.',
    platforms: ['Web'],
    officialUrl: 'https://notebooklm.google.com',
    features: [
      'Strict source-grounded answers with verifiable inline citations',
      'Automatic study guide, FAQ, and briefing document generation',
      'Multi-source synthesis across up to 50 research papers simultaneously',
      'Audio Overview feature generating two-host spoken discussions of your notes',
      'Direct support for PDF, Google Docs, Google Slides, and plain text uploads'
    ],
    pros: [
      'Eliminates hallucinated citations by anchoring solely to uploaded sources',
      'Completely free to use with a standard Google account',
      'Audio Overview provides an alternative auditory review method for complex papers'
    ],
    cons: [
      'Limited to analyzing uploaded documents; cannot browse the live web independently',
      'Requires clean, text-extractable PDFs (scanned non-OCR PDFs may lose accuracy)',
      'No standalone native mobile application available'
    ],
    bestFor: 'Academic researchers and university students synthesizing multiple peer-reviewed papers or study notes.',
    editorialRating: 4.8,
    lastVerifiedDate: '2026-03-01',
    tags: ['research', 'study-stack', 'source-grounded', 'citations', 'google'],
    relatedToolSlugs: ['perplexity', 'consensus', 'elicit'],
    relatedGuideSlugs: ['ai-tools-for-academic-research', 'best-free-ai-tools-for-college-students']
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    slug: 'perplexity',
    category: 'everyday-work',
    categoryName: 'Everyday Work & Smart Search',
    tagline: 'Conversational search engine delivering synthesized answers with real-time web citations.',
    shortDescription: 'Perplexity AI functions as an interactive research assistant, indexing live web pages and returning synthesized answers supported by clickable, numbered source citations.',
    detailedDescription: 'Perplexity bridges the gap between conventional search engines and generative chatbots. When asked a research question, it queries live web sources, synthesizes the findings, and attaches transparent numerical citations to every factual claim. Users can review the exact source domains, refine queries with follow-up questions, and filter searches using focused search domains (such as Academic, YouTube, or Reddit).',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free tier available with standard search queries and basic source citations. Pro search searches more sources and offers advanced model toggles. Specific daily limits should be checked on the official site.',
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
    officialUrl: 'https://www.perplexity.ai',
    features: [
      'Real-time web indexing with clickable, numbered source citations',
      'Focus filters including Academic (searches scientific papers via Semantic Scholar)',
      'Collection spaces for organizing research queries into project notebooks',
      'Follow-up prompt suggestions based on search context',
      'Clean interface free of conventional sponsored search ads'
    ],
    pros: [
      'Transparent attribution allows immediate fact-checking of claims',
      'Generous free standard search tier suitable for daily research',
      'Academic focus filter searches peer-reviewed papers specifically'
    ],
    cons: [
      'Deep multi-step reasoning queries require Pro search tokens',
      'Occasionally cites secondary blog summaries rather than primary academic literature',
      'Free tier model allocation may change during peak traffic periods'
    ],
    bestFor: 'Fact-checking, rapid initial literature discovery, and daily information lookup with verified sources.',
    editorialRating: 4.7,
    lastVerifiedDate: '2026-03-01',
    tags: ['search', 'citations', 'everyday', 'fact-checking', 'academic-filter'],
    relatedToolSlugs: ['notebooklm', 'consensus', 'chatgpt'],
    relatedGuideSlugs: ['ai-tools-that-cite-sources', 'best-free-ai-tools-for-college-students']
  },
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    category: 'writing',
    categoryName: 'Writing & Copy',
    tagline: 'Advanced AI assistant known for nuanced academic prose, logic, and large context windows.',
    shortDescription: 'Claude by Anthropic is an AI assistant renowned for its natural, nuanced writing style, high logical coherence, and strong programming comprehension.',
    detailedDescription: 'Developed by Anthropic, Claude is recognized for producing less formulaic, more stylistically sophisticated text compared to standard chatbots. It excels at parsing complex instructions, analyzing long textual excerpts, and providing nuanced constructive critique for essays, research methodologies, and code architecture. Its safety-first design and artifact preview window make it a favorite among developers and academic writers.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free access is available on web and mobile with standard usage rate limits (rolling window quotas). Exact message limits depend on server demand and are detailed on Anthropic\'s platform.',
    platforms: ['Web', 'macOS', 'Windows', 'iOS', 'Android'],
    officialUrl: 'https://claude.ai',
    features: [
      'Nuanced prose generation with minimal repetitive formulaic phrasing',
      'Artifacts window allowing side-by-side editing of code and documents',
      'Comprehensive document upload and multi-page text analysis',
      'Strong logical reasoning across academic problem sets',
      'Refined instruction-following for custom academic tone guidelines'
    ],
    pros: [
      'High-quality essay outlining, critique, and code syntax generation',
      'Artifacts interface makes editing text and previewing code seamless',
      'Writing tone feels more organic and academic than competitor defaults'
    ],
    cons: [
      'Strict rolling usage limits on the free tier during high-demand hours',
      'No native direct internet search browsing on standard conversational prompts',
      'File upload file-size restrictions apply on the free plan'
    ],
    bestFor: 'College essays, academic paper drafting, nuanced code debugging, and deep textual analysis.',
    editorialRating: 4.6,
    lastVerifiedDate: '2026-03-01',
    tags: ['writing', 'coding', 'reasoning', 'artifacts', 'freemium'],
    relatedToolSlugs: ['chatgpt', 'cursor'],
    relatedGuideSlugs: ['best-free-ai-tools-for-college-students', 'ai-tools-for-academic-research']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    category: 'everyday-work',
    categoryName: 'Everyday Work & Smart Search',
    tagline: 'The widely adopted conversational AI platform with web search, voice, and analysis.',
    shortDescription: 'OpenAI\'s flagship conversational assistant offering multimodal interaction, web search capabilities, code interpretation, and custom instructions.',
    detailedDescription: 'ChatGPT remains the benchmark general-purpose AI assistant. It provides broad versatility across academic brainstorming, structured coding assistance, math problem explanation, and conversational brainstorming. Free tier users have access to OpenAI\'s flagship intelligence tier with dynamic rate limits that revert to standard efficient models once message quotas are reached.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free tier available with dynamic access to flagship models. Message rate limits apply and adjust automatically during peak hours. Verify current quotas directly on OpenAI\'s pricing page.',
    platforms: ['Web', 'macOS', 'Windows', 'iOS', 'Android'],
    officialUrl: 'https://chatgpt.com',
    features: [
      'Broad general knowledge spanning science, humanities, and software engineering',
      'Integrated web search for real-time query resolution',
      'Voice mode on mobile devices for conversational study sessions',
      'Custom Instructions to anchor responses to your academic level and formatting needs',
      'Data analysis capabilities for uploaded CSVs and spreadsheets'
    ],
    pros: [
      'Immense ecosystem of community prompts and widespread tutorial support',
      'Multimodal capabilities (image analysis, file attachments, and voice mode)',
      'Generous free access compared to most commercial proprietary models'
    ],
    cons: [
      'Flagship model access throttles to lighter models when message limits are hit',
      'Can invent academic citations if asked to search without strict prompt constraints',
      'Frequent peak-time rate limiting for non-paying users'
    ],
    bestFor: 'General-purpose academic brainstorming, coding fundamentals, conversational study, and everyday tasks.',
    editorialRating: 4.6,
    lastVerifiedDate: '2026-03-01',
    tags: ['general-ai', 'brainstorming', 'multimodal', 'freemium', 'search'],
    relatedToolSlugs: ['claude', 'perplexity'],
    relatedGuideSlugs: ['best-free-ai-tools-for-college-students']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    slug: 'cursor',
    category: 'coding-development',
    categoryName: 'Coding & Development',
    tagline: 'AI-first code editor built on VS Code with codebase-wide understanding and multi-file editing.',
    shortDescription: 'Cursor is a modern code editor forked from VS Code that integrates language models directly into the editing and debugging workflow.',
    detailedDescription: 'Rather than operating as a basic sidebar chatbot, Cursor indexes your local codebase using vector embeddings. This allows it to understand relationships between disparate files, suggest multi-line completions, edit across multiple files simultaneously, and debug terminal errors directly from the integrated terminal. Because it is a VS Code fork, it preserves all your existing extensions, keybindings, and themes.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free Hobby tier provides basic autocomplete and a limited number of premium AI requests per month. Subsequent requests use standard models. Check official site for current monthly allowances.',
    platforms: ['macOS', 'Windows', 'Linux'],
    officialUrl: 'https://www.cursor.com',
    features: [
      'Full VS Code ecosystem compatibility (all extensions and settings import with one click)',
      'Multi-file editing via Composer to scaffold entire features across files',
      'Codebase indexing allowing queries that span your entire project directory',
      'Terminal error debugging with one-click fix suggestions',
      'Intelligent predictive tab-completion across functions and parameters'
    ],
    pros: [
      'Zero learning curve for existing Visual Studio Code users',
      'Codebase awareness drastically reduces context-pasting overhead',
      'Free Hobby tier is sufficient for small student course assignments'
    ],
    cons: [
      'Premium fast requests are limited per month on the free tier',
      'Heavy indexing can consume significant local CPU/RAM on low-spec laptops',
      'Requires downloading a separate editor rather than an in-place extension'
    ],
    bestFor: 'Computer science students and software developers building full-stack applications and multi-file codebases.',
    editorialRating: 4.9,
    lastVerifiedDate: '2026-03-01',
    tags: ['coding', 'ide', 'vs-code', 'developer-tools', 'autocomplete'],
    relatedToolSlugs: ['claude', 'chatgpt'],
    relatedGuideSlugs: ['best-free-ai-tools-for-college-students']
  },
  {
    id: 'consensus',
    name: 'Consensus',
    slug: 'consensus',
    category: 'research',
    categoryName: 'Research & Papers',
    tagline: 'Evidence-based search engine that extracts claims directly from peer-reviewed scientific papers.',
    shortDescription: 'Consensus indexes over 200 million scientific papers, using AI to extract verified findings and answer research questions with consensus meters.',
    detailedDescription: 'Consensus is tailored specifically for academic researchers, graduate students, and evidence-focused writers. Instead of crawling standard commercial web pages, it queries indexed scientific literature from Semantic Scholar and other open-access repositories. For empirical yes/no questions, it calculates a Consensus Meter showing the proportion of peer-reviewed studies supporting or refuting a hypothesis.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free tier available with unlimited basic searches, study summaries, and limited Consensus Meter credits per month. Verify current allowances on the Consensus pricing page.',
    platforms: ['Web'],
    officialUrl: 'https://consensus.app',
    features: [
      'Direct indexing of 200M+ peer-reviewed scientific papers',
      'Consensus Meter illustrating scientific agreement on empirical questions',
      'Study Snapshot summaries highlighting sample sizes, methodology, and findings',
      'Quality indicators including citation counts, journal rigor, and study design',
      'Direct BibTeX and citation manager export options'
    ],
    pros: [
      'Zero risk of invented citations: every claim links directly to a real DOI',
      'Drastically reduces time spent reading study abstracts for literature reviews',
      'Free search capabilities are generous enough for undergraduate literature papers'
    ],
    cons: [
      'Consensus Meter analysis credits are capped monthly on the free plan',
      'Specialized in scientific and social-science papers; less useful for humanities or technical code',
      'Full-text access depends on whether the underlying study is open-access'
    ],
    bestFor: 'Writing literature reviews, verifying empirical scientific claims, and finding peer-reviewed sources for research papers.',
    editorialRating: 4.8,
    lastVerifiedDate: '2026-03-01',
    tags: ['research', 'scientific-papers', 'citations', 'evidence-based', 'literature-review'],
    relatedToolSlugs: ['elicit', 'notebooklm', 'perplexity'],
    relatedGuideSlugs: ['ai-tools-for-academic-research', 'ai-tools-literature-review']
  },
  {
    id: 'elicit',
    name: 'Elicit',
    slug: 'elicit',
    category: 'research',
    categoryName: 'Research & Papers',
    tagline: 'AI research assistant that automates literature review workflows and data extraction.',
    shortDescription: 'Elicit uses language models to discover relevant research papers, extract key methodology details, and organize findings into structured synthesis matrices.',
    detailedDescription: 'Elicit streamlines the literature review phase by searching over 125 million research papers. Rather than scanning individual abstracts manually, Elicit extracts custom columns across papers—such as sample size, methodology, outcomes measured, and primary limitations. This enables researchers to construct a comprehensive literature matrix in a fraction of the time.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free account provides an initial allocation of research credits for searching papers and extracting summaries. Check official Elicit documentation for current credit renewal policies.',
    platforms: ['Web'],
    officialUrl: 'https://elicit.com',
    features: [
      'Automated extraction of research methodologies, outcomes, and participant data',
      'Structured table view for comparing multiple academic studies side by side',
      'Semantic paper search based on research concepts rather than exact keyword matches',
      'PDF upload capability to run structured extraction across your private paper library',
      'Exportable synthesis tables in CSV and BibTeX formats'
    ],
    pros: [
      'Constructs side-by-side literature review tables automatically',
      'Grounds extractions directly in paper text with verifiable pull-quotes',
      'Great for identifying methodological patterns across dozens of studies'
    ],
    cons: [
      'Free credit allotment is consumed with each multi-paper synthesis run',
      'Advanced high-volume batch exports require a paid tier',
      'Occasional difficulty parsing non-standard scientific table layouts in scanned PDFs'
    ],
    bestFor: 'PhD candidates, postgraduate researchers, and literature review synthesis across scientific disciplines.',
    editorialRating: 4.7,
    lastVerifiedDate: '2026-03-01',
    tags: ['literature-review', 'research', 'citations', 'data-extraction', 'phd-tools'],
    relatedToolSlugs: ['consensus', 'notebooklm'],
    relatedGuideSlugs: ['ai-tools-for-academic-research', 'ai-tools-literature-review']
  },
  {
    id: 'gamma',
    name: 'Gamma App',
    slug: 'gamma',
    category: 'presentations',
    categoryName: 'Presentations',
    tagline: 'AI-powered medium for generating presentations, webpages, and document decks from outlines.',
    shortDescription: 'Gamma generates polished presentation slide decks, interactive documents, and project overviews from text prompts and lecture outlines in seconds.',
    detailedDescription: 'Gamma replaces rigid traditional slide templates with a fluid, card-based canvas. Users can paste an essay, project outline, or research abstract, and Gamma automatically structures the content into cohesive visual slides complete with layout formatting, bullet hierarchies, and matching visual themes. Presentations can be presented directly or exported to PDF and PowerPoint formats.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free Starter account includes an initial 400 AI generation credits upon registration, with free export to PDF and PowerPoint (with a Gamma badge). Verify credit renewal terms on Gamma\'s site.',
    platforms: ['Web'],
    officialUrl: 'https://gamma.app',
    features: [
      'Generates complete multi-card slide decks from plain text prompts or uploaded notes',
      'Fluid, responsive card layouts that adapt to content length without manual resizing',
      'Export to PowerPoint (.pptx) and PDF formats',
      'One-click aesthetic theme switching across your entire presentation',
      'Interactive embeds for web forms, videos, and live code snippets'
    ],
    pros: [
      'Dramatically reduces time spent formatting slide layouts for college presentations',
      'Clean typography and modern responsive aesthetics out of the box',
      'Free tier permits standard exports without immediate subscription paywalls'
    ],
    cons: [
      'Consumes AI credits with every card generation and revision',
      'Free tier exports include a subtle "Made with Gamma" branding badge',
      'Custom fonts and advanced analytics require a paid plan'
    ],
    bestFor: 'Students and team project groups needing fast, visually engaging presentation decks from lecture notes or report outlines.',
    editorialRating: 4.6,
    lastVerifiedDate: '2026-03-01',
    tags: ['presentations', 'slides', 'deck-maker', 'freemium', 'student-projects'],
    relatedToolSlugs: ['chatgpt', 'claude'],
    relatedGuideSlugs: ['best-free-ai-tools-for-college-students']
  },
  {
    id: 'teal',
    name: 'Teal',
    slug: 'teal',
    category: 'resume-career',
    categoryName: 'Resume & Career',
    tagline: 'All-in-one AI resume builder, job tracker, and ATS keyword matching platform for job seekers.',
    shortDescription: 'Teal provides a structured resume builder that matches job descriptions against your experience to optimize keyword density for Applicant Tracking Systems.',
    detailedDescription: 'Teal is designed specifically for students, graduates, and professionals applying to competitive job markets. It features an ATS resume builder that parses target job listings and provides an actionable Match Score, highlighting key missing skills, certifications, and keywords. Unlike predatory resume builders that demand payment after you build your resume, Teal enables free PDF exports on its base plan.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free tier offers unlimited resume drafting, job application tracking, and standard PDF resume exports. Advanced AI bullet generation quotas and detailed match scores are limited. Check Teal\'s site for terms.',
    platforms: ['Web', 'Browser Extension'],
    officialUrl: 'https://www.tealhq.com',
    features: [
      'Free ATS-compliant resume builder with clean single-column export templates',
      'Job Tracker Chrome extension to save postings directly from LinkedIn and job boards',
      'Job description keyword matching score highlighting missing resume terms',
      'AI bullet-point suggestions based on measurable accomplishment frameworks',
      'Comprehensive application pipeline tracker'
    ],
    pros: [
      'Legitimate free PDF resume export without bait-and-switch payment walls',
      'Single-column layouts ensure maximum parsing compatibility with Workday and Taleo ATS systems',
      'Chrome extension simplifies saving and tracking dozens of campus job applications'
    ],
    cons: [
      'Advanced AI rewriting credits are limited on the free tier',
      'Keyword match scoring is capped per week for non-paying users',
      'Interface has multiple upsell prompts for their Teal+ subscription'
    ],
    bestFor: 'Graduating seniors and college students building ATS-friendly resumes for internship and full-time campus placements.',
    editorialRating: 4.7,
    lastVerifiedDate: '2026-03-01',
    tags: ['resume', 'career', 'ats-friendly', 'job-search', 'placement-prep'],
    relatedToolSlugs: ['chatgpt', 'claude'],
    relatedGuideSlugs: ['free-ai-resume-builders']
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    slug: 'otter',
    category: 'productivity',
    categoryName: 'Productivity & Automation',
    tagline: 'Automated audio recording, transcription, and meeting note summarization assistant.',
    shortDescription: 'Otter.ai records audio, transcribes speech into text in real time, and uses AI to generate structured lecture summaries and action items.',
    detailedDescription: 'Otter.ai is widely used in higher education and remote work environments to capture lecture audio, group discussions, and research interviews. As speech is recorded, Otter transcribes it with speaker identification and timestamps. Following the session, it produces an automated outline, key takeaway highlights, and searchable transcripts, allowing students to review lectures without missing vital explanations.',
    pricingModel: 'Freemium',
    freeTierSummary: 'Free Basic plan includes 300 monthly transcription minutes (with a limit of 30 minutes per single recording session). Current allowances and restrictions should be verified on Otter.ai\'s pricing page.',
    platforms: ['Web', 'iOS', 'Android', 'Browser Extension'],
    officialUrl: 'https://otter.ai',
    features: [
      'Real-time automated transcription with speaker identification',
      'AI-generated automated summary notes and key topic outlines',
      'Direct audio playback synchronized with transcript words for easy verification',
      'Searchable transcript library across all recorded lectures and meetings',
      'Mobile apps for live recording in lecture halls and seminars'
    ],
    pros: [
      'Synchronized text-audio playback makes verifying unclear terms fast and reliable',
      'Generous 300 free monthly transcription minutes on the Basic tier',
      'Mobile app works reliably in university classrooms'
    ],
    cons: [
      'Per-recording session cap of 30 minutes on the free tier requires restarting for longer lectures',
      'Audio recording quality depends significantly on classroom acoustics and microphone placement',
      'Advanced export formats (such as SRT subtitles) require a paid subscription'
    ],
    bestFor: 'College students recording university lectures, study group meetings, and researchers conducting audio interviews.',
    editorialRating: 4.5,
    lastVerifiedDate: '2026-03-01',
    tags: ['transcription', 'lecture-capture', 'notes', 'productivity', 'study-tools'],
    relatedToolSlugs: ['notebooklm', 'perplexity'],
    relatedGuideSlugs: ['best-free-ai-tools-for-college-students']
  }
];

export function getToolBySlug(slug: string): AITool | undefined {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(categorySlug: string): AITool[] {
  return TOOLS.filter((tool) => tool.category === categorySlug);
}
