export default function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Ronin Bike. Todos los derechos reservados.</p>
    </footer>
  );
}