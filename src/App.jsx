import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Previewer } from 'pagedjs'
import textbookContent from '../Grade_9_CS_Textbook.md?raw'
import './App.css'

// ─── Helper: Extract plain text from React children ────────────────────────
function extractText(node) {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (node?.props?.children) return extractText(node.props.children)
  return String(node || '')
}

// ─── Real-Life Application Banner ──────────────────────────────────────────
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

// ─── Did You Know Callout ───────────────────────────────────────────────────
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

// ─── Common Errors Box ──────────────────────────────────────────────────────
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

// ─── Quick Recap Card ───────────────────────────────────────────────────────
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

// ─── Lab Activity Card (collapsible) ────────────────────────────────────────
function LabCard({ children }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className="lab-card">
      <div className="lab-header" onClick={() => setExpanded(e => !e)}>
        <span className="lab-emoji">🧪</span>
        <div className="lab-title-text">
          <span>Lab Activity</span>
          Step-by-step hands-on exercise
        </div>
        <span className="lab-toggle" style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}>▼</span>
      </div>
      {expanded && <div className="lab-body">{children}</div>}
    </div>
  )
}

// ─── Chapter Heading ────────────────────────────────────────────────────────
function ChapterHeading({ text, id }) {
  // Extract chapter number
  const match = text.match(/Chapter\s+(\d+)/i)
  const num = match ? match[1] : ''
  const title = text.replace(/^📖\s*/, '').replace(/^Chapter\s+\d+:\s*/i, '').trim()
  const isFirst = num === '7'

  return (
    <div
      id={id}
      className={`chapter-heading ${isFirst ? '' : 'pagedjs-page-break'}`}
    >
      <div className="chapter-eyebrow">
        <div className="chapter-badge">
          <div className="chapter-number-dot" />
          Chapter {num}
        </div>
      </div>
      <h2 className="chapter-title">{title}</h2>
    </div>
  )
}

