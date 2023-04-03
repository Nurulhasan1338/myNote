import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function ALert() {
  return (
    <div>
       <Alert key={'primary'} variant={'primary'}>
          This is a {'primary'} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
    </div>
  )
}
