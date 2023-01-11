import Head from 'next/head';
import Buttons from 'components/forms/buttons';
import TipprInput from 'components/forms/tippr-input';
import EclipseImagePicker from 'components/forms/eclipse-image-picker';
import Badge from 'components/ui/badge';
import TipprTextArea from 'components/forms/textarea';
import ListCard from 'components/ui/list-card';
import { useRouter } from 'next/router';

import Link from 'assets/images/link.svg';
import Wallet from 'assets/images/wallet.svg';
import Arrow from 'assets/images/arrow-right.svg';

export default function Tippr() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Your Tippr Page</title>
      </Head>
      <div className={'main-container'}>
        <span className='text-center text_body mb-6'>Your Tippr Page</span>
        <div className='flex flex-col items-center'>
          <EclipseImagePicker />
          <Badge text='Add a profile image' />
        </div>

        <TipprInput
          label='Display name'
          name='display_name'
          placeholder='the name people will see on your tippr page'
        />
        <TipprTextArea label='Add a Bio' placeholder='make it memeorable' />

        <ListCard
          listItems={[]}
          title='Personal Links'
          Icon={Link}
          handleClick={() => {}}
        />

        <div className={'after:'}></div>

        <ListCard
          listItems={[]}
          title='Crypto wallets'
          Icon={Wallet}
          handleClick={() => {}}
        />

        <div className={''}></div>

        <footer>
          <Buttons
            handleClick={() => router.push('/')}
            state='primary'
            text='Preview page'
            Icon={Arrow}
          />
        </footer>
      </div>
    </>
  );
}
