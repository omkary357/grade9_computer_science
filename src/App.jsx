import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Previewer } from 'pagedjs'
import textbookContent from '../Grade_9_CS_Textbook.md?raw'
import './App.css'

// ─── Did You Know ─────────────────────────────────────────────────────────────
function DidYouKnow({ children }) {
  return (
    <div className="did-you-know">
      <div className="dyk-icon">💡</div>
      <div className="dyk-content">
        <strong>Did You Know?</strong>
        {children}
      </div>
    </div>
  )
}

// ─── Common Errors ────────────────────────────────────────────────────────────
function ErrorBox({ children }) {
  return (
    <div className="error-box">
      <div className="error-icon">⚠️</div>
      <div className="error-content">
        <strong>Common Errors to Avoid</strong>
        {children}
      </div>
    </div>
  )
}

// ─── Quick Recap ──────────────────────────────────────────────────────────────
function RecapCard({ children }) {
  return (
    <div className="recap-card">
      <div className="recap-header">
        <span>📓</span> Quick Recap
      </div>
      <div className="recap-body">{children}</div>
    </div>
  )
}

// ─── Real-Life Application ────────────────────────────────────────────────────
function RealLifeBanner({ children }) {
  return (
    <div className="reallife-banner">
      <div className="reallife-icon">🌍</div>
      <div className="reallife-content">
        <div className="reallife-label">Real-Life Application</div>
        {children}
      </div>
    </div>
  )
}

// ─── Software Setup ───────────────────────────────────────────────────────────
function SoftwareSteps({ children }) {
  return (
    <div className="software-steps">
      <div className="software-header"><span>🔧</span> Software Setup</div>
      <div className="software-body">{children}</div>
    </div>
  )
}

// ─── Lab Activity ─────────────────────────────────────────────────────────────
function LabCard({ children, theme }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className={`lab-card theme-${theme}`}>
      <div className="lab-header" onClick={() => setExpanded(e => !e)}>
        <span>✏️</span>
        <span>Lab Activity</span>
        <span className="lab-toggle">{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && <div className="lab-body">{children}</div>}
    </div>
  )
}

