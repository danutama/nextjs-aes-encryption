export const metadata = {
  title: 'AES Encryption | Secure Files',
  description: 'Encrypt and decrypt your files securely using AES 128/192/256 bit encryption technology.',
};

export default function StartLayout({ children }) {
  return (
    <section id="enkripsi" className="container py-5">
      {children}
    </section>
  );
}
