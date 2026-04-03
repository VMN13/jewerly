export default function Footer({ hideFooter }: { hideFooter?: boolean }) {
  if (hideFooter) return null;

  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p>© {new Date().getFullYear()} GoldJewelry</p>
        <p>Все права защищены</p>
      </div>
    </footer>
  );
}
