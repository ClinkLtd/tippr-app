import Head from 'next/head';
import Logo from 'assets/images/tippr-logo.svg';
import Google from 'assets/images/google.svg';
import Facebook from 'assets/images/facebook.svg';
import Twitter from 'assets/images/twitter.svg';
import styles from '../styles/pages/index.module.scss';
import Buttons from 'components/forms/buttons';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleLogin = e => {
    e.preventDefault();
    router.push('/auth/verify-identity');
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.main}>
        <div aria-hidden='true'></div>
        <div className={styles.brand_tagline_wrapper}>
          <div className={styles.brand_wrapper}>
            <Logo />
            <h1 className='brand_text'>Tippr</h1>
          </div>
          <p className='text_body'>Accept donations and tips from anyone</p>
        </div>

        <div className={styles.auth_buttons}>
          <Buttons
            Icon={Google}
            state='auth'
            text='Continue with Google'
            handleClick={handleLogin}
          />
          <Buttons
            Icon={Facebook}
            state='auth'
            text='Continue with Facebook'
            handleClick={handleLogin}
          />
          <Buttons
            Icon={Twitter}
            state='auth'
            text='Continue with Twitter'
            handleClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
}
