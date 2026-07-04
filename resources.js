/* ════════════════════════════════════════════════════════════
   CBC BEST — resources.js
   Author  : Ronny Mwenda (Mathematics & Computer Science Teacher)
   Website : cbcbest.netlify.app
   Email   : ronnymwenda89@gmail.com
   © 2026 CBC Best — Original professional content.
   Free for classroom adaptation. Not for resale.

   STRUCTURE:
     1. Helper functions  (docHeader, docFooter, makeTable)
     2. RESOURCES array   (25 complete professional documents)
     3. Runtime logic     (render, filter, search, download, modal, toast)
════════════════════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════════════════════
   §1  HELPER FUNCTIONS
════════════════════════════════════════════════════════════ */

/** Returns a formatted document header block */
function docHeader(type, subject, grade, pathway, term, year,
                   totalLessons, totalWeeks, ref) {
  const lines = [
    '================================================================',
    '  CBC BEST — ORIGINAL PROFESSIONAL RESOURCE',
    '  Author  : Ronny Mwenda (Mathematics & Computer Science Teacher)',
    '  School  : [Insert School Name]          County : Embu County',
    '  Website : cbcbest.netlify.app',
    '  Email   : ronnymwenda89@gmail.com',
    '  © 2026 CBC Best — Free for classroom adaptation. Not for resale.',
    '================================================================',
    '',
    type.toUpperCase(),
  ];
  if (subject)      lines.push(`Subject        : ${subject}`);
  if (grade)        lines.push(`Grade          : ${grade}`);
  if (pathway)      lines.push(`Pathway        : ${pathway}`);
  if (term)         lines.push(`Term           : ${term}`);
  if (year)         lines.push(`Year           : ${year}`);
  if (totalLessons) lines.push(`Total Lessons  : ${totalLessons}`);
  if (totalWeeks)   lines.push(`Total Weeks    : ${totalWeeks}`);
  if (ref)          lines.push(`Reference      : ${ref}`);
  lines.push('Prepared by    : Ronny Mwenda');
  lines.push('');
  return lines.join('\n');
}

/** Returns a formatted document footer block */
function docFooter(docTitle) {
  return [
    '',
    '================================================================',
    `Document : ${docTitle}`,
    'Original professional work. Free to adapt for classroom use.',
    'Do not resell or reproduce commercially without permission.',
    'Author   : Ronny Mwenda | cbcbest.netlify.app | ronnymwenda89@gmail.com',
    '================================================================',
  ].join('\n');
}

/**
 * Renders a plain-text table with auto-calculated column widths.
 * @param {string[]} cols  - column header strings
 * @param {string[][]} rows - data rows (inner array = one row)
 */
function makeTable(cols, rows) {
  const allRows = [cols, ...rows];
  const widths  = cols.map((_, ci) =>
    Math.max(...allRows.map(r => String(r[ci] ?? '').length))
  );
  const hr  = widths.map(w => '-'.repeat(w + 2)).join('+');
  const sep = `+${hr}+`;

  function fmtRow(row) {
    return '|' + cols.map((_, ci) => {
      const cell = String(row[ci] ?? '');
      return ` ${cell.padEnd(widths[ci])} `;
    }).join('|') + '|';
  }

  const lines = [sep, fmtRow(cols), sep];
  rows.forEach(r => lines.push(fmtRow(r)));
  lines.push(sep);
  return lines.join('\n');
}


