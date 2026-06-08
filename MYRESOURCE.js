/* ════════════════════════════════════════════════════════════
   CBC BEST — resources.js
   Author : Ronny Mwenda (Mathematics & Computer Science Teacher)
   Website : cbcbest.netlify.app
   Email   : ronnymwenda89@gmail.com
   © 2026 CBC Best — Original professional content.
   Free for classroom use; not for resale or commercial distribution.
════════════════════════════════════════════════════════════ */

/* ── CATEGORY METADATA ─────────────────────────────────── */
const CAT_META = {
  scheme:     { badge:'badge-scheme',     label:'Scheme of Work',    icon:'📅' },
  lesson:     { badge:'badge-lesson',     label:'Lesson Plan',       icon:'📝' },
  curriculum: { badge:'badge-curriculum', label:'Curriculum Design', icon:'📖' },
  assessment: { badge:'badge-assessment', label:'Assessment Tool',   icon:'📊' },
  notes:      { badge:'badge-notes',      label:'Student Notes',     icon:'📘' },
  career:     { badge:'badge-career',     label:'Career Guide',      icon:'🎯' },
  teacher:    { badge:'badge-teacher',    label:'Teacher Guide',     icon:'👩‍🏫' },
  community:  { badge:'',                 label:'Community',         icon:'🌍' },
};

const CAT_ORDER = {
  scheme:0, lesson:1, curriculum:2, assessment:3,
  notes:4, career:5, teacher:6, community:7
};

/* ── STATE ─────────────────────────────────────────────── */
let currentFilter = 'all';
let currentSearch = '';
let currentSort   = 'default';

/* ── HELPERS ───────────────────────────────────────────── */
function gradeNum(g) {
  const m = String(g).match(/\d+/);
  return m ? parseInt(m[0]) : 99;
}

function esc(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g,
    m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

/* ── FILTER PILL ───────────────────────────────────────── */
function setFilter(cat) {
  currentFilter = cat;
  document.querySelectorAll('.fpill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat === cat);
  });
  applyFilters();
}

/* ── MAIN FILTER / RENDER ──────────────────────────────── */
function applyFilters() {
  const searchEl = document.getElementById('searchInput');
  const sortEl   = document.getElementById('sortSelect');
  currentSearch  = searchEl ? searchEl.value.toLowerCase().trim() : '';
  currentSort    = sortEl   ? sortEl.value : 'default';

  let filtered = RESOURCES.filter(r => {
    if (currentFilter !== 'all' && r.cat !== currentFilter) return false;
    if (!currentSearch) return true;
    const hay = [r.title, r.subject, r.grade, r.terms, r.desc,
      ...(r.topics || [])].join(' ').toLowerCase();
    return hay.includes(currentSearch);
  });

  if (currentSort === 'az')
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  else if (currentSort === 'grade')
    filtered.sort((a, b) => gradeNum(a.grade || '') - gradeNum(b.grade || ''));
  else if (currentSort === 'category')
    filtered.sort((a, b) => (CAT_ORDER[a.cat] ?? 9) - (CAT_ORDER[b.cat] ?? 9));

  const labelMap = {
    all:'All categories', scheme:'Schemes of Work', lesson:'Lesson Plans',
    curriculum:'Curriculum Designs', assessment:'Assessment Tools', notes:'Student Notes',
    career:'Career Guides', teacher:'Teacher Guides', community:'Community Uploads'
  };
  const labelEl = document.getElementById('activeFilterLabel');
  if (labelEl) labelEl.textContent =
    (currentSearch ? `Searching "${currentSearch}" in ` : '') + (labelMap[currentFilter] || currentFilter);

  document.getElementById('resultsCount').textContent = filtered.length;
  renderCards(filtered);
}