// ─── Section Banner (h1 ─ book-level title) ─────────────────────────────────
function SectionBanner({ text }) {
  return (
    <div className="section-banner">
      <div className="banner-pill">☕ Java Programming</div>
      <h1 className="banner-title">{text.replace(/^[#\s]+/, '').replace(/[🐍☕]\s*/, '')}</h1>
    </div>
  )
}

// ─── Exercise Heading ───────────────────────────────────────────────────────
function ExerciseHeading() {
  return (
    <div className="exercise-heading">
      <span className="exercise-heading-icon">🧠</span>
      <span>Exercises</span>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
//  App
// ══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [chapters, setChapters] = useState([])
  const [activeChapter, setActiveChapter] = useState(null)

  const sourceRef = useRef(null)
  const pagedRef = useRef(null)
  const [isPagedRendered, setIsPagedRendered] = useState(false)
  const isPreviewing = useRef(false)

  // Shared mutable render context (mutated synchronously during markdown render)
  const ctx = useRef({
    nextIsRealLife: false,
    nextIsDYK: false,
    nextIsError: false,
    nextIsRecap: false,
    nextIsLab: false,
    nextIsExercise: false,
  }).current

  // ── Parse chapters from markdown ─────────────────────────────────────────
  useEffect(() => {
    const lines = textbookContent.replace(/\r\n/g, '\n').split('\n')
    setChapters(
      lines.filter(l => l.startsWith('## 📖')).map(l => l.replace('## ', '').trim())
    )
  }, [])

  // ── Run Paged.js ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (sourceRef.current && pagedRef.current && !isPagedRendered && !isPreviewing.current) {
      isPreviewing.current = true
      pagedRef.current.innerHTML = ''

      const paged = new Previewer()
      paged.preview(sourceRef.current.innerHTML, [], pagedRef.current).then(() => {
        const container = pagedRef.current
        if (!container) return

        // Shrink margin boxes
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

        // Inject page numbers
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
            'font-size:10px',
            'font-weight:500',
            'color:#9ca3af',
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

  // ── Scroll-to-chapter ────────────────────────────────────────────────────
  const scrollToChapter = (chapterName) => {
    setActiveChapter(chapterName)
    const id = 'chapter-' + chapterName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    if (pagedRef.current) {
      const target = pagedRef.current.querySelector('#' + id)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // ── Get chapter number from title ────────────────────────────────────────
  const getChapterNum = (chap) => {
    const m = chap.match(/Chapter\s+(\d+)/i)
    return m ? m[1] : '?'
  }

  // ── Progress calculation ─────────────────────────────────────────────────
  const activeIndex = chapters.indexOf(activeChapter)
  const progress = chapters.length > 0
    ? Math.max(4, ((activeIndex + 1) / chapters.length) * 100)
    : 4

  // ── Markdown component overrides ─────────────────────────────────────────
  const components = {
    h1({ children }) {
      const text = extractText(children)
      ctx.nextIsRealLife = ctx.nextIsDYK = ctx.nextIsError =
        ctx.nextIsRecap = ctx.nextIsLab = ctx.nextIsExercise = false
      return <SectionBanner text={text} />
    },

    h2({ children }) {
      const text = extractText(children)
      const id = 'chapter-' + text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
      if (text.includes('Chapter')) {
        return <ChapterHeading id={id} text={text} />
      }
      return <h2 id={id} className="section-h2">{children}</h2>
    },

    h3({ children }) {
      const text = extractText(children)
      if (text.includes('Real-Life Application') || text.includes('🌍')) { ctx.nextIsRealLife = true; return null }
      if (text.includes('Did You Know') || text.includes('💡')) { ctx.nextIsDYK = true; return null }
      if (text.includes('Common Error') || text.includes('⚠️')) { ctx.nextIsError = true; return null }
      if (text.includes('Quick Recap') || text.includes('📝')) { ctx.nextIsRecap = true; return null }
      if (text.includes('Lab Activity') || text.includes('🧪') || text.includes('✏️')) { ctx.nextIsLab = true; return null }
      if (text.includes('Exercises') || text.includes('🧠')) { ctx.nextIsExercise = true; return <ExerciseHeading /> }
      if (text.includes('Software') || text.includes('🔧')) { return null }
      return <h3 className="content-h3">{children}</h3>
    },

    p({ children }) {
      if (ctx.nextIsRealLife) { ctx.nextIsRealLife = false; return <RealLifeBanner><p>{children}</p></RealLifeBanner> }
      if (ctx.nextIsDYK) { ctx.nextIsDYK = false; return <DidYouKnow><p>{children}</p></DidYouKnow> }
      return <p className="book-para">{children}</p>
    },

    ul({ children }) {
      if (ctx.nextIsError) { ctx.nextIsError = false; return <ErrorBox><ul className="error-list">{children}</ul></ErrorBox> }
      if (ctx.nextIsRecap) { ctx.nextIsRecap = false; return <RecapCard><ul className="recap-list">{children}</ul></RecapCard> }
      return <ul className="book-list">{children}</ul>
    },

    ol({ children }) {
      if (ctx.nextIsLab) { ctx.nextIsLab = false; return <LabCard><ol className="lab-steps">{children}</ol></LabCard> }
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
          <table className="custom-table">{children}</table>
        </div>
      )
    },
    thead({ children }) { return <thead>{children}</thead> },
    tbody({ children }) { return <tbody>{children}</tbody> },
    tr({ children }) { return <tr>{children}</tr> },
    th({ children }) { return <th>{children}</th> },
    td({ children }) { return <td>{children}</td> },

    code({ className, children, ...props }) {
      if (className?.startsWith('language-'))
        return <code className={className}>{children}</code>
      return <code className="inline-code" {...props}>{children}</code>
    },

    pre({ children }) {
      const codeEl = Array.isArray(children) ? children[0] : children
      const cls = codeEl?.props?.className || ''

      if (cls.startsWith('language-')) {
        const lang = cls.replace('language-', '')
        const themeClass = lang === 'java' ? 'code-java' : lang === 'python' ? 'code-python' : ''
        return (
          <div className={`code-block ${themeClass}`}>
            {lang && <div className="code-lang-badge">⬡ {lang.toUpperCase()}</div>}
            <pre><code>{codeEl?.props?.children}</code></pre>
          </div>
        )
      }
      return (
        <div className="code-output">
          <pre><code>{codeEl?.props?.children}</code></pre>
        </div>
      )
    },

    hr() {
      return <div className="page-divider"><span>✦</span></div>
    },

    strong({ children }) {
      return <strong className="book-strong">{children}</strong>
    },
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="layout">

      {/* ── Sidebar ───────────────────────────────────────────── */}
      <nav className="sidebar">
        <div className="logo-area">
          <div className="logo-tagline">
            <div className="logo-badge">☕ Java</div>
          </div>
          <div className="logo-title">CS Textbook</div>
          <div className="logo-subtitle">Grade 9 Edition · Chapters 7 – 9</div>
          <div className="logo-divider" />
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '0 1rem' }}>
          <div className="nav-section-label">Chapters</div>
          <ul className="nav-list">
            {chapters.map((chap, i) => (
              <li
                key={i}
                className={`nav-item ${activeChapter === chap ? 'active' : ''}`}
                onClick={() => scrollToChapter(chap)}
              >
                <span className="nav-num">{getChapterNum(chap)}</span>
                <span className="nav-text">
                  {chap.replace(/^📖\s*/, '').replace(/Chapter\s+\d+:\s*/i, '')}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-footer">
          <button className="export-btn" onClick={() => window.print()}>
            🖨️ Export as PDF
          </button>
          <div className="progress-label">
            <span>Reading Progress</span>
            <span style={{ color: 'rgba(251,191,36,0.7)' }}>
              {activeIndex >= 0 ? `${activeIndex + 1}/${chapters.length}` : `0/${chapters.length}`}
            </span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </nav>

      {/* ── Main Content ─────────────────────────────────────── */}
      <main className="content">
        {/* Hidden source for Paged.js */}
        <div ref={sourceRef} style={{ display: 'none' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {textbookContent}
          </ReactMarkdown>
        </div>

        {/* Loading indicator */}
        {!isPagedRendered && (
          <div className="loading-screen">
            <div className="loading-spinner" />
            <div className="loading-text">Rendering textbook pages…</div>
          </div>
        )}

        {/* Paged.js render target */}
        <div className="paged-viewer-container" ref={pagedRef} />
      </main>
    </div>
  )
}
