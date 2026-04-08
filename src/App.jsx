import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import textbookContent from '../Grade_9_CS_Textbook.md?raw'
import './App.css'

// ─── Utility: detect chapter theme from section heading ──────────────────────
function useChapterTheme(text) {
  if (!text) return 'python'
  const lower = text.toLowerCase()
  if (lower.includes('java')) return 'java'
  return 'python'
}

// ─── Interactive MCQ Component ────────────────────────────────────────────────
function MCQOption({ letter, text, correctLetter, revealed, onSelect }) {
  let cls = 'mcq-option'
  if (revealed) {
    if (letter === correctLetter) cls += ' correct'
    else cls += ' wrong'
  }
  return (
    <button className={cls} onClick={() => onSelect(letter)}>
      <span className="mcq-letter">{letter}</span>
      <span className="mcq-text">{text}</span>
      {revealed && letter === correctLetter && <span className="mcq-tick">✓</span>}
    </button>
  )
}

// ─── Interactive Exercise Section ─────────────────────────────────────────────
function ExerciseSection({ children, theme }) {
  return (
    <div className={`exercise-section theme-${theme}`}>
      <div className="exercise-header">
        <span className="exercise-icon">🧠</span>
        <span>Exercises</span>
      </div>
      <div className="exercise-body">{children}</div>
    </div>
  )
}

// ─── Lab Activity Card ────────────────────────────────────────────────────────
function LabCard({ children, theme }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className={`lab-card theme-${theme}`}>
      <div className="lab-header" onClick={() => setExpanded(!expanded)}>
        <span className="lab-icon">🧪</span>
        <span>Lab Activity</span>
        <span className="lab-toggle">{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && <div className="lab-body">{children}</div>}
    </div>
  )
}

// ─── Did You Know Callout ─────────────────────────────────────────────────────
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

// ─── Warning / Common Errors Box ──────────────────────────────────────────────
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

// ─── Quick Recap Card ─────────────────────────────────────────────────────────
function RecapCard({ children }) {
  return (
    <div className="recap-card">
      <div className="recap-header">
        <span>📝</span> Quick Recap
      </div>
      <div className="recap-body">{children}</div>
    </div>
  )
}

// ─── Real-Life Application Banner ─────────────────────────────────────────────
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

// ─── Software Usage Steps ─────────────────────────────────────────────────────
function SoftwareSteps({ children }) {
  return (
    <div className="software-steps">
      <div className="software-header">
        <span>🔧</span> Software Setup
      </div>
      <div className="software-body">{children}</div>
    </div>
  )
}

