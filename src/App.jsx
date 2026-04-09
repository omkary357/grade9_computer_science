import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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

// ─── Chapter Heading ──────────────────────────────────────────────────────────
function ChapterHeading({ text, theme, id }) {
  return (
    <div id={id} className={`chapter-heading theme-${theme}`}>
      <div className="chapter-badge">Chapter</div>
      <h2 className="chapter-title">{text.replace(/^📖\s*/, '')}</h2>
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
  const [activeChapter, setActive] = useState(null)
  const [currentTheme, setTheme]   = useState('python')
  const contentRef                 = useRef(null)

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

  const scrollToChapter = (chap) => {
    setActive(chap)
    const id = 'chapter-' + chap.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const onScroll = () => {
      for (const b of el.querySelectorAll('.section-banner')) {
        if (b.getBoundingClientRect().top < 200)
          setTheme(b.classList.contains('banner-java') ? 'java' : 'python')
      }
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

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
      if (text.includes('Chapter'))
        return <ChapterHeading id={id} text={text} theme={ctx.theme} />
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
      if (text.includes('Exercises')              || text.includes('🧠')) { ctx.nextIsExercise  = true; return null }
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
          <div className="progress-label">Progress</div>
          <div className="progress-bar">
            <div className="progress-fill"
              style={{ width: `${(chapters.indexOf(activeChapter) + 1) / Math.max(chapters.length, 1) * 100}%` }} />
          </div>
        </div>
      </nav>

      {/* ── Main scrollable content ── */}
      <main className="content" ref={contentRef}>
        <div className="content-inner">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {textbookContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  )
}
