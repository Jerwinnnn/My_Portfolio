export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center">
      <p className="font-mono text-xs text-slate-600">
        Designed &amp; Built by{' '}
        <span className="text-slate-500">Jerwin Tugas</span>
        {' · '}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
