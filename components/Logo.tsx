import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <Image
      className="logo-main"
      src="/images/logo.webp"
      height={80}
      width={80}
      alt="Main Logo"
      priority
    />
  </Link>
);

export default Logo;