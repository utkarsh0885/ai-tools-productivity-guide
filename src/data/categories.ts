import { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'study-academics',
    name: 'Study & Academics',
    slug: 'study-academics',
    shortDescription: 'AI flashcards, study guides, exam preparation, and conceptual tutoring tools.',
    longDescription: 'Discover verified zero-cost and freemium AI tools built to assist college students with lecture comprehension, active recall, formula breakdown, and exam revision without violating university honor codes.',
    metaTitle: 'Best AI Tools for Study & Academics | Student Revision Stack',
    metaDescription: 'Explore verified free AI tools for studying, smart flashcards, exam preparation, and concept explanation tailored for university coursework.',
    iconName: 'GraduationCap',
    focusKeywords: ['free ai tools for study', 'ai study stack', 'ai exam prep tools']
  },
  {
    id: 'research',
    name: 'Research & Papers',
    slug: 'research',
    shortDescription: 'Literature reviews, source-grounded paper synthesis, and peer-reviewed citation tools.',
    longDescription: 'Curated AI research engines designed for graduate students and academic researchers. These tools search peer-reviewed repositories, synthesize cross-paper findings, and provide verifiable citations to prevent hallucinations.',
    metaTitle: 'Best AI Tools for Academic Research & Literature Review',
    metaDescription: 'Find genuine AI tools for academic research, literature synthesis, and paper analysis with verifiable citations and source grounding.',
    iconName: 'BookOpen',
    focusKeywords: ['ai tools for academic research', 'ai tools for literature review', 'ai paper synthesis']
  },
  {
    id: 'writing',
    name: 'Writing & Copy',
    slug: 'writing',
    shortDescription: 'Academic writing assistants, grammar polishers, tone adjustment, and structural tools.',
    longDescription: 'Explore AI writing tools engineered to refine academic prose, detect passive phrasing, clarify argumentation, and polish grammar while keeping your authentic authorial voice intact.',
    metaTitle: 'Free AI Writing Tools for College & Academic Papers',
    metaDescription: 'Discover verified free AI writing assistants, grammar editors, and paraphrasing tools designed for college essays and professional drafting.',
    iconName: 'PenTool',
    focusKeywords: ['ai tools for college writing', 'free ai writing tools', 'academic paper grammar ai']
  },
  {
    id: 'coding-development',
    name: 'Coding & Development',
    slug: 'coding-development',
    shortDescription: 'Free code autocomplete, debugging helpers, syntax explainers, and IDE assistants.',
    longDescription: 'A verified index of free and freemium AI coding assistants, inline code autocomplete tools, and terminal companions for computer science students and software developers.',
    metaTitle: 'Best Free AI Coding Assistants & IDE Autocomplete',
    metaDescription: 'Compare the best free AI coding assistants, code generation tools, and IDE extensions with transparent usage limits and student tiers.',
    iconName: 'Code',
    focusKeywords: ['best free ai coding assistant', 'ai code generator free', 'free coding tools for vs code']
  },
  {
    id: 'presentations',
    name: 'Presentations',
    slug: 'presentations',
    shortDescription: 'AI outline-to-slide generators, visual slide deck formatters, and pitch aids.',
    longDescription: 'Streamline college project presentations and slide deck creation using AI tools that generate clean outlines, structured bullet points, and modern slide designs with verified free credit tiers.',
    metaTitle: 'Free AI Presentation Makers & Slide Generators',
    metaDescription: 'Discover genuine free AI presentation makers and outline-to-slide tools with verified free export tiers for college and project presentations.',
    iconName: 'Layout',
    focusKeywords: ['free ai presentation maker', 'ai slides generator', 'ai presentation tools for students']
  },
  {
    id: 'resume-career',
    name: 'Resume & Career',
    slug: 'resume-career',
    shortDescription: 'ATS-compatible resume optimizers, cover letter builders, and interview simulators.',
    longDescription: 'Prepare for campus placements and internship applications with AI tools that parse job descriptions, optimize resume bullet points for ATS scanners, and provide mock interview feedback.',
    metaTitle: 'Free AI Resume Builders & Career Tools for Students',
    metaDescription: 'Find free AI resume builders and career preparation tools with verified free PDF export options and ATS optimization for student job seekers.',
    iconName: 'Briefcase',
    focusKeywords: ['free ai resume builder', 'ats friendly ai resume builder free', 'ai career tools for students']
  },
  {
    id: 'design',
    name: 'Design & Visuals',
    slug: 'design',
    shortDescription: 'Generative vector tools, presentation visualizers, UI mockups, and graphic utilities.',
    longDescription: 'Free and freemium AI design software for college students and non-designers. Generate vector icons, clean presentation mockups, social graphics, and visual project banners with zero design experience.',
    metaTitle: 'Best Free AI Design Tools & Visual Generators',
    metaDescription: 'Curated list of free AI graphic design tools, banner makers, and visual mockup creators with transparent free tier allowances.',
    iconName: 'Palette',
    focusKeywords: ['free ai design tools', 'best ai tools for graphic design free', 'ai visual tools']
  },
  {
    id: 'productivity',
    name: 'Productivity & Automation',
    slug: 'productivity',
    shortDescription: 'Meeting note transcription, task triage, knowledge base management, and smart schedules.',
    longDescription: 'Automate daily academic overhead with AI tools designed for automated lecture transcription, meeting minutes summarization, and smart knowledge base indexing.',
    metaTitle: 'AI Productivity Tools & Automated Workflow Utilities',
    metaDescription: 'Discover top free AI productivity tools, lecture transcribers, and task automation software for university students and knowledge workers.',
    iconName: 'Zap',
    focusKeywords: ['ai productivity tools', 'best free ai meeting note taker', 'ai workflow automation free']
  },
  {
    id: 'video-audio',
    name: 'Video & Audio',
    slug: 'video-audio',
    shortDescription: 'Lecture audio cleanup, video clipping, text-to-speech voiceovers, and subtitles.',
    longDescription: 'Explore AI video editors, podcast cleanup tools, and transcription services with functional free plans for creating college multimedia projects and video presentations.',
    metaTitle: 'Free AI Video & Audio Editing Tools for Creators',
    metaDescription: 'Compare free AI video generators, audio enhancement utilities, and automated subtitle tools with verified free tier limits.',
    iconName: 'Video',
    focusKeywords: ['free ai video editing tools', 'ai audio cleanup free', 'lecture transcription tools']
  },
  {
    id: 'everyday-work',
    name: 'Everyday Work & Smart Search',
    slug: 'everyday-work',
    shortDescription: 'Conversational web search, multi-model assistants, and everyday knowledge utilities.',
    longDescription: 'Smart search engines and general conversational AI assistants for daily problem-solving, fast fact-checking, and interactive information retrieval with real-time web citations.',
    metaTitle: 'Everyday AI Tools & Smart Search Assistants | Daily Productivity',
    metaDescription: 'Find verified conversational search engines and everyday AI assistants providing sourced web answers and daily knowledge retrieval.',
    iconName: 'Search',
    focusKeywords: ['everyday ai tools for productivity', 'smart search ai', 'sourced search assistant']
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}