// ─── Section Banner for Chapter/Section Headers ───────────────────────────────
function SectionBanner({ text, theme }) {
  const isPython = theme === 'python'
  return (
    <div className={`section-banner banner-${theme}`}>
      <div className="banner-pill">{isPython ? '🐍 Python' : '☕ Java'}</div>
      <h1 className="banner-title">{text.replace(/^[#\s]+/, '').replace(/[🐍☕]\s*/, '')}</h1>
    </div>
  )
}

function extractNodeText(node) {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractNodeText).join('');
  if (node && typeof node === 'object' && node.props && node.props.children) return extractNodeText(node.props.children);
  return String(node || '');
}

// ─── Chapter Heading ──────────────────────────────────────────────────────────
function ChapterHeading({ text, theme, id }) {
  const label = text.replace(/^📖\s*/, '').replace(/^\s*Chapter\s*/i, '')
  return (
    <div id={id} className={`chapter-heading theme-${theme}`}>
      <div className="chapter-badge">Chapter</div>
      <h2 className="chapter-title">{label}</h2>
    </div>
  )
}

// ─── Smart Heading Renderer ────────────────────────────────────────────────────
function SmartH2({ children, theme }) {
  const text = extractNodeText(children)
  const id = "chapter-" + text.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
  if (text.includes('Chapter')) {
    return <ChapterHeading id={id} text={text} theme={theme} />
  }
  return <h2 id={id} className={`section-h2 theme-${theme}`}>{children}</h2>
}

// ─── Smart H3 that detects section type ───────────────────────────────────────
function SmartH3({ children, ctx, theme }) {
  const text = typeof children === 'string' ? children : ''

  if (text.includes('Real-Life Application') || text.includes('🌍')) {
    ctx.nextIsRealLife = true
    return null
  }
  if (text.includes('Software Usage') || text.includes('🔧')) {
    ctx.nextIsSoftware = true
    return null
  }
  if (text.includes('Did You Know') || text.includes('💡')) {
    ctx.nextIsDYK = true
    return null
  }
  if (text.includes('Common Error') || text.includes('⚠️')) {
    ctx.nextIsError = true
    return null
  }
  if (text.includes('Quick Recap') || text.includes('📝')) {
    ctx.nextIsRecap = true
    return null
  }
  if (text.includes('Lab Activity') || text.includes('🧪')) {
    ctx.nextIsLab = true
    return null
  }
  if (text.includes('Exercises') || text.includes('🧠')) {
    ctx.nextIsExercise = true
    return null
  }

  return <h3 className={`content-h3 theme-${theme}`}>{children}</h3>
}

// ─── Main App ─────────────────────────────────────────────────────────────────
function App() {
  const [chapters, setChapters] = useState([])
  const [activeChapter, setActiveChapter] = useState(null)
  const [currentTheme, setCurrentTheme] = useState('python')
  const contentRef = useRef(null)

  useEffect(() => {
    const lines = textbookContent.split('\n')
    const chapterLines = lines.filter(l => l.startsWith('## 📖'))
    setChapters(chapterLines.map(l => l.replace('## ', '').trim()))
  }, [])

  const scrollToChapter = (chapterName) => {
    setActiveChapter(chapterName)
    const id = "chapter-" + chapterName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Detect current section when scrolling
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const onScroll = () => {
      const banners = Array.from(el.querySelectorAll('.section-banner'))
      let current = 'python'
      for (const b of banners) {
        if (b.getBoundingClientRect().top < 200) {
          current = b.classList.contains('banner-java') ? 'java' : 'python'
        }
      }
      setCurrentTheme(current)
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Section state context (mutable ref for renderer)
  const sectionCtxRef = useRef({
    nextIsRealLife: false,
    nextIsSoftware: false,
    nextIsDYK: false,
    nextIsError: false,
    nextIsRecap: false,
    nextIsLab: false,
    nextIsExercise: false,
    currentTheme: 'python'
  })

  // We need a stateful version that re-reads theme
  const ctx = sectionCtxRef.current

  // ─── Markdown component overrides ──────────────────────────────────────────
  const components = {
    // H1 = Section banners (Python / Java)
    h1({ children }) {
      const text = String(children)
      const theme = text.toLowerCase().includes('java') ? 'java' : 'python'
      ctx.currentTheme = theme
      // Reset all flags on new section
      Object.keys(ctx).forEach(k => { if (k.startsWith('next')) ctx[k] = false })
      return <SectionBanner text={text} theme={theme} />
    },

    // H2 = Chapter headings
    h2({ children }) {
      const text = String(children)
      return <SmartH2 theme={ctx.currentTheme}>{children}</SmartH2>
    },

    // H3 = Special section types
    h3({ children }) {
      return <SmartH3 ctx={ctx} theme={ctx.currentTheme}>{children}</SmartH3>
    },

    // Paragraphs - wrap in special components based on context
    p({ children, node }) {
      const theme = ctx.currentTheme

      if (ctx.nextIsRealLife) {
        ctx.nextIsRealLife = false
        return <RealLifeBanner><p>{children}</p></RealLifeBanner>
      }
      if (ctx.nextIsDYK) {
        ctx.nextIsDYK = false
        return <DidYouKnow><p>{children}</p></DidYouKnow>
      }
      return <p className="book-para">{children}</p>
    },

    // Lists - wrap in special components based on context
    ul({ children }) {
      const theme = ctx.currentTheme

      if (ctx.nextIsSoftware) {
        ctx.nextIsSoftware = false
        return <SoftwareSteps><ul className="steps-list">{children}</ul></SoftwareSteps>
      }
      if (ctx.nextIsError) {
        ctx.nextIsError = false
        return <ErrorBox><ul className="error-list">{children}</ul></ErrorBox>
      }
      if (ctx.nextIsRecap) {
        ctx.nextIsRecap = false
        return <RecapCard><ul className="recap-list">{children}</ul></RecapCard>
      }
      if (ctx.nextIsLab) {
        // don't reset — let the full lab section build up from multiple items
      }
      return <ul className="book-list">{children}</ul>
    },

    ol({ children }) {
      if (ctx.nextIsSoftware) {
        ctx.nextIsSoftware = false
        return <SoftwareSteps><ol className="steps-list">{children}</ol></SoftwareSteps>
      }
      if (ctx.nextIsLab) {
        ctx.nextIsLab = false
        return <LabCard theme={ctx.currentTheme}><ol className="lab-steps">{children}</ol></LabCard>
      }
      return <ol className="book-list book-ol">{children}</ol>
    },

    // Blockquotes - software setup steps (from > syntax in markdown)
    blockquote({ children }) {
      return (
        <div className="software-steps">
          <div className="software-header"><span>🔧</span> Setup Instructions</div>
          <div className="software-body">{children}</div>
        </div>
      )
    },

    // Images - render actual images with a styled caption
    img({ src, alt }) {
      return (
        <figure className="book-figure">
          <img
            src={src}
            alt={alt}
            className="book-image"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="image-fallback" style={{ display: 'none' }}>
            <span>🖼️ {alt}</span>
          </div>
          {alt && <figcaption className="book-caption">{alt}</figcaption>}
        </figure>
      )
    },

    // Tables
    table({ children }) {
      return (
        <div className="table-wrapper">
          <table className={`custom-table table-${ctx.currentTheme}`}>{children}</table>
        </div>
      )
    },
    thead({ children }) { return <thead>{children}</thead> },
    tbody({ children }) { return <tbody>{children}</tbody> },
    tr({ children }) { return <tr>{children}</tr> },
    th({ children }) { return <th>{children}</th> },
    td({ children }) { return <td>{children}</td> },

    // Code blocks
    code({ className, children, ...props }) {
      const isBlock = className?.startsWith('language-')
      const lang = className?.replace('language-', '') || ''
      if (isBlock) {
        const themeClass = lang === 'java' ? 'code-java' : lang === 'python' ? 'code-python' : ''
        return (
          <div className={`code-block ${themeClass}`}>
            {lang && <div className="code-lang-badge">{lang.toUpperCase()}</div>}
            <pre><code>{children}</code></pre>
          </div>
        )
      }
      return <code className="inline-code" {...props}>{children}</code>
    },

    // Horizontal rule = page break visual
    hr() {
      return <div className="page-divider"><span>✦ ✦ ✦</span></div>
    },

    // Strong text
    strong({ children }) {
      return <strong className="book-strong">{children}</strong>
    }
  }

  return (
    <div className={`layout theme-root-${currentTheme}`}>
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <div className="logo-area">
          <div className="logo-icon">📘</div>
          <h1>CS Textbook</h1>
          <p>Grade 9 Edition</p>
        </div>

        <div className="section-label">Python 🐍</div>
        <ul className="nav-list">
          {chapters.filter(c => !c.toLowerCase().includes('java')).map((chap, idx) => (
            <li
              key={idx}
              className={`nav-item python-item ${activeChapter === chap ? 'active' : ''}`}
              onClick={() => scrollToChapter(chap)}
            >
              <span className="nav-num">{idx + 1}</span>
              <span className="nav-text">{chap.replace(/^📖\s*/, '')}</span>
            </li>
          ))}
        </ul>

        <div className="section-label java-label">Java ☕</div>
        <ul className="nav-list">
          {chapters.filter(c => c.toLowerCase().includes('java') || c.toLowerCase().includes('control') || c.toLowerCase().includes('basic java')).map((chap, idx) => (
            <li
              key={idx}
              className={`nav-item java-item ${activeChapter === chap ? 'active' : ''}`}
              onClick={() => scrollToChapter(chap)}
            >
              <span className="nav-num">{idx + 4}</span>
              <span className="nav-text">{chap.replace(/^📖\s*/, '')}</span>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="progress-label">Progress</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(chapters.indexOf(activeChapter) + 1) / Math.max(chapters.length, 1) * 100}%` }} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="content scroll-container" ref={contentRef}>
        <div className="content-inner">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={components}
          >
            {textbookContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  )
}

export default App