/* ── RENDER CARDS ──────────────────────────────────────── */
function renderCards(items) {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;
  document.getElementById('resultsCount').textContent = items.length;

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">
      <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
      <h3>No resources found</h3>
      <p>Try a different search term or select a different category.</p>
    </div>`;
    return;
  }

  grid.innerHTML = items.map(r => {
    const meta   = CAT_META[r.cat] || { badge:'', label: r.cat, icon:'📄' };
    const topics = (r.topics || []).map(t => `<span class="topic-tag">${esc(t)}</span>`).join('');
    const metas  = [r.grade, r.subject, r.terms]
      .filter(Boolean).map(m => `<span class="meta-tag">📌 ${esc(m)}</span>`).join('');

    return `<div class="resource-card cat-${r.cat}">
      <div class="card-top">
        <div class="card-icon">${r.icon || meta.icon || '📄'}</div>
        <span class="card-badge ${meta.badge}">${esc(meta.label)}</span>
      </div>
      <h3>${esc(r.title)}</h3>
      <div class="resource-meta">${metas}</div>
      <p class="resource-desc">${esc(r.desc)}</p>
      ${topics ? `<div class="resource-topics">${topics}</div>` : ''}
      <div class="card-actions">
        <button class="btn-download" onclick="downloadAsPDF('${r.id}')">📥 Download PDF</button>
        <button class="btn-preview"  onclick="previewResource('${r.id}')">👁 Preview</button>
      </div>
    </div>`;
  }).join('');
}

/* ── TOAST ─────────────────────────────────────────────── */
function showToast(msg, isErr) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (!t || !m) return;
  m.textContent = msg;
  t.style.background = isErr ? '#c0392b' : 'var(--navy)';
  t.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.add('hidden'), 3500);
}

/* ════════════════════════════════════════════════════════════
   RESOURCES ARRAY — 25 KICD-aligned CBC documents
════════════════════════════════════════════════════════════ */
const RESOURCES = [

/* ══════════════════════════════════════
   SCHEMES OF WORK (5)
══════════════════════════════════════ */
{
  id:'sow-math-g7-t1',
  cat:'scheme', icon:'📅',
  title:'Mathematics Scheme of Work — Grade 7, Term 1',
  grade:'Grade 7', subject:'Mathematics', terms:'Term 1',
  desc:'Comprehensive KICD-aligned scheme covering Numbers, Algebra, Geometry, and Measurements for Grade 7 learners in the Junior Secondary School programme.',
  topics:['Numbers','Algebra','Geometry','Measurements','Statistics'],
  content: () => `
MATHEMATICS SCHEME OF WORK — GRADE 7, TERM 1
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Mathematics
Grade    : Grade 7 (Junior Secondary School)
Term     : Term 1
Duration : 13 Weeks (39 Lessons × 40 minutes)
Year     : 2026
Prepared by: Ronny Mwenda — Mathematics & Computer Science Teacher
School   : [Your School Name]
County   : Embu County
Reference: KICD Mathematics Curriculum Design, Grade 7

============================================================
STRAND 1: NUMBERS — Weeks 1–4
============================================================

+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| Week | Sub-strand             | Lesson Topics         | Learning Outcomes           | Activities / Resources        | Assessment                |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  1   | Natural Numbers        | Place value to        | Identify and read numbers   | Charts, abacus, number        | Oral questions,           |
|      |                        | millions; Rounding    | to millions; Round to       | lines; Group work             | classwork exercises       |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  2   | Integers               | Negative numbers;     | Compare and order integers; | Number line activities;       | Written exercises,        |
|      |                        | Operations on integers| Add, subtract integers      | Real-world contexts (debts)   | peer assessment           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  3   | Fractions              | Equivalent fractions; | Simplify, compare and       | Fraction bars, paper folding; | Portfolio work,           |
|      |                        | Operations            | operate on fractions        | Collaborative tasks           | rubric assessment         |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  4   | Decimals & Percentages | Conversion; Real-life | Convert between decimals,   | Shopping receipts, tables;    | Formative test,           |
|      |                        | applications          | fractions, percentages      | Problem-based learning        | observation checklist     |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+

============================================================
STRAND 2: ALGEBRA — Weeks 5–7
============================================================

+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| Week | Sub-strand             | Lesson Topics         | Learning Outcomes           | Activities / Resources        | Assessment                |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  5   | Algebraic Expressions  | Variables; Forming    | Form and simplify           | Pattern matching; Tiles;      | Oral questions,           |
|      |                        | and simplifying       | algebraic expressions       | Group presentation            | observation               |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  6   | Linear Equations       | One-step; Two-step    | Solve linear equations      | Balance model; real contexts  | Classwork; peer-marking   |
|      |                        | equations             | in one variable             | (money, age problems)         |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  7   | Inequalities           | Number line rep.;     | Represent and solve         | Number lines; card sorting    | Written test; rubric      |
|      |                        | Simple inequalities   | simple inequalities         |                               |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+

============================================================
STRAND 3: GEOMETRY — Weeks 8–10
============================================================

+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| Week | Sub-strand             | Lesson Topics         | Learning Outcomes           | Activities / Resources        | Assessment                |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  8   | Lines & Angles         | Types of angles;      | Measure, draw and           | Protractors, rulers;          | Practicals; portfolio     |
|      |                        | Angle relationships   | classify angles             | Geoboard explorations         |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
|  9   | Triangles              | Properties; Perimeter;| Apply triangle properties;  | Drawing instruments;          | Observation; test         |
|      |                        | Area                  | Calculate perimeter & area  | Problem solving tasks         |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| 10   | Quadrilaterals         | Properties; Area      | Identify types; Calculate   | Cutouts, models; Field work   | Oral; written; project    |
|      |                        |                       | areas of quadrilaterals     |                               |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+

============================================================
STRAND 4: MEASUREMENTS — Weeks 11–12
============================================================

+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| Week | Sub-strand             | Lesson Topics         | Learning Outcomes           | Activities / Resources        | Assessment                |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| 11   | Length & Area          | SI units; Conversion; | Convert units; calculate    | Measuring tapes, rulers;      | Practical; classwork      |
|      |                        | Perimeter & Area      | perimeter and area          | Real objects measurement      |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| 12   | Volume & Capacity      | Cuboid; Cylinder;     | Calculate volume and        | Containers, water;            | Written test              |
|      |                        | Liquid measure        | capacity; solve problems    | Laboratory activities         |                           |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+

============================================================
STRAND 5: STATISTICS — Week 13
============================================================

+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| Week | Sub-strand             | Lesson Topics         | Learning Outcomes           | Activities / Resources        | Assessment                |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+
| 13   | Data Handling          | Collecting; Tally;    | Collect, represent and      | Surveys; tally charts;        | End-of-term exam;         |
|      |                        | Bar graphs; Mean      | interpret simple data       | graph drawing exercises       | portfolio review          |
+------+------------------------+-----------------------+-----------------------------+-------------------------------+---------------------------+

============================================================
REFERENCES & RESOURCES
============================================================
1. KICD Mathematics Curriculum Design, Grade 7 (2023)
2. KLB Mathematics Grade 7 Learner's Book
3. Longhorn Mathematics Grade 7 Learner's Book
4. National Council of Teachers of Mathematics (NCTM) standards
5. Desmos online graphing tools (free)

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'sow-cs-g8-t2',
  cat:'scheme', icon:'📅',
  title:'Computer Science Scheme of Work — Grade 8, Term 2',
  grade:'Grade 8', subject:'Computer Science', terms:'Term 2',
  desc:'KICD-aligned scheme covering Programming Concepts, Web Technologies, Data Handling, and Digital Citizenship for Grade 8 JSS learners.',
  topics:['Programming','Web Tech','Data Handling','Digital Citizenship','Spreadsheets'],
  content: () => `
COMPUTER SCIENCE SCHEME OF WORK — GRADE 8, TERM 2
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Computer Science
Grade    : Grade 8 (Junior Secondary School)
Term     : Term 2
Duration : 13 Weeks (39 Lessons × 40 minutes)
Year     : 2026
Prepared by: Ronny Mwenda — Mathematics & Computer Science Teacher
Reference: KICD Computer Science Curriculum Design, Grade 8

============================================================
STRAND 1: PROGRAMMING CONCEPTS — Weeks 1–4
============================================================

+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| Week | Sub-strand              | Lesson Topics          | Learning Outcomes           | Activities / Resources         | Assessment                |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  1   | Algorithms & Flowcharts | Problem decomposition; | Design algorithms using     | Scratch / flowchart software;  | Oral questions;           |
|      |                         | Flowchart symbols      | flowcharts and pseudocode   | Group algorithm design         | observation               |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  2   | Scratch Programming     | Events; Loops;         | Write Scratch programs      | School computer lab;           | Practical tasks;          |
|      |                         | Conditionals           | using loops and conditions  | Scratch 3.0 (offline)          | project rubric            |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  3   | Python Basics           | Variables; Input/output| Write simple Python         | Python IDLE / Thonny;          | Coded classwork;          |
|      |                         | Arithmetic operators   | programs with variables     | Printed worksheets (offline)   | peer-review               |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  4   | Debugging               | Syntax errors;         | Identify and fix errors     | Deliberate-error programs;     | Practical test;           |
|      |                         | Logic errors           | in simple programs          | Pair debugging activity        | observation checklist     |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+

============================================================
STRAND 2: WEB TECHNOLOGIES — Weeks 5–7
============================================================

+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| Week | Sub-strand              | Lesson Topics          | Learning Outcomes           | Activities / Resources         | Assessment                |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  5   | HTML Basics             | Structure; Tags;       | Create a basic HTML page    | Notepad / VS Code; browsers    | Portfolio page;           |
|      |                         | Headings, Paragraphs   | with proper structure       |                                | practical rubric          |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  6   | CSS Styling             | Selectors; Colors;     | Apply CSS styles to an      | Inline & external stylesheets; | Styled page project;      |
|      |                         | Fonts; Box model       | HTML document               | Color pickers                  | group review              |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  7   | Web Safety              | Passwords; Privacy;    | Identify online risks and   | Case studies; discussions;     | Written reflection;       |
|      |                         | Cyberbullying          | apply safe practices        | Kenya ICT Board guidelines     | quiz                      |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+

============================================================
STRAND 3: DATA HANDLING — Weeks 8–10
============================================================

+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| Week | Sub-strand              | Lesson Topics          | Learning Outcomes           | Activities / Resources         | Assessment                |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  8   | Spreadsheets I          | Entering data; Formulas| Use SUM, AVERAGE, MIN, MAX  | MS Excel / LibreOffice Calc    | Practical exercise;       |
|      |                         | SUM, AVERAGE           | in spreadsheets             |                                | observation               |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
|  9   | Spreadsheets II         | Charts: bar, pie, line;| Create and interpret        | Chart wizard; school data      | Chart project; rubric     |
|      |                         | Data interpretation    | charts from real data       |                                |                           |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| 10   | Database Concepts       | Fields; Records;       | Understand and create       | MS Access / simple CSV files   | Written test;             |
|      |                         | Tables; Queries        | simple flat-file databases  |                                | practical query task      |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+

============================================================
STRAND 4: DIGITAL CITIZENSHIP — Weeks 11–13
============================================================

+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| Week | Sub-strand              | Lesson Topics          | Learning Outcomes           | Activities / Resources         | Assessment                |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| 11   | Digital Footprint       | Online identity;       | Manage personal digital     | Social media case studies;     | Discussion; reflection    |
|      |                         | Privacy settings       | footprint responsibly       | Kenya Data Protection Act      | journal                   |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| 12   | Intellectual Property   | Copyright; Plagiarism; | Respect intellectual        | Creative Commons resources;    | Poster project;           |
|      |                         | Creative Commons       | property online             | Attribution exercises          | presentation              |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+
| 13   | Revision & Assessment   | All Term 2 topics      | Consolidate and demonstrate | Past paper review; group quiz  | End-of-term exam          |
|      |                         |                        | mastery of all strands      |                                |                           |
+------+-------------------------+------------------------+-----------------------------+--------------------------------+---------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'sow-eng-g9-t1',
  cat:'scheme', icon:'📅',
  title:'English Scheme of Work — Grade 9, Term 1',
  grade:'Grade 9', subject:'English', terms:'Term 1',
  desc:'KICD-aligned English Language scheme covering Listening & Speaking, Reading, Writing, Grammar, and Literature for Grade 9 learners.',
  topics:['Listening & Speaking','Reading','Writing','Grammar','Literature'],
  content: () => `
ENGLISH LANGUAGE SCHEME OF WORK — GRADE 9, TERM 1
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : English Language
Grade    : Grade 9 (Junior Secondary School)
Term     : Term 1
Duration : 13 Weeks
Year     : 2026
Reference: KICD English Language Curriculum Design, Grade 9

============================================================
STRAND 1: LISTENING AND SPEAKING — Weeks 1–3
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Lesson Topics          | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  1   | Listening Skills      | Active listening;      | Listen attentively and        | Audio recordings; podcasts;   | Oral responses; checklist |
|      |                       | Note-taking            | extract key information       | Structured note-taking        |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  2   | Speaking Skills       | Formal speech;         | Deliver a prepared speech     | Debate preparation;           | Speech rubric;            |
|      |                       | Persuasive language    | using persuasive techniques   | Video model speeches          | peer feedback             |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  3   | Discussion Skills     | Turn-taking; Agreeing/ | Participate effectively       | Structured group discussions; | Observation; rubric       |
|      |                       | Disagreeing politely   | in academic discussions       | Discussion prompts            |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 2: READING — Weeks 4–6
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Lesson Topics          | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  4   | Comprehension         | Skimming; Scanning;    | Read and respond to a         | Unseen passages; newspapers   | Comprehension questions   |
|      |                       | Inference              | variety of text types         |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  5   | Vocabulary            | Word roots; Prefixes;  | Expand vocabulary through     | Word maps; dictionary work;   | Vocabulary tests;         |
|      |                       | Context clues          | context and morphology        | Root word charts              | spelling exercises        |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  6   | Literature — Prose    | Characterisation;      | Analyse characters and        | Set novel/short stories;      | Character analysis essay  |
|      |                       | Plot; Theme            | themes in a prose text        | Reading circles               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 3: WRITING — Weeks 7–10
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Lesson Topics          | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  7   | Narrative Writing     | Story structure;       | Write a well-structured       | Story starters; model texts;  | Marked essay; rubric      |
|      |                       | Descriptive language   | narrative with vivid detail   | Peer editing                  |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  8   | Argumentative Writing | Thesis statement;      | Write a coherent argument     | Sample essays; debate topics  | Argumentative essay       |
|      |                       | Evidence; Conclusion   | with supporting evidence      |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  9   | Formal Letter         | Format; Tone;          | Write a formal letter         | Sample letters; real-world    | Letter marked against     |
|      |                       | Register; Purpose      | following correct format      | scenarios                     | format checklist          |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 10   | Summary Writing       | Identifying key points;| Summarise a passage in        | Newspaper articles;           | Summaries; peer feedback  |
|      |                       | Paraphrasing           | own words accurately          | Structured practice           |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 4: GRAMMAR — Weeks 11–12
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Lesson Topics          | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 11   | Tenses & Aspect       | Perfect tenses;        | Use tenses accurately         | Grammar drills;               | Cloze tests; sentences    |
|      |                       | Continuous aspect      | in written and spoken forms   | Contextual exercises          |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 12   | Sentence Structure    | Compound; Complex;     | Construct varied, accurate    | Error correction tasks;       | Written exercises         |
|      |                       | Relative clauses       | sentence structures           | Model sentences               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 5: LITERATURE — Week 13
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Lesson Topics          | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 13   | Poetry                | Poetic devices;        | Identify and appreciate       | Poetry anthology;             | End-of-term exam          |
|      |                       | Interpretation         | poetic techniques             | Group recitation              |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'sow-sci-g7-t2',
  cat:'scheme', icon:'📅',
  title:'Integrated Science Scheme of Work — Grade 7, Term 2',
  grade:'Grade 7', subject:'Integrated Science', terms:'Term 2',
  desc:'Comprehensive KICD scheme covering Matter, Living Things, Energy, and Environment strands for Grade 7 JSS learners.',
  topics:['Matter','Living Things','Energy','Environment','Scientific Method'],
  content: () => `
INTEGRATED SCIENCE SCHEME OF WORK — GRADE 7, TERM 2
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Integrated Science
Grade    : Grade 7 (Junior Secondary School)
Term     : Term 2
Duration : 13 Weeks
Year     : 2026

============================================================
STRAND 1: MATTER AND ITS PROPERTIES — Weeks 1–3
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  1   | States of Matter      | Solids, liquids, gases;| Describe properties of        | Demonstrations; experiments   | Observation; oral         |
|      |                       | Particle model         | each state of matter          | with everyday materials       |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  2   | Changes of State      | Melting; Boiling;      | Explain changes of state      | Heating/cooling experiments;  | Lab report; test          |
|      |                       | Condensation; Freezing | and their reversibility       | Temperature measurement       |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  3   | Mixtures              | Solutions; Suspensions;| Distinguish types of          | Separation techniques;        | Practical assessment;     |
|      |                       | Separation techniques  | mixtures and separate them    | Filtering, evaporation        | rubric                    |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 2: LIVING THINGS — Weeks 4–6
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  4   | Cell Biology          | Plant & animal cells;  | Identify cell structures      | Microscopes; prepared slides; | Drawing; labelling        |
|      |                       | Cell organelles        | and their functions           | Diagrams                      |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  5   | Nutrition             | Nutrients; Food tests; | Identify nutrients and        | Food testing experiments;     | Food test practical;      |
|      |                       | Balanced diet          | their roles in the body       | Nutrition charts              | written test              |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  6   | Reproduction          | Asexual; Sexual;       | Compare modes of              | Models; diagrams; videos      | Oral; structured          |
|      |                       | Pollination            | reproduction in plants        |                               | questions                 |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 3: ENERGY — Weeks 7–9
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  7   | Forms of Energy       | Light; Sound; Heat;    | Identify and describe forms   | Demonstrations; experiments   | Oral; written             |
|      |                       | Electrical; Kinetic    | of energy and their sources   |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  8   | Energy Transfer       | Conduction; Convection;| Explain how energy is         | Heat conduction bars;         | Practical test            |
|      |                       | Radiation              | transferred between objects   | Radiation demonstrations      |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  9   | Renewable Energy      | Solar; Wind; Hydro;    | Evaluate advantages of        | Kenya energy context;         | Project; poster           |
|      |                       | Biogas                 | renewable energy sources      | KenGen resources              |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 4: ENVIRONMENT — Weeks 10–13
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 10   | Ecosystems            | Components; Food webs; | Construct and analyse         | Field study; local ecosystem  | Food web diagrams         |
|      |                       | Energy flow            | food webs and chains          |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 11   | Pollution             | Types; Causes;         | Propose solutions to          | Data analysis; news articles  | Report writing            |
|      |                       | Effects; Solutions     | environmental pollution       |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 12   | Conservation          | Forests; Water; Soil;  | Advocate for sustainable      | Community surveys;            | Presentation; reflection  |
|      |                       | Wildlife               | environmental conservation    | NEMA guidelines               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 13   | Revision & Exam       | All strands            | Consolidate all learning      | Past papers; group revision   | End-of-term exam          |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'sow-sst-g8-t1',
  cat:'scheme', icon:'📅',
  title:'Social Studies Scheme of Work — Grade 8, Term 1',
  grade:'Grade 8', subject:'Social Studies', terms:'Term 1',
  desc:'KICD-aligned scheme covering Kenyan History, Geography, Citizenship, and Regional Studies for Grade 8 JSS learners.',
  topics:['Kenya History','Physical Geography','Citizenship','East Africa','Economic Activities'],
  content: () => `
SOCIAL STUDIES SCHEME OF WORK — GRADE 8, TERM 1
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Social Studies
Grade    : Grade 8 (Junior Secondary School)
Term     : Term 1
Duration : 13 Weeks
Year     : 2026
Reference: KICD Social Studies Curriculum Design, Grade 8

============================================================
STRAND 1: KENYAN HISTORY — Weeks 1–4
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  1   | Pre-colonial Kenya    | Bantu; Nilotic;        | Trace the origins of major    | Maps; timelines; oral         | Oral questions;           |
|      |                       | Cushitic peoples       | communities in Kenya          | literature activities         | structured notes          |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  2   | Colonial Period       | Arab trade; European   | Explain the impact of         | Primary sources; documents;   | Essay; debate             |
|      |                       | colonialism; Resistance| colonialism on Kenya          | Video clips                   |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  3   | Independence         | Mau Mau; KANU;         | Appreciate the struggle       | Biographies; speeches;        | Timeline; reflection      |
|      |                       | Uhuru 1963             | for Kenyan independence       | Commemoration activities      |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  4   | Post-Independence     | Kenyatta; Moi; Kibaki; | Trace Kenya's political       | News archives; charts         | Report; assessment        |
|      |                       | Uhuru; Current govt.   | development 1963–present      |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 2: PHYSICAL GEOGRAPHY — Weeks 5–7
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  5   | Kenya's Landforms     | Rift Valley; Mountains;| Identify and describe         | Atlas; topographic maps;      | Map work; labelling       |
|      |                       | Plains; Plateaus       | Kenya's major landforms       | Google Earth                  |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  6   | Climate & Vegetation  | Climate zones; Rainfall| Explain Kenya's climate       | Climate graphs; field study   | Climate graph analysis    |
|      |                       | distribution; Biomes   | patterns and vegetation types |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  7   | Natural Resources     | Soils; Water; Forests; | Identify and appreciate       | Resource maps; field trips    | Project; poster           |
|      |                       | Minerals               | Kenya's natural resources     |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 3: CITIZENSHIP — Weeks 8–10
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  8   | Constitution          | Bill of Rights; Devolution| Explain rights,           | Constitution 2010; case       | Quiz; discussion          |
|      |                       | National values         | responsibilities and values   | studies                       |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
|  9   | National Cohesion     | Ethnicity; Conflict;   | Promote national unity        | Peace club activities;        | Reflection; presentation  |
|      |                       | Integration; Peace     | and cohesion                  | Role play                     |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 10   | Civic Participation   | Elections; Leadership; | Participate responsibly       | School elections; mock        | Oral; observation         |
|      |                       | Community service      | in democratic processes       | parliament                    |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

============================================================
STRAND 4: EAST AFRICA & ECONOMY — Weeks 11–13
============================================================

+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| Week | Sub-strand            | Topics                 | Learning Outcomes             | Activities / Resources        | Assessment                |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 11   | East African Community| EAC member states;     | Identify benefits of          | EAC website; maps             | Essay; map work           |
|      |                       | Integration; Trade     | regional integration          |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 12   | Economic Activities   | Agriculture; Tourism;  | Relate economic activities    | Field study; case studies     | Report; class debate      |
|      |                       | Industry; Trade        | to Kenya's development        |                               |                           |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+
| 13   | Revision & Exam       | All strands            | Demonstrate mastery           | Group revision; past papers   | End-of-term exam          |
+------+-----------------------+------------------------+-------------------------------+-------------------------------+---------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   LESSON PLANS (5)
══════════════════════════════════════ */
{
  id:'lp-math-algebra',
  cat:'lesson', icon:'📝',
  title:'Lesson Plan: Solving Linear Equations — Grade 7',
  grade:'Grade 7', subject:'Mathematics', terms:'Term 1',
  desc:'Detailed 40-minute lesson plan for teaching one- and two-step linear equations using the balance model. Includes learning objectives, activities, and formative assessment.',
  topics:['Algebra','Linear Equations','Problem Solving'],
  content: () => `
LESSON PLAN: SOLVING LINEAR EQUATIONS
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject     : Mathematics
Class       : Grade 7
Strand      : Algebra
Sub-strand  : Linear Equations in One Variable
Duration    : 40 minutes
Date        : [Insert Date]
Teacher     : Ronny Mwenda / [Your Name]
School      : [Your School Name]
Reference   : KICD Mathematics Curriculum Design, Grade 7, p. 48–52

============================================================
1. LEARNING OUTCOMES
============================================================
By the end of the lesson, the learner should be able to:
(a) Form a linear equation in one variable from a word problem.
(b) Solve one-step and two-step linear equations using the
    balance method.
(c) Verify solutions by substitution.
(d) Apply linear equations to solve real-life problems.

============================================================
2. KEY COMPETENCIES ADDRESSED
============================================================

+-------------------------+------------------------------------------+
| Competency              | How addressed                            |
+-------------------------+------------------------------------------+
| Communication           | Learners explain reasoning orally        |
| Critical Thinking       | Problem-solving with unknown quantities  |
| Collaboration           | Group balance-model activity             |
| Digital Literacy        | Optional: Desmos balance simulator       |
| Learning to Learn       | Self-checking via substitution           |
+-------------------------+------------------------------------------+

============================================================
3. LESSON RESOURCES
============================================================
- Balance scale (physical or drawn on board)
- Algebra tiles or counters (stones, bottle tops)
- Exercise books, rulers, pencils
- Worked examples on manila paper
- Optional: Desmos.com balance tool

============================================================
4. LESSON STRUCTURE (40 minutes)
============================================================

+-------+------------------+----------------------------------------------------+------------------+
| Time  | Phase            | Teacher Activity                                   | Learner Activity |
+-------+------------------+----------------------------------------------------+------------------+
| 0–5   | Introduction     | Ask: "I think of a number, add 7, get 15. What is  | Guess and        |
|       | (Warm-up)        | the number?" Discuss mental strategies.            | discuss answers  |
+-------+------------------+----------------------------------------------------+------------------+
| 5–12  | Development I    | Introduce balance model on board. Show that        | Observe; copy    |
|       | (Concept intro.) | 3x + 2 = 11 means both sides must stay balanced.   | diagrams         |
+-------+------------------+----------------------------------------------------+------------------+
| 12–22 | Development II   | Model solving 2x + 3 = 9 step by step. Emphasise  | Participate;     |
|       | (Worked examples)| "do same to both sides." Do 3 examples together.   | attempt examples |
+-------+------------------+----------------------------------------------------+------------------+
| 22–33 | Practice         | Distribute 5 problems (mix of one- and two-step).  | Solve in pairs;  |
|       | (Guided/Pair)    | Circulate, prompt with questions, not answers.     | compare methods  |
+-------+------------------+----------------------------------------------------+------------------+
| 33–38 | Assessment       | Choose 3 pairs to present solutions on board.      | Present; peer-   |
|       | (Sharing)        | Class checks each solution by substitution.        | check answers    |
+-------+------------------+----------------------------------------------------+------------------+
| 38–40 | Closure          | Summary: 3 steps to solve any linear equation.     | Write 3 steps;   |
|       |                  | Set HW: 4 word problems from textbook.             | note homework    |
+-------+------------------+----------------------------------------------------+------------------+

============================================================
5. WORKED EXAMPLES FOR BOARD
============================================================

Example 1 (One-step):    x + 5 = 12
                         x + 5 - 5 = 12 - 5
                         x = 7  ✓ Check: 7 + 5 = 12

Example 2 (Two-step):    2x + 3 = 11
                         2x = 11 - 3 = 8
                         x = 8 ÷ 2 = 4  ✓ Check: 2(4)+3=11

Example 3 (Word problem): A number multiplied by 3, then
                          decreased by 4, equals 14. Find it.
                          3n - 4 = 14
                          3n = 18
                          n = 6

============================================================
6. PRACTICE PROBLEMS (Classwork)
============================================================

+---+------------------+---+----------------------+
| # | Problem          | # | Problem              |
+---+------------------+---+----------------------+
| 1 | x + 8 = 15       | 4 | 3y - 7 = 14          |
| 2 | 2m = 18          | 5 | A bag costs 2x+50    |
| 3 | n/4 = 6          |   | shillings. Total 250 |
|   |                  |   | Find x.              |
+---+------------------+---+----------------------+

============================================================
7. FORMATIVE ASSESSMENT
============================================================

+-------------------------+----------------------------------------+
| Strategy                | Description                            |
+-------------------------+----------------------------------------+
| Observation             | Monitor pair work; note misconceptions |
| Oral questioning        | Target quieter learners                |
| Exit ticket             | Each learner solves 1 equation on slip |
| Peer checking           | Partners verify by substitution        |
+-------------------------+----------------------------------------+

============================================================
8. HOMEWORK
============================================================
KLB Mathematics Grade 7, Exercise 5.2, Questions 1–4
(Word problems applying linear equations to real contexts)

============================================================
9. TEACHER'S REFLECTION (after lesson)
============================================================
What went well:
...................................................................
What needs improvement:
...................................................................
Attendance: ______ / ______
Learner engagement (1–5): ______

============================================================
NEXT LESSON: Inequalities — representing on number line
============================================================

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'lp-cs-python',
  cat:'lesson', icon:'📝',
  title:'Lesson Plan: Python Variables and Input — Grade 8 CS',
  grade:'Grade 8', subject:'Computer Science', terms:'Term 2',
  desc:'40-minute lesson introducing Python variables, data types, and user input for Grade 8 Computer Science. Includes practical coding activities and assessment rubric.',
  topics:['Python','Variables','Input/Output','Data Types'],
  content: () => `
LESSON PLAN: PYTHON VARIABLES AND USER INPUT
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Computer Science
Class    : Grade 8
Strand   : Programming
Duration : 40 minutes
Date     : [Insert Date]
Teacher  : Ronny Mwenda / [Your Name]
Reference: KICD CS Curriculum Design, Grade 8

============================================================
1. LEARNING OUTCOMES
============================================================
By the end of this lesson, learners will be able to:
(a) Define a variable and explain why variables are used.
(b) Identify the three basic Python data types: int, float, str.
(c) Write a Python program that accepts user input with input().
(d) Perform simple arithmetic on numeric variables.

============================================================
2. PREREQUISITE KNOWLEDGE
============================================================
- Basic keyboard and typing skills
- Familiarity with the Python IDLE or Thonny interface
- Concept of an algorithm from previous lessons

============================================================
3. RESOURCES
============================================================

+------------------------------------+-------------------+
| Resource                           | Quantity          |
+------------------------------------+-------------------+
| Computers / tablets with Python    | 1 per learner     |
| Thonny IDE (free, offline)         | Pre-installed     |
| Printed code worksheet             | 1 per learner     |
| Projector / smartboard             | 1 (teacher use)   |
| Exercise books                     | 1 per learner     |
+------------------------------------+-------------------+

============================================================
4. LESSON STRUCTURE
============================================================

+-------+------------------+----------------------------------------------+--------------------+
| Time  | Phase            | Teacher Activity                             | Learner Activity   |
+-------+------------------+----------------------------------------------+--------------------+
| 0–5   | Warm-up          | Ask: "When you fill in your name on a form,  | Discuss; relate to |
|       |                  | where is it stored?" Introduce memory concept| own experience     |
+-------+------------------+----------------------------------------------+--------------------+
| 5–10  | Variables intro  | Explain: variable = named storage in memory. | Open Thonny; type  |
|       |                  | Demo: name = "Wanjiku"; age = 14; print them | examples; run code |
+-------+------------------+----------------------------------------------+--------------------+
| 10–18 | Data types       | Show difference: "14" vs 14 vs 14.0          | Experiment; type()  |
|       |                  | Use type() to check. Run examples together.  | function in shell  |
+-------+------------------+----------------------------------------------+--------------------+
| 18–28 | User input       | Introduce input() function. Build together:  | Code along; run;   |
|       |                  | name = input("Enter your name: ")            | test with own name |
|       |                  | Show int() conversion for calculations.      |                    |
+-------+------------------+----------------------------------------------+--------------------+
| 28–36 | Guided practice  | Learners write: a program that asks for two  | Code independently;|
|       |                  | numbers and prints their sum and product.    | ask for help       |
+-------+------------------+----------------------------------------------+--------------------+
| 36–40 | Closure/assess   | Show 1 volunteer's working program on screen.| Show work; discuss |
|       |                  | Quick quiz: 3 True/False questions.          | errors             |
+-------+------------------+----------------------------------------------+--------------------+

============================================================
5. SAMPLE CODE — BOARD / PROJECTOR
============================================================
# Program 1: Variables
name = "Aisha"
age = 13
print("Hello,", name)
print("You are", age, "years old.")

# Program 2: User Input
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
total = num1 + num2
print("Sum:", total)
print("Product:", num1 * num2)

============================================================
6. ASSESSMENT RUBRIC
============================================================

+---------------------------+------------+------------+------------+
| Criterion                 | Excellent  | Satisfact. | Needs Work |
+---------------------------+------------+------------+------------+
| Variables declared correct| 3 vars OK  | 2 vars OK  | 0–1 correct|
| input() used correctly    | Works fine | Minor error| Not used   |
| int() conversion applied  | Correct    | Sometimes  | Not used   |
| Program runs without error| Yes        | 1 error    | Crashes    |
| Correct output displayed  | Exact      | Close      | Incorrect  |
+---------------------------+------------+------------+------------+

============================================================
7. EXTENSION TASK (fast finishers)
============================================================
Modify the program to also calculate:
- Difference (num1 - num2)
- Quotient (num1 / num2)
- Check if num1 is greater than num2 (hint: use if)

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'lp-sci-cells',
  cat:'lesson', icon:'📝',
  title:'Lesson Plan: Plant and Animal Cells — Grade 7 Science',
  grade:'Grade 7', subject:'Integrated Science', terms:'Term 2',
  desc:'Practical lesson plan for comparing plant and animal cells using microscopes and diagrams. Includes drawing activities and peer assessment.',
  topics:['Cell Biology','Microscopy','Cell Structure','Life Science'],
  content: () => `
LESSON PLAN: PLANT AND ANIMAL CELLS
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Integrated Science
Class    : Grade 7
Strand   : Living Things
Duration : 80 minutes (double lesson)
Date     : [Insert Date]
Teacher  : Ronny Mwenda / [Your Name]

============================================================
1. LEARNING OUTCOMES
============================================================
By end of lesson, learner will be able to:
(a) Identify structures visible under a light microscope.
(b) Draw and label a plant cell and an animal cell.
(c) Compare and contrast plant and animal cells.
(d) Explain the function of at least 5 organelles.

============================================================
2. RESOURCES
============================================================

+------------------------------------+-------------------+
| Resource                           | Notes             |
+------------------------------------+-------------------+
| Light microscopes                  | 1 per 2 learners  |
| Prepared slides (onion / cheek)    | Class set         |
| Pencils, rulers, exercise books    | Per learner       |
| Cell diagram posters (A2)          | Display           |
| KLB Grade 7 Science textbook       | Per learner       |
+------------------------------------+-------------------+

============================================================
3. LESSON STRUCTURE
============================================================

+-------+------------------+----------------------------------------------+--------------------+
| Time  | Phase            | Teacher Activity                             | Learner Activity   |
+-------+------------------+----------------------------------------------+--------------------+
| 0–5   | Hook             | Show: "What is the smallest unit of life?"   | Discuss; predict   |
|       |                  | Show macro → micro images on board.          |                    |
+-------+------------------+----------------------------------------------+--------------------+
| 5–20  | Direct teaching  | Use diagrams to explain: nucleus, cell wall, | Copy; label from   |
|       |                  | cell membrane, mitochondria, vacuole,        | board; ask         |
|       |                  | chloroplast. Distinguish plant vs animal.    | questions          |
+-------+------------------+----------------------------------------------+--------------------+
| 20–50 | Practical        | Guide microscope use. Onion cell → cheek     | Focus microscope;  |
|       |                  | cell. Circulate, prompt observations.         | draw what is seen  |
+-------+------------------+----------------------------------------------+--------------------+
| 50–65 | Drawing exercise | Learners draw large, labelled diagram of      | Draw, label, rule  |
|       |                  | both cells side by side with key differences  | diagram properly   |
+-------+------------------+----------------------------------------------+--------------------+
| 65–75 | Comparison table | Guide class to fill comparison table together | Complete table     |
+-------+------------------+----------------------------------------------+--------------------+
| 75–80 | Closure          | 5 oral questions. Assign homework.           | Answer; note HW    |
+-------+------------------+----------------------------------------------+--------------------+

============================================================
4. COMPARISON TABLE (Classwork)
============================================================

+---------------------------+---------------+----------------+
| Feature                   | Plant Cell    | Animal Cell    |
+---------------------------+---------------+----------------+
| Cell wall                 | Present       | Absent         |
| Chloroplasts              | Present       | Absent         |
| Large central vacuole     | Present       | Small/absent   |
| Cell membrane             | Present       | Present        |
| Nucleus                   | Present       | Present        |
| Mitochondria              | Present       | Present        |
| Shape                     | Regular/fixed | Irregular      |
+---------------------------+---------------+----------------+

============================================================
5. ASSESSMENT — DRAWING CHECKLIST
============================================================

+---------------------------+-------+
| Criterion                 | Marks |
+---------------------------+-------+
| Large clear diagram       | 2     |
| All 6 organelles labelled | 6     |
| Label lines are ruled     | 1     |
| Title and pencil used     | 1     |
| Comparison table complete | 5     |
| TOTAL                     | /15   |
+---------------------------+-------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'lp-eng-essay',
  cat:'lesson', icon:'📝',
  title:'Lesson Plan: Writing a Narrative Essay — Grade 9 English',
  grade:'Grade 9', subject:'English', terms:'Term 1',
  desc:'Structured lesson plan for teaching narrative essay writing using the NARRRATIVE framework. Includes model text analysis, guided writing, and peer editing.',
  topics:['Creative Writing','Narrative','Essay Structure','Language'],
  content: () => `
LESSON PLAN: WRITING A NARRATIVE ESSAY
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : English Language
Class    : Grade 9
Strand   : Writing
Duration : 40 minutes
Date     : [Insert Date]
Teacher  : [Your Name]

============================================================
1. LEARNING OUTCOMES
============================================================
(a) Identify features of an effective narrative essay.
(b) Plan a narrative using beginning–middle–end structure.
(c) Write a well-structured opening paragraph with a hook.
(d) Use descriptive language and dialogue effectively.

============================================================
2. THE N-A-R-R-A-T-I-V-E FRAMEWORK
============================================================

+------+------------------+----------------------------------------+
| Step | Element          | Explanation                            |
+------+------------------+----------------------------------------+
| N    | Narrative hook   | Grab reader in first line              |
| A    | Atmosphere       | Set time, place, mood                  |
| R    | Rising action    | Introduce conflict or tension          |
| R    | Revelation       | Character reveals something            |
| A    | Action climax    | Highest point of tension               |
| T    | Turning point    | Something changes                      |
| I    | Impact           | Consequence of the climax              |
| V    | Voice & reflect  | Personal reflection / lesson learned   |
| E    | Ending           | Satisfying resolution                  |
+------+------------------+----------------------------------------+

============================================================
3. LESSON STRUCTURE
============================================================

+-------+------------------+----------------------------------------------+--------------------+
| Time  | Phase            | Teacher Activity                             | Learner Activity   |
+-------+------------------+----------------------------------------------+--------------------+
| 0–5   | Hook             | Read aloud first paragraph of a model story. | Listen; identify   |
|       |                  | Ask: "What made you want to read on?"        | the hook technique |
+-------+------------------+----------------------------------------------+--------------------+
| 5–15  | Model analysis   | Deconstruct model essay using NARRATIVE      | Annotate own copy; |
|       |                  | framework. Identify each element on board.   | discuss each stage |
+-------+------------------+----------------------------------------------+--------------------+
| 15–25 | Planning         | Give topic: "The day I will never forget."   | Plan using graphic |
|       |                  | Model how to complete narrative planner.     | organiser (1 page) |
+-------+------------------+----------------------------------------------+--------------------+
| 25–36 | Writing          | Learners write opening paragraph + 1 body    | Write silently;    |
|       |                  | paragraph. Circulate, give 1:1 feedback.     | focus on hook line |
+-------+------------------+----------------------------------------------+--------------------+
| 36–40 | Share & close    | 2 volunteers share hooks. Class rates 1–5.   | Listen; give       |
|       |                  | Set HW: complete full essay draft.           | constructive       |
|       |                  |                                              | feedback           |
+-------+------------------+----------------------------------------------+--------------------+

============================================================
4. MARKING GUIDE (Full Essay — KCSE aligned)
============================================================

+---------------------------+-------+
| Criterion                 | Marks |
+---------------------------+-------+
| Content (ideas/detail)    | 10    |
| Organization (structure)  | 5     |
| Expression (language)     | 5     |
| Accuracy (grammar/spell)  | 5     |
| TOTAL                     | /25   |
+---------------------------+-------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'lp-sst-rift-valley',
  cat:'lesson', icon:'📝',
  title:'Lesson Plan: The Great Rift Valley — Grade 8 Social Studies',
  grade:'Grade 8', subject:'Social Studies', terms:'Term 1',
  desc:'Geography lesson on the formation, features, and significance of the Great Rift Valley with map work and case study on Kenya\'s Rift Valley resources.',
  topics:['Physical Geography','Rift Valley','Kenya Geography','Maps'],
  content: () => `
LESSON PLAN: THE GREAT RIFT VALLEY
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Social Studies (Geography component)
Class    : Grade 8
Duration : 40 minutes
Date     : [Insert Date]
Teacher  : [Your Name]

============================================================
1. LEARNING OUTCOMES
============================================================
(a) Describe the formation of the Great Rift Valley.
(b) Identify key features of the Kenyan Rift Valley on a map.
(c) Explain the economic and environmental significance of
    the Rift Valley to Kenya.

============================================================
2. LESSON STRUCTURE
============================================================

+-------+------------------+----------------------------------------------+--------------------+
| Time  | Phase            | Teacher Activity                             | Learner Activity   |
+-------+------------------+----------------------------------------------+--------------------+
| 0–5   | Introduction     | Show satellite image of the Rift Valley.     | Identify on map;   |
|       |                  | "What do you notice about this landscape?"   | describe features  |
+-------+------------------+----------------------------------------------+--------------------+
| 5–18  | Formation        | Explain faulting: tensional forces; fault    | Diagram in books;  |
|       |                  | scarps; downdropping of land block.          | label key parts    |
|       |                  | Draw cross-section on board.                 |                    |
+-------+------------------+----------------------------------------------+--------------------+
| 18–28 | Features & map   | Identify: Lake Nakuru, Naivasha, Turkana;    | Map work: label    |
|       |                  | volcanoes (Longonot, Suswa); floor width.    | 8 features         |
+-------+------------------+----------------------------------------------+--------------------+
| 28–36 | Significance     | Tourism, geothermal energy (Olkaria),        | Note 5 points;     |
|       |                  | soda ash (Magadi), flamingos, horticulture.  | class discussion   |
+-------+------------------+----------------------------------------------+--------------------+
| 36–40 | Closure          | 5 quick-fire questions. Set homework.        | Answer; note HW    |
+-------+------------------+----------------------------------------------+--------------------+

============================================================
3. KEY FACTS TABLE
============================================================

+---------------------------+----------------------------------------+
| Feature                   | Details                                |
+---------------------------+----------------------------------------+
| Length (Africa)           | ~6,000 km (from Afar to Mozambique)    |
| Width in Kenya            | 40–60 km                               |
| Depth below rims          | 600–900 m                              |
| Notable lakes             | Turkana, Baringo, Bogoria, Nakuru,     |
|                           | Elementaita, Naivasha, Magadi          |
| Volcanoes                 | Longonot, Suswa, Menengai              |
| Geothermal plant          | Olkaria (KenGen) — largest in Africa   |
| Soda ash production       | Lake Magadi — Tata Chemicals           |
+---------------------------+----------------------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   CURRICULUM DESIGNS (3)
══════════════════════════════════════ */
{
  id:'cd-math-jss',
  cat:'curriculum', icon:'📖',
  title:'Mathematics Curriculum Design Summary — JSS (Grade 7–9)',
  grade:'Grade 7–9', subject:'Mathematics', terms:'All Terms',
  desc:'Complete strand-by-strand overview of the KICD Mathematics Curriculum for Junior Secondary School (Grades 7–9), with competencies, assessment modes, and time allocation.',
  topics:['Numbers','Algebra','Geometry','Measurements','Statistics','Probability'],
  content: () => `
MATHEMATICS CURRICULUM DESIGN SUMMARY — JSS GRADES 7–9
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Level    : Junior Secondary School (JSS)
Grades   : 7, 8, and 9
Source   : KICD Mathematics Curriculum Design (2023)
Compiled by: Ronny Mwenda — Mathematics & CS Teacher, Embu County

============================================================
OVERVIEW OF STRANDS AND TIME ALLOCATION
============================================================

+------+---------------------+--------+--------+--------+-------+
| Code | Strand              | Gr. 7  | Gr. 8  | Gr. 9  | Total |
|      |                     | (Hrs)  | (Hrs)  | (Hrs)  | (Hrs) |
+------+---------------------+--------+--------+--------+-------+
|  1   | Numbers             |  30    |  28    |  25    |  83   |
|  2   | Algebra             |  22    |  25    |  28    |  75   |
|  3   | Geometry            |  22    |  20    |  22    |  64   |
|  4   | Measurements        |  18    |  18    |  16    |  52   |
|  5   | Statistics          |  10    |  12    |  12    |  34   |
|  6   | Probability         |   0    |   5    |  10    |  15   |
+------+---------------------+--------+--------+--------+-------+
|      | TOTAL               | 102    | 108    | 113    | 323   |
+------+---------------------+--------+--------+--------+-------+

============================================================
STRAND 1: NUMBERS — KEY CONTENT BY GRADE
============================================================

+--------+-------------------------------------------------------+
| Grade  | Content                                               |
+--------+-------------------------------------------------------+
| 7      | Natural numbers; Integers; Fractions; Decimals;       |
|        | Percentages; Ratio and proportion; Number sequences   |
+--------+-------------------------------------------------------+
| 8      | Powers and roots; Standard form; Surds (intro);       |
|        | LCM; GCD; Rational and irrational numbers             |
+--------+-------------------------------------------------------+
| 9      | Logarithms; Compound interest; Exchange rates;        |
|        | Hire purchase; Taxation (VAT, PAYE basics)            |
+--------+-------------------------------------------------------+

============================================================
STRAND 2: ALGEBRA — KEY CONTENT BY GRADE
============================================================

+--------+-------------------------------------------------------+
| Grade  | Content                                               |
+--------+-------------------------------------------------------+
| 7      | Algebraic expressions; Linear equations; Inequalities |
+--------+-------------------------------------------------------+
| 8      | Simultaneous equations; Quadratic expressions;        |
|        | Expansion and factorisation                           |
+--------+-------------------------------------------------------+
| 9      | Quadratic equations; Functions & graphs;              |
|        | Linear programming (graphical method)                 |
+--------+-------------------------------------------------------+

============================================================
STRAND 3: GEOMETRY — KEY CONTENT BY GRADE
============================================================

+--------+-------------------------------------------------------+
| Grade  | Content                                               |
+--------+-------------------------------------------------------+
| 7      | Lines and angles; Triangles; Quadrilaterals;          |
|        | Circles (intro); Symmetry and transformations         |
+--------+-------------------------------------------------------+
| 8      | Polygons; Circles (arcs, sectors); 3D shapes;         |
|        | Nets; Scale drawings; Bearings                        |
+--------+-------------------------------------------------------+
| 9      | Congruency; Similarity; Trigonometry (SOH CAH TOA);   |
|        | Construction; Loci; Vectors (intro)                   |
+--------+-------------------------------------------------------+

============================================================
ASSESSMENT MODES — JSS MATHEMATICS
============================================================

+-----------------------------+----------+----------------------------+
| Mode                        | Weight   | Notes                      |
+-----------------------------+----------+----------------------------+
| Continuous Assessment       | 40%      | Classwork, tests, projects |
| End-of-term examinations    | 60%      | Written, structured papers |
| Formative (ongoing)         | Ungraded | Observation, oral, port.   |
+-----------------------------+----------+----------------------------+

============================================================
CORE COMPETENCIES INTEGRATED
============================================================
1. Communication and Collaboration — group problem solving
2. Critical Thinking and Problem Solving — real-life maths
3. Creativity and Imagination — open-ended investigations
4. Digital Literacy — Desmos, GeoGebra, spreadsheets
5. Learning to Learn — self-assessment, journaling
6. Citizenship — financial literacy, tax, budgets
7. Self-efficacy — growth mindset in problem solving

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'cd-cs-jss',
  cat:'curriculum', icon:'📖',
  title:'Computer Science Curriculum Design — JSS Overview',
  grade:'Grade 7–9', subject:'Computer Science', terms:'All Terms',
  desc:'Strand overview and content mapping for KICD Computer Science, Grades 7–9, including programming, web tech, data, and digital citizenship strands.',
  topics:['Programming','Web Technologies','Data','Digital Citizenship','ICT Systems'],
  content: () => `
COMPUTER SCIENCE CURRICULUM DESIGN — JSS OVERVIEW
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Level  : Junior Secondary School (JSS)
Grades : 7, 8, and 9
Source : KICD Computer Science Curriculum Design (2023)

============================================================
STRAND OVERVIEW AND TIME ALLOCATION
============================================================

+---+------------------------------+------+------+------+-------+
| # | Strand                       | Gr.7 | Gr.8 | Gr.9 | Total |
+---+------------------------------+------+------+------+-------+
| 1 | ICT Systems                  |  15  |  10  |   8  |  33   |
| 2 | Digital Literacy             |  12  |  10  |   8  |  30   |
| 3 | Programming                  |  15  |  20  |  22  |  57   |
| 4 | Web Technologies             |   8  |  12  |  14  |  34   |
| 5 | Data & Databases             |   8  |  12  |  14  |  34   |
| 6 | Digital Citizenship & Ethics |  10  |   8  |   8  |  26   |
+---+------------------------------+------+------+------+-------+
|   | TOTAL                        |  68  |  72  |  74  | 214   |
+---+------------------------------+------+------+------+-------+

============================================================
PROGRAMMING STRAND — CONTENT BY GRADE
============================================================

+--------+-------------------------------------------------------+
| Grade  | Content                                               |
+--------+-------------------------------------------------------+
| 7      | Algorithms; Flowcharts; Scratch programming;          |
|        | Sequence; Selection; Repetition                       |
+--------+-------------------------------------------------------+
| 8      | Python: variables, data types, input/output;          |
|        | Conditionals (if/elif/else); Loops (for, while);      |
|        | Functions; Debugging                                  |
+--------+-------------------------------------------------------+
| 9      | Python: Lists; Dictionaries; File handling;            |
|        | Modules; Object-oriented programming (intro);         |
|        | Project: build a mini application                     |
+--------+-------------------------------------------------------+

============================================================
WEB TECHNOLOGIES STRAND — CONTENT BY GRADE
============================================================

+--------+-------------------------------------------------------+
| Grade  | Content                                               |
+--------+-------------------------------------------------------+
| 7      | Internet safety; Search strategies; Email etiquette  |
+--------+-------------------------------------------------------+
| 8      | HTML structure; CSS basics; Hyperlinks; Images        |
+--------+-------------------------------------------------------+
| 9      | Responsive design; Basic JavaScript; Forms;           |
|        | Introduction to frameworks; Web hosting concepts     |
+--------+-------------------------------------------------------+

============================================================
ASSESSMENT FRAMEWORK
============================================================

+-----------------------------+----------+----------------------------+
| Mode                        | Weight   | Notes                      |
+-----------------------------+----------+----------------------------+
| Continuous Assessment       | 40%      | Practicals, projects, tests|
| End-of-term examination     | 60%      | Theory + practical paper   |
| Projects (each term)        | Included | Graded with rubric         |
+-----------------------------+----------+----------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'cd-sss-pathways',
  cat:'curriculum', icon:'📖',
  title:'SSS Pathways Overview — Grade 10–12 CBC',
  grade:'Grade 10–12', subject:'All Subjects', terms:'All Terms',
  desc:'Comprehensive guide to the three Senior Secondary School pathways: Arts & Sports Science, Social Sciences, and STEM — including subject combinations and career linkages.',
  topics:['STEM Pathway','Arts Pathway','Social Sciences','Career Pathways','Subject Choices'],
  content: () => `
SENIOR SECONDARY SCHOOL PATHWAYS OVERVIEW — GRADE 10–12
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Level   : Senior Secondary School (SSS)
Grades  : 10, 11, and 12
Source  : KICD Senior Secondary Curriculum Design (2023)

============================================================
THE THREE SSS PATHWAYS
============================================================

+---+------------------------------+--------------------------------------+
| # | Pathway                      | Focus Areas                          |
+---+------------------------------+--------------------------------------+
| 1 | STEM                         | Sciences, Technology, Engineering,   |
|   |                              | Mathematics and Computer Science     |
+---+------------------------------+--------------------------------------+
| 2 | Arts and Sports Science      | Visual Arts, Performing Arts,        |
|   |                              | Sports Science, Music, Drama         |
+---+------------------------------+--------------------------------------+
| 3 | Social Sciences              | Humanities, Languages, Business,     |
|   |                              | History, Geography, Economics        |
+---+------------------------------+--------------------------------------+

============================================================
PATHWAY 1: STEM — SUBJECT COMBINATIONS
============================================================

+----+----------------------------------+-----------------------------+
| #  | Core Subjects (all take)         | Optional Subjects (choose)  |
+----+----------------------------------+-----------------------------+
| 1  | Mathematics                      | Computer Science            |
| 2  | Biology or Chemistry or Physics  | Agriculture                 |
| 3  | English                          | Technical Drawing           |
| 4  | Kiswahili                        | Building & Construction     |
| 5  | [Core: Citizenship, PE]          | Aviation Technology         |
+----+----------------------------------+-----------------------------+

Career paths: Medicine, Engineering, Architecture, ICT,
Pharmacy, Environmental Science, Data Science, Aviation.

============================================================
PATHWAY 2: ARTS AND SPORTS SCIENCE
============================================================

+----+----------------------------------+-----------------------------+
| #  | Core Subjects                    | Optional Subjects           |
+----+----------------------------------+-----------------------------+
| 1  | English                          | Music                       |
| 2  | Kiswahili                        | Visual Arts                 |
| 3  | Foreign Language (French/German) | Drama & Theatre             |
| 4  | [Core: Citizenship, PE]          | Sports Science              |
|    |                                  | Dance                       |
+----+----------------------------------+-----------------------------+

Career paths: Fine Arts, Sports Management, Teaching, Film,
Theatre, Journalism, Fashion Design, Music Production.

============================================================
PATHWAY 3: SOCIAL SCIENCES
============================================================

+----+----------------------------------+-----------------------------+
| #  | Core Subjects                    | Optional Subjects           |
+----+----------------------------------+-----------------------------+
| 1  | English                          | Economics                   |
| 2  | Kiswahili                        | Geography                   |
| 3  | History & Government             | Business Studies            |
| 4  | [Core: Citizenship, PE]          | Religious Education         |
|    |                                  | Foreign Languages           |
+----+----------------------------------+-----------------------------+

Career paths: Law, Teaching, Journalism, Public Administration,
Business, International Relations, NGO work, Finance.

============================================================
ASSESSMENT OVERVIEW — ALL PATHWAYS
============================================================

+-----------------------------+----------+----------------------------+
| Mode                        | Weight   | Notes                      |
+-----------------------------+----------+----------------------------+
| Continuous Assessment (CA)  | 40%      | School-based tasks         |
| Kenya Certificate of Sec.   | 60%      | National exam (Grade 12)   |
| Education (KCSE) Exam       |          |                            |
| Project Work                | Included | Portfolio-based            |
+-----------------------------+----------+----------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   ASSESSMENT TOOLS (3)
══════════════════════════════════════ */
{
  id:'at-math-rubric',
  cat:'assessment', icon:'📊',
  title:'Mathematics Assessment Rubric — Problem Solving Tasks',
  grade:'Grade 7–9', subject:'Mathematics', terms:'All Terms',
  desc:'Comprehensive CBC-aligned scoring rubric for assessing mathematical problem-solving tasks. Covers conceptual understanding, procedural fluency, communication, and application.',
  topics:['Rubric','Formative Assessment','Problem Solving','Mathematics'],
  content: () => `
MATHEMATICS PROBLEM-SOLVING ASSESSMENT RUBRIC
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Mathematics
Grades   : 7–9 (adaptable)
Type     : Analytic / Criterion-Referenced Rubric
Aligned to: KICD CBC Competency Framework

============================================================
PERFORMANCE LEVELS
============================================================

+-------+------------------+----------------------------------------+
| Level | Descriptor       | Performance Indicators                 |
+-------+------------------+----------------------------------------+
|   4   | Exceeds           | Demonstrates thorough understanding;   |
|       | Expectations     | applies concepts to novel situations;  |
|       |                  | communicates with exceptional clarity  |
+-------+------------------+----------------------------------------+
|   3   | Meets             | Demonstrates sound understanding;      |
|       | Expectations     | applies concepts correctly; communicates|
|       |                  | clearly with minor errors              |
+-------+------------------+----------------------------------------+
|   2   | Approaches        | Demonstrates partial understanding;    |
|       | Expectations     | some correct application; communication|
|       |                  | unclear in places                      |
+-------+------------------+----------------------------------------+
|   1   | Below             | Demonstrates limited understanding;    |
|       | Expectations     | significant errors; weak communication |
+-------+------------------+----------------------------------------+

============================================================
SCORING CRITERIA
============================================================

+---------------------------+--------+--------+--------+--------+
| Criterion                 | Lvl 4  | Lvl 3  | Lvl 2  | Lvl 1  |
+---------------------------+--------+--------+--------+--------+
| CONCEPTUAL UNDERSTANDING  |        |        |        |        |
| Understands the problem   | Fully  | Mostly | Partly | Little |
| Identifies relevant info  | All    | Most   | Some   | Few    |
| Selects correct strategy  | Always | Often  | Sometimes|Rarely|
+---------------------------+--------+--------+--------+--------+
| PROCEDURAL FLUENCY        |        |        |        |        |
| Shows clear working       | Always | Mostly | Sometimes|Rarely|
| Calculations accurate     | 0 err  | ≤1 err | ≤3 err | >3 err |
| Uses correct notation     | Always | Mostly | Sometimes|Rarely|
+---------------------------+--------+--------+--------+--------+
| PROBLEM SOLVING           |        |        |        |        |
| Applies correct method    | Yes    | Mostly | Partly | No     |
| Reaches correct answer    | Yes    | Minor  | Major  | No     |
|                           |        | error  | error  |        |
| Checks / verifies answer  | Always | Often  | Rarely | Never  |
+---------------------------+--------+--------+--------+--------+
| COMMUNICATION             |        |        |        |        |
| Explains reasoning        | Clear  | Mostly | Unclear| None   |
| Uses maths vocabulary     | Precise| Mostly | Limited| None   |
| Presentation (neat/tidy)  | Neat   | Mostly | Messy  | Very   |
+---------------------------+--------+--------+--------+--------+
| APPLICATION               |        |        |        |        |
| Links to real-world       | Strong | Some   | Weak   | None   |
| Extends / generalises     | Yes    | Tries  | No     | N/A    |
+---------------------------+--------+--------+--------+--------+

TOTAL SCORE: ________ / 48
GRADE:  41–48 = Exceeds (E)  |  29–40 = Meets (M)
        17–28 = Approaches (A) |  ≤16 = Below (B)

============================================================
TEACHER'S COMMENTS
============================================================
Strengths:
.............................................................
.............................................................

Areas for improvement:
.............................................................
.............................................................

Next steps:
.............................................................

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'at-cs-practical',
  cat:'assessment', icon:'📊',
  title:'Computer Science Practical Assessment Rubric — Grade 8',
  grade:'Grade 8', subject:'Computer Science', terms:'All Terms',
  desc:'Rubric for assessing Python programming practicals: code correctness, style, problem decomposition, debugging ability, and documentation.',
  topics:['Rubric','Programming Assessment','Python','Practical'],
  content: () => `
COMPUTER SCIENCE PRACTICAL ASSESSMENT RUBRIC
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Computer Science
Class    : Grade 8 (adaptable for 7–9)
Task type: Python Programming Practical
Aligned to: KICD CS Curriculum Design

============================================================
PROGRAMMING ASSESSMENT RUBRIC
============================================================

+---------------------------+--------+--------+--------+--------+
| Criterion                 | Excl 4 | Good 3 | Fair 2 | Poor 1 |
+---------------------------+--------+--------+--------+--------+
| PROBLEM UNDERSTANDING     |        |        |        |        |
| Interprets task correctly | Fully  | Mostly | Partly | Not    |
| Identifies inputs/outputs | All    | Most   | Some   | None   |
+---------------------------+--------+--------+--------+--------+
| ALGORITHM DESIGN          |        |        |        |        |
| Plans before coding       | Yes,   | Brief  | Minimal| None   |
|                           | detailed|plan  | plan   |        |
| Algorithm is logical      | Yes    | Mostly | Partly | No     |
+---------------------------+--------+--------+--------+--------+
| CODE QUALITY              |        |        |        |        |
| Correct syntax            | 0 err  | ≤2 err | ≤5 err | >5 err |
| Appropriate variable names| Always | Mostly | Some   | Never  |
| Proper indentation        | Always | Mostly | Some   | Never  |
| Comments included         | Thorough|Some  | 1–2    | None   |
+---------------------------+--------+--------+--------+--------+
| PROGRAM FUNCTIONALITY     |        |        |        |        |
| Program runs correctly    | Yes    | Minor  | Major  | Does   |
|                           |        | issues | issues | not run|
| Handles edge cases        | Yes    | Some   | No     | N/A    |
| Output is as expected     | Exact  | Close  | Wrong  | None   |
+---------------------------+--------+--------+--------+--------+
| DEBUGGING                 |        |        |        |        |
| Identifies own errors     | All    | Most   | Some   | None   |
| Fixes errors independently| Yes    | Mostly | With   | Cannot |
|                           |        |        | help   |        |
+---------------------------+--------+--------+--------+--------+
| PRESENTATION              |        |        |        |        |
| Explains code orally      | Clear  | Good   | Unclear| Cannot |
| Demonstrates program live | Yes    | Mostly | Partly | No     |
+---------------------------+--------+--------+--------+--------+

TOTAL: ________ / 56
GRADE: 48–56=Excellent | 36–47=Good | 24–35=Fair | <24=Needs Support

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'at-observation',
  cat:'assessment', icon:'📊',
  title:'Generic CBC Observation Checklist — All Subjects',
  grade:'Grade 7–9', subject:'All Subjects', terms:'All Terms',
  desc:'Reusable classroom observation checklist for formative assessment of learner competencies, participation, collaboration, and communication during lessons.',
  topics:['Formative Assessment','Observation','Competencies','Checklist'],
  content: () => `
CBC LEARNER OBSERVATION CHECKLIST
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : ___________________
Class    : ___________________
Date     : ___________________
Lesson   : ___________________
Teacher  : ___________________

Key: 4 = Exceeds | 3 = Meets | 2 = Approaches | 1 = Below

============================================================
COMPETENCY OBSERVATION GRID
============================================================

+------+---------------------+---+---+---+---+---+---+---+---+
| Code | Competency          |   |   |   |   |   |   |   |   |
|      |                     | L1| L2| L3| L4| L5| L6| L7| L8|
+------+---------------------+---+---+---+---+---+---+---+---+
| CC   | Communication       |   |   |   |   |   |   |   |   |
| CT   | Critical Thinking   |   |   |   |   |   |   |   |   |
| CR   | Creativity          |   |   |   |   |   |   |   |   |
| CO   | Collaboration       |   |   |   |   |   |   |   |   |
| DL   | Digital Literacy    |   |   |   |   |   |   |   |   |
| LL   | Learning to Learn   |   |   |   |   |   |   |   |   |
| CI   | Citizenship         |   |   |   |   |   |   |   |   |
| SE   | Self-efficacy       |   |   |   |   |   |   |   |   |
+------+---------------------+---+---+---+---+---+---+---+---+

L1–L8 = Learner initials or numbers

============================================================
PARTICIPATION RECORD
============================================================

+------+---------------------+--------+----------+----------+
| No.  | Learner Name        | Active | Responds | Initiates|
|      |                     | Listen | to Q's   | Q's      |
+------+---------------------+--------+----------+----------+
|  1   |                     |        |          |          |
|  2   |                     |        |          |          |
|  3   |                     |        |          |          |
|  4   |                     |        |          |          |
|  5   |                     |        |          |          |
|  6   |                     |        |          |          |
|  7   |                     |        |          |          |
|  8   |                     |        |          |          |
+------+---------------------+--------+----------+----------+

============================================================
NOTES / OBSERVATIONS
============================================================
Learners who need support:
.............................................................

Learners who can be extended:
.............................................................

Key misconceptions observed:
.............................................................

Follow-up actions:
.............................................................

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   STUDENT NOTES (3)
══════════════════════════════════════ */
{
  id:'notes-math-fractions',
  cat:'notes', icon:'📘',
  title:'Student Notes: Fractions, Decimals & Percentages — Grade 7',
  grade:'Grade 7', subject:'Mathematics', terms:'Term 1',
  desc:'Comprehensive student study notes covering equivalent fractions, operations with fractions, decimal conversion, and percentage applications with worked examples.',
  topics:['Fractions','Decimals','Percentages','Numbers'],
  content: () => `
STUDENT NOTES: FRACTIONS, DECIMALS AND PERCENTAGES
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Mathematics
Grade    : Grade 7
Strand   : Numbers

============================================================
PART 1: FRACTIONS
============================================================

WHAT IS A FRACTION?
A fraction represents a part of a whole.
Written as: numerator / denominator
Example: 3/4 means 3 parts out of 4 equal parts.

TYPES OF FRACTIONS:

+---------------------+------------------------------+------------+
| Type                | Description                  | Example    |
+---------------------+------------------------------+------------+
| Proper fraction     | Numerator < Denominator      | 3/5, 2/7   |
| Improper fraction   | Numerator ≥ Denominator      | 7/4, 9/3   |
| Mixed number        | Whole number + fraction      | 2 3/4      |
| Equivalent fraction | Same value, different form   | 1/2 = 2/4  |
+---------------------+------------------------------+------------+

SIMPLIFYING FRACTIONS:
Divide both numerator and denominator by their HCF.
Example: 12/18 → HCF = 6 → 12÷6 / 18÷6 = 2/3  ✓

OPERATIONS WITH FRACTIONS:

ADDITION / SUBTRACTION — same denominator:
  3/7 + 2/7 = 5/7     |   5/8 - 3/8 = 2/8 = 1/4

ADDITION / SUBTRACTION — different denominators:
  Step 1: Find LCM of denominators.
  Step 2: Convert to equivalent fractions.
  Step 3: Add or subtract numerators.
  Example: 1/4 + 1/6 → LCM = 12
           = 3/12 + 2/12 = 5/12  ✓

MULTIPLICATION:
  Multiply numerators together, denominators together.
  Example: 2/3 × 3/5 = (2×3)/(3×5) = 6/15 = 2/5  ✓

DIVISION:
  Keep, Change, Flip (KCF method).
  Example: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8  ✓

============================================================
PART 2: DECIMALS
============================================================

PLACE VALUE TABLE:

+--------+--------+--------+--------+----------+----------+----------+
| Thous. | Hund.  | Tens   | Ones   | Tenths   | Hundredths|Thousandths|
+--------+--------+--------+--------+----------+----------+----------+
|   .    |   .    |   .    |  5  .  |    3     |    0     |    7     |
+--------+--------+--------+--------+----------+----------+----------+
= 5.307

FRACTION ↔ DECIMAL CONVERSION:

+------------------+----------+------------------+----------+
| Fraction         | Decimal  | Fraction         | Decimal  |
+------------------+----------+------------------+----------+
| 1/2              | 0.5      | 1/8              | 0.125    |
| 1/4              | 0.25     | 1/10             | 0.1      |
| 3/4              | 0.75     | 3/10             | 0.3      |
| 1/5              | 0.2      | 1/3              | 0.333... |
| 2/5              | 0.4      | 2/3              | 0.667... |
+------------------+----------+------------------+----------+

To convert fraction to decimal: divide numerator by denominator.
Example: 3/8 = 3 ÷ 8 = 0.375

============================================================
PART 3: PERCENTAGES
============================================================

DEFINITION: A percentage is a fraction with denominator 100.
Symbol: %
Example: 45% = 45/100 = 0.45

CONVERTING BETWEEN FORMS:

+------------------+----------------+--------------------+
| Convert          | Method         | Example            |
+------------------+----------------+--------------------+
| % to decimal     | Divide by 100  | 35% = 0.35         |
| Decimal to %     | Multiply × 100 | 0.72 = 72%         |
| % to fraction    | Write /100, simplify | 40% = 2/5   |
| Fraction to %    | × 100         | 3/4 × 100 = 75%    |
+------------------+----------------+--------------------+

CALCULATING PERCENTAGES:
Formula: (Percentage ÷ 100) × Whole

Examples:
• 20% of 350 = (20/100) × 350 = 70
• 15% of 2400 = (15/100) × 2400 = Ksh 360

PERCENTAGE INCREASE / DECREASE:
% change = (change ÷ original) × 100
• Price rises from 500 to 650:
  Change = 150; % increase = (150/500) × 100 = 30%

============================================================
PRACTICE QUESTIONS
============================================================

+---+-------------------------------------------+----------+
| # | Question                                  | Answer   |
+---+-------------------------------------------+----------+
| 1 | Simplify: 24/36                           | 2/3      |
| 2 | 2/5 + 3/4 = ?                             | 23/20    |
| 3 | 5/6 × 3/10 = ?                            | 1/4      |
| 4 | Convert 5/8 to decimal                    | 0.625    |
| 5 | What is 35% of 1200?                      | 420      |
| 6 | A shirt cost Ksh 800, now Ksh 920. % rise?| 15%      |
+---+-------------------------------------------+----------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'notes-cs-html',
  cat:'notes', icon:'📘',
  title:'Student Notes: HTML & CSS Fundamentals — Grade 8 CS',
  grade:'Grade 8', subject:'Computer Science', terms:'Term 2',
  desc:'Comprehensive reference notes on HTML structure, common tags, CSS selectors, and basic styling. Includes code examples and quick-reference tables.',
  topics:['HTML','CSS','Web Development','Tags','Styling'],
  content: () => `
STUDENT NOTES: HTML AND CSS FUNDAMENTALS
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Computer Science
Grade    : Grade 8
Strand   : Web Technologies

============================================================
PART 1: HTML — STRUCTURE
============================================================

HTML = HyperText Markup Language
Used to create the STRUCTURE of web pages.

BASIC HTML DOCUMENT STRUCTURE:
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

============================================================
COMMON HTML TAGS REFERENCE TABLE
============================================================

+------------------+-----------------------------+---------------------------+
| Tag              | Purpose                     | Example                   |
+------------------+-----------------------------+---------------------------+
| <h1> to <h6>     | Headings (h1 biggest)       | <h1>Main Title</h1>       |
| <p>              | Paragraph                   | <p>Some text here.</p>    |
| <a href="">      | Hyperlink                   | <a href="page2.html">Go</a>|
| <img src="">     | Image                       | <img src="photo.jpg">     |
| <ul> <li>        | Unordered list              | <ul><li>Item</li></ul>    |
| <ol> <li>        | Ordered (numbered) list     | <ol><li>First</li></ol>   |
| <table>          | Table                       | See table code below      |
| <div>            | Block container             | <div>Section</div>        |
| <span>           | Inline container            | <span>word</span>         |
| <strong>         | Bold text                   | <strong>Bold</strong>     |
| <em>             | Italic (emphasis)           | <em>Italic</em>           |
| <br>             | Line break                  | Line 1<br>Line 2          |
| <hr>             | Horizontal rule             | <hr>                      |
| <form>           | Input form                  | <form>...</form>          |
| <input>          | Input field                 | <input type="text">       |
+------------------+-----------------------------+---------------------------+

============================================================
PART 2: CSS — STYLING
============================================================

CSS = Cascading Style Sheets
Used to add STYLE (colour, fonts, layout) to HTML pages.

THREE WAYS TO ADD CSS:

+------------------+--------------------------------------------+
| Method           | Example                                    |
+------------------+--------------------------------------------+
| Inline           | <p style="color:red;">Hello</p>            |
| Internal         | <style> p { color: red; } </style>         |
| External file    | <link rel="stylesheet" href="style.css">   |
+------------------+--------------------------------------------+
Preferred: External (keeps HTML clean)

CSS SELECTOR TYPES:

+------------------+--------------------------------------------+
| Selector         | Targets                                    |
+------------------+--------------------------------------------+
| h1 {}            | All <h1> elements (element selector)       |
| .classname {}    | Elements with class="classname"            |
| #idname {}       | Element with id="idname"                   |
| * {}             | All elements (universal selector)          |
+------------------+--------------------------------------------+

COMMON CSS PROPERTIES:

+------------------+------------------+------------------------------+
| Property         | Example Value    | Effect                       |
+------------------+------------------+------------------------------+
| color            | red / #C9A03D    | Text colour                  |
| background-color | blue / #0B1F2E   | Background colour            |
| font-size        | 16px / 1.2rem    | Text size                    |
| font-family      | Arial, sans-serif| Font type                    |
| font-weight      | bold / 700       | Bold text                    |
| text-align       | center / left    | Align text                   |
| margin           | 10px / 20px 0    | Space outside element        |
| padding          | 10px             | Space inside element         |
| border           | 1px solid black  | Border around element        |
| width            | 200px / 50%      | Element width                |
| height           | 100px            | Element height               |
| display          | flex / block     | Layout type                  |
+------------------+------------------+------------------------------+

SAMPLE CSS FILE:
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

h1 {
  color: #0B1F2E;
  text-align: center;
}

p {
  color: #333333;
  line-height: 1.6;
  margin: 10px 20px;
}

============================================================
REVISION QUESTIONS
============================================================

+---+----------------------------------------------------+
| # | Question                                           |
+---+----------------------------------------------------+
| 1 | What does HTML stand for?                          |
| 2 | Which tag creates the largest heading?             |
| 3 | Write the HTML for a link to google.com            |
| 4 | What is the difference between <div> and <span>?   |
| 5 | What does CSS stand for?                           |
| 6 | Write CSS to make all paragraphs blue, size 18px   |
| 7 | What is the difference between margin and padding? |
| 8 | Which CSS selector targets class="box"?            |
+---+----------------------------------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'notes-sci-energy',
  cat:'notes', icon:'📘',
  title:'Student Notes: Forms and Transfer of Energy — Grade 7',
  grade:'Grade 7', subject:'Integrated Science', terms:'Term 2',
  desc:'Study notes on the forms of energy, energy transformation chains, renewable vs non-renewable energy, and Kenya\'s energy mix with revision questions.',
  topics:['Energy','Forms of Energy','Renewable Energy','Energy Transfer','Kenya Power'],
  content: () => `
STUDENT NOTES: FORMS AND TRANSFER OF ENERGY
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Subject  : Integrated Science
Grade    : Grade 7
Strand   : Energy

============================================================
PART 1: FORMS OF ENERGY
============================================================

ENERGY is the ability to do work.
Energy cannot be created or destroyed — only TRANSFORMED.
(This is the Law of Conservation of Energy)

FORMS OF ENERGY TABLE:

+---------------------+------------------------------------------+---------------------------+
| Form                | Description                              | Example                   |
+---------------------+------------------------------------------+---------------------------+
| Kinetic             | Energy of moving objects                 | Rolling ball, flowing river|
| Potential (Grav.)   | Stored energy due to height              | Water behind a dam        |
| Elastic Potential   | Stored energy in stretched/compressed obj| Stretched rubber band      |
| Chemical            | Energy stored in chemical bonds          | Food, fuel, batteries     |
| Thermal (Heat)      | Energy of vibrating particles            | Hot water, fire           |
| Light (Radiant)     | Energy carried by electromagnetic waves  | Sunlight, torch light     |
| Sound               | Energy carried by vibrations in matter   | Music, thunder            |
| Electrical          | Energy of moving electric charges        | Lightning, mains power    |
| Nuclear             | Energy in atomic nuclei                  | Nuclear power plants      |
+---------------------+------------------------------------------+---------------------------+

============================================================
PART 2: ENERGY TRANSFORMATIONS
============================================================

Energy changes from one form to another.
Write energy chains using arrows (→)

EXAMPLES:

+---------------------------+----------------------------------------+
| Situation                 | Energy Transformation Chain            |
+---------------------------+----------------------------------------+
| Electric torch            | Chemical → Electrical → Light + Heat  |
| Hydroelectric power (Tana)| Gravitational PE → Kinetic → Electrical|
| Person running            | Chemical (food) → Kinetic + Heat       |
| Solar panel               | Light (Radiant) → Electrical           |
| Guitar string             | Kinetic → Sound                        |
| Burning charcoal (jiko)   | Chemical → Thermal + Light             |
+---------------------------+----------------------------------------+

============================================================
PART 3: HEAT TRANSFER
============================================================

+------------------+-------------------------------------------+---------------------------+
| Method           | How it works                              | Example                   |
+------------------+-------------------------------------------+---------------------------+
| Conduction       | Heat moves through solid materials;       | Metal spoon in hot tea    |
|                  | particles pass energy to neighbours       |                           |
+------------------+-------------------------------------------+---------------------------+
| Convection       | Heat moves through fluids (liquids/gases);| Boiling water; sea breeze |
|                  | warm fluid rises, cool fluid sinks        |                           |
+------------------+-------------------------------------------+---------------------------+
| Radiation        | Heat travels as electromagnetic waves;    | Heat from the sun;        |
|                  | no medium needed                          | heat from a fire          |
+------------------+-------------------------------------------+---------------------------+

============================================================
PART 4: RENEWABLE vs NON-RENEWABLE ENERGY
============================================================

+------------------+----------------------------+---------------------------+
| Type             | Examples                   | Notes                     |
+------------------+----------------------------+---------------------------+
| RENEWABLE        | Solar, Wind, Hydro, Geoth. | Will not run out;         |
| (Replenishable)  | Biogas, Tidal, Wave        | mostly clean/green        |
+------------------+----------------------------+---------------------------+
| NON-RENEWABLE    | Coal, Petroleum, Natural   | Formed over millions of   |
| (Finite)         | gas, Nuclear               | years; will eventually run|
|                  |                            | out; most cause pollution |
+------------------+----------------------------+---------------------------+

KENYA'S ENERGY MIX (2025):

+----------------------------+----------+
| Source                     | % Share  |
+----------------------------+----------+
| Geothermal (Olkaria, Rift) | ~46%     |
| Hydro (Tana River, etc.)   | ~28%     |
| Wind (Lake Turkana Wind)   | ~13%     |
| Solar                      | ~7%      |
| Thermal (fuel oil)         | ~4%      |
| Other                      | ~2%      |
+----------------------------+----------+
Kenya: 90%+ renewable energy — one of highest in Africa!

============================================================
REVISION QUESTIONS
============================================================

+---+----------------------------------------------------+
| # | Question                                           |
+---+----------------------------------------------------+
| 1 | State the Law of Conservation of Energy.           |
| 2 | What type of energy does a stretched bow have?     |
| 3 | Give the energy chain for a petrol engine car.     |
| 4 | Explain why metal conducts heat better than wood.  |
| 5 | Why does warm air rise? (name the process)         |
| 6 | Name TWO renewable energy sources used in Kenya.   |
| 7 | Why is geothermal energy important for Kenya?      |
| 8 | What energy transformation happens in a solar cell?|
+---+----------------------------------------------------+

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   CAREER GUIDES (2)
══════════════════════════════════════ */
{
  id:'cg-stem-careers',
  cat:'career', icon:'🎯',
  title:'STEM Pathway Career Guide — Computer Science & Mathematics',
  grade:'Grade 10–12', subject:'Career Guidance', terms:'All Terms',
  desc:'Comprehensive career guide for students in the STEM pathway specialising in Computer Science and Mathematics. Covers university entry requirements, top institutions, career paths, and salary expectations.',
  topics:['STEM Careers','University Entry','Computer Science','Mathematics','ICT Kenya'],
  content: () => `
STEM PATHWAY CAREER GUIDE: COMPUTER SCIENCE & MATHEMATICS
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Audience : Grade 10–12 STEM pathway learners
Prepared by: Ronny Mwenda — Mathematics & CS Teacher
Focus    : CS and Mathematics career pathways in Kenya

============================================================
COMPUTER SCIENCE CAREER PATHS
============================================================

+---------------------------+-------------------+------------------+---------------------+
| Career                    | Required Degree   | Min KCSE Points  | Expected Salary     |
|                           |                   | (approximate)    | Kenya (2025)        |
+---------------------------+-------------------+------------------+---------------------+
| Software Developer        | BSc CS / SE       | B+ (65+ points)  | Ksh 80,000–300,000  |
| Data Scientist            | BSc CS / Stats    | B+ (65+ points)  | Ksh 100,000–350,000 |
| Cybersecurity Analyst     | BSc CS / Network  | B  (60+ points)  | Ksh 90,000–250,000  |
| Systems Administrator     | BSc CS / IT       | B  (60+ points)  | Ksh 60,000–150,000  |
| AI / ML Engineer          | BSc CS / Maths    | A- (70+ points)  | Ksh 150,000–500,000 |
| Web Developer             | BSc CS / Dip IT   | C+ (50+ points)  | Ksh 50,000–200,000  |
| Database Administrator    | BSc CS / IT       | B  (60+ points)  | Ksh 70,000–180,000  |
| Game Developer            | BSc CS            | B  (60+ points)  | Ksh 60,000–250,000  |
| UX/UI Designer            | BSc CS / Design   | C+ (50+ points)  | Ksh 50,000–180,000  |
| ICT Teacher               | BEd CS / BSc + PGD| B  (60+ points)  | Ksh 30,000–80,000   |
+---------------------------+-------------------+------------------+---------------------+

============================================================
MATHEMATICS CAREER PATHS
============================================================

+---------------------------+-------------------+------------------+---------------------+
| Career                    | Required Degree   | Min KCSE Points  | Expected Salary     |
+---------------------------+-------------------+------------------+---------------------+
| Actuary                   | BSc Actuarial Sci | A- (70+ points)  | Ksh 120,000–600,000 |
| Statistician              | BSc Statistics    | B+ (65+ points)  | Ksh 80,000–250,000  |
| Financial Analyst         | BBM / BComm       | B  (60+ points)  | Ksh 90,000–300,000  |
| Mathematics Teacher       | BEd Mathematics   | B  (60+ points)  | Ksh 30,000–80,000   |
| Operations Research       | BSc Maths / Eng.  | B+ (65+ points)  | Ksh 100,000–300,000 |
| Economist                 | BA/BSc Economics  | B  (60+ points)  | Ksh 80,000–350,000  |
| Engineer (any branch)     | BEng              | A- (70+ points)  | Ksh 80,000–400,000  |
+---------------------------+-------------------+------------------+---------------------+

============================================================
TOP UNIVERSITIES — COMPUTER SCIENCE (KENYA)
============================================================

+---+---------------------------+------------------+------------------+
| # | University                | Programme        | Est. Annual Fee  |
+---+---------------------------+------------------+------------------+
| 1 | University of Nairobi     | BSc CS           | Ksh 50,000–90,000|
| 2 | Strathmore University     | BSc CS           | Ksh 200,000+     |
| 3 | JKUAT                     | BSc CS / SE      | Ksh 60,000–100,000|
| 4 | KCA University            | BSc CS / IT      | Ksh 80,000–120,000|
| 5 | Dedan Kimathi Univ.       | BSc CS           | Ksh 50,000–80,000|
| 6 | Multimedia Univ. Kenya    | BSc CS           | Ksh 60,000–90,000|
| 7 | Technical Univ. Kenya     | BSc IT           | Ksh 40,000–80,000|
+---+---------------------------+------------------+------------------+

============================================================
GLOBAL TECH EMPLOYERS HIRING KENYANS
============================================================
• Google, Microsoft, Amazon (AWS), Meta — regional offices in Nairobi
• Safaricom, Equity Bank Tech, KCB Digital, M-PESA Africa
• Andela (remote developer network based in Africa)
• iHub, GrowthAfrica (startup ecosystem Nairobi)
• UN / international NGOs (tech roles)
• World Bank, African Development Bank (data & analytics)

============================================================
GRADE REQUIREMENTS — STEM ENTRY (KICD)
============================================================

+---------------------------+----------------------------------+
| Requirement               | Details                          |
+---------------------------+----------------------------------+
| Grade 9 to Grade 10       | Pass JSS Certificate (JSCE)      |
| Minimum for STEM pathway  | Strong performance in Maths & CS |
| University (Competitive)  | KCSE: B+ overall; A in Maths/CS  |
| HELB Loan (university)    | Available to qualifying students |
| Scholarships              | Kenya, DAAD Germany, Mastercard  |
+---------------------------+----------------------------------+

============================================================
ADVICE FROM RONNY MWENDA — MATHEMATICS & CS TEACHER
============================================================
"Computer Science and Mathematics open more doors than any
other subjects in today's world. Whether you want to build
apps, analyse data, design AI systems, or solve complex
problems — these subjects are your foundation. Start coding
today. Every line of code is a step toward your future."

                       — Ronny Mwenda, Embu County

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'cg-all-pathways',
  cat:'career', icon:'🎯',
  title:'CBC Pathways Career Guide — Choosing Your SSS Pathway',
  grade:'Grade 9', subject:'Career Guidance', terms:'Term 3',
  desc:'Guide to help Grade 9 learners choose between STEM, Arts & Sports Science, and Social Sciences pathways. Includes self-assessment, career mapping, and university entry requirements.',
  topics:['Pathway Choice','Career Planning','STEM','Arts','Social Sciences'],
  content: () => `
CBC PATHWAYS CAREER GUIDE: CHOOSING YOUR SSS PATHWAY
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Audience : Grade 9 learners preparing for pathway selection
Purpose  : Help you make an informed, confident decision

============================================================
OVERVIEW: THE THREE PATHWAYS
============================================================

+---+------------------------------+----------------------------------+
| # | Pathway                      | Best for learners who...         |
+---+------------------------------+----------------------------------+
| 1 | STEM                         | Love maths, science, coding,     |
|   |                              | problem-solving, building things |
+---+------------------------------+----------------------------------+
| 2 | Arts and Sports Science      | Excel in creative arts, music,   |
|   |                              | sport, performance, design       |
+---+------------------------------+----------------------------------+
| 3 | Social Sciences              | Are interested in people,        |
|   |                              | history, business, law, language |
+---+------------------------------+----------------------------------+

============================================================
SELF-ASSESSMENT: WHICH PATHWAY SUITS YOU?
============================================================

Rate yourself 1 (low) to 5 (high) for each statement:

STEM INDICATORS:
+---+------------------------------------------------+-------+
| # | Statement                                      | Score |
+---+------------------------------------------------+-------+
| 1 | I enjoy solving mathematics problems           |  /5   |
| 2 | I am curious about how technology works       |  /5   |
| 3 | I like experiments and scientific investigation|  /5   |
| 4 | I enjoy coding, building, or designing things  |  /5   |
| 5 | I am patient with detailed, logical tasks      |  /5   |
+---+------------------------------------------------+-------+
STEM TOTAL: _______ / 25

ARTS & SPORTS SCIENCE INDICATORS:
+---+------------------------------------------------+-------+
| # | Statement                                      | Score |
+---+------------------------------------------------+-------+
| 1 | I love expressing myself through art or music  |  /5   |
| 2 | I participate actively in sports or dance      |  /5   |
| 3 | I am creative and think outside the box        |  /5   |
| 4 | I enjoy performing or presenting to others     |  /5   |
| 5 | I want a career in creative or sports industry |  /5   |
+---+------------------------------------------------+-------+
ARTS TOTAL: _______ / 25

SOCIAL SCIENCES INDICATORS:
+---+------------------------------------------------+-------+
| # | Statement                                      | Score |
+---+------------------------------------------------+-------+
| 1 | I am interested in history and current affairs |  /5   |
| 2 | I enjoy reading, writing, and discussing ideas  |  /5   |
| 3 | I am interested in business, law, or economics  |  /5   |
| 4 | I care about social justice and community issues|  /5   |
| 5 | I am good at communication and persuasion       |  /5   |
+---+------------------------------------------------+-------+
SS TOTAL: _______ / 25

YOUR HIGHEST SCORE SUGGESTS YOUR NATURAL PATHWAY.
But remember: passion + effort matters more than test scores!

============================================================
CAREER FAMILIES BY PATHWAY
============================================================

STEM CAREER FAMILIES:
Medicine & Health | Engineering | Information Technology |
Agriculture & Environment | Architecture | Data Science |
Aviation | Pure Science Research

ARTS & SPORTS SCIENCE CAREER FAMILIES:
Fine Art & Design | Music & Performing Arts | Sports Management |
Film & Media Production | Fashion & Textiles | Creative Writing |
Physical Education & Coaching

SOCIAL SCIENCES CAREER FAMILIES:
Law & Justice | Teaching & Education | Business & Commerce |
Journalism & Media | International Relations | Psychology |
Economics & Finance | Religious & Community Work

============================================================
IMPORTANT CONSIDERATIONS
============================================================

+---------------------------+----------------------------------------+
| Factor                    | Advice                                 |
+---------------------------+----------------------------------------+
| Your strengths            | Choose where you perform best already  |
| Your interests            | You will study this for 3+ years       |
| University requirements   | Check entry grades for your dream      |
|                           | programme before choosing pathway      |
| Career opportunities      | Research job market in Kenya & globally|
| Family expectations       | Discuss openly but make your own choice|
| Financial implications    | Consider bursaries and scholarships    |
+---------------------------+----------------------------------------+

============================================================
RESOURCES FOR MORE INFORMATION
============================================================
• Kenya Universities and Colleges Central Placement (KUCCPS): kuccps.ac.ke
• Higher Education Loans Board (HELB): helb.co.ke
• KICD Curriculum Resources: kicd.ac.ke
• Kenya National Examination Council: knec.ac.ke
• Career Guidance: Your school guidance counsellor

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

/* ══════════════════════════════════════
   TEACHER GUIDES (2)
══════════════════════════════════════ */
{
  id:'tg-cbc-overview',
  cat:'teacher', icon:'👩‍🏫',
  title:'Teacher Guide: Understanding the CBC Framework',
  grade:'Grade 7–12', subject:'Professional Development', terms:'All Terms',
  desc:'A complete teacher reference guide to the Competency Based Curriculum — core competencies, values, learning outcomes, assessment modes, and practical classroom implementation tips.',
  topics:['CBC Framework','Core Competencies','Assessment','Lesson Planning','Values'],
  content: () => `
TEACHER GUIDE: UNDERSTANDING THE CBC FRAMEWORK
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Audience : All teachers implementing CBC in Kenya
Level    : Junior & Senior Secondary School
Source   : KICD CBC Framework and Curriculum Designs

============================================================
1. WHAT IS CBC?
============================================================
The Competency Based Curriculum (CBC) was introduced in Kenya
in 2017, replacing the 8-4-4 system. It focuses on developing
COMPETENCIES (what learners can DO) rather than just knowledge
(what learners KNOW).

SYSTEM STRUCTURE:
Pre-Primary (PP1–PP2) → Lower Primary (Grades 1–3)
→ Upper Primary (Grades 4–6)
→ Junior Secondary (Grades 7–9)
→ Senior Secondary (Grades 10–12)
→ University / TVET

============================================================
2. THE SEVEN CORE COMPETENCIES
============================================================

+----+---------------------------+---------------------------------------+
| #  | Competency                | What it means in the classroom        |
+----+---------------------------+---------------------------------------+
| 1  | Communication &           | Learners express ideas clearly in     |
|    | Collaboration             | oral, written, and digital forms;     |
|    |                           | work well in groups                   |
+----+---------------------------+---------------------------------------+
| 2  | Critical Thinking &       | Learners analyse, evaluate, and       |
|    | Problem Solving           | solve real-world problems             |
+----+---------------------------+---------------------------------------+
| 3  | Creativity &              | Learners generate original ideas,     |
|    | Imagination               | explore multiple solutions            |
+----+---------------------------+---------------------------------------+
| 4  | Digital Literacy          | Learners use technology responsibly   |
|    |                           | and effectively                       |
+----+---------------------------+---------------------------------------+
| 5  | Learning to Learn         | Learners develop metacognitive skills;|
|    |                           | reflect on their own learning         |
+----+---------------------------+---------------------------------------+
| 6  | Self-efficacy             | Learners believe in their ability     |
|    |                           | to succeed; build resilience          |
+----+---------------------------+---------------------------------------+
| 7  | Citizenship               | Learners understand their rights,     |
|    |                           | responsibilities, and national values |
+----+---------------------------+---------------------------------------+

============================================================
3. CORE VALUES EMBEDDED IN CBC
============================================================

+------------------+-------------------------------------------+
| Value            | Classroom application                     |
+------------------+-------------------------------------------+
| Love             | Care for all learners; inclusive classroom|
| Responsibility   | Assign meaningful tasks and accountability|
| Respect          | Celebrate diversity of backgrounds/talents|
| Unity            | Group work; national cohesion activities  |
| Peace            | Conflict resolution; restorative circles  |
| Patriotism       | Kenya-context examples; national pride    |
| Social Justice   | Equity; support for learners with needs   |
+------------------+-------------------------------------------+

============================================================
4. ASSESSMENT IN CBC
============================================================

+-----------------------------+----------+----------------------------+
| Mode                        | Weight   | Examples                   |
+-----------------------------+----------+----------------------------+
| Formative (ongoing)         | 40% (CA) | Observation, oral, project |
| Summative (end of term/year)| 60%      | Tests, examinations        |
| Portfolio                   | Included | Collection of learner work |
| Peer assessment             | Included | Learner-marked work        |
| Self-assessment             | Included | Reflection journals        |
+-----------------------------+----------+----------------------------+

PERFORMANCE LEVELS:
4 = Exceeds Expectations (E)
3 = Meets Expectations (M)
2 = Approaches Expectations (A)
1 = Below Expectations (B)

============================================================
5. LESSON PLANNING TIPS FOR CBC TEACHERS
============================================================

+---+------------------------------------------+
| # | Best Practice                            |
+---+------------------------------------------+
| 1 | Always state LEARNING OUTCOMES in terms  |
|   | of what learners will BE ABLE TO DO      |
| 2 | Plan at least 3 different ACTIVITIES     |
|   | (not just teacher talking)               |
| 3 | Include a COMPETENCY focus in every      |
|   | lesson (not just content)                |
| 4 | Use LOCAL CONTEXT — Kenyan examples,     |
|   | Kenyan data, Kenyan problems             |
| 5 | Plan for DIFFERENTIATION — tasks for     |
|   | different ability levels                 |
| 6 | Include FORMATIVE ASSESSMENT in every    |
|   | lesson (exit ticket, oral Q, checklist)  |
| 7 | Allow learners to COLLABORATE regularly  |
| 8 | Reflect on EVERY LESSON — what worked?   |
+---+------------------------------------------+

============================================================
6. USEFUL REFERENCES
============================================================
• KICD Website: kicd.ac.ke
• CBC Parent Portal: cbcportal.ac.ke
• KNEC Assessment Framework: knec.ac.ke
• TSC Professional Standards: tsc.go.ke
• CBC Best Resources: cbcbest.netlify.app

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

{
  id:'tg-differentiation',
  cat:'teacher', icon:'👩‍🏫',
  title:'Teacher Guide: Differentiation Strategies in CBC Classrooms',
  grade:'Grade 7–9', subject:'Professional Development', terms:'All Terms',
  desc:'Practical strategies for differentiating instruction in mixed-ability CBC classrooms. Covers content, process, product, and environment differentiation with ready-to-use examples.',
  topics:['Differentiation','Inclusive Teaching','Mixed Ability','Learning Styles','Special Needs'],
  content: () => `
TEACHER GUIDE: DIFFERENTIATION STRATEGIES IN CBC CLASSROOMS
CBC Best · cbcbest.netlify.app · Ronny Mwenda
============================================================
Audience : JSS and SSS teachers in Kenya
Purpose  : Practical strategies for teaching all learners

============================================================
1. WHAT IS DIFFERENTIATION?
============================================================
Differentiation means adjusting your teaching to meet the
different learning needs, abilities, and styles of all
learners in your classroom.

CBC MANDATE: Every learner has a right to access quality
education at their own level. Differentiation is not optional
— it is a professional and legal requirement in Kenya.

============================================================
2. THE FOUR DIMENSIONS OF DIFFERENTIATION
============================================================

+------------------+-------------------------------------------+
| Dimension        | What you adjust                           |
+------------------+-------------------------------------------+
| CONTENT          | What learners learn (depth/complexity)    |
| PROCESS          | How learners engage with the content      |
| PRODUCT          | How learners demonstrate learning         |
| ENVIRONMENT      | The physical/social learning context      |
+------------------+-------------------------------------------+

============================================================
3. DIFFERENTIATION BY ABILITY LEVELS
============================================================

+-------------------+------------------+------------------+------------------+
| Aspect            | Below Level      | At Level         | Above Level       |
+-------------------+------------------+------------------+------------------+
| Task complexity   | Concrete, guided | Standard task    | Abstract, open    |
| Resources         | Visuals, models  | Standard text    | Extension reading |
| Support           | Teacher/peer     | Peer pair        | Independent       |
|                   | scaffolding      | work             | research          |
| Assessment        | Oral/practical   | Written          | Extended project  |
| Examples          | Local, familiar  | Standard         | Novel, unfamiliar |
| Time              | More time given  | Standard time    | Extended task     |
+-------------------+------------------+------------------+------------------+

============================================================
4. PRACTICAL DIFFERENTIATION STRATEGIES (READY TO USE)
============================================================

TIERED TASKS:
Prepare the SAME learning objective at 3 levels:
• Basic: guided worksheet with sentence starters
• Core: standard task from textbook
• Extended: open-ended investigation or problem

THINK-PAIR-SHARE with levels:
• Think: individual response (all levels)
• Pair: pair a stronger with a developing learner
• Share: select different learners strategically

LEARNING CONTRACTS:
• Learner and teacher agree on tasks and timeline
• Fast learners progress independently
• Struggling learners receive more support

FLEXIBLE GROUPING:
+---------------------+-------------------------------------------+
| Group type          | When to use                               |
+---------------------+-------------------------------------------+
| Ability groups      | For targeted support/extension tasks      |
| Mixed-ability groups| For collaborative problem solving         |
| Interest groups     | For project-based or creative tasks       |
| Random groups       | For social integration and cohesion       |
+---------------------+-------------------------------------------+

MULTIPLE REPRESENTATIONS:
Teach the same concept through:
• Visual (diagram, chart, video)
• Auditory (explanation, discussion, song)
• Kinaesthetic (hands-on activity, model)

============================================================
5. SUPPORTING LEARNERS WITH SPECIAL NEEDS
============================================================

+---------------------------+----------------------------------------+
| Need                      | Strategies                             |
+---------------------------+----------------------------------------+
| Dyslexia                  | Larger font; coloured overlays;        |
|                           | oral assessment options; audio         |
+---------------------------+----------------------------------------+
| Hearing impairment        | Seat near front; visual cues;          |
|                           | written instructions; lip reading      |
+---------------------------+----------------------------------------+
| Visual impairment         | Large print; tactile materials;        |
|                           | verbal description; braille if avail.  |
+---------------------------+----------------------------------------+
| English as 2nd language   | Mother tongue support; visual vocab;   |
|                           | simplified language; peer translation  |
+---------------------------+----------------------------------------+
| Giftedness                | Extension tasks; mentorship;           |
|                           | independent research; competitions     |
+---------------------------+----------------------------------------+

============================================================
6. DIFFERENTIATION IN MATHEMATICS (EXAMPLE — GRADE 7)
============================================================
TOPIC: Solving Linear Equations

BELOW LEVEL TASK:
  Solve with balance model diagrams: x + 3 = 7
  (Drawing of balance scale provided)

CORE LEVEL TASK:
  Solve: 2x + 5 = 13  (Show all working)

EXTENSION TASK:
  "A shopkeeper sells apples and oranges. She sells 3 times
  as many apples as oranges. Total fruit = 120. Form and
  solve an equation. Explain your method."

© 2026 CBC Best · cbcbest.netlify.app · Free for classroom use only.
`
},

]; /* end RESOURCES array */

/* ── INITIAL RENDER ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyFilters();
});

window.addEventListener('renderAll', () => {
  applyFilters();
});