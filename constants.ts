
import { 
  CloudUpload, 
  ScanFace, 
  Search, 
  Repeat, 
  ShieldCheck, 
  Share2, 
  DollarSign,
  Network,
  Video,
  PiggyBank,
  Users,
  HardDrive,
  Zap
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works', type: 'scroll' },
  { label: 'Features', href: '#features', type: 'scroll' },
  { label: 'Case Study', href: '/case-study', type: 'page' },
  { label: 'About Us', href: '/about', type: 'page' },
  { label: 'Contact', href: '/contact', type: 'page' },
];

export const PAIN_POINTS = [
  {
    title: "Disorganized assets",
    description: "Your photos and videos are stored across various platforms. Searches take minutes instead of seconds."
  },
  {
    title: "Unclear rights",
    description: "Ambiguous usage rights lead to legal risks and hesitation in publishing, slowing down content delivery."
  },
  {
    title: "Unfindable rich media",
    description: "Video and audio content remain unsearchable due to the inability to index speech, faces, or scenes."
  },
  {
    title: "Dust over archives",
    description: "Valuable assets are buried in archives, resulting in low reuse rates and redundant spending on new content creation."
  }
];

export const FEATURES = [
  {
    id: 'upload',
    title: 'Upload',
    subtitle: 'Seamlessly ingest content from anywhere.',
    details: [
      'Drag and drop via Pchela web platform, API, FTP, watch folders or expiring upload links',
      'Pchela iOS and Android apps for photographers (Canon Camera Control API supported)',
      'Connect with your CMS via REST API and/or Web Sockets'
    ],
    icon: CloudUpload,
    imageKeyword: 'cloud-upload'
  },
  {
    id: 'auto-tag',
    title: 'Auto-tag & Face recognition',
    subtitle: 'Let AI organize your content for you.',
    details: [
      'Face recognition: pre-existing database + continuously trained on your assets',
      'AI-recognized objects, SEO meta-tags; name-mapping to your tags list',
      'Speech-to-text transcription makes audio and video searchable'
    ],
    icon: ScanFace,
    imageKeyword: 'artificial-intelligence'
  },
  {
    id: 'search',
    title: 'Intelligent search',
    subtitle: 'Find the needle in the haystack instantly.',
    details: [
      'Semantic + facet search across people, places, topics, rights',
      'Additional filters: dates, location, orientation and photographers',
      'Audio-transcriptions allow instant jump to spoken moment in video/audio'
    ],
    icon: Search,
    imageKeyword: 'search-engine'
  },
  {
    id: 'reusability',
    title: 'Content reusability',
    subtitle: 'Maximize the ROI of every asset.',
    details: [
      'Unlock the value of older assets through individual assets or asset collections',
      'Easier retrieval enables reusing valuable content and save time/money',
      'Maximizes ROI, but warns in the cases of over-usage'
    ],
    icon: Repeat,
    imageKeyword: 'recycling' 
  },
  {
    id: 'rights',
    title: 'Rights integration',
    subtitle: 'Stay compliant, automatically.',
    details: [
      'Usage restrictions per team, department, company, country',
      'Watermarked previews, download gating; full audit trail',
      'Workflow adaptable to your business logic and policies'
    ],
    icon: ShieldCheck,
    imageKeyword: 'security'
  },
  {
    id: 'share',
    title: 'Share & Collaborate',
    subtitle: 'Distribute content without friction.',
    details: [
      'Share internally or with partners via web access or expiring links',
      'Optional branded web-storefront',
      'Showcase your assets or barter them'
    ],
    icon: Share2,
    imageKeyword: 'collaboration'
  },
  {
    id: 'monetize',
    title: 'Monetize & Measure',
    subtitle: 'Turn your archive into a revenue stream.',
    details: [
      'Monetize – paywall integration or contractual access for partners',
      'Full transaction system integration (payment, auto-invoicing, fiscalization)',
      'Sell singles, collections or subscriptions. Contributor and asset analytics.'
    ],
    icon: DollarSign,
    imageKeyword: 'analytics'
  }
];

export const DIFFERENTIATORS = [
  {
    title: 'Advanced DAM with AI',
    desc: 'Organize assets and save time to describe and tag them.',
    icon: Network
  },
  {
    title: 'Advanced sharing',
    desc: 'Integrate optional licensing and checkout flows to generate revenue.',
    icon: DollarSign
  },
  {
    title: 'A/V-First Search',
    desc: 'Revolutionary face and speech recognition make video truly searchable.',
    icon: Video
  },
  {
    title: 'Low Total Cost',
    desc: 'Object storage compatibility, API-native design, and easy rollout ensure minimal overhead.',
    icon: PiggyBank
  }
];

export const PRICING_FACTORS = [
  { title: 'Team Structure', desc: 'Unlimited viewers. Pay only for power users and admins.', icon: Users },
  { title: 'Storage Volume', desc: 'From TBs to PBs. Tiered rates for massive archives.', icon: HardDrive },
  { title: 'AI Modules', desc: 'Modular pricing. Only pay for the AI capabilities you activate.', icon: Zap },
  { title: 'Traffic & API', desc: 'Generous bandwidth included. No surprise bills for viral content.', icon: DollarSign },
];

export const PARTNERS = [
  'Ringier', 'United Media', 'Leeds', 'Media24', 'Euronews', 'Panathinaikos',
  'Hanza Media', 'Delo', 'PTC', 'Partizan', 'HRT', 'B92'
];

export const OTHER_TOOLS = [
  { name: 'Litteraworks', desc: 'AI transcription, speech and subtitle generation', url: 'https://www.litteraworks.com' },
  { name: 'mPanel', desc: 'AI-powered CMS', url: 'https://app-works.app/cms' },
  { name: 'Sport Fan Engagement', desc: 'Engage your fans like never before', url: 'https://app-works.app/sport' },
];
