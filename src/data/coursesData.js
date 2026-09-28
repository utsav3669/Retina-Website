export const courses = {
  ielts: {
    id: 'ielts',
    slug: 'ielts',
    name: 'IELTS Preparation Classes',
    shortName: 'IELTS',
    badge: 'International English Language Testing System',
    tagline: 'Build the Score You Need for Global University Admission',
    heroText: 'Build the English skills, test strategies and confidence required to perform effectively in the IELTS examination.',
    image: '/images/ielts.jpg',
    description: 'Prepare for the International English Language Testing System with structured training across Listening, Reading, Writing and Speaking. At Studyhub, our curriculum focuses on foundational language competence combined with practical, test-specific strategies.',
    targetAudience: 'Students preparing for undergraduate or postgraduate studies, vocational certifications, or professional registration abroad.',
    duration: '6 to 8 Weeks Structured Program',
    classSize: 'Small Batches (Focused Attention)',
    testFormat: 'Paper-based or Computer-delivered IELTS (Academic)',
    mockTests: 'Free Weekly Mock Tests with Individual Band Feedback',
    modules: [
      {
        id: 'listening',
        title: 'Listening Module',
        skills: [
          'Understanding conversations and academic lectures',
          'Identifying key information and specific factual details',
          'Following different native accents (British, Australian, American, Canadian)',
          'Note, table, flowchart, and summary completion',
          'Single and multiple-choice question techniques',
          'Map, plan, and diagram labeling questions',
          'Listening prediction and signpost word strategies',
          'Real-time pacing and exam time management'
        ]
      },
      {
        id: 'reading',
        title: 'Reading Module',
        skills: [
          'Skimming and scanning techniques for academic texts',
          'Identifying main ideas and distinguishing them from supporting details',
          'Understanding complex detailed arguments and writer purpose',
          'Matching headings to paragraphs efficiently',
          'Mastering True / False / Not Given & Yes / No / Not Given',
          'Multiple-choice and sentence completion drills',
          'Deciphering academic vocabulary in context',
          'Strict 60-minute time management strategies across 3 passages'
        ]
      },
      {
        id: 'writing',
        title: 'Writing Module (Task 1 & Task 2)',
        subModules: [
          {
            name: 'Task 1: Academic Report (150 words)',
            items: [
              'Understanding charts, bar graphs, and line graphs',
              'Interpreting data tables and matrix breakdowns',
              'Describing step-by-step processes and life cycles',
              'Comparing layout maps and historical changes',
              'Selecting and reporting main features without data dumping',
              'Structuring a clear overview paragraph and detailed body paragraphs',
              'Precision vocabulary for trends, comparisons, and proportions'
            ]
          },
          {
            name: 'Task 2: Academic Essay (250 words)',
            items: [
              'Analyzing prompt requirements (Agree/Disagree, Discussion, Problem-Solution)',
              'Developing logical arguments and supporting evidence',
              'Crafting authoritative introduction hooks and thesis statements',
              'Mastering coherence and cohesion (linking words, topic sentences)',
              'Expanding academic lexical resource and formal collocations',
              'Grammatical range and accuracy (complex sentences, conditionals)',
              'Common essay pitfalls and band descriptors breakdown',
              'Strategic 40-minute essay drafting and self-editing routine'
            ]
          }
        ]
      },
      {
        id: 'speaking',
        title: 'Speaking Module',
        skills: [
          'Part 1: Introduction and interview question confidence',
          'Part 2: Cue card preparation (1-minute planning, 2-minute fluent delivery)',
          'Part 3: In-depth two-way discussion and abstract idea exploration',
          'Fluency and coherence development without unnatural hesitation',
          'Pronunciation, intonation, and stress patterns',
          'Idiomatic language and contextual vocabulary expansion',
          'Grammatical accuracy under live conversational conditions',
          'Building natural confidence and overcoming test anxiety',
          'One-on-one mock speaking sessions with certified trainer feedback'
        ]
      }
    ],
    preparationMethod: [
      {
        stage: '01',
        name: 'Assess',
        title: 'Diagnostic Baseline Assessment',
        desc: 'Begin with an initial diagnostic test across all four components to identify your current band level, strengths, and specific areas requiring improvement.'
      },
      {
        stage: '02',
        name: 'Learn',
        title: 'Targeted Core Instruction',
        desc: 'Engage in structured classroom lectures covering exam structures, question rubrics, vocabulary acquisition, and band-scoring criteria.'
      },
      {
        stage: '03',
        name: 'Practice',
        title: 'Supervised Daily Drills',
        desc: 'Work through authentic exam-style materials with dedicated trainer review, individual feedback on essays, and live speaking cue-card drills.'
      },
      {
        stage: '04',
        name: 'Mock',
        title: 'Timed Weekly Mock Exams',
        desc: 'Sit for full-length simulated examinations under real exam conditions every week, familiarizing yourself with pressure and timing.'
      },
      {
        stage: '05',
        name: 'Improve',
        title: 'Analysis & Strategy Refinement',
        desc: 'Receive comprehensive score breakdowns and 1-on-1 counseling to refine weak areas before taking your official test.'
      }
    ],
    mockTestHighlight: {
      title: 'Free Weekly Mock Tests',
      desc: 'Regular practice helps students become familiar with exam formats, strict timing, and question types. At Studyhub, our registered students sit for full-scale mock tests every week under simulated test conditions, receiving personalized feedback and actionable corrections from instructors.'
    }
  },
  pte: {
    id: 'pte',
    slug: 'pte',
    name: 'PTE Preparation Classes',
    shortName: 'PTE Academic',
    badge: 'Pearson Test of English Academic',
    tagline: 'AI-Scored Computer-Based Test Mastery with Tailored Software Practice',
    heroText: 'Develop the language skills, test familiarity and strategies needed to approach the PTE Academic examination with confidence.',
    image: '/images/pte.jpg',
    description: 'Build the skills required for the Pearson Test of English through structured practice, mock tests and targeted preparation. Studyhub provides dedicated computer lab sessions, computerized speech recognition feedback, and comprehensive test strategy training.',
    targetAudience: 'Students seeking fast test results and computer-scored English certification accepted across Australia, UK, Canada, USA, and New Zealand.',
    duration: '4 to 6 Weeks Intensive Program',
    classSize: 'Individual Workstations (Acoustic Partitions)',
    testFormat: '100% Computer-Based Single 2-Hour Test Session',
    mockTests: 'Full AI-Scored Mock Tests with Detailed Skill Breakdown',
    modules: [
      {
        id: 'speaking-writing',
        title: 'Speaking & Writing Section (54–67 Minutes)',
        skills: [
          'Read Aloud: Oral fluency, natural rhythm, and clear pronunciation',
          'Repeat Sentence: Auditory memory, keyword retention, and cadence',
          'Describe Image: Structured templates for graphs, maps, flowcharts, and diagrams',
          'Re-tell Lecture: Academic note-taking and fluent spoken summarization',
          'Answer Short Question: Instant vocabulary recall and accurate single-word replies',
          'Summarize Written Text: Single-sentence condensation with strict grammar and punctuation',
          'Essay Writing (20 minutes): Clear 200–300 word argumentative essay structure',
          'Oral fluency benchmarks and acoustic microphone placement techniques',
          'Grammar and spelling precision required for automated machine scoring'
        ]
      },
      {
        id: 'reading',
        title: 'Reading Section (29–30 Minutes)',
        skills: [
          'Reading & Writing: Fill in the Blanks (collocations and contextual grammar)',
          'Multiple Choice, Multiple Answer: Analytical deduction and skimming',
          'Re-order Paragraphs: Identifying cohesive markers, pronouns, and chronological flow',
          'Reading: Fill in the Blanks (drag-and-drop vocabulary mastery)',
          'Multiple Choice, Single Answer: Core concept identification',
          'Advanced academic collocations and synonym databases',
          'Pacing strategies to avoid negative penalties and time depletion'
        ]
      },
      {
        id: 'listening',
        title: 'Listening Section (30–43 Minutes)',
        skills: [
          'Summarize Spoken Text: 50–70 word written summary of academic audio',
          'Multiple Choice (Multiple / Single Answer): Auditory focus on gist and detail',
          'Fill in the Blanks: Live transcription of missing terms while listening',
          'Highlight Correct Summary: Selecting best thematic synthesis',
          'Select Missing Word: Anticipating audio conclusion from context',
          'Highlight Incorrect Words: Tracking transcript text synchronously with audio',
          'Write From Dictation: High-scoring task focusing on exact sentence transcription',
          'Note-taking shorthand and listening accuracy under varying audio accents'
        ]
      }
    ],
    preparationMethod: [
      {
        stage: '01',
        name: 'Learn',
        title: 'Algorithm & Task Orientation',
        desc: 'Understand how the Pearson automated scoring algorithm evaluates fluency, pronunciation, grammar, vocabulary, and content.'
      },
      {
        stage: '02',
        name: 'Practice',
        title: 'Computer Lab Workstation Sessions',
        desc: 'Practice each task type using computer lab workstations equipped with high-fidelity headsets and noise-partitioned booths.'
      },
      {
        stage: '03',
        name: 'Analyze',
        title: 'Automated & Instructor Error Analysis',
        desc: 'Review recorded audio responses and written essays with trainers to spot rhythm, pronunciation, and spelling errors.'
      },
      {
        stage: '04',
        name: 'Mock',
        title: 'Full 2-Hour Simulated Testing',
        desc: 'Complete full-length computerized mock examinations simulating the exact Pearson test engine and pacing.'
      },
      {
        stage: '05',
        name: 'Improve',
        title: 'Targeted Remediation & Fine-Tuning',
        desc: 'Focus final preparation days on high-weight items (Write From Dictation, Repeat Sentence, Read Aloud) to maximize score potential.'
      }
    ],
    mockTestHighlight: {
      title: 'Real-Time Computer Lab Testing',
      desc: 'Our dedicated PTE lab in Bhairahawa features computer stations mimicking actual Pearson test centers. Students build confidence with headsets, timed prompts, and instant diagnostic reports.'
    }
  }
};
