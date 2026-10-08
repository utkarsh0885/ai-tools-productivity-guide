import { Comparison } from '@/types';

export const COMPARISONS: Comparison[] = [
  {
    slug: 'chatgpt-vs-claude',
    title: 'ChatGPT vs Claude: Complete Comparison for Students & Developers',
    metaTitle: 'ChatGPT vs Claude Comparison: Academic Writing & Coding Evaluated',
    metaDescription: 'A transparent, objective comparison of ChatGPT and Claude. Evaluate their free access tiers, essay analysis strengths, and coding capabilities without bias.',
    toolASlug: 'chatgpt',
    toolBSlug: 'claude',
    overview: 'Both ChatGPT (OpenAI) and Claude (Anthropic) represent the pinnacle of conversational AI. While ChatGPT offers broader multimodal functionality and built-in web search, Claude is widely favored for academic prose, nuanced long-form instructions, and coding logic.',
    comparisonPoints: [
      {
        feature: 'Academic Writing & Tone',
        toolAAssessment: 'Generates structured, clear responses, but tends to default to recognizable, formulaic phrasing unless heavily prompted.',
        toolBAssessment: 'Displays superior linguistic nuance, organic pacing, and academic depth. Excellent for constructive critique on essays and outlines.',
        verdict: 'Claude has an advantage for essay drafting and nuanced academic synthesis.'
      },
      {
        feature: 'Code Debugging & Generation',
        toolAAssessment: 'Broad syntax familiarity across hundreds of frameworks. Integrated code interpreter for data analysis.',
        toolBAssessment: 'Exceptional reasoning on complex algorithms and multi-file architecture. Side-by-side Artifacts preview simplifies iterative fixes.',
        verdict: 'Both are exceptionally capable; Claude Artifacts offers a cleaner development UX.'
      },
      {
        feature: 'Live Web Search & Sourced Data',
        toolAAssessment: 'Features direct real-time web browsing in standard conversations, retrieving current links.',
        toolBAssessment: 'Operates primarily on training data and uploaded documents; standard chat does not include a dedicated live web engine.',
        verdict: 'ChatGPT wins for queries requiring current news and live web lookups.'
      },
      {
        feature: 'Free Tier Accessibility & Limits',
        toolAAssessment: 'Offers access to flagship models with dynamic rate limits that throttle to lighter models once message thresholds are hit.',
        toolBAssessment: 'Enforces strict rolling window quotas during peak daytime hours, occasionally restricting prompts after several turns.',
        verdict: 'ChatGPT generally provides more message volume throughout high-traffic days.'
      }
    ],
    freeTierComparison: {
      toolAFreeDetails: 'Free access with dynamic model toggling. Reverts to standard models when high-tier message limits are met.',
      toolBFreeDetails: 'Free access with rolling time-window limits. Quotas depend heavily on real-time server demand.'
    },
    finalRecommendation: {
      chooseToolAIf: [
        'You need real-time web browsing to find current articles and live documentation',
        'You require voice mode on mobile for conversational review and brainstorming',
        'You need consistent message availability during high-traffic weekday afternoons'
      ],
      chooseToolBIf: [
        'You are refining college essays, literature reviews, or humanities papers and need natural prose',
        'You want a side-by-side Artifacts preview window to inspect and edit code iteratively',
        'You are analyzing complex, nuanced academic logic and multi-step reasoning problems'
      ],
      summaryVerdict: 'For general research and high daily query volume, ChatGPT is the more versatile utility. For serious academic writing critique and clean code generation, Claude offers superior stylistic nuance.'
    },
    lastVerifiedDate: '2026-03-01'
  },
  {
    slug: 'cursor-vs-copilot',
    title: 'Cursor vs GitHub Copilot: Developer & Student IDE Showdown',
    metaTitle: 'Cursor vs GitHub Copilot: AI Coding Assistants Compared',
    metaDescription: 'Compare Cursor and GitHub Copilot for software development. Explore codebase indexing, free hobby tiers, GitHub student benefits, and multi-file editing.',
    toolASlug: 'cursor',
    toolBSlug: 'cursor', // compared conceptually
    overview: 'Cursor and GitHub Copilot represent two different paradigms for AI-assisted programming. GitHub Copilot operates as an extension inside standard editors, whereas Cursor is a dedicated fork of VS Code engineered from the ground up for codebase-wide reasoning.',
    comparisonPoints: [
      {
        feature: 'Codebase Understanding',
        toolAAssessment: 'Uses deep local embeddings to understand dependencies, imported modules, and patterns across your entire project directory.',
        toolBAssessment: 'Primarily analyzes open tabs and recent context, though Copilot Workspace and chat integrations continue to expand context.',
        verdict: 'Cursor provides noticeably superior codebase-wide awareness and file traversal.'
      },
      {
        feature: 'Multi-File Code Generation',
        toolAAssessment: 'Composer feature enables scaffolding and editing changes across 5+ files simultaneously from a single prompt.',
        toolBAssessment: 'Typically suggests code within the active file or accepts targeted chat prompts to generate isolated snippets.',
        verdict: 'Cursor Composer is substantially more powerful for full-stack scaffolding.'
      },
      {
        feature: 'Student Pricing & Free Tiers',
        toolAAssessment: 'Offers a perpetual Free Hobby plan with monthly quotas for premium model requests and basic autocomplete.',
        toolBAssessment: 'Available for free to eligible college students through the verified GitHub Student Developer Pack.',
        verdict: 'Students with an approved GitHub Student Pack get Copilot free; non-student users get more immediate utility from Cursor Hobby.'
      }
    ],
    freeTierComparison: {
      toolAFreeDetails: 'Free Hobby tier provides ongoing predictive autocomplete and an initial allocation of monthly fast requests.',
      toolBFreeDetails: '100% free for verified students via GitHub Student Developer Pack. Non-students require a monthly subscription following trial.'
    },
    finalRecommendation: {
      chooseToolAIf: [
        'You want modern multi-file editing and automated terminal error debugging',
        'You prefer a fully integrated AI-native IDE environment with zero configuration',
        'You want free-tier access without verifying a university student email address'
      ],
      chooseToolBIf: [
        'You have an approved GitHub Student Developer Pack granting full free Copilot access',
        'You strictly prefer standard Visual Studio Code, JetBrains IDEs, or Neovim without switching editors',
        'You work in locked-down enterprise or academic environments that prohibit third-party editor forks'
      ],
      summaryVerdict: 'Cursor delivers a noticeably more modern AI editing experience with multi-file awareness. However, students with an active GitHub Student Developer Pack should take full advantage of their free Copilot license.'
    },
    lastVerifiedDate: '2026-03-01'
  },
  {
    slug: 'elicit-vs-consensus',
    title: 'Elicit vs Consensus: AI Literature Review & Research Engines',
    metaTitle: 'Elicit vs Consensus: Which Academic AI Tool is Best for Research?',
    metaDescription: 'A direct comparison of Elicit and Consensus for academic research. Compare literature review matrices, verified citations, Consensus Meters, and free credits.',
    toolASlug: 'elicit',
    toolBSlug: 'consensus',
    overview: 'Both Elicit and Consensus are designed to solve the critical flaw of general AI chatbots: hallucinated citations. By querying massive indexes of peer-reviewed scientific literature, both tools guarantee that every claim links to a genuine study.',
    comparisonPoints: [
      {
        feature: 'Data Extraction & Matrix Building',
        toolAAssessment: 'Excels at building multi-column synthesis tables extracting sample size, methodology, variables, and findings across papers.',
        toolBAssessment: 'Focuses on answering specific questions with high-level summaries and individual study snapshots.',
        verdict: 'Elicit is significantly more capable for systematic literature extraction matrices.'
      },
      {
        feature: 'Consensus on Empirical Claims',
        toolAAssessment: 'Summarizes individual paper abstracts and provides conceptual takeaways in an analytical format.',
        toolBAssessment: 'Calculates an automated Consensus Meter showing percentage agreement among peer-reviewed papers on empirical queries.',
        verdict: 'Consensus provides faster high-level clarity on whether scientific consensus exists.'
      },
      {
        feature: 'Free Plan Usability',
        toolAAssessment: 'Provides a starter credit allocation that is consumed as you run synthesis queries across paper batches.',
        toolBAssessment: 'Allows unlimited basic searches with study snapshots; limits advanced Consensus Meter analysis credits.',
        verdict: 'Consensus is generally more accessible for casual, ongoing student paper searches.'
      }
    ],
    freeTierComparison: {
      toolAFreeDetails: 'Starter credit allocation upon sign-up. Deep extractions and large table exports consume research credits.',
      toolBFreeDetails: 'Free plan includes unlimited basic searches, study snapshots, and a monthly quota of Consensus Meter syntheses.'
    },
    finalRecommendation: {
      chooseToolAIf: [
        'You are conducting a formal thesis literature review and need a structured multi-paper synthesis matrix',
        'You need to extract specific experimental variables or participant criteria across dozens of studies',
        'You want to upload private PDF paper collections to extract structured tabular data'
      ],
      chooseToolBIf: [
        'You need a quick, reliable answer to an empirical scientific or health question with peer-reviewed backing',
        'You want an intuitive Consensus Meter visualization to cite in your introductory background section',
        'You want a generous free search engine to replace conventional Google Scholar browsing'
      ],
      summaryVerdict: 'Consensus is the ideal rapid search engine for discovering peer-reviewed claims. Elicit is the superior deep-work workbench for synthesizing complex literature review chapters.'
    },
    lastVerifiedDate: '2026-03-01'
  },
  {
    slug: 'perplexity-vs-gemini',
    title: 'Perplexity vs Google Gemini: Conversational Sourced Search',
    metaTitle: 'Perplexity vs Google Gemini: AI Search & Sourced Answers Compared',
    metaDescription: 'Compare Perplexity AI and Google Gemini for web research, source citations, multimodal analysis, and everyday student productivity.',
    toolASlug: 'perplexity',
    toolBSlug: 'perplexity', // compared with Google's native Gemini
    overview: 'As traditional web search transforms into conversational answer engines, Perplexity and Google Gemini represent two distinct approaches to interactive information retrieval.',
    comparisonPoints: [
      {
        feature: 'Citation Transparency',
        toolAAssessment: 'Integrates numbered, clickable footnote citations into every factual sentence, making source verification straightforward.',
        toolBAssessment: 'Provides answers with a "Double-check" feature that highlights text confirmed or disputed by Google Search results.',
        verdict: 'Perplexity provides a cleaner, more immediate academic citation experience.'
      },
      {
        feature: 'Multimodal Integration & Ecosystem',
        toolAAssessment: 'Supports file attachments and image questions within search threads, oriented strictly toward text research.',
        toolBAssessment: 'Deeply integrated with Google Workspace (Docs, Drive, Gmail) and handles native image, audio, and video inputs.',
        verdict: 'Google Gemini has the advantage for seamless Google Docs and Drive study integration.'
      },
      {
        feature: 'Academic Search Focus',
        toolAAssessment: 'Offers an explicit "Academic" focus toggle querying scientific databases directly via Semantic Scholar.',
        toolBAssessment: 'Queries Google\'s general web index; requires specific prompt instructions to restrict answers to scientific sources.',
        verdict: 'Perplexity Academic filter is more effective for scholarly paper exploration.'
      }
    ],
    freeTierComparison: {
      toolAFreeDetails: 'Free tier provides generous standard searches with citations. Pro searches and premium model switching are quota-managed.',
      toolBFreeDetails: 'Free access with standard Google account, offering broad conversation limits and workspace integration.'
    },
    finalRecommendation: {
      chooseToolAIf: [
        'You are compiling references and require transparent, numbered citations for every claim',
        'You want to filter searches exclusively to academic repositories without standard commercial web noise',
        'You prefer an information interface unencumbered by traditional ad-funded search page layouts'
      ],
      chooseToolBIf: [
        'You work heavily within Google Drive, Docs, and Gmail and want native workspace extensions',
        'You need to analyze large images, diagrams, or multimedia materials in study sessions',
        'You want an unmetered general conversation partner for open-ended study brainstorming'
      ],
      summaryVerdict: 'Perplexity is the superior research tool for finding sourced facts and papers. Gemini is the more versatile assistant for general brainstorming within the Google ecosystem.'
    },
    lastVerifiedDate: '2026-03-01'
  },
  {
    slug: 'gamma-vs-tome',
    title: 'Gamma vs Tome: Free AI Presentation & Slide Deck Makers',
    metaTitle: 'Gamma vs Tome: Best AI Presentation Generator for Students?',
    metaDescription: 'Compare Gamma and Tome for generating college slide decks. Review free credit limits, export capabilities, PDF formatting, and layout flexibility.',
    toolASlug: 'gamma',
    toolBSlug: 'gamma', // compared conceptually
    overview: 'Creating visually engaging slide decks for college presentations is one of the most time-consuming academic tasks. Gamma and Tome pioneered AI-driven outline-to-slide generation, transforming rough notes into clean presentations.',
    comparisonPoints: [
      {
        feature: 'Presentation Layout Flexibility',
        toolAAssessment: 'Uses responsive visual cards that adapt fluidly to text volume. Does not enforce rigid 16:9 boundaries unless requested.',
        toolBAssessment: 'Structured around clean storytelling tiles and modern minimalist typography.',
        verdict: 'Gamma offers more versatile, information-dense card layouts for academic presentations.'
      },
      {
        feature: 'Free Export Capabilities',
        toolAAssessment: 'Free Starter account permits direct export to both PDF and Microsoft PowerPoint (.pptx) formats with a discrete footer badge.',
        toolBAssessment: 'Exporting to PDF or presentation formats frequently requires paid tier upgrades or consumes high credit allowances.',
        verdict: 'Gamma is far more practical for students who must submit standard PowerPoint or PDF files.'
      },
      {
        feature: 'AI Credit Economy',
        toolAAssessment: 'Grants 400 free creation credits upon sign-up. Each generation or AI card rewrite consumes a defined portion.',
        toolBAssessment: 'Provides initial starter credits, but complex multimedia tile generations can exhaust quotas rapidly.',
        verdict: 'Gamma\'s 400 credit allowance is generally sufficient for 1–2 complete semester presentations.'
      }
    ],
    freeTierComparison: {
      toolAFreeDetails: '400 free AI credits upon sign-up. Direct export to PDF and PPTX included on the free tier with a subtle branding badge.',
      toolBFreeDetails: 'Starter credits allocated for generation. Export options and advanced templates are tied to subscription tiers.'
    },
    finalRecommendation: {
      chooseToolAIf: [
        'You must export your final presentation to .pptx or .pdf for college LMS submission',
        'You have dense lecture notes or bullet points that need to fit cleanly on balanced visual cards',
        'You want one-click aesthetic theme switching that restyles all slides harmoniously'
      ],
      chooseToolBIf: [
        'You are designing visual portfolio pitches or executive storyboards rather than classroom slides',
        'You prefer a highly stylized, dark-mode minimalist visual aesthetic',
        'You plan to share the presentation primarily via an interactive web link rather than a downloaded file'
      ],
      summaryVerdict: 'Gamma is the clear recommendation for university students due to its practical PDF/PowerPoint export options and generous 400-credit starting allowance.'
    },
    lastVerifiedDate: '2026-03-01'
  }
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return COMPARISONS.find((comp) => comp.slug === slug);
}
