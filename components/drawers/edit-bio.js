import React, { Fragment } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';
import TipprTextArea from 'components/forms/textarea';
import Buttons from 'components/forms/buttons';

export function EditBioDrawer(props) {
  const { isOpen = true, onOpen, onClose } = props;

  return (
    <Fragment>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <span className='text_body block w-full text-center mb-10'>
              Edit your bio
            </span>

            <TipprTextArea label='Bio' placeholder='make it memeorable' />

            <div className='mt-44'>
              <Buttons
                handleClick={() => router.push('/auth/tippr')}
                state='primary'
                text='Update'
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
