import SocialLinks from '../SocialLinks/SocialLinks'

function Footer({ lang, portfolioData }) {
  const t = portfolioData[lang].hero

  return (
    <footer className="footer flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-6 md:p-8">
      <p className="text-[var(--muted-foreground)]">
        Copyright ©2026 Alaleh Mohseni
      </p>           
     
      <SocialLinks socialLinks={t.socialLinks} size="small" />           
    </footer>
  )
}

export default Footer