// ─── Section Banner ───────────────────────────────────────────────────────────
function SectionBanner({ text, theme }) {
  return (
    <div className={`section-banner banner-${theme}`}>
      <div className="banner-pill">{theme === 'python' ? '🐍 Python' : '☕ Java'}</div>
      <h1 className="banner-title">{text.replace(/^[#\s]+/, '').replace(/[🐍☕]\s*/, '')}</h1>
    </div>
  )
}

// ─── Chapter Heading ────────────────────────────────────────────────────────────────────
function ChapterHeading({ text, theme, id }) {
  // Do not break before the very first chapter 
  const isFirst = text.includes('Chapter 1:');
  const breakStyle = isFirst ? {} : { breakBefore: 'page', pageBreakBefore: 'always' };

  return (
    <div
      id={id}
      className={`chapter-heading theme-${theme}`}
      style={breakStyle}
    >
      <div className="chapter-badge">Chapter</div>
      <h2 className="chapter-title">{text.replace(/^📖\s*/, '')}</h2>
    </div>
  )
}

// ─── Exercise Heading ─────────────────────────────────────────────────────────
function ExerciseHeading({ theme }) {
  return (
    <div className={`exercise-heading theme-${theme}`}>
      <span className="exercise-heading-icon">🧠</span>
      <span>Exercises</span>
    </div>
  )
}

function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children) return extractText(node.props.children)
  return String(node || '')
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [chapters, setChapters]    = useState([])
  const [activeChapter, setActiveChapter] = useState(null)
  const [currentTheme, setCurrentTheme]   = useState('python')
  
  const sourceRef = useRef(null)
  const pagedRef = useRef(null)
  const [isPagedRendered, setIsPagedRendered] = useState(false)

  // Shared mutable context — mutated synchronously during each render pass
  const ctx = useRef({
    theme: 'python',
    nextIsRealLife: false,
    nextIsSoftware: false,
    nextIsDYK:      false,
    nextIsError:    false,
    nextIsRecap:    false,
    nextIsLab:      false,
    nextIsExercise: false,
  }).current

  useEffect(() => {
    const lines = textbookContent.replace(/\r\n/g, '\n').split('\n')
    setChapters(
      lines.filter(l => l.startsWith('## 📖')).map(l => l.replace('## ', '').trim())
    )
  }, [])

  const isPreviewing = useRef(false)

  // Run Paged.js
  useEffect(() => {
    if (sourceRef.current && pagedRef.current && !isPagedRendered && !isPreviewing.current) {
      isPreviewing.current = true
      pagedRef.current.innerHTML = ''

      // ── Ensure style block for other Paged.js elements isn't interfering with chapters
      let pagedStyle = document.getElementById('paged-break-style')
      if (!pagedStyle) {
        pagedStyle = document.createElement('style')
        pagedStyle.id = 'paged-break-style'
        document.head.appendChild(pagedStyle)
      }

      const paged = new Previewer()
      paged.preview(sourceRef.current.innerHTML, [], pagedRef.current).then(() => {
        const container = pagedRef.current
        if (!container) return

        // ── 1. Shrink margin boxes ─────────────────────────────────────────────
        container.querySelectorAll(
          '.pagedjs_margin-top, .pagedjs_margin-top-left-corner-holder, .pagedjs_margin-top-right-corner-holder'
        ).forEach(el => el.style.setProperty('height', '6px', 'important'))

        container.querySelectorAll(
          '.pagedjs_margin-bottom, .pagedjs_margin-bottom-left-corner-holder, .pagedjs_margin-bottom-right-corner-holder'
        ).forEach(el => el.style.setProperty('height', '28px', 'important'))

        container.querySelectorAll(
          '.pagedjs_margin-left, .pagedjs_margin-left-top, .pagedjs_margin-left-middle, .pagedjs_margin-left-bottom'
        ).forEach(el => el.style.setProperty('width', '8px', 'important'))

        container.querySelectorAll('.pagedjs_page_content').forEach(el => {
          el.style.setProperty('padding-top', '0', 'important')
          el.style.setProperty('padding-left', '0', 'important')
          el.style.setProperty('padding-bottom', '0', 'important')
        })

        container.querySelectorAll('.pagedjs_area').forEach(el => {
          el.style.setProperty('top', '6px', 'important')
          el.style.setProperty('left', '8px', 'important')
          el.style.setProperty('bottom', '28px', 'important')
        })

        // ── 2. Inject page numbers at bottom of every page ─────────────────────
        container.querySelectorAll('.pagedjs_page').forEach((page, index) => {
          page.querySelectorAll('.manual-page-num').forEach(n => n.remove())
          const num = document.createElement('div')
          num.className = 'manual-page-num'
          num.textContent = index + 1
          num.style.cssText = [
            'position:absolute',
            'bottom:6px',
            'left:0',
            'right:0',
            'text-align:center',
            'font-family:Inter,system-ui,sans-serif',
            'font-size:11px',
            'font-weight:500',
            'color:#7a7570',
            'letter-spacing:0.06em',
            'pointer-events:none',
            'z-index:100',
          ].join(';')
          page.appendChild(num)
        })

        setIsPagedRendered(true)
      })
    }
  }, [isPagedRendered])


  const scrollToChapter = (chapterName) => {
    setActiveChapter(chapterName)
    const id = "chapter-" + chapterName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    if (pagedRef.current) {
      const target = pagedRef.current.querySelector('#' + id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }



  // ── Markdown component overrides ────────────────────────────────────────────
  const components = {
    h1({ children }) {
      const text  = extractText(children)
      const theme = text.toLowerCase().includes('java') ? 'java' : 'python'
      ctx.theme = theme
      ctx.nextIsRealLife = ctx.nextIsSoftware = ctx.nextIsDYK =
        ctx.nextIsError   = ctx.nextIsRecap   = ctx.nextIsLab =
        ctx.nextIsExercise = false
      return <SectionBanner text={text} theme={theme} />
    },

    h2({ children }) {
      const text = extractText(children)
      const id   = 'chapter-' + text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
      if (text.includes('Chapter')) {
        return <ChapterHeading id={id} text={text} theme={ctx.theme} />
      }
      return <h2 id={id} className={`section-h2 theme-${ctx.theme}`}>{children}</h2>
    },

    h3({ children }) {
      const text = extractText(children)
      if (text.includes('Real-Life Application') || text.includes('🌍')) { ctx.nextIsRealLife = true; return null }
      if (text.includes('Software Usage')         || text.includes('🔧')) { ctx.nextIsSoftware  = true; return null }
      if (text.includes('Did You Know')           || text.includes('💡')) { ctx.nextIsDYK        = true; return null }
      if (text.includes('Common Error')           || text.includes('⚠️')) { ctx.nextIsError     = true; return null }
      if (text.includes('Quick Recap')            || text.includes('📝')) { ctx.nextIsRecap     = true; return null }
      if (text.includes('Lab Activity')           || text.includes('🧪') || text.includes('✏️')) { ctx.nextIsLab = true; return null }
      if (text.includes('Exercises')              || text.includes('🧠')) { ctx.nextIsExercise  = true; return <ExerciseHeading theme={ctx.theme} /> }
      return <h3 className={`content-h3 theme-${ctx.theme}`}>{children}</h3>
    },

    p({ children }) {
      if (ctx.nextIsRealLife) { ctx.nextIsRealLife = false; return <RealLifeBanner><p>{children}</p></RealLifeBanner> }
      if (ctx.nextIsDYK)      { ctx.nextIsDYK      = false; return <DidYouKnow><p>{children}</p></DidYouKnow> }
      return <p className="book-para">{children}</p>
    },

    ul({ children }) {
      if (ctx.nextIsSoftware) { ctx.nextIsSoftware = false; return <SoftwareSteps><ul className="steps-list">{children}</ul></SoftwareSteps> }
      if (ctx.nextIsError)    { ctx.nextIsError    = false; return <ErrorBox><ul className="error-list">{children}</ul></ErrorBox> }
      if (ctx.nextIsRecap)    { ctx.nextIsRecap    = false; return <RecapCard><ul className="recap-list">{children}</ul></RecapCard> }
      return <ul className="book-list">{children}</ul>
    },

    ol({ children }) {
      if (ctx.nextIsSoftware) { ctx.nextIsSoftware = false; return <SoftwareSteps><ol className="steps-list">{children}</ol></SoftwareSteps> }
      if (ctx.nextIsLab)      { ctx.nextIsLab      = false; return <LabCard theme={ctx.theme}><ol className="lab-steps">{children}</ol></LabCard> }
      return <ol className="book-list book-ol">{children}</ol>
    },

    blockquote({ children }) {
      return (
        <div className="software-steps">
          <div className="software-header"><span>🔧</span> Setup Instructions</div>
          <div className="software-body">{children}</div>
        </div>
      )
    },

    img({ src, alt }) {
      return (
        <figure className="book-figure">
          <img src={src} alt={alt} className="book-image"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
          <div className="image-fallback" style={{ display: 'none' }}><span>🖼️ {alt}</span></div>
          {alt && <figcaption className="book-caption">{alt}</figcaption>}
        </figure>
      )
    },

    table({ children }) {
      return (
        <div className="table-wrapper">
          <table className={`custom-table table-${ctx.theme}`}>{children}</table>
        </div>
      )
    },
    thead({ children }) { return <thead>{children}</thead> },
    tbody({ children }) { return <tbody>{children}</tbody> },
    tr({ children })    { return <tr>{children}</tr> },
    th({ children })    { return <th>{children}</th> },
    td({ children })    { return <td>{children}</td> },

    // ── code: pass language blocks through; style inline code ──────────────────
    code({ className, children, ...props }) {
      if (className?.startsWith('language-'))
        return <code className={className}>{children}</code>
      return <code className="inline-code" {...props}>{children}</code>
    },

    // ── pre: wraps ALL fenced code blocks ──────────────────────────────────────
    pre({ children }) {
      const codeEl  = Array.isArray(children) ? children[0] : children
      const cls     = codeEl?.props?.className || ''

      if (cls.startsWith('language-')) {
        const lang       = cls.replace('language-', '')
        const themeClass = lang === 'java' ? 'code-java' : lang === 'python' ? 'code-python' : ''
        return (
          <div className={`code-block ${themeClass}`}>
            {lang && <div className="code-lang-badge">{lang.toUpperCase()}</div>}
            <pre><code>{codeEl?.props?.children}</code></pre>
          </div>
        )
      }
      // No language → output block
      return (
        <div className="code-output">
          <pre><code>{codeEl?.props?.children}</code></pre>
        </div>
      )
    },

    hr() {
      return <div className="page-divider"><span>✦ ✦ ✦</span></div>
    },

    strong({ children }) {
      return <strong className="book-strong">{children}</strong>
    },
  }

  return (
    <div className={`layout theme-root-${currentTheme}`}>

      {/* ── Sidebar ── */}
      <nav className="sidebar">
        <div className="logo-area">
          <div className="logo-icon">📘</div>
          <h1>CS Textbook</h1>
          <p>Grade 9 Edition</p>
        </div>

        <div className="section-label">Python 🐍</div>
        <ul className="nav-list">
          {chapters.filter(c => !c.toLowerCase().includes('java')).map((chap, i) => (
            <li key={i}
              className={`nav-item python-item ${activeChapter === chap ? 'active' : ''}`}
              onClick={() => scrollToChapter(chap)}>
              <span className="nav-num">{i + 1}</span>
              <span className="nav-text">{chap.replace(/^📖\s*/, '')}</span>
            </li>
          ))}
        </ul>

        <div className="section-label java-label">Java ☕</div>
        <ul className="nav-list">
          {chapters
            .filter(c => c.toLowerCase().includes('java') ||
                         c.toLowerCase().includes('control') ||
                         c.toLowerCase().includes('basic java'))
            .map((chap, i) => (
              <li key={i}
                className={`nav-item java-item ${activeChapter === chap ? 'active' : ''}`}
                onClick={() => scrollToChapter(chap)}>
                <span className="nav-num">{i + 4}</span>
                <span className="nav-text">{chap.replace(/^📖\s*/, '')}</span>
              </li>
            ))}
        </ul>

        <div className="sidebar-footer">
          <button className="export-btn" onClick={() => window.print()}>
            🖨️ Export PDF
          </button>
          <div className="progress-label">Progress</div>
          <div className="progress-bar">
            <div className="progress-fill"
              style={{ width: `${(chapters.indexOf(activeChapter) + 1) / Math.max(chapters.length, 1) * 100}%` }} />
          </div>
        </div>
      </nav>

      {/* ── Main content wrapper ── */}
      <main className="content" style={{ overflow: 'auto', background: '#e0e0e0', padding: 0 }}>
        
        {/* Hidden Source Content for Paged.js to read from */}
        <div ref={sourceRef} style={{ display: 'none' }}>
           <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
             {textbookContent}
           </ReactMarkdown>
        </div>

        {/* Paged.js Render Target */}
        <div className="paged-viewer-container" ref={pagedRef}>
           {/* Paged.js injects pages here */}
        </div>

      </main>
    </div>
  )
}
