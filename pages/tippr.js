import React, { Fragment } from 'react';
import Head from 'next/head';
import Buttons from 'components/forms/buttons';
import TipprInput from 'components/forms/tippr-input';
import EclipseImagePicker from 'components/forms/eclipse-image-picker';
import Badge from 'components/ui/badge';
import TipprTextArea from 'components/forms/textarea';
import ListCard from 'components/ui/list-card';
import { useRouter } from 'next/router';
import { AddPersonalLinkDrawer } from 'components/drawers/personal-link';

import Link from 'assets/images/link.svg';
import Wallet from 'assets/images/wallet.svg';
import Arrow from 'assets/images/arrow-right.svg';
import { AddCryptoWalletDrawer } from 'components/drawers/crypto-wallet';
import { UpdateSettlementDrawer } from 'components/drawers/update-settlement-account';

export default function Tippr() {
  const router = useRouter();

  const [displayPersonalLinks, togglePersonalLinks] = React.useState(false);
  const handleTogglePersonalLinks = () =>
    togglePersonalLinks(!displayPersonalLinks);

  const [displayCryptoWallet, toggleCryptoWallet] = React.useState(false);
  const handleToggleCryptoWallet = () =>
    toggleCryptoWallet(!displayCryptoWallet);
  return (
    <Fragment>
      <Head>
        <title>Your Tippr Page</title>
      </Head>
      <div className='relative'>
        <div className={'main-container pb-32'}>
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
            handleClick={handleTogglePersonalLinks}
          />

          <div className=''></div>

          <ListCard
            listItems={[]}
            title='Crypto wallets'
            Icon={Wallet}
            handleClick={() => {}}
          />

          <ListCard
            update
            listItems={[
              {
                label: '0142468037',
                value: 'Peter Oghenakhogie Abu-Ekpeshie',
                subtext: 'Guaranty Trust Bank',
              },
            ]}
            title='Settlement account information'
            Icon={Wallet}
            handleClick={() => {}}
          />
        </div>
        <footer className='sticky-footer primary-bg h-20'>
          <div className='sticky-footer-btn-parent'>
            <Buttons
              handleClick={() => router.push('/')}
              state='primary'
              text='Preview page'
              Icon={Arrow}
            />
          </div>
        </footer>
      </div>
      <AddPersonalLinkDrawer
        onClose={handleTogglePersonalLinks}
        isOpen={displayPersonalLinks}
      />
      <AddCryptoWalletDrawer
        onClose={handleToggleCryptoWallet}
        isOpen={displayCryptoWallet}
      />

      <UpdateSettlementDrawer />
    </Fragment>
  );
}
