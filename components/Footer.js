export default function Footer({ copyright, length }) {
  return (
    <footer className="px-8 py-6 bg-emerald-500 text-black">
      <p>&copy;{copyright}</p>
      <h3>{length} Locations World Wide </h3>
    </footer>
  )
}