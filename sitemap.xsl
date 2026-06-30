<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en-KE">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="robots" content="noindex, follow"/>
      <title>Sitemap — CBC Best · Ronny Mwenda</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
      <style>
        :root {
          --navy:     #0B1F2E;
          --navy2:    #132c40;
          --gold:     #C9A03D;
          --gold2:    #e6b94a;
          --cream:    #FFF8EE;
          --peach:    #FFE4C4;
          --white:    #FFFFFF;
          --text:     #1E2F3E;
          --muted:    #5a7285;
          --radius:   16px;
          --radius-lg:24px;
          --shadow:   0 4px 24px rgba(11,31,46,0.09);
          --font:     'Plus Jakarta Sans', system-ui, sans-serif;
          --mono:     'Space Mono', monospace;
        }
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
          font-family: var(--font);
          background: var(--cream);
          color: var(--text);
          line-height: 1.65;
          font-size: 15px;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        a { color:inherit; text-decoration:none; cursor:pointer; }

        /* HEADER */
        .site-header {
          background: var(--navy);
          border-bottom: 1px solid rgba(201,160,61,0.15);
        }
        .header-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0.9rem 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .logo { display:flex; align-items:center; gap:12px; }
        .logo-icon {
          width:40px; height:40px;
          background: var(--gold);
          border-radius: 10px;
          display:flex; align-items:center; justify-content:center;
          font-size:1.1rem; font-weight:800;
          color: var(--navy);
          font-family: var(--mono);
          flex-shrink:0;
        }
        .logo-text strong {
          display:block; font-size:1.1rem; font-weight:800;
          color:var(--white); letter-spacing:-0.3px; line-height:1.2;
        }
        .logo-text span { font-size:0.7rem; color:rgba(255,228,196,0.7); font-weight:500; }
        .header-badge {
          background: rgba(201,160,61,0.12);
          border: 1px solid rgba(201,160,61,0.28);
          color: var(--gold);
          font-size:0.72rem; font-weight:700;
          letter-spacing:1.2px; text-transform:uppercase;
          padding:5px 14px; border-radius:40px;
          font-family: var(--mono);
        }
        .header-nav { display:flex; gap:6px; flex-wrap:wrap; }
        .header-nav a {
          color:rgba(255,228,196,0.8); font-size:0.8rem; font-weight:600;
          padding:5px 10px; border-radius:8px; transition:all 0.18s; white-space:nowrap;
        }
        .header-nav a:hover { color:var(--white); background:rgba(201,160,61,0.15); }
        .header-nav a.cta {
          background:var(--gold); color:var(--navy);
          border-radius:40px; padding:5px 14px; font-weight:700;
        }
        .header-nav a.cta:hover { background:var(--gold2); }

        /* HERO STRIP */
        .hero-strip {
          background: var(--navy);
          border-bottom: 2px solid rgba(201,160,61,0.2);
          padding: 2.5rem 28px 2.2rem;
          text-align: center;
        }
        .hero-strip-inner { max-width:700px; margin:0 auto; }
        .hero-label {
          font-family:var(--mono); font-size:0.7rem;
          letter-spacing:2px; text-transform:uppercase;
          color:rgba(201,160,61,0.7); font-weight:700; margin-bottom:0.7rem;
        }
        .hero-strip h1 {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          font-weight:800; color:var(--white);
          letter-spacing:-0.5px; margin-bottom:0.6rem;
        }
        .hero-strip h1 em { font-style:italic; color:var(--gold); }
        .hero-strip p { font-size:0.88rem; color:rgba(255,228,196,0.7); line-height:1.75; }

        /* STATS BAR */
        .stats-bar {
          background: var(--navy2);
          border-bottom: 1px solid rgba(201,160,61,0.12);
          padding: 1rem 28px;
        }
        .stats-inner {
          max-width:1100px; margin:0 auto;
          display:flex; gap:2.5rem; flex-wrap:wrap; align-items:center;
        }
        .stat-item { display:flex; flex-direction:column; gap:2px; }
        .stat-num {
          font-family:var(--mono); font-size:1.3rem;
          font-weight:700; color:var(--white); line-height:1;
        }
        .stat-label {
          font-size:0.68rem; color:rgba(255,228,196,0.55);
          font-weight:500; letter-spacing:0.3px; text-transform:uppercase;
        }

        /* MAIN */
        .main { max-width:1100px; margin:0 auto; padding:3rem 28px 4rem; flex:1; }

        /* SECTION HEADERS */
        .section-label {
          font-family:var(--mono); font-size:0.68rem;
          letter-spacing:2px; text-transform:uppercase;
          color:var(--gold); font-weight:700; margin-bottom:0.4rem;
        }
        .section-title {
          font-size:1.2rem; font-weight:800;
          color:var(--navy); letter-spacing:-0.3px; margin-bottom:1.2rem;
        }
        .divider {
          width:40px; height:3px;
          background:var(--gold); border-radius:4px; margin-bottom:1rem;
        }

        /* INFO BAND */
        .info-band {
          background:var(--navy); border-radius:var(--radius-lg);
          padding:2rem 2.5rem; margin-bottom:2.5rem;
          display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:1.5rem;
        }
        .info-item-label {
          font-family:var(--mono); font-size:0.65rem;
          letter-spacing:1.5px; text-transform:uppercase;
          color:rgba(201,160,61,0.65); font-weight:700; margin-bottom:5px;
        }
        .info-item-value { font-size:0.9rem; font-weight:600; color:var(--white); line-height:1.4; }
        .info-item-sub { font-size:0.75rem; color:rgba(255,228,196,0.5); margin-top:3px; }

        /* URL TABLE */
        .url-section { margin-bottom:2.5rem; }
        .url-table {
          width:100%; border-collapse:collapse;
          background:var(--white); border-radius:var(--radius-lg);
          overflow:hidden; box-shadow:var(--shadow);
          border:1px solid rgba(0,0,0,0.04);
        }
        .url-table thead tr { background:var(--navy); }
        .url-table thead th {
          padding:12px 16px; text-align:left;
          font-size:0.72rem; font-weight:700;
          color:rgba(255,228,196,0.8); letter-spacing:1px;
          text-transform:uppercase; font-family:var(--mono);
        }
        .url-table tbody tr {
          border-bottom:1px solid rgba(0,0,0,0.04);
          transition:background 0.15s;
        }
        .url-table tbody tr:last-child { border-bottom:none; }
        .url-table tbody tr:hover { background:rgba(201,160,61,0.05) !important; }
        .url-table tbody tr:nth-child(even) { background:rgba(11,31,46,0.02); }
        .url-table td {
          padding:13px 16px; vertical-align:middle;
          font-size:0.85rem; color:var(--text);
        }
        .row-num {
          font-family:var(--mono); font-size:0.75rem;
          color:var(--muted); width:36px;
        }
        .url-link {
          color:var(--navy); font-weight:600; font-size:0.85rem;
          display:flex; align-items:center; gap:8px;
          transition:color 0.18s; word-break:break-all;
        }
        .url-link:hover { color:var(--gold); }
        .url-link::before {
          content:'→'; color:var(--gold);
          font-weight:700; flex-shrink:0; font-size:0.9rem;
        }
        .lastmod { font-family:var(--mono); font-size:0.75rem; color:var(--muted); }
        .freq-badge {
          display:inline-block; font-size:0.7rem; font-weight:700;
          padding:3px 10px; border-radius:40px;
          letter-spacing:0.3px; text-transform:capitalize;
        }
        .freq-daily   { background:rgba(29,158,117,0.12); color:#0f6e56; }
        .freq-weekly  { background:rgba(201,160,61,0.12);  color:#854F0B; }
        .freq-monthly { background:rgba(11,31,46,0.08);    color:var(--navy); }
        .freq-yearly  { background:rgba(90,114,133,0.1);   color:var(--muted); }
        .priority-wrap { display:flex; align-items:center; gap:8px; }
        .priority-bar-bg {
          width:80px; height:6px;
          background:rgba(11,31,46,0.08); border-radius:4px;
          overflow:hidden; flex-shrink:0;
        }
        .priority-bar-fill { height:100%; border-radius:4px; background:var(--gold); }
        .priority-val {
          font-family:var(--mono); font-size:0.78rem;
          font-weight:700; color:var(--navy); min-width:28px;
        }

        /* FOOTER */
        footer {
          background:var(--navy); color:rgba(255,228,196,0.65);
          padding:2.5rem 28px 1.5rem;
          border-top:2px solid rgba(201,160,61,0.2);
        }
        .footer-inner { max-width:1100px; margin:0 auto; }
        .footer-top {
          display:grid; grid-template-columns:2fr 1fr 1fr 1fr;
          gap:2.5rem; margin-bottom:1.5rem;
        }
        .footer-brand strong {
          display:block; color:var(--white);
          font-size:1rem; font-weight:800; margin-bottom:0.4rem;
        }
        .footer-brand p { font-size:0.8rem; line-height:1.7; max-width:280px; }
        .footer-ecosystem { font-size:0.75rem; color:rgba(255,228,196,0.45); margin-top:0.7rem; }
        .footer-ecosystem a { color:rgba(201,160,61,0.8); }
        .footer-ecosystem a:hover { color:var(--gold2); }
        .footer-col h4 {
          color:var(--white); font-size:0.78rem; font-weight:700;
          text-transform:uppercase; letter-spacing:0.5px; margin-bottom:0.8rem;
        }
        .footer-col a {
          display:block; font-size:0.8rem;
          color:rgba(255,228,196,0.6); padding:3px 0; transition:color 0.2s;
        }
        .footer-col a:hover { color:var(--gold); }
        .footer-bottom {
          border-top:1px solid rgba(201,160,61,0.1); padding-top:1rem;
          display:flex; justify-content:space-between;
          flex-wrap:wrap; gap:0.8rem;
          font-size:0.75rem; color:rgba(255,228,196,0.4);
        }
        .footer-bottom a { color:rgba(201,160,61,0.75); }
        .footer-bottom a:hover { color:var(--gold); }

        /* RESPONSIVE */
        @media (max-width:768px) {
          .header-nav { display:none; }
          .stats-inner { gap:1.5rem; }
          .main { padding:2rem 18px 3rem; }
          .info-band { padding:1.5rem; }
          .footer-top { grid-template-columns:1fr 1fr; }
          .footer-brand { grid-column:1 / -1; }
          .url-table td:nth-child(3),
          .url-table th:nth-child(3) { display:none; }
        }
        @media (max-width:480px) {
          .footer-top { grid-template-columns:1fr; }
          .url-table td:nth-child(4),
          .url-table th:nth-child(4) { display:none; }
        }
      </style>
    </head>
    <body>

      <header class="site-header">
        <div class="header-inner">
          <a href="/" class="logo">
            <div class="logo-icon">CB</div>
            <div class="logo-text">
              <strong>CBC Best</strong>
              <span>Ronny Mwenda · Kenya's CBC Hub</span>
            </div>
          </a>
          <span class="header-badge">XML Sitemap</span>
          <nav class="header-nav">
            <a href="/">Home</a>
            <a href="/pathways.html">Pathways</a>
            <a href="/mathematics-computer-science.html">Maths &amp; CS</a>
            <a href="/resources.html">Resources</a>
            <a href="/past-papers-revision.html">Past Papers</a>
            <a href="/about-contact.html" class="cta">Contact &#8594;</a>
          </nav>
        </div>
      </header>

      <div class="hero-strip">
        <div class="hero-strip-inner">
          <div class="hero-label">// XML Sitemap · KICD-Aligned CBC Resource</div>
          <h1>CBC Best <em>Sitemap</em></h1>
          <p>All pages on CBC Best — Kenya's most comprehensive Competency Based Curriculum hub. Built by Ronny Mwenda (Ronny Best), Mathematics &amp; Computer Science Teacher, Embu County.</p>
        </div>
      </div>

      <div class="stats-bar">
        <div class="stats-inner">
          <div class="stat-item">
            <span class="stat-num"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            <span class="stat-label">Total URLs</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">1.0</span>
            <span class="stat-label">Highest Priority</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">2026</span>
            <span class="stat-label">Last Updated</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">KE</span>
            <span class="stat-label">Region · en-KE</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">CBC</span>
            <span class="stat-label">KICD-Aligned</span>
          </div>
        </div>
      </div>

      <main class="main">

        <div class="info-band">
          <div>
            <div class="info-item-label">Website</div>
            <div class="info-item-value">CBC Best</div>
            <div class="info-item-sub">cbcbest.netlify.app</div>
          </div>
          <div>
            <div class="info-item-label">Author</div>
            <div class="info-item-value">Ronny Mwenda</div>
            <div class="info-item-sub">Maths &amp; CS Teacher · Embu, Kenya</div>
          </div>
          <div>
            <div class="info-item-label">Purpose</div>
            <div class="info-item-value">Kenya CBC Resource Hub</div>
            <div class="info-item-sub">KICD-aligned · Students, Teachers, Parents</div>
          </div>
          <div>
            <div class="info-item-label">Sitemap Standard</div>
            <div class="info-item-value">sitemaps.org 0.9</div>
            <div class="info-item-sub">Google · Bing · Yahoo compatible</div>
          </div>
        </div>

        <div class="url-section">
          <div class="section-label">// All pages</div>
          <div class="divider"></div>
          <h2 class="section-title">Complete page index</h2>

          <table class="url-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Page URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td class="row-num"><xsl:value-of select="position()"/></td>
                  <td>
                    <a class="url-link" href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="lastmod"><xsl:value-of select="sitemap:lastmod"/></span>
                  </td>
                  <td>
                    <xsl:variable name="freq" select="sitemap:changefreq"/>
                    <span>
                      <xsl:attribute name="class">
                        <xsl:choose>
                          <xsl:when test="$freq='daily'">freq-badge freq-daily</xsl:when>
                          <xsl:when test="$freq='weekly'">freq-badge freq-weekly</xsl:when>
                          <xsl:when test="$freq='monthly'">freq-badge freq-monthly</xsl:when>
                          <xsl:otherwise>freq-badge freq-yearly</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="$freq"/>
                    </span>
                  </td>
                  <td>
                    <div class="priority-wrap">
                      <div class="priority-bar-bg">
                        <div class="priority-bar-fill">
                          <xsl:attribute name="style">width:<xsl:value-of select="number(sitemap:priority) * 100"/>%</xsl:attribute>
                        </div>
                      </div>
                      <span class="priority-val"><xsl:value-of select="sitemap:priority"/></span>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>

      </main>

      <footer>
        <div class="footer-inner">
          <div class="footer-top">
            <div class="footer-brand">
              <strong>&#128216; CBC Best</strong>
              <p>Kenya's most comprehensive Competency Based Curriculum resource — KICD-aligned content for students, teachers, and parents. By Ronny Mwenda (Ronny Best), Mathematics &amp; Computer Science Teacher, Embu County, Kenya.</p>
              <div class="footer-ecosystem">
                Part of the Ronny Mwenda digital ecosystem:
                <a href="https://bestronny.netlify.app">Bestronny</a> ·
                <a href="https://ronnymwenda.netlify.app">RonnyMwenda</a> ·
                <a href="https://ronnygame.netlify.app">RonnyGame</a>
              </div>
              <div style="margin-top:0.6rem; font-size:0.75rem; color:rgba(255,228,196,0.4);">
                &#128231; <a href="mailto:ronnymwenda89@gmail.com" style="color:rgba(201,160,61,0.75);">ronnymwenda89@gmail.com</a>
                &#160;·&#160;
                &#128241; <a href="tel:+254799188900" style="color:rgba(201,160,61,0.75);">+254 799 188 900</a>
              </div>
            </div>
            <div class="footer-col">
              <h4>CBC Best</h4>
              <a href="/">Home</a>
              <a href="/pathways.html">Pathways</a>
              <a href="/subjects-skills.html">Subjects &amp; Skills</a>
              <a href="/assessment-tools.html">Assessment Tools</a>
              <a href="/learning-outcomes.html">Learning Outcomes</a>
              <a href="/teacher-requirements.html">Teacher Hub</a>
              <a href="/mathematics-computer-science.html">Maths &amp; CS</a>
            </div>
            <div class="footer-col">
              <h4>Resources</h4>
              <a href="/resources.html">Downloads</a>
              <a href="/faq.html">CBC FAQ</a>
              <a href="/blog.html">News &amp; Updates</a>
              <a href="/forums.html">Discussion Forums</a>
              <a href="/about-contact.html">About Ronny</a>
            </div>
            <div class="footer-col">
              <h4>Legal</h4>
              <a href="/privacy-policy.html">Privacy Policy</a>
              <a href="/terms-of-use.html">Terms of Use</a>
              <a href="/sitemap.xml">Sitemap XML</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&#169; 2026 CBC Best — Competency Based Curriculum Hub. Original KICD-aligned content for Kenyan educators and learners.</p>
            <p>
              <a href="/privacy-policy.html">Privacy</a> ·
              <a href="/terms-of-use.html">Terms</a> ·
              <a href="/sitemap.xml">Sitemap</a>
            </p>
          </div>
        </div>
      </footer>

    </body>
    </html>
  </xsl:template>

</xsl:stylesheet>