/* ════════════════════════════════════════════════════════════
   §2  RESOURCE DATABASE — 25 professional KICD-aligned documents
════════════════════════════════════════════════════════════ */
const RESOURCES = [

  /* ────────────────────────────────────────────────────────
     SCHEMES OF WORK  (5 documents)
  ──────────────────────────────────────────────────────── */

  // ── SOW 1 ──────────────────────────────────────────────
  {
    id: 'sow-math10-t1',
    cat: 'scheme', icon: '📅',
    title: 'Scheme of Work — Core Mathematics Grade 10, Term 1',
    grade: 'Grade 10', subject: 'Mathematics', terms: 'Term 1',
    desc: 'Full 13-week scheme for Grade 10 Core Mathematics (STEM Pathway) covering Numbers (Real Numbers, Surds, Indices, Logarithms), Algebra (Quadratic Equations, Simultaneous Equations), Geometry (Trigonometry, Reflection, Congruence), and Data Handling & Probability. Tabulated format with weekly breakdown, learning outcomes, activities, and assessment tools.',
    topics: ['Real Numbers','Surds','Indices','Logarithms','Quadratic Equations',
             'Trigonometry','Data Handling','Probability'],
    content: () => {
      const hdr = docHeader(
        'SCHEME OF WORK', 'Core Mathematics', '10',
        'STEM (Science, Technology, Engineering & Mathematics)',
        '1', '2025 / 2026', '52 (40 minutes per lesson)', '13',
        'KICD Core Mathematics Grade 10 Curriculum Design (July 2025)'
      );

      const overview = `
TERM OVERVIEW — STRANDS COVERED
================================================================
Strand 1.0 : Numbers              Sub-Strands: Real Numbers, Surds, Indices, Logarithms
Strand 2.0 : Algebra              Sub-Strands: Quadratic Expressions & Equations,
                                               Simultaneous Equations, Inequalities
Strand 3.0 : Measurements &       Sub-Strands: Trigonometry (Sine Rule, Cosine Rule,
             Geometry                          Bearings), Reflection & Congruence
Strand 4.0 : Data Handling        Sub-Strands: Statistics (Grouped & Ungrouped Data,
             & Probability                     Histograms, Ogives), Probability Rules

`;
      const C = ['WK','LES','TOPIC','SPECIFIC LEARNING OUTCOMES (VOC MODEL)',
                 'LEARNING EXPERIENCES','ASSESSMENT TOOL','RESOURCES'];

      /* ── Strand 1 ── */
      const s1H = 'STRAND 1.0 — NUMBERS\nSub-Strand 1.1: Real Number System\n';
      const s1R = [
        ['1','1','Real Numbers',
         'Classify real numbers into sets: N, Z, Q, R, and Irrational (I)',
         'Sort pre-prepared number cards into labelled set circles',
         'Observation Schedule','Number cards, marker board'],
        ['1','2','Real Numbers',
         'Represent real numbers on a number line and compare using <, >, =',
         'Group number-line activity; peer-correction exercise',
         'Checklist','Printed number lines'],
        ['1','3','Surds',
         'Simplify surds of the form √n by identifying the largest perfect square factor',
         'Decompose 18=9×2, 50=25×2; guided examples & drill',
         'Written Test','Textbook, worksheets'],
        ['1','4','Surds',
         'Add and subtract like surds (e.g. 3√2 + 5√2; √8 + √18)',
         'Like-terms analogy; pair simplification activity',
         'Oral Q & A','Mini-whiteboards'],
        ['2','5','Surds',
         'Multiply surds using the product rule √(ab) = √a × √b',
         'FOIL extension; expand (√3+√2)(√3−√2); class practice',
         'Checklist','Worksheets'],
        ['2','6','Surds',
         'Rationalise denominators: monomial (1/√a) and binomial (1/(a±√b))',
         'Conjugate method demonstration; 10-question individual task',
         'Written Test','Worksheets'],
        ['2','7','Indices',
         'State and apply the six laws of indices for positive, zero, and negative exponents',
         'Derive laws from patterns; match-the-law card game',
         'Checklist','Index law card sets'],
        ['2','8','Indices',
         'Simplify algebraic expressions involving index laws',
         'Group problem-solving race; peer marking',
         'Peer Assessment','Textbook problems'],
        ['2','9','Logarithms',
         'Define logarithm as the inverse operation of exponentiation',
         'Table pattern: 10²=100 ↔ log₁₀100=2; base-change examples',
         'Oral Q & A','Scientific calculators'],
        ['2','10','Logarithms',
         'Apply laws of logarithms: product, quotient, and power rules',
         'Worked examples; 8-question consolidation task',
         'Written Test','Worksheets'],
        ['3','11','Logarithms',
         'Solve equations of the form aˣ = b using logarithms',
         'Step-by-step: take log both sides; calculator verification',
         'Written Test','Calculators, worksheets'],
        ['3','12','CAT 1 (Numbers)',
         'Assess Sub-Strand 1.1 learning outcomes',
         '40-minute written Continuous Assessment Test',
         'Written Test (CAT)','Test papers'],
      ];

      /* ── Strand 2 ── */
      const s2H = '\nSTRAND 2.0 — ALGEBRA\nSub-Strand 2.1: Quadratic Expressions and Equations\n';
      const s2R = [
        ['3','13','Expanding',
         'Expand the product of two binomials (ax+b)(cx+d) using FOIL',
         'Area model using algebra tiles; FOIL mnemonic practice',
         'Observation','Algebra tiles'],
        ['3','14','Factorisation (a=1)',
         'Factorise quadratic expressions where the leading coefficient is 1',
         'Reverse FOIL; find two numbers that multiply to c, add to b',
         'Written Test','Worksheets'],
        ['4','15','Factorisation (a≠1)',
         'Factorise quadratic expressions using the AC method where a≠1',
         'Step-by-step worked examples; 6 guided practice problems',
         'Written Test','Worksheets'],
        ['4','16','Difference of Squares',
         'Recognise and factorise difference of two squares: a²−b²=(a+b)(a−b)',
         'Pattern matching activity; real-world area problems',
         'Checklist','Worksheets'],
        ['4','17','Completing the Square',
         'Complete the square for any quadratic expression ax²+bx+c',
         'Geometric square model; half-coefficient technique',
         'Written Test','Grid paper, worked examples'],
        ['4','18','Quadratic Formula',
         'Derive and apply x = [−b ± √(b²−4ac)] / 2a',
         'Derive from completing the square; 5-problem application',
         'Written Test','Formula reference cards'],
        ['5','19','Discriminant',
         'Use Δ=b²−4ac to determine the nature of roots before solving',
         'Sort 9 equations by discriminant; discuss real-world meaning',
         'Oral Q & A','Worksheets'],
        ['5','20','Linear-Quadratic Systems',
         'Solve linear-quadratic simultaneous equations using substitution',
         'Substitution method; graph to verify; word problems',
         'Written Test','Graph paper'],
        ['5','21','Quadratic Inequalities',
         'Solve quadratic inequalities and represent solutions on a number line',
         'Critical value method; interval notation introduction',
         'Written Test','Worksheets'],
        ['5','22','CAT 2 (Algebra)',
         'Assess Sub-Strand 2.1 learning outcomes',
         '40-minute written Continuous Assessment Test',
         'Written Test (CAT)','Test papers'],
      ];

      /* ── Strand 3 ── */
      const s3aH = '\nSTRAND 3.0 — MEASUREMENTS AND GEOMETRY\nSub-Strand 3.1: Trigonometry\n';
      const s3aR = [
        ['6','23','Trigonometric Ratios',
         'Define sin, cos, and tan ratios for a right-angled triangle (SOHCAHTOA)',
         'Measure actual triangles; derive ratios from measurements',
         'Checklist','Rulers, protractors, calculators'],
        ['6','24','Special Angles',
         'Calculate exact trig. values for 0°, 30°, 45°, 60°, and 90°',
         'Derive using equilateral triangle and isosceles right triangle',
         'Oral Q & A','Exact value tables'],
        ['6','25','Solving Right Triangles',
         'Calculate unknown sides and angles in right-angled triangles',
         'Real-world: height of a flagpole, angle of elevation problems',
         'Written Test','Scientific calculators'],
        ['7','26','Sine Rule',
         'Apply the sine rule a/sinA = b/sinB = c/sinC to non-right triangles',
         'Derive the rule; apply to 4 mixed problems',
         'Written Test','Textbook, calculators'],
        ['7','27','Cosine Rule',
         'Apply the cosine rule a² = b² + c² − 2bc·cosA',
         'Compare to Pythagoras; include ambiguous case discussion',
         'Written Test','Worksheets, calculators'],
        ['7','28','Area of a Triangle',
         'Calculate the area of any triangle using A = ½ab·sinC',
         'Compare to ½bh; practical measurement task',
         'Portfolio','Rulers, protractors'],
        ['7','29','Bearings',
         'Solve bearing problems using the sine and cosine rules',
         'Map reading + calculation; real-world navigation scenario',
         'Project','Maps, protractors'],
      ];

      const s3bH = '\nSub-Strand 3.2: Reflection and Congruence\n';
      const s3bR = [
        ['8','30','Reflection',
         'Identify lines and planes of symmetry in 2D and 3D shapes',
         'Collect objects from environment; paper-folding activity',
         'Observation Schedule','Tracing paper, mirrors, objects'],
        ['8','31','Reflection on a Grid',
         'Determine the image of a point or shape under reflection in a given line',
         'Coordinate grid plotting; transformation rules derivation',
         'Checklist','Grid paper, graph boards'],
        ['8','32','Mirror Line',
         'Determine the equation of a mirror line given object and image',
         'Midpoint and perpendicular bisector method',
         'Written Test','Graph paper, ruler'],
        ['9','33','Congruence Conditions',
         'State and apply the four triangle congruence conditions: SSS, SAS, AAS, RHS',
         'Match triangle pairs; justify congruence with evidence',
         'Written Test','Triangle cut-outs'],
        ['9','34','Congruence Proofs',
         'Construct a formal congruence proof for triangles in geometric contexts',
         'Step-by-step proof writing; worked examples; peer review',
         'Rubric','Worksheets'],
      ];

      /* ── Strand 4 ── */
      const s4H = '\nSTRAND 4.0 — DATA HANDLING & PROBABILITY  (Weeks 10–13)\nSub-Strand 4.1: Statistics & Probability\n';
      const s4R = [
        ['10','35','Data Collection',
         'Design a data collection tool and classify data types',
         'Class survey; distinguish continuous from discrete data',
         'Checklist','Survey templates'],
        ['10','36','Ungrouped Data — Measures',
         'Calculate mean, median, and mode for ungrouped data sets',
         'Manual calculation; verify with calculator; discuss outliers',
         'Written Test','Data cards'],
        ['10','37','Data Presentation',
         'Draw and interpret bar charts, pie charts, and frequency polygons',
         'Construct charts manually; compare representations',
         'Portfolio','Graph paper, ruler, compass'],
        ['11','38','Grouped Data',
         'Construct frequency distribution tables for grouped continuous data',
         'Rainfall data; decide class width; calculate class midpoints',
         'Written Test','Worksheets'],
        ['11','39','Histograms and Ogives',
         'Draw histograms with unequal class widths and cumulative frequency curves',
         'Frequency density concept; cumulative curve construction',
         'Portfolio','Graph paper, ruler'],
        ['11','40','Mean of Grouped Data',
         'Calculate the mean of grouped data using the assumed mean (coding) method',
         'Worked example with large dataset; contrast to direct method',
         'Written Test','Calculators, worksheets'],
        ['12','41','Probability Definitions',
         'Define probability and distinguish experimental from theoretical probability',
         'Coin-toss experiment (100 trials); compare to P(H)=½',
         'Observation Schedule','Coins, dice, tally sheets'],
        ['12','42','Addition Rule',
         'Apply P(A∪B) = P(A) + P(B) − P(A∩B) to solve problems',
         'Venn diagrams; mutually exclusive events as special case',
         'Written Test','Venn diagram templates'],
        ['12','43','Multiplication Rule',
         'Apply P(A∩B) = P(A) × P(B|A) for independent and dependent events',
         'Tree diagram method; real-world problems',
         'Written Test','Tree diagram worksheets'],
        ['13','44','Mixed Probability',
         'Solve combined probability problems using addition and product rules',
         'Past-style question practice; peer marking',
         'Written Test','Practice papers'],
        ['13','45','CAT 3 (Data & Probability)',
         'Assess Strand 4.0 learning outcomes',
         '40-minute written Continuous Assessment Test',
         'Written Test (CAT)','Test papers'],
        ['13','46','End-of-Term Examination',
         'Comprehensive summative assessment covering all Term 1 strands',
         '2-hour examination paper',
         'Written Test (Exam)','Exam papers'],
        ['13','47','Paper Return & Remediation',
         'Identify misconceptions; celebrate growth; set Term 2 goals',
         'Peer marking; group remediation; self-assessment reflection',
         'Self-Assessment','Marked scripts'],
      ];

      /* ── Assessment summary ── */
      const aC = ['COMPONENT','WEIGHT','WHEN','MARKS','NOTES'];
      const aR = [
        ['CAT 1 (Numbers)',            '10%','Week 3',  '30','Numbers strand'],
        ['CAT 2 (Algebra)',            '10%','Week 5',  '30','Algebra strand'],
        ['CAT 3 (Data & Probability)', '10%','Week 13', '30','Data & Probability strand'],
        ['Project / Portfolio Work',   '20%','Ongoing', '40','2 projects (rubric scored) per term'],
        ['Community Service Learning', '10%','Week 8–12','20','Real-world mathematics application'],
        ['End-of-Term Examination',    '40%','Week 13', '80','2-hour comprehensive paper'],
        ['TOTAL',                     '100%','—',      '230','Scaled to 100 for reporting'],
      ];

      const sloNote = `
VOC MODEL REFERENCE
================================================================
All Specific Learning Outcomes are written using the VOC Model:
  VERB    — Bloom's Taxonomy action verb (observable and measurable)
  OBJECT  — the mathematical concept or skill being learned
  CONTEXT — the condition, method, or situation

Example: "Simplify [V] surds of the form √n [O] by identifying
          the largest perfect square factor [C]"

KICD REFERENCE
================================================================
This scheme is aligned to:
  KICD Core Mathematics Senior Secondary Curriculum Design (July 2025)
  TSC Professional Standards for Teaching in Kenya
  MoE CBC Implementation Guidelines
For the official KICD curriculum design, visit: kicd.ac.ke
`;
      return [
        hdr, overview,
        s1H,  makeTable(C, s1R),
        s2H,  makeTable(C, s2R),
        s3aH, makeTable(C, s3aR),
        s3bH, makeTable(C, s3bR),
        s4H,  makeTable(C, s4R),
        '\nTERM 1 ASSESSMENT SUMMARY\n================================================================\n',
        makeTable(aC, aR),
        sloNote,
        docFooter('Scheme of Work — Core Mathematics Grade 10, Term 1'),
      ].join('\n');
    },
  },

  // ── SOW 2 ──────────────────────────────────────────────
  {
    id: 'sow-cs10-t1',
    cat: 'scheme', icon: '📅',
    title: 'Scheme of Work — Computer Science Grade 10, Term 1',
    grade: 'Grade 10', subject: 'Computer Science', terms: 'Term 1',
    desc: 'Complete 13-week scheme for Grade 10 Computer Science (STEM Pathway) covering Digital Literacy, Binary Systems, Programming with Python (variables, selection, iteration, functions, lists), Web Technologies (HTML/CSS), and Database fundamentals (SQL). Tabulated with full outcome-activity-assessment mapping.',
    topics: ['Digital Literacy','Binary Systems','Python Programming','Functions',
             'Lists','Web Technologies','HTML/CSS','SQL','Databases'],
    content: () => {
      const hdr = docHeader(
        'SCHEME OF WORK', 'Computer Science', '10', 'STEM',
        '1', '2025 / 2026', '48 (40 minutes each)', '13',
        'KICD Computer Science Grade 10 Curriculum Design (July 2025)'
      );
      const C = ['WK','LES','TOPIC','SPECIFIC LEARNING OUTCOMES (VOC MODEL)',
                 'LEARNING EXPERIENCES','ASSESSMENT TOOL','RESOURCES'];

      const s1H = 'STRAND 1.0 — DIGITAL LITERACY AND ICT FOUNDATIONS\nSub-Strand 1.1: Computer Systems and Number Representations\n';
      const s1R = [
        ['1','1','Computer Systems',
         'Identify hardware and software components of a modern computer system',
         'Label-a-computer-diagram group activity; quiz',
         'Observation Schedule','Computer lab, component posters'],
        ['1','2','Computer Systems',
         'Distinguish between primary and secondary memory with examples',
         'Memory-type sorting activity; RAM vs ROM discussion',
         'Oral Q & A','Printed component cards'],
        ['1','3','Binary Number System',
         'Convert decimal integers to binary and binary to decimal',
         'Place-value table method; pair verification drills',
         'Written Test','Conversion table sheets'],
        ['1','4','Number Bases',
         'Convert numbers between binary, octal, decimal, and hexadecimal',
         'Four-column conversion table; calculator spot-checking',
         'Written Test','Worksheets'],
        ['2','5','Binary Arithmetic',
         'Perform binary addition and subtraction using two\'s complement',
         'Worked examples; 8-problem individual drill',
         'Written Test','Worksheets'],
        ['2','6','Data Representation',
         'Explain how text, images, and sound are represented in binary',
         'ASCII table exploration; pixel colour binary activity',
         'Checklist','ASCII tables, coloured pixel grids'],
        ['2','7','Network Types',
         'Describe LAN, WAN, MAN, and PAN networks with daily-life examples',
         'Diagram-labelling activity; classroom as a LAN scenario',
         'Oral Q & A','Network topology posters'],
        ['2','8','Network Protocols',
         'Explain data transmission using the TCP/IP model (4 layers)',
         'Analogy: letter in postal system → data packets breakdown',
         'Written Test','TCP/IP layer diagram sheets'],
        ['3','9','Internet Safety',
         'Apply safe internet practices including password hygiene and HTTPS',
         'Evaluate 5 websites for safety indicators; group ranking',
         'Checklist','Printed website screenshots'],
        ['3','10','Cybersecurity Threats',
         'Identify phishing, malware, ransomware, and social engineering threats',
         'Case study analysis of a simulated phishing email',
         'Written Test','Printed case studies'],
        ['3','11','CAT 1 (Digital Literacy)',
         'Assess Strand 1.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s2aH = '\nSTRAND 2.0 — COMPUTATIONAL THINKING AND PROGRAMMING\nSub-Strand 2.1: Computational Thinking\n';
      const s2aR = [
        ['4','12','Decomposition',
         'Apply decomposition to break a complex problem into manageable sub-tasks',
         '"Plan a school event" decomposition exercise; class discussion',
         'Observation Schedule','Problem scenario cards'],
        ['4','13','Flowcharts',
         'Design flowcharts representing sequential, selection, and iteration logic',
         'Draw flowcharts: calculate average; find maximum of 3 numbers',
         'Checklist','Flowchart templates, symbols card'],
        ['4','14','Pseudocode',
         'Write pseudocode for algorithms using standard conventions',
         'Convert 2 flowcharts to pseudocode; compare with a partner',
         'Written Test','Pseudocode convention sheet'],
      ];

      const s2bH = '\nSub-Strand 2.2: Python Programming\n';
      const s2bR = [
        ['5','15','Python Basics',
         'Write and run basic Python programs using print(), input(), and variables',
         '"Hello, [name]!" program; name and age input program',
         'Observation Schedule','Computers with Python 3'],
        ['5','16','Data Types',
         'Identify and use Python data types: int, float, str, bool, and None',
         'type() experiments; type conversion (casting) drills',
         'Written Test','Computers'],
        ['5','17','Arithmetic Operators',
         'Apply Python operators: +, −, *, /, //, %, ** in programs',
         'Build a 4-function calculator program; test with edge cases',
         'Portfolio','Computers'],
        ['5','18','Selection (if/elif/else)',
         'Implement decision logic using if, elif, and else statements in Python',
         'Grade classifier: A=80+, B=60–79, C=50–59, D=40–49, E=below 40',
         'Written Test','Computers'],
        ['6','19','Logical Operators',
         'Combine conditions using and, or, not in selection statements',
         'Leap year checker; eligibility test program',
         'Written Test','Computers'],
        ['6','20','For Loops',
         'Use for loops with range() to repeat actions a defined number of times',
         'Multiplication table printer; star-pattern programs',
         'Observation Schedule','Computers'],
        ['6','21','While Loops',
         'Implement while loops with sentinel values and loop-control statements',
         'Sum-of-digits counter; PIN entry with 3 attempts',
         'Written Test','Computers'],
        ['6','22','Break and Continue',
         'Control loop execution using break and continue keywords',
         'Number search program; even-numbers filter',
         'Written Test','Computers'],
        ['7','23','Functions',
         'Define and call Python functions with parameters and return values',
         'Refactor the calculator into three separate functions',
         'Peer Assessment','Computers'],
        ['7','24','Variable Scope',
         'Distinguish between local and global variable scope in Python programs',
         'Trace execution with call-stack diagram; scope boundary demo',
         'Oral Q & A','Computers, printed code traces'],
        ['7','25','Lists',
         'Create and manipulate Python lists using indexing, slicing, and methods',
         'Student marks list: add, remove, sort, find max and min',
         'Written Test','Computers'],
        ['7','26','String Methods',
         'Apply Python string methods: split, join, upper, lower, replace, find',
         'Text analysis: count vowels; reverse words; word count',
         'Written Test','Computers'],
        ['8','27','Dictionaries',
         'Create and use Python dictionaries for key-value pair data storage',
         'School timetable dictionary; look-up and update exercises',
         'Portfolio','Computers'],
        ['8','28','File Input / Output',
         'Read data from and write data to text files using open(), read(), write()',
         'Save and retrieve student names and marks from a text file',
         'Portfolio','Computers'],
        ['8','29','CAT 2 (Programming)',
         'Assess Sub-Strand 2.2 outcomes (written + practical component)',
         '60-minute: 20 marks written theory + 40 marks practical coding',
         'Written Test (CAT)','Computers + test papers'],
      ];

      const s3H = '\nSTRAND 3.0 — WEB TECHNOLOGIES AND DATABASE SYSTEMS\n';
      const s3R = [
        ['9','30','HTML Structure',
         'Create a valid HTML5 webpage using DOCTYPE, html, head, and body tags',
         '"About Me" personal page; validate with W3C validator',
         'Portfolio','Computers, text editor'],
        ['9','31','HTML Content Elements',
         'Use semantic HTML elements: headings, p, ul, ol, a, img, and table',
         'Add content sections to "About Me" page; link to partner page',
         'Checklist','Computers'],
        ['10','32','CSS Fundamentals',
         'Apply inline, internal, and external CSS to style HTML elements',
         'Change colours, fonts, and margins on the "About Me" page',
         'Portfolio','Computers'],
        ['10','33','CSS Selectors',
         'Select HTML elements using element, class (.name), and ID (#name) selectors',
         'Card-design exercise; two-column layout',
         'Written Test','Computers'],
        ['10','34','Database Concepts',
         'Define DBMS, table, field, record, primary key, and foreign key',
         'Compare spreadsheet to database; define terms with examples',
         'Oral Q & A','Printed examples, whiteboard'],
        ['11','35','Table Design',
         'Design a relational database table with appropriate fields and data types',
         'Design student-records table; identify primary key',
         'Written Test','Worksheets'],
        ['11','36','SQL — SELECT Queries',
         'Write basic SQL SELECT statements with WHERE and ORDER BY clauses',
         'Query a sample school database in DB Browser for SQLite',
         'Written Test','Computers, SQLite'],
        ['11','37','SQL — Data Manipulation',
         'Write SQL INSERT, UPDATE, and DELETE statements',
         'Maintain sample database; enforce referential integrity rules',
         'Written Test','Computers, SQLite'],
        ['12','38','Mini Web Project',
         'Design and build a 3-page HTML/CSS website on a chosen topic',
         'Group project: apply all HTML/CSS skills learned',
         'Rubric','Computers'],
        ['13','39','Project Presentation',
         'Present the mini-project to the class and respond to questions',
         'Live demonstration; peer feedback using structured form',
         'Rubric + Peer Assessment','Computers, projector'],
        ['13','40','End-of-Term Examination',
         'Comprehensive Term 1 exam: theory + short practical',
         '2-hour paper covering all strands',
         'Written Test (Exam)','Exam papers'],
      ];

      const aC = ['COMPONENT','WEIGHT','WHEN','MARKS','INSTRUMENT'];
      const aR = [
        ['CAT 1 — Digital Literacy',           '10%','Week 3',   '30','Written Test'],
        ['CAT 2 — Programming (theory+prac.)', '10%','Week 8',   '60','Written Test + Observation'],
        ['Project — Mini Website',             '20%','Week 12–13','40','Rubric + Peer Assessment'],
        ['Portfolio — Coding Tasks',           '10%','Ongoing',  '20','Portfolio'],
        ['End-of-Term Examination',            '40%','Week 13',  '80','Written Test (2 hrs)'],
        ['Community Service Task',             '10%','Week 9–12','20','Anecdotal Records'],
        ['TOTAL',                             '100%','—',       '250','Scaled to 100'],
      ];

      return [
        hdr,
        s1H,  makeTable(C, s1R),
        s2aH, makeTable(C, s2aR),
        s2bH, makeTable(C, s2bR),
        s3H,  makeTable(C, s3R),
        '\nTERM 1 ASSESSMENT SUMMARY\n================================================================\n',
        makeTable(aC, aR),
        docFooter('Scheme of Work — Computer Science Grade 10, Term 1'),
      ].join('\n');
    },
  },

  // ── SOW 3 ──────────────────────────────────────────────
  {
    id: 'sow-math9-t2',
    cat: 'scheme', icon: '📅',
    title: 'Scheme of Work — Mathematics Grade 9, Term 2',
    grade: 'Grade 9', subject: 'Mathematics', terms: 'Term 2',
    desc: 'Complete Grade 9 Junior Secondary Mathematics Term 2 scheme covering Linear Equations & Inequalities, Coordinate Geometry, Circle Theorems, Trigonometric Ratios, and Probability. Prepares learners for KJSEA pathway selection.',
    topics: ['Linear Equations','Coordinate Geometry','Circle Theorems',
             'Trigonometry','Probability','KJSEA Prep'],
    content: () => {
      const hdr = docHeader(
        'SCHEME OF WORK', 'Mathematics', '9', null,
        '2', '2025 / 2026', '50 (40 minutes per lesson)', '13',
        'KICD Mathematics Grade 9 Curriculum Design (July 2025)'
      );
      const C = ['WK','LES','TOPIC','SPECIFIC LEARNING OUTCOMES (VOC MODEL)',
                 'LEARNING EXPERIENCES','ASSESSMENT TOOL','RESOURCES'];

      const s1H = 'STRAND 1.0 — ALGEBRA: LINEAR EQUATIONS AND INEQUALITIES\n';
      const s1R = [
        ['1','1','Linear Equations (1 Variable)',
         'Solve linear equations in one variable including fractional forms',
         'Balance model; algebraic manipulation drill',
         'Written Test','Equation cards'],
        ['1','2','Linear Equations (1 Variable)',
         'Solve equations with variables on both sides and with brackets',
         'Expand → collect → solve; peer check in pairs',
         'Checklist','Worksheets'],
        ['1','3','Sim. Equations (Elimination)',
         'Solve 2×2 simultaneous linear equations by the elimination method',
         'Scale model analogy; step-by-step worked examples',
         'Written Test','Worksheets'],
        ['2','4','Sim. Equations (Substitution)',
         'Solve 2×2 simultaneous linear equations by the substitution method',
         'When to prefer each method; mix of 6 practice problems',
         'Written Test','Worksheets'],
        ['2','5','Linear Inequalities',
         'Solve and represent linear inequalities on a number line',
         'Number line activity; real-life: acceptable temperature range',
         'Checklist','Number line strips'],
        ['2','6','Compound Inequalities',
         'Solve compound inequalities (AND / OR) and write solution sets',
         'Intersection and union using Venn diagrams',
         'Oral Q & A','Worksheets'],
        ['3','7','Linear Graphs',
         'Plot the graph of y = mx + c and identify gradient and y-intercept',
         'Desmos / graph paper: plot 3 lines; identify m and c',
         'Portfolio','Graph paper, ruler'],
        ['3','8','CAT 1 (Algebra)',
         'Assess Strand 1.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s2H = '\nSTRAND 2.0 — GEOMETRY: CIRCLES AND COORDINATE GEOMETRY\n';
      const s2R = [
        ['4','9','Circle Parts and Formulae',
         'Identify parts of a circle and calculate circumference and area',
         'Measure physical circles; derive π from class activity',
         'Checklist','Circular objects, string, ruler'],
        ['4','10','Circle Theorem 1',
         'Prove and apply: angle at centre = 2 × angle at circumference',
         'Dynamic geometry exploration; pair proof-checking',
         'Written Test','Geometry set, worksheets'],
        ['4','11','Circle Theorem 2',
         'Apply: angles in the same segment are equal',
         'Problem-solving in groups; prove using inscribed angles',
         'Oral Q & A','Worksheets'],
        ['5','12','Circle Theorem 3',
         'Apply: opposite angles of a cyclic quadrilateral add to 180°',
         'Cut-out cyclic quad activity; measure angles with protractor',
         'Written Test','Worksheets, protractors'],
        ['5','13','Coordinate Geometry — Midpoint',
         'Calculate the midpoint of a line segment joining two given points',
         'Grid activity: find centre of a soccer pitch edge',
         'Checklist','Graph paper'],
        ['5','14','Coordinate Geometry — Distance',
         'Calculate the distance between two points using Pythagoras\' theorem',
         'Connect to Grade 8 Pythagoras; 5 coordinate problems',
         'Written Test','Graph paper, calculators'],
        ['6','15','Gradient and Equation of a Line',
         'Find the gradient and equation of a straight line: y = mx + c',
         'Real-life slope: road gradient, ramp steepness examples',
         'Written Test','Graph paper'],
        ['6','16','Parallel and Perpendicular Lines',
         'Determine whether two lines are parallel or perpendicular from equations',
         'Compare gradients: m₁=m₂ vs m₁×m₂=−1',
         'Written Test','Worksheets'],
        ['6','17','CAT 2 (Geometry)',
         'Assess Strand 2.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s3H = '\nSTRAND 3.0 — TRIGONOMETRY\n';
      const s3R = [
        ['7','18','Trig. Ratios (SOHCAHTOA)',
         'Define sin, cos, and tan ratios for acute angles in right triangles',
         'Triangle measurement activity; derive ratios from actual triangles',
         'Checklist','Rulers, protractors, calculators'],
        ['7','19','Solving Right Triangles',
         'Calculate missing sides and angles using trigonometric ratios',
         'Height of tree activity; angle of depression problems',
         'Written Test','Scientific calculators'],
        ['8','20','Bearings',
         'Solve bearing problems using trigonometric ratios',
         'Map-reading exercise with bearings; real navigation scenarios',
         'Project','Maps, protractors, calculators'],
        ['8','21','Heights and Distances',
         'Apply angles of elevation and depression in real-world problems',
         'Clinometer activity: measure school building height',
         'Portfolio','Clinometers (improvised)'],
      ];

      const s4H = '\nSTRAND 4.0 — DATA HANDLING AND PROBABILITY\n';
      const s4R = [
        ['9','22','Frequency Tables',
         'Construct frequency distribution tables for ungrouped data',
         'Class shoe-size survey; organise into frequency table',
         'Checklist','Survey forms'],
        ['9','23','Measures of Central Tendency',
         'Calculate mean, median, and mode from frequency tables',
         'Compute manually for class data; discuss which measure is best',
         'Written Test','Calculators, data sheets'],
        ['10','24','Measures of Spread',
         'Calculate range, interquartile range, and interpret spread of data',
         'Compare two football teams\' scores; which is more consistent?',
         'Written Test','Worksheets'],
        ['10','25','Data Presentation',
         'Draw and interpret box-and-whisker plots and stem-and-leaf diagrams',
         'Construct from given exam results data set',
         'Portfolio','Graph paper'],
        ['11','26','Basic Probability',
         'Calculate probability using P(A) = n(A) / n(S) for simple events',
         'Coin and dice experiments; compare theoretical to experimental',
         'Observation Sch.','Coins, dice, tally sheets'],
        ['11','27','Mutually Exclusive Events',
         'Apply P(A or B) = P(A) + P(B) for mutually exclusive events',
         'Card-drawing experiments; Venn diagram representation',
         'Written Test','Playing cards, worksheets'],
        ['12','28','Tree Diagrams',
         'Construct tree diagrams for two-stage experiments',
         'Bag-and-ball activity; list outcomes systematically',
         'Written Test','Tree diagram templates'],
        ['12','29','CAT 3 (Data & Probability)',
         'Assess Strand 4.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const revH = '\nWEEKS 12–13 — KJSEA REVISION AND END-OF-TERM\n';
      const revC = ['WK','LES','ACTIVITY','DESCRIPTION'];
      const revR = [
        ['12','30','Algebra Revision',         'Past-style KJSEA questions; common error analysis session'],
        ['13','31','Geometry & Trig Revision',  'Mixed problem-solving; group support stations'],
        ['13','32','Data & Probability Revision','Mock questions; self-assessment using answer schemes'],
        ['13','33','End-of-Term Examination',   '2-hour comprehensive examination paper'],
      ];

      return [
        hdr,
        s1H, makeTable(C, s1R),
        s2H, makeTable(C, s2R),
        s3H, makeTable(C, s3R),
        s4H, makeTable(C, s4R),
        revH, makeTable(revC, revR),
        docFooter('Scheme of Work — Mathematics Grade 9, Term 2'),
      ].join('\n');
    },
  },

  // ── SOW 4 ──────────────────────────────────────────────
  {
    id: 'sow-math7-t1',
    cat: 'scheme', icon: '📅',
    title: 'Scheme of Work — Mathematics Grade 7, Term 1',
    grade: 'Grade 7', subject: 'Mathematics', terms: 'Term 1',
    desc: 'Full Grade 7 Junior Secondary Mathematics Term 1 scheme covering the Number strand (Whole Numbers, Integers, Fractions, Decimals, Percentages) and an introduction to Algebra. Designed for the first term of the Junior Secondary transition from primary.',
    topics: ['Whole Numbers','Integers','Fractions','Decimals','Percentages',
             'Algebraic Expressions'],
    content: () => {
      const hdr = docHeader(
        'SCHEME OF WORK', 'Mathematics', '7', null,
        '1', '2025 / 2026', '48 (40 minutes each)', '13',
        'KICD Mathematics Grade 7 Curriculum Design (July 2025)'
      );
      const C = ['WK','LES','TOPIC','SPECIFIC LEARNING OUTCOMES (VOC MODEL)',
                 'LEARNING EXPERIENCES','ASSESSMENT TOOL','RESOURCES'];

      const s1H = 'STRAND 1.0 — NUMBERS\nSub-Strand 1.1: Whole Numbers\n';
      const s1R = [
        ['1','1','Place Value',
         'Read, write, and partition whole numbers up to 1,000,000,000',
         'Place-value chart completion; number dictation activity',
         'Oral Q & A','Place-value charts'],
        ['1','2','Rounding',
         'Round whole numbers to the nearest 10, 100, 1,000, and 10,000',
         'Number-line rounding visual; real-world population rounding',
         'Checklist','Number lines'],
        ['1','3','Operations Review',
         'Apply the four operations to whole numbers efficiently',
         'Mental math relay race; estimation strategies',
         'Written Test','Worksheets'],
        ['2','4','Divisibility Rules',
         'Apply divisibility rules for 2, 3, 4, 5, 6, 8, 9, 10',
         'Divisibility chart sorting; justify rules using definitions',
         'Checklist','Divisibility rule cards'],
        ['2','5','Factors and Multiples',
         'Find HCF and LCM of two or more numbers using prime factorisation',
         'Prime factor trees; Venn diagram HCF/LCM method',
         'Written Test','Factor tree templates'],
      ];

      const s12H = '\nSub-Strand 1.2: Integers\n';
      const s12R = [
        ['2','6','Introduction to Integers',
         'Define integers and locate positive/negative integers on a number line',
         'Temperature/altitude real-world intro; rope number line activity',
         'Observation Sch.','Rope number line, cards'],
        ['3','7','Comparing Integers',
         'Compare and order integers using <, >, and = symbols',
         'Card sort: arrange integers from least to greatest',
         'Checklist','Integer cards'],
        ['3','8','Adding Integers',
         'Add two or more integers including negative values',
         'Number line movement; coloured counters model',
         'Written Test','Counters (2 colours), worksheets'],
        ['3','9','Subtracting Integers',
         'Subtract integers by applying the rule: a − (−b) = a + b',
         '"Removing debt" real-life analogy; worked examples',
         'Written Test','Worksheets'],
        ['3','10','Multiplying and Dividing Integers',
         'Apply sign rules for multiplication and division of integers',
         'Pattern discovery: (+)(+)=+, (+)(−)=−, (−)(−)=+',
         'Written Test','Pattern worksheets'],
      ];

      const s13H = '\nSub-Strand 1.3: Fractions\n';
      const s13R = [
        ['4','11','Types of Fractions',
         'Identify and convert between proper, improper, and mixed fractions',
         'Fraction strips; pizza/circle model',
         'Checklist','Fraction strips'],
        ['4','12','Equivalent Fractions',
         'Generate equivalent fractions and simplify to lowest terms',
         'Fraction wall activity; multiply/divide top and bottom',
         'Written Test','Fraction walls'],
        ['4','13','Adding / Subtracting Fractions',
         'Add and subtract fractions with different denominators using LCM',
         'LCM method; 8-problem individual practice',
         'Written Test','Worksheets'],
        ['5','14','Multiplying Fractions',
         'Multiply fractions including mixed numbers',
         'Fold-paper model; area model for fractions',
         'Written Test','Worksheets, paper'],
        ['5','15','Dividing Fractions',
         'Divide fractions by applying the "keep, change, flip" technique',
         'Explain KCF rule from a visual model; 6 problems',
         'Written Test','Worksheets'],
      ];

      const s14H = '\nSub-Strand 1.4: Decimals and Percentages\n';
      const s14R = [
        ['5','16','Decimal Place Value',
         'Read, write, and order decimals to four decimal places',
         'Number line for decimals; decimal cards sort',
         'Checklist','Decimal number lines'],
        ['6','17','Operations with Decimals',
         'Add, subtract, multiply, and divide decimal numbers',
         'Column method; locate decimal point correctly',
         'Written Test','Worksheets, calculators'],
        ['6','18','Converting Fractions / Decimals',
         'Convert between fractions, decimals, and percentages',
         'Conversion triangle model; 3-way conversion table',
         'Written Test','Conversion tables'],
        ['6','19','Percentage of a Quantity',
         'Calculate percentage of a quantity and express one as % of another',
         'Sale price activity; newspaper headline percentages',
         'Written Test','Worksheets'],
        ['7','20','Percentage Increase / Decrease',
         'Calculate percentage increase and percentage decrease',
         'Real-life: salary increase; population growth problem',
         'Portfolio','Worksheets'],
        ['7','21','CAT 1 (Numbers)',
         'Assess Sub-Strands 1.1–1.4 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s2H = '\nSTRAND 2.0 — ALGEBRA: ALGEBRAIC EXPRESSIONS\n';
      const s2R = [
        ['8','22','Introduction to Algebra',
         'Use letters to represent unknown quantities in algebraic expressions',
         '"Think of a number" puzzles; translate word phrases to algebra',
         'Oral Q & A','Word-to-algebra cards'],
        ['8','23','Simplifying Expressions',
         'Simplify algebraic expressions by collecting like terms',
         'Like-terms sorting activity; algebra tiles',
         'Written Test','Algebra tiles'],
        ['9','24','Substitution',
         'Evaluate algebraic expressions by substituting given values',
         'Formula substitution: area, speed, temperature conversion',
         'Written Test','Worksheets'],
        ['9','25','Simple Linear Equations',
         'Solve simple linear equations in one variable',
         'Balance model; one-step and two-step equations',
         'Written Test','Balance pan sets (model)'],
        ['10','26','Word Problems (Algebra)',
         'Formulate and solve linear equations from word problems',
         'Real-life contexts: age problems, money problems',
         'Portfolio','Problem scenario cards'],
        ['10','27','CAT 2 (Algebra)',
         'Assess Strand 2.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s3H = '\nWEEKS 11–13 — MEASUREMENTS (STRAND 3.0 PREVIEW)\n';
      const s3R = [
        ['11','28','Units of Measurement',
         'Convert between metric units of length, mass, and capacity',
         'Measurement scavenger hunt; unit conversion chart',
         'Checklist','Rulers, scales, measuring cups'],
        ['12','29','Perimeter',
         'Calculate the perimeter of regular and irregular polygons',
         'Measure classroom objects; apply formulas',
         'Written Test','Rulers, worksheets'],
        ['12','30','Area',
         'Calculate areas of rectangles, triangles, and compound shapes',
         'Grid-counting then formula; composite shapes',
         'Written Test','Grid paper'],
        ['13','31','End-of-Term Examination',
         'Comprehensive Term 1 examination',
         '1.5-hour examination paper',
         'Written Test (Exam)','Exam papers'],
        ['13','32','Paper Return & Goal-Setting',
         'Reflection on strengths and areas for improvement',
         'Self-assessment; set 3 personal targets for Term 2',
         'Self-Assessment','Reflection sheets'],
      ];

      return [
        hdr,
        s1H,  makeTable(C, s1R),
        s12H, makeTable(C, s12R),
        s13H, makeTable(C, s13R),
        s14H, makeTable(C, s14R),
        s2H,  makeTable(C, s2R),
        s3H,  makeTable(C, s3R),
        docFooter('Scheme of Work — Mathematics Grade 7, Term 1'),
      ].join('\n');
    },
  },

  // ── SOW 5 ──────────────────────────────────────────────
  {
    id: 'sow-intsc-g8',
    cat: 'scheme', icon: '📅',
    title: 'Scheme of Work — Integrated Science Grade 8, Term 2',
    grade: 'Grade 8', subject: 'Integrated Science', terms: 'Term 2',
    desc: 'Grade 8 Integrated Science Term 2 scheme covering Forces and Motion (Newton\'s Laws), Living Things (Reproduction in Plants and Animals), Mixtures and Separation Techniques, and Waves and Sound. Tabulated with full weekly planning.',
    topics: ['Forces','Motion','Newton\'s Laws','Reproduction',
             'Mixtures','Separation Techniques','Waves','Sound'],
    content: () => {
      const hdr = docHeader(
        'SCHEME OF WORK', 'Integrated Science', '8', null,
        '2', '2025 / 2026', '50', '13',
        'KICD Integrated Science Grade 8 Curriculum Design (July 2025)'
      );
      const C = ['WK','LES','TOPIC','SPECIFIC LEARNING OUTCOMES (VOC MODEL)',
                 'LEARNING EXPERIENCES','ASSESSMENT TOOL','RESOURCES'];

      const s1H = 'STRAND 1.0 — FORCES AND MOTION (PHYSICS)\n';
      const s1R = [
        ['1','1','Forces Overview',
         'Identify different types of forces and classify as contact / non-contact',
         'Force-sorting activity; list forces on a moving car',
         'Oral Q & A','Force type cards'],
        ['1','2','Balanced and Unbalanced Forces',
         'Distinguish balanced from unbalanced forces using free-body diagrams',
         'Tug-of-war activity; draw force arrows',
         'Checklist','Rope, spring balances'],
        ['2','3','Speed, Distance, Time',
         'Calculate speed using the formula: speed = distance ÷ time',
         'Stopwatch + ruler activity: measure walking speed',
         'Written Test','Stopwatches, rulers, worksheets'],
        ['2','4','Distance-Time Graphs',
         'Draw and interpret distance-time graphs for uniform motion',
         'Graph plotting from measured data; slope = speed',
         'Portfolio','Graph paper, rulers'],
        ['3','5','Acceleration',
         'Define acceleration and apply: a = (v − u) / t',
         'Toy car on ramp; calculate from start and end speeds',
         'Written Test','Toy cars, ramps, stopwatches'],
        ['3','6','Newton\'s First Law',
         'State and illustrate Newton\'s First Law (Law of Inertia)',
         'Coin-on-card trick; passenger in braking bus discussion',
         'Oral Q & A','Coins, cards, worksheet'],
        ['3','7','Newton\'s Second Law',
         'Apply F = ma to calculate force, mass, or acceleration',
         'Vary mass on trolley; measure acceleration; graph F vs a',
         'Written Test','Trolleys, masses, stopwatch'],
        ['4','8','Newton\'s Third Law',
         'State and give examples of Newton\'s Third Law action-reaction pairs',
         'Rocket balloon activity; identify action and reaction forces',
         'Checklist','Balloons, string'],
        ['4','9','Friction',
         'Investigate the effect of surface texture on the magnitude of friction force',
         'Drag block on different surfaces; record friction force',
         'Portfolio','Spring balance, sandpaper, wood block'],
        ['4','10','CAT 1 (Forces)',
         'Assess Strand 1.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s2H = '\nSTRAND 2.0 — LIVING THINGS: REPRODUCTION\n';
      const s2R = [
        ['5','11','Reproduction in Plants',
         'Distinguish sexual from asexual reproduction in plants with examples',
         'Classify plant reproduction methods; collect specimens',
         'Checklist','Plant specimens, labels'],
        ['5','12','Flower Structure',
         'Label the parts of a flower and state the function of each part',
         'Dissect a hibiscus/bean flower; draw and label',
         'Observation Sch.','Flowers, razor blades, trays'],
        ['5','13','Pollination',
         'Differentiate between self-pollination and cross-pollination',
         'Diagram comparison; adaptations of insect vs wind flowers',
         'Written Test','Pollination diagram worksheets'],
        ['6','14','Fertilisation in Plants',
         'Describe the process of fertilisation and seed development in plants',
         'Follow pollen tube journey with diagram; fruit formation',
         'Written Test','Diagrams, textbook'],
        ['6','15','Vegetative Propagation',
         'Demonstrate methods of vegetative propagation with local examples',
         'Plant a cutting from a sweet potato or sugarcane stem',
         'Portfolio (project)','Sweet potato stem, soil, pots'],
        ['7','16','Reproduction in Animals',
         'Compare sexual reproduction in fish, amphibians, reptiles, birds, mammals',
         'Comparison table; class presentation on each vertebrate group',
         'Oral Q & A','Reference cards, textbook'],
        ['7','17','Human Reproduction',
         'Describe the male and female reproductive systems and their functions',
         'Label reproductive system diagrams; use correct scientific terminology',
         'Written Test','Printed diagrams (appropriate)'],
        ['8','18','Fertilisation and Development',
         'Explain fertilisation, implantation, and foetal development stages',
         'Timeline activity: week-by-week foetal development',
         'Checklist','Foetal development charts'],
        ['8','19','CAT 2 (Living Things)',
         'Assess Strand 2.0 learning outcomes',
         '40-minute written CAT',
         'Written Test (CAT)','Test papers'],
      ];

      const s3H = '\nSTRAND 3.0 — MIXTURES AND SEPARATION (CHEMISTRY)\n';
      const s3R = [
        ['9','20','Types of Mixtures',
         'Distinguish between homogeneous and heterogeneous mixtures',
         'Classify 10 common mixtures using observation',
         'Checklist','Salt water, sand-water, milk'],
        ['9','21','Filtration',
         'Carry out filtration to separate an insoluble solid from a liquid',
         'Filter sand-water mixture; record observations',
         'Observation Sch.','Filter paper, funnel, beaker'],
        ['10','22','Evaporation and Crystallisation',
         'Use evaporation to recover a dissolved solid from solution',
         'Evaporate salt solution; observe crystal formation',
         'Portfolio','Bunsen burner, evap. dish, salt'],
        ['10','23','Distillation',
         'Explain how distillation separates liquids with different boiling points',
         'Demonstrate simple distillation apparatus; draw diagram',
         'Written Test','Distillation kit (or diagram)'],
        ['10','24','Chromatography',
         'Use paper chromatography to separate coloured dyes in ink',
         'Run chromatogram on black ink strip; identify components',
         'Observation Sch.','Chromatography paper, water, ink'],
        ['11','25','Choosing Separation Methods',
         'Select an appropriate separation technique for a given mixture',
         'Matching activity: mixture → best technique with justification',
         'Oral Q & A','Decision-tree worksheet'],
      ];

      const s4H = '\nSTRAND 4.0 — WAVES AND SOUND (INTRODUCTION)\n';
      const s4R = [
        ['11','26','Wave Properties',
         'Define amplitude, wavelength, frequency, and wave speed',
         'Slinky spring demonstration; draw and label wave diagrams',
         'Written Test','Slinky springs, worksheets'],
        ['12','27','Sound Waves',
         'Describe how sound is produced and transmitted through different media',
         'Tuning fork in water; echo in empty room activity',
         'Oral Q & A','Tuning forks'],
        ['12','28','Reflection of Sound',
         'Explain echo as the reflection of sound with a practical application',
         'Echo experiment; sonar diagram; speed of sound calculation',
         'Written Test','Worksheets, stopwatch'],
        ['13','29','CAT 3 / End-of-Term Examination',
         'Assess all Term 2 learning outcomes',
         '1.5-hour comprehensive exam',
         'Written Test','Exam papers'],
      ];

      return [
        hdr,
        s1H, makeTable(C, s1R),
        s2H, makeTable(C, s2R),
        s3H, makeTable(C, s3R),
        s4H, makeTable(C, s4R),
        docFooter('Scheme of Work — Integrated Science Grade 8, Term 2'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     LESSON PLANS  (6 documents)
  ──────────────────────────────────────────────────────── */

  // ── LP 1 ───────────────────────────────────────────────
  {
    id: 'lp-math10-surds',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Surds: Simplifying and Rationalising Denominators (Grade 10)',
    grade: 'Grade 10', subject: 'Mathematics', terms: 'Term 1',
    desc: 'Full 80-minute (double) lesson plan for teaching surds: simplification using prime factorisation and rationalisation of monomial and binomial denominators. Includes Bloom\'s-level outcomes, three-tier differentiation, a full assessment rubric, and a closure exit slip.',
    topics: ['Surds','Rationalising Denominators','Simplification',
             'Bloom\'s Taxonomy','Differentiation'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Core Mathematics', '10', 'STEM',
        'Term 1', '2025 / 2026', '80 minutes (double lesson)', '—',
        'KICD Core Mathematics Grade 10 Curriculum Design (July 2025) pp. 5–9'
      );
      const body = `
STRAND     : 1.0 Numbers
SUB-STRAND : 1.1 Real Number System — Surds

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
By the end of this lesson, the learner should be able to:

  a) SIMPLIFY    [V]  surd expressions of the form √n and a√n
                 [O]  by extracting the largest perfect square factor              [C]

  b) ADD & SUB.  [V]  like surds
                 [O]  using the concept of like terms                               [C]

  c) RATIONALISE [V]  monomial denominators of the form 1/√a
                 [O]  by multiplying numerator and denominator by √a               [C]

  d) RATIONALISE [V]  binomial denominators of the form 1/(a ± √b)
                 [O]  using the conjugate and difference-of-squares identity        [C]

  Bloom's Taxonomy levels: Remember/Understand (a & b) | Apply/Analyse (c & d)

2. CORE COMPETENCIES
================================================================
  [✓] Critical Thinking & Problem Solving — applying laws; verifying solutions
  [✓] Communication & Collaboration       — pair work; class discussion
  [✓] Learning to Learn                   — exit slip for self-assessment

3. PREREQUISITE KNOWLEDGE
================================================================
  • Prime factorisation of integers (Grade 7–9)
  • Perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
  • Fraction multiplication and simplification
  • Difference of two squares: (a+b)(a−b) = a² − b²
  • Basic algebraic notation: coefficients, like terms

4. MATERIALS AND RESOURCES
================================================================
  • Whiteboard / chalkboard with markers / chalk
  • Printed "Perfect Squares Reference Card" — one per support-group learner
  • Printed "Surds Practice Worksheet" — Tier 1, Tier 2, and Tier 3 versions
  • Scientific calculators (for verification only)
  • Mini-whiteboards or exercise books
  • Exit-slip cards — one per learner (cut from A5 paper)

5. LESSON DEVELOPMENT
================================================================

PHASE 1 — INTRODUCTION AND PRIOR KNOWLEDGE ACTIVATION  (10 min)
----------------------------------------------------------------
Write on the board without comment:
     √4      √9      √18      √50      √72      1/√3

Ask: "Which look neat? Which look messy? Why?"
Allow 2 minutes pair discussion. Take responses.
Guide: √4=2, √9=3 are rational (neat). The others are surds.

Quick recall Q&A (3 min):
  "What is √4?"   → 2   |   "What is √16?"  → 4
  "What is √25?"  → 5   |   "What is √100?" → 10

Connect: "Today we simplify surds and remove them from denominators."

PHASE 2 — SIMPLIFYING SURDS  (22 min)
----------------------------------------------------------------
KEY RULE: √(ab) = √a × √b
Strategy: split the number under the root into
          (largest perfect square) × (remaining factor)

WORKED EXAMPLE 1: Simplify √18
  Largest perfect square factor of 18 → 9
  √18 = √(9×2) = √9 × √2 = 3√2  ✓

WORKED EXAMPLE 2: Simplify √72
  Largest perfect square factor of 72 → 36
  √72 = √(36×2) = 6√2  ✓
  [COMMON ERROR: √72 = 2√18 — this is NOT fully simplified!]

WORKED EXAMPLE 3: Simplify 2√50
  2√50 = 2√(25×2) = 2 × 5√2 = 10√2  ✓

WORKED EXAMPLE 4: Adding like surds
  3√2 + 5√2 = 8√2   (same logic as 3x + 5x = 8x)

WORKED EXAMPLE 5: Adding unlike surds — simplify first!
  √8 + √18 = 2√2 + 3√2 = 5√2  ✓

WORKED EXAMPLE 6: Subtraction — simplify first!
  3√12 − √48 = 3(2√3) − 4√3 = 6√3 − 4√3 = 2√3  ✓

Pair activity on mini-whiteboards (7 min):
  Simplify: (i) √45  (ii) √98  (iii) 2√75  (iv) √8+√32  (v) 5√12−3√48
  Answers:      3√5       7√2      10√3        6√2           −2√3

Teacher circulates; correct common errors immediately.

PHASE 3 — RATIONALISING DENOMINATORS  (25 min)
----------------------------------------------------------------
WHY RATIONALISE? A fraction is not considered fully simplified if a surd
appears in the denominator.

CASE 1: Monomial denominator — form 1/√a
  Method: Multiply top and bottom by √a (equivalent to multiplying by 1)

  EXAMPLE 1: Simplify 1/√3
    1/√3 × √3/√3 = √3/3  ✓

  EXAMPLE 2: Simplify 5/√5
    5/√5 × √5/√5 = 5√5/5 = √5  ✓

  EXAMPLE 3: Simplify 3/(2√7)
    3/(2√7) × √7/√7 = 3√7/14  ✓

CASE 2: Binomial denominator — form 1/(a + √b) or 1/(a − √b)
  Method: Multiply by the CONJUGATE
  Key identity: (a+√b)(a−√b) = a² − b  → surd is eliminated

  EXAMPLE 4: Simplify 1/(2+√3)
    Conjugate = (2−√3)
    1/(2+√3) × (2−√3)/(2−√3) = (2−√3)/(4−3) = 2−√3  ✓

  EXAMPLE 5: Simplify 3/(1+√5)
    3/(1+√5) × (1−√5)/(1−√5) = 3(1−√5)/(1−5) = 3(1−√5)/(−4)  ✓

PHASE 4 — INDIVIDUAL CONSOLIDATION TASK  (18 min)
----------------------------------------------------------------
TIER 1 (Support — with perfect squares reference card):
  1. Simplify √50               4. Simplify √12 + √48
  2. Simplify √32               5. Rationalise 6/√3
  3. Simplify 3√8               6. Rationalise 2/(1+√3)  [conjugate hint given]

TIER 2 (Core — standard):
  1. Simplify √50               5. Rationalise 6/√3
  2. Simplify √75 − √48         6. Rationalise 2/(1+√3)
  3. Simplify (√2+√8)²          7. Rationalise 5/(√5−2)
  4. Simplify 2√45 − √20        8. Simplify (3+√2)(3−√2)

TIER 3 (Extension):
  All Tier 2 items PLUS:
  9.  If (a + b√2) = (3+√2)², find the values of a and b.
  10. Prove that (√6+√3)/(√6−√3) = 3 + 2√2, showing all working.
  11. For what value of p is p/(√p+1) = √p−1?

PHASE 5 — CLOSURE AND EXIT SLIP  (5 min)
----------------------------------------------------------------
Each learner completes an exit slip before leaving:

  Name: ___________________  Date: ___________
  ✓ One thing I understood well today: ________________________________
  ? One thing I am still unsure about: ________________________________
  ★ Confidence level (circle one):   😕   😐   🙂   😃

Collect exit slips. Use responses to plan the next lesson's starter activity.

6. THREE-TIER DIFFERENTIATION SUMMARY
================================================================`;

      const diffC = ['TIER','GROUP','MAIN ADAPTATIONS'];
      const diffR = [
        ['Tier 1','Support (scaffolded)','Perfect squares reference card provided; fewer questions; worked example to model'],
        ['Tier 2','Core (standard)',     'Full task as planned; expected to complete all 8 Tier 2 items'],
        ['Tier 3','Extension',          'Algebraic proofs; generalisation tasks; create own surd problem with solution'],
      ];

      const rubricNote = '\n7. ASSESSMENT RUBRIC — SURDS CONSOLIDATION TASK  (28 marks)\n================================================================\n';
      const rubC = ['CRITERION','4 — EXCEEDING','3 — MEETING','2 — APPROACHING','1 — BELOW'];
      const rubR = [
        ['Identifies largest perfect square factor',   'Always, efficiently',    'Usually correct',   'Sometimes correct', 'Rarely correct'],
        ['Applies product rule √(ab)=√a×√b',           'Always, faultlessly',    'Mostly correct',    'Minor errors',      'Not applied'],
        ['Combines like surds correctly',               'All cases correct',      'Most cases correct','Some cases correct','Does not attempt'],
        ['Rationalises monomial denominator',           'Correct; all steps',     'Mostly correct',    'Partial steps',     'Not attempted'],
        ['Rationalises binomial denominator',           'Correct; all steps',     'Mostly correct',    'Some evidence',     'Not attempted'],
        ['Shows clear, logical working at each step',   'Always',                 'Usually',           'Sometimes',         'Rarely / never'],
        ['Verifies answer by expanding back',           'Always does this',       'Sometimes attempts','Rarely',            'Never'],
      ];

      const reflection = `
TOTAL SCORE: ______ / 28      GRADE: EE / ME / AE / BE

8. TEACHER REFLECTION (complete after lesson delivery)
================================================================
  Were the SLOs met?                         YES / PARTIALLY / NO
  Most effective phase:                      ________________________________
  Number of learners completing Tier 2 task: ________________________________
  Most common misconception observed:        ________________________________
  Action for next lesson:                    ________________________________
  Learners needing follow-up support:        ________________________________

KICD REFERENCE
Strand 1.0 Numbers | Sub-Strand 1.1 Real Number System | Surds
KICD Core Mathematics Grade 10 Curriculum Design, July 2025, pp. 5–9
`;
      return [
        hdr, body,
        makeTable(diffC, diffR),
        rubricNote, makeTable(rubC, rubR),
        reflection,
        docFooter('Lesson Plan — Surds: Simplifying and Rationalising Denominators (Grade 10)'),
      ].join('\n');
    },
  },

  // ── LP 2 ───────────────────────────────────────────────
  {
    id: 'lp-cs10-functions',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Python: Functions, Parameters, and Scope (Grade 10 CS)',
    grade: 'Grade 10', subject: 'Computer Science', terms: 'Term 1',
    desc: 'Full 80-minute practical lesson plan for Python functions — defining functions, passing parameters, return values, and local vs global variable scope. Includes 6 tiered coding tasks, a pair-debugging activity, and a performance rubric.',
    topics: ['Python Functions','Parameters','Return Values','Variable Scope','Debugging'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Computer Science', '10', 'STEM',
        'Term 1', '2025 / 2026', '80 minutes (double lesson — computer lab)', '—',
        'KICD Computer Science Grade 10 Curriculum Design (July 2025)'
      );
      const body = `
STRAND     : 2.0 Computational Thinking & Programming
SUB-STRAND : 2.2 Python Programming — Functions

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
  a) DEFINE      [V] a Python function
                 [O] using the def keyword with correct syntax and indentation    [C]

  b) CALL        [V] a function with named arguments
                 [O] and display the returned value in a program                  [C]

  c) DISTINGUISH [V] between local and global variables
                 [O] by tracing code execution and identifying scope boundaries   [C]

2. CORE COMPETENCIES
================================================================
  [✓] Critical Thinking & Problem Solving — decompose a real problem into functions
  [✓] Creativity & Imagination            — design original functions
  [✓] Digital Literacy                    — write, run, and debug Python programs
  [✓] Communication & Collaboration       — pair debugging; articulate logic to partner

3. PREREQUISITE KNOWLEDGE
================================================================
  • Python variables and data types (int, str, float, bool)
  • if / elif / else statements
  • for and while loops
  • input() and print() built-in functions
  • Concept of a mathematical function: f(x) = 2x + 3

4. LESSON DEVELOPMENT
================================================================

PHASE 1 — MOTIVATION: THE PROBLEM OF REPETITION  (10 min)
----------------------------------------------------------------
Display this code on the projector:

  print("Name: Alice  | Score: 85 | Grade: B")
  print("Name: Brian  | Score: 92 | Grade: A")
  print("Name: Carol  | Score: 61 | Grade: C")
  print("Name: David  | Score: 45 | Grade: D")
  print("Name: Esther | Score: 37 | Grade: E")

Ask: "What problems do you see with this for a class of 400 learners?"
Guide towards: repetition, hard to maintain, error-prone, cannot be reused.
Connect to mathematical functions: "f(x) = 2x+3 gives output from any input."
Introduce the goal: "A Python function is a named, reusable block of code."

PHASE 2 — FUNCTION SYNTAX  (20 min)
----------------------------------------------------------------
Write the structure on the board:

  def function_name(parameter1, parameter2):
      """Docstring: describe what this function does."""
      # code block — indented 4 spaces
      return result

Emphasise: def keyword | colon | indentation | return statement

  EXAMPLE 1 — No parameters (demonstrates basic structure):
      def greet():
          print("Welcome to CBC Best!")
      greet()     # call the function

  EXAMPLE 2 — With a parameter:
      def greet_student(name):
          print("Hello,", name + "! Ready to learn?")
      greet_student("Amina")
      greet_student("Kamau")

  EXAMPLE 3 — With a return value (mirrors mathematical function):
      def add(a, b):
          return a + b
      result = add(5, 3)
      print("Sum:", result)     # Output: Sum: 8

  EXAMPLE 4 — Grade classifier function (real classroom application):
      def get_grade(score):
          if score >= 80:   return "A"
          elif score >= 60: return "B"
          elif score >= 50: return "C"
          elif score >= 40: return "D"
          else:             return "E"
      print(get_grade(85))    # A
      print(get_grade(42))    # D

Learners type all examples, run them, and observe output.
Ask 3 learners to explain what each line does before moving on.

PHASE 3 — SCOPE: LOCAL AND GLOBAL VARIABLES  (10 min)
----------------------------------------------------------------
  total = 100             # GLOBAL — accessible everywhere

  def show_half():
      half = total / 2    # LOCAL — exists only inside show_half()
      print("Half is:", half)

  show_half()
  print(total)            # OK — global variable
  # print(half)           # ERROR: NameError — half is not defined outside

Draw a box on the board labelled "Function Scope":
  "Variables created INSIDE the box cannot be seen from outside."
  "Variables created OUTSIDE can be read inside."

Modifying a global variable inside a function:
  count = 0
  def increment():
      global count        # must declare to MODIFY a global variable
      count += 1
  increment(); increment()
  print(count)            # 2

PHASE 4 — INDIVIDUAL CODING TASKS  (30 min)
----------------------------------------------------------------
File name: functions_task.py

  TASK 1 (Basic — everyone):
    Write area_rectangle(length, width) — returns length × width.
    Test: area_rectangle(5, 3) → 15

  TASK 2 (Basic — everyone):
    Write is_even(number) — returns True if even, False if odd.
    Test: is_even(4) → True;   is_even(7) → False

  TASK 3 (Core):
    Write celsius_to_fahrenheit(c) — Formula: F = (c × 9/5) + 32
    Test: celsius_to_fahrenheit(100) → 212;   celsius_to_fahrenheit(0) → 32

  TASK 4 (Core):
    Write find_maximum(a, b, c) — returns the largest of three numbers
    WITHOUT using Python's built-in max() function.

  TASK 5 (Extension):
    Write count_vowels(text) — counts vowels (a,e,i,o,u — upper & lower)
    Test: count_vowels("Nairobi") → 4

  TASK 6 (Extension):
    Write is_prime(n) — returns True if n is prime, False otherwise.
    Test with several values including edge cases (0, 1, 2, negative).

PHASE 5 — PAIR DEBUGGING  (7 min)
----------------------------------------------------------------
Swap to a partner's computer. Review their code. Answer on paper:
  1. Does every function have def and a colon?
  2. Is the indentation consistent (4 spaces throughout)?
  3. Does the return statement give the correct output?
  4. One improvement I suggest: _______________________________

PHASE 6 — CLOSURE  (3 min)
----------------------------------------------------------------
Thumbs poll:
  👍  I can write and call a Python function confidently
  ✋  I completed tasks but need more practice
  👎  I am still confused — please explain again next lesson

Teacher notes which learners raised thumbs down for follow-up.

5. ASSESSMENT RUBRIC — PYTHON FUNCTIONS TASK  (24 marks)
================================================================`;

      const rubC = ['CRITERION','4 — EXCEEDING','3 — MEETING','2 — APPROACHING','1 — BELOW'];
      const rubR = [
        ['Correct function definition (def, :)',  'All tasks correct', '4 of 5 correct',   '2–3 correct',  '0–1 correct'],
        ['Parameters passed correctly',           'All tasks correct', 'Mostly correct',    'Some correct', 'Not demonstrated'],
        ['Return statement used appropriately',   'All tasks correct', 'Mostly correct',    'Attempted',    'Not used'],
        ['Code runs without syntax errors',       'All tasks run',     '4 of 5 run',        '2–3 run',      'None run'],
        ['Meaningful variable and function names','All names clear',   'Most names clear',  'Some unclear', 'No clear names'],
        ['Docstring / comment included',          'All functions',     'Most functions',    'One or two',   'None'],
      ];

      return [
        hdr, body,
        '\n', makeTable(rubC, rubR),
        '\nTOTAL SCORE: ______ / 24      GRADE: EE / ME / AE / BE\n',
        docFooter('Lesson Plan — Python Functions, Parameters, and Scope (Grade 10 CS)'),
      ].join('\n');
    },
  },

  // ── LP 3 ───────────────────────────────────────────────
  {
    id: 'lp-g7-integers',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Integers and the Number Line (Grade 7)',
    grade: 'Grade 7', subject: 'Mathematics', terms: 'Term 1',
    desc: 'Engaging 40-minute Grade 7 lesson introducing integers with real-life contexts (temperature, banking, altitude). Includes a kinesthetic number-line game, differentiated tasks at three tiers, and a 3-question exit ticket.',
    topics: ['Integers','Number Line','Positive Numbers','Negative Numbers','Real-life Contexts'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Mathematics', '7', null,
        'Term 1', '2025 / 2026', '40 minutes (single lesson)', '—',
        'KICD Mathematics Grade 7 Curriculum Design (July 2025)'
      );
      const body = `
STRAND     : 1.0 Numbers
SUB-STRAND : 1.2 Integers

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
By the end of this lesson, the learner should be able to:

  a) DEFINE    [V] the set of integers
               [O] in their own words, including both positive and negative examples   [C]

  b) LOCATE    [V] positive and negative integers
               [O] at correct positions on a number line                               [C]

  c) COMPARE   [V] and order integers
               [O] using <, >, and = symbols in real-world context                     [C]

  d) APPLY     [V] integers to represent real-world quantities
               [O] including temperature, bank balances, and altitude                  [C]

2. LEARNING RESOURCES
================================================================
  • Rope or masking tape (floor number line, −10 to +10)
  • Integer number cards: −10 to +10 (one set per class + one per learner)
  • Printed number-line strips for support learners
  • Whiteboard / chalkboard
  • Temperature chart: Nairobi vs London vs Siberia
  • Exit-slip cards (cut from A5 paper, one per learner)

3. LESSON DEVELOPMENT
================================================================

PHASE 1 — REAL-WORLD HOOK  (7 min)
----------------------------------------------------------------
Present three scenarios (display on board or read aloud):

  SCENARIO 1 — TEMPERATURE:
  "The temperature in Nairobi today is 24°C. In London it is −3°C.
   Which city is colder? By how many degrees?"

  SCENARIO 2 — BANKING:
  "Amina has KSh 200 in her M-PESA account. She pays KSh 350 for
   school supplies. What does her account balance show?"

  SCENARIO 3 — ALTITUDE:
  "A diver is 15 metres below sea level. A helicopter is 80 metres above
   the same point. How can we write both positions using numbers?"

Ask: "What kind of numbers do we need for 'below zero', 'in debt', 'underground'?"
Define on board:  ℤ = { …, −4, −3, −2, −1, 0, 1, 2, 3, 4, … }

PHASE 2 — THE NUMBER LINE  (10 min)
----------------------------------------------------------------
Draw a large number line on the board:

  ←────|────|────|────|────|────|────|────|────|────|────→
      −5   −4   −3   −2   −1    0    1    2    3    4    5

Key teaching points (learners copy into exercise books):
  RULE 1: Numbers to the RIGHT are GREATER than numbers to the LEFT.
           −3 > −7  (−3 is further right)    |    −1 > −4

  RULE 2: Zero is neither positive nor negative.

  RULE 3: ABSOLUTE VALUE = distance from zero (always positive or zero)
           |−5| = 5   |   |3| = 3   |   |0| = 0

Board examples — "Which is larger?":
  (a) −3 or −7?   → −3     (b) −1 or 0?   → 0     (c) −6 or −2?  → −2

Ordering task (board):
  Input:  4, −2, 0, −6, 1, −1
  Answer: −6, −2, −1, 0, 1, 4

PHASE 3 — KINESTHETIC: THE HUMAN NUMBER LINE  (12 min)
----------------------------------------------------------------
Setup: Lay rope/tape across the room from −10 to +10; mark key intervals.
       Give each learner a number card.

Activity steps:
  Step 1: All learners stand at their number position on the floor.
  Step 2: "All negative integers — raise your right hand."
  Step 3: "Arrange yourselves in order from smallest to largest."
  Step 4: Q&A: "Who is standing to the left of −3?" / "Who is at zero?"
  Step 5: Addition on the line:
    "Start at −4. Move 7 steps RIGHT. Where do you land?" → 3
    "Start at 2.  Move 5 steps LEFT.  Where do you land?" → −3

PHASE 4 — INDIVIDUAL PRACTICE AND CLOSURE  (11 min)
----------------------------------------------------------------
Individual practice (8 min):

  TIER 1 (Support — with printed number-line strip):
    1. Mark on the number line: −4, 2, −7, 0, 5
    2. Which is larger: −3 or −1?
    3. List all integers between −3 and 2.

  TIER 2 (Core):
    1. Arrange in order: −5, 2, −8, 0, 1, −2, 7
    2. Insert < or >: (a) −6 ___ −2   (b) −1 ___ 0   (c) 4 ___ −4
    3. "A submarine descends from 0 m to −120 m. Write as an integer."
    4. "Temperature rises from −7°C to 3°C. What is the total rise?"

  TIER 3 (Extension — all Tier 2 tasks plus):
    5. If |x| = 5, what are the possible values of x?
    6. List all integers n such that −4 < n ≤ 2.
    7. Design your own real-world integer problem with a full solution.

Exit Ticket (3 min — collect before learners leave):

  Name: _________________  Date: ___________
  1. The integer that is 4 less than −1:  _____
  2. Which is smaller: −8 or −5? _____   Explain: ________________________
  3. One real-life situation that uses negative integers: _________________
`;
      return [
        hdr, body,
        docFooter('Lesson Plan — Integers and the Number Line (Grade 7)'),
      ].join('\n');
    },
  },

  // ── LP 4 ───────────────────────────────────────────────
  {
    id: 'lp-sci8-forces',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Newton\'s Laws of Motion (Grade 8 Integrated Science)',
    grade: 'Grade 8', subject: 'Integrated Science', terms: 'Term 2',
    desc: 'Full 80-minute lesson plan for Newton\'s Three Laws of Motion. Includes hands-on demonstrations (coin-card, balloon rocket), real-world examples, structured pair activities, and a performance rubric.',
    topics: ['Newton\'s Laws','Forces','Inertia','F = ma','Action-Reaction'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Integrated Science', '8', null,
        'Term 2', '2025 / 2026', '80 minutes (double lesson)', '—',
        'KICD Integrated Science Grade 8 Curriculum Design (July 2025)'
      );
      const body = `
STRAND     : 1.0 Forces and Motion

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
  a) STATE  [V] Newton's First Law
            [O] and give 3 examples of inertia from everyday life                [C]

  b) APPLY  [V] Newton's Second Law (F = ma)
            [O] to calculate force, mass, or acceleration in problems            [C]

  c) STATE  [V] Newton's Third Law
            [O] and identify action-reaction pairs in given situations            [C]

2. CORE COMPETENCIES
================================================================
  [✓] Critical Thinking & Problem Solving — apply F=ma to real problems
  [✓] Communication & Collaboration       — pair identification tasks; class discussion
  [✓] Learning to Learn                   — self-reflection in exit slip

3. LEARNING RESOURCES
================================================================
  • Whiteboard / chalkboard with markers / chalk
  • Postcard-sized card, a coin, and a cup (Demonstration 1)
  • Long balloons, string, tape, straw (Demonstration 2 — balloon rocket)
  • Spring balances, trolleys, masses, stopwatch (for F=ma activity)
  • Worksheets with F=ma triangle and practice problems
  • Exit-slip cards — one per learner

4. LESSON DEVELOPMENT
================================================================

INTRODUCTION — DAILY EXPERIENCE HOOK  (8 min)
----------------------------------------------------------------
Ask: "Have you ever been in a vehicle that braked suddenly?
      What happened to your body — and why?"
Ask: "Have you pushed a heavy wheelbarrow vs an empty one?
      What difference did you feel and why?"
Ask: "When you kick a football, what do you feel in your foot?"

Tell the class: "These three observations are explained by three laws
discovered by Sir Isaac Newton in 1687. By the end of this lesson,
you will know, state, and apply all three."

NEWTON'S FIRST LAW — LAW OF INERTIA  (20 min)
----------------------------------------------------------------
Statement: "An object at rest remains at rest, and an object in motion
continues in motion at the same speed and in the same direction,
UNLESS acted upon by an unbalanced external force."

DEMONSTRATION 1 — Coin-and-Card Trick:
  Materials: postcard-sized card; a coin; a smooth-rimmed cup.
  Place the card flat over the cup. Put a coin on the card's centre.
  Flick the card quickly sideways.
  → The coin drops INTO the cup.
  WHY? The coin was at rest; its inertia resisted being moved;
       only the card moved (small contact time; large friction difference).

Real-life examples (class discussion — write on board):
  • Seat belts: your body continues forward when the car brakes (First Law)
  • Spacecraft: keeps moving without fuel in the vacuum of space (no friction)
  • Shaking mud off shoes: shoes stop suddenly; mud keeps moving forward

Learners write in exercise books:
  Newton's First Law: _______________________________________________
  My own example from daily life: ___________________________________

NEWTON'S SECOND LAW — F = ma  (20 min)
----------------------------------------------------------------
Statement: "The acceleration of an object is directly proportional to the net
force acting on it and inversely proportional to its mass."

Formula:   F = m × a
Units:     Force in Newtons (N) | mass in kilograms (kg) | acceleration in m/s²

The F-m-a Triangle (draw on board — helps learners rearrange):
         ┌────┐
         │ F  │
         ├────┤
         │m × a│
         └────┘

WORKED EXAMPLE 1:  Find force.
  A car of mass 800 kg accelerates at 3 m/s².
  F = ma = 800 × 3 = 2,400 N  ✓

WORKED EXAMPLE 2:  Find acceleration.
  A force of 50 N acts on a mass of 5 kg.
  a = F/m = 50 / 5 = 10 m/s²  ✓

WORKED EXAMPLE 3:  Find mass.
  A force of 120 N produces an acceleration of 4 m/s².
  m = F/a = 120 / 4 = 30 kg  ✓

Class practice (5 min): each learner solves 4 problems using the F=ma triangle.
Peer mark using answers on board.

NEWTON'S THIRD LAW — ACTION AND REACTION  (15 min)
----------------------------------------------------------------
Statement: "For every action force, there is an equal and opposite reaction force."

Key emphasis — the two forces in a Third Law pair:
  • Act on DIFFERENT objects  (NOT on the same object)
  • Are EQUAL in magnitude
  • Are OPPOSITE in direction

DEMONSTRATION 2 — Balloon Rocket:
  Thread a long string across the room. Thread a straw on it.
  Inflate a long balloon; hold the open end. Tape it to the straw.
  Release.
  ACTION:   balloon pushes air backward.
  REACTION: air pushes balloon (and straw) forward along the string.`;

      const tableNote = '\nLearners complete this table in pairs:\n';
      const tC = ['SITUATION','ACTION FORCE','REACTION FORCE'];
      const tR = [
        ['Person pushes a wall',         'Person pushes wall',       'Wall pushes person back (equal and opposite)'],
        ['Rocket expels exhaust downward','Rocket pushes gas down',   'Gas pushes rocket upward'],
        ['Swimmer pushes water backward', 'Swimmer pushes water back','Water pushes swimmer forward'],
        ['Bird flaps wings downward',     'Wings push air down',      'Air pushes bird upward'],
        ['You jump off a small boat',     'Your feet push boat back', 'Boat pushes you forward'],
      ];

      const closure = `
CONSOLIDATION AND CLOSURE  (17 min)
----------------------------------------------------------------
Individual task (12 min):
  1. State which Newton's law applies to each situation:
     (a) A ball rolls along the floor until friction stops it.
     (b) Doubling the force on an object doubles its acceleration.
     (c) You feel a backward push when you fire a ball from a cannon.

  2. A netball player of mass 55 kg jumps with an upward acceleration
     of 2.5 m/s². Calculate the net upward force the ground exerts on her.
     [Answer: F = 55 × 2.5 = 137.5 N upward]

  3. Identify the action-reaction pair in this scenario:
     "Amina claps her hands together."

Exit Slip (5 min — collect before learners leave):
  "The Newton's law I found easiest to understand is _____ because _____.
   The law I still want to understand better is _____ because _____."

5. ASSESSMENT RUBRIC — NEWTON'S LAWS APPLICATION TASK  (20 marks)
================================================================`;

      const rubC = ['CRITERION','4 — EXCEEDING','3 — MEETING','2 — APPROACHING','1 — BELOW'];
      const rubR = [
        ['Correctly states all three Newton\'s Laws','All three stated precisely with conditions','All three stated; minor wording issues','Two laws stated correctly','One or fewer correct'],
        ['Applies F=ma correctly','All calculation steps shown; correct units','Mostly correct; minor arithmetic error','Formula used but errors in rearrangement','Formula not applied correctly'],
        ['Identifies action-reaction pairs','All pairs identified with correct objects named','Most pairs correct; one incomplete','Some pairs partially correct','No correct pair identified'],
        ['Gives real-life examples','3 original, specific examples per law','2 examples per law; all relevant','1 example per law; some vague','Examples not relevant to the law stated'],
        ['Demonstrates understanding in exit slip','Deep, specific metacognitive reflection','Genuine reflection on one law','Superficial but present','Absent or irrelevant'],
      ];

      return [
        hdr, body, tableNote, makeTable(tC, tR), closure,
        '\n', makeTable(rubC, rubR),
        '\nTOTAL SCORE: ______ / 20      GRADE: EE / ME / AE / BE\n',
        docFooter('Lesson Plan — Newton\'s Laws of Motion (Grade 8 Integrated Science)'),
      ].join('\n');
    },
  },

  // ── LP 5 ───────────────────────────────────────────────
  {
    id: 'lp-math11-diff',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Introduction to Differentiation (Grade 11 Mathematics)',
    grade: 'Grade 11', subject: 'Mathematics', terms: 'Term 1',
    desc: 'Complete 80-minute lesson introducing calculus differentiation to Grade 11 STEM learners. Covers gradient as a limit, the power rule, and tangent line equations. Includes full worked examples, tiered practice, and an inquiry closure task.',
    topics: ['Differentiation','Power Rule','Gradient','Calculus',
             'Tangent Lines','Rates of Change'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Core Mathematics', '11', 'STEM',
        'Term 1', '2025 / 2026', '80 minutes (double lesson)', '—',
        'KICD Core Mathematics Grade 11 Curriculum Design (July 2025)'
      );
      const body = `
STRAND     : 2.0 Calculus
SUB-STRAND : 2.1 Differentiation — Introduction

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
  a) EXPLAIN      [V] differentiation as the gradient function
                  [O] using the concept of a limit as δx → 0                    [C]

  b) DIFFERENTIATE[V] polynomial functions
                  [O] using the power rule: d/dx(xⁿ) = nxⁿ⁻¹                  [C]

  c) FIND         [V] the gradient of a curve at a specific point
                  [O] by substituting into the derivative f'(x)                 [C]

  d) DETERMINE    [V] the equation of a tangent line to a curve at a given point
                  [O] using the gradient and point-slope form                    [C]

2. CORE COMPETENCIES
================================================================
  [✓] Critical Thinking & Problem Solving — derive rules; apply to tangent problems
  [✓] Learning to Learn                   — connect new calculus to prior algebra
  [✓] Communication                       — explain differentiation in own words (closure)

3. PREREQUISITE KNOWLEDGE
================================================================
  • Gradient of a straight line: m = (y₂−y₁)/(x₂−x₁)
  • Expanding brackets and collecting like terms
  • Index laws: xⁿ × xᵐ = xⁿ⁺ᵐ; n × xⁿ⁻¹
  • Equation of a line: y − y₁ = m(x − x₁)

4. LESSON DEVELOPMENT
================================================================

INTRODUCTION — GRADIENT REVIEW AND MOTIVATION  (10 min)
----------------------------------------------------------------
Review: "What is the gradient of the straight line y = 3x + 2?" → 3 (constant)

Ask: "For a curve like y = x², is the gradient constant?"
Draw y = x² on the board. Show: at x=0 the curve is flat; at x=2 it is steep.
Challenge: "How do we find the EXACT gradient at a SINGLE point on a curve?"
→ This motivates the need for differentiation.

DEVELOPING THE DERIVATIVE FROM FIRST PRINCIPLES  (15 min)
----------------------------------------------------------------
For y = x², find the gradient at x = 2:

  STEP 1: Take two nearby points on the curve y = x²:
          Point A: (2, 4)
          Point B: (2+δx, (2+δx)²)   where δx is a tiny increase in x

  STEP 2: Gradient of chord AB = Δy/Δx
          = [(2+δx)² − 4] / [(2+δx) − 2]
          = [4 + 4δx + (δx)² − 4] / δx
          = [4δx + (δx)²] / δx
          = 4 + δx

  STEP 3: As δx → 0:  gradient → 4

  ∴ The gradient of y = x² at the point where x = 2 is 4.

  The DERIVATIVE is defined as:
    dy/dx = lim(δx→0) [f(x+δx) − f(x)] / δx

  For y = x²:   dy/dx = 2x
  Check at x=2: dy/dx = 2(2) = 4  ✓

THE POWER RULE  (20 min)
----------------------------------------------------------------
General rule — the most important result in this lesson:

  If  y = xⁿ,   then   dy/dx = nxⁿ⁻¹
  (Bring down the power as a coefficient; reduce the power by 1)

WORKED EXAMPLES:
  y = x⁵             →  dy/dx = 5x⁴
  y = x³              →  dy/dx = 3x²
  y = x               →  dy/dx = 1          (since 1·x⁰ = 1)
  y = 7  (constant)   →  dy/dx = 0          (a constant has zero gradient)
  y = 4x³             →  dy/dx = 12x²       (multiply coefficient × power)
  y = 3x² + 5x − 2   →  dy/dx = 6x + 5     (differentiate term by term)
  y = 2x⁴ − x³ + 7x  →  dy/dx = 8x³ − 3x² + 7

NOTATION NOTE: dy/dx, f'(x), and y' all mean the same thing — the derivative.

WORKED EXAMPLE — Gradient at a specific point:
  Find the gradient of  y = x³ − 3x + 2  at the point where x = 2.
    Step 1: dy/dx = 3x² − 3
    Step 2: At x = 2:   gradient = 3(4) − 3 = 12 − 3 = 9  ✓

EQUATION OF A TANGENT LINE  (10 min)
----------------------------------------------------------------
A tangent line touches a curve at exactly one point and has the same
gradient as the curve at that point.

WORKED EXAMPLE:
  Find the equation of the tangent to y = x² + 3x at the point where x = 1.

  Step 1: Find the y-coordinate:   y = 1 + 3 = 4     → point is (1, 4)
  Step 2: Differentiate:           dy/dx = 2x + 3
  Step 3: Gradient at x=1:         m = 2(1) + 3 = 5
  Step 4: Point-slope form:        y − 4 = 5(x − 1)
                                   y = 5x − 1  ✓

PRACTICE TASK  (20 min)
----------------------------------------------------------------
CORE (every learner completes this):
  1. Differentiate:
     (a) y = x⁶             (b) y = 4x³ − 3x² + 2       (c) y = 5x − 7
  2. Find the gradient of  y = 2x³ − x²  at the point where x = 2.
  3. Find the equation of the tangent to  y = x² − 4x  at x = 3.

EXTENSION (for learners who complete core):
  4. The curve  y = x³ + ax² + b  passes through (1, 5) with gradient 7
     at that point. Find the values of a and b.
  5. Show that the tangent to  y = x²  at the point (t, t²)  has equation
     y = 2tx − t².

CLOSURE — ONE-SENTENCE EXPLANATION  (5 min)
----------------------------------------------------------------
Learners write in exercise books:
  "Differentiation is…  [complete in your own words in ONE sentence]."
Teacher cold-calls 3–4 learners to share their sentence aloud.
Collect exercise books to review written responses before next lesson.
`;
      return [
        hdr, body,
        docFooter('Lesson Plan — Introduction to Differentiation (Grade 11 Mathematics)'),
      ].join('\n');
    },
  },

  // ── LP 6 ───────────────────────────────────────────────
  {
    id: 'lp-math9-trig',
    cat: 'lesson', icon: '📝',
    title: 'Lesson Plan — Trigonometric Ratios: SOHCAHTOA (Grade 9)',
    grade: 'Grade 9', subject: 'Mathematics', terms: 'Term 2',
    desc: 'Complete 40-minute Grade 9 lesson plan introducing trigonometric ratios (sin, cos, tan) using SOHCAHTOA. Includes a physical triangle measurement activity, worked examples for finding sides and angles, differentiated tasks, and a self-check exit strip.',
    topics: ['Trigonometry','SOHCAHTOA','sin cos tan','Right Triangles',
             'Angles of Elevation','Calculator Skills'],
    content: () => {
      const hdr = docHeader(
        'LESSON PLAN', 'Mathematics', '9', null,
        'Term 2', '2025 / 2026', '40 minutes (single lesson)', '—',
        'KICD Mathematics Grade 9 Curriculum Design (July 2025)'
      );
      const body = `
STRAND     : 4.0 Trigonometry
SUB-STRAND : 4.1 Trigonometric Ratios

1. SPECIFIC LEARNING OUTCOMES (VOC MODEL)
================================================================
By the end of this lesson, the learner should be able to:

  a) LABEL   [V] the sides of a right-angled triangle
             [O] as Hypotenuse, Opposite, and Adjacent
             [C] relative to a specified acute angle

  b) STATE   [V] the three trigonometric ratios
             [O] sin θ = O/H, cos θ = A/H, tan θ = O/A
             [C] using the SOHCAHTOA mnemonic

  c) CALCULATE[V] unknown sides and angles in right-angled triangles
              [O] using the appropriate trigonometric ratio
              [C] with the aid of a scientific calculator in degree mode

2. PREREQUISITE KNOWLEDGE
================================================================
  • Pythagoras' theorem: a² + b² = c²  (Grade 8)
  • Labelling sides of a triangle (Grade 7–8)
  • Operating a scientific calculator: basic functions, sin, cos, tan, inverse keys

3. LEARNING RESOURCES
================================================================
  • Rulers, set squares, and protractors (one per pair)
  • Pre-drawn right triangles on card (3 different sizes, one set per pair)
  • Whiteboard / chalkboard
  • Scientific calculators (one per learner or one per pair)
  • Printed SOHCAHTOA reference cards — one per support learner
  • Worksheets (Tier 1, Tier 2, Tier 3)
  • Exit strips — one per learner (cut from A5 paper)

4. LESSON DEVELOPMENT
================================================================

PHASE 1 — INTRODUCTION AND PHYSICAL MEASUREMENT ACTIVITY  (12 min)
----------------------------------------------------------------
Distribute the pre-drawn right triangles to pairs.
Instruct: "Measure the three sides of each triangle using a ruler.
          Measure one of the acute angles using a protractor.
          Record your measurements in a table:"

  Triangle | Opposite side (O) | Adjacent side (A) | Hypotenuse (H) | Angle θ
  ─────────┼───────────────────┼───────────────────┼────────────────┼─────────
  Small    |                   |                   |                |
  Medium   |                   |                   |                |
  Large    |                   |                   |                |

Then instruct: "For each triangle, calculate:
          O/H  |   A/H   |   O/A
  What do you notice about O/H for all three triangles?"

Lead learners to discover: the ratios are approximately the same regardless
of the size of the triangle — they depend only on the angle θ.

Introduce the three ratios on the board:
  sin θ = Opposite / Hypotenuse     (SOH)
  cos θ = Adjacent / Hypotenuse     (CAH)
  tan θ = Opposite / Adjacent       (TOA)

MNEMONIC: SOH-CAH-TOA
  "Some Old Horses Carry A Heavy Top Overall Affection"
  (or create your own class mnemonic!)

PHASE 2 — CALCULATOR SKILLS AND WORKED EXAMPLES  (18 min)
----------------------------------------------------------------
CALCULATOR CHECK (3 min):
  Ensure all calculators are in DEGREE mode.
  Verification: sin 30° should display exactly 0.5.
  If not → MODE → choose degrees.

WORKED EXAMPLE 1 — Find a missing side (using sin):
  In right triangle ABC, angle A = 35°, hypotenuse AC = 12 cm.
  Find side BC (opposite to angle A).

    sin 35° = BC / 12
    BC = 12 × sin 35°
    BC = 12 × 0.5736
    BC ≈ 6.88 cm  ✓

WORKED EXAMPLE 2 — Find a missing side (using cos):
  In right triangle PQR, angle P = 48°, hypotenuse PR = 10 m.
  Find side PQ (adjacent to angle P).

    cos 48° = PQ / 10
    PQ = 10 × cos 48°
    PQ = 10 × 0.6691
    PQ ≈ 6.69 m  ✓

WORKED EXAMPLE 3 — Find a missing angle (inverse trig):
  In right triangle XYZ, XY = 5 cm (opposite), XZ = 8 cm (hypotenuse).
  Find angle X.

    sin X = 5 / 8 = 0.625
    X = sin⁻¹(0.625)
    X ≈ 38.7°  ✓

Learners copy all three worked examples into exercise books.
Ask 3 targeted questions to check understanding before the task.

PHASE 3 — INDIVIDUAL PRACTICE  (7 min)
----------------------------------------------------------------
  TIER 1 (Support — with SOHCAHTOA card and labelled diagram):
    1. In a right triangle: angle = 40°, hypotenuse = 10 cm.
       Find the opposite side.
    2. In a right triangle: opposite = 6, hypotenuse = 10.
       Find the angle.

  TIER 2 (Core):
    1. In △ABC (right angle at B): angle A = 52°, AB = 15 m. Find BC.
    2. In △PQR (right angle at Q): PQ = 7 cm, QR = 9 cm. Find angle P.
    3. A ladder 6 m long leans against a wall at an angle of 65° with
       the ground. How high up the wall does it reach?

  TIER 3 (Extension — all Tier 2 plus):
    4. A flagpole casts a shadow 12 m long when the angle of elevation
       of the sun is 38°. Find the height of the flagpole.
    5. From the top of a cliff 45 m high, the angle of depression to a
       boat is 28°. Find the horizontal distance of the boat from the
       base of the cliff.

PHASE 4 — CLOSURE: EXIT STRIP  (3 min)
----------------------------------------------------------------
  Name: ___________________  Date: ___________

  1. What does SOHCAHTOA stand for?
     S =       O =      H =      C =      A =      T =

  2. In a right triangle: angle θ = 60°, hypotenuse = 20 cm.
     (a) Which ratio uses θ and the hypotenuse to find the opposite? ___
     (b) The opposite side = _________________ cm.

  3. Confidence check (circle):   😕   😐   🙂   😃
`;
      return [
        hdr, body,
        docFooter('Lesson Plan — Trigonometric Ratios: SOHCAHTOA (Grade 9)'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     CURRICULUM DESIGNS  (2 documents)
  ──────────────────────────────────────────────────────── */

  // ── CD 1 ───────────────────────────────────────────────
  {
    id: 'cd-stem-g10-12',
    cat: 'curriculum', icon: '📖',
    title: 'CBC STEM Pathway — Curriculum Framework Summary (Grade 10–12)',
    grade: 'Grade 10–12', subject: 'STEM Pathway', terms: 'All Terms',
    desc: 'Comprehensive framework summary for the STEM Senior Secondary pathway — subject structure, strand overview for Mathematics and Computer Science, all four KICD learning outcome models, the 13 assessment tools, teacher qualification requirements, and pathway transition process.',
    topics: ['STEM Pathway','Strand Structure','Learning Outcomes',
             'Assessment Framework','Teacher Requirements','KICD 2025'],
    content: () => {
      const hdr = docHeader(
        'CBC STEM PATHWAY — CURRICULUM FRAMEWORK SUMMARY',
        '—', 'Grade 10–12', 'STEM', '—', '—', '—', '—',
        'KICD Curriculum Designs; TSC Standards; MoE 2-6-3-3 CBC Policy'
      );

      /* A. 2-6-3-3 structure */
      const structC = ['STAGE','LEVEL','DURATION','EXIT ASSESSMENT'];
      const structR = [
        ['Pre-Primary (PP1–PP2)', 'ECDE',        '2 years', 'Formative only'],
        ['Primary (Grade 1–6)',   'Junior Primary','6 years', 'KPSEA (Grade 6 exit)'],
        ['Junior Sec (Grade 7–9)','Junior Sec.',  '3 years', 'KJSEA (Grade 9 exit)'],
        ['Senior Sec (Grade 10–12)','Senior Sec.','3 years', 'KCSE (Grade 12 exit)'],
      ];

      /* B. Subject structure */
      const subjC = ['SUBJECT','PERIODS/WEEK','GROUP / STATUS'];
      const subjR = [
        ['Core Mathematics',            '8','Compulsory — all STEM learners'],
        ['English',                     '4','Compulsory — all STEM learners'],
        ['Kiswahili',                   '3','Compulsory — all STEM learners'],
        ['Physical Education & Sports', '2','Compulsory — all STEM learners'],
        ['Biology',                     '4','Group A — Pure Sciences (choose ≥ 2)'],
        ['Chemistry',                   '4','Group A — Pure Sciences (choose ≥ 2)'],
        ['Physics',                     '4','Group A — Pure Sciences (choose ≥ 2)'],
        ['Computer Science',            '4','Group B — Applied STEM (choose ≥ 1)'],
        ['Agriculture',                 '4','Group B — Applied STEM (choose ≥ 1)'],
        ['Applied Home Science',        '4','Group B — Applied STEM (choose ≥ 1)'],
      ];

      /* C. Subject combinations */
      const comboC = ['CAREER INTEREST','RECOMMENDED STEM COMBINATION'];
      const comboR = [
        ['Engineering / Architecture',        'Mathematics + Physics + Chemistry (+ CS optional)'],
        ['Medicine / Pharmacy / Nursing',     'Mathematics + Biology + Chemistry'],
        ['Computer Science / AI / Data Sci.', 'Mathematics + Physics or Chemistry + Computer Science'],
        ['Environmental / Agricultural Sci.', 'Mathematics + Biology + Agriculture + Chemistry'],
        ['Actuarial Science / Statistics',    'Mathematics + Physics + Computer Science'],
      ];

      /* D. Maths strand overview */
      const strandC = ['GRADE','STRAND','KEY CONTENT AREAS'];
      const mathR = [
        ['10','1.0 Numbers',          'Real Numbers, Surds, Indices, Logarithms'],
        ['10','2.0 Algebra',          'Quadratic Equations, Simultaneous Equations, Inequalities'],
        ['10','3.0 Measurements & Geometry','Trigonometry (Sine/Cosine Rules, Bearings), Reflection, Congruence'],
        ['10','4.0 Data & Probability','Statistics (Grouped/Ungrouped Data, Histograms, Ogives), Probability'],
        ['11','1.0 Further Algebra',  'Binomial Theorem, Partial Fractions, Sequences & Series'],
        ['11','2.0 Calculus',         'Differentiation (Power/Chain/Product/Quotient Rules), Maxima/Minima'],
        ['11','3.0 Vectors & Geometry','2D and 3D Vectors, Dot Product, Geometric Applications'],
        ['11','4.0 Further Statistics','Probability Distributions, Correlation, Regression'],
        ['12','1.0 Integral Calculus','Integration Rules, Definite Integrals, Areas, Volumes of Revolution'],
        ['12','2.0 Further Topics',   'Complex Numbers (intro), Matrices (2×2 and 3×3)'],
        ['12','3.0 Further Probability','Conditional Probability, Bayes\' Theorem, Normal Distribution'],
        ['12','4.0 Revision',         'Comprehensive Grade 10–12 KCSE Preparation'],
      ];

      /* D. CS strand overview */
      const csR = [
        ['10','1.0 Digital Literacy','Hardware/Software, Number Systems, Networks, Cybersecurity'],
        ['10','2.0 Programming','Computational Thinking, Python (Variables, Loops, Functions, Lists, Files)'],
        ['10','3.0 Web & Databases','HTML, CSS, SQL, Relational Database Design'],
        ['11','1.0 Advanced Programming','OOP in Python (Classes, Objects, Inheritance), Error Handling'],
        ['11','2.0 Algorithms','Sorting (Bubble, Selection, Insertion), Searching, Time Complexity'],
        ['11','3.0 Systems','Operating Systems, Cloud Computing, Emerging Tech (AI, IoT, Machine Learning)'],
        ['12','1.0 Software Development','SDLC, Agile Methodology, Version Control (Git), Testing'],
        ['12','2.0 Networking & Security','Network Security, Cryptography, Ethical Hacking (Introduction)'],
        ['12','3.0 Capstone Project','Full System Development Project; KCSE Examination Revision'],
      ];

      /* E. SLO models */
      const sloC = ['MODEL','BEST USED FOR','STRUCTURE','EXAMPLE'];
      const sloR = [
        ['VOC',   'Daily lesson SLOs',           'VERB + OBJECT + CONTEXT',              '"Differentiate [V] polynomial functions [O] using the power rule [C]"'],
        ['ABCD',  'Unit/scheme-level objectives', 'AUDIENCE + BEHAVIOUR + CONDITION + DEGREE', '"Grade 10 learners [A] will solve quadratic equations [B] in a 40-min CAT [C] scoring ≥60% [D]"'],
        ['SMART', 'Projects and portfolio goals', 'Specific, Measurable, Achievable, Relevant, Time-bound', '"By Week 12, each group will deliver a working Python app assessed at ME or above"'],
        ['Mager','Practical / lab tasks',         'PERFORMANCE + CONDITION + CRITERION', '"Write a sort function [P] using Python on a school computer [C] with correct output for 5+ test inputs [Cr]"'],
      ];

      /* F. Assessment tools */
      const toolC = ['NO.','ASSESSMENT TOOL','PRIMARY USE'];
      const toolR = [
        ['1', 'Observation Schedule',    'Practical activities; lab sessions; group work'],
        ['2', 'Oral Questions & Answers','Introduction, mid-lesson checks, closure'],
        ['3', 'Written Tests',           'CATs, end-of-unit tests, examinations'],
        ['4', 'Checklist',               'Skill/task completion verification (YES/NO)'],
        ['5', 'Rating Scale',            'Rating quality or frequency (1–4 or 1–5)'],
        ['6', 'Rubric',                  'Complex tasks: projects, essays, extended writing'],
        ['7', 'Portfolio',               'Documenting learner growth over a term/year'],
        ['8', 'Project',                 'Higher-order, real-world competency tasks (1–4 weeks)'],
        ['9', 'Anecdotal Records',       'Factual teacher observations during activities'],
        ['10','Peer Assessment',         'Collaborative work; presentations; group products'],
        ['11','Self-Assessment',         'Metacognition; exit slips; term reflections'],
        ['12','Questionnaire',           'Attitudes, learning preferences, prior knowledge surveys'],
        ['13','Interview / Viva Voce',   'Deep individual assessment; verifying project understanding'],
      ];

      /* G. Assessment weighting */
      const awC = ['COMPONENT','WEIGHT','MAIN INSTRUMENTS'];
      const awR = [
        ['Continuous Assessment Tests (CATs)','20%','Written Tests'],
        ['Projects & Portfolios',            '20%','Rubric, Portfolio, Project'],
        ['Community Service Learning',       '10%','Anecdotal Records, Observation Schedule'],
        ['School-Based Assessment (SBA)',    '10%','Checklist, Rating Scale, Interview'],
        ['KCSE External Examination',        '40%','KNEC Written Examination (Grade 12)'],
      ];

      /* H. Teacher requirements */
      const tcC = ['REQUIREMENT','REGULATORY SOURCE'];
      const tcR = [
        ['BEd (Science) or BSc + PGDE with relevant subject specialisation','TSC Handbook'],
        ['Registration with the Teachers Service Commission (TSC)',          'TSC Act of Kenya'],
        ['Valid TSC registration certificate (renewable every 3 years)',     'TSC Regulations'],
        ['Completion of KICD-facilitated CBC retooling training',            'KICD/MoE Circular'],
        ['Minimum 30 CPD hours per year (TSC requirement)',                  'TSC Professional Standards'],
        ['Current Certificate of Good Conduct (Police Clearance)',           'TSC Requirements'],
        ['CS teachers: demonstrated practical programming competence',       'KICD CS Curriculum Design'],
        ['Biology/Chemistry: current laboratory safety certification',       'MoE Laboratory Safety Circular'],
      ];

      return [
        hdr,
        '\nA. KENYA\'S 2-6-3-3 EDUCATION STRUCTURE\n================================================================\n',
        makeTable(structC, structR),
        '\nB. STEM PATHWAY — SUBJECT STRUCTURE (GRADES 10–12)\n================================================================\n',
        makeTable(subjC, subjR),
        '\nCOMMON STEM SUBJECT COMBINATIONS\n',
        makeTable(comboC, comboR),
        '\nC. CORE MATHEMATICS — STRAND OVERVIEW (GRADES 10–12)\n================================================================\n',
        makeTable(strandC, mathR),
        '\nD. COMPUTER SCIENCE — STRAND OVERVIEW (GRADES 10–12)\n================================================================\n',
        makeTable(strandC, csR),
        '\nE. THE FOUR KICD LEARNING OUTCOME MODELS\n================================================================\n',
        makeTable(sloC, sloR),
        '\nF. ALL 13 KICD ASSESSMENT TOOLS\n================================================================\n',
        makeTable(toolC, toolR),
        '\nG. ASSESSMENT WEIGHTING — STEM PATHWAY\n================================================================\n',
        makeTable(awC, awR),
        '\nH. TEACHER QUALIFICATION REQUIREMENTS\n================================================================\n',
        makeTable(tcC, tcR),
        '\nI. PATHWAY PLACEMENT PROCESS\n================================================================\n',
        '  1. KJSEA results at end of Grade 9 (strong Maths & Science strongly recommended)\n',
        '  2. School-based aptitude assessment administered by trained school counsellors\n',
        '  3. Learner and parent/guardian expressed preference\n',
        '  4. School resource capacity (laboratories, specialist teachers, equipment)\n\n',
        '  NOTE: The first cohort under the full 2-6-3-3 CBC structure entered Grade 10 in 2025.\n',
        '        The first CBC KCSE is expected approximately 2028.\n',
        '\n  For official KICD curriculum designs, visit: kicd.ac.ke\n',
        docFooter('CBC STEM Pathway — Curriculum Framework Summary (Grade 10–12)'),
      ].join('\n');
    },
  },

  // ── CD 2 ───────────────────────────────────────────────
  {
    id: 'cd-jss-overview',
    cat: 'curriculum', icon: '📖',
    title: 'Junior Secondary School — CBC Curriculum Overview (Grades 7–9)',
    grade: 'Grade 7–9', subject: 'All Subjects', terms: 'Overview',
    desc: 'Detailed curriculum overview for Junior Secondary School Grades 7–9 — all 13 subjects, strand structure for Mathematics and Integrated Science, KJSEA assessment framework, pathway selection guidance, and CBC core competencies. Essential reference for JSS teachers and parents.',
    topics: ['JSS Curriculum','Grade 7 8 9','KJSEA','All Subjects',
             'Pathway Selection','Assessment','Core Competencies'],
    content: () => {
      const hdr = docHeader(
        'JUNIOR SECONDARY SCHOOL — CBC CURRICULUM OVERVIEW',
        '—', 'Grade 7–9', '—', '—', '—', '—', '—',
        'KICD & MoE CBC 2-6-3-3 Policy'
      );

      const subjC = ['NO.','SUBJECT','PERIODS/WEEK (APPROX.)','NOTES'];
      const subjR = [
        ['1', 'English',                              '5','Compulsory; language of instruction'],
        ['2', 'Kiswahili (and/or Sign Language)',      '5','Compulsory; national language'],
        ['3', 'Mathematics',                          '6','Compulsory; key KJSEA subject'],
        ['4', 'Integrated Science',                   '4','Compulsory; covers Biology, Chemistry, Physics'],
        ['5', 'Health Education',                     '2','Compulsory'],
        ['6', 'Social Studies',                       '3','Compulsory; covers Geography and History'],
        ['7', 'Religious Education (CRE/IRE/HRE)',    '2','Compulsory; choose one denomination'],
        ['8', 'Creative Arts & Design',               '3','Compulsory; covers Art, Music, Craft'],
        ['9', 'Sports & Physical Education',          '3','Compulsory'],
        ['10','Pre-Technical & Pre-Career Education', '4','Compulsory; covers technology, career awareness'],
        ['11','Home Science',                         '2','Where offered; practical life skills'],
        ['12','Agriculture',                          '2','Where offered; linked to food and environment'],
        ['13','Foreign Language (French/German/Arabic)','2','Optional — where a trained teacher is available'],
      ];

      const mathC = ['GRADE','STRAND','KEY CONTENT'];
      const mathR = [
        ['7','1.0 Numbers',        'Whole Numbers (place value, HCF, LCM), Integers, Fractions, Decimals, Percentages'],
        ['7','2.0 Measurements',   'SI units, Length, Area, Perimeter, Volume, Time, Money'],
        ['7','3.0 Geometry',       'Lines and Angles, Triangles, Quadrilaterals, Circles (basic)'],
        ['7','4.0 Algebra',        'Algebraic Expressions, Like Terms, Simple Linear Equations'],
        ['7','5.0 Data Handling',  'Data Collection, Mean, Mode, Bar Charts, Pie Charts'],
        ['8','1.0 Numbers',        'Number Bases (binary, octal, hex), Square/Cube Roots, Ratios, Financial Maths'],
        ['8','2.0 Measurements',   'Pythagoras\' Theorem, Circles (arc, sector, area), Surface Area, Volume of Solids'],
        ['8','3.0 Geometry',       'Transformations: Reflection, Rotation, Translation, Enlargement'],
        ['8','4.0 Algebra',        'Simultaneous Linear Equations, Linear Inequalities, Linear Graphs'],
        ['8','5.0 Data Handling',  'Frequency Tables, Histograms, Frequency Polygons, Basic Probability'],
        ['9','1.0 Numbers',        'Sets and Venn Diagrams, Rational vs Irrational Numbers'],
        ['9','2.0 Algebra',        'Quadratic Expressions and Equations, Quadratic Graphs, Linear Programming (intro)'],
        ['9','3.0 Geometry',       'Coordinate Geometry, Circle Theorems, Congruence and Similarity'],
        ['9','4.0 Trigonometry',   'Trigonometric Ratios (SOHCAHTOA), Bearings, Heights and Distances'],
        ['9','5.0 Data Handling',  'Grouped Data, IQR, Box Plots, Combined Probability'],
      ];

      const sciC = ['GRADE','BRANCH','KEY CONTENT'];
      const sciR = [
        ['7','Biology',  'The Cell, Organisation of Living Things, Nutrition, Personal and Environmental Health'],
        ['7','Chemistry','Matter and Its Properties, States of Matter, Physical and Chemical Changes'],
        ['7','Physics',  'Forces (basic concepts), Energy (forms and transfer), Light (reflection, refraction)'],
        ['8','Biology',  'Reproduction in Plants and Animals, Genetics (basic), Ecosystems and Food Chains'],
        ['8','Chemistry','Mixtures and Separation Techniques, Acids, Bases and Salts (intro), Water Quality'],
        ['8','Physics',  'Forces and Motion (Newton\'s Laws, speed, acceleration, graphs), Waves and Sound'],
        ['9','Biology',  'Human Health, Disease Prevention, Environment and Sustainability'],
        ['9','Chemistry','Chemical Reactions, Electrochemistry (introduction), Organic Chemistry (basic)'],
        ['9','Physics',  'Electricity and Magnetism (basic circuits, Ohm\'s Law), Nuclear and Solar Energy'],
      ];

      const assessC = ['COMPONENT','WEIGHT','MAIN INSTRUMENT'];
      const assessR = [
        ['Continuous Assessment Tests (CATs)','30%','Written Tests (2–3 per term per subject)'],
        ['Project Work',                      '20%','Rubric, Portfolio'],
        ['Community Service Learning',         '10%','Anecdotal Records, Observation Schedule'],
        ['School-Based Assessment (SBA)',      '10%','Oral Q&A, Checklist, Portfolio'],
        ['KJSEA (Grade 9 external assessment)','30%','KNEC Written Assessment'],
      ];

      const scaleC = ['CODE','DESCRIPTION','MARKS RANGE'];
      const scaleR = [
        ['EE','Exceeding Expectations', '75–100%'],
        ['ME','Meeting Expectations',   '50–74%'],
        ['AE','Approaching Expectations','25–49%'],
        ['BE','Below Expectations',     '0–24%'],
      ];

      const compC = ['NO.','CBC CORE COMPETENCY','WHAT IT MEANS IN PRACTICE'];
      const compR = [
        ['1','Communication & Collaboration', 'Clearly expressing ideas; working effectively with others'],
        ['2','Critical Thinking & Problem Solving','Analysing situations; generating creative, evidence-based solutions'],
        ['3','Creativity & Imagination',      'Producing original ideas; thinking beyond standard approaches'],
        ['4','Digital Literacy',              'Using technology responsibly; finding and evaluating digital information'],
        ['5','Citizenship',                   'Respecting rights; contributing positively to community and nation'],
        ['6','Learning to Learn',             'Understanding how one learns; setting learning goals; self-monitoring'],
        ['7','Self-Efficacy',                 'Believing in one\'s ability; persisting through challenges; taking initiative'],
      ];

      return [
        hdr,
        '\nA. OVERVIEW OF JUNIOR SECONDARY SCHOOL\n================================================================\n',
        '  Duration         : 3 years (Grades 7, 8, and 9)\n',
        '  Entry Requirement: Successful completion of Grade 6 Primary School (KPSEA results)\n',
        '  Exit Assessment  : Kenya Junior School Education Assessment (KJSEA) at end of Grade 9\n',
        '  Location         : JSS or co-located within existing secondary school campuses\n\n',
        '  PURPOSE: Broad general education; develop core competencies; explore aptitudes;\n',
        '  prepare learners for Senior Secondary pathway selection. No streaming in JSS.\n\n',
        '\nB. SUBJECTS OFFERED IN JUNIOR SECONDARY SCHOOL\n================================================================\n',
        makeTable(subjC, subjR),
        '\nC. MATHEMATICS — STRAND STRUCTURE BY GRADE\n================================================================\n',
        makeTable(mathC, mathR),
        '\nD. INTEGRATED SCIENCE — STRAND STRUCTURE BY GRADE\n================================================================\n',
        makeTable(sciC, sciR),
        '\nE. JSS ASSESSMENT FRAMEWORK\n================================================================\n',
        makeTable(assessC, assessR),
        '\nKICD REPORTING SCALE\n',
        makeTable(scaleC, scaleR),
        '\nF. CBC CORE COMPETENCIES DEVELOPED IN JSS\n================================================================\n',
        makeTable(compC, compR),
        '\nG. CBC CORE VALUES PROMOTED IN JSS\n================================================================\n',
        '  Responsibility | Respect | Integrity | Excellence | Care |\n',
        '  Honesty | Diligence | Patriotism | Social Justice | Inclusivity\n',
        '\n  For official curriculum designs and teacher guides, visit: kicd.ac.ke\n',
        docFooter('Junior Secondary School — CBC Curriculum Overview (Grades 7–9)'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     ASSESSMENT TOOLS  (3 documents)
  ──────────────────────────────────────────────────────── */

  // ── AT 1 ───────────────────────────────────────────────
  {
    id: 'rubric-project-universal',
    cat: 'assessment', icon: '📊',
    title: 'Universal Project Assessment Rubric — All Subjects & Grades',
    grade: 'All Grades', subject: 'All Subjects', terms: 'All Terms',
    desc: 'Professional 40-mark rubric for assessing any CBC project or extended task, covering all 7 core competencies plus content quality criteria. Includes a learner self-assessment strip and teacher comment section. Print-ready.',
    topics: ['Rubric','Core Competencies','Project Assessment','Self-Assessment'],
    content: () => {
      const hdr = docHeader(
        'UNIVERSAL CBC PROJECT ASSESSMENT RUBRIC',
        'All Subjects', 'All Grades', null, 'All Terms', '—', '—', '—',
        'KICD Assessment Guidelines; CBC Core Competency Framework'
      );
      const intro = `
Applicable to: Any subject, Grade 7–12, any project or extended task
Total Marks  : 40     Scoring: 4 = Exceeding | 3 = Meeting | 2 = Approaching | 1 = Below

LEARNER DETAILS
================================================================
  Full Name    : _______________________________  Grade   : ________
  Subject      : _______________________________  Date    : ________
  Project Title: ___________________________________________________
  Teacher      : _______________________________  Term    : ________
  Date Assigned: _______________________________  Due Date: ________

`;
      const rubC = ['CRITERION','4 — EXCEEDING (EE)','3 — MEETING (ME)',
                    '2 — APPROACHING (AE)','1 — BELOW (BE)','SCORE'];

      const secARows = [
        ['1. Communication & Collaboration',
         'Leads group proactively; multiple communication modes used; builds constructively on others\' ideas; all members engaged',
         'Contributes meaningfully; respects all members; follows agreed group roles with minimal prompting',
         'Participates mainly when directed; occasional disengagement from group tasks',
         'Little participation; does not demonstrate awareness of others\' contributions',
         '__ / 4'],
        ['2. Critical Thinking & Problem Solving',
         'Independently identifies a complex, multi-faceted problem; analyses from 2+ perspectives; proposes innovative, well-justified solution',
         'Logical, relevant solution with adequate justification; applies subject knowledge competently',
         'Surface-level analysis; solution present but lacks adequate reasoning or justification',
         'Cannot clearly identify the problem or apply relevant subject knowledge',
         '__ / 4'],
        ['3. Creativity & Imagination',
         'Original, innovative ideas not found in textbooks; approached from a uniquely creative angle throughout',
         'Commendable creative input; some original ideas; extends beyond basic requirements in at least one area',
         'Mostly follows a provided template; some evidence of individual interpretation',
         'Minimal reproduction of examples or templates; no original ideas evident',
         '__ / 4'],
        ['4. Digital Literacy',
         'Advanced skill with digital tools; adds clear value; correctly cites all digital sources; ethical, responsible use throughout',
         'Competent use of required digital tools; correctly cites digital sources; appropriate for the task',
         'Basic digital tools with some errors; some sources not cited properly',
         'Digital tools not used or incorrectly used; no evidence of responsible digital citizenship',
         '__ / 4'],
        ['5. Citizenship',
         'Clearly addresses a real community, national, or global need; sophisticated civic awareness; evidence of ethical decision-making',
         'Clear, well-articulated connection to community or Kenyan identity; general civic responsibility',
         'Limited community connection; civic awareness not integrated meaningfully into project',
         'No connection to community or society; no demonstrated civic responsibility',
         '__ / 4'],
        ['6. Learning to Learn (Metacognition)',
         'Deep, specific self-reflection on what AND HOW it was learned; shows how teacher or peer feedback was incorporated',
         'Genuine self-reflection addressing the learning process; acknowledges both strengths and weaknesses honestly',
         'Self-reflection present but superficial (e.g. "I enjoyed this task"); limited genuine self-awareness',
         'No self-reflection included, or the reflection is entirely irrelevant to learning',
         '__ / 4'],
        ['7. Self-Efficacy',
         'Confident, independent execution; persisted through challenges; evident pride and ownership of final product',
         'Completed project with appropriate support; generally self-motivated; met all agreed deadlines',
         'Required regular teacher prompting; submitted incomplete work or missed a deadline',
         'Did not complete project or required continuous direct teacher guidance throughout',
         '__ / 4'],
      ];

      const secBRows = [
        ['8. Subject Knowledge Accuracy',
         'All facts, concepts, calculations, and data are accurate and well-sourced; no errors or misconceptions',
         'Mostly accurate; minor errors present that do not significantly affect the overall quality',
         'Some significant errors or misconceptions that affect the quality of the work noticeably',
         'Major inaccuracies throughout; fundamental misunderstanding of the subject content',
         '__ / 4'],
        ['9. Depth and Breadth of Coverage',
         'Covers topic comprehensively including advanced aspects clearly beyond the minimum required',
         'Covers all required aspects at the expected level for the grade',
         'Covers most aspects but omits important elements or sub-topics',
         'Coverage is very superficial or significantly incomplete',
         '__ / 4'],
        ['10. Presentation and Organisation',
         'Exceptionally well-organised; logical structure; visually impressive; professionally presented; all sections clearly titled',
         'Well-organised with a clear structure that aids the reader\'s or viewer\'s understanding',
         'Some structure evident but presentation is inconsistent or partially unclear',
         'Disorganised; very difficult for the reader or viewer to follow',
         '__ / 4'],
      ];

      const scoring = `
SCORING SUMMARY
================================================================
  Section A — Core Competencies (7 criteria × 4 marks) : ________ / 28
  Section B — Content Quality   (3 criteria × 4 marks) : ________ / 12
  ─────────────────────────────────────────────────────────────────────
  GRAND TOTAL                                          : ________ / 40

  PERFORMANCE LEVEL:
    36–40 marks  : EE — Exceeding Expectations
    28–35 marks  : ME — Meeting Expectations
    16–27 marks  : AE — Approaching Expectations
     0–15 marks  : BE — Below Expectations

Teacher's overall comment:
______________________________________________________________________________
______________________________________________________________________________

Next steps / recommendations for this learner:
______________________________________________________________________________

Signature: ______________________  Date: _______________

================================================================
LEARNER SELF-ASSESSMENT STRIP
(Teacher: detach and give to learner BEFORE you score; return after)
================================================================
Name: _________________________  Project: ______________________________

1. The part of this project I am most proud of is:
   __________________________________________________________________________

2. One thing I would do differently if I did this project again:
   __________________________________________________________________________

3. The core competency I demonstrated most strongly (circle one):
   Communication | Critical Thinking | Creativity | Digital Literacy |
   Citizenship   | Learning to Learn | Self-Efficacy

4. My evidence for the competency I circled above:
   __________________________________________________________________________

5. I rate my effort on this project (circle one):
   ★☆☆☆☆    ★★☆☆☆    ★★★☆☆    ★★★★☆    ★★★★★
`;
      return [
        hdr, intro,
        'SECTION A — CORE COMPETENCIES  (7 criteria × 4 marks = 28 marks)\n================================================================\n',
        makeTable(rubC, secARows),
        '\nSECTION B — CONTENT QUALITY  (3 criteria × 4 marks = 12 marks)\n================================================================\n',
        makeTable(rubC, secBRows),
        scoring,
        docFooter('Universal Project Assessment Rubric — All Subjects & Grades'),
      ].join('\n');
    },
  },

  // ── AT 2 ───────────────────────────────────────────────
  {
    id: 'rubric-oral-all',
    cat: 'assessment', icon: '📊',
    title: 'Oral Assessment Rubric + Peer Assessment Form (All Subjects)',
    grade: 'All Grades', subject: 'All Subjects', terms: 'All Terms',
    desc: 'Complete oral assessment rubric for CBC presentations, debates, and viva voce assessments — 20-mark teacher rubric with 5 detailed criteria, a structured peer assessment form, and a self-reflection strip.',
    topics: ['Oral Assessment','Presentations','Debates','Peer Assessment','Self-Reflection'],
    content: () => {
      const hdr = docHeader(
        'CBC ORAL ASSESSMENT RUBRIC AND PEER ASSESSMENT FORM',
        'All Subjects', 'All Grades', null, 'All Terms', '—', '—', '—',
        'KICD Assessment Guidelines'
      );
      const intro = `
Applicable to: Oral presentations, debates, discussions, Q&A sessions, viva voce

PART A — TEACHER ASSESSMENT RUBRIC  (20 marks)

LEARNER DETAILS
================================================================
  Name    : ____________________________  Grade   : ______
  Subject : ____________________________  Date    : ______
  Topic   : ____________________________  Teacher : ______

`;
      const rubC = ['CRITERION','4 — EXCEEDING','3 — MEETING','2 — APPROACHING','1 — BELOW'];
      const rubR = [
        ['1. Content Knowledge (4 marks)',
         'Deep, well-organised knowledge; handles ALL follow-up questions confidently and accurately; extends beyond question asked',
         'Solid understanding of key concepts; handles most follow-up questions correctly',
         'Basic understanding but misses some details; struggles with some follow-up questions',
         'Significant knowledge gaps; cannot answer basic follow-up questions'],
        ['2. Communication Clarity (4 marks)',
         'Excellent clarity, pace, and varied intonation; precise subject vocabulary throughout; easily heard by the whole class',
         'Speaks clearly at appropriate pace; mostly correct subject vocabulary; audible to the class',
         'Sometimes unclear; pace too fast, too slow, or mumbled; limited subject vocabulary',
         'Very difficult to understand; barely audible; very limited vocabulary'],
        ['3. Organisation and Structure (4 marks)',
         'Compelling introduction; well-organised body with clear signposting; strong, memorable conclusion with closure',
         'Clear, logical structure with recognisable introduction, middle, and end',
         'Some structure evident but the presentation loses logical thread; conclusion weak or missing',
         'No discernible structure; ideas presented randomly; presentation abandoned before completion'],
        ['4. Engagement and Confidence (4 marks)',
         'Strong, regular eye contact; confident, purposeful body language; speaks without reading; presentation feels natural and well-rehearsed',
         'Good eye contact for most of presentation; generally self-assured; uses notes as reference only',
         'Reads from notes for majority of presentation; minimal eye contact; noticeably anxious',
         'Reads entirely from notes; no eye contact; very low confidence throughout'],
        ['5. Responding to Questions (4 marks)',
         'Answers all questions correctly and with added depth; extends beyond the specific question asked',
         'Answers most questions correctly; may need a moment but arrives at accurate answers',
         'Answers some questions; gives vague, incomplete, or partially incorrect responses to others',
         'Cannot respond meaningfully to most follow-up questions; mostly "I don\'t know"'],
      ];

      const scoring = `
TOTAL SCORE: ______ / 20

  16–20 : EE — Exceeding Expectations
  12–15 : ME — Meeting Expectations
   8–11 : AE — Approaching Expectations
   0–7  : BE — Below Expectations

Overall teacher comment:
______________________________________________________________________________

Recommendation / next steps:
______________________________________________________________________________

Signature: ______________________  Date: _______________

================================================================
PART B — PEER ASSESSMENT FORM  (learner-completed)
================================================================
Instructions: Listen carefully to your classmate's presentation.
Complete this form honestly and specifically. Vague comments do not help.

  I am assessing: _______________________  on topic: ______________________
  My name: _________________________  Date: _________________________

  1. Did they clearly explain the main topic?
     YES — in full detail  |  MOSTLY — some gaps  |  PARTLY  |  NOT CLEARLY

  2. Could you understand them easily throughout?
     YES — very clearly    |  MOSTLY — minor issues  |  SOMETIMES  |  NO

  3. ONE specific thing they did VERY WELL — be specific, not vague:
     ___________________________________________________________________________

  4. ONE specific suggestion that would make their presentation even better:
     ___________________________________________________________________________

  5. Rate their presentation overall (circle):   😕   😐   🙂   😃   🤩

================================================================
PART C — LEARNER SELF-REFLECTION  (completed after presentation)
================================================================
  Name: _______________________  Date: _______  Topic: ____________________

  1. The part of my presentation I am most satisfied with:
     ___________________________________________________________________________

  2. One thing I would prepare differently if I did this presentation again:
     ___________________________________________________________________________

  3. My overall preparation rating (circle):
     ★☆☆☆☆    ★★☆☆☆    ★★★☆☆    ★★★★☆    ★★★★★
`;
      return [
        hdr, intro, makeTable(rubC, rubR), scoring,
        docFooter('Oral Assessment Rubric + Peer Assessment Form (All Subjects)'),
      ].join('\n');
    },
  },

  // ── AT 3 ───────────────────────────────────────────────
  {
    id: 'rubric-portfolio',
    cat: 'assessment', icon: '📊',
    title: 'Portfolio Assessment Guide, Rubric & Self-Reflection Template',
    grade: 'All Grades', subject: 'All Subjects', terms: 'All Terms',
    desc: 'Complete guide to CBC learner portfolios — what to include, how to organise, a 24-mark teacher rubric, a term schedule, and a self-reflection template. Includes the KICD portfolio definition and annotation examples.',
    topics: ['Portfolio','Self-Assessment','Evidence of Learning','CBC Assessment','KICD Tools'],
    content: () => {
      const hdr = docHeader(
        'CBC PORTFOLIO ASSESSMENT GUIDE, RUBRIC & SELF-REFLECTION TEMPLATE',
        'All Subjects', 'All Grades', null, 'All Terms', '—', '—', '—',
        'KICD Assessment Guidelines'
      );
      const intro = `
A. WHAT IS A PORTFOLIO? (KICD DEFINITION)
================================================================
A portfolio is a PURPOSEFUL, ORGANISED, SELECTIVE collection of a learner's
work gathered over time. Unlike a folder that contains everything, a portfolio
contains CHOSEN pieces that together demonstrate:

  • ACHIEVEMENT  — the learner's best work at a point in time
  • GROWTH       — evidence of improvement from Term 1 to Term 3
  • REFLECTION   — the learner's own thinking about their learning journey
  • COMPETENCIES — evidence of multiple CBC core competencies across subjects

B. ANNOTATION GUIDE — HOW TO ANNOTATE EACH PIECE
================================================================
Each work sample must have a short annotation (3–5 sentences) answering:
  • WHAT is this piece? (title, date, subject, topic)
  • WHY did you choose to include it?
  • WHAT does it show about your learning?
  • WHAT could you improve about it now that you have learned more?

EXAMPLE ANNOTATION:
  "This is my CAT 2 answer paper in Mathematics (dated 15 March 2026) in
   which I scored 24/30. I chose to include it because it shows that I
   can now correctly solve quadratic equations using the formula — something
   I could not do at the start of the term. If I were to redo this test,
   I would check my discriminant calculations more carefully before deciding
   on the nature of the roots."
`;
      const checkC = ['NO.','COMPULSORY PORTFOLIO ITEM','INCLUDED (✓/✗)','ANNOTATION PRESENT (✓/✗)'];
      const checkR = [
        ['1', 'Cover page: name, grade, subject, school, academic year','',''],
        ['2', 'Table of contents with section titles and page numbers','',''],
        ['3', '"About Me as a Learner" — 1-page intro (written at start of year)','',''],
        ['4', 'At least THREE best-work samples from different topics (each annotated)','',''],
        ['5', 'At least TWO pieces showing revision or improvement (before & after)','',''],
        ['6', 'ONE project write-up or extended investigation report','',''],
        ['7', 'ONE community service documentation (photo + write-up OR letter OR log)','',''],
        ['8', 'TWO self-reflection entries (one per term — use template below)','',''],
        ['9', 'Selection of marked CATs or test strips with teacher comments','',''],
        ['10','End-of-year "What I Learned" final reflection (Year 3 only)','',''],
      ];

      const rubC = ['CRITERION','4 — EXCEEDING','3 — MEETING','2 — APPROACHING','1 — BELOW','SCORE'];
      const rubR = [
        ['Completeness',
         'All 10 compulsory items present; high quality throughout',
         'Most compulsory items present (7+ of 10)',
         'Some items present (4–6 of 10)',
         'Very few items (fewer than 4)',
         '__ / 4'],
        ['Organisation and Presentation',
         'Exceptional; logical structure; clear contents page; professional; easy to navigate',
         'Well-organised; clear contents; reader can find sections easily',
         'Basic organisation; section structure unclear; contents page incomplete',
         'Disorganised; very hard to navigate',
         '__ / 4'],
        ['Evidence of Growth',
         'Compelling, clearly documented learning growth over time; before/after pieces well-explained',
         'Growth is evident and documented with annotations',
         'Some evidence of change but poorly or inconsistently documented',
         'Growth is not demonstrated or documented at all',
         '__ / 4'],
        ['Quality of Annotations',
         'All pieces annotated deeply and insightfully; answers all four annotation questions',
         'Most pieces annotated thoughtfully; most annotation questions addressed',
         'Some pieces annotated but superficially; few annotation questions addressed',
         'No annotations present',
         '__ / 4'],
        ['Quality of Self-Reflections',
         'Both reflections deep and insightful; shows genuine metacognition; specific evidence cited',
         'Both reflections present and genuine; acknowledges growth and challenges honestly',
         'One reflection present; superficial or mostly descriptive',
         'No self-reflection present or relevant',
         '__ / 4'],
        ['Subject Content Accuracy',
         'All selected work is accurate; no factual errors or misconceptions detected',
         'Content mostly accurate; minor errors only; does not affect overall quality',
         'Some content errors in selected pieces that affect quality noticeably',
         'Major inaccuracies throughout selected work',
         '__ / 4'],
      ];

      const schedC = ['WHEN','PORTFOLIO ACTIVITY'];
      const schedR = [
        ['Week 2',  'Teacher introduces portfolio expectations; learners start cover page and About Me section'],
        ['Week 4',  'Learner assembles first draft; structured pair peer-review using checklist'],
        ['Week 8',  'Mid-term teacher check; written feedback provided (formative — NOT scored yet)'],
        ['Week 10', 'Learners write their Term self-reflection entry (use template below)'],
        ['Week 13', 'Final portfolio submission; teacher applies rubric and records score'],
      ];

      const scoring = `
SCORING SUMMARY
================================================================
  TOTAL: ________ / 24

  21–24 : EE — Exceeding Expectations
  16–20 : ME — Meeting Expectations
   9–15 : AE — Approaching Expectations
   0–8  : BE — Below Expectations

Overall comment:
______________________________________________________________________________

Next steps / recommendations for next term:
______________________________________________________________________________

Signature: ______________________  Date: _______________

================================================================
SELF-REFLECTION TEMPLATE  (learner completes ONCE PER TERM)
================================================================
  Name   : _________________________  Grade   : _______  Term    : _______
  Subject: _________________________  Teacher : _______  Date    : _______

  PART 1 — ACHIEVEMENT
  The piece of work in my portfolio I am most proud of:
    Title / description: _________________________________________________
    I chose this because: ________________________________________________
    _____________________________________________________________________

  PART 2 — GROWTH
  One area where I can see CLEAR IMPROVEMENT since the start of this term:
    _____________________________________________________________________
  Evidence in my portfolio (describe the specific piece):
    _____________________________________________________________________

  PART 3 — CHALLENGE
  Something I still find challenging in this subject:
    _____________________________________________________________________
  What I plan to do about it next term:
    _____________________________________________________________________

  PART 4 — CORE COMPETENCY EVIDENCE
  Tick the core competency I demonstrated most strongly this term:
    [ ] Communication & Collaboration   [ ] Critical Thinking & Problem Solving
    [ ] Creativity & Imagination        [ ] Digital Literacy
    [ ] Citizenship                     [ ] Learning to Learn
    [ ] Self-Efficacy

  The piece of work that shows this competency:
    _____________________________________________________________________
  Why it shows this competency:
    _____________________________________________________________________

  PART 5 — GOALS FOR NEXT TERM
  Three specific, measurable learning goals I am setting for next term:
    1. __________________________________________________________________
    2. __________________________________________________________________
    3. __________________________________________________________________
`;
      return [
        hdr, intro,
        '\nC. COMPULSORY ITEMS CHECKLIST  (learner self-checks before submission)\n================================================================\n',
        makeTable(checkC, checkR),
        '\nD. TEACHER ASSESSMENT RUBRIC  (24 marks)\n================================================================\n',
        makeTable(rubC, rubR),
        '\nE. TERM PORTFOLIO REVIEW SCHEDULE\n================================================================\n',
        makeTable(schedC, schedR),
        scoring,
        docFooter('Portfolio Assessment Guide, Rubric & Self-Reflection Template'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     STUDENT NOTES  (4 documents)
  ──────────────────────────────────────────────────────── */

  // ── SN 1 ───────────────────────────────────────────────
  {
    id: 'notes-math10-algebra',
    cat: 'notes', icon: '📘',
    title: 'Student Revision Notes — Grade 10 Mathematics: Algebra',
    grade: 'Grade 10', subject: 'Mathematics', terms: 'All Terms',
    desc: 'Comprehensive revision notes for Grade 10 Algebra: quadratic equations (factoring, completing the square, quadratic formula, discriminant), simultaneous equations, and quadratic inequalities. Includes worked examples, common errors table, and 10 practice problems with answers.',
    topics: ['Quadratic Equations','Completing the Square','Quadratic Formula',
             'Discriminant','Simultaneous Equations','Quadratic Inequalities'],
    content: () => {
      const hdr = `================================================================
  CBC BEST — STUDENT REVISION NOTES
  Subject : Core Mathematics — ALGEBRA
  Grade   : 10         Pathway : STEM
  Author  : Ronny Mwenda | cbcbest.netlify.app | bestronny.netlify.app
  © 2026 CBC Best — Free for classroom use.
================================================================
`;
      const body = `
SECTION 1: QUADRATIC EQUATIONS
================================================================
Standard form: ax² + bx + c = 0   (where a ≠ 0)

THREE METHODS FOR SOLVING QUADRATIC EQUATIONS:

────────────────────────────────────────────────────────────────
METHOD 1: FACTORISATION
────────────────────────────────────────────────────────────────

CASE A — When a = 1 (leading coefficient = 1):
  Find two numbers that MULTIPLY to c  AND  ADD to b.

  EXAMPLE 1: Solve x² + 5x + 6 = 0
    Need: multiply to +6, add to +5  →  2 and 3
    (x + 2)(x + 3) = 0   →   x = −2  OR  x = −3  ✓

  EXAMPLE 2: Solve x² − 9 = 0   [Difference of Squares]
    (x − 3)(x + 3) = 0   →   x = 3  OR  x = −3  ✓

CASE B — When a ≠ 1 (use the AC method):
  Multiply a × c. Find two numbers that multiply to (a×c) and add to b.
  Split the middle term; then factorise by grouping.

  EXAMPLE 3: Solve 2x² + 7x + 3 = 0
    a × c = 2 × 3 = 6;  find: multiply to 6, add to 7  →  1 and 6
    2x² + x + 6x + 3 = 0
    x(2x + 1) + 3(2x + 1) = 0
    (x + 3)(2x + 1) = 0   →   x = −3  OR  x = −½  ✓

────────────────────────────────────────────────────────────────
METHOD 2: COMPLETING THE SQUARE
────────────────────────────────────────────────────────────────
Steps:
  1. Rearrange: x² + (b/a)x = −c/a   [divide through by a if needed]
  2. Add (half the x-coefficient)² to BOTH sides
  3. Write left side as a perfect square (x + p)²
  4. Take square root of both sides (write ± always!)

  EXAMPLE 4: Solve x² + 6x + 7 = 0
    x² + 6x = −7
    Add (6/2)² = 9:   x² + 6x + 9 = −7 + 9 = 2
    (x + 3)² = 2
    x + 3 = ±√2
    x = −3 + √2   OR   x = −3 − √2  ✓  (exact surd form)

  EXAMPLE 5: Solve 2x² − 8x + 3 = 0
    Divide by 2:   x² − 4x + 3/2 = 0
    x² − 4x = −3/2
    Add (4/2)² = 4:   x² − 4x + 4 = −3/2 + 4 = 5/2
    (x − 2)² = 5/2
    x = 2 ± √(5/2) = 2 ± √10/2  ✓

────────────────────────────────────────────────────────────────
METHOD 3: THE QUADRATIC FORMULA
────────────────────────────────────────────────────────────────
Use for any quadratic — most reliable method for complicated coefficients.

              −b ± √(b² − 4ac)
    x  =    ───────────────────
                    2a

  EXAMPLE 6: Solve 2x² − 5x − 3 = 0   [a=2, b=−5, c=−3]

    x = [5 ± √(25 + 24)] / 4 = [5 ± √49] / 4 = [5 ± 7] / 4

    x = (5 + 7)/4 = 12/4 = 3   OR   x = (5 − 7)/4 = −2/4 = −½  ✓

────────────────────────────────────────────────────────────────
THE DISCRIMINANT:  Δ = b² − 4ac
────────────────────────────────────────────────────────────────
  Δ > 0  →  Two distinct real roots  (parabola crosses x-axis TWICE)
  Δ = 0  →  One repeated real root   (parabola TOUCHES x-axis once)
  Δ < 0  →  No real roots            (parabola does NOT touch x-axis)

  EXAMPLE: For 3x² + 2x + 5 = 0:
    Δ = (2)² − 4(3)(5) = 4 − 60 = −56 < 0   →   No real roots.

SECTION 2: SIMULTANEOUS EQUATIONS
================================================================

LINEAR–LINEAR (use elimination or substitution):

  EXAMPLE 7 (Elimination):
    2x + 3y = 12   …(i)
    4x −  y = 14   …(ii)

    Multiply (ii) by 3:   12x − 3y = 42   …(iii)
    Add (i) + (iii):      14x = 54   →   x = 27/7
    Into (i): 2(27/7) + 3y = 12   →   y = 10/7  ✓

LINEAR–QUADRATIC (always use SUBSTITUTION; find x first; then y):

  EXAMPLE 8:
    y = x + 1         …(i)  [linear]
    y = x² − 2x + 1   …(ii) [quadratic]

    Sub (i) into (ii): x + 1 = x² − 2x + 1
    x² − 3x = 0   →   x(x − 3) = 0
    x = 0  or  x = 3
    y = 1  or  y = 4
    Solutions: (0, 1) and (3, 4)  ✓   [ALWAYS verify in BOTH equations!]

SECTION 3: QUADRATIC INEQUALITIES
================================================================
  EXAMPLE 9: Solve x² − x − 6 > 0

    Step 1: Factorise:  (x − 3)(x + 2) > 0
    Step 2: Critical values:  x = 3  and  x = −2
    Step 3: Test each interval:
      x < −2 :     try x=−3  →  (−6)(−1) = 6 > 0  ✓
      −2 < x < 3:  try x=0   →  (−3)(2) = −6 < 0  ✗
      x > 3 :      try x=4   →  (1)(6) = 6 > 0    ✓
    Answer: x < −2  OR  x > 3

`;
      const errC = ['✗ COMMON MISTAKE','✓ CORRECT APPROACH'];
      const errR = [
        ['2x²=3x → 2x=3 → x=3/2  (lost the solution x=0!)',
         '2x²−3x=0 → x(2x−3)=0 → x=0 OR x=3/2'],
        ['Forgetting ± when taking square root in completing the square',
         'Always write ± : (x+3)² = 2 → x+3 = ±√2'],
        ['In −2x > 6 writing x > −3  (sign NOT flipped)',
         'Dividing by a negative flips the inequality: x < −3'],
        ['In linear-quadratic: solving quadratic only without substituting back',
         'Always find both x AND y values; verify in BOTH original equations'],
        ['Stating "no solution" when discriminant = 0',
         'Δ=0 means ONE repeated root (not no solution): x = −b / 2a'],
      ];

      const practiceC = ['Q','QUESTION','ANSWER'];
      const practiceR = [
        ['1', 'Factorise: x² − 7x + 12 = 0',                              'x = 3  or  x = 4'],
        ['2', 'Factorise: 3x² − 11x − 4 = 0',                             'x = 4  or  x = −1/3'],
        ['3', 'Complete the square: x² − 4x − 3 = 0',                     'x = 2 ± √7'],
        ['4', 'Quadratic formula: 2x² + 3x − 5 = 0',                      'x = 1  or  x = −5/2'],
        ['5', 'Discriminant of 4x²−4x+1=0: value and what it tells you?', 'Δ=0 → one repeated root: x = 1/2'],
        ['6', 'Solve simultaneously: 3x+y=7 and 2x−y=3',                  'x = 2,  y = 1'],
        ['7', 'Solve simultaneously: y=x+2 and y=x²−4',                   'x=−2,y=0  OR  x=3,y=5'],
        ['8', 'Solve the inequality: x² − 5x + 4 ≤ 0',                   '1 ≤ x ≤ 4'],
        ['9', 'Find k for which kx²−6x+3=0 has equal roots.',              'k = 3'],
        ['10','Sum of a number and its reciprocal is 2½. Form a quadratic and solve.',
         '2x²−5x+2=0 → x=2  or  x=1/2'],
      ];

      return [
        hdr, body,
        'COMMON MISTAKES TO AVOID\n================================================================\n',
        makeTable(errC, errR),
        '\nPRACTICE QUESTIONS (10 questions — answer all before checking)\n================================================================\n',
        makeTable(practiceC, practiceR),
        '\nFor more practice: bestronny.netlify.app | cbcbest.netlify.app\n',
        docFooter('Student Revision Notes — Grade 10 Mathematics: Algebra'),
      ].join('\n');
    },
  },

  // ── SN 2 ───────────────────────────────────────────────
  {
    id: 'notes-python-g10',
    cat: 'notes', icon: '📘',
    title: 'Student Revision Notes — Python Programming (Grade 10–11 CS)',
    grade: 'Grade 10–11', subject: 'Computer Science', terms: 'All Terms',
    desc: 'Complete Python revision notes: data types, operators, control structures, functions, lists, dictionaries, file I/O, and string methods. Includes annotated code examples and 8 exam-style questions with answers.',
    topics: ['Python','Data Types','Loops','Functions','Lists',
             'Dictionaries','File I/O','String Methods'],
    content: () => {
      const hdr = `================================================================
  CBC BEST — STUDENT REVISION NOTES
  Subject : Computer Science — PYTHON PROGRAMMING
  Grade   : 10–11
  Author  : Ronny Mwenda | cbcbest.netlify.app | bestronny.netlify.app
  © 2026 CBC Best — Free for classroom use.
================================================================
`;
      const opC = ['OPERATOR','NAME','EXAMPLE','RESULT / NOTE'];
      const opR = [
        ['+', 'Addition',       '17 + 5',  '22'],
        ['-', 'Subtraction',    '17 - 5',  '12'],
        ['*', 'Multiplication', '17 * 5',  '85'],
        ['/', 'Division',       '17 / 5',  '3.4  (always returns float)'],
        ['//','Floor Division', '17 // 5', '3    (drops the decimal part)'],
        ['%', 'Modulus',        '17 % 5',  '2    (remainder after division)'],
        ['**','Exponentiation', '2 ** 10', '1024  (2 to the power of 10)'],
      ];

      const strC = ['METHOD CALL ON text="CBC Best Kenya"','RESULT / EFFECT'];
      const strR = [
        ['text.upper()',                 '"CBC BEST KENYA"'],
        ['text.lower()',                 '"cbc best kenya"'],
        ['text.split()',                 '["CBC", "Best", "Kenya"]'],
        ['"_".join(["CBC","Best"])',     '"CBC_Best"'],
        ['len(text)',                    '15'],
        ['text.find("Best")',            '4  (starting index of "Best")'],
        ['text.replace("Best","Bora")',  '"CBC Bora Kenya"'],
        ['text.startswith("CBC")',       'True'],
        ['text.count("e")',              '2'],
        ['text[0:3]',                   '"CBC"  (slicing: index 0 up to but not including 3)'],
        ['text.strip()',                 'Removes leading/trailing whitespace and \\n'],
      ];

      const body = `
SECTION 1: DATA TYPES AND VARIABLES
================================================================
  name        = "Amina Wanjiku"   # str   — text; enclosed in " " or ' '
  age         = 17                # int   — whole number
  height      = 1.65              # float — decimal number
  is_student  = True              # bool  — True or False (capital T and F)

  # Type conversion (casting)
  score_text = input("Enter score: ")   # input() ALWAYS returns a string
  score      = int(score_text)          # convert string → integer
  price      = float(input("Price: "))  # convert string → float directly

  print(type(name))   # <class 'str'>
  print(type(age))    # <class 'int'>

SECTION 3: SELECTION STATEMENTS  (if / elif / else)
================================================================
  score = int(input("Enter score (0–100): "))

  if score >= 80:   grade = "A"
  elif score >= 60: grade = "B"
  elif score >= 50: grade = "C"
  elif score >= 40: grade = "D"
  else:             grade = "E"

  print("Grade:", grade)

  # Logical operators: and, or, not
  if age >= 18 and age <= 35:
      print("Eligible for youth programme")

  if age < 13 or age > 60:
      print("Special assistance available")

SECTION 4: LOOPS
================================================================
  # FOR LOOP — use when number of iterations is known in advance
  for i in range(1, 11):        # i = 1, 2, 3, …, 10  (NOT including 11)
      print(i, "×", 7, "=", i * 7)

  fruits = ["mango", "banana", "papaya"]
  for fruit in fruits:          # iterate over each item in a list
      print(fruit.upper())

  # WHILE LOOP — use when a condition is checked each time
  total = 0; count = 0
  while count < 5:
      number = int(input("Enter a number: "))
      total += number            # total = total + number
      count += 1
  print("Total:", total)

  # BREAK — exits the loop immediately
  for n in range(1, 100):
      if n % 7 == 0:
          print("First multiple of 7:", n)
          break

  # CONTINUE — skips the rest of this iteration only
  for n in range(1, 11):
      if n % 2 == 0:
          continue               # skip even numbers
      print(n)                   # prints: 1  3  5  7  9

SECTION 5: FUNCTIONS
================================================================
  # Basic structure
  def function_name(parameter1, parameter2):
      """Docstring: describes what this function does."""
      # code goes here — indented 4 spaces
      return result

  # Example: with parameters and return value
  def calculate_area(length, width):
      """Returns the area of a rectangle."""
      return length * width

  print("Area:", calculate_area(5, 3))    # Area: 15

  # Default parameter value
  def greet(name, greeting="Hello"):
      return greeting + ", " + name + "!"

  print(greet("Kamau"))           # Hello, Kamau!
  print(greet("Wanjiku","Jambo")) # Jambo, Wanjiku!

SECTION 6: VARIABLE SCOPE
================================================================
  total = 100              # GLOBAL — accessible everywhere in the program

  def show():
      local_var = 50       # LOCAL — exists only inside show()
      print(total)         # OK — can READ a global variable
      print(local_var)

  # print(local_var)       # ERROR: NameError — local_var not defined here

  # To MODIFY a global variable inside a function:
  counter = 0
  def increment():
      global counter       # must DECLARE global to modify it
      counter += 1
  increment(); increment()
  print(counter)           # 2

SECTION 7: LISTS
================================================================
  marks = [85, 72, 91, 60, 78, 55]

  print(marks[0])          # 85   (first item; index 0)
  print(marks[-1])         # 55   (last item; index −1)
  print(marks[1:4])        # [72, 91, 60]  (slicing)

  marks.append(95)         # add 95 to the end
  marks.remove(60)         # remove the first occurrence of 60
  marks.sort()             # sort ascending (in-place)
  marks.sort(reverse=True) # sort descending
  marks.insert(0, 100)     # insert 100 at index 0
  popped = marks.pop()     # remove and return the last item

  print(len(marks))        # number of items in the list
  print(max(marks))        # largest value
  print(min(marks))        # smallest value
  print(sum(marks))        # sum of all values

SECTION 8: DICTIONARIES
================================================================
  student = {
      "name":    "Wanjiku Mwangi",
      "grade":   10,
      "marks":   88,
      "pathway": "STEM"
  }

  print(student["name"])           # Wanjiku Mwangi
  print(student.get("marks"))      # 88  (safer — returns None if key missing)
  student["marks"]   = 92          # update an existing key's value
  student["school"]  = "Embu HS"  # add a new key-value pair
  del student["pathway"]           # delete a key-value pair

  for key, value in student.items():
      print(key, ":", value)        # iterate over all key-value pairs

SECTION 9: FILE INPUT AND OUTPUT
================================================================
  # Writing (creates new file; OVERWRITES if file already exists)
  with open("students.txt", "w") as file:
      file.write("Alice Njeri\\n")
      file.write("Brian Otieno\\n")

  # Appending (adds to existing file; does NOT overwrite)
  with open("students.txt", "a") as file:
      file.write("Carol Wambua\\n")

  # Reading the ENTIRE file at once
  with open("students.txt", "r") as file:
      content = file.read()
      print(content)

  # Reading LINE BY LINE (memory-efficient for large files)
  with open("students.txt", "r") as file:
      for line in file:
          print(line.strip())    # .strip() removes the \\n newline character

`;
      const qaC = ['Q','EXAM-STYLE QUESTION','ANSWER'];
      const qaR = [
        ['1','What is the output of: print(17 % 5)',                                    '2'],
        ['2','What does // do? Give an example.',                                        'Floor division — discards decimal. 17 // 5 = 3'],
        ['3','Write a function that takes a list of numbers and returns the average.',   'def avg(lst): return sum(lst) / len(lst)'],
        ['4','Difference between a for loop and a while loop? Give one example each.',  'for — known iterations; while — condition-based. See Section 4.'],
        ['5','Open "marks.txt" and write 80, 65, 72 on separate lines.',                'with open("marks.txt","w") as f: f.write("80\\n65\\n72\\n")'],
        ['6','Output of: fruits=["mango","banana","papaya"]; print(fruits[-2])',        '"banana"  (index −2 is second from last)'],
        ['7','Difference between local and global scope in Python. Code example.',      'Local: exists only inside its function. Global: accessible everywhere. See Section 6.'],
        ['8','What does .strip() do? When is it especially useful?',                    'Removes leading/trailing whitespace including \\n. Essential when reading lines from a file.'],
      ];

      return [
        hdr, body,
        'SECTION 2: ARITHMETIC OPERATORS\n================================================================\n',
        makeTable(opC, opR),
        '\nSTRING METHODS QUICK REFERENCE\n================================================================\n',
        makeTable(strC, strR),
        '\nEXAM-STYLE PRACTICE QUESTIONS\n================================================================\n',
        makeTable(qaC, qaR),
        '\nFor more practice: bestronny.netlify.app | cbcbest.netlify.app\n',
        docFooter('Student Revision Notes — Python Programming (Grade 10–11 CS)'),
      ].join('\n');
    },
  },

  // ── SN 3 ───────────────────────────────────────────────
  {
    id: 'notes-science-g7',
    cat: 'notes', icon: '📘',
    title: 'Student Revision Notes — Integrated Science Grade 7',
    grade: 'Grade 7', subject: 'Integrated Science', terms: 'All Terms',
    desc: 'Complete Grade 7 Integrated Science revision notes: cells, human body systems (digestive, circulatory, respiratory), states of matter, ecosystems and food chains, and the water cycle. Includes self-test questions and answers.',
    topics: ['Cells','Digestive System','Circulatory System',
             'Matter','Ecosystems','Water Cycle'],
    content: () => {
      const hdr = `================================================================
  CBC BEST — STUDENT REVISION NOTES
  Subject : Integrated Science
  Grade   : 7
  Author  : Ronny Mwenda | cbcbest.netlify.app
  © 2026 CBC Best — Free for classroom use.
================================================================
`;
      const cellC = ['ORGANELLE','PLANT ONLY OR BOTH?','FUNCTION'];
      const cellR = [
        ['Cell wall',           'PLANT ONLY',      'Rigid outer layer; provides shape, support, and protection'],
        ['Chloroplasts',        'PLANT ONLY',      'Contains chlorophyll; site of photosynthesis (food production)'],
        ['Large central vacuole','PLANT ONLY',     'Stores water and waste; maintains firmness (turgor pressure)'],
        ['Cell membrane',       'BOTH',            'Controls what enters and leaves the cell (selectively permeable)'],
        ['Cytoplasm',           'BOTH',            'Jelly-like fluid; suspends organelles; site of many chemical reactions'],
        ['Nucleus',             'BOTH',            'Contains DNA; controls all cell activities — the "control centre"'],
        ['Mitochondria',        'BOTH',            'Site of aerobic cellular respiration; produces energy (ATP)'],
        ['Ribosomes',           'BOTH',            'Site of protein synthesis (making proteins from amino acids)'],
      ];

      const digestC = ['ORGAN','FUNCTION'];
      const digestR = [
        ['Mouth',          'Mechanical digestion (chewing); salivary amylase begins starch digestion'],
        ['Oesophagus',     'Muscular tube; moves food from mouth to stomach by peristalsis (wave-like contractions)'],
        ['Stomach',        'Muscular churning; gastric acid (HCl) kills bacteria; pepsin begins protein digestion'],
        ['Small Intestine', 'MAIN site of chemical digestion and nutrient ABSORPTION into the bloodstream'],
        ['Large Intestine', 'Absorbs water from undigested material; compacts waste into faeces'],
        ['Liver',          'Produces bile (emulsifies fats); processes absorbed nutrients from the blood'],
        ['Pancreas',       'Produces digestive enzymes: amylase, protease, lipase; and the hormone insulin'],
      ];

      const vesselC = ['VESSEL','DIRECTION','WALL THICKNESS','VALVES'];
      const vesselR = [
        ['Arteries',   'Away from heart (carry oxygenated blood, except pulmonary)', 'Thick, muscular', 'None'],
        ['Veins',      'Toward heart (carry deoxygenated blood, except pulmonary)',  'Thinner',         'YES — prevent backflow'],
        ['Capillaries','Connect arteries to veins in tissues',                       'One cell thick',  'None — exchange occurs here'],
      ];

      const matterC = ['STATE','SHAPE','VOLUME','PARTICLE SPACING','PARTICLE MOVEMENT'];
      const matterR = [
        ['Solid', 'Fixed',    'Fixed',   'Very close; tightly packed', 'Vibrate in fixed positions only'],
        ['Liquid','Variable', 'Fixed',   'Close but able to move',     'Slide and flow past each other'],
        ['Gas',   'Variable', 'Variable','Far apart',                  'Move rapidly and randomly in all directions'],
      ];

      const changeC = ['CHANGE OF STATE','FROM → TO','ENERGY CHANGE','EVERYDAY EXAMPLE'];
      const changeR = [
        ['Melting',      'Solid → Liquid',  'ABSORBS heat', 'Ice melting; candle wax softening'],
        ['Freezing',     'Liquid → Solid',  'RELEASES heat','Water freezing to form ice cubes'],
        ['Evaporation',  'Liquid → Gas',    'ABSORBS heat', 'Puddles drying; sweat cooling the body'],
        ['Condensation', 'Gas → Liquid',    'RELEASES heat','Steam on a cold mirror; dew on grass'],
        ['Sublimation',  'Solid → Gas',     'ABSORBS heat', 'Dry ice disappearing; iodine crystals'],
        ['Deposition',   'Gas → Solid',     'RELEASES heat','Frost forming on a freezer wall'],
      ];

      const sepC = ['TECHNIQUE','BEST FOR SEPARATING','KEY PRINCIPLE'];
      const sepR = [
        ['Filtration',          'Insoluble solid from a liquid',          'Liquid (filtrate) passes through filter paper; solid (residue) is retained'],
        ['Evaporation',         'Dissolved solid from its liquid solvent', 'Heat causes the solvent to evaporate; solid is left behind'],
        ['Distillation',        'Liquids with different boiling points',  'Liquid with lower b.p. boils first; vapour is cooled and collected'],
        ['Chromatography',      'Dissolved coloured substances',          'Components travel at different speeds through a medium (e.g. paper)'],
        ['Magnetic separation', 'Magnetic solid from non-magnetic solid', 'A magnet attracts the magnetic component only'],
      ];

      const body = `
CHAPTER 1: THE CELL — BASIC UNIT OF LIFE
================================================================
All living things are made of CELLS. The cell is the smallest unit of life.

KEY MEMORY TIP: "Animals LACK a CELL WALL, CHLOROPLASTS, and a LARGE VACUOLE"

CHAPTER 2: HUMAN BODY SYSTEMS
================================================================

DIGESTIVE SYSTEM:
  Pathway: Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine → Anus

  KEY ENZYMES AND WHAT THEY BREAK DOWN:
    Amylase   → starch into simple sugars (produced in: mouth, pancreas)
    Protease  → proteins into amino acids (produced in: stomach, pancreas)
    Lipase    → fats into fatty acids and glycerol (produced in: pancreas)

  VILLI: finger-like projections lining the small intestine.
  Function: greatly INCREASE SURFACE AREA for efficient absorption of
  digested nutrients into the bloodstream. Each villus contains blood
  capillaries and lacteals (for fat absorption).

CIRCULATORY SYSTEM:
  TWO CIRCUITS:
    Pulmonary circuit: Right heart → Lungs (picks up O₂; releases CO₂) → Left heart
    Systemic circuit:  Left heart → All body organs (delivers O₂; picks up CO₂) → Right heart

  BLOOD COMPOSITION:
    Red blood cells   — carry O₂ using the protein haemoglobin (iron-containing)
    White blood cells — fight infection (part of the immune response)
    Platelets         — help blood clot at wounds to prevent excessive bleeding
    Plasma            — liquid component; carries dissolved nutrients, CO₂, hormones, wastes

RESPIRATORY SYSTEM:
  AIR PATHWAY: Nose/Mouth → Trachea → Bronchi → Bronchioles → Alveoli

  BREATHING IN (inhalation):
    Diaphragm contracts (flattens downward) + ribcage moves up and out
    → chest cavity volume INCREASES → air pressure inside DECREASES → air flows IN

  BREATHING OUT (exhalation):
    Diaphragm relaxes (domes upward) + ribcage moves down and in
    → chest cavity volume DECREASES → air pressure inside INCREASES → air flows OUT

  GASEOUS EXCHANGE (occurs at the alveoli):
    O₂ diffuses from alveoli → into blood  (high O₂ concentration in air)
    CO₂ diffuses from blood  → into alveoli (high CO₂ concentration in blood)

  WHY ARE ALVEOLI WELL-ADAPTED FOR GAS EXCHANGE?
    • Very thin walls (one cell thick) — short diffusion pathway
    • Moist surface — gases dissolve before crossing
    • Rich blood supply (capillary network) — maintains concentration gradient
    • Enormous number of alveoli (millions) — huge surface area

CHAPTER 3: MATTER AND ITS PROPERTIES
================================================================

CHAPTER 4: ECOSYSTEMS AND FOOD CHAINS
================================================================
  FOOD CHAIN EXAMPLE (Kenyan context):
  Grass  →  Grasshopper  →  Frog  →  Puff Adder  →  Secretary Bird

  ROLES:
    Producers          — plants; make food by photosynthesis; ALWAYS the first link
    Primary Consumers  — eat producers (herbivores)
    Secondary Consumers— eat primary consumers
    Tertiary Consumers — eat secondary consumers
    Decomposers        — fungi and bacteria; break down dead matter; recycle nutrients

  PHOTOSYNTHESIS (occurs in CHLOROPLASTS):
    6CO₂ + 6H₂O + Light energy → C₆H₁₂O₆ (glucose) + 6O₂

  CELLULAR RESPIRATION (occurs in MITOCHONDRIA — ALL living cells, ALL the time):
    C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP)

  ENERGY FLOW: Only about 10% of energy passes to the next trophic level.
  The rest is lost as heat, movement, and waste. This is why food chains
  rarely exceed 4–5 links.

CHAPTER 5: THE WATER CYCLE
================================================================
  STAGES (in order):
  1. Evaporation    — Sun heats surface water → water vapour rises
  2. Transpiration  — Plants release water vapour through stomata (leaf pores)
  3. Condensation   — Rising vapour cools at altitude → tiny droplets → CLOUDS
  4. Precipitation  — Water falls as rain, hail, sleet, or snow
  5. Surface Runoff — Water flows along the ground into rivers, streams, and lakes
  6. Infiltration   — Water soaks into the soil → replenishes groundwater
  7. Collection     — Water accumulates in oceans, lakes, rivers, and aquifers
  (→ cycle begins again with evaporation)

  IMPORTANCE OF THE WATER CYCLE:
  Recycles Earth's finite water supply; supports all terrestrial and aquatic life;
  regulates Earth's temperature; drives weather patterns and climate.

`;
      const qaC = ['Q','QUESTION','MODEL ANSWER'];
      const qaR = [
        ['1', 'Name THREE organelles found in plant cells but NOT in animal cells.',
         'Cell wall;  chloroplasts;  large central vacuole.'],
        ['2', 'What is the role of mitochondria in a cell?',
         'Site of aerobic cellular respiration — they generate energy (ATP) for all cell activities.'],
        ['3', 'Trace food from the mouth to the anus naming all organs in order.',
         'Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine → Rectum → Anus.'],
        ['4', 'Which enzyme digests starch? Name two organs that produce it.',
         'Amylase. Produced in: salivary glands (mouth) and the pancreas.'],
        ['5', 'State TWO differences between an artery and a vein.',
         'Arteries: carry blood AWAY from heart; thick muscular walls; no valves. Veins: carry blood TOWARD heart; thinner walls; valves present.'],
        ['6', 'Name the two gases exchanged at the alveoli and state the direction of each.',
         'O₂ diffuses from alveoli INTO blood. CO₂ diffuses from blood INTO alveoli.'],
        ['7', 'Write the word equation for photosynthesis.',
         'Carbon dioxide + Water + Light energy → Glucose + Oxygen'],
        ['8', 'State the difference between a food chain and a food web.',
         'Food chain = single linear feeding sequence. Food web = multiple interconnected food chains; more realistic model of energy flow in an ecosystem.'],
        ['9', 'List FIVE stages of the water cycle in the correct order.',
         'Evaporation → Condensation → Precipitation → Surface Runoff → Infiltration (then Collection).'],
        ['10','Describe filtration. Give a real-life Kenyan example.',
         'Filtration separates an insoluble solid from a liquid using filter paper in a funnel. Kenyan example: filtering soil particles from muddy river water before treating it for drinking.'],
      ];

      return [
        hdr, body,
        'CELL ORGANELLES — COMPARISON TABLE\n================================================================\n',
        makeTable(cellC, cellR),
        '\nDIGESTIVE SYSTEM — ORGANS AND FUNCTIONS\n================================================================\n',
        makeTable(digestC, digestR),
        '\nBLOOD VESSELS — COMPARISON TABLE\n================================================================\n',
        makeTable(vesselC, vesselR),
        '\nSTATES OF MATTER — COMPARISON TABLE\n================================================================\n',
        makeTable(matterC, matterR),
        '\nCHANGES OF STATE — COMPLETE REFERENCE\n================================================================\n',
        makeTable(changeC, changeR),
        '\nSEPARATION TECHNIQUES — REFERENCE TABLE\n================================================================\n',
        makeTable(sepC, sepR),
        '\nSELF-TEST QUESTIONS — GRADE 7 INTEGRATED SCIENCE\n================================================================\n',
        makeTable(qaC, qaR),
        '\nFor more practice: bestronny.netlify.app | cbcbest.netlify.app\n',
        docFooter('Student Revision Notes — Integrated Science Grade 7'),
      ].join('\n');
    },
  },

  // ── SN 4 ───────────────────────────────────────────────
  {
    id: 'notes-math9-trig',
    cat: 'notes', icon: '📘',
    title: 'Student Revision Notes — Grade 9 Mathematics: Trigonometry & Coordinate Geometry',
    grade: 'Grade 9', subject: 'Mathematics', terms: 'Term 2',
    desc: 'Complete Grade 9 revision notes for Trigonometry (SOHCAHTOA, bearings, angles of elevation and depression) and Coordinate Geometry (midpoint, distance, gradient, equation of a line, parallel and perpendicular lines). Includes 12 practice questions with full solutions.',
    topics: ['Trigonometry','SOHCAHTOA','Bearings','Coordinate Geometry',
             'Gradient','Equation of a Line','Parallel & Perpendicular Lines'],
    content: () => {
      const hdr = `================================================================
  CBC BEST — STUDENT REVISION NOTES
  Subject : Mathematics — TRIGONOMETRY & COORDINATE GEOMETRY
  Grade   : 9
  Author  : Ronny Mwenda | cbcbest.netlify.app | bestronny.netlify.app
  © 2026 CBC Best — Free for classroom use.
================================================================
`;
      const exactC = ['ANGLE','sin θ','cos θ','tan θ','HOW TO REMEMBER'];
      const exactR = [
        ['0°',  '0',    '1',    '0',        'Flat line — no height'],
        ['30°', '1/2',  '√3/2', '1/√3',     '30-60-90 triangle: sides 1, √3, 2'],
        ['45°', '1/√2', '1/√2', '1',        'Isosceles right triangle: sides 1, 1, √2'],
        ['60°', '√3/2', '1/2',  '√3',       '30-60-90 triangle (angle at top)'],
        ['90°', '1',    '0',    'undefined','Vertical — tan undefined (division by 0)'],
      ];

      const bearingC = ['DIRECTION','BEARING','DIAGRAM NOTE'];
      const bearingR = [
        ['North','000° (or 360°)','Straight up on a map; reference direction'],
        ['East', '090°',         '90° clockwise from North'],
        ['South','180°',         'Directly opposite North'],
        ['West', '270°',         '270° clockwise from North (or 90° anticlockwise)'],
      ];

      const formulaC = ['FORMULA','WHAT IT FINDS','FORMULA'];
      const formulaR = [
        ['Midpoint',   'Centre point of a line segment AB',         'M = ( (x₁+x₂)/2 , (y₁+y₂)/2 )'],
        ['Distance',   'Length of segment from A(x₁,y₁) to B(x₂,y₂)', 'd = √[ (x₂−x₁)² + (y₂−y₁)² ]'],
        ['Gradient',   'Steepness/slope of a straight line',        'm = (y₂−y₁) / (x₂−x₁)'],
        ['Line Eq. 1', 'Slope-intercept form',                      'y = mx + c  (m=gradient, c=y-intercept)'],
        ['Line Eq. 2', 'Point-slope form',                          'y − y₁ = m(x − x₁)'],
        ['Parallel',   'Two lines with the same gradient',          'm₁ = m₂'],
        ['Perpendicular','Two lines meeting at 90°',                'm₁ × m₂ = −1  (negative reciprocals)'],
      ];

      const body = `
PART A — TRIGONOMETRY
================================================================

SECTION 1: TRIGONOMETRIC RATIOS (SOHCAHTOA)
────────────────────────────────────────────────────────────────
In a RIGHT-ANGLED TRIANGLE, label the three sides RELATIVE TO ANGLE θ:

  HYPOTENUSE (H) — the longest side; always OPPOSITE the 90° right angle
  OPPOSITE   (O) — the side directly ACROSS from angle θ
  ADJACENT   (A) — the side NEXT TO angle θ (not the hypotenuse)

  sin θ = Opposite  / Hypotenuse     (SOH)
  cos θ = Adjacent  / Hypotenuse     (CAH)
  tan θ = Opposite  / Adjacent       (TOA)

MNEMONIC: SOH-CAH-TOA
  "Some Old Horses Carry A Heavy Top Overall Affection"

HOW TO DERIVE THE EXACT VALUES (without memorising):
  30° and 60°: Draw an equilateral triangle (all sides = 2).
               Bisect it → right triangle: hyp=2, base=1, height=√3.
               Angle at base = 60°; angle at top = 30°.

  45°:         Draw a right isosceles triangle (both legs = 1).
               By Pythagoras: hypotenuse = √2.  Both acute angles = 45°.

CALCULATOR RULE: Always verify DEGREE MODE is active.
Test: sin 30° should display exactly 0.5. If not → switch to DEG mode.
Inverse trig: sin⁻¹, cos⁻¹, tan⁻¹  (also written arcsin, arccos, arctan)

WORKED EXAMPLES
────────────────────────────────────────────────────────────────
EXAMPLE 1 — Find missing side (using sin):
  Right triangle ABC, angle A=35°, hypotenuse AC=12 cm. Find BC.
    sin 35° = BC / 12   →   BC = 12 × sin 35° = 12 × 0.5736 ≈ 6.88 cm  ✓

EXAMPLE 2 — Find missing angle (using cos inverse):
  Right triangle PQR, PQ=15 m (hyp), QR=9 m (adj to angle P). Find P.
    cos P = 9/15 = 0.6   →   P = cos⁻¹(0.6) ≈ 53.1°  ✓

EXAMPLE 3 — Angle of Elevation:
  Standing 40 m from the base of a vertical mast; angle of elevation = 52°.
    tan 52° = height/40   →   height = 40 × tan 52° ≈ 51.2 m  ✓

EXAMPLE 4 — Angle of Depression:
  Lifeguard 15 m up; angle of depression to a swimmer = 28°.
  [Angle of depression = angle of elevation — alternate angles on parallel lines]
    tan 28° = 15/distance   →   distance = 15/0.5317 ≈ 28.2 m  ✓

SECTION 2: COMPASS BEARINGS
────────────────────────────────────────────────────────────────
A BEARING = direction measured CLOCKWISE from NORTH.
Always written as a 3-digit number: e.g. 053°, not 53°.

EXAMPLE 5:
  Ship sails 80 km East to Q, then 60 km North to R.
  Find: (a) the bearing of R from P    (b) the straight-line distance PR

  Solution:
  (a) Right angle at Q (East then North).
      tan(angle at P) = QR/PQ = 60/80 = 0.75
      angle at P = tan⁻¹(0.75) = 36.87°
      Bearing = 090° − 36.87° = 053.1°  ✓

  (b) PR = √(80² + 60²) = √10000 = 100 km  ✓  [Pythagoras]

PART B — COORDINATE GEOMETRY
================================================================

WORKED EXAMPLES
────────────────────────────────────────────────────────────────
EXAMPLE 6 — Midpoint: A(3, −1) and B(7, 5).
  M = ((3+7)/2 , (−1+5)/2) = (5, 2)  ✓

EXAMPLE 7 — Distance: P(−2, 3) to Q(4, −5).
  d = √[(4−(−2))² + (−5−3)²] = √[36 + 64] = √100 = 10 units  ✓

EXAMPLE 8 — Gradient: C(1, 4) to D(5, 10).
  m = (10−4)/(5−1) = 6/4 = 3/2  ✓

EXAMPLE 9 — Equation (point-slope): gradient 3, through (2, 7).
  y − 7 = 3(x − 2)  →  y = 3x + 1  ✓

EXAMPLE 10 — Perpendicular gradient to line with m=3/4:
  m₁ × m₂ = −1   →   (3/4) × m₂ = −1   →   m₂ = −4/3  ✓

`;
      const qaC = ['Q','QUESTION','FULL ANSWER'];
      const qaR = [
        ['1', '△ABC, right angle at B, AB=6, AC=10. Find sin A, cos A, tan A.',
         'BC=8 (Pythagoras). sin A=8/10=4/5; cos A=6/10=3/5; tan A=8/6=4/3'],
        ['2', 'Without calculator: tan 45° + cos 60°',
         '1 + 1/2 = 3/2'],
        ['3', 'Ladder 8 m, leaning at 70° to ground. Height reached?',
         'sin 70° = h/8 → h = 8 × sin 70° ≈ 7.52 m'],
        ['4', 'Angle of depression from 45 m cliff to boat is 32°. Distance?',
         'tan 32° = 45/d → d = 45/tan 32° ≈ 72.0 m'],
        ['5', 'Cyclist: 5 km South then 12 km West. (a) Straight-line home? (b) Bearing?',
         '(a) √(25+144) = √169 = 13 km  (b) tan θ = 5/12; θ = 22.6°; bearing ≈ 022.6° (N22.6°E)'],
        ['6', 'Midpoint and length of G(−3,2) and H(5,−6).',
         'Midpoint=(1,−2); length=√(64+64)=8√2≈11.3 units'],
        ['7', 'Show that △ with A(0,0), B(4,0), C(2,2√3) is equilateral.',
         '|AB|=4; |BC|=√(4+12)=4; |AC|=√(4+12)=4. All sides equal → equilateral ✓'],
        ['8', 'Equation of line through P(3,5) with gradient −2.',
         'y−5=−2(x−3) → y=−2x+11'],
        ['9', 'Equation of line through Q(−1,4) and R(3,−4).',
         'm=(−4−4)/(3−(−1))=−8/4=−2; y−4=−2(x+1) → y=−2x+2'],
        ['10','Parallel to y=4x−1 through (0,7).',
         'Same gradient m=4; y-intercept=7 → y=4x+7'],
        ['11','Perpendicular to y=−½x+3 through (4,1).',
         'Perp. gradient=2; y−1=2(x−4) → y=2x−7'],
        ['12','Midpoint of AB is M(3,−1). A=(1,5). Find B.',
         'Bₓ=2(3)−1=5; Bᵧ=2(−1)−5=−7. B=(5,−7)'],
      ];

      return [
        hdr, body,
        'EXACT TRIGONOMETRIC VALUES\n================================================================\n',
        makeTable(exactC, exactR),
        '\nCOMPASS BEARINGS REFERENCE\n================================================================\n',
        makeTable(bearingC, bearingR),
        '\nCOORDINATE GEOMETRY — KEY FORMULAE\n================================================================\n',
        makeTable(formulaC, formulaR),
        '\nPRACTICE QUESTIONS (12 questions with full answers)\n================================================================\n',
        makeTable(qaC, qaR),
        '\nFor more practice: bestronny.netlify.app | cbcbest.netlify.app\n',
        docFooter('Student Revision Notes — Grade 9 Mathematics: Trigonometry & Coordinate Geometry'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     CAREER GUIDES  (2 documents)
  ──────────────────────────────────────────────────────── */

  // ── CG 1 ───────────────────────────────────────────────
  {
    id: 'career-stem-guide',
    cat: 'career', icon: '🎯',
    title: 'STEM Career Pathways Guide — Mathematics & Computer Science (Grade 10–12)',
    grade: 'Grade 10–12', subject: 'STEM Pathway', terms: 'All Terms',
    desc: 'Comprehensive career pathways guide: 20+ careers with required KCSE subjects, university programmes, professional bodies, and realistic Kenya salary ranges. Covers engineering, ICT, data science, actuarial science, medicine, and more.',
    topics: ['Career Guidance','KCSE Requirements','University Admission','ICT Careers',
             'Engineering','Data Science','Medicine','Actuarial Science'],
    content: () => {
      const hdr = docHeader(
        'STEM CAREER PATHWAYS GUIDE',
        '—', 'Grade 10–12', 'STEM Pathway', '—', '—', '—', '—',
        'KUCCPS; KNQA; Engineers Board of Kenya (EBK); TSC; ICT Authority Kenya'
      );
      const mathC = ['CAREER','KCSE MINIMUM REQUIREMENTS',
                     'UNIVERSITY PROGRAMME (EXAMPLES)','PROFESSIONAL BODY',
                     'KENYA SALARY RANGE (KSh/month)'];
      const mathR = [
        ['Actuarial Scientist',
         'Mathematics A, Physics or Chemistry B+, English B+',
         'BSc Actuarial Science — UoN, Strathmore, JKUAT',
         'Institute and Faculty of Actuaries (IFoA)',
         '150,000 – 800,000'],
        ['Secondary Teacher (Maths / CS)',
         'Mathematics B+, relevant combination, English B',
         'BEd Science — Maths/CS specialism (KU, Moi University, KMTC)',
         'Teachers Service Commission (TSC) — mandatory registration',
         '35,000 – 120,000  (TSC B1–D5 pay scale)'],
        ['Statistician / Data Analyst',
         'Mathematics A−, English B+',
         'BSc Statistics — UoN, JKUAT, Maseno University',
         'Kenya National Bureau of Statistics (KNBS)',
         '60,000 – 250,000'],
        ['Civil Engineer',
         'Mathematics A, Physics B+, Chemistry B, English B',
         'BEng Civil Engineering — UoN, JKUAT, Dedan Kimathi University',
         'Engineers Board of Kenya (EBK) — mandatory for practice',
         '80,000 – 400,000'],
        ['Electrical / Electronics Engineer',
         'Mathematics A, Physics A−, English B',
         'BEng Electrical & Electronics — UoN, JKUAT, Strathmore',
         'Engineers Board of Kenya (EBK) — mandatory for practice',
         '90,000 – 500,000'],
        ['Mechanical Engineer',
         'Mathematics A, Physics A−, Chemistry B',
         'BEng Mechanical Engineering — UoN, JKUAT, Dedan Kimathi University',
         'Engineers Board of Kenya (EBK) — mandatory for practice',
         '80,000 – 450,000'],
        ['Quantity Surveyor',
         'Mathematics A−, Physics B+, English B',
         'BSc Quantity Surveying — UoN, JKUAT',
         'Institution of Surveyors of Kenya (ISK)',
         '70,000 – 300,000'],
      ];

      const ictC = ['CAREER','KCSE REQUIREMENTS','QUALIFICATION ROUTE',
                    'TYPICAL EMPLOYERS','SALARY (KSh/month) OR GLOBAL'];
      const ictR = [
        ['Software Developer',
         'Mathematics B+, CS B+, English B',
         'BSc CS (UoN, Strathmore, USIU) OR Coding bootcamp + Google/AWS/Meta certs',
         'Safaricom, banks, tech startups, iHub, remote work',
         'KSh 80,000–500,000  /  USD 3,000–10,000 (remote)'],
        ['Data Scientist',
         'Mathematics A, CS B+, Statistics or Physics',
         'BSc Data Science / BSc Statistics with CS — UoN, Strathmore',
         'KNBS, M-PESA data teams, banking analytics, agri-data firms',
         'KSh 100,000–600,000  /  USD 5,000–15,000 (remote)'],
        ['Cybersecurity Analyst',
         'CS B+, Mathematics B, English B',
         'BSc CS + CEH / CISSP / CompTIA Security+ certification',
         'Central Bank of Kenya, government agencies, financial institutions',
         'KSh 120,000–700,000'],
        ['Network Engineer',
         'CS B+, Mathematics B, Physics B+',
         'CCNA / CCNP (Cisco)  OR  CompTIA Network+ certification',
         'Safaricom, Airtel, ISPs, corporate IT departments',
         'KSh 80,000–350,000'],
        ['AI / Machine Learning Engineer',
         'Mathematics A, CS A−, Physics B+',
         'BSc CS (AI specialisation); MSc AI (global universities)',
         'Global tech companies (Google, Microsoft, Meta); AI labs; startups',
         'USD 8,000–30,000+/month globally'],
        ['Database Administrator (DBA)',
         'CS B+, Mathematics B',
         'BSc CS or IT + Oracle DBA / Microsoft SQL Server certification',
         'Banks, hospitals, government ministries, Safaricom',
         'KSh 70,000–300,000'],
      ];

      const medC = ['CAREER','KCSE REQUIREMENTS','UNIVERSITY',
                    'PROFESSIONAL REGISTRATION','SALARY (KSh/month)'];
      const medR = [
        ['Medical Doctor',
         'Mathematics B+, Biology A, Chemistry A, English B+',
         'MBChB — University of Nairobi, Moi University, Mount Kenya University',
         'Kenya Medical Practitioners and Dentists Council (KMPDC)',
         '150,000 – 800,000+  (specialists)'],
        ['Pharmacist',
         'Mathematics B+, Chemistry A, Biology B+',
         'BPharm — University of Nairobi, MSA University',
         'Pharmacy and Poisons Board Kenya',
         '80,000 – 350,000'],
        ['Environmental Scientist',
         'Mathematics B, Biology A−, Chemistry B+',
         'BSc Environmental Science — JKUAT, UoN, Egerton University',
         'National Environment Management Authority (NEMA)',
         '50,000 – 200,000'],
        ['Agricultural Scientist',
         'Mathematics B, Biology A−, Agriculture B+, Chemistry B',
         'BSc Agriculture / Agronomy — Egerton University, University of Nairobi',
         'Kenya Agricultural Research Institute (KARI)',
         '50,000 – 180,000'],
      ];

      const linksC = ['INSTITUTION / RESOURCE','URL'];
      const linksR = [
        ['KUCCPS — University Placement Service','kuccps.net'],
        ['University of Nairobi',               'uonbi.ac.ke'],
        ['JKUAT',                               'jkuat.ac.ke'],
        ['Strathmore University',               'strathmore.edu'],
        ['Kenyatta University',                 'ku.ac.ke'],
        ['Dedan Kimathi University of Tech.',   'dkut.ac.ke'],
        ['Engineers Board of Kenya',            'ebk.or.ke'],
        ['ICT Authority of Kenya',              'ict.go.ke'],
        ['Teachers Service Commission',         'tsc.go.ke'],
        ['Kenya Medical Practitioners Council', 'kmpdc.go.ke'],
        ['NEMA Kenya',                          'nema.go.ke'],
      ];

      const advice = `
ADVICE FOR STEM LEARNERS — MAXIMISING YOUR OPPORTUNITIES
================================================================

1. BUILD A PORTFOLIO EARLY
   Whether in Mathematics or CS, collect your best work in a portfolio.
   For CS, host projects on GitHub. Employers value demonstrable skills
   over certificates alone.

2. PURSUE FREE CERTIFICATIONS ALONGSIDE SCHOOL
   Google IT Support Certificate, Cisco NetAcad, Microsoft Learn,
   Meta Developer certifications — all free, all strengthen your CV
   and university application.

3. MATHEMATICS IS THE GATEWAY
   Almost every high-earning STEM career requires strong mathematics.
   Invest time UNDERSTANDING concepts, not just memorising procedures.

4. LEARN PYTHON NOW
   It is the most versatile programming language for data science, AI,
   web development, and automation. Grade 10 is the perfect time to start.

5. CONNECT WITH PROFESSIONALS
   Use LinkedIn to connect with Kenyan professionals in your career
   of interest. Most are genuinely happy to give advice and mentorship.

6. ATTEND STEM COMPETITIONS AND CLUBS
   Kenya Science & Engineering Fair (KSEF), national coding competitions,
   Mathematics Olympiads — these open doors to scholarships and recognition.

IMPORTANT NOTE:
University admission cutoff points change EVERY YEAR. Always verify
current requirements from official KUCCPS announcements and directly
from individual university prospectuses before making any decisions.
`;
      return [
        hdr,
        '\nA. CAREERS REQUIRING STRONG MATHEMATICS\n================================================================\n',
        makeTable(mathC, mathR),
        '\nB. ICT AND COMPUTER SCIENCE CAREERS\n================================================================\n',
        makeTable(ictC, ictR),
        '\nC. COMBINED MATHEMATICS + SCIENCE CAREERS\n================================================================\n',
        makeTable(medC, medR),
        '\nD. USEFUL LINKS FOR UNIVERSITY ADMISSION AND PROFESSIONAL REGISTRATION\n================================================================\n',
        makeTable(linksC, linksR),
        advice,
        docFooter('STEM Career Pathways Guide — Mathematics & Computer Science (Grade 10–12)'),
      ].join('\n');
    },
  },

  // ── CG 2 ───────────────────────────────────────────────
  {
    id: 'career-pathway-selection',
    cat: 'career', icon: '🎯',
    title: 'Senior Secondary Pathway Selection Guide — From KJSEA to Grade 10',
    grade: 'Grade 9', subject: 'All Pathways', terms: 'Grade 9 Exit',
    desc: 'Step-by-step guide for Grade 9 learners and parents on how Senior Secondary pathway selection works: KJSEA subjects, how results influence placement, subject combinations per pathway, and what to do if your preferred pathway is not available at your school.',
    topics: ['Pathway Selection','KJSEA','Grade 9','STEM',
             'Social Sciences','Arts & Sports','Appeal Process'],
    content: () => {
      const hdr = docHeader(
        'SENIOR SECONDARY PATHWAY SELECTION GUIDE',
        '—', 'Grade 9 / Grade 10 Entry', null, 'Grade 9 Exit', '—', '—', '—',
        'MoE, KNEC, KICD CBC 2-6-3-3 Policy'
      );
      const kjseaC = ['SUBJECT ASSESSED','COMPULSORY?','PATHWAY RELEVANCE'];
      const kjseaR = [
        ['English',                        'Yes','All three pathways — language of instruction'],
        ['Kiswahili',                      'Yes','All three pathways — national language'],
        ['Mathematics',                    'Yes','STEM pathway — KEY performance indicator'],
        ['Integrated Science',             'Yes','STEM pathway — KEY performance indicator'],
        ['Social Studies',                 'Yes','Social Sciences pathway — KEY indicator'],
        ['Religious Education (CRE/IRE/HRE)','Yes','All three pathways'],
        ['Creative Arts & Design',         'Yes','Arts & Sports Science — KEY indicator'],
        ['Pre-Technical & Pre-Career Edu.','Yes','STEM / TVET — important indicator'],
      ];

      const guidC = ['PATHWAY','SUBJECT','RECOMMENDED KJSEA PERFORMANCE'];
      const guidR = [
        ['STEM (Pathway 1)',           'Mathematics',         'ME or EE strongly recommended; AE may require a documented support plan'],
        ['STEM (Pathway 1)',           'Integrated Science',  'ME or EE recommended; AE considered with support plan'],
        ['STEM (Pathway 1)',           'English',             'ME minimum required'],
        ['Social Sciences (Pathway 2)','English',             'ME or EE recommended (language-heavy pathway)'],
        ['Social Sciences (Pathway 2)','Social Studies',      'ME or EE recommended'],
        ['Social Sciences (Pathway 2)','Mathematics',         'AE acceptable; ME preferred for Business-track subjects'],
        ['Arts & Sports (Pathway 3)',  'Creative Arts & Design','ME or EE strongly recommended'],
        ['Arts & Sports (Pathway 3)',  'Sports / PE',         'Evidence of talent or co-curricular participation required'],
      ];

      const comboC = ['STEM SUBJECT COMBINATION','LIKELY UNIVERSITY CAREER PATH'];
      const comboR = [
        ['Mathematics + Physics + CS',            'Computer Engineering, Software Development, AI, Networks'],
        ['Mathematics + Biology + Chemistry',     'Medicine, Pharmacy, Biochemistry, Nursing, Dentistry'],
        ['Mathematics + Physics + Chemistry',     'Electrical/Mechanical/Chemical/Civil Engineering'],
        ['Mathematics + Biology + Agriculture',   'Agronomy, Veterinary Science, Food Science, Environmental Science'],
        ['Mathematics + Chemistry + CS',          'Data Science, Cheminformatics, Pharmaceutical Informatics'],
        ['Mathematics + Physics + Biology',       'Biomedical Engineering, Biophysics, Physiotherapy'],
      ];

      const stepsC = ['STEP','WHO DOES IT','WHAT HAPPENS'];
      const stepsR = [
        ['Step 1','KNEC',                       'Releases KJSEA results to schools and learners'],
        ['Step 2','School counsellors',          'Administer KICD-approved aptitude and career interest assessments'],
        ['Step 3','Learner + parent/guardian',   'Express preferred pathway based on career goals and aptitude'],
        ['Step 4','School Placement Committee',  'Reviews KJSEA results, aptitude scores, and expressed preference; makes provisional placement'],
        ['Step 5','School administration',       'Notifies learner of pathway placement before Grade 10 begins'],
        ['Step 6','School',                      'Confirms resource capacity (labs, specialist teachers) for selected subjects'],
      ];

      const faqC = ['FREQUENTLY ASKED QUESTION','ANSWER'];
      const faqR = [
        ['Can a learner change pathway after starting Grade 10?',
         'Generally not permitted. In exceptional cases of clear misplacement, the head teacher and County Director of Education may approve a transfer — ideally before the end of Term 1.'],
        ['Is KJSEA the only factor in pathway placement?',
         'No. KJSEA results, school-based aptitude assessment, AND learner/parent expressed preference are all considered. No single factor is decisive.'],
        ['What if a learner wants STEM but scored AE in Mathematics?',
         'Entry may still be permitted with a documented support plan, including extra tuition and a mandatory review at the end of Grade 10 Term 1. Parents should be fully aware of the academic demands.'],
        ['What if my school does not offer the STEM pathway?',
         'Options include: (1) Transfer to a school offering STEM in your sub-county; (2) Appeal to the County Director of Education; (3) Apply to a registered TVET institution for an aligned certificate programme.'],
        ['Do private schools follow the same pathway rules?',
         'Yes. All schools registered with the Ministry of Education must follow the 2-6-3-3 CBC framework. Individual schools may have additional subject-specific entry criteria.'],
        ['When is the first KCSE under the new CBC structure?',
         'The first CBC KCSE (Kenya Certificate of Secondary Education) is expected approximately 2028, for the cohort that entered Grade 10 in 2025.'],
      ];

      const linksC = ['RESOURCE','URL'];
      const linksR = [
        ['Ministry of Education Kenya',  'education.go.ke'],
        ['KNEC (KJSEA / KCSE)',          'knec.ac.ke'],
        ['KICD (Curriculum Designs)',    'kicd.ac.ke'],
        ['TSC (Teacher Requirements)',   'tsc.go.ke'],
        ['KUCCPS (University Placement)','kuccps.net'],
        ['KNQA (Qualifications)',        'knqa.go.ke'],
        ['TVET Authority Kenya',         'tveta.go.ke'],
      ];

      return [
        hdr,
        '\nA. WHAT IS PATHWAY SELECTION?\n================================================================\n',
        '  At the end of Grade 9, every Kenyan learner under the CBC 2-6-3-3 structure selects\n',
        '  ONE of three Senior Secondary pathways for Grades 10, 11, and 12:\n\n',
        '    PATHWAY 1 — STEM (Science, Technology, Engineering & Mathematics)\n',
        '    PATHWAY 2 — SOCIAL SCIENCES (Arts, Humanities, Business, Languages)\n',
        '    PATHWAY 3 — ARTS & SPORTS SCIENCE (Creative Arts, Music, PE, Performing Arts)\n\n',
        '\nB. SUBJECTS ASSESSED IN THE KJSEA\n================================================================\n',
        makeTable(kjseaC, kjseaR),
        '\nC. RECOMMENDED KJSEA PERFORMANCE BY PATHWAY\n================================================================\n',
        makeTable(guidC, guidR),
        '\nD. STEM SUBJECT COMBINATIONS — COMMON EXAMPLES\n================================================================\n',
        makeTable(comboC, comboR),
        '\nE. THE PLACEMENT PROCESS — 6 STEPS\n================================================================\n',
        makeTable(stepsC, stepsR),
        '\nF. FREQUENTLY ASKED QUESTIONS\n================================================================\n',
        makeTable(faqC, faqR),
        '\nG. USEFUL CONTACTS AND REFERENCES\n================================================================\n',
        makeTable(linksC, linksR),
        '\n  IMPORTANT: Verify all current rules from official government sources before making decisions.\n',
        docFooter('Senior Secondary Pathway Selection Guide — From KJSEA to Grade 10'),
      ].join('\n');
    },
  },


  /* ────────────────────────────────────────────────────────
     TEACHER GUIDES  (2 documents)
  ──────────────────────────────────────────────────────── */

  // ── TG 1 ───────────────────────────────────────────────
  {
    id: 'teacher-guide-assessment',
    cat: 'teacher', icon: '👩‍🏫',
    title: 'Teacher\'s Complete Guide to CBC Assessment Tools & Continuous Assessment',
    grade: 'All Grades', subject: 'All Subjects', terms: 'All Terms',
    desc: 'Professional guide covering all 13 KICD assessment tools with detailed descriptions, when to use each, practical examples, record-keeping formats, a term planning template, and TSC professional standards for assessment.',
    topics: ['Assessment Tools','CATs','Rubrics','Portfolios',
             'Observation Schedule','TSC Standards','Record Keeping'],
    content: () => {
      const hdr = docHeader(
        'COMPLETE GUIDE TO CBC ASSESSMENT TOOLS & CONTINUOUS ASSESSMENT',
        'All Subjects', 'All Grades', null, 'All Terms', '—', '—', '—',
        'KICD Assessment Guidelines; TSC Code of Regulations (2015); MoE CBC Policy'
      );

      const toolC = ['NO.','ASSESSMENT TOOL','DEFINITION','BEST USED FOR','KEY DESIGN PRINCIPLE'];
      const toolR = [
        ['1','Observation Schedule',
         'Structured list of specific observable learning behaviours; teacher ticks or counts during an activity',
         'Practicals, lab sessions, group work, PE, art, computer tasks',
         'List 5–10 SPECIFIC, OBSERVABLE behaviours — not vague qualities like "participated well"'],
        ['2','Oral Questions & Answers',
         'Planned, purposeful questions asked by the teacher to check understanding through dialogue',
         'Introduction (prior knowledge), mid-lesson comprehension check, lesson closure',
         'Pre-plan questions across Bloom\'s levels; use WAIT TIME (5–10 seconds); cold-call fairly'],
        ['3','Written Tests',
         'Structured written assessment using paper-based questions — CATs, unit tests, or examinations',
         'Summative assessment of content knowledge and procedural skills',
         'Include all Bloom\'s levels; ~1 mark per minute; share model answers within 1 week'],
        ['4','Checklist',
         'A YES/NO (or DONE/NOT DONE) list of specific skills, behaviours, or task components',
         'Skill completion, routine task submission, lab procedure steps',
         'Faster than a rubric; use for routine tasks; each item must be specific and observable'],
        ['5','Rating Scale',
         'A scale (typically 1–4 or 1–5) to rate the QUALITY or FREQUENCY of a behaviour or attribute',
         'Assessing the quality of participation, attitude, or learning behaviours',
         'Clearly define what each level looks like — do not assume it is obvious'],
        ['6','Rubric',
         'Criterion-referenced tool describing what quality looks like at each performance level (EE/ME/AE/BE)',
         'Complex tasks: projects, extended essays, presentations, coding assignments',
         'Use ANALYTIC rubrics; descriptors must be SPECIFIC, POSITIVE, and INCREMENTAL'],
        ['7','Portfolio',
         'A purposeful, organised, selective collection of a learner\'s work gathered over time',
         'Documenting learning growth; assessing multiple competencies across a term or year',
         'Learner must SELF-SELECT pieces AND annotate each; include at least 2 self-reflections per term'],
        ['8','Project',
         'An extended, real-world task requiring higher-order thinking over 1–4 weeks',
         'Assessing higher-order competencies; real-world application; Creativity and Self-Efficacy',
         'Share the RUBRIC before the project starts; include checkpoint dates; assess process + product'],
        ['9','Anecdotal Records',
         'Brief, factual, narrative notes made by the teacher about a specific learner\'s behaviour or progress',
         'Documenting unexpected but significant learning moments; community service learning',
         'Must be FACTUAL — record WHAT HAPPENED, not what you think it means; date every entry'],
        ['10','Peer Assessment',
         'A structured process where learners evaluate each other\'s work using a provided tool',
         'Presentations, group products, writing, coding tasks',
         'Train learners HOW to give specific feedback FIRST; teacher reviews before recording in grade book'],
        ['11','Self-Assessment',
         'A structured process where learners reflect on and evaluate their own performance',
         'Exit slips, mid-unit reflection, portfolio annotations, end-of-term goals',
         'Must be structured — use guided questions; avoid open-ended "How did you do?"'],
        ['12','Questionnaire',
         'A written survey to collect information about learners\' attitudes, preferences, or prior knowledge',
         'Start of year (prior knowledge), mid-term attitude survey, post-unit feedback',
         'Keep short (5–10 items); use Likert scales for attitude items; avoid leading questions'],
        ['13','Interview / Viva Voce',
         'A one-to-one or small-group teacher-learner conversation to assess understanding in depth',
         'After a project (to verify understanding), diagnostic before a unit, end-of-year review',
         'Prepare planned questions in advance; document responses; use a rating scale or anecdotal record'],
      ];

      /* Bloom's application table */
      const bloomsC = ['BLOOM\'S LEVEL','VERB EXAMPLES','MATHS APPLICATION','CS APPLICATION'];
      const bloomsR = [
        ['1. REMEMBER',  'define, state, list, recall, name',          'State the quadratic formula',                      'Name the Python data types'],
        ['2. UNDERSTAND','explain, describe, classify, interpret',     'Explain why we rationalise the denominator',        'Explain what a function\'s return value does'],
        ['3. APPLY',     'calculate, solve, use, perform, demonstrate','Solve 5 quadratic equations showing all working',   'Write a grade-classifier function in Python'],
        ['4. ANALYSE',   'analyse, compare, differentiate, examine',  'Determine why Δ<0 means no real roots exist',       'Trace a program with a bug and identify the error'],
        ['5. EVALUATE',  'justify, assess, critique, recommend',      'Justify which method is most efficient for a given equation','Compare two sorting algorithms; recommend which is better'],
        ['6. CREATE',    'design, plan, compose, build, invent',      'Design an original word problem using quadratics',  'Build an original Python application solving a school problem'],
      ];

      /* Term planning template */
      const planC = ['WEEK','STRAND / TOPIC','ASSESSMENT TOOL(S)','COMPETENCY TARGETED','RECORD KEPT IN'];
      const planR = [
        ['1',  '—','Questionnaire + Oral Q&A',         'Learning to Learn',           'Assessment folder'],
        ['2',  '—','Observation Schedule',              'Digital Literacy / Self-Efficacy','Observation grid'],
        ['3',  '—','Written Test (CAT 1)',               'Critical Thinking',           'Mark book + scripts'],
        ['4',  '—','Checklist (practical task)',         'Self-Efficacy',               'Checklist sheet'],
        ['5',  '—','Oral Q&A',                          'Communication & Collaboration','Oral Q&A record sheet'],
        ['6',  '—','Portfolio review (formative)',       'Learning to Learn',           'Portfolio folder'],
        ['7',  '—','Rating Scale (group discussion)',   'Communication & Collaboration','Rating scale sheet'],
        ['8',  '—','Anecdotal Records',                 'Observe during activity',     'Anecdotal record book'],
        ['9',  '—','Peer Assessment (presentation)',    'Collaboration / Communication','Peer assessment forms'],
        ['10', '—','Written Test (CAT 2)',               'Critical Thinking',           'Mark book + scripts'],
        ['11', '—','Project assessment (rubric)',        'Creativity / Problem Solving','Rubric + project file'],
        ['12', '—','Self-Assessment (reflection)',       'Learning to Learn',           'Portfolio / reflection sheets'],
        ['13', '—','Written Examination (summative)',    'All competencies',            'Exam scripts + mark book'],
      ];

      /* TSC professional standards */
      const tscC = ['TSC PROFESSIONAL STANDARD FOR ASSESSMENT','REGULATORY SOURCE'];
      const tscR = [
        ['Administer all assessments fairly; without bias toward any learner',       'TSC Code of Regulations'],
        ['Maintain strict confidentiality of all learner results and assessment records','TSC Code of Regulations'],
        ['Provide timely (within 1 week), constructive, and specific written feedback','TSC Professional Standards'],
        ['Keep accurate, dated assessment records accessible to school administration','TSC Code of Regulations'],
        ['Report assessment data to parents/guardians at least once per term',       'MoE Circular'],
        ['Report any suspected assessment malpractice immediately to the head teacher','KNEC Assessment Guidelines'],
        ['Never mark their own child\'s work in the same class they teach',          'TSC Code of Ethics'],
        ['Never use assessment as a form of punishment or disciplinary tool',        'TSC Code of Regulations'],
        ['Ensure all 13 KICD assessment tools are used at least once per term',      'KICD Assessment Guidelines'],
        ['Complete teacher reflection after each lesson (lesson plan file)',          'TSC / SCQAO Inspection Standards'],
      ];

      const intro = `
INTRODUCTION — WHAT CBC ASSESSMENT IS AND IS NOT
================================================================
Assessment in CBC is CONTINUOUS, FORMATIVE, and COMPETENCY-BASED.

KEY DISTINCTION:
  FORMATIVE assessment: ongoing, low-stakes, used to IMPROVE learning
                        while it is still happening.
                        Most CBC tools are primarily formative.

  SUMMATIVE assessment: end-of-unit or end-of-term, used to MEASURE
                        what has been achieved.
                        CATs and examinations are summative.

WHAT CBC ASSESSMENT AIM TO DO:
  1. Document learner PROGRESS over time — not just one-moment performance
  2. Assess all SEVEN CORE COMPETENCIES — not only subject content recall
  3. Use MULTIPLE TOOLS to capture different dimensions of learning
  4. EMPOWER LEARNERS through self-assessment and peer assessment
  5. Inform TEACHING through regular diagnostic feedback

WHAT CBC ASSESSMENT IS NOT:
  • NOT a single final examination that determines everything
  • NOT only written tests — oral, practical, and portfolio evidence matter equally
  • NOT ranking learners against each other — it is criterion-referenced (EE/ME/AE/BE)
  • NOT a punishment tool
`;
      return [
        hdr, intro,
        '\nPART 1: ALL 13 KICD ASSESSMENT TOOLS — COMPLETE REFERENCE\n================================================================\n',
        makeTable(toolC, toolR),
        '\nPART 2: BLOOM\'S TAXONOMY — PRACTICAL CLASSROOM APPLICATION\n================================================================\n',
        'A single lesson should address at least THREE Bloom\'s levels.\n',
        'CRITICAL: Avoid planning only "Remember" and "Understand" level tasks.\n\n',
        makeTable(bloomsC, bloomsR),
        '\nPART 3: TERM ASSESSMENT PLANNING TEMPLATE\n================================================================\n',
        'RULE: Across one full term, ALL 13 tools must be used at least once.\n',
        'Subject: _________ Grade: _____ Teacher: _________________ Term: ____\n\n',
        makeTable(planC, planR),
        '\nPART 4: TSC PROFESSIONAL STANDARDS FOR ASSESSMENT (MANDATORY)\n================================================================\n',
        makeTable(tscC, tscR),
        '\nSources: TSC Code of Regulations (2015), KICD Assessment Guidelines,\n',
        'MoE CBC Implementation Circulars, TSC Professional Standards.\n',
        '\nAlways cross-reference with current TSC and KICD publications.\n',
        docFooter('Teacher\'s Complete Guide to CBC Assessment Tools & Continuous Assessment'),
      ].join('\n');
    },
  },

  // ── TG 2 ───────────────────────────────────────────────
  {
    id: 'teacher-guide-lesson-planning',
    cat: 'teacher', icon: '👩‍🏫',
    title: 'Teacher\'s Guide to Writing High-Quality CBC Lesson Plans',
    grade: 'All Grades', subject: 'All Subjects', terms: 'All Terms',
    desc: 'Step-by-step guide for writing professional CBC lesson plans: the five lesson phases, all four SLO models (VOC, ABCD, SMART, Mager), differentiation strategies (three-tier model), Bloom\'s Taxonomy, and a blank template. Aligned to TSC inspection standards.',
    topics: ['Lesson Planning','VOC Model','ABCD Model','Bloom\'s Taxonomy',
             'Differentiation','Three-Tier Model','TSC Inspection','KICD Standards'],
    content: () => {
      const hdr = docHeader(
        'GUIDE TO WRITING HIGH-QUALITY CBC LESSON PLANS',
        'All Subjects', 'All Grades', null, 'All Terms', '—', '—', '—',
        'KICD Teacher Guides; TSC Code of Regulations; MoE CBC Implementation Guidelines'
      );

      /* SLO models */
      const sloC = ['MODEL','BEST USED FOR','STRUCTURE','WORKED EXAMPLE'];
      const sloR = [
        ['VOC',   'Daily lesson-level SLOs (most common)',
         'VERB + OBJECT + CONTEXT',
         '"Differentiate [V] polynomial functions [O] using the power rule: d/dx(xⁿ)=nxⁿ⁻¹ [C]"'],
        ['ABCD',  'Unit or scheme-level outcomes',
         'AUDIENCE + BEHAVIOUR + CONDITION + DEGREE',
         '"Grade 10 STEM learners [A] will solve quadratic equations [B] in a 40-min CAT without a calculator [C] scoring ≥60% [D]"'],
        ['SMART', 'Projects, portfolio goals, long-term targets',
         'Specific + Measurable + Achievable + Relevant + Time-bound',
         '"By end of Week 12 Term 2, each group will deliver a working Python app assessed at ME or above on the rubric"'],
        ['Mager','Practical and lab-based tasks',
         'PERFORMANCE + CONDITION + CRITERION',
         '"Write a bubble sort function in Python [P] using a school computer with Python 3 installed [C] producing correct output for 5+ test inputs with no runtime errors [Cr]"'],
      ];

      /* Bloom's verbs */
      const verbsC = ['BLOOM\'S LEVEL','BLOOM\'S ACTION VERBS (PARTIAL LIST)','AVOID THESE (NOT OBSERVABLE)'];
      const verbsR = [
        ['1. REMEMBER',  'define, list, label, identify, name, state, recall, recite',  '"know", "understand", "be aware of"'],
        ['2. UNDERSTAND','explain, describe, summarise, classify, distinguish, interpret, compare','appreciate, enjoy, feel'],
        ['3. APPLY',     'calculate, solve, use, demonstrate, apply, construct, perform', 'do'],
        ['4. ANALYSE',   'analyse, investigate, differentiate, examine, break down, compare, contrast','think about'],
        ['5. EVALUATE',  'justify, assess, evaluate, critique, argue, defend, judge, recommend','consider'],
        ['6. CREATE',    'design, plan, compose, create, construct, develop, invent, produce','be creative'],
      ];

      /* Differentiation table */
      const diffC = ['TIER','GROUP','TYPICAL ADAPTATIONS','WHAT TO AVOID'];
      const diffR = [
        ['Tier 1','Support / Scaffolded',
         'Reference cards; formula sheets; word banks; reduce quantity not quality; use visual representations; provide a worked example; allow calculator for computation; buddy system',
         'Giving Tier 1 learners only easier tasks — challenge them at an appropriate level WITH scaffolds'],
        ['Tier 2','Core / Standard',
         'Standard grade-level task as planned; expected to complete independently; minimum teacher prompting',
         'Treating all Tier 2 learners identically — some may finish early and need extension within Tier 2'],
        ['Tier 3','Extension / Enrichment',
         'Extend the problem (more variables, real data); HOW and WHY questions; introduce generalisation or proof; create their own problem; connect to advanced concept',
         'Simply giving more of the same questions — extension means DEEPER, not just MORE'],
      ];

      /* 5 phases table */
      const phaseC = ['PHASE','NAME','TYPICAL TIME','TEACHER ROLE','LEARNER ROLE'];
      const phaseR = [
        ['1','Introduction / Orientation',   '5–10 min', 'Activate prior knowledge; pose a problem or question; create curiosity',              'Respond to hook; connect to prior learning; surface misconceptions'],
        ['2','Main Lesson — Part A',          '15–20 min','Teach new concept; model with worked examples; think aloud',                         'Watch, copy, ask questions; attempt guided examples'],
        ['3','Main Lesson — Part B',          '10–15 min','Present extension or second concept; facilitate guided practice',                    'Pair or group activity; apply with teacher support'],
        ['4','Individual Practice / Application','10–20 min','Circulate; observe; address misconceptions; differentiate (Tiers 1/2/3)',         'Work independently on tiered task; apply learning'],
        ['5','Closure / Assessment',          '5–10 min', 'Collect evidence of learning; exit slip; Q&A; preview next lesson',                  'Demonstrate understanding; self-assess; reflect'],
      ];

      /* TSC inspection checklist */
      const inspecC = ['SCQAO INSPECTION ITEM','REQUIRED STANDARD'];
      const inspecR = [
        ['Lesson plan present, dated, and teacher-signed',
         'Every lesson; stored in lesson plan file by date order'],
        ['SLOs written using approved model (VOC most common)',
         'Minimum 2, maximum 4 SLOs; each observable and measurable'],
        ['Lesson plan date matches the scheme of work for that week',
         'Must be consistent; scheme and plan must align perfectly'],
        ['Differentiation explicitly planned (three tiers or equivalent)',
         'Tier 1/2/3 described; not just "fast learners and slow learners"'],
        ['At least one assessment tool identified and described',
         'Tool named AND method of recording results clearly stated'],
        ['Core competencies identified (tick boxes or listed)',
         'At least 2 competencies clearly relevant to lesson activities'],
        ['KICD curriculum design reference cited (title + page number)',
         'e.g. "KICD Core Mathematics Grade 10 Design, July 2025, p.7"'],
        ['Resources listed are actually available in the classroom',
         'SCQAO may physically check; never list resources you do not have'],
        ['Lesson delivery observed matches what is written in the plan',
         'The plan is a live document — update it if the lesson changes'],
        ['Teacher reflection completed for ALL previous lessons',
         'Every lesson plan must have Section 7 (Reflection) filled in after teaching'],
      ];
      const intro = `
INTRODUCTION — WHAT CBC ASSESSMENT IS AND IS NOT
================================================================
Assessment in CBC is CONTINUOUS, FORMATIVE, and COMPETENCY-BASED.

KEY DISTINCTION:
  FORMATIVE assessment: ongoing, low-stakes, used to IMPROVE learning
                        while it is still happening.
                        Most CBC tools are primarily formative.

  SUMMATIVE assessment: end-of-unit or end-of-term, used to MEASURE
                        what has been achieved.
                        CATs and examinations are summative.

WHAT LESSON PLANNING AIM TO DO:
  1. Clarify the SPECIFIC LEARNING OUTCOMES before you enter the classroom
  2. Ensure every learner is CHALLENGED at an appropriate level (differentiation)
  3. Choose ACTIVITIES that build the target competency — not just cover content
  4. Plan HOW you will know learning has occurred (assessment tool per lesson)
  5. Create a WRITTEN RECORD that satisfies TSC/SCQAO inspection standards

WHAT A LESSON PLAN IS NOT:
  • NOT a script to read aloud — it is a framework you adapt in the moment
  • NOT optional — TSC inspectors check lesson plan files without notice
  • NOT complete without a TEACHER REFLECTION filled in AFTER delivery
  • NOT only for new teachers — experienced teachers plan; they just plan faster
`;

      const blankTemplate = `
BLANK LESSON PLAN TEMPLATE
================================================================
[SCHOOL NAME]                                LESSON PLAN

Subject          : ___________________________
Grade            : ___________________________
Pathway          : ___________________________
Strand           : ___________________________
Sub-Strand       : ___________________________
Duration         : __________ minutes
Date             : ___________________________
Lesson Number    : __________ of __________
Class Register   : ___________________________
Teacher          : ___________________________
KICD Reference   : ___________________________
================================================================

1. SPECIFIC LEARNING OUTCOMES  (VOC Model)
----------------------------------------------------------------
By the end of this lesson, the learner should be able to:
  a) ___[V]___ ___[Object]___ ___[Context]___
  b) ___[V]___ ___[Object]___ ___[Context]___
  c) ___[V]___ ___[Object]___ ___[Context]___   (optional third)

2. CORE COMPETENCIES  (tick all that apply)
----------------------------------------------------------------
  [ ] Communication & Collaboration    [ ] Critical Thinking & Problem Solving
  [ ] Creativity & Imagination         [ ] Digital Literacy
  [ ] Citizenship                      [ ] Learning to Learn
  [ ] Self-Efficacy

3. PREREQUISITE KNOWLEDGE
----------------------------------------------------------------
  • _______________________________________________________________
  • _______________________________________________________________

4. LEARNING RESOURCES
----------------------------------------------------------------
  • _______________________________________________________________
  • _______________________________________________________________

5. LESSON DEVELOPMENT
----------------------------------------------------------------

  PHASE 1 — INTRODUCTION  (___ min)
  Teacher activity: _______________________________________________
  Learner activity: _______________________________________________

  PHASE 2 — MAIN LESSON PART A  (___ min)
  Teacher activity: _______________________________________________
  Learner activity: _______________________________________________

  PHASE 3 — MAIN LESSON PART B / GUIDED PRACTICE  (___ min)
  Teacher activity: _______________________________________________
  Learner activity: _______________________________________________

  PHASE 4 — INDIVIDUAL PRACTICE  (___ min)
    Tier 1 (Support)   : ________________________________________
    Tier 2 (Core)      : ________________________________________
    Tier 3 (Extension) : ________________________________________

  PHASE 5 — CLOSURE / ASSESSMENT  (___ min)
    Tool used          : ________________________________________
    Exit activity      : ________________________________________

6. ASSESSMENT
----------------------------------------------------------------
  Tool(s) used       : _____________________________________________
  Recorded in        : _____________________________________________

7. TEACHER REFLECTION  (complete AFTER the lesson)
----------------------------------------------------------------
  Were the SLOs met?                       YES / PARTIALLY / NO
  Most effective phase / activity:         ________________________________
  Most common misconception observed:      ________________________________
  Number of learners who completed Tier 2: ________________________________
  Action I will take in the next lesson:   ________________________________
  Names of learners needing follow-up:     ________________________________
================================================================
`;

      return [
        hdr, intro,
        '\nPART 1: THE FOUR KICD LEARNING OUTCOME MODELS\n================================================================\n',
        makeTable(sloC, sloR),
        '\nPART 2: BLOOM\'S TAXONOMY — APPROVED VERBS AND APPLICATIONS\n================================================================\n',
        'CRITICAL RULE: The VERB must be OBSERVABLE. Avoid: know, understand, appreciate.\n\n',
        makeTable(verbsC, verbsR),
        '\nPART 3: THE FIVE LESSON PHASES\n================================================================\n',
        makeTable(phaseC, phaseR),
        '\nPART 4: THREE-TIER DIFFERENTIATION MODEL\n================================================================\n',
        'NOTE: Label tiers NEUTRALLY in the classroom — use "Task A / B / C" or\n',
        '"Starter / Main / Challenge" — never "slow / fast" or public tier numbers.\n\n',
        makeTable(diffC, diffR),
        '\nPART 5: TSC / SCQAO INSPECTION CHECKLIST\n================================================================\n',
        'During scheduled and UNANNOUNCED visits, the SCQAO will check all items below.\n\n',
        makeTable(inspecC, inspecR),
        blankTemplate,
        docFooter('Teacher\'s Guide to Writing High-Quality CBC Lesson Plans'),
      ].join('\n');
    },
  }, 

];

/* ── State ─────────────────────────────────────────────── */
let currentFilter = 'all';
let currentSearch = '';
let currentSort   = 'default';

/* ── Category metadata ──────────────────────────────────── */
const CAT_META = {
  scheme:     { badge: 'badge-scheme',     label: 'Scheme of Work' },
  lesson:     { badge: 'badge-lesson',     label: 'Lesson Plan' },
  curriculum: { badge: 'badge-curriculum', label: 'Curriculum Design' },
  assessment: { badge: 'badge-assessment', label: 'Assessment Tool' },
  notes:      { badge: 'badge-notes',      label: 'Student Notes' },
  career:     { badge: 'badge-career',     label: 'Career Guide' },
  teacher:    { badge: 'badge-teacher',    label: 'Teacher Guide' },
  community:  { badge: 'badge-community',  label: 'Community Upload' },
};

const CAT_ORDER = {
  scheme: 0, lesson: 1, curriculum: 2,
  assessment: 3, notes: 4, career: 5, teacher: 6,
};

/* ── Grade sort helper ──────────────────────────────────── */
function gradeNum(g) {
  const m = String(g).match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 99;
}

/* ════════════════════════════════════════════════════════════
   renderCards — builds the resource card grid
════════════════════════════════════════════════════════════ */
function renderCards(items) {
  const grid = document.getElementById('resourcesGrid');
  if (!grid) return;

  document.getElementById('resultsCount').textContent = items.length;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
        <h3 style="font-size:1.2rem;font-weight:800;color:var(--navy);margin-bottom:.5rem">
          No resources found
        </h3>
        <p>Try a different search term or select a different category filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = items.map(r => {
    const meta  = CAT_META[r.cat] || { badge: '', label: r.cat };
    const topics = (r.topics || [])
      .map(t => `<span class="topic-tag">${t}</span>`).join('');
    const metas  = [r.grade, r.subject, r.terms].filter(Boolean)
      .map(m => `<span class="meta-tag">📌 ${m}</span>`).join('');

    return `
      <div class="resource-card cat-${r.cat}">
        <div class="card-top">
          <div class="card-icon">${r.icon || '📄'}</div>
          <span class="card-badge ${meta.badge}">${meta.label}</span>
        </div>
        <h3>${r.title}</h3>
        <div class="resource-meta">${metas}</div>
        <p class="resource-desc">${r.desc}</p>
        ${topics ? `<div class="resource-topics">${topics}</div>` : ''}
        <div class="card-actions">
          <button class="btn-download" onclick="downloadResource('${r.id}')">
            📥 Download
          </button>
          <button class="btn-preview" onclick="previewResource('${r.id}')">
            👁 Preview
          </button>
        </div>
      </div>`;
  }).join('');
}

/* ════════════════════════════════════════════════════════════
   applyFilters — filter + search + sort then re-render
════════════════════════════════════════════════════════════ */
function applyFilters() {
  const searchEl = document.getElementById('searchInput');
  const sortEl   = document.getElementById('sortSelect');
  currentSearch  = searchEl ? searchEl.value.toLowerCase().trim() : '';
  currentSort    = sortEl   ? sortEl.value : 'default';

  let filtered = RESOURCES.filter(r => {
    /* category filter */
    if (currentFilter !== 'all' && r.cat !== currentFilter) return false;
    /* text search */
    if (!currentSearch) return true;
    const haystack = [
      r.title, r.subject, r.grade, r.terms, r.desc,
      ...(r.topics || []),
    ].join(' ').toLowerCase();
    return haystack.includes(currentSearch);
  });

  /* sort */
  if (currentSort === 'az') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'grade') {
    filtered = [...filtered].sort((a, b) =>
      gradeNum(a.grade) - gradeNum(b.grade));
  } else if (currentSort === 'category') {
    filtered = [...filtered].sort((a, b) =>
      (CAT_ORDER[a.cat] ?? 9) - (CAT_ORDER[b.cat] ?? 9));
  }

  /* update label */
  const labelMap = {
    all: 'All categories', scheme: 'Schemes of Work',
    lesson: 'Lesson Plans', curriculum: 'Curriculum Designs',
    assessment: 'Assessment Tools', notes: 'Student Notes',
    career: 'Career Guides', teacher: 'Teacher Guides',
  };
  const labelEl = document.getElementById('activeFilterLabel');
  if (labelEl) {
    labelEl.textContent =
      (currentSearch ? `Searching: "${currentSearch}" in ` : '') +
      (labelMap[currentFilter] || currentFilter);
  }

  renderCards(filtered);
}

/* ════════════════════════════════════════════════════════════
   setFilter — updates active filter pill + re-applies
════════════════════════════════════════════════════════════ */
function setFilter(cat) {
  currentFilter = cat;
 document.querySelectorAll('.fpill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  applyFilters();
}

/* ════════════════════════════════════════════════════════════
   downloadResource — generates and downloads a .txt file
════════════════════════════════════════════════════════════ */
function downloadResource(id) {
  const resource = RESOURCES.find(r => r.id === id);
  if (!resource) return;

  let text;
  try {
    text = resource.content();
  } catch (e) {
    showToast('⚠️ Content not available for download.');
    return;
  }

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;

  /* clean safe filename */
  const safeName = resource.title
    .replace(/[^\w\s\-]/g, '')
    .replace(/\s+/g, '_')
    .slice(0, 70);
  a.download = `CBC_Best_${safeName}.txt`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('📥 Download started — check your Downloads folder.');
}

/* ════════════════════════════════════════════════════════════
   previewResource — opens the preview modal
════════════════════════════════════════════════════════════ */
function previewResource(id) {
  const resource = RESOURCES.find(r => r.id === id);
  if (!resource) return;

  document.getElementById('previewTitle').textContent = resource.title;

  let previewText;
  try {
    const full = resource.content();
    /* show the first ~3 200 characters as a preview */
    previewText = full.length > 3200
      ? full.slice(0, 3200) +
        '\n\n[...]\n\n──── Preview limited to first section. ────\n──── Download the full document for complete content. ────'
      : full;
  } catch (e) {
    previewText = 'Preview not available for this document. Please download it.';
  }

  document.getElementById('previewContent').textContent = previewText;

  /* wire the modal download button */
  const dlBtn = document.getElementById('previewDownloadBtn');
  if (dlBtn) {
    dlBtn.onclick = () => { closeModal(); downloadResource(id); };
  }

  const modal = document.getElementById('previewModal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

/* ════════════════════════════════════════════════════════════
   closeModal — hides the preview modal
════════════════════════════════════════════════════════════ */
function closeModal() {
  const modal = document.getElementById('previewModal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

/* ════════════════════════════════════════════════════════════
   showToast — brief notification at bottom-right
════════════════════════════════════════════════════════════ */
function showToast(message) {
  /* remove any existing toast */
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3400);
}

/* ════════════════════════════════════════════════════════════
   DOMContentLoaded — initialise everything
════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Modal: close on overlay click ── */
  const overlay = document.getElementById('previewModal');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  /* ── Modal: close on Escape key ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* ── Search: trigger on Enter key ── */
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') applyFilters();
    });
  }

  /* ── Render all resources on first load ── */
  applyFilters();
});

/* ════════════════════════════════════════════════════════════
   renderStatsBand (optional) — dynamic stats cards
   Add <div id="statsBandContainer" class="stats-band"></div>
   anywhere in the HTML to show live category counts.
════════════════════════════════════════════════════════════ */
function renderStatsBand() {
  const container = document.getElementById('statsBandContainer');
  if (!container) return;

  const catLabels = {
    scheme: 'Schemes of Work', lesson: 'Lesson Plans',
    curriculum: 'Curriculum Designs', assessment: 'Assessment Tools',
    notes: 'Student Notes', career: 'Career Guides', teacher: 'Teacher Guides',
  };

  const counts = {};
  RESOURCES.forEach(r => { counts[r.cat] = (counts[r.cat] || 0) + 1; });

  container.innerHTML = Object.entries(counts)
    .sort(([a], [b]) => (CAT_ORDER[a] ?? 9) - (CAT_ORDER[b] ?? 9))
    .map(([cat, count]) => `
      <div class="stat-card" style="cursor:pointer" onclick="setFilter('${cat}')"
           title="Click to filter by ${catLabels[cat] || cat}">
        <div class="s-num">${count}</div>
        <div class="s-label">${catLabels[cat] || cat}</div>
        <div class="s-detail">Click to filter</div>
      </div>`)
    .join('');
}