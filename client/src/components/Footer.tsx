export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground" data-testid="text-copyright">
          © {currentYear} Jitendra Sethia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
